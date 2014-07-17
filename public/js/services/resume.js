'use strict';
//Declaration de la variable de service globale de l'application
var services = angular.module("myApp.services", []);

//Service assurant la gestion des données globale à l'application
services.factory("resume", function(Data){

    var data = Data;

    var experience = [];
    var skills = [];
    var education = [];
    var projets = [];
    var about = [];
    var places = [];
    var travels =[];

    return {

        fillValues : function(){

            experience=data.experience;
            skills=data.skills;
            education=data.education;
            projets=data.projets;
            about=data.about;
            places= data.places;
            travels=data.travels;
        },

        //Chargement de l'ensemble des items
        getItems : function(cb){

            var self=this;

            Item.query(function(items){

                //Chargement de l'ensemble des skills
                Skills.query(function(skills){

                    //Classement des items dans les hashmaps
                    self.classItems(items,function(){

                        //Classement des skills dans les hashmaps
                        self.classSkills(skills,function(){
                            cb();
                        })

                    })

                })



            })
        },

        //Permet de classer les différents items en fonction de leurs type
        classItems : function(itemArray, cb){
            for(var it=0; it<itemArray.length; it++){

                //Experience
                if(itemArray[it].type=="Experience"){
                    experience.push(itemArray[it]);
                }
                //Education
                else if(itemArray[it].type=="Education"){
                    education.push(itemArray[it]);
                }
                //Projets
                else if(itemArray[it].type=="Projet"){
                    projets.push(itemArray[it]);
                }
                if(it==itemArray.length-1)
                    cb();
            }
            if(itemArray.length==0)
                cb();
        },

        //Permet de classer les skills
        classSkills : function(skillsArray,cb){
            for(var it=0; it<skillsArray.length; it++){

                skills.push(skillsArray[it])
                if(it==skillsArray.length-1)
                    cb();
            }
            if(skillsArray.length==0)
                cb();
        },

        //GETTERS AND SETTERS AND RESETTERS
        getExperience : function(){
            return experience;
        },
        setExperience : function(val){
            experience = val;
        },
        resetExperience : function(val){
            experience = [];
        },
        getEducation : function(){
            return education;
        },
        setEducation : function(val){
            education = val;
        },
        resetEducation : function(val){
            education = [];
        },
        getProjets : function(){
            return projets;
        },
        setProjets : function(val){
            projets = val;
        },
        resetProjets : function(val){
            projets = [];
        },
        getSkills : function(){
            return skills;
        },
        setSkills : function(val){
            skills = val;
        },
        resetSkills : function(val){
            skills = [];
        },
        getPlaces : function(){
            return places;
        },
        setPlaces : function(val){
            places=val;
        },
        getTravels : function(){
            return travels;
        },
        setTravels : function(val){
            travels=val;
        }

    }

});