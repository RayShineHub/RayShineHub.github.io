#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#	检验build是否成功
yarn build
rm -rf ./dist   # ./dist是build之后文件夹的位置，即config.js中配置的dest，详见vuepress官网

# 提交到main分支
git pull

git add -A
git commit -m 'deploy'
git push
