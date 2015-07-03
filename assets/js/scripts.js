var app = angular.module('expansesApp', [])
app.controller('controlador', ['$scope', function($scope) {
	$scope.dados = [
     		{
				number: 1,
				status: 'active',
				cod: 10	
			},
			{
				number: 2,
				status: 'undefined',
				cod: 11	
			},
			{
				number: 3,
				status: 'visited',
				cod: 13	
			},
			{
				number: 4,
				status: 'testado',
				cod: 14	
			}
     	];  
}]);
