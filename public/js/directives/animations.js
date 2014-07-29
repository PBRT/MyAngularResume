//Permet de mettre en place les animations CSS
directives.directive('anim', ['$rootScope',function($rootScope){
    return function(scope, elm, attrs) {
        var ani = 'animated ' + attrs.anim;
        elm.addClass(ani);
        elm.on('webkitAnimationEnd', function(){
            elm.removeClass(ani);
            $rootScope.$broadcast('endEnter');
        })
    }
}])

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

//Dediée aux transitions entre les pages
directives.directive('partialTransition', function(){
    return function(scope,elm,attrs){
    }
})