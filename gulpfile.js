'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

// タスクの登録
gulp.task('compile', () =>
  gulp.src('src/**/*.js') // 読み込むファイル
    .pipe(babel()) // babelを実行
    .pipe(gulp.dest('dist')) // 出力先
);
