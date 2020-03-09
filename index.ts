
import { ElectronShell } from "./models/ElectronShell";
import { BrowserWindow, IpcMain, IpcRenderer } from "electron";

interface Boundries {
    width: number;
    height: number;
}

export const registerMainProcessListener = (browserWindow: BrowserWindow, mainProcess: IpcMain) => {
    const electronShell = new ElectronShell(browserWindow);
    console.log("registering main process listener - npm module");

    mainProcess.on('resize_app', (_event: any, eventData: Boundries) => {
        console.log("EventData : ", eventData);
        electronShell.resize(eventData);
    });
}

export const registerWindowEventListener = (window: Window, ipcRenderer: IpcRenderer) => {
    console.log("registering window listener");

    window.addEventListener('RESIZE_APP',
        (event: MessageEvent) => {
            console.log("IPC Renderer sending: ", event.data);
            ipcRenderer.send("resize_app", event.data);
        });
}