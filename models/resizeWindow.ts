import { Boundries } from "./ElectronShell"



export const resizeWindow = (boundry: Boundries) => {
    const resizeWindowEvent = new MessageEvent("RESIZE_APP", {
        data: {
            width: boundry.width,
            height: boundry.height
        }
    })

    window.dispatchEvent(resizeWindowEvent);
}