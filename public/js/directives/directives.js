'use strict';
//Declaration de la variable des directives globale de l'application
var directives = angular.module("myApp.directives", []);

//Directive pour afficher la version de l'application
directives.directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
});

//Permet de mettre en place les animations CSS
directives.directive('anim', function($rootScope){
    return function(scope, elm, attrs) {
        var ani = 'animated ' + attrs.anim;
        elm.addClass(ani);
        elm.on('webkitAnimationEnd', function(){
            elm.removeClass(ani);
            $rootScope.$broadcast('endEnter');
        })
    }
})

//Permet de distinguer la derniere directive de la page main
directives.directive('animEnd', function(){
    return function(scope, elm, attrs) {
        elm.addClass("visibility: hidden");
        scope.$watch('endEnter', function (val) {
            if(val==2){
                elm.removeClass("visibility: hidden");
                var ani = 'animated ' + attrs.animEnd;
                elm.addClass(ani);
                elm.on('webkitAnimationEnd', function(){
                    console.log('azazazaza')
                    elm.removeClass(ani);
                    scope.endEnter=0;
                })
            }
        });

    }
})


//Liste dans la navbar
directives.directive('navtab', function($rootScope){
    return function($scope,elm,attrs) {

        //On commence par cacher l'ensemble des navtabs
        elm.addClass("visibility: hidden");
        $scope.$watch('itemx', function (val) {

            //Puis on les rends visibles
            if (val == attrs.navtabRang) {
                elm.addClass('animated slideInRight');
                elm.removeClass("visibility: hidden");

                elm.on('webkitAnimationEnd', function () {
                    $rootScope.$broadcast('itemInc');
                })
            } else if (val > attrs.navtabRang) {

            }
        })

    }

})

//Directive executée lors du changement de page
directives.directive('endTransition', function(){
    return function($scope,elm,attrs){
        $scope.$watch('start', function(val){
            if(val==1) {
                var ani = 'animated ' + attrs.endTransition;
                elm.addClass(ani);
                $scope.$broadcast('endtrans');
            }else if(val==2){
                var ani = 'animated ' + attrs.endTransition;
                elm.addClass(ani);
                elm.on('webkitAnimationEnd', function(){
                    $scope.$broadcast('endtrans2');
                })

            }
        })

    }
})



//Permet d'activer le click sur une image
directives.directive('clickOn', function(){
    return function(scope,elm, attrs){
        elm.bind('click', function(){
            eval(attrs.clickOn);
        })
    }
})

//Permet la modification des letters sur hover
directives.directive('styleExp', function($compile){
    return function(scope,elm,attr){
        console.log(attr.styleExp)
        if(attr.styleExp) {

            var n = parseFloat(attr.styleExp)
            //Pair
            if (n % 2 == 0) {
                //elm.addClass('{background:#778899;color:white;}')
                elm.css('background', '#778899')
                elm.css('color', 'white')
            }else{
                elm.css('background', 'lightgrey')
            }
        }
    }
})

//Dediée aux transitions entre les pages
directives.directive('partialTransition', function($rootScope){
    return function(scope,elm,attrs){
    }
})




