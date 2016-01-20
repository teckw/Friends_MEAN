// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function() {
 return {
  show: function(req, res) {
     Friend.find({}, function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
	})
  },

  post: function(req, res){
  	Friend.create(req.body, function(hello, results){
  		if(hello){
  			console.log(hello);
  		} else {
  			res.json(results);
  		}
  	});
  },

  destroy: function(req, res){
  	Friend.remove({_id: req.body._id}, function(err, friend){
  		if(err){
  			console.log("Theres an error");
  		} else {
  			res.redirect('/');
  		}
  	})
  }



 }
})();