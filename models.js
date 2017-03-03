const uuid = require('uuid');
const mongoose = require('mongoose');
const express = require('express');



////use mongoose models:
const LocationsSchema = mongoose.Schema({
	id: {type: ObjectId, required: true},
	userId: {type: String, required: true},
	address: {type: String},
	latitude: {type: String},
	longitude: {type: String},
	notes: {type: String}
});

//Virtual for LatAndLng
LocationsSchema.virtual('latAndLng').get(function(){
	console.log(`latAndLng trying to be set to ${latAndLng}`);
});

LocationsSchema.methods.apiRepr = function(){
	return {
		id: this.id,
		userId: this.userId,
		address: this.address,
		latitude: this.latitude,
		longitude: this.longitude,
		notes:this.notes
	};
}

const Location  = mongoode.model('Locations', LocationsSchema);

module.exports = {Locations};


