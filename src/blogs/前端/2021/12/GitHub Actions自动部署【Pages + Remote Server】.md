---
title: '【GitHub Actions】自动部署'
date: 2021-12-08
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebar: false
tags:
 - 'GitHub Actions'
 - 'GitHub Pages'
 - 'CentOS7 SFTP配置'
categories: 
 - '前端'

#置顶顺序
sticky: 1
---

<Boxx/>

将 [vuepress](https://www.vuepress.cn) 博客的本地构建过程转移到 [github-actions](https://github.com/features/actions) 中，同时支持将构建结果自动部署到  `GitHub Pages` 及 `linux服务器` 

<!-- more -->

## 开头

最近学了挺多东西，一直苦于没有一个很好的知识储备平台，所以自己动手搭建了一个 [recoluan](https://vuepress-theme-reco.recoluan.com/) 大佬基于 [vuepress](https://www.vuepress.cn) 封装的 <Badge text="清新脱俗" type="success" vertical="middle"/>  的主题博客，准备将自己学习到的知识都记录并分享给大家。

但是，当在我写完一篇文章时，并想将文章同步到  `GitHub Pages` 或者  `自定义服务器` 上时，感觉还是特别的麻烦，流程非常繁琐：

- **优化前流程**
  1. 写一篇文章
  2. 生成静态文件：`npm run build`
  3. 切换  `gh-pages`  分支
  4. 复制静态文件到  `gh-pages`  分支
  5. 访问网址验证是否成功



于是终于一顿冲浪，让我找到了 ***Lasy*** 的 [使用 GitHub Actions 自动部署博客](https://vuepress-theme-reco.recoluan.com/views/other/github-actions.html)



- **优化后流程**
  1. 写一篇文章
  2. 上传到 `Github` 仓库 `main` 分支
  3. 刷新网页，OK，慢慢享受吧



好，不多说了，我相信博主们已经对 [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)非常熟悉了，在这里就不多说了，如果有项目配置不明白的地方，请移步[vuepress-theme-reco@1.x官方文档](https://vuepress-theme-reco.recoluan.com/views/1.x/) 

**本文主要给大家分享下本次搭建  `GitHub Actions`  自动部署的方法。**

## 准备工作

1. ***一个完善的可以 `yarn build` 成功的博客工程，但要注意你编译后的文件路径为 `/dist`，workflow中会用到。***
2. ***一个 `GitHub repo` 。***
3. ***一台支持 `SFTP` 的远程Linux服务器，并且配置好通过 `SFTP` 密钥登录。***



### 1、创建一个blog项目并编译

创建项目这里不多说了，唯一一点是在不说的过程中出现的问题，我提一嘴

::: warning 注意，**node_models** 中依赖的版本需要锁定！！！

不管vuepress项目是以 `npm run build` 来编译，还是使用 `yarn build` 来编译，一定要在项目中生成  **lock** 文件，**缓存** 并 **锁定** 好你项目中每个依赖的版本以及依赖之间的关系，这个特别重要，因为GitHub中的依赖版本不一定能兼容本地工程的依赖版本，如有不懂，请移步 [yarn.lock官方网站](https://yarn.bootcss.com/docs/yarn-lock/)。

:::

这里附上我的  <Badge text="config.js" type="success" vertical="middle"/>   配置文件供大家参考

```js
const nav = require("./config/nav");
const pluginsConf = require('./plugins/index')

module.exports = {
  base: "/",
  title: "一ξひβθ光 i",
  description: '乾坤未定 你我皆是黑马',
	dest: 'dist',
  head: [
		["meta", {name: "viewport",content: "width=device-width,initial-scale=1,user-scalable=no"}],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["script", {"language": "javascript","type": "text/javascript","src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"}],
    ["script", {"language": "javascript","type": "text/javascript","src": "/js/mouseClick.js"}],
    ["script", {"language": "javascript","type": "text/javascript","src": "/js/bg.js"}],
		["script", {"language": "javascript","type": "text/javascript","src": "/js/noConsole.js"}],
		["script", {"language": "javascript","type": "text/javascript","src": "/js/fairyDustCursor.js"}],
		["script", { src: "https://cdn.bootcdn.net/ajax/libs/typed.js/2.0.12/typed.min.js" }],
		//友盟+站长统计
		['script', {}, `
			document.write(
				unescape(
					...
				)
			);
		`] 
  ],
  theme: "reco",
  markdown: {
    lineNumbers: true
  },
  mode:"dark",
	locales: {
	  "/": {
	    "lang": 'zh-CN'
	  }
	},
  themeConfig: {
		noFoundPageByTencent: false,
    indexTitle:"人生来来往往，来日并不方长。",
    indexDes:"Life comes and goes, but the future is not long.",
    //是否全屏样式 true，false
    fullscreen: true,
    modePicker: true,
    type: "blog",
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "博客" // 默认 “分类”Category
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签" // 默认 “标签”Tag
      },
    },
    valineConfig: {
			appId: '',// your appId
			appKey: '', // your appKey
			placeholder: '请务必填写联系方式，方便及时回复！',
			pageSize: 20,
			enableQQ: true,
			recordIP:true,
			visitor:true
    },
    nav,
    logo: '',
    authorAvatar: "",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: "auto",
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 作者
    author: "RayShine",
    // 备案号
    record: '',
		// 备案连接地址
		recordLink: '#',
    // 项目开始时间
    startYear: "2020",
		"socials":{
		  "github" : "https://github.com/RayShineHub", //github
		  "gitlub" : false, //gitlub
		  "gitee" : "", //gitee
		  "jianshu" : "", //简书
		  "zhihu" : false, //知乎
		  "toutiao" : false, //知乎
		  "juejin": false, //掘金
		  "segmentfault" : false, //思否
		  "csdn" : false, //CSDN
		  "wechat" : "你的微信", //微信
		  "qq" : "你的QQ" //QQ
		},
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      }
    ],
    //首页格言
    mottos: [{
      "zh": "人生来来往往，来日并不方长。",
      "en": "Life comes and goes, but the future is not long."
      },
      {
        "zh": "他心里的苦越多，一丝甜就能填满。",
        "en": "The more bitterness in his heart, the sweetness can fill it."
      },
      {
        "zh": "梦想不会逃跑，会逃跑的永远都是自己。",
        "en": "Dream will not run away, will always be their own escape."
      },
      {
        "zh": "涉江而过，芙蓉千朵。诗也简单，心也简单。",
        "en": "Crossing the river, there are thousands of Hibiscus. Poetry is simple, heart is simple."
      },
      {
        "zh": "一别两三年，忽然又夏天。",
        "en": "Two or three years later, it was summer again."
      }, {
        "zh": "未成定局的事就不要弄的人尽皆知。",
        "en": "Don't do anything that's not settled but everyone knows it."
      },
      {
        "zh": "也许明天的我会痛恨自己，但今夜的我仍在前行。",
        "en": "I might hate myself tomorrow, but I'm on my way tonight."
      }
    ],
  },
  plugins: pluginsConf
 };

```



个人推荐使用 `yarn` 来安装依赖，具体有什么好处呢？又有什么作用呢？

**特点**：

1. 极其快速：Yarn会缓存它下载的每个包，所以无需重复下载。它还能并行化操作以最大化资源利用率。
2. 特别安全：Yarn会在每个安装包被执行前校验其完整性。
3. 超级可靠：Yarn使用格式详尽而又简洁的lockfile文件和确定性算法来安装依赖，能够保证在一个系统上的运行的安装过程也会以同样的方式运行在其他系统上。	

### 2、[GitHub](https://www.github.com) 创建仓库

- 首先，准备工作，你得有一个自己的 `github` 帐号，其次，你得安装了 `git` 工具，最后你还得有自己的本地项目。
- 在 `github` 上创建自己的远程 `Pages` 专属代码仓库。

**1、进入我的仓库 **

![我的GitHub仓库](http://cdn.rayshine.site/我的GitHub仓库.png)



**2、新建仓库**

![创建用于发布的GitHub Pages的代码仓库](http://cdn.rayshine.site/create-github-pages-repo.png)



::: danger

**注意**

- 一定要把仓库名称命名为 `用户名.github.io` ，这样在创建 `GitHub Pages` 是才能直接访问。
- 一定要将仓库权限设置为 `Public` 公开。
- 一定要勾选下方任意一个初始化文件，不然仓库提交/拉取代码时，不够方便。

:::

### 3、远程服务器配置`SFTP`及`密钥`登录



由于vsftp采用明文传输，用户名密码可通过抓包得到，为了安全性，需使用sftp，锁定目录且不允许sftp用户登到服务器。由于sftp使用的是ssh协议，需保证用户只能使用sftp，不能ssh到机器进行操作，且使用密钥登陆、不是22端口。



#### 1. 创建 `sftp服务用户组` 并创建 `sftp服务根目录`



```bash
# 创建SFTP用户组
groupadd sftp
# 创建该用户组的根目录
mkdir /home/sftp
# 设置该目录所属账户
chown -R root:sftp /home/sftp
# 授权该目录 775 权限
chmod -R 0755 /home/sftp
```

此目录及上级目录的所有者必须为 `root`，权限不高于 `755` ，此目录的组最好设定为 `sftp` 。



#### 2、修改 `sshd` 配置文件

- 先备份再修改

```bash
# 备份配置文件
cp /etc/ssh/sshd_config,_bk} 
# 保证原来22端口可以继续使用
sed -i 's@#Port 22@Port 22@' /etc/ssh/sshd_config 


# 修改sshd_config文件内容
vi /etc/ssh/sshd_config
```



- 注释掉下面这行代码

```bash
Subsystem   sftp  /usr/libexec/openssh/sftp-server
```



- 添加如下代码

```bash
# 必须将 Subsystem 这行代码修改为下面这行，不然重启ssh会报错
Subsystem sftp internal-sftp -l INFO -f AUTH
Match Group sftp
ChrootDirectory /home/sftp/%u
X11Forwarding no
AllowTcpForwarding no
ForceCommand internal-sftp -l INFO -f AUTH
```



凡是在 `用户组sftp` 里的用户，都可以使用sftp服务；使用sftp服务连接上之后，可访问目录为 `/home/sftp/username`。

- 举个例子

1、<Badge text="test" type="error" vertical="middle"/>  是一个 `sftp组` 的用户，它通过 `sftp` 连接服务器上之后，只能看到 `/home/sftp/test` 目录下的内容。

2、<Badge text="test2" type="error" vertical="middle"/> 也是一个 `sftp组` 的用户，它通过 `sftp` 连接服务器之后，只能看到 `/data/sftp/test2` 目录下的内容。



#### 3、创建 `sftp用户`



- 创建test sftp `家目录` ：test目录的所有者必须是 `root`，组别最好设定为 `sftp组`，权限不高于 `755`。

```bash
mkdir /home/sftp/test
chmod 0755 /home/sftp/test
chown root:sftp /dahometa/sftp/test
# 添加用户，参数 -g sftp 指定用户组 -s /sbin/nologin禁止用户通过命令行登录
useradd -g sftp -s /sbin/nologin test 
```



- 创建test用户密钥对：

```bash
# 创建完用户之后，需要在用户的根目录创建 .ssh 文件夹，存放ssh密钥
mkdir /home/test/.ssh
# 生成密钥对
ssh-keygen -t rsa
# 将公钥添加到 authorized_keys 入口文件
cat /root/.ssh/id_rsa.pub >> /home/test/.ssh/authorized_keys
# 设置test文件夹所有者设为 test.sftp
chown -R test.sftp /home/test
# 设置 authorized_keys 权限为600
chmod 600 /home/test/.ssh/authorized_keys
# 设置 .ssh 文件夹目录为 700
chmod 700 /home/test/.ssh
```



- 在test目录下创建一个可以写入的source目录：将目录所有者设为 `test`

```bash
mkdir /home/sftp/test/source
chown -R test:sftp /home/sftp/test/source
```



::: danger 注意

1、 `sftp` 服务的根目录的所有者必须是 `root`，权限不能超过 `755` (上级目录也必须遵循此规则)，`sftp` 的用户目录所有者也必须是`root` ，且最高权限不能超过 `755`。

2、目前 `workflow` 推送到远程服务器，如果是目录，会遇到权限不足的问题，就需要用 `test` 用户登录 `FXP` 工具将目录结构上传一份，再用 `workflow` 推送后就没有问题了。

3、如果大家用了 `CentOS8` 或者 `Openssl 1.1.1` 及以上版本，使用命令 `ssh-keygen -t rsa` 生成ssh，默认是以新的格式生成，id_rsa的第一行变成了 `BEGIN OPENSSH PRIVATE KEY` 而不再是 `BEGIN RSA PRIVATE KEY` ，这是一种新的密钥格式， 而且很多软件对这种格式的密钥都是不支持的。

`GitHub`目前不支持，所以就要用到一种转换命令将 [`BEGIN OPENSSH PRIVATE KEY` 转换为 `BEGIN RSA PRIVATE KEY` 格式](http://www.mayanpeng.cn/archives/132.html)，为大家提供了两种解决方案。

- 一、生成新的RSA-PEM格式公私密钥
- 二、转换格式

目前我这边要求不是很高，也不是生产环境，所以直接采用了第一种解决方案，重新生成了新的公私密钥；

大概其实是用了命令 `ssh-keygen -m PEM -t rsa -b 4096` 来生成

| 参数解释                                                     |
| :----------------------------------------------------------- |
| -m： 参数指定密钥的格式，PEM（也就是RSA格式）是之前使用的旧格式 |
| -b：指定密钥长度；                                           |
| -e：读取openssh的私钥或者公钥文件；                          |
| -C：添加注释；                                               |
| -f：指定用来保存密钥的文件名；                               |
| -i：读取未加密的ssh-v2兼容的私钥/公钥文件，然后在标准输出设备上显示openssh兼容的私钥/公钥； |
| -l：显示公钥文件的指纹数据；                                 |
| -N：提供一个新密语；                                         |
| -P：提供（旧）密语；                                         |
| -q：静默模式；                                               |
| -t：指定要创建的密钥类型                                     |

:::



- 设置 ssh，打开密钥登录功能

编辑 `sshd_config`  文件

```bash
vi /etc/ssh/sshd_config
```



进行如下设置：

```bash
RSAAuthentication yes
PubkeyAuthentication yes
```



另外，请留意 `root` 用户能否通过 `SSH` 登录：

```bash
PermitRootLogin yes
```



#### 4、重启 `SSHD` 服务，查看服务状态

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



#### 5、`SFTP` 测试

- 测试命令如下

```bash
sftp -oIdentityFile=/home/blog_sftp/.ssh/id_rsa.pem test@yourHost -oProt=22
```



## 上流程



### 1、在项目根目录下创建 `deploy.yml` 文件

`deploy.yml` 文件为 `GitHub Actions` 执行的命令文件，`·workflow` 触发之后，`GitHub` 会自动读取项目根目录中的 `.github/workflows/***.yml` 去执行。

![](http://cdn.rayshine.site/github-actions-yml目录结构.png)



### 2、编写脚本 `deploy.yml`

```yml
# 任务名称

name: Deploy Pages

# 触发条件
on:
  # 当项目文件 push 到 main 分支后
  push:
    branches: [ prod ]


# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # job名称
  build-and-deploy:
    # 服务器环境：最新版 Ubuntu
    runs-on: ubuntu-latest

    # action奇妙的步骤
    steps:
      # 拉取代码
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false
          
      - name: Use Node.js
        uses: actions/setup-node@v1
        with:
          node-version: "14"
          
          
      # 缓存 node_modules
      - name: Cache dependencies
        uses: actions/cache@v2
        id: yarn-cache
        with:
          path: |
            **/node_modules
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      # 如果缓存没有命中的话，编译&生成静态文件，可以用yarn或npm
      - name: build
        if: steps.yarn-cache.outputs.cache-hit != 'true'
        run: yarn && yarn build

      # 部署到github.io静态网站
      - name: Deploy Docs To GitHub Pages
        uses: JamesIves/github-pages-deploy-action@releases/v4
        with:
          # git-config-name: 邵鹏飞
          # token: ${{ secrets.BLOG_DEPLOY }}
          clean: true
          # repository-name: RayShineHub/RayShineHub.github.io
          branch: gh-pages
          folder: dist
          
      # 部署到gitee.io静态网站
      #- name: Deploy Docs To Gitee Pages
      #  uses: wearerequired/git-mirror-action@v1
      #  env:
      #    SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
      #    #SSH_KNOWN_HOSTS: ${{ secrets.SSH_KNOWN_HOSTS }}
      #  with:
      #    source-repo: "git@github.com:wearerequired/git-mirror-action.git"
      #    destination-repo: "git@bitbucket.org:wearerequired/git-mirror-action.git"
      #- name: reload
      #  uses: mizuka-wu/gitee-pages-action@v1.0.0
      #  with:
      #    repository: linzowo/linzowo
      #    cookie: ${{ secrets.GITEE_COOKIE }}
      #    branch: gh_pages
          
      # 部署到远程服务器
      - name: Deploy Docs To Remote Server
        uses: wlixcc/SFTP-Deploy-Action@v1.0
        with:
        	# 远程服务器SFTP用户
          username: 'blog_sftp'
          # 远程服务器IP地址
          server: '${{ secrets.SERVER_IP_ALIYUN }}'
          # 远程服务器ssh私钥
          ssh_private_key: '${{ secrets.SSH_PRIVATE_KEY_ALIYUN }}'
          # 项目编译后输出文件路径
          local_path: './dist/*'
          # SFTP用户家目录下可以写入的文件夹路径 eg：/home/sftp/blog
          remote_path: '/blog'
```



::: danger 严重

部署到远程服务器时需要用到远程服务器的 `SFTP用户名`、`IP地址`、`ssh私钥`，这些内容都是对于服务器来讲比较重要的信息，所以不建议将这些内容 <Badge text="明文" type="error" vertical="middle"/>  存放到 `GitHub` 中，所以将他们保存到 `Github仓库密钥` 中，供 `GitHub` 使用。

![GitHub仓库密钥](http://cdn.rayshine.site/GitHub仓库密钥.png)

:::



### 3、在项目根目录下创建自动编译及 `GitHub` 代码提交脚本

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#	检验build是否成功
yarn build
rm -rf ./dist   # ./dist是build之后文件夹的位置，即config.js中配置的dest，详见vuepress官网

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
```



### 4、在 `package.json` 中加入命令 `deploy`

```json
  "scripts": {
    "dev": "vuepress dev src",
    "build": "vuepress build src",
    "upcdn": "vuepress build src && node ./scripts/upcdn.js",
    "deploy": "bash deploy.sh",
    "push": "bash push.sh"
  },
```



### 5、md文件编写完成并运行 `deploy` 命令发布

```sh
yarn deploy
```

- 发布成功截图

![博客发布成功](http://cdn.rayshine.site/博客发布成功.png)




## 最终结果

![workflow运行成功](http://cdn.rayshine.site/github-action-success.png)



