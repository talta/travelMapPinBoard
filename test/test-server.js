
const chai  = require('chai');
const chaiHttp = require('chai-http');

const should = require('chai').should();

const exists = require('../server.js');

const {app, runServer, closeServer} = require('../server.js');


chai.use(chaiHttp);





// describe('Pins', function(){
// 	before(function(){
// 		return runServer();
// 	});

// 	after(function(){
// 		return closeServer();
// 	});

// 	it('should get list of pins on get', function(){
// 		return chai.request(server)
// 		.get('/pins')
// 		.then(function(res){
// 			res.should.have.status(200);
// 			res.should.be.json;
// 			res.body.should.be.a('array');
// 			res.body.forEach(function(pin){
// 				item.should.be.a('object');
// 				item.should.have.all.keys(
// 					'id', 'latitude', 'longitude', 'notes'
// 					)
// 			});
// 		});
// 	});
// });
