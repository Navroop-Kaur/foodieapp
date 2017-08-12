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


foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	$scope.restaurantId = $routeParams.id;
	var nonveg_ingredients=['egg','chicken','beef','gelatin','fish',
                                        'meat','pig','prones','crab','liver','blood',
                                        'bones','mayonnaise','meat tikki','cake','seafood','barbecue'];
	var restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
	bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
}
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
	image: 'https://tobuz.com/wp-content/uploads/2016/12/sweet-tooth-fairy-bakery-5.jpg',
	bestDish: {
	name: 'Hamburger',
	image: 'http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg'
}
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
	image: 'https://www.parktheatre.co.uk/media/images/coffee-cake.jpg',
	bestDish: {
	name: 'Kathi Roll',
	image: 'http://www.namakswadanusar.com/wp-content/uploads/2016/05/26603413574_37ee211758_k.jpg'
}
},
{
	name: 'Hot Shot',
	address: '39, Level 5, Block A , City Center, Paris',
	location: 'Connaught Place',
	category: 'Bar & Restaurant ',
	vote: '5.0',
	cuisines: 'Modern Indian',
	cost: '2500',
	hours: '1 Noon to 3 AM (Mon-Sun)',
	image: 'http://del.h-cdn.co/assets/15/42/1444942234-delish-glow-food-jello-shots-recipe.jpg',
	bestDish: {
	name: 'Chicken',
	image: 'https://beautyhealthtips.in/wp-content/uploads/2016/06/Advantages-and-disadvantages-of-non-veg-food.jpg'
}
},
{
	name: 'Super Indian',
	address: '39, Level 5, Block A , City Center, Paris',
	location: 'Connaught Place',
	category: 'Dining',
	vote: '5.0',
	cuisines: 'Modern Indian',
	cost: '2500',
	hours: '1 Noon to 3 AM (Mon-Sun)',
	image: 'https://media.licdn.com/mpr/mpr/p/7/005/095/1a1/3f559d6.jpg',
	bestDish: {
	name: 'Channa Bhutra',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTri-M_loFjZ03z8XayEua15YiBzbc49ca4BhDwRjSjfPKm5JbsA'
}
}];
	$scope.restaurant = restaurants[$routeParams.id - 1];
	  $scope.flag=0;
	$scope.getIngredients = function(url) {
		console.log(url);
		$scope.flag=1-$scope.flag;
            	console.log($scope.flag);
		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
$http({
	'method': 'POST',
	'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
	'headers': {
		'Authorization': 'Key fbdc6327653d422ab95c17cfc65b7fb9',
		'Content-Type': 'application/json'
	},
	'data': data,
}).then(function (response) {
			var ingredients = response.data.outputs[0].data.concepts;
			$scope.ingredients = [];
			    $scope.grocery_list=[];
 			for (var i =0;i < ingredients.length;i++) {
				if(ingredients[i].value>0.75)
	{
  				$scope.ingredients.push(ingredients[i].name);
  			}
			}
			for(var j=0;j<nonveg_ingredients.length;j++)
                {
                    var a = nonveg_ingredients.indexOf($scope.ingredient[j]);
                    if(a>=0)
                    {
                        $scope.msg="This Food Item is not for vegetarians";
                        console.log($scope.msg);
                        break;
                    }
                }
								console.log(a);
    		// $('.ingredients').html(list);
				// console.log(list);
    		}, function (xhr) {
        	console.log(xhr);
  });
	// success: function (response) {
	// 	var ingredients = response.outputs[0].data.concepts;
	// 		var list = '';
	// 		for (var i =0;i < ingredients.length ;i++) {
	// 			list += 'div class="ingredient">' + ingredients[i].name + '</div>'
	// 		}
	// 	$('.ingredients').html(list);
  //   },
  //   error: function (xhr) {
  //   	console.log(xhr);
  //   }
}
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
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
	id:1
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
	image: 'https://tobuz.com/wp-content/uploads/2016/12/sweet-tooth-fairy-bakery-5.jpg',
	id:2
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
	image: 'https://www.parktheatre.co.uk/media/images/coffee-cake.jpg',
	id:3
},
	{
		name: 'Hot Shot',
		address: '39, Level 5, Block A , City Center, Paris',
		location: 'Connaught Place',
		category: 'Bar & Restaurant',
		vote: '5.0',
		cuisines: 'Modern Indian',
		cost: '2500',
		hours: '1 Noon to 3 AM (Mon-Sun)',
		image: 'http://del.h-cdn.co/assets/15/42/1444942234-delish-glow-food-jello-shots-recipe.jpg',
		id:4
	},
	{
		name: 'Super Indian',
		address: '39, Level 5, Block A , City Center, Paris',
		location: 'Connaught Place',
		category: 'Dining',
		vote: '5.0',
		cuisines: 'Modern Indian',
		cost: '2500',
		hours: '1 Noon to 3 AM (Mon-Sun)',
		image: 'https://media.licdn.com/mpr/mpr/p/7/005/095/1a1/3f559d6.jpg',
		id:5
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
