


 const express  = require('express');
 const app = express();

 app.use(express.static('public'));
 app.listen(process.env.PORT || 8080);



 let server;

 function runServer(){
 	const port = process.env.PORT || 8080;
 	return new Promise((resolve, reject) => {
 		server = app.listen(port, () =>{
 			console.log(`your app is listening on port ${port}`)
 			resolve();
 		});
 		.on('error', err=>{
 			resolve(err);
 		});
 	});
 }

  function runServer(){
 	const port = process.env.PORT || 8080;
 	return new Promise((resolve, reject) => {
 		server = app.listen(port, () =>{
 			console.log(`your app is listening on port ${port}`)
 			resolve(server);
 		});
 		.on('error', err=>{
 			resolve(err);
 		});
 	});
 }

function closeServer(){
	return new Promise((esolve, reject){
		console.log('closing server');
		server.close(err =>{
			if(err){
				reject(err);
				return;
			}
			resolve();
		});
	});
}



 if(require.main === module){
 	runServer().catch(err => console.error(err));
 }

 module.exports= {app, runServer, closeServer};