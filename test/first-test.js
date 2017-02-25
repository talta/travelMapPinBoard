const chai  = require('chai');
const chaiHttp = require('chai-http');

const should = require('chai').should();

const exists = require('../server.js');

const {app, runServer, closeServer} = require('../server.js');


chai.use(chaiHttp);

describe('exists', function(){
	it('should have a server.js file in order to operate');
});


