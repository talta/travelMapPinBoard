const express = require('express');
const router = express.Router();


const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jsonParser  = bodyParser.json();


const {Locations} = require('./models.js');

router.get('/mapLocations/:userId', (req, res) => {
	res.json(Locations.get(req.params.userId));
	console.log(`get the location for the ${req.params.id}`);
	res.status(201);
});

router.get('/mapLocation/:id', (req, res) => {
	res.json(Locations.get(req.params.id));
	console.log(`get the location for ${req.params.id}`);
	res.status(201);
});

router.post('/mapLocation', (req, res) => {
	const requiredFields = ['address', 'latitude', 'longitude', 'notes', 'userId', 'id'];
	for(let i=0; i< requiredFields.length; i++){
		const field  = requiredFields[i];
		if(!(field in req.body)){
			const message = `Missing \`${field}\` in the request body.`;
			console.log(message);
			return res.status(400).send(message);
		}
	}
	///find a better way to create this model with mongoose
	///add the userId to this model
	const item = Locations.create(req.body.address, req.body.latitude, req.body.longitude, request.body.notes);
	res.status(202).json(item);
});

router.put('/mapLocation/:id', (req, res) => {
	const requiredFields = ['notes', 'latitude', 'longitude', 'id', 'userId', 'address'];
	for(let i=0; i< requiredFields.length; i++){
		const field  = requiredFields[i];
		if(!(field in req.body)){
			const message = `Missing \`${field}\` in the request body.`;
			console.log(message);
			return res.status(400).send(message);
		}
	}
	if(req.params.id !== req.body.id){
	const message = (`The requesting ID of \`${req.params.id}\` and the request body ID of \`${req.body.id}\` do not match.`);
	console.error(message);
	return res.status(400).send(message);
	}
	console.log(`updating the location with the ID of ${req.params.id}`);
	const updatedItem = Locations.update({
		id: req.params.id,
		notes: req.body.notes
	});
	res.status(203).json(updatedItem);
});


router.delete('/mapLocation/:id', (req, res) => {
	Locations.delete(req.params.id);
	console.log(`location deleted with the ID of ${req.params.id}`);
	res.status(204).end();
});


module.exports = {router};
