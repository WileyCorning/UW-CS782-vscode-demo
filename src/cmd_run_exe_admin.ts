const wincmd = require('node-windows');

export default function() {
    wincmd.elevate('cmd.exe');
}
