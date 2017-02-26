const chai  = require('chai');
const chaiHttp = require('chai-http');

const should = require('chai').should();

const exists = require('../server.js');

const {app, runServer, closeServer} = require('../server.js');


chai.use(chaiHttp);

describe('exists', function(){
	it('should have a index.html file in order to operate', function(done){
		chai.request(app)
		.get('/')
		.end(function(err, res){
			res.should.have.status(200);
			res.should.be.html;
			done()
		});

	});
});

describe('locations severed', function(){
	it('should get and display locations to the html', function(done){
		chai.request(app)
		.get('/')
		.end(function(err, res){
			res.should.have.status(200);
			res.should.be.html;
			res.body.length.should.be.at.least(1);
			res.body.should.be.a('object');
			const expectedKeys = ["city-country", "latitude", "longitude", "notes"];
			res.body.forEach(function(item){
				item.should.be.a('object');
				item.should.include.keys(expectedKeys);
			});
		});
	});
});


