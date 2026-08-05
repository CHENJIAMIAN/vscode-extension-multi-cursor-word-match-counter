[中文](./README.md)

# VS Code Extension: Multi-Cursor Word Match Counter

## Introduction

This extension helps developers quickly count matches for the word at the cursor in the current VS Code document. It can also append the count at the cursor position.

## Features

1. **Count Word Matches**
   - Command: Count Word Matches
   - Counts matches for the word at the cursor and displays the result in a new document.
   - Use it to find how often a word occurs in the current document.

2. **Append Count Word Matches**
   - Command: Append Count Word Matches
   - Counts matches for the word at the cursor and inserts the result at the cursor.
   - Use it to annotate a word occurrence count directly in the document.

## Installation and Use

1. In VS Code, open the Extensions Marketplace and install vscode-multi-cursor-word-match-counter.
2. Open a document, place the cursor on a word, then use Ctrl+Shift+P to run Count Word Matches or Append Count Word Matches.

## Development

1. Install Node.js and pnpm, then clone this repository and run pnpm install.
2. Run pnpm run compile to compile TypeScript, or press F5 in VS Code to debug.

## Configuration Files

- tasks.json defines compilation tasks.
- launch.json defines debug settings.
- package.json defines extension metadata and dependencies.

## Example

~~~typescript
vscode.commands.registerCommand('vscode-multi-cursor-word-match-counter.countWordMatches', () => {
  // Implementation code
});

vscode.commands.registerCommand('vscode-multi-cursor-word-match-counter.appendCountWordMatches', () => {
  // Implementation code
});
~~~

## Contributions

Issues and pull requests are welcome. Use the GitHub repository for questions and suggestions.
