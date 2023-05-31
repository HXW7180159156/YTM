// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as cp from 'child_process';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('YTM32 toolchain package install extension is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('extension.ytmInstallToolchain', () => {
		// The code you place here will be executed every time your command is executed

		const script = 'path/to/script.sh';// the path to toolchain package download and install script

		cp.exec(script, (err, stdout, stderr) => {
			if (err) {
			vscode.window.showErrorMessage(`Error: ${err.message}`);
			return;
			}
			vscode.window.showInformationMessage('Toolchain installed successfully!');
		});


		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}
