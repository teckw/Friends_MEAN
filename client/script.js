var friends_app = angular.module('friends_app', []);
// Now lets create a controller with some hardcoded data!
friends_app.controller('FriendsController', function($scope) {
    $scope.friends = [{name: "Michael", age: 34}, {name: "Andrew", age: 24}];
    $scope.addfriend = function() {
        $scope.friends.push({name: $scope.new_friend.name, age: $scope.new_friend.age});
        $scope.new_friend = {};
    }
})

friends_app.factory('FriendFactory', function() {
	var factory = {};
	var friends = [];
	factory.getFriends = function() {
		return friends;
	}
	// note the use of callbacks!
	factory.addFriend = function(info, callback) {
		friends.push({name: info.name, age: info.age});
		callback(friends);
	}
	return factory;
});

friends_app.controller('FriendsController', function($scope, FriendFactory) {
	// rest of the controller code
	$scope.friends = FriendFactory.getFriends();
	$scope.addfriend = function() {
  // note the use of callbacks here
	FriendFactory.addFriend($scope.new_friend, function() {
			$scope.friends = FriendFactory.getFriends();
			$scope.new_friend = {};
		});
	}
});