# Introduction

A module to get simply Nodejs or Electron execution environment (development, production or packaged)

# Installation

```
npm i "@lovely.sh/get-exec-env"
```

# Example of usage

```
const { isDev, isElectronPackaged } = require('@lovely.sh/get-exec-env');

if (isDev) {
  console.log('Running on development');
}

if (isElectronPackaged) {
  console.log('Electron application is currently packaged');
}
```
