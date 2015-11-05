angular.module('rdmApp').service('productService', function(){
    
    var products = [{
        name: 'Pokemon Cards',
        image: 'http://img.beckett.com/images/opg/opg-icons/pokemon.jpg',
        desc: 'so shiney, so fiery, so pokemon, yo want!',
        price: 3.50
      },{
        name: 'Marty Mcfly Shoes',
        image: 'https://jasonthomasarchitect.files.wordpress.com/2011/09/marty-mcfly-nike-mag.jpg?w=479',
        desc: 'Amaging!',
        price: 10000
      }];
    
    this.addProduct = function(product){
        products.push(product);
    }
    
    this.getProducts = function(){
        return products;
    }
});