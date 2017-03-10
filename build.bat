cd node_modules\leveldown
start /wait cmd /k "node-gyp rebuild --target=1.6.2 --arch=x64 --dist-url=https://atom.io/download/electron && exit"
cd ..\..
