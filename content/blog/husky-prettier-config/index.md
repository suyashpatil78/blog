---
title: 'How to Configure Husky, lint-staged, and Prettier for a Robust JavaScript Workflow'
description: 'In this blog, I have explained about how you can configure husky and prettier for better code quality.'
date: 2024-06-08
categories: ['javascript', 'husky', 'eslint', 'prettier']
ogImage: ./og-image.png
external: ''
time: 15
---

### Introduction

Setting up a JavaScript project involves more than just writing code. Ensuring code quality, style consistency, and catching errors early can save a lot of headaches down the road. Tools like Husky, lint-staged, and Prettier make this process easier and more efficient. This blog will guide you through configuring these tools in your project.

Prettier is an opinionated code formatter that ensures your code style remains consistent. lint-staged allows you to run linters on files that are staged for commit. Husky makes it possible to use Git hooks to automate tasks like running linters before commits.

By integrating these tools, you can ensure your codebase remains clean and consistent without manual intervention.


### Configuring prettier and lint-staged

Install prettier and lint-staged as dev dependencies in your project:

```bash
npm install --save-dev prettier lint-staged
```

Next, add the following configuration to your `package.json` file:

```json
"prettier": {
    "printWidth": 120,
    "singleQuote": true,
    "useTabs": false,
    "tabWidth": 2,
    "semi": true,
    "bracketSpacing": true
  },
  "lint-staged": {
    "*.{ts,scss,html}": "prettier --write"
  }
```

In this configuration:

- `printWidth`: Specifies the maximum line width before Prettier wraps the code.
- `singleQuote`: Enforces the use of single quotes for strings.
- `useTabs`: Specifies whether to use tabs instead of spaces for indentation.
- `tabWidth`: Specifies the number of spaces per tab.
- `semi`: Enforces the use of semicolons at the end of statements.
- `bracketSpacing`: Enforces consistent spacing around brackets.

The `lint-staged` configuration specifies that Prettier should be run on files with the extensions `.ts`, `.scss`, and `.html` before they are committed.

### Configuring Husky

Install Husky as a dev dependency:

```bash
npm install --save-dev husky
```

Next, add a `.husky` directory to the root of your project and create a `pre-commit` file inside it:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

This script runs `lint-staged` before each commit, ensuring that Prettier is run on staged files.

### Conclusion

By configuring Husky, lint-staged, and Prettier in your project, you can automate code quality checks and ensure that your codebase remains clean and consistent. These tools help catch errors early, enforce coding standards, and make collaboration easier by ensuring that all team members follow the same coding conventions. By integrating these tools into your workflow, you can save time and effort while maintaining a high level of code quality.

