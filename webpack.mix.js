const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('./frontend/js/app.jsx', './public/js')
    .sass('./frontend/scss/main.scss', './public/css')
    

if(mix.inProduction()){
    mix.version();
}else{
    mix.sourceMaps();
}    

//javascript em compressão

//browser - devtools

//sourcemaps

//app.js
//asldfkjasçdlkfjsodiuyqi87698217649876sjkhfkljshfaf8764298476

//xpto.js
//breakpoint
//line 1 const name = 'Luiz';
//line 2 chamada do React.js

//copy arquivos
//processar urls em arquivos css

//pagina1
//pagina2
//pagina3

//validar no meu codigo - linter
//compressao
//processos de melhorias no código-fonte
//obsfucar javascript

/*.js('frontend/js/pagina1.js', 'public/js')
    .js('frontend/js/pagina2.js', 'public/js')
    .js('frontend/js/pagina3.js', 'public/js')*/

/*.sass('frontend/scss/pagina1.scss', 'public/css')
    .sass('frontend/scss/pagina2.scss', 'public/css')
    .sass('frontend/scss/pagina3.scss', 'public/css');*/