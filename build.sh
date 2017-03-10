#!/bin/sh
npm cache clean
rm -rf ./build
rm -rf ./carabistouille1
rm -rf ./carabistouille2
rm -rf ./node_modules
npm i
cd node_modules/leveldown
node-gyp rebuild --target=1.6.2 --arch=x64 --dist-url=https://atom.io/download/electron
cd ../..
