module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //Concatenation des fichiers
    concat: {

        //Fichiers JAVASCRIPT
        jsfiles : {

            options: {
                separator: ';'
            },

            src: [
                //Bower components
                'public/bower_components/angular/angular.js',
                'public/bower_components/angular-route/angular-route.js',

                //External librairies
                'public/libs/jquery-2.1.0.min.js',
                'public/libs/bootstrap.min.js',
                'public/libs/angular-resource.min.js',
                'public/libs/angular-scroll.js',
                'public/libs/ui-bootstrap-tpls-0.11.0.min.js',
                'public/libs/idangerous.swiper-2.1.min.js',

                //Application
                'public/js/app.js',
                'public/js/controllers/*.js',
                'public/js/directives/*.js',
                'public/js/filters/*.js',
                'public/js/ressources/*.js',
                'public/js/services/*.js',
                'public/js/constants/*.js'
            ],

            //the location of the resulting js file
            dest: 'public/dist/app.js'
        },

        //Fichiers CSS
        cssfiles : {

            src: [
                //Bootstrap compilé en LESS
                'public/less/boot.css',
                //Animations CSS
                'public/css/animate.css',
                //Animation Hover
                'public/css/hoverLib.css',
                //Swiper
                'public/css/idangerous.swiper.css',
                //Application Globale
                'public/css/app.css'
            ],

            //the location of the resulting css file
            dest: 'public/dist/app.css'
        }


    },

    //Minimification JS
    uglify: {

        //Distribution Javascript
        jsfiles: {
            options: {
                //banner inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            files: {
                'public/dist/app.min.js': ['<%= concat.jsfiles.dest %>']
            }
        }
    },

    //Minimification CSS
    cssmin: {

        //Distribution CSS
        combine : {
            options: {
                //banner inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            files: {
                'public/dist/app.min.css': ['<%= concat.cssfiles.dest %>']
            }
        }
    },


    watch: {
      scripts: {
        files: [
          'public/js/app.js',
          'public/js/**/*.js'
        ],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false
        }
      }
    },

    //Permet de copier les fichiers de polices dans la distribution
    copy: {
        main : {
            files: [
                {src: ['public/css/BlissfulThinking.otf'], dest: 'public/dist/BlissfulThinking.otf', filter: 'isFile'},
                {expand:true,flatten: true,src: 'public/images/Icons/*',  dest: 'public/dist/images/Icons/', filter: 'isFile'},
                {expand:true,flatten: true,src: 'public/images/Experience/*',  dest: 'public/dist/images/Experience/', filter: 'isFile'}
            ]
        }
    },

    //Supprime les version non minimifiée de la distribution
    clean :{
        src: ['public/dist/app.css','public/dist/app.js']
    },

    //Compile bootstrap LESS en CSS
    less : {
        development: {
            options: {
                paths: ["public/less"]
            },
            files: {
                "public/less/boot.css": "public/less/style.less"
            }
        }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');     //Compile le LESS en CSS
  grunt.loadNpmTasks('grunt-contrib-cssmin');   //Minimifie CSS
  grunt.loadNpmTasks('grunt-contrib-uglify');   //Minimifie JS
  grunt.loadNpmTasks('grunt-contrib-concat');   //Concatene fichiers
  grunt.loadNpmTasks('grunt-contrib-watch');    //Observe fichiers
  grunt.loadNpmTasks('grunt-contrib-copy');     //Copy fichiers
  grunt.loadNpmTasks('grunt-contrib-clean');    //Supprime fichiers
  //grunt.loadNpmTasks('grunt-ngmin');            //Minimifie code angular

  grunt.registerTask('build', ['less',
                               'copy',
                               'concat:cssfiles',
                               'cssmin:combine',
                               'concat:jsfiles',
                               'uglify:jsfiles',
                               'clean'
                              ]);
};
