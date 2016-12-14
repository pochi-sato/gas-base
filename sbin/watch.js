//require
var chokidar = require("chokidar"),
    execSync = require('child_process').execSync,
    targetDir = process.argv[2],
    callbackCmd = process.argv[3];

//chokidarの初期化
var watcher = chokidar.watch(targetDir, {
    ignored:/[\/\\]\./,
    persistent:true
});

//イベント定義
watcher.on('ready',function(){

    //準備完了
    console.log("ready watching...");

    //ファイルの追加
    watcher.on('add',function(path){
        console.log(path + " added.");
        execSync(callbackCmd);
        console.log("callback done.");
    });

    //ファイルの編集
    watcher.on('change',function(path){
        console.log(path + " changed.");
        execSync(callbackCmd);
        console.log("callback done.");
    });
});
