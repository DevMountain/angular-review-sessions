angular.module('pretend')
    .service('pretendHttpService', function($http){
    //this = {} steve
    
    this.getUnicorns = function(){
     
        var promise = $http({
            method: 'GET',
            url: 'https://sparklesandrainbows.com/api/unicons'
        })
        
        promise.then(function (unicornResponse) {
          if(unicornResponse.status !== 200){
            //Handle the error
          } else {
             return unicornResponse.data ;  
          }
        }).then(function (justTheUnicorn){
            unicorn.addRider(me);
            return unicorn;
        })
        
        return promise;
    }
    //return steve
})



this.service('configService', function($q, $http){
    
    var config = null;
    
    this.getConfig = function(){
        
        var defer = $q.defer();
        
        if(config){
          defer.resolve(config);   
        } else {
            $http.get('http://mysite.com/api/config')
                .then(function(response){
                config = response.data;
                defer.resolve(config);
            }
        }
        
        return defer.promise;
    }
}