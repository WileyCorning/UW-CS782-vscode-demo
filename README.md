

This repository contains artifacts related to our semester project for UW-Madison CS 782: Advanced Computer and Network Security (Fall 2021). The project is entitled *Very Suspicious Code: A Security Analysis of the VSCode Extension Ecosystem*; its authors are Amanda Xu, Brianna Cochran, and Wiley Corning. See the project report for more information.

## Index

`Attack-Testbed-Extension` contains our demo extension, which shows the potential for a malicious extension to exercise sensitive OS capabilities and perform attacks. It also acts exposes the honest multiplication API.

`API-Consumer-Extension` contains an extension that consumes the multiplication API.

`Malicious-API-Extension` contains an extension that exposes a malicious multiplication API and modifies the consumer to use the malicious API.

`Fake-Extension-Hop-Light` contains our impersonator extension, which mimics the appearance of a third-party color theme on the Marketplace.

`docker-target` is a small Flask web server application designed (as part of a third-party tutorial) to be packaged in a Docker container. It can be used as a target to demonstrate the Docker hijacking attack.

`Local-Web-Server` is a simple local web server used to demonstrate how an attacker might exfiltrate data.

## Instructions to replicate attacks

### Install/Run extensions

1. Install `vsce` by running `npm install -g vsce`
2. Run `vsce package` in an extension's top-level directory to produce the `.vsix` file.
3. Run `code --install-extension myextension.vsix` to install an extension from a `.vsix` file. Replace `myextension.vsix` with the appropriate filename.
4. Alternatively, run an extension directly in the Extension Development Host by pressing `F5` when editing an extension's source. May need to run steps 1 and 2 beforehand if this does not work.

### Run specific attacks
**Docker attack**

1. Install the `ms-azuretools.vscode-docker` extension from the offical VSCode Markeplace.
2. Install or run  `Attack-Testbed-Extension`.
3. Go to Command Palette and run the `CS782: Install malicious patch into Docker extension` command.

**API spoofing attack**
1. Package and install `Attack-Testbed-Extension` and `API-Consumer-Extension`.
2. Press `F5` from any extension directory.
3. Go to Command Palette and run the `CS782: Consumer` command.
4. Verify Debug Console contains `5` in the output.
5. Package and install `Malicious-API-Extension`.
6. Repeat steps 2-4.
7. Verify Debug Console now contains `42` in the output.

**Exfiltrate MAC Address**

We only exfiltrate data for this one attack as a demo but it could easily be applied to all other attacks where exfiltrating data is needed.

1. `cd Local-Web-Server`
2. `npm install`
3. Run `node index.js` to start the local web server on port 3000.
4. Install or run  `Attack-Testbed-Extension`
5. Go to Command Palette and run the `CS782: Exfiltrate this device's mac address` command.
6. Check the terminal output for the POST request object containing the MAC address.

**All other attacks** 

Install or run  `Attack-Testbed-Extension` and run commands from the Command Palette. All commands are prefixed with `CS782`.

`CS782: Run an executable as administrator` can only be run on a Windows machine. To do so, uncomment the commented lines in `Attack-Testbed-Extension/src/cmd_run_exe_admin.ts`.


### Publish extensions
Follow the official VSCode instructions here: https://code.visualstudio.com/api/working-with-extensions/publishing-extension

