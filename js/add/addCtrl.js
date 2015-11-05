angular.module('rdmApp').controller('addCtrl', function($scope, productService, $state){
   
    $scope.submit = function(){
      var product = {
        name: $scope.name,
        image: $scope.image,
        desc: $scope.description,
        price: $scope.price
      }
      productService.addProduct(product);
      $state.go('home');
    }
});