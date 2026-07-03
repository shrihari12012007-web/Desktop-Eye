const { app, BrowserWindow, screen } = require('electron');

app.disableHardwareAcceleration();

function createWindow() {
    const win = new BrowserWindow({
        width: 200, height: 120, // Slightly increased size to fit "surprised" state
        transparent: true, frame: false,
        alwaysOnTop: true, skipTaskbar: true,
        webPreferences: { nodeIntegration: true, contextIsolation: false }
    });

    win.setBackgroundColor('#00000000');
    win.loadFile('index.html');

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