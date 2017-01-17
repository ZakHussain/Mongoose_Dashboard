
var slugs = require('../controllers/slugs.js');

module.exports = function(app){
	
	app.get('/', function(request, response){
		slugs.home(request, response); 
	})
	app.get('/slugs/new', function(request, response){
		slugs.new_slug(request, response);
	})
	app.post('/slugs', function(request, response){
		slugs.new_slug_data(request,response);
	})

	app.get("/slugs/:_id", function(request, response){
		slugs.description(request, response);
	})
	app.post("/slugs/:_id", function(request, response){
		slugs.edit_info(request, response);
	}); 

	app.get("/slugs/:_id/edit", function(request, response){
		slugs.show_edited_page(request, response);
	})

	app.get("/slugs/:_id/destroy", function(request, response){
		slugs.remove(request, response); 
	})
}

