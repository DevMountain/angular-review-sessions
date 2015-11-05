angular.module('rdmApp')
    .directive('product', function(){
    
    return {
        templateUrl: 'js/directives/productTmpl.html',
        scope: {
            prod: '='
        },
        controller: function($scope, $filter){
          $scope.prod.priceFormatted = $filter('currency')($scope.prod.price, '$', 2)
          $scope.addToCart = function(){
//           cartService.addToCart($scope.prod);
          }
        },
        link: function(scope, elem, attrs){
            
        }
    }
});