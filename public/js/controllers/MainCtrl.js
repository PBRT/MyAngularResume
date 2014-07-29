'use strict';

//Controller qui gère le layout global de l'application
app.controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope,$scope,$location){


    $scope.endEnter=0;

    $scope.$on('endEnter', function(){
        $scope.endEnter++;
        $scope.$apply();
    })


    $scope.displayHome=false;
    $scope.start=0;
    $scope.itemx=0;

    $scope.$on('$routeChangeStart', function(evt,newRoute) {
        if(newRoute) {
            if (newRoute.templateUrl != "partials/main") {
                $scope.displayHome = true;
            }
            else if (newRoute.templateUrl == "partials/main") {
                $scope.displayHome = false;
                $scope.itemx=0;
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




}]);