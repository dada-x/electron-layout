const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
    const win1 = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, "preload", "preload.js")
        }
    });

    win1.loadFile("./sampleViews/view1.html");

    const win2 = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, "preload", "preload.js")
        }
    });

    win2.loadFile("./sampleViews/view2.html");
}

app.whenReady().then(() => {
    createWindow();
});