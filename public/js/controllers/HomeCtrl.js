app.controller("HomeCtrl", function($scope, resume){

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

    var map;
    var info = [];

    function initialize() {
        console.log("oooo")
        var myLatlng = new google.maps.LatLng(43.596604,1.427908);
        var mapOptions = {
            zoom: 3,
            center: myLatlng
        }
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        //Definition des voyages
        for(var i=0; i<$scope.travels.length;i++)
            $scope.makeTravel($scope.travels[i])

        //Positionnement des marqueurs
        $scope.makePlaces($scope.places);

    }


   // google.maps.event.addDomListener(window, 'load', initialize);

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
            icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        if(type=="Work")
            icon="http://maps.google.com/mapfiles/ms/icons/purple-dot.png"

        var marker = new google.maps.Marker({
            position: LatLng,
            map: map,
            title: 'Hello World!',
            icon: icon
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
    }

    //Create Travel
    $scope.makeTravel = function(val){
        console.log(val)
        var directionsDisplay= new google.maps.DirectionsRenderer({polylineOptions: {strokeColor: "red"}});
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

        var request = {
            origin:start,
            destination:end,
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: wp
        };

        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }else {
                console.log("FAIL")
            }
        });
    }

})
