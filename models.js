const uuid = require('uuid');
const mongoose = require('mongoose');
const express = require('express');



function storageException(message){
	this.message = message;
	this.name = "storageException";
}

const Locations = {
	create: function(latitude, longitude, address, userId, notes, id){
		console.log(`creating a location ${address}`);
		const location = {
			id: uuid.v4(),
			userId: uuid.v2(),
			address: address,
			latitude: latitude,
			longitude: longitude,
			notes: notes
		};
		this.Locations.push(location);
		return location;
	},
	get: function(userId){
		console.log(`getting a specific location for the UserId ${userId}`);
		if(userId !== null){
			return this.Locations.find(location => location.id === id);
		}
		return this.Locations
	},
	get:function(id){
		console.log(`getting a specific location for the id ${id}`);
		if(userId !==null){
			return this.Locations.find(location => location.id ===id);
		}
		return this.Locations
	},
	///removed the userId for now, but should have as a parameter
	update: function(updatedItem){
		console.log(`updating the location with an id of ${updatedItem.id}`);
				///add validation for userId
		const {id} = updatedItem;
		const locationIndex = this.Locations.findIndex(
			location => location.id ===updatedItem.id);
		if( locationIndex === -1){
			throw storageException(
				`Can't update item \'${updateItem.id}\' becuase it doesn't exist.`)
		}
		this.Locations[locationIndex] = Object.assign(
			this.Locations[locationIndex], updatedItem);
		return this.Locations[locationIndex];
	},
	///removed the userId request parameter for now, should have in the future
	delete: function(id){
		console.log(`deleting the location with an id of \'${id}\'`);
		
		///add validation for userId
		const locationIndex = this.Locations.findIndex(
			location => location.id ===updatedItem.id);
		if(locationIndex > -1){
			this.Locations.splice(locationIndex, 1);
		}
	}
};

///potentially do not need
function createLocationsModel(){
	const storage = Object.create(Locations);
	storage.Locations = [];
	return storage;
};

module.exports = {Locations: createLocationsModel()};