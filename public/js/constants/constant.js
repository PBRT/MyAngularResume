
constants.constant( 'Data',{

    experience : [
        {   nom: "INFOTEL Conseil",
            year : '2014',
            image : 'images/Experience/Infotel.png',
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
            image : 'images/Experience/Aerodrone.png',
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
    education : [

        //INSA Toulouse
        {   nom : "I.N.S.A. de Toulouse",
            sub : "M.S. degree in Computer Science - 2014",
            description: "Five years of engineering school, from basic physics to high-tech programing and embedded systems." +
                "\n Work on different fields such as physics, computer science, electronics, programming and culture. " +
                "\n Formation based on several interesting projects, according to the actual industrial context.  "
                +"\n Mainly, study of computers at all level, from components to Web development" ,
            img : "dist/images/Icons/insa.jpg",
            web : "http://www.insa-toulouse.fr/fr/formation/ingenieur/specialites/aei.html",
            rang : 0
        },
        {
            nom : "Linköping University (Sweden)",
            sub : "Erasmus exchange semester during six month- 2012",
            description : "Total immersion in Swedish culture during six month. Advanced courses on computer architecture, programming and radio frequency"
                +"\n Project with international students and a lot of travels",
            img : "dist/images/Icons/lonk.png",
            web :"http://www.liu.se/?l=en",
            rang : 1
        },
        {
            nom : "Lycee Marie Curie",
            sub : "High School Diploma with distinction in Science - 2009",
            description : "Physics and chemistry as main courses. Start to enjoy programming during labs.",
            img : "dist/images/Icons/bac.jpg",
            web : "http://marie-curie.entmip.fr/",
            rang : 2
        }

    ],
    skills : [

        //Langages de programmation
        {nom : "Javascript", type: "Langage", niveau : "70", img: 'images/Icons/javascript.png'},
        {nom : "Java", type: "Langage", niveau : "55", img: 'images/Icons/java.png'},
        {nom : "C/C++", type: "Langage", niveau : "40", img: 'images/Icons/c.png'},
        {nom : "Html / JADE", type: "Langage", niveau : "70", img: 'images/Icons/html5.png'},
        {nom : "CSS3", type: "Langage", niveau : "50", img: 'images/Icons/css3.png'},


        //Frameworks front-end
        {nom : "AngularJS", type: "Framework - Front end", niveau : "70", img: 'images/Icons/angular.png'},
        {nom : "Bootstrap", type: "Framework - Front end", niveau : "65", img: 'images/Icons/bootstrap.png'},
        {nom : "JQuery", type: "Framework - Front end", niveau : "30", img: 'images/Icons/jquery.jpg'},
        {nom : "JQueryMobile", type: "Framework - Front end", niveau : "25", img: 'images/Icons/jqm.png'},

        //Frameworks back-end
        {nom : "NodeJS", type: "Framework - Back end", niveau : "30", img: 'images/Icons/nodejs.png'},
        {nom : "SailsJS", type: "Framework - Back end", niveau : "85", img: 'images/Icons/sails.png'},
        {nom : "ExpressJS", type: "Framework - Back end", niveau : "25", img: 'images/Icons/express.png'},

        //Outils de gestion de version
        {nom : "S.V.N.", type: "Gestion tool", niveau : "60", img: 'images/Icons/svn.png'},
        {nom : "Git", type: "Gestion tool", niveau : "60", img: 'images/Icons/git.png'},

        //Methodologies
        {nom : "SCRUM (AGILE)", type: "Methodology", niveau : "60", img: 'images/Icons/Scrum.jpg'},

        //Libraires
        {nom : "Google Maps API", type: "API", niveau : "70", img: 'images/Icons/gmap.jpg'},
        {nom : "MongoDB", type: "Database", niveau : "50", img: 'images/Icons/mongodb.png'},
        {nom : "SocketIO", type: "API", niveau : "30", img: 'images/Icons/socketio.png'},
        {nom : "Android SDK", type: "SDK", niveau : "60", img: 'images/Icons/android.png'},
        {nom : "Grunt", type: "JS Tool", niveau : "60", img: 'images/Icons/grunt.png'},

        //Outils de développement
        {nom : "Webstorm", type: "I.D.E.", niveau : "70", img: 'images/Icons/webstorm.PNG'},
        {nom : "Eclipse", type: "I.D.E.", niveau : "70", img: 'images/Icons/eclipse.jpg'},
        {nom : "Sublime", type: "I.D.E.", niveau : "40", img: 'images/Icons/sublime.png'}

    ],
    projets: [],
    about: [],
    places: [

        //Studies
        {nom : "I.N.S.A. Toulouse", website :"http://www.insa-toulouse.fr/fr/index.html",type : "Studies", lat : 43.569911, lng : 1.467923},
        {nom : "Linköping University",website :"http://www.liu.se/?l=en", type : "Studies", lat : 58.398002, lng : 15.576232},

        //Work
        {nom : "AERODRONES Bidart", website :"http://www.aerodrones.com/", type : "Work", lat : 43.447698, lng : -1.555287},
        {nom : "INFOTEL Conseil", website :"http://www.infotel.com/", type : "Work", lat : 43.639800, lng : 1.368012},
        {nom : "DAHER-SOCATA", website :"http://www.daher.com/", type : "Work", lat : 43.185786, lng : 0.008685},
        {nom : "Polyclinique de l'ORMEAU", website :"http://www.polyclinique-ormeau.fr/", type : "Work", lat : 43.225237, lng : 0.077135},

        //Holidays
        {nom : "Pragues", website :"", type : "Holidays", lat : 50.248232, lng : 14.290400},
        {nom : "Amsterdam", website :"", type : "Holidays", lat : 52.376579,  lng : 4.842158},
        {nom : "Stockholm", website :"", type : "Holidays", lat : 59.330520, lng :  18.061017},
        {nom : "Oslo", website :"", type : "Holidays", lat : 59.915030,  lng : 10.742545},
        {nom : "Munich", website :"", type : "Holidays", lat : 48.133148, lng :  11.580975},
        {nom : "Copenhague", website :"", type : "Holidays", lat : 55.679108, lng :  12.578348},
        {nom : "Roma", website :"", type : "Holidays", lat : 41.866877,  lng : 12.488619},
        {nom : "Athenes", website :"", type : "Holidays", lat : 37.984546, lng : 23.729070},
        {nom : "Santorin", website :"", type : "Holidays", lat : 36.397620,  lng : 25.461486},
        {nom : "Madrid", website :"", type : "Holidays", lat : 40.417703,  lng : -3.710436},
        {nom : "Minorque", website :"", type : "Holidays", lat : 39.961101,  lng : 4.109410},
        {nom : "Lisbonne", website :"", type : "Holidays", lat : 38.719924 ,lng : -9.135828},
        {nom : "Vienne", website :"", type : "Holidays", lat : 48.209069,   lng : 16.389610},
        {nom : "Berne", website :"", type : "Holidays", lat : 46.948284,lng : 7.444652 },
        {nom : "Paris", website :"", type : "Holidays", lat : 48.856318,  lng : 2.349978},
        {nom : "Zermatt", website :"", type : "Holidays", lat : 46.022181 ,lng : 7.744005},
        {nom : "Wengen", website :"", type : "Holidays", lat : 46.605751,    lng : 7.921083},
        {nom : "Milan", website :"", type : "Holidays", lat : 45.465744,lng : 9.187345},
        {nom : "Kitzbuhel", website :"", type : "Holidays", lat : 47.444716,lng : 12.393044},
        {nom : "Casablanca", website :"", type : "Holidays", lat : 33.586062,lng : -7.614148},
        {nom : "Quebec City", website :"", type : "Holidays", lat : 47.099572,lng :  -71.510314},
        {nom : "Bangkok", website :"", type : "Holidays", lat : 13.734272,lng : 100.533547},
        {nom : "Ko Tao", website :"", type : "Holidays", lat : 10.097705,lng :  99.840298},
        {nom : "Ko Phangan", website :"", type : "Holidays", lat : 9.736539, lng : 100.012390},
        {nom : "Pointe-a-pitre", website :"", type : "Holidays", lat :16.240349,lng :   -61.536527},
        {nom : "Les Saintes", website :"", type : "Holidays", lat :15.865727, lng :   -61.583522},
        {nom : "Marie Galante", website :"", type : "Holidays", lat :15.929121,lng : -61.257633},
        {nom : "Folegandros", website :"", type : "Holidays", lat :36.625225, lng :  24.922657},
        {nom : "Crete", website :"", type : "Holidays", lat :35.357027,lng :  25.141166}

    ],
    travels : [

        //Canada 1
        {nom : " East Canada", points : [
            {lat : 40.777356, lng :-74.190577},
            {lat : 42.282324, lng :-71.059474},
            {lat : 44.459877, lng :-69.028216},
            {lat : 45.578118, lng :-73.664446},
            {lat : 45.454947, lng :-75.685931},
            {lat : 43.718134,lng : -79.509173},
            {lat : 40.284990, lng :-76.666521},
            {lat : 40.005404, lng :-74.946110},
            {lat : 40.758578, lng :-73.979313}

        ]} ,

        //Canada 1
        {nom : " USA Canada", points : [
            {lat : 40.758797, lng : -111.892333},
            {lat:43.480405, lng :-110.763753},
            {lat : 44.385556, lng : -110.608306},
            {lat : 46.655886,  lng :-112.058501},
            {lat : 51.293866, lng :-114.065744},
            {lat : 52.700683, lng :-117.867013},
            {lat : 49.270595, lng :-123.196066 },
            {lat : 47.697853, lng: -122.416037}

        ]},
        //USA
        {nom : "USA", points : [
            {lat : 36.169635,  lng : -115.158521},
            {lat:  36.679259, lng : -117.053165},
            {lat : 37.927939, lng :-118.527423},
            {lat :37.777797, lng : -122.426897},
            {lat :39.399967, lng : -116.808439},
            {lat :37.619622, lng :-112.174191},
            {lat :37.458668,lng : -110.715841},
            {lat :36.991018,lng : -109.842391},
            {lat : 36.053053, lng :-112.105693},
            {lat : 36.169635,  lng : -115.158521}

        ]},

        {nom : "Vietnam", points : [
            {lat : 21.034473,   lng : 105.831385},
            {lat:  15.880334, lng :  108.336036},
            {lat :16.072553, lng:108.197977},
            {lat :16.454544, lng :107.584040},
            {lat :16.908718, lng :107.188189},
            {lat :17.079318, lng: 107.112880},
            {lat :17.471230, lng:106.621921},
            {lat :20.261026,lng: 105.969914},
            {lat :20.844917,lng: 106.697576},
            {lat : 21.034473,   lng : 105.831385}
        ]}

    ]

});
