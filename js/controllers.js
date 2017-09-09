var productControllers = angular.module('productControllers', []);

productControllers.controller('ListController', ['$scope','$rootScope', '$http', function($scope,$rootScope, $http) {
   $http.get('js/JsonFormatter.json').success(function(data) {
    $scope.artists = data;
    });
    $scope.addItem = function(item)
    {
        $rootScope.list.push(item);
        console.log($rootScope.list);
    };
    $scope.removeItem = function(item)
    {
      var index=$scope.list.indexOf(item);
        $rootScope.list.splice(index,1);
    };
}]).controller('DetailsController', ['$scope','$http','$routeParams',
    function($scope, $http,$routeParams)
    {
        $http.get('js/JsonFormatter.json').success(function(data)
        {
            $scope.artists = data;
            console.log($routeParams.itemId);
            console.log($scope.artists.items[$routeParams.itemId]);
            $scope.item=$scope.artists.items[$routeParams.itemId];
        });
    }]);