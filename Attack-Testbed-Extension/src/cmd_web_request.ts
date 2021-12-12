
import * as vscode from 'vscode';
const fetch = require('node-fetch');

export default function() {
    fetch('https://wjlc.io').then((res:any)=>res.text()).then((text:string)=> {
        vscode.window.showInformationMessage(`Got ${text}`);
    });
}