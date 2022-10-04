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
│
├── css/                     # Compiled, production-ready output
├── node_modules/             # npm install
├── scss/                      # Source code; these are the only files you need to touch 
│   │ 
│   ├── fonts/                # Project fonts; Overpass font is included by default
│   ├── images/               # Images folder; can have subdirectories
│   ├── scripts/              # Scripts folder; can have subdirectories
│   ├── scss/                 # Sass folder; more information below
│   ├── views/                # Nunjucks templates; more information below
│   ├── vendors/              # Complete 3rd party for the project
│   └── data.json             # JSON data; used to populate Nunjucks templates
│
│
└── package.json              # List of 3rd party libraries and utilities
└── page.html              # html
```  



This boilerplate uses Sass as its CSS preprocessor. To keep our code clean and DRY (Don't Repeat Yourself), we split our Sass code into multiple files and folders. This boilerplate is based on the [Sass Guidelines architecture](https://sass-guidelin.es/#architecture "Sass Guidelines")

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
> **Note**: You can modify this structure to your liking or your project needs. I highly suggest reading the [Sass Guidelines 7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern "Sass Guidelines") if you want a more in-depth explanation.  

### <a name="nunjucks"></a>Nunjucks
With [Nunjucks](https://mozilla.github.io/nunjucks/ "Nunjucks") we can modularize our HTML files. In other words, we can break our HTML code in smaller pieces and reuse them freely throughout our project. Nunjucks also lets you use data to populate your markup.

The key features of Nunjucks are **template inheritance**, **includes** (partials), **macros**, **logic - If / For / While** and **filters**. I will not be elaborating on these features since Nunjucks already has good [documentation available](https://mozilla.github.io/nunjucks/templating.html "Nunjucks templatings docs").

Our Nunjucks folder structure looks like this: 



<a name="dependencies"></a>Dependencias
------  
A list of all the dependencies used in this project and a brief explanation for what it is used.  
### NPM
* [`autoprefixer`](https://github.com/postcss/autoprefixer "autoprefixer"): Automatically adds vendor prefixes to CSS rules.  
* [`del`](https://github.com/sindresorhus/del "del"): Deletes files and folders. In this case the `dist/` folder whenever you run the `gulp`  command.   
* [`gulp`](http://gulpjs.com/ "gulp"): Build system that automates common tasks during development.
* [`gulp-cache`](https://github.com/jgable/gulp-cache "gulp-cache"): Caches result of a task. 
* [`gulp-concat`](https://github.com/contra/gulp-concat "gulp-concat"): Concatenates multiple files into one.
* [`gulp-data`](https://github.com/colynb/gulp-data "gulp-data"): Generates the data obect, used in Nunjucks templates
* [`gulp-cssnano`](http://cssnano.co/ "gulp-cssnano"): Minifies and optimizes CSS ( If needed)
* [`gulp-if`](https://github.com/robrich/gulp-if "gulp-if"): Conditionally run tasks.
* [`gulp-imagemin`](https://github.com/sindresorhus/gulp-imagemin "gulp-imagemin"): Optimizes images - PNG, JPG, GIF and SVG.  
* [`gulp-jshint`](https://github.com/spalger/gulp-jshint "gulp-jshint"): Gulp plugin for JSHint. Lints JavaScript errors. 
* [`gulp-nunjucks-render`](https://github.com/carlosl/gulp-nunjucks-render "gulp-nunjucks-render"): Render Nunjucks templates.
* [`gulp-plumber`](https://github.com/floatdrop/gulp-plumber "gulp-plumber"): Prevents pipe breaking caused by errors from gulp plugins.
* [`gulp-postcss`]( "gulp-postcss"): Pipe CSS through several preprocessors (`autoprefixer`, `cssnano`), but only parse it once.
* [`gulp-purgecss`](https://github.com/FullHuman/gulp-purgecss "gulp-purgecss"): Removes unused CSS. Great for cleaning up external resources (e.g. Bootstrap, Font Awesome).  
* [`gulp-sass`](https://github.com/dlmanning/gulp-sass "gulp-sass"): Compiles Sass to CSS with [`libSass`](https://github.com/sass/libsass "libsass").
* [`gulp-size`](https://github.com/sindresorhus/gulp-size "gulp-size"): Display the size of the compiled output in your command line/terminal. 
* [`gulp-sourcemaps`](https://github.com/floridoo/gulp-sourcemaps "gulp-sourcemaps"): Adds inline or external source maps. Useful when debugging compressed code. 
* [`gulp-uglify`](https://github.com/terinjokes/gulp-uglify "gulp-uglify"): Minifies JavaScript. 
* [`gulp-useref`](https://github.com/jonkemp/gulp-useref "gulp-useref"): Concatenates files between `build` blocks in your HTML.
* [`jshint`](https://github.com/jshint/jshint "jshint"): Detects errors in your JavaScript code.
* [`lazypipe`](https://github.com/OverZealous/lazypipe "lazypipe"): Allows you to create a lazily-initialized pipeline.


