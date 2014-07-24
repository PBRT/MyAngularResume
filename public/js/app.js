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
  'ui.bootstrap',
  // 3rd party dependencies
  'btford.socket-io'

]).value('duScrollDuration', 1500).
//Configuration de l'application, avant son lancement
config(function ($routeProvider, $locationProvider) {

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

}).
//Action réalisés au lancement de l'application
run(function($rootScope, $location){

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

  //Fonction associées au menu
  $rootScope.education = function(){
    $location.path('/education')
  };
  $rootScope.experience = function(){
    $location.path('/experience')
  };
  $rootScope.computerSkills = function(){
    $location.path('/computerSkills')
  };
  $rootScope.aboutMyself = function(){
    $location.path('/aboutMyself')
  };
  $rootScope.blog = function(){
    $location.path('/blog')
  };

  //Interprete le string en fonction
  $rootScope.executeString= function(string){
    var val="$rootScope."+string;
    eval(val)
  };

  //Met a disposition les routes courrantes
  /*$rootScope.$on('$routeChangeStart', function(evt,newRoute,old) {
      $rootScope.transitionClasse="fade1"
  })*/

});


