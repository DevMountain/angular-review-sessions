angular.module('rdmApp').controller('homeCtrl', function($scope, productService){
    $scope.products = productService.getProducts();
    
    $scope.dogs = [
        {name: 'Aussie', price: 5},
          {name: 'Husky', price: 35},
         {name: 'German Shepard', price: 245},
         {name: 'Growlith', price: 1585}
        ]
});