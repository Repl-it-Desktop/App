const {BrowserWindow,app} = require("electron");
DiscordRPC = require("discord-rpc")
function createWindow(){
  clientId = 561673882428243968
    let win = new BrowserWindow({
        height: 600,
        width: 800,
        icon : "Images/logo.png",
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile("index.html")
    function close(){
      console.log("bye :wave:")
    }
    win.webContents.openDevTools()
}

app.on("ready",createWindow);
app.on("activate",()=>{
    if(win == null){
        createWindow();
    }

});
