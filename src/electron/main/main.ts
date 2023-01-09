import { app, BrowserWindow } from 'electron'
import electronReload from 'electron-reload'
import path from 'path'

electronReload(__dirname, {})

app.whenReady().then(() => {
  void new BrowserWindow({
    width: 400,
    height: 600,
    // frame: false,
    darkTheme: true,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  }).loadFile(path.join(__dirname, '../../index.html'))
}).catch(err => console.error(err))

app.on('window-all-closed', () => {
  // if (process.platform !== 'darwin') app.quit()
  app.quit()
})

// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
// app.on('activate', function () {
//   if (BrowserWindow.getAllWindows().length === 0) createWindow()
// })