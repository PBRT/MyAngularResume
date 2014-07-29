'use strict';


//Liste dans la navbar
directives.directive('navtab', ['$rootScope',function($rootScope){
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
            }
        })

    }

}])



//Permet d'activer le click sur une image
directives.directive('clickOn', function(){
    return function(scope,elm, attrs){
        elm.bind('click', function(){
            eval(attrs.clickOn);
        })
    }
})

//Permet la modification des letters sur hover
directives.directive('styleExp', ['$compile',function($compile){
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
}])

//Permet d'activer le click sur une image
directives.directive('selectedMode', function(){
    return function(scope,elm, attrs){

        var first=false;
        var type=attrs.selectedMode;
        elm.bind('click', function(){

            //Premier click
            if(first==false) {
                scope.$apply(function(){
                    first = true;
                    elm.addClass('littleClass')
                    elm.removeClass('specific')
                    scope.removeMarkers(type);
                });
            }
            //Second click
            else {
                scope.$apply(function(){
                    first = false;
                    elm.removeClass('littleClass')
                    elm.addClass('specific')
                    scope.replaceMarkers(type)
                })
            }
        })
    }
})


//Dediée aux icone dans la barre de recherche
directives.directive('iconeSearch',['$rootScope', function($rootScope){
    return function(scope,elm,attrs){
        if(attrs.iconeSearch=="Holidays"){
            elm.addClass('fa fa-camera-retro')
        }else if(attrs.iconeSearch=="Work"){
            elm.addClass('fa fa-briefcase')
        }else if(attrs.iconeSearch=="Studies"){
            elm.addClass('fa fa-mortar-board')
        }

    }
}])



