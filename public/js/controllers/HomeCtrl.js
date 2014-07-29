app.controller("HomeCtrl",['$scope', 'resume', function($scope, resume){

    //Affichage education
    $scope.mode=0;


    //Gestion des ressources
    $scope.skills =[];
    $scope.education = [];
    $scope.experience = [];
    $scope.projets = [];
    $scope.places = [];
    $scope.travels=[];

    $scope.skillLangages = [];
    $scope.skillFront = [];
    $scope.skillBack = [];
    $scope.skillVersion= [];
    $scope.skillMethod= [];
    $scope.skillLib= [];
    $scope.skillTools= [];

    $scope.markers =[];
    $scope.directions=[];

    var map;
    var info = [];

    function initialize() {
        console.log("oooo")
        var myLatlng = new google.maps.LatLng(43.596604,1.427908);
        var mapOptions = {
            zoom: 4,
            center: myLatlng
        }
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        //Definition des voyages
        for(var i=0; i<$scope.travels.length;i++)
            $scope.makeTravel($scope.travels[i])

        //Positionnement des marqueurs
        $scope.makePlaces($scope.places);

    }


    $scope.init = function() {

        $scope.home = "Front-End Developer"
        $scope.homeDescription = "Experienced since one year in front-end development"

        //Recupération des données (JSON)
        resume.fillValues();
        $scope.experience = resume.getExperience();
        $scope.education = resume.getEducation();
        $scope.projets = resume.getProjets();
        $scope.skills = resume.getSkills();
        $scope.places = resume.getPlaces();
        $scope.travels = resume.getTravels();

        //Classement des skills
        for (var it = 0; it < $scope.skills.length; it++) {
            if ($scope.skills[it].type == "1")
                $scope.skillLangages.push($scope.skills[it])
            if ($scope.skills[it].type == "2")
                $scope.skillFront.push($scope.skills[it])
            if ($scope.skills[it].type == "3")
                $scope.skillBack.push($scope.skills[it])
            if ($scope.skills[it].type == "4")
                $scope.skillVersion.push($scope.skills[it])
            if ($scope.skills[it].type == "5")
                $scope.skillMethod.push($scope.skills[it])
            if ($scope.skills[it].type == "6")
                $scope.skillLib.push($scope.skills[it])
            if ($scope.skills[it].type == "7")
                $scope.skillTools.push($scope.skills[it])
        }

        //On initialise la carte
        initialize();



        //Recupération des données
        /*resume.getItems(function () {
            $scope.experience = resume.getExperience();
            $scope.education = resume.getEducation();
            $scope.projets = resume.getProjets();
            $scope.skills = resume.getSkills();

            //Classement des skills
            for (var it = 0; it < $scope.skills.length; it++) {
                if ($scope.skills[it].type == "Langage")
                    $scope.skillLangages.push($scope.skills[it])
                if ($scope.skills[it].type == "Front-end")
                    $scope.skillFront.push($scope.skills[it])
                if ($scope.skills[it].type == "Back-end")
                    $scope.skillBack.push($scope.skills[it])
                if ($scope.skills[it].type == "Other")
                    $scope.skillOther.push($scope.skills[it])
            }


        });*/
    }

    $scope.changeMode = function(val){
        $scope.mode=val;
    }

    $scope.makePlaces = function(place){

        for(var i=0; i<place.length; i++){
            var myLatlng = new google.maps.LatLng(place[i].lat,place[i].lng);
            $scope.placeMarker(myLatlng,place[i].type, place[i].website,place[i].nom);
        }

    }

    //Placement d'un marqueur
    $scope.placeMarker = function(LatLng, type,website,nom){

        var icon;

        //Set color marker depending of type
        if(type=="Studies")
            icon="images/Icons/red-dot.png"
        if(type=="Work")
            icon="images/Icons/purple-dot.png"
        if(type=="Holidays")
            icon="images/Icons/blue-dot.png"

        var marker = new google.maps.Marker({
            position: LatLng,
            map: map,
            icon: icon,
            animation: google.maps.Animation.DROP
        });
        var infowindow = new google.maps.InfoWindow({
            content: "<style>.yolo:hover{text-decoration:underline}</style><div><h4 style=\"text-align: center\">"+nom+"</h4><p class=\"yolo\" style=\"{text-color:#fff}\" onclick=\"window.open('"+website+"', '_blank')\")>"+website+"</p></div>"
        });
        info.push(infowindow);
        google.maps.event.addListener(marker, 'click', function() {
            for(var i=0;i<info.length;i++)
                info[i].close();
            infowindow.open(map,marker);

        });

        $scope.markers.push({type : type,marker : marker})
    }

    //Create Travel
    $scope.makeTravel = function(val){

        var directionsDisplay= new google.maps.DirectionsRenderer({polylineOptions: {strokeColor: "green"}, suppressMarkers: true,preserveViewport: true});
        var directionsService = new google.maps.DirectionsService();
        directionsDisplay.setMap(map);

        var start=  new google.maps.LatLng(val.points[0].lat,val.points[0].lng);
        var end=  new google.maps.LatLng(val.points[val.points.length-1].lat,val.points[val.points.length-1].lng);

        //Waypoints
        var wp =[];
        for(var it=1;it<val.points.length; it++){
            if(it==val.points.length-1)
                break;
            var pos = new google.maps.LatLng(val.points[it].lat,val.points[it].lng)
            wp.push({location :pos, stopover: false});
        }

        var icon_start="images/Icons/letter_s.png";
        var icon_end="images/Icons/letter_e.png";

        var ms;
        var me;

        var request = {
            origin:start,
            destination:end,
            travelMode: google.maps.TravelMode.WALKING,
            waypoints: wp
        };
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                var leg = response.routes[ 0 ].legs[ 0 ];
                ms=makeMarker( leg.start_location,  "title" , icon_start);
                me=makeMarker( leg.end_location, 'title' ,icon_end);
                $scope.directions.push({direction:directionsDisplay,ms:ms,me:me})
            }else {
                console.log("FAIL")
            }
        });


    }

    function makeMarker( position,  title ,icon) {
       var m= new google.maps.Marker({
            position: position,
            map: map,
            icon: icon,
            title: title
        });
        return m;

    }

    //Supprime les marqueurs d'une type
    $scope.removeMarkers=function(type){

        if(type!="Travels") {
            for (var i = 0; i < $scope.markers.length; i++) {
                if ($scope.markers[i].type == type) {
                    $scope.markers[i].marker.setMap(null);
                }
            }
        }else{
            for (var i = 0; i < $scope.directions.length; i++) {
                $scope.directions[i].direction.setMap(null);
                $scope.directions[i].ms.setMap(null);
                $scope.directions[i].me.setMap(null);
            }
        }
    }

    //Replace les marqueurs d'une type
    $scope.replaceMarkers=function(type){
        if(type!="Travels"){
            for(var i=0; i<$scope.markers.length;i++){
                if($scope.markers[i].type==type){
                    $scope.markers[i].marker.setMap(map);
                    $scope.markers[i].marker.setAnimation(google.maps.Animation.DROP);
                }
            }
        }else{
            for (var i = 0; i < $scope.directions.length; i++) {
                $scope.directions[i].direction.setMap(map);
                $scope.directions[i].ms.setMap(map);
                $scope.directions[i].me.setMap(map);
            }
        }
    }


    //Center map on the place
    $scope.centerMap = function(data){
        $scope.selected="";
        map.setZoom(5)
        map.setCenter(new google.maps.LatLng(data.lat, data.lng));

        //Ouverture de l'infobulle
        for(var i=0; i<$scope.markers[i].length;i++){

            if($scope.markers[i].marker.getPosition().lat()==data.lat && $scope.markers[i].marker.getPosition().lng()==data.lng)
                google.maps.event.trigger($scope.markers[i], 'click');
        }




    }
}])
