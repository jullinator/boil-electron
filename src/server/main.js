const {app, BrowserWindow}  = require('electron')
const {auth , db} = require('../firebase/initFire')
const {ipcMain, state} = require('./events')

auth.signInWithEmailAndPassword('justus.karlsson@hotmail.se', 'jeosge96')
auth.onAuthStateChanged(user=>{
  user ? watchDb() : console.log('logged out');
})

function watchDb(){
  console.log('logged in')
  state.on('firebase-update', count=> { db.ref('works').set(count) })

  db.ref('works').on('value', snap=>console.log('firebase val:'+snap.val()))
}

let mainWindow
function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(`file://${__dirname}/../client/flashcard/add.html`)
   //mainWindow.loadURL(`file://${__dirname}/../client/user/index.html`)

  ipcMain.on('route', (event, route)=>{
      mainWindow.loadURL(`file://${__dirname}/../client/${route}.html`)
  })
  ipcMain.on('load-pdf', (event, filename)=>{
      var pdfWindow = new BrowserWindow({width:1200, height:1000})
      pdfWindow.loadURL(`file://${__dirname}/../assets/pdfjs/web/viewer.html?file=../../${filename}.pdf`)
  })
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}


app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
