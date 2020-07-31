//electron has two properties app and browserWindow
const {app , BrowserWindow} = require('electron');

//defining property of window 
function createWindow(){
    const win = new BrowserWindow({
        width :800,
        height: 800,
        show : false,
        webPreferences : {
            nodeIntegration : true
        }
    });

    //loading file in app
    win.loadFile('index.html').then(function (){
        win.removeMenu();
        win.maximize();
        win.show();
    });
}

//open app when ready 
app.whenReady().then(createWindow);













//for mac
// app.on('window=all-closed', () => {
//     if(process.platform !== 'darwin'){
//         app.quit();
//     }
// })
// app.on('activate', ()=>{
//     if(BrowserWindow.getAllWindows().length===0){
//         createWindow()
//     }
// }) 