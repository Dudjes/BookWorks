import { app, BrowserWindow, ipcMain, Menu } from "electron";
import path from "path";
import "./database.cjs";

const isDev = process.env.NODE_ENV === "development";
if (isDev) {
  app.disableHardwareAcceleration();
  app.commandLine.appendSwitch("disable-gpu");
}

let mainWindow: BrowserWindow | null = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    minWidth: 1200,
    minHeight: 800,
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
    },
  });

  Menu.setApplicationMenu(null);

  if (isDev) {
    mainWindow.loadURL("http://localhost:5173");
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, "../dist/index.html")}`);
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

type IpcHandler = (...args: any[]) => unknown;
const handlers: Record<string, IpcHandler> = {};

for (const [channel, handler] of Object.entries(handlers)) {
  ipcMain.handle(channel, (_event, ...args) => handler(...args));
}

app
  .whenReady()
  .then(() => {
    createWindow();

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  })
  .catch((err) => {
    console.error("Failed to start Electron app:", err);
    app.quit();
  });

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});