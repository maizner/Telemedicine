Frontend with Bootstrap grid + Gulp + Sass 
======
<p align="center"><img src="./readme_assets/bg-medic.jpg"></p>



* Lints and minifies JavaScript.
* Compiles Sass with [`libSass`](https://github.com/sass/libsass "libsass"). 
* Autoprefixes, minifies and removes unused CSS.


<a name="Structure"></a> Structure
------

This is how the project structure looks like:


```
Telemedicine/
│
├── fonts/                     # Compiled, production-ready output
├── img/                     # npm install                   # Source code; these are the only files you need to touch 
├── css/                     # Compiled, production-ready output
├── scss/                      # Source code; these are the only files you need to touch 
│   │ 
│   ├── fonts/                # Project fonts; Overpass font is included by default
│   ├── img/               # Images folder; can have subdirectories
│   ├── js/              # Scripts folder; can have subdirectories
│   ├── scss/                 # Sass folder; more information below
│   ├── vendor/              # 3rd party for the project
├── js/                      # Source code; these are the only files you need to touch 
│   │ 
│   ├── script/                # Project fonts; Overpass font is included by default
│   ├── vendor/              # 3rd party for the project
│  
│
│
└── package.json              # List of 3rd party libraries and utilities
└── page.html              # html
```  


Our Sass folder structure looks like this:

```
scss/
│
├── base/
│   │   
│   ├── _base.scsss           # Commonly used standard styles
│   └── _variables.scss       # Variables
│  
├── pages/
│   │   
│   ├── _page1.scss           # Only Related global pages styles          
│   └── _page2.scss           #...
│        
├── sections/
│   │   
│	└── _jumbotron.scss       # EG: Section specific styles if needed
│	
├── shared/
│   │   
│   ├── _modal.scss           # Components that shared with other views
│   └── _loader.scss          # Navigation
│   ├── _fonts.scss           # Font styles
│   └── _helpers.scss         # Helper classes
│   ├── _mask.scss            # Components that shared with other views
│   └── _typography.scss      # group of styles for titles, subtitles, etc
│  
├── layout/  
│   │    
│   ├── _Header.scss          # Buttons
│   └──_footer.scss           # Footer
│  
├── utils/     				  
│   │              
│   ├── _functions.scss       # Sass funtions
│   ├── _helpers.scss         # Helper classes
│   └── _mixins.scss          # Sass mixins
│   
├── vendor/
│   │   
│   └── _bootstrap.scss       # 3rd parties manipulated partially or totally by the team (being incorpored)
│  
├── Components/ 
│   │     
│   ├── _button.scss          # Components 
│   └── _cards.scss           	"
│   ├── _checkbox.scss          "
│   └── _tables.scss            "
│   └── _....scss 
│  
└── mainPage.scss             # Main Sass files. The main compiling files of each page (we will compile a main css file for page)

```



<a name="dependencies"></a>Dependencias
------  
A list of all the dependencies used in this project 
### NPM
* [`autoprefixer`](https://github.com/postcss/autoprefixer "autoprefixer"): Automatically adds vendor prefixes to CSS rules.  
* [`gulp`](http://gulpjs.com/ "gulp"): Build system that automates common tasks during development.
* [`gulp-sass`](https://github.com/dlmanning/gulp-sass "gulp-sass"): Compiles Sass to CSS with [`libSass`](https://github.com/sass/libsass "libsass").
* [`gulp-postcss`]( "gulp-postcss"): Pipe CSS through multiple preprocessors (`autoprefixer`, `cssnano`), but only parse it once.


