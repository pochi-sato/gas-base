pack:
	node_modules/gulp/bin/gulp.js compile

up:
	gapps upload

packup:
	make pack
	make up

hotload:
	node sbin/watch.js ./src 'make packup'
