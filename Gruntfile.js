'use strict'

module.exports=function(grunt){

  require('time-grunt')(grunt);

  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.initConfig({
    sass: {
      dist:{
        files:{
          'css/styles.css':'css/styles.scss'
        }
      }
    },

    watch: {
      files: 'css/*.scss',
      tasks: ['sass']
    },

    browserSync: {
      dev: {
        bsFiles: {
          src:[
            'css/*.css',
            '*.html',
            'js/*.js'
          ]
        },
        options:{
          watchTask: true,
          server: {
            baseDir: './'
          }
        }
      }
    },
      copy:{
        html:{
          files:[{
              expand: true,
              dot: true,
              cwd: './',
              src: ['*.html'],
              dest: 'dist/public'
          }]
        },
        fonts:{
          files:[{
            expand:true,
            dot:true,
            cwd:'node_modules/font-awesome',
            src:['fonts/*.*'],
            dest:'dist/public'
          }]
        }
      },
      clean:{
        build:{
          src:['dist/public']
        }
      },
      imagemin:{
        dynamic:{
          files:[{
            expand:true,
            cwd:'./',
            src:['img/*.{png,gif,jpg}'],
            dest: 'dist/public'
          }]
        }
      },
      useminPrepare:{
        foo:{
          dest:'dist/public',
          src: ['contactus.html', 'aboutus.html', 'index.html']
        },
        options: {
          flow:{
            steps:{
              css: ['cssmin'],
              js: ['uglify']
            },
            post:{
              css:[{
                name:'cssmin',
                createConfig: function(context, block){
                  var generated =  context.options.generated;
                  generated.option = {
                    keepSpecialComments: 0,
                    rebase: false
                  };
                }
              }]
            }
          }
        }
      },
      concat:{
        options: {
          separator: ';'
        },
        foo:{
          files:[
            {src:['dist/css/main.css'], dest:'dist/public/css/main.css'},
          ]
        },
        bar:{
          files:[
            {src:['dist/js/main.js'], dest:'dist/public/js/main.js'}
          ]
        }
      },
      uglify:{
        bar:{}
      },
      cssmin:{
        foo:{}
      },
      // filerev:{
      //   option:{
      //     encoding:'utf8',
      //     algorithm: 'md5',
      //     length: 20
      //   },
      //   release:{
      //     files:[{
      //       src: ['dist/public/css/*.css', 'dist/public/js/*.js']
      //     }]
      //   }
      // },
      usemin:{
        html: ['dist/public/contactus.html', 'dist/public/aboutus.html', 'dist/public/index.html'],
        options:{
          assetsDir:['dist/public', 'dist/public/css', 'dist/public/js']
        }
      }


  });
  grunt.registerTask('css', ['sass']);
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('build', [
    'clean',
    'copy',
    'imagemin',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    // 'filerev',
    'usemin'
  ]);
}
