(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{160:function(t,s,a){"use strict";a.r(s);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=a(5),v=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("p",[a("strong",[t._v("在开发过程中，修改完代码后部署到服务器是一件头疼的事，每一次部署都要上传代码，重启程序，这个过程最少也需要3分钟的时间，作为程序员，怎么能把时间浪费在这种重复操作上呢，我们可以通过一些现有工具的配合，实现码的自动部署，这篇文章的最终实现效果是将本地中修改完的nodejs代码一键运行在服务器端，其它语言同理，只是使用到的工具会有所不同。")])]),t._v(" "),a("h3",{attrs:{id:"一、准备工作：安装node-js和git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、准备工作：安装node-js和git","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、准备工作：安装node.js和git")]),t._v(" "),a("p",[t._v("我更喜欢用nvm来管理nodejs的版本，nvm需要高版本git支持，而centos yum源里的git版本太低，所以我们要先编译安装新版本的git，关于如何安装，可以看下面这篇文章：")]),t._v(" "),a("p",[t._v("安装新版本git： https://segmentfault.com/a/1190000007134786")]),t._v(" "),a("h5",{attrs:{id:"_1-安装nvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装nvm","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.安装nvm")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("yum "),a("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" curl-devel   "),a("span",{attrs:{class:"token comment"}},[t._v("#确保curl-devel已经安装")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("bash")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#执行完后退出终端重新进入")]),t._v("\nnvm --version "),a("span",{attrs:{class:"token comment"}},[t._v("#可以看到nvm版本")]),t._v("\n")])])]),a("p",[t._v("如果执行curl安装nvm的过程中出现如下错误：fatal: Unable to find remote helper for 'https'，是因为系统找不到git-remote-https，修改下PATH就好了。")]),t._v(" "),a("h5",{attrs:{id:"_2-修改path："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改path：","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.修改PATH：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("vi")]),t._v(" ~/.bash_profile\n    PATH"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token variable"}},[t._v("$PATH")]),t._v(":/usr/libexec/git-core  "),a("span",{attrs:{class:"token comment"}},[t._v("#在PATH里添加这一行")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("source")]),t._v(" ~/.bash_profile\n")])])]),a("h5",{attrs:{id:"_3-使用nvm安装指定版本nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用nvm安装指定版本nodejs","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.使用nvm安装指定版本nodejs")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("nvm ls-remote "),a("span",{attrs:{class:"token comment"}},[t._v("#查看可安装版本")]),t._v("\nnvm "),a("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" v6.2.0 "),a("span",{attrs:{class:"token comment"}},[t._v("#安装一个较为稳定的版本")]),t._v("\nnvm "),a("span",{attrs:{class:"token function"}},[t._v("ls")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("#查看已经安装的版本")]),t._v("\nnvm use v4.6.0 "),a("span",{attrs:{class:"token comment"}},[t._v("#切换版本")]),t._v("\nnvm "),a("span",{attrs:{class:"token function"}},[t._v("alias")]),t._v(" default v6.2.0 "),a("span",{attrs:{class:"token comment"}},[t._v("#设置默认版本")]),t._v("\nnode --version  \n")])])]),a("h3",{attrs:{id:"二、使用git自动部署代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、使用git自动部署代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、使用git自动部署代码")]),t._v(" "),a("p",[t._v("接下来我们使用最为优秀的版本控制工具git来同步我在本地和服务器上的代码。")]),t._v(" "),a("p",[a("em",[t._v("先梳理一下大致流程：")])]),t._v(" "),a("ul",[a("li",[t._v("首先在服务器端创建一个文件夹，使用初始化指令使其成为git的中心仓库。")]),t._v(" "),a("li",[t._v("然后在本地电脑新建的项目文件夹中clong上一步在服务器中建立的中心仓库。")]),t._v(" "),a("li",[t._v("在服务器中新建一个要部署代码的目录，并clone中心仓库。")]),t._v(" "),a("li",[t._v("修改服务器中心仓库中的hook文件，实现本地电脑push代码后，自动部署到上一步建立的代码目录。")])]),t._v(" "),a("p",[a("em",[t._v("下面是每一步的具体操作：")])]),t._v(" "),a("h5",{attrs:{id:"_1、在服务器中初始化git中心仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、在服务器中初始化git中心仓库","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、在服务器中初始化git中心仓库")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /gitRepo  "),a("span",{attrs:{class:"token comment"}},[t._v("#新建一个文件夹作为仓库")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" /gitRepo\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" init --bare project.git "),a("span",{attrs:{class:"token comment"}},[t._v("#初始化一个名为progect的仓库")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" project.git "),a("span",{attrs:{class:"token comment"}},[t._v("#可以看到新仓库中的各个文件")]),t._v("\n")])])]),a("p",[t._v("执行完以上步骤，会在 /gitRepo 文件夹中创建一个名为project的裸库，这个仓库就是之后在客户端的目标仓库")]),t._v(" "),a("h5",{attrs:{id:"_2、在本地电脑克隆远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、在本地电脑克隆远程仓库","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、在本地电脑克隆远程仓库")]),t._v(" "),a("p",[t._v("要在本地连接到仓库首先需要将本地机器的公钥复制给服务器")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("ssh-keygen -t rsa  "),a("span",{attrs:{class:"token comment"}},[t._v("#如果本地还没有生成公钥和秘钥，使用此命令生成")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("cat")]),t._v("  .ssh/id_rsa.pub "),a("span",{attrs:{class:"token comment"}},[t._v("#查看生成的公钥，将此公钥复制到服务器的 ~/.ssh/authorized_keys 文件末尾")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone 用户名@服务器地址:/gitRepo/project.git "),a("span",{attrs:{class:"token comment"}},[t._v("#在当前目录克隆仓库")]),t._v("\n")])])]),a("h5",{attrs:{id:"_3、在服务器中配置代码自动部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、在服务器中配置代码自动部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、在服务器中配置代码自动部署")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clong /gitRepo/project.git "),a("span",{attrs:{class:"token comment"}},[t._v("#在要部署代码的文件夹里克隆仓库")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v(" post-receive-sample post-receive "),a("span",{attrs:{class:"token comment"}},[t._v("#拷贝一份示例文件为post-receive")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("vi")]),t._v(" post-receive\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 在文件中加入以下指令")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("#!/bin/sh")]),t._v("\n    unset GIT_DIR\n    "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" 项目路径  "),a("span",{attrs:{class:"token comment"}},[t._v("#就是进入刚才做克隆操作时的文件夹")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" pull   "),a("span",{attrs:{class:"token comment"}},[t._v("#执行拉取指令")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("chmod")]),t._v(" 775 post-receive  "),a("span",{attrs:{class:"token comment"}},[t._v("#最后一定要将此文件的权限改为可执行")]),t._v("\n")])])]),a("p",[t._v("执行完所有步骤之后，每次在本地电脑中提交代码到中心仓库，git便会自动将最新的代码pull到服务器中的代码目录。")]),t._v(" "),a("h5",{attrs:{id:"附：git常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附：git常用命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 附：git常用命令")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("#添加所有文件到git索引")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{attrs:{class:"token string"}},[t._v('""')]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("#提交索引到的文件到缓冲区")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master "),a("span",{attrs:{class:"token comment"}},[t._v("#客户端第一次提交时需要使用此命令提交到远程master分支")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push        "),a("span",{attrs:{class:"token comment"}},[t._v("#提交缓冲区中的文件")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("filename"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("#在git索引中移除文件")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("#在索引中移除所有文件")]),t._v("\n")])])]),a("h3",{attrs:{id:"三、node程序自动运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、node程序自动运行","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、node程序自动运行")]),t._v(" "),a("p",[t._v("现在通过git提交的代码可以自动部署到服务器的代码目录了，接下来通过使用pm2，在代码变更后让程序自动重启。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" -g pm2  "),a("span",{attrs:{class:"token comment"}},[t._v("#服务器中全局安装pm2")]),t._v("\npm2 start helloworld.js  "),a("span",{attrs:{class:"token comment"}},[t._v("#使用pm2启动nodejs程序")]),t._v("\n")])])]),a("h3",{attrs:{id:"四、编写push脚本，一键将本地程序运行在服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、编写push脚本，一键将本地程序运行在服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、编写push脚本，一键将本地程序运行在服务器")]),t._v(" "),a("p",[t._v("现在每次使用git提交代码后，服务器会自动部署代码并重启程序，已经不需要我们再对服务器做任何操作了，是不是已经简化了百分之七十的工作量了？但是我们的目标不仅于此，毕竟每次push还需要三条指令呢，作为新时代的程序员，能让电脑做的决不自己去做。所以我们要通过一个脚本，在每次更改完代码之后一键把本地的代码运行在服务器上。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 以下为shell脚本，在mac上可以原生执行，使用Windows的同学可以自行搜索bat脚本写法，类推一下。")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("touch")]),t._v(" push.sh  "),a("span",{attrs:{class:"token comment"}},[t._v("#在本地的代码目录新建一个脚本文件。")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x push.sh "),a("span",{attrs:{class:"token comment"}},[t._v("#设置脚本权限为可执行")]),t._v("\nvim push.sh  "),a("span",{attrs:{class:"token comment"}},[t._v("#打开脚本，并写入以下命令")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add ./\n    "),a("span",{attrs:{class:"token function"}},[t._v("read")]),t._v(" commitMessage  \n    "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m commitMessage  \n    "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" Wow！ 代码一键部署完成！\n\n")])])]),a("p",[t._v("** 最后，激动人心的时刻到了，以后每次修改完代码，执行这个命令："),a("code",[t._v("./push.sh")]),t._v("，然后输入提交信息，好了，你的代码已经在服务器上飞起来了！**")])])},[],!1,null,null,null);v.options.__file="1秒钟极速部署web程序.md";s.default=v.exports}}]);