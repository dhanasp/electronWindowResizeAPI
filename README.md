# mccartney-sdk
This is a node module which will have some common functionality, which can be consumed by LSW and Infoboard both

## Right now what is available
This package is created as part of POC, it is not a fully fledged sdk. Right now the package offers
 1. API to resize the electron window
 2. front end event for updating the settings to electron store.

## How to consume this node module
This node package is not published yet, to consume it make sure to run`npm install` and `npm run build` and after then follow `npm link` feature to use the package. More details on npm link feature https://medium.com/@alexishevia/the-magic-behind-npm-link-d94dcb3a81af

## How to use exposed methods

### import with es6
`import sdk from mccartney-sdk`

### import with es5
`const sdk = require('mccartney-sdk').default`

use `sdk.frame.resizeWindow({width: <number>, height: <number>})` for triggering the resize window event from frontend.

use `sdk.eventListeners.registerForMainProcess(browserWindow:<BrowserWindow>,mainProcess:<IpcMain>)` in the electron main process.


use `sdk.eventListeners.registerForWindow(window: <Window>, ipcRenderer: <IpcRenderer>)` in the electron renderer process.


use `sdk.setting.updateUserSettings(setting:<Object>)` for triggering the update settings event from frontend.
