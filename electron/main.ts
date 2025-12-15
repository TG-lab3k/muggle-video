import {
    app, BrowserWindow
} from 'electron';

import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
function createWindow() {

    const win = new BrowserWindow({

        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    if (process.env.NODE_ENV === 'development') {
        win.loadURL('http://localhost:5173')
        //win.webContents.openDevTools()
    } else {
        win.loadFile(path.join(__dirname, '../dist/index.html'))
    }
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
