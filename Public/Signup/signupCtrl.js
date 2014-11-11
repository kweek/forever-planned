var app = angular.module('wedding');
app.controller('signupCtrl', function($scope, $cookieStore, authService){
	$scope.user = {}


	var signUp = function(){
		if($scope.user.password !== $scope.user.password2){
			$scope.user.password2 = '';
			alert('Your passwords do not match');
			return //we don't want it to go to the service
		}
		delete $scope.user.password2
		authService.signupUser($scope.user)
		.then(function(res){
			var user = res;
			$cookieStore.put('user', user);
		})
		//$scope.user - delete password2, the user model won't accept it.
		//talk to service to submit data
		//$cookieStore.put('user', returned user data from promise from service);
	}
})