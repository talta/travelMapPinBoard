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

