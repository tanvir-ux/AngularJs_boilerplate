var videoApp = angular.module('videoApp',[]);


videoApp.controller('mainCtrl',function($scope,$http){
    $http.get('/product.json').success(function(data){
        
        $scope.products = data;
        
        
        
    });
});