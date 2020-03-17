import { Boundary } from "./ElectronShell"

export const resizeWindow = (boundary: Boundary) => {
    const resizeWindowEvent = new MessageEvent("RESIZE_APP", {
        data: {
            width: boundary.width,
            height: boundary.height
        }
    })

    window.dispatchEvent(resizeWindowEvent);
}