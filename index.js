var electron = require('electron')
var app = electron.app
var BrowserWindow = electron.BrowserWindow

app.on('ready', function(){
    var appWindow;
    appWindow = new BrowserWindow();
    appWindow.loadURL('http://wuxiaworld.com');

    infoWindow = new BrowserWindow({
        width:400,
        height:300

    });
    //infoWindow.loadURL('file://' + __dirname + '/info.html')
    infoWindow.loadFile('info.html')
});

