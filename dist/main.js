"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isElectronPackaged = exports.isDev = void 0;
const isDev = process.env.ELECTRON_ENV !== 'production';
exports.isDev = isDev;
const isElectronPackaged = process.mainModule.filename.indexOf('app.asar') !== -1;
exports.isElectronPackaged = isElectronPackaged;