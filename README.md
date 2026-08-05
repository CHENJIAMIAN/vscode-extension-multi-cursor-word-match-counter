<!-- codex-github-rules:bilingual-summary -->
> **中文简介**：统计多光标单词匹配数的 VS Code 扩展

> **English summary**: A VS Code extension for counting multi-cursor word matches

---

### VS Code 插件：多光标单词匹配统计器

#### 插件简介
本插件旨在帮助开发者在 VS Code 中快速统计当前文档中与光标所在单词匹配的数量，并支持将统计结果追加到光标位置。

#### 功能说明
1. **统计单词匹配数量**：
   - 命令：`Count Word Matches`
   - 功能：统计当前文档中与光标所在单词匹配的数量，并在新文档中显示结果。
   - 使用场景：当你想知道某个单词在文档中出现的次数时，可以使用此功能。

2. **追加统计单词匹配数量**：
   - 命令：`Append Count Word Matches`
   - 功能：统计当前文档中与光标所在单词匹配的数量，并将结果追加到光标位置。
   - 使用场景：当你想在文档中直接标注某个单词的出现次数时，可以使用此功能。

#### 安装与使用
1. **安装**：
   - 在 VS Code 中，打开扩展市场，搜索 `vscode-multi-cursor-word-match-counter` 并安装。

2. **使用**：
   - 打开一个文档，将光标放置在某个单词上。
   - 按下 `Ctrl+Shift+P` 打开命令面板，输入 `Count Word Matches` 或 `Append Count Word Matches` 并执行。

#### 开发说明
1. **开发环境**：
   - 确保已安装 Node.js 和 pnpm。
   - 克隆本仓库并运行 `pnpm install` 安装依赖。

2. **编译与调试**：
   - 运行 `pnpm run compile` 编译 TypeScript 代码。
   - 在 VS Code 中按下 `F5` 启动调试。

#### 配置文件
- `tasks.json`：定义了编译任务的配置。
- `launch.json`：定义了调试配置。
- `package.json`：定义了插件的元数据和依赖。

#### 示例代码
```typescript
// 统计单词匹配数量
vscode.commands.registerCommand('vscode-multi-cursor-word-match-counter.countWordMatches', () => {
  // 实现代码
});

// 追加统计单词匹配数量
vscode.commands.registerCommand('vscode-multi-cursor-word-match-counter.appendCountWordMatches', () => {
  // 实现代码
});
```

#### 贡献与反馈
欢迎提交 Issue 和 Pull Request 来改进本插件。如有任何问题或建议，请通过 GitHub 仓库联系我们。

---

### VS Code Extension: Multi-Cursor Word Match Counter

#### Introduction
This extension helps developers quickly count the number of matches for the word at the cursor position in the current document in VS Code, and supports appending the count result to the cursor position.

#### Features
1. **Count Word Matches**:
   - Command: `Count Word Matches`
   - Function: Counts the number of matches for the word at the cursor position in the current document and displays the result in a new document.
   - Use Case: Use this feature when you want to know how many times a word appears in the document.

2. **Append Count Word Matches**:
   - Command: `Append Count Word Matches`
   - Function: Counts the number of matches for the word at the cursor position in the current document and appends the result to the cursor position.
   - Use Case: Use this feature when you want to annotate the occurrence count of a word directly in the document.

#### Installation & Usage
1. **Installation**:
   - In VS Code, open the Extensions Marketplace, search for `vscode-multi-cursor-word-match-counter`, and install it.

2. **Usage**:
   - Open a document and place the cursor on a word.
   - Press `Ctrl+Shift+P` to open the command palette, type `Count Word Matches` or `Append Count Word Matches`, and execute.

#### Development Notes
1. **Development Environment**:
   - Ensure Node.js and pnpm are installed.
   - Clone this repository and run `pnpm install` to install dependencies.

2. **Compilation & Debugging**:
   - Run `pnpm run compile` to compile TypeScript code.
   - Press `F5` in VS Code to start debugging.

#### Configuration Files
- `tasks.json`: Defines the configuration for the compilation task.
- `launch.json`: Defines the debugging configuration.
- `package.json`: Defines the metadata and dependencies of the extension.

#### Example Code
```typescript
// Count Word Matches
vscode.commands.registerCommand('vscode-multi-cursor-word-match-counter.countWordMatches', () => {
  // Implementation code
});

// Append Count Word Matches
vscode.commands.registerCommand('vscode-multi-cursor-word-match-counter.appendCountWordMatches', () => {
  // Implementation code
});
```

#### Contribution & Feedback
We welcome Issues and Pull Requests to improve this extension. If you have any questions or suggestions, please contact us via the GitHub repository.