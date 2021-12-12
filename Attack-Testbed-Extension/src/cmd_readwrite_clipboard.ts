import * as vscode from 'vscode';
import * as clipboard from 'clipboardy';

export default function() {
    vscode.window.showInformationMessage(`Your clipboard contained "${clipboard.readSync()}"`);
    clipboard.writeSync("my suspicious message");
    vscode.window.showInformationMessage(`but now it contains "${clipboard.readSync()}"`);
}