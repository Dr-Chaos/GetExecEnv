# Introduction

A module to get simply Nodejs or Electron execution environment (development, production or packaged)

# Installation

```
yarn add "@lovely.sh/get-exec-env"
```

# Example of usage

```
const { isNodeDev, isElectronDev, isElectronPackaged } = require('@lovely.sh/get-exec-env');

if (isNodeDev) {
  console.log('Electron running on development');
}

if (isElectronDev) {
  console.log('Electron running on development');
}

if (isElectronPackaged) {
  console.log('Electron application is currently packaged');
}
```
