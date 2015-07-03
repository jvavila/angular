var app = angular.module('expansesApp', [])
app.controller('controlador', ['$scope', function($scope) {
	$scope.dados = [
     		{
				number: 1,
				status: 'active',
				cod: 10,
				members: ["Mark", 18, "BR"]	
			},
			{
				number: 2,
				status: 'undefined',
				cod: 11,
				members: ["Robert", 22, "BR"]	
			},
			{
				number: 3,
				status: 'visited',
				cod: 13,
				members: ["Carlos", 33, "BR"]	
			},
			{
				number: 4,
				status: 'testado',
				cod: 14,
				members: ["Jhon", 15, "BR"]	
			}
     	];  
}]);
