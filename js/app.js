var myApp = angular.module('myApp', [
    'ngRoute',
    'productControllers'
]);

myApp.run(function ($rootScope)
{
    $rootScope.list = [];
});
myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'ListController'
    }).
    when('/details/:itemId',{
        templateUrl:  'partials/details.html',
        controller: 'DetailsController'
    }).
    otherwise({
        redirectTo: '/list'
    });
}]);