var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        .when('/kipur', {
            templateUrl : 'pages/kipur.html',
            controller  : 'KipurController'
        })

        .when('/av', {
            templateUrl : 'pages/av.html',
            controller  : 'avController'
        })

        .when('/gad', {
            templateUrl : 'pages/gad.html',
            controller  : 'gadController'
        })

        .when('/aser', {
            templateUrl : 'pages/aser.html',
            controller  : 'aserController'
        })

        .otherwise({redirectTo: '/'});
});

app.controller('KipurController', function($scope) {

    $scope.title = "צום יום  הכיפורים";
    $scope.message_header = "https://he.wikipedia.org/wiki/%D7%99%D7%95%D7%9D_%D7%94%D7%9B%D7%99%D7%A4%D7%95%D7%A8%D7%99%D7%9D";
    $scope.imgae = "img/kipur.jpg";
});

app.controller('avController', function($scope) {
    $scope.title = "צום תשעה באב";
    $scope.message_header = "https://he.wikipedia.org/wiki/%D7%AA%D7%A9%D7%A2%D7%94_%D7%91%D7%90%D7%91";
    $scope.imgae = "img/av.jpg";
});

app.controller('gadController', function($scope) {
    $scope.title = "צום גדליה";
    $scope.message_header = "https://he.wikipedia.org/wiki/%D7%A6%D7%95%D7%9D_%D7%92%D7%93%D7%9C%D7%99%D7%94";
    $scope.imgae = "img/gad.png";
});
app.controller('aserController', function($scope) {
    $scope.title = "עשרה בטבת";
    $scope.message_header = "https://he.wikipedia.org/wiki/%D7%A2%D7%A9%D7%A8%D7%94_%D7%91%D7%98%D7%91%D7%AA";
    $scope.imgae = "img/aser.png";
});
