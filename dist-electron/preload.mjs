"use strict";
const electron = require("electron");
const api = {
  getConfig: () => electron.ipcRenderer.invoke("get-config"),
  getState: () => electron.ipcRenderer.invoke("get-state"),
  saveConfig: (cfg) => electron.ipcRenderer.invoke("save-config", cfg),
  start: () => electron.ipcRenderer.invoke("start"),
  stopWithAuth: (password) => electron.ipcRenderer.invoke("stop-with-auth", password),
  onStopAuthRequested: (callback) => {
    const listener = () => callback();
    electron.ipcRenderer.on("request-stop-auth", listener);
    return () => electron.ipcRenderer.off("request-stop-auth", listener);
  },
  onCollectorRuntimeEvent: (callback) => {
    const listener = (_event, payload) => {
      callback(payload);
    };
    electron.ipcRenderer.on("collector-runtime-event", listener);
    return () => electron.ipcRenderer.off("collector-runtime-event", listener);
  },
  testSitrad: (cfg) => electron.ipcRenderer.invoke("test-sitrad-api", cfg),
  minimizeWindow: () => electron.ipcRenderer.invoke("window-minimize"),
  toggleMaximizeWindow: () => electron.ipcRenderer.invoke("window-toggle-maximize"),
  closeWindow: () => electron.ipcRenderer.invoke("window-close")
};
electron.contextBridge.exposeInMainWorld("electronAPI", api);
