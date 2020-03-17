import { ElectronShell, Boundary } from "./models/ElectronShell";
import { BrowserWindow, IpcMain, IpcRenderer } from "electron";
import { updateUserSettings } from "./models/userSettings";
import { resizeWindow } from "./models/resizeWindow";

const registerForMainProcess = (browserWindow: BrowserWindow, mainProcess: IpcMain) => {
    const electronShell = new ElectronShell(browserWindow);
    console.log("registering main process listener - npm module");

    mainProcess.on('resize_app', (_event: any, eventData: Boundary) => {
        console.log("EventData : ", eventData);
        electronShell.resize(eventData);
    });
}

const registerForWindow = (window: Window, ipcRenderer: IpcRenderer) => {
    console.log("registering window listener");

    window.addEventListener('RESIZE_APP',
        (event: MessageEvent) => {
            console.log("IPC Renderer sending: ", event.data);
            ipcRenderer.send("resize_app", event.data);
        });
}

const frame = { resizeWindow }
const setting = { updateUserSettings }
const eventListeners = { registerForMainProcess, registerForWindow };

export default {
    frame,
    setting,
    eventListeners
}
