const { spawn, exec } = require('child_process');
export default function() {
    exec("start",['cmd.exe']);
}