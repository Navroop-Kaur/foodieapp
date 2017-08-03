// Runs when HTML file is loaded
// $('#user-email').on('input',function() {
//         var email = $('#user-email').val()
//         var message = 'Welcome Back, ' + email;
//         $('.welcome-message').text(message);
//     });

var foodieApp = angular.module('foodieApp',['ngRoute']);
console.log(foodieApp);


foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
			// console.log('Do Something')
			$location.url('home');
		}

})


foodieApp.controller('restaurantController',function($scope,$routeParams) {
	$scope.restaurantId = $routeParams.id;
	var restaurants = 'Paste your restaurant Object here'
	$scope.restaurant = restaurants[$routeParams.id - 1];
})



foodieApp.controller('mainController',function($scope) {
	$scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
	name: 'Priates Cafe',
	address: '38, Level 10, Block C , South Wales,',
	location: 'Connaught Place',
	category: 'Bakery',
	vote: '4.5',
	cuisines: 'Modern Indian',
	cost: '220',
	hours: '10 AM to 1 PM (Mon-Sun)',
	image: 'https://tobuz.com/wp-content/uploads/2016/12/sweet-tooth-fairy-bakery-5.jpg'
},
{
	name: 'Lazy Panda Cafe',
	address: '39, Level 5, Block A , City Center, Paris',
	location: 'Connaught Place',
	category: 'Dining, Bar , Cafe',
	vote: '5.0',
	cuisines: 'Modern Indian',
	cost: '2500',
	hours: '1 Noon to 3 AM (Mon-Sun)',
	image: 'https://www.parktheatre.co.uk/media/images/coffee-cake.jpg'
}];

})




foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})
