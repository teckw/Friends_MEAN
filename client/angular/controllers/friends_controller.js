var friends_app = angular.module('friends_app', []);

friends_app.controller('FriendsController', function($scope, FriendFactory) {

  FriendFactory.getFriends(function(data){

    $scope.friends = data;

  });

    $scope.addfriend = function() {

    FriendFactory.addFriend($scope.new_friend, function(){

          $scope.friends = FriendFactory.getFriends();

          $scope.new_friend = {};

        });

    };
    $scope.removeFriend = function(friend){

        FriendFactory.removeFriend(friend);

        FriendFactory.getFriends(function (data){
            
            $scope.friends = data;

        })
    }
});