app.controller("HomeCtrl",['$scope', 'resume', '$rootScope',function($scope, resume, $rootScope){

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

    //Liked skills
    $scope.likedSkills =[];
    $scope.dislikedSkills = [];

    var map;
    var info = [];
    //var mySwiper;

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

        $scope.endOfSkills=false;
        $scope.awesome=false;

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


        //On initialise la carte
        initialize();

        //Initialize le swiper
       /* mySwiper = new Swiper('.swiper-container', {
            pagination: '.pagination',
            loop: true,
            grabCursor: true,
            paginationClickable: true
        })
        $('.arrow-left').on('click', function (e) {
            e.preventDefault()
            mySwiper.swipePrev()
            console.log("ooo")
        })
        $('.arrow-right').on('click', function (e) {
            e.preventDefault()
            mySwiper.swipeNext()
        })*/


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
	
	$scope.sendMail = function(match){
	
		console.log(match)
		// create a new instance of the Mandrill class with your API key
		var m = new mandrill.Mandrill('bG0fTx05VGrqjiZ53YcCFw');

		// create a variable for the API call parameters
		var params = {
			"message": {
				"from_email":"pbeard@etud.insa-toulouse.fr",
				"to":[{"email":"beardpierre@gmail.com"}],
				"subject": "Someone try skills app",
				"text": "ooo"
			}
		};
		
		m.messages.send(params)
	}

    //Gestion des SKILLS
    $scope.checkSkill = function(){

        //derniere
        if(mySwiper.activeIndex==($scope.skills.length-1)) {
            $scope.endOfSkills = true;
            //Ajout de la skills dans la zone de gauche
            $scope.likedSkills.push($scope.skills[mySwiper.activeIndex])

            if ($scope.dislikedSkills.length > $scope.likedSkills.length) {
                $scope.awesome = false;
            } else {
                $scope.awesome = true;
            }
			$scope.sendMail($scope.awesome)
            mySwiper.swipeNext()
        }
        else if($scope.endOfSkills !=true){
            //Ajout de la skills dans la zone de gauche
            $scope.likedSkills.push($scope.skills[mySwiper.activeIndex])

            mySwiper.swipeNext()
        }
    }

    $scope.deleteSkill = function(){

        //derniere
        if(mySwiper.activeIndex==($scope.skills.length-1)) {
            $scope.endOfSkills = true;
            //Ajout de la skills dans la zone de droite
            $scope.dislikedSkills.push($scope.skills[mySwiper.activeIndex])

            if ($scope.dislikedSkills.length > $scope.likedSkills.length) {
                $scope.awesome = false;
            } else {
                $scope.awesome = true;
            }
			$scope.sendMail($scope.awesome)
            mySwiper.swipeNext()
        }
        else if($scope.endOfSkills !=true){

            //Ajout de la skills dans la zone de droite
            $scope.dislikedSkills.push($scope.skills[mySwiper.activeIndex])

            mySwiper.swipeNext()
        }

    }

    //Reset the swiper
    $scope.resetSwipe = function(){
        $scope.endOfSkills=false;
        $scope.awesome=false;

        $scope.dislikedSkills=[];
        $scope.likedSkills=[];

        //Reset
        mySwiper.swipeTo(0, 750)
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
