//this will hold logic
//we will create methos to handle 
//tasks that get triggered on specific routes
var mongoose = require('mongoose');
var Slug = mongoose.model('Slugs');

module.exports = {
	home: function(request, response) {
		Slug.find({}, function(err, slugs){
			if(err) {
				response.send("Failed")
			}
			else{
				// console.log(slugs); 
				response.render('index', {Slugs: slugs}); 
			}
		})
	},
	new_slug: function(request, response) {
		response.render('new');
	},
	new_slug_data: function(request, response){
		// console.log("POST DATA", request.body); 
		var slug = new Slug({ 
			// slug.genus  = req.body.genus; 
			// slug.species = req.body.species; 
			// slug.description =  {color: request.body.color, length: request.body.length, behavior: request.body.behavior};
			genus: request.body.genus, 
			species: request.body.specie, 
			description: {color: request.body.color, length: request.body.length, behavior: request.body.behavior}	
		})
		slug.save(function(err){
			if(err) {
				console.log("something went wrong"); 
			}
			else{
				console.log("successfully added a slug!"); 
				response.redirect('/')
			}
		})		
	},
	description: function(request, response) {
		Slug.findOne({_id : request.params._id}, function(err, slug){
			if(err) { 
			}
			else{
				response.json(slug);
			}
		})		
	},
	edit_info: function(request, response) {
		console.log(request.body);
		Slug.update({_id : request.params._id}, 
		{$set : {genus: request.body.genus, species: request.body.specie, "description.color": request.body.color, "description.length": request.body.length, "description.behavior": request.body.behavior}},
		function(err, slug){
			console.log(slug);
			if(err){
				response.send("something broke here");
			}
			else{
				response.redirect('/')
			}
		})		
	},
	show_edited_page: function(request, response) {
		Slug.findOne({_id: request.params._id}, function(err, slug){
			if(err) {
				response.render("Fail");
			}
			else{
				response.render('edit', {Slugs : slug});
			}
		})		
	},
	remove: function(request, response) {
		Slug.remove({_id: request.params._id}, function(err){
			console.log("removal successful");
			response.redirect('/');
		})		
	}
}