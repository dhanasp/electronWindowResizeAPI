import { BrowserWindow, IpcMain, IpcRenderer } from "electron";
import { ElectronShell } from "./models/ElectronShell";

interface Boundries {
    width: number;
    height: number;
}

export const registerMainProcessListener = (browserWindow: BrowserWindow, mainProcess: IpcMain) => {
    const electronShell = new ElectronShell(browserWindow);
    mainProcess.on('resize_app', (event, eventData: Boundries) => {
        electronShell.resize(eventData);
    });
}

export const registerWindowEventListener = (window: Window, ipcRenderer: IpcRenderer) => {
    window.addEventListener('RESIZE_APP',
        (event: MessageEvent) => {
            ipcRenderer.send("resize_app", event.data);
        }, false);
}