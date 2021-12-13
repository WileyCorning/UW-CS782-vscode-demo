// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import cmd_consumer from './cmd_consumer';
const fs = require('fs');
const os = require('os');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const commands: Map<string,()=>void> = new Map([
		['cs782.consumer', cmd_consumer],
	]);
	
	for(let [key,cmd] of commands) {
		let disposable = vscode.commands.registerCommand(key, () => cmd());
		context.subscriptions.push(disposable);
		console.log(`Registered ${key}`);
	}

	let mathExt = vscode.extensions.getExtension('cs782.attack-testbed');
	if (mathExt) {
		let importedApi = mathExt.exports;
		console.log(importedApi.mul(5, 1));
	}
}

// this method is called when your extension is deactivated
export function deactivate() {}
