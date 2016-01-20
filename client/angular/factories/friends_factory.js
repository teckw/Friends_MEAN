friends_app.factory('FriendFactory', function($http) {
      var factory = {};
      var friends = [];

      factory.getFriends = function(callback) {

        $http.get('/friends').success(function(output){

          friends = output;

          callback(friends);

        });

      };
      // note the use of callbacks!
      factory.addFriend = function(info, callback) {

        $http.post('/addFriend', info).success(function(output){

          friends.push({name: info.name, age: info.age});

        });
        // friends.push({name: info.name, age: info.age});
/*        callback(friends);*/
      };

      factory.removeFriend = function(info, callback){
        $http.post('/removeFriend', info).success(function(info){

        })
      }

      return factory; //ALWAYS RETURN FACTORY

    });