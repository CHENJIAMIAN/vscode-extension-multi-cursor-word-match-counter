// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "multi-cursor-word-match-counter" is now active!');


	const disposableCountWordMatches = vscode.commands.registerCommand('multi-cursor-word-match-counter.countWordMatches', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showInformationMessage(vscode.l10n.t('No active editor.'));
			return;
		}

		const document = editor.document;
		const selections = editor.selections;
		const results: string[] = [];

		selections.forEach(selection => {
			const wordRange = document.getWordRangeAtPosition(selection.active);
			if (wordRange) {
				const word = document.getText(wordRange);
				const text = document.getText();
				const regex = new RegExp(`\\b${word}\\b`, 'g');
				const matches = text.match(regex);
				const count = matches ? matches.length : 0;
				results.push(`${word} ${count}`);
			} else {
				results.push(vscode.l10n.t('No word at cursor.'));
			}
		});

		const resultContent = results.join('\n');
		vscode.workspace.openTextDocument({ content: resultContent }).then(doc => {
			vscode.window.showTextDocument(doc);
		});
	});

	const disposableAppendCountWordMatches = vscode.commands.registerCommand('multi-cursor-word-match-counter.appendCountWordMatches', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showInformationMessage(vscode.l10n.t('No active editor.'));
			return;
		}

		const document = editor.document;
		const selections = editor.selections;
		const edit = new vscode.WorkspaceEdit();

		selections.forEach(selection => {
			const wordRange = document.getWordRangeAtPosition(selection.active);
			if (wordRange) {
				const word = document.getText(wordRange);
				const text = document.getText();
				const regex = new RegExp(`\\b${word}\\b`, 'g');
				const matches = text.match(regex);
				const count = matches ? matches.length : 0;
				const result = ` ${count}`;
				edit.insert(document.uri, new vscode.Position(selection.active.line, selection.active.character), result);
			}
		});

		vscode.workspace.applyEdit(edit);
	});

	context.subscriptions.push(disposableCountWordMatches);
	context.subscriptions.push(disposableAppendCountWordMatches);
}

// This method is called when your extension is deactivated
export function deactivate() {}
