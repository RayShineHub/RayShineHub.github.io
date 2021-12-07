#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 提交到main分支
git add -A
git commit -m 'deploy'
git push
