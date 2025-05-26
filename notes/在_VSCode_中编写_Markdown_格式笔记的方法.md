<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

## 在 VSCode 中编写 Markdown 格式笔记的方法

Visual Studio Code（VSCode）对 Markdown 有出色的原生支持，非常适合用来编写和管理笔记。你可以通过以下步骤和技巧高效地在 VSCode 中创建和组织 Markdown 笔记：

**1. 创建和组织 Markdown 笔记**

- 新建一个文件夹作为你的笔记库（比如“Notes”），并用 VSCode 打开这个文件夹作为工作区[^1]。
- 在文件夹内创建 `.md` 后缀的 Markdown 文件。可以根据主题、项目、日期等建立子文件夹进行分类管理，例如 `Work`、`Personal`、`Ideas` 等[^1]。

**2. 安装 Markdown 插件**

- 推荐安装 “Markdown All in One” 扩展，提供更好的语法高亮、自动预览、目录生成等功能[^3][^5]。
- 安装后，可以通过快捷键 `Ctrl+Shift+V` 打开 Markdown 预览窗口，实现实时所见即所得的编辑体验[^3]。


## 常用 Markdown 语法

下面是常用的 Markdown 语法示例，适用于 VSCode 及大多数 Markdown 编辑器：


| 语法功能 | Markdown 写法 | 示例效果 |
| :-- | :-- | :-- |
| 一级标题 | `# 标题1` | \# 标题1 |
| 二级标题 | `## 标题2` | \#\# 标题2 |
| 粗体 | `**加粗文本**` | **加粗文本** |
| 斜体 | `*斜体文本*` | *斜体文本* |
| 无序列表 | `- 列表项` 或 `* 列表项` | - 列表项 |
| 有序列表 | `1. 第一项` | 1. 第一项 |
| 链接 | `[描述](网址)` | [百度](https://baidu.com) |
| 图片 | `` |  |
| 代码块 | <code>```语言<br>代码<br>``````python<br>print("hello")<br>``` |  |
| 行内代码 | ```代码``` | `代码` |
| 引用 | `> 引用内容` | > 引用内容 |
| 分割线 | `---` 或 `***` | --- |
| 任务列表 | `- [ ] 未完成`<br>`- [x] 已完成` | - [ ] 未完成<br>- [x] 已完成 |

**3. 特殊提示块（Note Block）**

- 你可以用如下方式高亮笔记中的重要信息（部分 Markdown 渲染器支持）[^2]：

```
> [!NOTE]
> 这是一个重要提示内容。
```

显示效果：
> [!NOTE]
> 这是一个重要提示内容。

**4. 其他技巧与最佳实践**

- 利用标题和子标题（\#、\#\#、\#\#\#）组织结构，便于查找和梳理知识[^4]。
- 用列表（-、*、1.）快速记录要点、任务和总结[^4]。
- 可以自定义模板、代码片段（snippets），提升重复性内容的录入效率[^5]。
- 支持插入代码、表格、图片等，适合技术笔记和项目文档[^6]。


## 总结

VSCode 结合 Markdown 语法和相关插件，是高效、结构化笔记写作的理想选择。你只需新建 `.md` 文件，利用上述语法即可轻松排版、归档和检索内容。配合实时预览和扩展插件，能大幅提升写作和管理体验[^1][^3][^5]。

<div style="text-align: center">⁂</div>

[^1]: https://dev.to/charudatta10/vs-code-for-note-taking-324b

[^2]: https://www.freecodecamp.org/news/how-to-create-notice-blocks-in-markdown/

[^3]: https://www.youtube.com/watch?v=DLLrcr9u_XI

[^4]: https://scholarly.so/blog/the-ultimate-guide-note-taking-with-markdown

[^5]: https://ipc14.org/node/24

[^6]: https://www.mylifeorganized.net/support/notes-formatting-with-Markdown/

[^7]: https://code.visualstudio.com/docs/languages/markdown

[^8]: https://www.reddit.com/r/vscode/comments/mlj6tu/note_taking_extension_for_vs_code/

[^9]: https://www.virtualhome.blog/2024/03/07/note-taking-with-vs-code-github-and-markdown/

[^10]: https://marketplace.visualstudio.com/items?itemName=kortina.vscode-markdown-notes

