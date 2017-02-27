const uuid = require('uuid');
const mongoose = require('mongoose');



function storageException(message){
	this.message = message;
	this.name = "storageException";
}

const Locations = {
	create: function(latitude, longitude, address){
		console.log(`creating a location ${address}`);
		const location = {
			id: uuid.v4(),
			address: address,
			latitude: latitude,
			longitude: longitude,
			notes: notes
		};
		this.Locations.push(location);
		return location;
	},

	get: function(id){
		console.log(`getting a specific location for the id ${id}`);
		if(id !== null){
			return this.Locations.find(location => location.id === id);
		}
		return this.Locations
	},

	update: function(updatedItem){
		console.log(`updating the location with an id of ${updatedItem.id}`);
		const {id} = updatedItem;
		const pinIndex = this.Locations.findIndex(
			pin => pin.id ===updatedItem.id);
		if( pinIndex === -1){
			throw storageException(
				`Can't update item \'${updateItem.id}\' becuase it doesn't exist.`)
		}
		this.Locations[pinIndex] = Object.assign(
			this.Locations[pinIndex], updatedItem);
		return this.Locations[pinIndex];
	},
	delete: function(id){
		console.log(`deletsing the location with an id of \'${id}\'`);
		const pinIndex = this.Locations.findIndex(
			pin => pin.id ===updatedItem.id);
		if(pinIndex > -1){
			this.Locations.splice(pinIndex, 1);
		}
	}
};


function createPinsModel(){
	const storage = Object.create(Locations);
	storage.pins = [];
	return storage;
};

module.exports = {Locations: createPinsModel()};