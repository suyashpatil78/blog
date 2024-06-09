---
title: 'How to Disable Eslint Rules in VSCode'
description: 'In this blog, I have explained how you can disable eslint rules in VSCode.'
date: 2024-05-08
categories: ['javascript', 'eslint', 'vscode']
ogImage: ./og-image.png
external: ''
time: 5
---

### Introduction

ESLint is a popular linting tool that helps developers identify and fix problems in their JavaScript code. It enforces coding standards and best practices, making code more readable, maintainable, and error-free. However, there may be scenarios where you want to disable specific ESLint rules in your codebase. In this blog, we'll explore how you can disable ESLint rules in VSCode.

### Disabling ESLint Rules in VSCode

If you want to disable eslint errors in VSCode, Go to `settings.json` and disable all rules like this

```json
   "eslint.rules.customizations": [
    {
        "rule": "*",
        "severity": "off"
    }
]
```

This will disable all the eslint rules for you. If you want to disable a particular rule like `"@typescript-eslint/no-this-alias"`, you can do the following

```json
"eslint.rules.customizations": [
        {
            "rule": "@typescript-eslint/no-this-alias",
            "severity": "off"
        }
  ]
```

This will disable the rule `@typescript-eslint/no-this-alias` for you.
