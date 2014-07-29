'use strict';

//Declaration des modules de l'application
angular.module('myApp', [
  'ngRoute',
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.constants',
  'myApp.resources',
  'duScroll',
  'ui.bootstrap'

]).value('duScrollDuration', 1500).
//Configuration de l'application, avant son lancement
config(['$routeProvider','$locationProvider',function ($routeProvider, $locationProvider) {

  //Paramétrage des routes
  $routeProvider.
    when('/home', {
      templateUrl: 'partials/home',
      controller: 'HomeCtrl'
    }).
    when('/main', {
          templateUrl: 'partials/main',
          controller: 'MainCtrl'
    }).
    otherwise({
      redirectTo: '/home'
    });

  //Mode HTML5
  $locationProvider.html5Mode(true);

}]).
//Action réalisés au lancement de l'application
run(['$rootScope','$location',function($rootScope, $location){

  //Definition des composant présent dans la navbar
  // TO DO=> Recupérer depuis le serveur
  $rootScope.menu= [
    {name: "Education", function : 'education()', icon : "glyphicon glyphicon-th", rang: "5", url:"#education"},
    {name: "Experience", function: 'experience()', icon : "glyphicon glyphicon-wrench", rang: "4", url:"#experience"},
    {name: "Computer Skills", function : 'computerSkills()', icon : "glyphicon glyphicon-log-out", rang: "3", url:"#skills"},
    {name: "About", function : 'aboutMyself()', icon : "glyphicon glyphicon-log-out", rang: "2", url:"#about"},
    {name: "Blog", function : 'blog()', icon : "glyphicon glyphicon-log-out", rang: "1", url:"#blog"},
    {name: "Contact", function : 'contact()', icon : "glyphicon glyphicon-log-out", rang: "0", url:"#contact"}
  ]


  //Interprete le string en fonction
  $rootScope.executeString= function(string){
    var val="$rootScope."+string;
    eval(val)
  };

}]);

//Declaration de l'application

//Declaration de la variable de controlleurs globale de l'application
var app = angular.module('myApp.controllers', []);

//Declaration de la variable des directives globale de l'application
var directives = angular.module("myApp.directives", []);

//Declaration de la variable de ressource globale de l'application
var resources = angular.module('myApp.resources', ["ngResource"]);

//Declaration de la variable de service globale de l'application
var services = angular.module("myApp.services", []);

//Declaration de la variable de constante globale de l'application
var constants = angular.module('myApp.constants', [])

//Declaration de la variable des filtres de l'application
var filtres = angular.module('myApp.filters', [])