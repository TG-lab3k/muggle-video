import {
    app, BrowserWindow
} from 'electron';

import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
function createWindow() {

    const win = new BrowserWindow({

        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    //win.loadFile('index.html');
    if (process.env.NODE_ENV === 'development') {
        win.loadURL('http://localhost:5173')
        //win.webContents.openDevTools()
    } else {
        //win.loadFile(path.join(__dirname, '../dist/index.html'))
        //win.loadFile('index.html');
        const indexHtmlPath = path.join(__dirname, '../dist/index.html');
        //使用 fileURLToPath 确保路径格式正确，尤其是在 Windows 上
        win.loadFile(fileURLToPath(indexHtmlPath));
        //win.loadFile(indexHtmlPath);
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
