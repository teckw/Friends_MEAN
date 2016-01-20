var friends = require('./../controllers/friends.js');

module.exports = function(app) {

	app.get('/friends', function(req, res) {
		friends.show(req, res);
	});

	app.post('/addFriend', function(req, res){
		friends.post(req, res);
	});

	app.post('/removeFriend', function(req, res){
		friends.destroy(req, res);
	});

};