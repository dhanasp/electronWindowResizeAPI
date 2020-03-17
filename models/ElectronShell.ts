import { BrowserWindow } from "electron";

export interface Boundary {
    width: number,
    height: number,
}

export class ElectronShell {
    private browserWindow: BrowserWindow;
    private isExpanded: boolean;
    private defaultConfig: Boundary;

    constructor(browserWindow: BrowserWindow) {
        this.browserWindow = browserWindow;
        this.isExpanded = false;
        this.defaultConfig = { width: browserWindow.getBounds().width, height: browserWindow.getBounds().height };
    }

    private shouldExpand(): boolean {
        return !this.isExpanded;
    }

    private setIsExpanded(isExpanded: boolean) {
        this.isExpanded = isExpanded;
    }

    private getDefaultHeight(): number {
        return this.defaultConfig.height;
    }

    private getDefaultWidth(): number {
        return this.defaultConfig.width;
    }

    public resize(boundary: Boundary) {
        const newWidth = this.shouldExpand() ? boundary.width : this.getDefaultWidth();
        const newHeight = this.shouldExpand() ? boundary.height : this.getDefaultHeight();

        //https://github.com/electron/electron/issues/15560
        //workaround provided by electron when resizable is set to false
        this.browserWindow.setMinimumSize(newWidth, newHeight);
        this.browserWindow.setSize(newWidth, newHeight);
        this.setIsExpanded(!this.isExpanded);
    }
}
