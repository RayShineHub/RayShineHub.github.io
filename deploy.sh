#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 提交到main分支
git add -A
git commit -m 'deploy'
git push

# 发布到github的prod分支，触发工作流同步到Linux服务器
git checkout prod
read -p "请输入本次发版内容：" msg
git merge -m $msg origin main
git push
git checkout main
