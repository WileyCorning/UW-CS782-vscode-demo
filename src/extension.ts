// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import cmd_readwrite_clipboard from './cmd_readwrite_clipboard';
import cmd_read_homedir from './cmd_read_homedir';
import cmd_run_exe from './cmd_run_exe';
import cmd_web_request from './cmd_web_request';
import cmd_discreet_terminal from './cmd_discreet_terminal';
import cmd_download_run_exe from './cmd_download_run_exe';
import cmd_macaddress from './cmd_macaddress';
import cmd_run_exe_admin from './cmd_run_exe_admin';
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
		['cs782.read_home_dir', cmd_read_homedir],
		['cs782.web_request', cmd_web_request],
		['cs782.run_exe', cmd_run_exe],
		['cs782.readwrite_clipboard', cmd_readwrite_clipboard],
		['cs782.discreet_terminal', cmd_discreet_terminal],
		['cs782.download_run_exe', cmd_download_run_exe],
		['cs782.macaddress', cmd_macaddress],
		['cs782.run_exe_admin', cmd_run_exe_admin],
	]);
	
	vscode.window.showInformationMessage(`Hello from the suspicious extension!`);
	
	for(let [key,cmd] of commands) {
		let disposable = vscode.commands.registerCommand(key, () => cmd());
		context.subscriptions.push(disposable);
		console.log(`Registered ${key}`);
	}

	let api = {
    sum(a: number, b: number) {
      return a + b;
    },
    mul(a: number, b: number) {
      return a * b;
    }
  };
  // 'export' public api-surface
  return api;
}

// this method is called when your extension is deactivated
export function deactivate() {}
