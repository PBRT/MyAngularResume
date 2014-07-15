//Declaration de la variable de constante globale de l'application
var constants = angular.module('myApp.constants', [])

constants.constant( 'Data',{

    experience : [
        {   nom: "INFOTEL Conseil",
            year : '2014',
            website: "http://www.infotel.com",
            titre: "Agile developement of an cross platform application",
            soustitre : "Full project composed by two Web Applications, two Android native applications, communicating throught an REST server",
            role: "Developer intern full-stack",
            date_debut :"10/02/2014",
            date_fin: "01/08/2014",
            duree: "6 month",
            description:  "The two Android natives application, interact with the two Web applications. The NodeJS REST server manage data and real time events" +
                         " thanks to the WebSockets technologies. The Android applications can, by clicking on a Google Map, trigger an event with GPS coordinates. " +
                         " This one will appear in real time the Web Applications, display on a Google Map. The communication work in full-duplex, meaning the Web Application" +
                         "can also trigger event, received by Android applications A lot of other features as been developed as well.",
            skills : [  {nom : "JavaScript"},
                {nom : "AngularJS"},
                {nom : "NodeJS"},
                {nom : "HTML/CSS"},
                {nom : "Bootstrap"},
                {nom : "SailsJS"},
                {nom : "JQuery"},
                {nom : "Android"},
                {nom : "Google Maps"},
                {nom : "SCRUM"},
                {nom : 'S.V.N.'}
            ],
            contexte:"Application developed with SCRUM Methodology, inside of Infotel Mobility cell. " +
                "This project has been developped from scratch by a team of seven, from specification and conception to delivery." +
                "The whole project has been realized in six month using SVN. A public version will be realeased soon"
        },
        {   nom: "AERODRONES",
            year : '2013',
            website : "http://www.aerodrones.com/",
            titre: "Development of a closed loop embedded on a drone",
            soustitre : "Sensor interfacing and correction, conception and development of the closed loop",
            role: "Software developer intern",
            date_debut :"04/06/2013",
            date_fin: "20/06/2013",
            duree: "4 month",
            description: "This project's goal was to control the orientation of a camera, fixed under a drone, from the ground\n" +
                "First, I has to develop sensor drivers (gyroscope and accelerometers) to collect data and implement algorithm to minimize the sensors error " +
                "I also developed interfaces using Java Swing to display sensors data in real time" +
                "Then, I designed and simulate on Matlab a PID closed loop to control motors from sensors data" +
                "In the end, I developed the loop using C++ multithreading libraries",
            skills : [  {nom : "C/C++"},
                {nom : "Java"},
                {nom : "Multithreading"},
                {nom : "System controls conception"},
                {nom : "UDP"},
                {nom : "UART"}
            ],
            contexte:"In a start up context, integrated to the research and development team." +
                " The software has been integrated in another, to provide a full solution"
        }

    ],
    skills : [

        //Langages de programmation
        {nom : "Javascript", type: "1", niveau : "70"},
        {nom : "Java", type: "1", niveau : "55"},
        {nom : "C/C++", type: "1", niveau : "40"},
        {nom : "Html / JADE", type: "1", niveau : "70"},
        {nom : "CSS3", type: "1", niveau : "50"},


        //Frameworks front-end
        {nom : "AngularJS", type: "2", niveau : "70"},
        {nom : "Bootstrap", type: "2", niveau : "65"},
        {nom : "JQuery", type: "2", niveau : "30"},
        {nom : "JQueryMobile", type: "1", niveau : "25"},

        //Frameworks back-end
        {nom : "NodeJS", type: "3", niveau : "30"},
        {nom : "SailsJS", type: "3", niveau : "85"},
        {nom : "ExpressJS", type: "3", niveau : "25"},

        //Outils de gestion de version
        {nom : "S.V.N.", type: "4", niveau : "60"},
        {nom : "Git", type: "4", niveau : "60"},

        //Methodologies
        {nom : "SCRUM (AGILE)", type: "5", niveau : "60"},

        //Libraires
        {nom : "Google Maps API", type: "6", niveau : "70"},
        {nom : "MongoDB", type: "6", niveau : "50"},
        {nom : "SocketIO", type: "6", niveau : "30"},
        {nom : "Android SDK", type: "6", niveau : "60"},

        //Outils de développement
        {nom : "Webstorm", type: "7", niveau : "70"},
        {nom : "Eclipse", type: "7", niveau : "70"},
        {nom : "Sublime", type: "7", niveau : "40"}

    ],
    education: [],
    projets: [],
    about: []

});
