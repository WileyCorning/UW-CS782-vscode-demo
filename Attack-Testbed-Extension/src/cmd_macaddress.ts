import * as vscode from 'vscode';
const macaddress = require('macaddress');

export default function() {
    macaddress.one((err:any,mac:any) => {
        vscode.window.showInformationMessage(`Your mac address is ${mac}!`);
    });
}