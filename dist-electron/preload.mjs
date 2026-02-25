"use strict";
const electron = require("electron");
const api = {
  getConfig: () => electron.ipcRenderer.invoke("get-config"),
  getState: () => electron.ipcRenderer.invoke("get-state"),
  saveConfig: (cfg) => electron.ipcRenderer.invoke("save-config", cfg),
  start: () => electron.ipcRenderer.invoke("start"),
  stop: () => electron.ipcRenderer.invoke("stop"),
  testSitrad: (cfg) => electron.ipcRenderer.invoke("test-sitrad-api", cfg),
  minimizeWindow: () => electron.ipcRenderer.invoke("window-minimize"),
  toggleMaximizeWindow: () => electron.ipcRenderer.invoke("window-toggle-maximize"),
  closeWindow: () => electron.ipcRenderer.invoke("window-close")
};
electron.contextBridge.exposeInMainWorld("electronAPI", api);
