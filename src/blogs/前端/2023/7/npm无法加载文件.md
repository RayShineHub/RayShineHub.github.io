---
title: '记录篇 -- npm : 无法加载文件 D:\Program Files\nodejs\node_global\npm.ps1，因为在此系统上禁止运行脚本'
date: 2023-07-15
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
meta:
  - name: description
    content: 'npm : 无法加载文件 D:\Program Files\nodejs\node_global\npm.ps1，因为在此系统上禁止运行脚本'
  - name: keywords
    content: vscode npm windows powerShell RemoteSigned 无法加载文件 因为在此系统上禁止运行脚本
tags:
 - 'powerShell'
categories: 
 - '前端'
---

::: tip
记录一下 `windows powerShell` 执行策略的问题。
:::

## 前言

使用 **VsCode** 运行 `Vue` 项目，执行如下脚本

```sh
npm run dev
```
出现如下错误

```sh
npm : 无法加载文件 D:\nodejs\node_global\npm.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ npm run dev
+ ~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

## 解决方案

1. 点击开始菜单，使用 `shift + 左键` 打开 `windows powerShell`。
2. 输入 `get-ExecutionPolicy` 查看当前策略权限。
```sh
get-ExecutionPolicy
```
3. 输出 `Restricted` (受限制的)
```sh
Restricted
```

4. 给个权限

```sh
Set-ExecutionPolicy -Scope CurrentUser
```

5. 输出

```sh
位于命令管道位置 1 的 cmdlet Set-ExecutionPolicy
请为以下参数提供值:
ExecutionPolicy:
```

6. 在 `ExecutionPolicy:` 后面输入 `RemoteSigned` 
```sh
RemoteSigned
```

7. 输出

```sh
执行策略更改
执行策略可帮助你防止执行不信任的脚本。更改执行策略可能会产生安全风险，如 https:/go.microsoft.com/fwlink/?LinkID=135170
中的 about_Execution_Policies 帮助主题所述。是否要更改执行策略?
[Y] 是(Y)  [A] 全是(A)  [N] 否(N)  [L] 全否(L)  [S] 暂停(S)  [?] 帮助 (默认值为“N”):
```

8. 在冒号后面输入 `Y`

9. 验证一下，再次输入 `get-ExecutionPolicy` 查看当前策略权限
```sh
get-ExecutionPolicy
```
10. 输出 `RemoteSigned` 就可以了
```sh
RemoteSigned
```

OK，运行 `npm run dev` 成功！！！

## 实际过程图
![PowerShell策略更改](https://cdn.rayshine.site/npm无法加载文件/PowerShell更改策略.png)