#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#	检验build是否成功
rm -rf ./dist
yarn build
rm -rf ./dist   # ./dist是build之后文件夹的位置，即config.js中配置的dest，详见vuepress官网


# 提交到main分支
git checkout main
git add -A
date=`date +%Y-%m-%d_%H:%M:%S`
git commit -m "deploy ${date}"
git push

# 发布到github的prod分支，触发工作流同步到Linux服务器
git checkout prod
git pull
#read -p "请输入本次发版内容：" msg
#git merge -m $msg origin main
git merge -m 'deploy ${date}' origin main
git push
git checkout main
git pull

