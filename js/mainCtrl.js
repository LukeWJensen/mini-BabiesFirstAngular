var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){

	$scope.name = 'Luke';

	$scope.friends = [
		'Michelle',
		'Bryce',
		'Trevor',
		'Kyle',
		'Seoinin',
		'Cathy',
		'James',
		'Kirk',
		'Nui'
	];

	$scope.addFriend = function(){
		$scope.friends.push($scope.newFriend);
		$scope.newFriend = null;
	}

});