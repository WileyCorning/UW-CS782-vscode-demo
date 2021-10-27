// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import cmd_readwrite_clipboard from './cmd_readwrite_clipboard';
import cmd_read_homedir from './cmd_read_homedir';
import cmd_run_exe from './cmd_run_exe';
import cmd_web_request from './cmd_web_request';
const fs = require('fs');
const os = require('os');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const commands: Map<string,()=>void> = new Map([
		['helloworld.read_home_dir', cmd_read_homedir],
		['helloworld.web_request', cmd_web_request],
		['helloworld.run_exe', cmd_run_exe],
		['helloworld.readwrite_clipboard', cmd_readwrite_clipboard],
	]);
	
	for(let [key,cmd] of commands) {
		let disposable = vscode.commands.registerCommand(key, () => cmd());
		context.subscriptions.push(disposable);
		console.log(`Registered ${key}`);
	}
}

// this method is called when your extension is deactivated
export function deactivate() {}
