angular.module('emp').component('dashboard', {
  templateUrl:  'components/dashboard/dashboard.html',
  controller:'dashboardCtrl'
})

.controller('dashboardCtrl',  ['$scope', function ($scope) { 

	$scope.tabs=['Home','About','Discussion','Logout'];
	console.log('asd')
}]);