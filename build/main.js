"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const electron_reload_1 = __importDefault(require("electron-reload"));
const path_1 = __importDefault(require("path"));
(0, electron_reload_1.default)(__dirname, {});
electron_1.app.whenReady().then(() => {
    void new electron_1.BrowserWindow({
        darkTheme: true,
        width: 200,
        height: 100,
        webPreferences: {
            preload: path_1.default.join(__dirname, 'preload.js')
        }
    }).loadFile(path_1.default.join(__dirname, 'index.html'));
}).catch(err => console.error(err));
electron_1.app.on('window-all-closed', () => {
    // if (process.platform !== 'darwin') app.quit()
    electron_1.app.quit();
});
// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
// app.on('activate', function () {
//   if (BrowserWindow.getAllWindows().length === 0) createWindow()
// })
