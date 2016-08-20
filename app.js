// declaring our blog module
var MyBlog = angular.module("MyBlog", []);

MyBlog.controller('SimpleCtrl', ['$scope', function($scope){
	//let's add the articles 
	$scope.articles = [
		
		{title: 'This a sampe article', likes:2  },	             
		{title:  'I love angularjs',  likes:5   },
		{title:  'Angularjs is fun',  likes:10  },
		{title:  'Angularjs is notfun', likes:0 } 
		
		            ];
		
}]);