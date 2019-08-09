export const isNodeDev = process.env.NODE_ENV !== 'production';

export const isElectronDev = process.env.ELECTRON_ENV !== 'production';

export const isElectronPackaged = process.mainModule.filename.indexOf('app.asar') !== -1;
