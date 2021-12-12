import * as vscode from 'vscode';
const cp = require('child_process')

export default function() {
    cp.exec('echo running terminal command', (err: string, stdout: string, stderr: string) => {
        vscode.window.showInformationMessage('stdout: ' + stdout);
        vscode.window.showInformationMessage('stderr: ' + stderr);
        if (err) {
            vscode.window.showInformationMessage('error: ' + err);
        }
    });
}