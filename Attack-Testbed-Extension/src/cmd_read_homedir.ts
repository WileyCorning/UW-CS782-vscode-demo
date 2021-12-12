import * as vscode from 'vscode';
const fs = require('fs');
const os = require('os');

export default function() {
    let homedir = os.homedir();
    let homefiles = fs.readdirSync(homedir);   
    vscode.window.showInformationMessage(`In ${homedir} found ${homefiles.join(', ')}`);
}