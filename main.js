const { app, BrowserWindow, screen } = require('electron');

app.disableHardwareAcceleration();

function createWindow() {
    const win = new BrowserWindow({
        width: 160, height: 90,
        transparent: true, frame: false,
        alwaysOnTop: true, skipTaskbar: true,
        webPreferences: { nodeIntegration: true, contextIsolation: false }
    });

    win.setBackgroundColor('#00000000');
    win.loadFile('eyes.html');

    setInterval(() => {
        const mouse = screen.getCursorScreenPoint();
        const winPos = win.getPosition();
        win.webContents.send('move-pupils', { 
            mouseX: mouse.x, mouseY: mouse.y, 
            winX: winPos[0], winY: winPos[1] 
        });
    }, 16);
}

app.whenReady().then(createWindow);