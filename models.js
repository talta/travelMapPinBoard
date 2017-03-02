const uuid = require('uuid');
const mongoose = require('mongoose');



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
	}
	update: function(updatedItem, userId){
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
	delete: function(id, userId){
		console.log(`deletsing the location with an id of \'${id}\'`);
		
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