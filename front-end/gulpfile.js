const gulp     = require('gulp')
const sass     = require('gulp-sass')
const plumber  = require('gulp-plumber')
const gutil    = require('gulp-util')
const eslint   = require('gulp-eslint')
const webpack  = require('webpack')
const csscomb  = require('gulp-csscomb')
const pleeease = require('gulp-pleeease')
const cached   = require('gulp-cached')
const run      = require('run-sequence')
const browserSync  = require('browser-sync').create()

const CONFIG = {
  path: {
    src: './src',
    dist: '../app/assets'
  },

  sass: {
    outputStyle: 'nested'
  },

  pleeease: {
    minifier : false,
    mqpacker : true,
    import   : false,
    browsers : [
      '> 1% in JP'     ,
      'last 2 versions',
      'ie >= 8'
    ]
  },

  browserSync: {
    proxy     : "localhost:3000"
  }
}

gulp.task('browser-sync', () => {
  browserSync.init(CONFIG.browserSync);
});

gulp.task('eslint', () => {
  return gulp.src(CONFIG.path.src + '/**/*.js')
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('webpack', (done) => {
  webpack(require('./webpack.config'), (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString());
    done();
  });
});

gulp.task('webpack:dev', (done) => {
  const compiler = webpack(require('./webpack.config.dev'));

  compiler.watch(200, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString());
    browserSync.reload()
  });
});

gulp.task('sass', () => {
  return (
    gulp.src([
      CONFIG.path.src + '/scss/style.scss'
    ])
    .pipe(plumber())
    .pipe(sass(CONFIG.sass).on('error', sass.logError))
    .pipe(pleeease(CONFIG.pleeease))
    .pipe(csscomb())
    .pipe(gulp.dest(`${CONFIG.path.dist}/stylesheets`))
  );
})

gulp.task('sass-watch', ['sass'], () => {
  browserSync.reload()
})

gulp.task('default', ['browser-sync'], (done) => {
  run(['webpack:dev', 'sass'], done);

  gulp.watch(CONFIG.path.src + '/**/*.scss', ['sass-watch'])
});
