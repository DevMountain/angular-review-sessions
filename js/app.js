angular.module('rdmApp', ['ui.router'])

.config(function($stateProvider){
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .state('add',{
            url: '/add',
            templateUrl: 'js/add/addTmpl.html',
            controller: 'addCtrl'
        })
    
})