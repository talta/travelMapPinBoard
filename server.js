

const bodyParser = require('body-parser');
 const express  = require('express');
 const mongoose = require('mongoose');
 const app = express();
 const {PORT, DATABASE_URL} = require('./config.js');
 const {router} = require('./location-router.js');

 mongoose.Promise = global.Promise;


 app.use(express.static('public'));

///causing all of my requests to fail:
// app.use('*', function(req, res){
// 	res.status(404).json({message: 'Not Found'});
// });


 let server;

 function runServer(databaseUrl = DATABASE_URL, port = PORT){
 	return new Promise((resolve, reject) => {
 		mongoose.connect(databaseUrl, err =>{
 			if(err){
 				return reject(err);
 			}
 			server = app.listen(port, () =>{
 				console.log(`your app is listening on port ${port}`)
 				resolve();
 			})
 			.on('error', err => {
 				mongoose.disconnect();
 				reject(err);
 				console.error(DATABASE_URL + PORT);
 			});
 		});
 	});
 }



function closeServer(){
	return mongoose.disconnect().then(() => {
		return new Promise((resolve, reject) =>{
			console.log('closing server');
			server.close(err =>{
				if(err){
					reject(err);
					return;
				}
				resolve();
			});
		});
	});
}



 if(require.main === module){
 	runServer().catch(err => console.error(err));
 }

 module.exports= {app, runServer, closeServer};