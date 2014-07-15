'use strict';
//Declaration de la variable de controlleurs globale de l'application
var app = angular.module('myApp.controllers', []);

//Controller qui gère le layout global de l'application
app.controller('MainCtrl', function ($rootScope,$scope,$location, socket,$document){


    $scope.endEnter=0;

    $scope.$on('endEnter', function(){
        $scope.endEnter++;
        $scope.$apply();
    })


    $scope.toTheTop = function() {
        $document.scrollTop(0, 5000).then(function() {
            console && console.log('You just scrolled to the top!');
        });
    }
    var section2 = angular.element(document.getElementById('section-2'));
    $scope.toSection2 = function() {
        $document.scrollTo(section2, 0, 1000);
    }

    $scope.displayHome=false;
    $scope.start=0;
    $scope.itemx=0;

    $scope.$on('$routeChangeStart', function(evt,newRoute,currentRoute) {
        if(newRoute) {
            if (newRoute.templateUrl != "partials/main")
                $scope.displayHome = true;
            else if (newRoute.templateUrl == "partials/main") {
                $scope.displayHome = false;
            }
        }

    });

    $scope.$on('itemInc',function(){
        $scope.itemx++;
        if($scope.itemx!=0)
            $scope.$apply();
    })


    $scope.$on('endtrans',function(){
        $scope.start=2;
    })
    $scope.$on('endtrans2',function(){
        $location.path('/home')
        $scope.$apply();
    })

    $scope.aboutMe = function(){
        $scope.start=1;
    }






    //Exemple de socket interessant
    /*socket.on('send:name', function (data) {
        $scope.name = data.name;
    });*/





});