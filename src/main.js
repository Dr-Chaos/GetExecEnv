export const isDev = process.env.ELECTRON_ENV !== 'production';

export const isElectronPackaged = process.mainModule.filename.indexOf('app.asar') !== -1;
