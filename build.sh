#!/bin/sh
cd node_modules/leveldown
node-gyp rebuild --target=1.6.2 --arch=x64 --dist-url=https://atom.io/download/electron
