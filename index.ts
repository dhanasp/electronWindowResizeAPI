
import { ElectronShell } from "./models/ElectronShell";

interface Boundries {
    width: number;
    height: number;
}

export const registerMainProcessListener = (browserWindow : any, mainProcess :any) => {
    const electronShell = new ElectronShell(browserWindow);
    mainProcess.on('resize_app', (eventData: Boundries) => {
        electronShell.resize(eventData);
    });
}

export const registerWindowEventListener = (window: Window, ipcRenderer: any) => {
    window.addEventListener('RESIZE_APP',
        (event: MessageEvent) => {
            ipcRenderer.send("resize_app", event.data);
        }, false);
}