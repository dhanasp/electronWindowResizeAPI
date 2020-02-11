import { BrowserWindow, IpcMain, IpcRenderer } from "electron";


interface Boundries {
    width: number;
    height: number;
}

export const registerMainProcessListener = (browserWindow: BrowserWindow, mainProcess: IpcMain, rendererProcess: IpcRenderer) => {
    mainProcess.on('resize_app', (event, eventData: Boundries) => {
        console.log("coming from module - browser default specs", browserWindow.getBounds());
        browserWindow.setSize(eventData.width, eventData.height);
        console.log("coming from module - changed size", browserWindow.getBounds());
    });
}

export const registerWindowEventListener = (window: Window, ipcRenderer: IpcRenderer) => {
    window.addEventListener('RESIZE_APP',
        (event: MessageEvent) => {
            console.log("event got added with data: ", event.data);
            ipcRenderer.send("resize_app", event.data);
        }, false);
}