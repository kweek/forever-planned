var app = angular.module('wedding');

app.controller('homeCtrl', function($scope, $cookieStore, $window, $state, $location){
	
	
	$scope.logout = function(){
		$cookieStore.remove('currentUser');
	}
	if(!$scope.currentUser){
		$location.path('/login');
	} else if ($state.params.userid !== $scope.currentUser._id){
		$location.path('/login');
	}
	
})