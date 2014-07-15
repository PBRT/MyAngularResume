app.controller("HomeCtrl", function($scope, resume){

    //Affichage education
    $scope.mode=0;


    //Gestion des ressources
    $scope.skills =[];
    $scope.education = [];
    $scope.experience = [];
    $scope.projets = [];

    $scope.skillLangages = [];
    $scope.skillFront = [];
    $scope.skillBack = [];
    $scope.skillOther= [];

    $scope.init = function() {

        $scope.home = "Front-End Developer"
        $scope.homeDescription = "Experienced since one year in front-end development"

        //Recupération des données (JSON)
        resume.fillValues();
        $scope.experience = resume.getExperience();
        $scope.education = resume.getEducation();
        $scope.projets = resume.getProjets();
        $scope.skills = resume.getSkills();

        console.log($scope.experience.indexOf($scope.experience[0]))

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

})
