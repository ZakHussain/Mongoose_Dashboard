var mongoose = require('mongoose');

var SeaSlugSchema = new mongoose.Schema({
	genus: String, 
	species: String, 
	description: {color: String, length: Number, behavior: String}
})

mongoose.model('Slugs', SeaSlugSchema); 
