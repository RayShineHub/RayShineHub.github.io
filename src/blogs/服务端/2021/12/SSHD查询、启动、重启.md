---
title: '知识篇 -- 【SSHD】查询、启动、重启'
date: 2021-12-17
showSponsor: true
isShowComment: true
isAbstract: true
isFull: true
tags:
 - 'Linux'
 - 'SSHD'
categories: 
 - '服务端'

#置顶顺序
#sticky: 1
---



<Boxx/>

::: tip

记录 `CentOS` `Linux` `SSHD` 查询、启动、重启及设置开机自启动命令

:::

<!-- more -->



- `CentOS 7` 以下：

```bash
# 查看状态
service sshd status

# 启动服务
service sshd start

# 重启服务
service sshd restart

# 关闭服务
service sshd stop

# 设置开机自启动 (–level 指定系统在2345运行级别时)。
chkconfig --level 2345 sshd on
```



-  `CentOS 7`及以上

```bash
# 查看状态
systemctl status sshd.service

# 启动服务
systemctl start sshd.service

# 重启服务
systemctl restart sshd.service

# 关闭服务
systemctl stop sshd.service

# 设置开机自启动
systemctl enable sshd.service
```

