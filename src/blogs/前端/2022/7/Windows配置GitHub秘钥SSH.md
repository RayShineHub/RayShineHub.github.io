---
title: '记录篇 -- Windows 配置GitHub的SSH'
description: Windows配置GitHub的SSH Key并使用SSH方式访问
date: 2022-07-22
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
isFull: true
meta:
  - name: description
    content: 'Windows配置GitHub的SSH Key并使用SSH方式访问'
  - name: keywords
    content: Windows GitHub SSH Key git push git pull git clone
tags:
 - 'git'
categories: 
 - '前端'
---

::: tip
记录 `windows` 配置 `GitHub` `SSH` ，并用SSH方式访问。
:::

<!-- more -->

1. 进入到你当前用户的根目录的 `.ssh` 文件夹下。如我的地址是 `C:\Users\Administrator\.ssh` 。

2. 查看是否存在秘钥文件。文件名称为：`id_rsa` 和 `id_rsa.pub`。

3. 生成秘钥并配置到 `GitHub` 上。

 - 输入以下命令，然后一路回车即可。

  ```sh
  ssh-keygen -t rsa -C "your_email@youremail.com"
  ```

 - 找到 `GitHub` 上 `setting -> SSH and GPG keys -> new SSH key`。将 `id_rsa.pub`文件中的内容复制过去。

4. 验证是否配置成功。输入以下命令

```sh
ssh -T git@github.com
```

5. 如果输出以下内容，表示成功。

```sh
Hi ***! You've successfully authenticated, but GitHub does not provide shell access.
```