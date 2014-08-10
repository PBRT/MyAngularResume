//Dediée aux boutons de volumes
directives.directive('mute',['$rootScope', function($rootScope){
    return function(scope,elm,attrs){

        var state=0;

        elm.bind('click', function(){

            //Volume on to off
            if(state==0) {
                elm.removeClass('fa-volume-up')
                elm.addClass('fa-volume-off')
                state=1;
            }

            //Volume on to off
            else if(state==1) {
                elm.removeClass('fa-volume-off')
                elm.addClass('fa-volume-up')
                state=0;
            }

        })

    }
}])

