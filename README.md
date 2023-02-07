# 和谐历史档案馆 - Banned Historical Archives

[官网](https://banned-historical-archives.github.io)

## Wiki

资源贡献\校对\纠错  
[\[Github issues\]](https://github.com/banned-historical-archives/banned-historical-archives.github.io/issues)  
[\[Gitlab issues\]备用地址](https://gitlab.com/banned-historical-archives/banned-historical-archives.gitlab.io/-/issues)  
[开发者贡献代码](https://github.com/banned-historical-archives/banned-historical-archives.github.io/wiki/%E5%BC%80%E5%8F%91%E8%80%85%E8%B4%A1%E7%8C%AE%E4%BB%A3%E7%A0%81)  
[文稿录入与校对](https://github.com/banned-historical-archives/banned-historical-archives.github.io/wiki/%E6%96%87%E7%A8%BF%E5%BD%95%E5%85%A5%E4%B8%8E%E6%A0%A1%E5%AF%B9)  
[标准化加工及开发说明](https://github.com/banned-historical-archives/banned-historical-archives.github.io/wiki/%E6%A0%87%E5%87%86%E5%8C%96%E5%8A%A0%E5%B7%A5%E5%8F%8A%E5%BC%80%E5%8F%91%E8%AF%B4%E6%98%8E)  
[校对规范](https://github.com/banned-historical-archives/banned-historical-archives.github.io/wiki/%E6%A0%A1%E5%AF%B9%E8%A7%84%E8%8C%83)  

谷歌搜索引擎仅收录了很小部分文稿，搜索效果也不太让人满意。  
本地搜索引擎不仅可以精准检索全部文稿，更重要的是保护你的隐私。  
**[本地搜索的使用](https://github.com/banned-historical-archives/banned-historical-archives.github.io/wiki/%E6%9C%AC%E5%9C%B0%E6%90%9C%E7%B4%A2%E7%9A%84%E4%BD%BF%E7%94%A8)**

## 介绍

和谐历史档案馆收录各类受官方封禁以及半封禁的文稿、报纸、杂志和多媒体资料，并对它们进行标准化加工，通过解析、识别、分类，形成标准化文稿档案和多媒体档案/数据库。
虽然民间有不少人在做资料收集和校验工作，但分散的工作可能无法避免重复劳动，资料的二次汇编难以保证真实性，而且缺乏统一的版本管理，难以维护。我们已经使用一系列自动化工具解决这些问题，每一篇文稿都可溯源、可验证。

其中文稿包含但不限于中央发表的文件，中央高层会议纪要，主要人物的通知、著作、谈话/对话/讲话、宣言/声明、电报、通讯、书信、消息、评论/批语/批注/批示、意见、指示/命令，以及群众运动中重要文献。主要人物包括毛泽东，江青、姚文元、张春桥、王洪文等。其中一些书籍名称或其中文稿的注释中可能表现出鲜明的立场，我们仅仅做收录和校对工作，尽量保持文稿的原貌，其内容不代表我们的立场。

也包括一些重要的学术性的、第三方解读的哲学、政治经济学、历史书籍（它们以章节为最小单位作为文稿录入）。
报纸和杂志经过类似的方法转换为标准文稿档案（以文章为最小单位），主要包括红旗杂志、学习与批判、参考消息等。

多媒体资料包括音乐及歌词、电影、照片、录音等。目前主要收录社会主义中国创作的红色音乐。

## 功能

1. 基本的文稿、音乐、图片查询功能；
2. 文稿版本对比——多版本逐字对比、多版本逐行对比和文字原稿对比；
![文稿版本对比](https://user-images.githubusercontent.com/109972625/183229751-6e00a481-78a0-4fcc-a203-f73607bdc0c6.jpg)

例如[在扩大的中央工作会议上的讲话](https://banned-historical-archives.github.io/articles/6f36e2e6db/)这篇文章，点击右上角“对比”按钮，选择“对比不同来源解析后的文本”。

![文稿来源对比](https://banned-historical-archives.github.io/images/comparison_pdf.png)

3. 文稿来源对比
4. 歌曲歌词版本对比

## 与其他文库/数据库的区别

- 收录多种来源的文稿，可进行版本对比。
- 收录的文稿经过最细粒度的加工，在每个段落提取了原有的排版信息以及角标注释信息，在必要时还可以对比不同版本文稿中的注释。非标准化的加工则无法区分文中子标题/子标题日期/段落/引文/注释等信息，无论是正文的版本对比还是其他数据的对比都很困难。
- 可溯源，可验证。所有信息均来自对原始文件（如 pdf）的解析，可以校验原始文件的摘要确保一致。
- 文本识别的模型、训练集、代码，以及解析算法公开透明。
- 包含完整的文稿校对记录。

## 源代码

[\[Github\]](https://github.com/banned-historical-archives/banned-historical-archives.github.io)
[\[Gitlab\]](https://gitlab.com/banned-historical-archives/banned-historical-archives.gitlab.io)

如果以备份为目的 fork 本仓库，最好同时 fork 本仓库对应的资源仓库 banned-historical-archives0, banned-historical-archives1, banned-historical-archives2 ... banned-historical-archives8

[\[开发者如何贡献代码\]](https://github.com/banned-historical-archives/banned-historical-archives.github.io/wiki/开发者贡献代码)

## 其他

### 数据库导出

在初始化项目后，执行 mysqldump 命令导出数据库，使用方法见 mysql 官网。

### 静态 html 文件导出

https://github.com/banned-historical-archives/banned-historical-archives.github.io/tree/gh-pages

自动构建的 html 文件在 gh-pages 分支，可以直接下载该分支的 zip 压缩包

## 友情链接

[统一战线公社](https://unitedfront.club)
欢迎提[\[issues\]](https://github.com/banned-historical-archives/banned-historical-archives.github.io/issues)交换链接

（友情链接不代表本档案馆立场）

## 计划收录的报刊杂志

| 名称       | 收录状态 |
| ---------- | -------- |
| 红旗       | 正在录入 |
| 人民日报   | 待解析   |
| 学习与批判 | 正在录入 |
| 参考消息   | 待解析   |
| 自然辩证法 | 已收录 |

## 收录的文稿和书籍

| 名称                                                                                                                           | 作者及出版社                                                                                                                                                   | 是否内部文件 | 是否来源官方 | 校对状态 |
| ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------ | -------- |
春桥文录|张春桥|N|N|未知
首长讲话|张春桥|Y|Y|未校对
学习文件||Y|Y|未校对
重要讲话|张春桥|Y|Y|已校对
王洪文文集|王洪文|N|N|未知
姚文元文录|姚文元|N|N|未知
城市工作手册|印度共产党（毛主义）|N|Y|未校对
马列毛基本教程|印度共产党（毛主义）|N|Y|正在校对
马列毛主义万岁|革命国际主义运动|N|Y|未校对
毛远新谈话记录|毛远新|Y|Y|已校对
人民战争与革命|巴西共产党（红色派）|N|Y|未校对
土耳其民族问题|易卜拉欣·凯帕喀亚|N|N|未校对
王洪文同志讲话|王洪文|Y|Y|已校对
张春桥同志讲话|张春桥|Y|Y|未校对
张春桥同志讲话|张春桥|Y|Y|未校对
张春桥同志讲话|张春桥|Y|Y|未校对
张春桥同志讲话|张春桥|Y|Y|未校对
张春桥同志讲话|张春桥|Y|Y|未校对
张春桥同志讲话|张春桥|Y|Y|已校对
张春桥同志指示|张春桥|Y|Y|未校对
江青十年讲话汇编|江青，本世纪初国内老左编|N|N|未知
毛远新的谈话记录|毛远新|Y|Y|已校对
毛远新的谈话记录|毛远新|Y|Y|已校对
毛远新同志的讲话|毛远新|Y|Y|未校对
秘鲁共产党总路线|秘鲁共产党|N|Y|未校对
贡萨罗主席虎笼演讲|贡萨罗|N|Y|未校对
关于国际形势的报告|姚文元|Y|Y|已校对
关于日本问题的报告|张春桥|Y|Y|已校对
洪文、春桥同志批示|王洪文、张春桥|Y|Y|已校对
列宁与军事化共产党|巴西共产党（红色派）|N|Y|未校对
论贡萨罗的普适贡献|中国革命左派|N|N|未校对
毛泽东全集第27卷|张迪杰|N|N|未知
毛泽东全集第28卷|张迪杰|N|N|未知
毛泽东全集第29卷|张迪杰|N|N|未知
毛泽东全集第30卷|张迪杰|N|N|未知
毛泽东全集第31卷|张迪杰|N|N|未知
毛泽东全集第32卷|张迪杰|N|N|未知
毛泽东全集第33卷|张迪杰|N|N|未知
毛泽东全集第34卷|张迪杰|N|N|未知
毛泽东全集第35卷|张迪杰|N|N|未知
毛泽东全集第36卷|张迪杰|N|N|未知
毛泽东全集第37卷|张迪杰|N|N|未知
毛泽东全集第38卷|张迪杰|N|N|未知
毛泽东全集第39卷|张迪杰|N|N|未知
毛泽东全集第40卷|张迪杰|N|N|未知
毛泽东全集第41卷|张迪杰|N|N|未知
毛泽东全集第42卷|张迪杰|N|N|未知
毛泽东全集第43卷|张迪杰|N|N|未知
毛泽东全集第44卷|张迪杰|N|N|未知
毛泽东全集第45卷|张迪杰|N|N|未知
毛泽东全集第46卷|张迪杰|N|N|未知
毛泽东全集第47卷|张迪杰|N|N|未知
毛泽东全集第48卷|张迪杰|N|N|未知
毛泽东全集第49卷|张迪杰|N|N|未知
毛泽东全集第50卷|张迪杰|N|N|未知
毛泽东全集第51卷|张迪杰|N|N|未知
毛泽东全集第52卷|张迪杰|N|N|未知
唐岐山同志若干讲话|唐岐山，复辟后“揭发”材料|Y|Y|未校对
张春桥同志重要报告|张春桥|Y|Y|未校对
革命国际主义运动宣言|革命国际主义运动|N|Y|未校对
工人阶级必须领导一切|姚文元|N|Y|已校对
红旗一九六八年第三期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六八年第四期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六八年第五期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六八年第一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六八年第一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六九年第八期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六九年第二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六九年第九期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六九年第十期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六九年第五期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六九年第一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六六年第八期|《红旗》杂志编辑部|N|Y|正在校对
红旗一九六六年第二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六六年第九期|《红旗》杂志编辑部|N|Y|正在校对
红旗一九六六年第六期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六六年第七期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六六年第三期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六六年第十期|《红旗》杂志编辑部|N|Y|正在校对
红旗一九六六年第四期|《红旗》杂志编辑部|N|Y|正在校对
红旗一九六六年第五期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六六年第一期|《红旗》杂志编辑部|N|Y|正在校对
红旗一九六七年第八期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六七年第二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六七年第九期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六七年第六期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六七年第七期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六七年第三期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六七年第十期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六七年第四期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六七年第五期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六七年第一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七二年第八期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七二年第二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七二年第九期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七二年第六期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七二年第七期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七二年第三期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七二年第十期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七二年第四期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七二年第五期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七二年第一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七〇年第八期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七〇年第二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七〇年第九期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七〇年第六期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七〇年第七期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七〇年第三期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七〇年第十期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七〇年第四期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七〇年第五期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七〇年第一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七六年第八期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七六年第二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七六年第九期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七六年第六期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七六年第七期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七六年第三期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七六年第十期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七六年第四期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七六年第五期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七六年第一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七三年第八期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七三年第二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七三年第九期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七三年第六期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七三年第七期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七三年第三期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七三年第十期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七三年第四期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七三年第五期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七三年第一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七四年第八期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七四年第二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七四年第九期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七四年第六期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七四年第七期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七四年第三期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七四年第十期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七四年第四期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七四年第五期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七四年第一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七五年第八期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七五年第二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七五年第九期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七五年第六期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七五年第七期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七五年第七期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七五年第三期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七五年第十期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七五年第四期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七五年第五期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七五年第一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七一年第二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七一年第九期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七一年第六期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七一年第三期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七一年第十期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七一年第四期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七一年第五期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七一年第一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九五八年第八期||N|Y|未校对
红旗一九五八年第二期|《红旗》杂志编辑部|N|Y|正在校对
红旗一九五八年第九期||N|Y|未校对
红旗一九五八年第六期||N|Y|未校对
红旗一九五八年第七期||N|Y|未校对
红旗一九五八年第三期|《红旗》杂志编辑部|N|Y|未校对
红旗一九五八年第十期||N|Y|未校对
红旗一九五八年第四期||N|N|未校对
红旗一九五八年第五期||N|Y|未校对
红旗一九五八年第一期|《红旗》杂志编辑部|N|Y|正在校对
堪萨斯城红卫兵新路线|美国堪萨斯红卫兵|N|Y|未校对
毛远新的两次谈话记录|毛远新|Y|Y|已校对
毛泽东选集（一卷本）|毛泽东，人民出版社1968年版|Y|Y|未校对
走向黑暗（1995）|王希哲著|N|N|未校对
红旗一九六九年第十二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六九年第十一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六六年第十二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六六年第十三期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六六年第十四期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六六年第十五期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六六年第十一期|《红旗》杂志编辑部|N|Y|正在校对
红旗一九六七年第十二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六七年第十六期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六七年第十三期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六七年第十四期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六七年第十五期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六七年第十一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七二年第十二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七二年第十一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七〇年第十二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七〇年第十一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七六年第十二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七六年第十一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七三年第十二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七三年第十一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七四年第十二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七四年第十一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七五年第十二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七五年第十一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七一年第十二期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七一年第十三期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七一年第十一期|《红旗》杂志编辑部|N|Y|未校对
红旗一九五八年第十二期||N|Y|未校对
红旗一九五八年第十四期||N|Y|未校对
红旗一九五八年第十一期||N|Y|未校对
毛远新对当前工作的意见|毛远新|Y|Y|已校对
我为什么参加红色造反团|哈军工红色造反团驻沪《红色造反》战斗队印、苏州市纺织工人革命委员会翻印|Y|N|已校对
研究“工代会”会议记录|王洪文、张春桥|Y|Y|未校对
张春桥同志一月四日讲话|张春桥|Y|Y|未校对
“四人帮”罪行材料（八）|总参谋部政治部|Y|Y|已校对
“四人帮”罪行材料（二）|总参谋部政治部|Y|Y|已校对
“四人帮”罪行材料（九）|总参谋部政治部|Y|Y|已校对
“四人帮”罪行材料（六）|总参谋部政治部|Y|Y|已校对
“四人帮”罪行材料（三）|总参谋部政治部|Y|Y|已校对
“四人帮”罪行材料（四）|总参谋部政治部|Y|Y|已校对
“四人帮”罪行材料（五）|总参谋部政治部|Y|Y|已校对
“四人帮”罪行材料（一）|总参谋部政治部|Y|Y|已校对
《工人造反报》第115期|张春桥、工总司|N|N|未校对
帝国主义国家中的人民战争|法国毛主义共产党|N|Y|未校对
红旗一九六九年第六、七期|《红旗》杂志编辑部|N|Y|未校对
红旗一九六九年第三、四期|《红旗》杂志编辑部|N|Y|未校对
红旗一九七一年第七、八期|《红旗》杂志编辑部|N|Y|未校对
四人帮反党罪行选编（二）|江青，编者未知|Y|Y|已校对
王洪文副主席重要电话指示|王洪文|Y|Y|已校对
“四人帮”罪行材料（一〇）|总参谋部政治部|Y|Y|已校对
翻身——一个村庄的革命纪实|韩丁|N|N|未校对
关于工人队伍基本状况的调查|上海市革委，1973年8月|Y|Y|未校对
关于无产阶级文化大革命问题|王洪文|Y|Y|已校对
纪念中国共产党成立一百周年|中国共产主义小组（毛主义）|N|N|已校对
江青陈伯达在北京大学的讲话|中国人民大学《大唤大叫》战斗队转抄、上海毛棉行业红卫军委员会翻印|Y|N|已校对
林副主席的指示（1966）|技术物理系《东风战斗队》、北京地质学院东方红公社、北航《红方》六盘山游击队、北京工艺美术学校《井冈山》战斗小组|N|N|未校对
毛泽东选集1-7（静火版）|静火|N|N|未知
学习与批判一九七三年第二期|《学习与批判》编辑部|N|Y|未校对
学习与批判一九七三年第三期|《学习与批判》编辑部|N|Y|未校对
学习与批判一九七三年第四期|《学习与批判》编辑部|N|Y|未校对
学习与批判一九七三年第一期|《学习与批判》编辑部|N|Y|未校对
张春桥、姚文元同志重要讲话|张春桥、姚文元、杜平|Y|Y|未校对
张春桥同志在济南军区的讲话|张春桥、王效禹|Y|Y|正在校对
中央首长第三次接见安徽代表|安徽无产阶级革命派（P 派）赴京汇报代表团整理|Y|N|已校对
资料摘编（内部参考）第七期|张春桥，工总司办公室资料组编|Y|Y|已校对
自然辩证法一九七六年第二期|《自然辩证法》编辑部|N|Y|未校对
自然辩证法一九七六年第三期|《自然辩证法》编辑部|N|Y|未校对
自然辩证法一九七六年第一期|《自然辩证法》编辑部|N|Y|未校对
自然辩证法一九七三年第二期|恩格斯，人民出版社1971年版|N|Y|未校对
自然辩证法一九七三年第一期|恩格斯，人民出版社1971年版|N|Y|未校对
自然辩证法一九七四年第二期|恩格斯，人民出版社1971年版|N|Y|未校对
自然辩证法一九七四年第三期|恩格斯，人民出版社1971年版|N|Y|未校对
自然辩证法一九七四年第四期|恩格斯，人民出版社1971年版|N|Y|未校对
自然辩证法一九七四年第一期|恩格斯，人民出版社1971年版|N|Y|未校对
自然辩证法一九七五年第二期|《自然辩证法》编辑部|N|Y|未校对
自然辩证法一九七五年第三期|《自然辩证法》编辑部|N|Y|未校对
自然辩证法一九七五年第四期|《自然辩证法》编辑部|N|Y|未校对
自然辩证法一九七五年第一期|《自然辩证法》编辑部|N|Y|未校对
宗明兰同志的两份揭批查资料|宗明兰，辽宁省革委1976年底|Y|Y|正在校对
持久人民战争：革命的唯一途径|加拿大革命共产党|N|Y|未校对
机密档案中新发现的毛泽东讲话|宋永毅|N|N|未知
检查交代我向党进攻的思想情况|杨春甫，1976年12月|Y|Y|未校对
毛泽东文集第八卷（1999）|中央文献研究室|N|Y|未知
毛泽东文集第二卷（1999）|中央文献研究室|N|Y|未知
毛泽东文集第六卷（1999）|中央文献研究室|N|Y|未知
毛泽东文集第七卷（1999）|中央文献研究室|N|Y|未知
毛泽东文集第三卷（1999）|中央文献研究室|N|Y|未知
毛泽东文集第四卷（1999）|中央文献研究室|N|Y|未知
毛泽东文集第五卷（1999）|中央文献研究室|N|Y|未知
毛泽东文集第一卷（1999）|中央文献研究室|N|Y|未知
毛泽东选集第二卷（1967）|毛泽东|N|Y|未知
毛泽东选集第三卷（1967）|毛泽东|N|Y|未知
毛泽东选集第四卷（1967）|毛泽东|N|Y|未知
毛泽东选集第五卷（1977）|毛泽东|N|Y|未知
毛泽东选集第一卷（1967）|毛泽东|N|Y|未知
四人帮反党罪行材料选编（一）|江青、迟群、谢静宜，1976年11月|Y|Y|已校对
张春桥同志在南京体育馆的讲话||Y|Y|未校对
中国文化大革命文库（第三版）|宋永毅|Y|N|未知
中国文化大革命文库（第一版）|宋永毅|N|N|未知
宗明兰在省理论讨论会上的讲话||Y|Y|未校对
高举马克思列宁毛主义的鲜红旗帜||Y|Y|未校对
关于党内资产阶级问题的意见综述|中共中山县委宣传部|Y|Y|未校对
列宁选集 第二卷（1972年）|列宁，人民出版社1972年|N|Y|未校对
列宁选集 第三卷（1972年）|列宁，人民出版社|N|Y|未校对
列宁选集 第四卷（1972年）|列宁，人民出版社|N|Y|未校对
列宁选集 第一卷（1972年）|列宁，人民出版社1972年|N|Y|未校对
人民战争——通向解放的唯一道路|阶级立场|N|Y|未校对
首长讲话（1967.9.11）|张春桥，新交大革命造反总部争朝夕战斗队翻印|N|N|未校对
王洪文付主席和马天水同志的谈话||Y|Y|已校对
为什么是毛主义–什么是毛主义？||Y|Y|未校对
毛远新破坏民兵建设的部分罪行材料||Y|Y|已校对
张春桥同志对驻沪三军负责人的讲话||Y|Y|未校对
张春桥同志接见工总司常委时的讲话||Y|Y|未校对
赵辛初同志在全省广播大会上的讲话|中共湖北省委办公厅|N|Y|未校对
周总理指示（1966.10.3）|周恩来，北京航空学院“东方红”红卫兵宣传毛泽东思想战斗队|N|N|未校对
保卫贡萨罗主席的生命就是保卫毛主义||Y|Y|未校对
检查交代我和上海黄涛串联的犯罪情况||Y|Y|未校对
刘殷农部份罪行材料（1984.4）|刘殷农专案组|Y|Y|未校对
论中国的文化大革命及其对未来的遗产|美国马列毛主义革命学习小组|N|N|未校对
与贡萨罗主席的访谈（红色文献翻译）||Y|Y|未校对
怎么办？（人民出版社1965年版）|列宁，人民出版社1965年版|N|Y|未校对
张春桥同志讲话（1968.1.3）|张春桥|N|N|未校对
哲学笔记（人民出版社1974年版）|列宁，人民出版社1974年版|N|Y|未校对
中央军委命令（1967.1.28）|中央军委|N|Y|未校对
驳国内某些人对各国马列毛主义者的攻击|龚格晟|N|N|未校对
陈以梅同志在济南市二所对济南工人谈话||Y|Y|未校对
法兰西内战（人民出版社1971年版）|马克思，人民出版社1971年版|N|Y|未校对
共产党宣言（人民出版社1963年版）|马克思、恩格斯，人民出版社1963年版|N|Y|正在校对
国家与革命（人民出版社1976年版）|列宁，人民出版社1976年版|N|Y|未校对
黄兆其的部分罪行材料（1977.7）|朱、黄专案组|Y|Y|未校对
坚决批倒批臭刘少奇反革命修正主义路线||Y|Y|未校对
毛远新在省委常委会议上的发言（摘录）||Y|Y|已校对
伟大的创举（人民出版社1973年版）|列宁，人民出版社1973年版|N|Y|未校对
夏邦银、朱洪霞、胡厚民等人的言论节录|中共武汉市委材料组|N|Y|已校对
中共中央文件 中发〔1971〕13号|中共中央办公厅|N|Y|未校对
中共中央文件 中发〔1971〕20号|中共中央|N|Y|未校对
朱克家的部分罪行材料（1977.7）|朱、黄专案组，1977.7|Y|Y|未校对
自然辩证法（人民出版社1971年版）|恩格斯，人民出版社1971年版|N|Y|未校对
哥达纲领批判（人民出版社1971年版）|马克思，人民出版社1971年版|N|Y|未校对
青年团的任务（人民出版社1973年版）|列宁，人民出版社1973年版|N|Y|未校对
十年非梦——黄金海回忆录（2013年）|黄金海，2013年|N|N|未校对
斯大林选集（诸夏怀斯社2017年5月）|斯大林，诸夏怀斯社2017年5月|N|N|未校对
王洪文关于学习毛主席理论问题指示的讲话|安徽师范翻印|Y|N|已校对
张春桥同志接见福建部分赴京革命同学讲话||Y|Y|未校对
张延成同志在济南市有线广播大会上的讲话|济南市革命委员会办公室印|Y|Y|未校对
宗明兰在各市、地宣传组长座谈会上的讲话||Y|Y|未校对
大逆转：中国的私有化 1979-1989|韩丁|N|N|未校对
雇佣劳动与资本（人民出版社1965年版）|马克思，人民出版社1965年版|N|Y|未校对
关于第三世界国家的官僚资本主义进程的说明|秘鲁人民运动|N|N|未校对
进一步，退两步（人民出版社1975年版）|列宁，人民出版社1975年版|N|Y|未校对
毛泽东思想万岁（1961年-1968年）||Y|N|未校对
杀劫：镜头下的西藏文革（台北2016年）|唯色著，台北2016年|N|N|未校对
四清运动实录（浙江人民出版社2005年）|郭德宏、林小波，浙江人民出版社2005年|N|Y|未校对
唯物辩证法大纲（人民出版社1978年版）|李达，人民出版社1978年版|N|Y|未校对
无产阶级文化大革命参考资料（1966年）||Y|N|未校对
印度共产党（毛主义）文献集（2022年）|中国国内革命左派，2022年编|N|N|未校对
张春桥同志在省市革命委员会座谈会上的讲话|浙江日报整理|Y|N|未校对
政治经济学概论（人民出版社1973年版）|徐禾，人民出版社1973年版|N|Y|未校对
资本论 第二卷（人民出版社1975年版）|马克思，人民出版社1975年版|N|Y|未校对
资本论 第一卷（人民出版社1975年版）||Y|Y|未校对
党的基础知识（上海人民出版社1974年版）|上海人民出版社1974年版|N|Y|未校对
工资、价格和利润（人民出版社1974年版）|马克思，人民出版社1974年版|N|Y|未校对
近代中国史稿（上）（人民出版社1976年）||Y|Y|未校对
近代中国史稿（下）（人民出版社1976年）||Y|Y|未校对
马克思恩格斯选集 第二卷（1972年5月）|马克思、恩格斯，人民出版社1972年5月|N|Y|未校对
马克思恩格斯选集 第三卷（1972年5月）|马克思、恩格斯，人民出版社1972年5月|N|Y|未校对
马克思恩格斯选集 第四卷（1972年5月）|马克思、恩格斯，人民出版社1972年5月|N|Y|未校对
马克思恩格斯选集 第一卷（1972年5月）|马克思、恩格斯，人民出版社1972年5月|N|Y|未校对
毛远新吹捧宋江、美化自己的一段谈话（节录）||Y|Y|已校对
毛远新在市地委书记会议召集人会上的讲话记录||Y|Y|已校对
毛泽东选集第二卷（人民出版社1991年版）||Y|Y|未校对
毛泽东选集第三卷（人民出版社1991年版）||Y|Y|未校对
毛泽东选集第四卷（人民出版社1991年版）||Y|Y|未校对
毛泽东选集第一卷（人民出版社1991年版）||Y|Y|未校对
杨春甫在全国计划工作座谈会东北组的发言记录||Y|Y|未校对
杨春甫在全国计划工作座谈会上的发言（要点）||Y|Y|未校对
姚文元同志在上海市革命委员会报告会上的讲话||Y|Y|已校对
一月三日市革会扩大会议上张春桥同志最新指示||Y|Y|未校对
张春桥、姚文元同志在整风报告会上的重要讲话|上海外国语学院野战军赤卫军联合印、哈尔滨军事工程学院红色造反团翻印|Y|N|未校对
张春桥同志在上海市革命委员会报告会上的讲话||Y|Y|未校对
宗明兰在省直机关批判右倾翻案风大会上的讲话||Y|Y|未校对
毛远新同志在辽联赴京代表团座谈会上的讲话纪要||Y|Y|已校对
毛远新在省工农兵干部学习班的几次讲话（摘编）||Y|Y|已校对
矛盾论 实践论（上海人民出版社1968年版）||Y|Y|未校对
在北京接见辽革站赴京代表团时毛远新同志的讲话|辽革站《迎曙光》战斗兵团、阜联筹《红色风雷》编辑部翻印|Y|N|未校对
在市革会扩大会议上张春桥同志的讲话（记录稿）||Y|Y|未校对
张春桥关锋同志接见福建部分赴京革命同学的讲话||Y|Y|正在校对
张春桥同志六月十日在工总司骨干学习会上的讲话||Y|Y|未校对
张春桥同志十二月十日下午接见宣传系统代表讲话|上海市革命电影工作委员会、红卫兵山东文艺革命造反司令部翻印|Y|N|未校对
政治经济学讲座（讨论稿供参考）（1972年）||Y|Y|未校对
宗明兰在省工农干部学习班大会上的发言（提纲）||Y|Y|未校对
陈伯达同志谈刘、邓问题（1966.10.25）|陈伯达，1966.10.25|Y|N|未校对
冯金传达毛远新同志在省工农兵干部学习班上的讲话||Y|Y|已校对
国务院、中央军委文件 国发〔1974〕102号|国务院、中央军委文件，浙江省金华地区民兵工作经验交流会1976年9月翻印|N|Y|未校对
毛远新紧跟“四人帮”大反经验主义的部分罪行材料||Y|Y|正在校对
毛远新有关研究“儒法斗争史"的三次谈话（摘编）||Y|Y|已校对
苏联社会主义经济问题（人民出版社1961年版）||Y|Y|未校对
云南文革史稿（上）（美国华忆出版社2019年）|周孜仁著，美国华忆出版社2019年|N|N|未校对
云南文革史稿（下）（美国华忆出版社2020年）|周孜仁著，美国华忆出版社2020年|N|N|未校对
张春桥同志接见全国教育工作会议领导小组时的讲话||Y|Y|未校对
中国古代史（下）（南京大学历史系1976年版）|南京大学历史系1976年版|N|Y|未校对
中国古代史（中）（南京大学历史系1976年版）|南京大学历史系1976年版|N|Y|未校对
中国古代史（中）（南京大学历史系1976年版）|南京大学历史系1976年版|N|Y|未校对
资本论 第三卷（上）（人民出版社1975年版）|马克思，人民出版社1975年版|N|Y|未校对
资本论 第三卷（下）（人民出版社1975年版）|马克思，人民出版社1975年版|N|Y|未校对
“四人帮”死党毛远新破坏教育革命言论摘编（初编）|辽宁省教育局大批判组整理|Y|Y|已校对
关于正确处理人民内部矛盾的问题（毛泽东著作选读）|毛泽东|N|N|未校对
联共（布）党史简明教程（人民出版社1975年版）|人民出版社1975年版|N|Y|未校对
王洪文同志在山东重点企业批林批孔汇报会议上的讲话||Y|Y|已校对
唯物主义和经验批判主义（人民出版社1971年版）|列宁，人民出版社1971年版|N|Y|未校对
武汉地区文革纪实（中国文化传播出版社2020年）|中国文化传播出版社2020年|N|N|未校对
姚文元同志在欢庆黄浦区革命委员会成立大会上的讲话|摘要红卫战报、电气革命造反组翻印|Y|N|已校对
张春桥同志二月二十五日与华东局革命造反派座谈纪要||Y|Y|已校对
张春桥同志在上海市革命委员会扩大会议上的重要指示||Y|Y|未校对
陈锡联同志在沈阳三派革命群众组织代表座谈会上的讲话|辽革站-辽报联委《进军号》战斗组翻印|Y|N|已校对
家庭、私有制和国家的起源（人民出版社1972年版）|恩格斯，人民出版社1972年版|N|Y|未校对
揭发“四人帮”王洪文插手控制上影阴谋篡党夺权的罪行|中共上海电影制片厂委员会|Y|Y|已校对
路易·波拿巴的雾月十八日（人民出版社1972年版）|马克思，人民出版社1972年版|N|Y|未校对
毛远新同志在沈阳三派革命群众组织代表座谈会上的讲话||Y|Y|已校对
毛泽东著作选读（甲种本）（人民出版社1965年版）|毛泽东，人民出版社1965年版|N|Y|未校对
上海第一钢铁厂工人队伍状况的调查（1973年5月）||Y|Y|未校对
上海工人革命造反总司令部斗争纪要（上海1967年）|《工人造反报》编辑部、《一月革命》编辑部|N|Y|正在校对
无产阶级革命和叛徒考茨基（人民出版社1964年版）|列宁，人民出版社1964年版|N|Y|未校对
张春桥、姚文元同志在上海市革命造反派座谈会上的讲话|北航《红旗》驻沪联络站、上海工人革命大学红旗总部整理|Y|N|未校对
张春桥同志十一月十九日在上海市革会扩大会议上的讲话|上海戏剧学院《革命楼》狂妄整理|Y|N|未校对
政治经济学（帝国主义部分）（南开大学1976年版）||Y|Y|未校对
政治经济学（社会主义部分）（南开大学1976年版）||Y|Y|未校对
政治经济学（资本主义部分）（南开大学1976年版）||Y|Y|未校对
中央首长在北京市革命委员会常委扩大会议上的重要讲话|北大、地质学院对外资料组记录整理|Y|N|未校对
简明世界史（古代部分）（北京大学历史系1974年版）|北京大学历史系1974年版|N|Y|未校对
简明世界史（近代部分）（北京大学历史系1974年版）||Y|Y|正在校对
简明世界史（现代部分）（北京大学历史系1975年版）|北京大学历史系1974年版|N|Y|未校对
毛远新同志讲话（五月四日）八三一总司全委扩大会议简报||Y|Y|未校对
毛远新一九七五年挑拨中央与地方关系的几次谈话（摘录）||Y|Y|已校对
毛远新在批邓、反击右倾翻案风斗争中的一些言论（摘编）||Y|Y|已校对
毛远新在学习辽宁朝阳农学院教育革命经验现场会上的讲话||Y|Y|已校对
认真学习毛主席重要指示——搞清楚资产阶级就在共产党内||N|Y|已校对
社会主义从空想到科学的发展（人民出版社1967年版）|恩格斯，人民出版社1967年版|N|Y|未校对
夏邦银、朱洪霞、胡厚民等人罪行材料（街头大字报节录）|中共武汉市委材料组|N|Y|未校对
张春桥、姚文元在《社会主义政治经济学》座谈会上的言论||Y|Y|未校对
张春桥同志十一月二十五日在市革会扩大会议上的讲话纪要||Y|Y|已校对
张春桥同志在上海市市政交通系统革命派誓师大会上的讲话|上海工人革命造反总司令部原子核所大队整理、上海工人革命造反总司令部国毛十一厂工人革命造反队翻印|Y|N|未校对
张春桥在总政宣传部、解放军报社部分同志座谈会上的讲话||Y|Y|未校对
邓小平全面背叛马克思主义（广东人民出版社1976年版）||Y|Y|未校对
帝国主义是资本主义的最高阶段（人民出版社1964年版）|列宁，人民出版社1964年版|N|Y|未校对
毛泽东著作选读（乙种本）（中国青年出版社1964年版）|毛泽东，中国青年出版社1964年版|N|Y|未校对
上海“文化大革命”史话（送审稿）（二）（1992.8）|上海“文革”史料整理编纂小组，1992年8月|N|Y|未校对
上海“文化大革命”史话（送审稿）（三）（1992.8）|上海“文革”史料整理编纂小组，1992年8月|N|Y|未校对
上海“文化大革命”史话（送审稿）（一）（1992.8）|上海“文革”史料整理编纂小组，1992年8月|N|Y|未校对
武汉“七二〇”事件实录（中国文化传播出版社2017年）|徐海亮，中国文化传播出版社2017年|N|N|未校对
张春桥、姚文元同志在济南军区机关排以上干部会议上的讲话||Y|Y|未校对
张春桥同志1967年12月10日下午接见文艺界代表讲话||Y|Y|未校对
“四人帮”在甘肃的代理人冼恒汉罪行材料（1977.11）|中共甘肃省委揭批“四人帮”运动办公室印|Y|Y|未校对
工总司负责人王洪文同志一月十一日在长宁区俱乐部的重要讲话||Y|Y|已校对
共产主义运动中的“左派”幼稚病（人民出版社1973年版）|列宁，人民出版社1973年版|N|Y|未校对
上海工人革命造反派代表会议文件汇编（上海1967.12）|上海工人革命造反总司令部、《工人造反报》编辑部、《一月风暴》编辑部|N|Y|未校对
社会主义政治经济学 （未定稿第二版讨论稿）（1976年）||Y|Y|正在校对
天地翻覆——中国文化大革命史 上篇（天地图书2016年）|杨继绳著，天地图书2016年|N|N|未校对
天地翻覆——中国文化大革命史 下篇（天地图书2016年）|杨继绳著，天地图书2016年|N|N|未校对
为毛主席而战——文革重庆大武斗实录（三联书店2010年）|何蜀著，三联书店2010年|N|N|未校对
无产阶级文化大革命概述简论（第三篇）（水陆洲2012年）|水陆洲编|N|N|未校对
无产阶级文化大革命概述简论（第一篇）（水陆洲2011年）|水陆洲编|N|N|未校对
无产阶级文化大革命概述简论（简要本）（水陆洲2012年）|水陆洲编|N|N|未校对
中国：现代社会帝国主义大国（棱镜杂志社2020年10月）||Y|Y|未校对
中华人民共和国建国史研究 1（江西人民出版社2009年）|杨奎松著，江西人民出版社2009年|N|N|未校对
中华人民共和国建国史研究 2（江西人民出版社2009年）|杨奎松著，江西人民出版社2009年|N|N|未校对
资本主义是怎样在苏联复辟的（上海人民出版社1975年版）|革命联盟，上海人民出版社1975年版|N|Y|未校对
关于国际共产主义运动总路线的论战（人民出版社1965年版）|人民出版社1965年版|N|Y|未校对
马克思恩格斯列宁论无产阶级专政（人民出版社1975年2月）|马克思、恩格斯、列宁，张春桥、姚文元选编，人民出版社1975年2月|N|Y|未校对
毛远新同志在辽革站赴京代表团揭发批判宋任穷会议上的讲话纪要|沈阳日报联委会《曙光在前》翻印|Y|Y|已校对
毛泽东思想万岁（1913-1943卷）（1968年武汉版）|未知|N|N|未知
毛泽东思想万岁（1943-1949卷）（1968年武汉版）|未知|N|N|未知
毛泽东思想万岁（1949-1957卷）（1968年武汉版）|未知|N|N|未知
毛泽东思想万岁（1958-1960卷）（1968年武汉版）|未知|N|N|未知
毛泽东思想万岁（1961-1968卷）（1968年武汉版）|未知|N|N|未知
儒法斗争史稿（国营第三五六厂、云南大学理论组1975年版）|国营第三五六厂、云南大学理论组1975年版|N|Y|未校对
社会民主党在民主革命中的两种策略（人民出版社1971年版）|列宁，人民出版社1971年版|N|Y|未校对
王洪文副主席在接见总参民兵组训工作座谈会议全体同志时的讲话||Y|Y|已校对
我们应该如何看待秘鲁的人民战争？（红色文献翻译2020年）||Y|Y|未校对
夏邦银、朱洪霞、胡厚民等人罪行材料（街头大字报、传单节录）|中共武汉市委材料组|N|Y|未校对
马克思主义的三个来源和三个组成部分（人民出版社1974年版）|列宁，人民出版社1974年版|N|Y|未校对
前奏：毛泽东1965年重上井冈山（当代中国出版社2010年）|马社香著，当代中国出版社2010年|N|N|未校对
社会改良还是社会革命（生活·读书·新知三联书店1958年版）|罗莎·卢森堡，生活·读书·新知三联书店1958年版|N|Y|未校对
王洪文、纪登奎同志在省委工作会议召集人和县委书记会议上的讲话|中共浙江省委办公室|Y|Y|已校对
王洪文同志二月九日在接见四川大足汽车厂在北京学习班同志的讲话||Y|Y|已校对
张春桥同志最新讲话——二月二十五日与华东局革命造反派座谈纪要||Y|Y|未校对
张春桥姚文元同志接见上海工人革命造反总司令部赴京代表团的讲话||Y|Y|未校对
超凡领袖的挫败——文化大革命在武汉（中文大学出版社2009年）|王绍光著，王红绩译，中文大学出版社2009年|N|N|未校对
革命造反年代：上海文革运动史稿 I（牛津大学出版社2015年）|李逊著，牛津大学出版社2015年|N|N|未校对
论一元论唯物史观的发展（生活·读书·新知三联书店1973年版）|普列汉诺夫，生活·读书·新知三联书店1973年版|N|Y|未校对
王力同志十月十七日在政协礼堂的讲话记录（1966.10.17）|清华大学井冈山红卫兵、中山医学院《红色女兵》、新北大《长征》战斗队|N|N|未校对
无产阶级文化大革命概述简论（第二篇）（上）（水陆洲2011年）|水陆洲编|N|N|未校对
无产阶级文化大革命概述简论（第二篇）（下）（水陆洲2011年）|水陆洲编|N|N|未校对
无产阶级文化大革命概述简论（第二篇）（中）（水陆洲2011年）|水陆洲编|N|N|未校对
张春桥同志、姚文元同志在上海市革命委员会教卫小组座谈会上的讲话||Y|Y|未校对
郑州市深揭狠批“四人帮”大会发言材料之四（1977.3.17）|市革委生产指挥部副指挥长 马力|Y|Y|未校对
1848年至1850年的法兰西阶级斗争（人民出版社1973年版）|马克思，人民出版社1973年版|N|Y|未校对
1966-1976年中国国民经济概况（四川人民出版社2016年）|陈东林，四川人民出版社2016年4月|N|N|未校对
复制的艺术：文革期间的文化生产及实践（中文大学出版社2017年）|彭丽君著，中文大学出版社2017年|N|N|未校对
革命造反年代：上海文革运动史稿 II（牛津大学出版社2015年）|李逊著，牛津大学出版社2015年|N|N|未校对
国际共产主义运动中两条路线斗争简史（北京人民出版社1976年版）|北京人民出版社1976年版|N|Y|未校对
国务院秘书长周荣鑫同志十月九日在地院的讲话（1966.10.9）|周荣鑫、李富春|N|N|未校对
路德维希·费尔巴哈和德国古典哲学的终结（人民出版社1972年版）|恩格斯，人民出版社1972年版|N|Y|未校对
论个人在历史上的作用问题（生活·读书·新知三联书店1964年版）|普列汉诺夫，生活·读书·新知三联书店1964年版|N|Y|未校对
毛远新同志的讲话——四月八日在京沈阳三派代表批斗宋任穷会上的讲话||Y|Y|已校对
哪个东方才是红的？毛主义在苏联及东欧的存在（1956-1980）|安德鲁·M·斯密斯|N|N|未校对
中国的文化大革命与工业组织（中国文化传播出版社2009年8月版）||Y|Y|未校对
中国共产党两条路线斗争史讲义（安徽师范大学政教系1976年7月）||Y|Y|未校对
社会主义社会的基本矛盾和党的基本路线（广东人民出版社1976年版）|广东人民出版社1976年版|N|Y|未校对
为加强无产阶级专政而斗争——上海市革命委员会一九六七年六月二日决议|上海市革命委员会|N|Y|未校对
张春桥主任一九七五年三月一日在全军各大单位政治部主任座谈会上的讲话||Y|Y|已校对
全国农业劳动模范陈以梅同志在山东省工农兵代表批林批孔汇报大会上的讲话||Y|Y|未校对
无产阶级文化大革命中上海反对经济主义大事记（上海1967.3.17）|上海市革命委员会反对经济主义联络总部|N|Y|未校对
怎样理解资产阶级就在共产党内——北京市第三次理论讨论会的五个发言材料|北京人民出版社、中共北京市委宣传组|N|Y|已校对
张春桥、姚文元同志在革命委员会扩大会议上的讲话（1967.3.12）|张春桥、姚文元|N|N|未校对
张春桥同志接见上海《红革会》与《工人革命造反总司令部》代表的谈话记录|中央音乐学院红教工“劲松”战斗组转抄、上海文艺界革命造反纵队上海交响乐团支队翻印、上海革命文工团《红旗》《鲁迅》战斗队再翻印|Y|N|已校对
中共中央政治局同志7月30日晚接见全国计划工作座谈会全体同志时的讲话|杨家沟文改局|Y|Y|未知
不再沉默——一个文革亲历者的回顾与思考（中国文化传播出版社2010年）|武彩霞，中国文化传播出版社2010年8月|N|N|未校对
反击教条主义者对毛泽东思想的进攻——评恩维尔·霍查的《帝国主义与革命》|美国革命共产党|N|N|未校对
康生、谢富治在北京大中学校学生代表座谈会上的讲话（1967.8.11）|康生、谢富治|N|Y|未校对
毛远新一九七四年一月在团省委召开的“学习吴献忠座谈会”上的讲话（节录）||Y|Y|已校对
内蒙文革实录：“民族分裂”与“挖肃”运动（天行健出版社2010年6月）|启之著，天行健出版社2010年6月|N|N|未校对
印度一些革命派的重要文件、文章汇编（中共中央对外联络部1970年5月）||Y|Y|未校对
张春桥姚文元同志接见上海工人革命造反总司令部赴京代表团的讲话（印刷版）||Y|Y|未校对
中国革命的道路——论解放后两条路线的斗争（批判与再造社2020年6月）||Y|Y|未校对
国际共产主义运动简史（1848-1917）（上海人民出版社1976年版）|上海人民出版社1976年版|N|Y|未校对
极端年代的公民政治——群众的文化大革命史（中国文化传播出版社2011年）|童小溪，中国文化传播出版社2011年4月|N|N|未校对
社会主义时期的党内资产阶级（谈谈党内资产阶级）（中共上海市委1976年）||Y|Y|未校对
为了国际毛主义统一会议！关于国际共产主义运动及其当前总政治路线商榷的提案|国际毛主义统一会议协调委员会|N|Y|未校对
文化大革命的起源-大跃进 1958-1960年（新世纪出版社2012年）|马若德著，新世纪出版社2012年|N|N|未校对
夏邦银、朱鸿霞、胡厚民等人配合“四人帮”在湖北大搞篡党夺权阴谋活动的罪行|中共武汉市委材料组|N|Y|未校对
在《上海市市政交通系统革命造反派抓革命、促生产誓师大会》上张春桥同志讲话||Y|Y|未校对
张春桥、姚文元同志接见上海市革命委员会工作人员（学生、群众组织）时的讲话|赤卫军大专院校革命委员会翻印|Y|N|未校对
张春桥同志在上海市革委“活学活用毛泽东思想、‘九大’文献讲用会”上的讲话||Y|Y|未校对
哲学小辞典（辩证唯物主义和历史唯物主义部分）（上海人民出版社1975年）|上海《哲学小辞典》编写组，上海人民出版社1975年|N|Y|未校对
李富春副总理关于一九六七年全国生产供应会议的重要指示（1967.6.26）|《一部总》成套总局《长征战团》1967年6月26日，革命工人造反总部翻印|N|N|未校对
马克思主义哲学基本知识（政治理论课辅助教材）湖南省衡阳、邵阳地区卫生学校编|湖南省衡阳地区卫生学校、邵阳地区卫生学校编|N|Y|未校对
中共党史教学参考资料 第25册 “文化大革命”参考资料 上册（1988年）||Y|Y|未校对
中共党史教学参考资料 第26册 “文化大革命”参考资料 中册（1988年）||Y|Y|未校对
中共党史教学参考资料 第27册 “文化大革命”参考资料 下册（1988年）||Y|Y|未校对
总理、邓小平、张春桥副总理在国务院领导人见面会上的讲话（1975.2.1）|周恩来、邓小平、张春桥，哈尔滨市小汽车公司传达|N|Y|未校对
毛远新同志、陈锡联司令员、李伯秋主任在接见辽宁三大派赴京代表团会议上讲话纪要|沈阳日报联委会《曙光在前》翻印|Y|Y|已校对
文化大革命的起源-浩劫的来临 1961-1966年（新世纪出版社2012年）|马若德著，新世纪出版社2012年|N|N|未校对
红色工程师的崛起：清华大学与中国技术官僚阶级的起源（中文大学出版社2017年）|安舟著，中文大学出版社2017年|N|N|未校对
文化大革命的起源-人民内部矛盾 1956-1957年（新世纪出版社2012年）|马若德著，新世纪出版社2012年|N|N|未校对
关于“四人帮”提倡所谓“大写与走资派作斗争的作品”的有关材料（1976年11月）|上海电影制片厂办公室印|Y|Y|未校对
关于杨德政﹑康岩中、杨世才、袁昌福等人召开反革命应变会的部分材料（1977.3）|中共贵州省委清查领导小组办公室，1977年3月|N|Y|未校对
在工总司召开的“坚决响应毛主席伟大号召，‘斗私批修’誓师大会”上张春桥同志的讲话||Y|Y|已校对
怎样理解资产阶级在党内？——宗明兰同志在辽宁省理论讨论会上的总结发言（记录整理）|广州市委党、干校桂花岗学习班翻印、甘肃师范大学政史系七六级二班翻印|Y|Y|已校对
周总理接见工交、财贸、农林口各部委及国务院直属单位代表时的讲话（1968.2.2）|周恩来、李富春|N|Y|未校对
总理、陈伯达、康生、江青、姚文元等同志在接见全国铁路、交通会议全体代表时的重要讲话||Y|Y|已校对
“四人帮”在湖北的黑干将、现行反革命分子夏邦银、朱鸿霞、胡厚民、张立国、董明会的罪行材料||Y|Y|未校对
在毛主义和人民战争下对取消主义斗争和团结国际共运：关于阿共（毛）对2018年五一宣言的批评|巴西共产党（红色派）|N|Y|未校对
在“高举毛泽东思想伟大红旗，进一步开展‘三结合’夺权斗争誓师大会”上张春桥、姚文元同志的讲话|上海工人革命造反总司令部徐汇区联络部整理|Y|N|未校对
总理、伯达、康生、江青、姚文元同志接见南京军区、江苏赴京代表团讲话纪要（1968.1.28）|周恩来、陈伯达、康生、江青、姚文元，江苏省军事管制委员会印、南京市新华书店翻印|N|Y|未校对
张春桥同志在上海市革命委员会“高举毛泽东思想伟大红旗进一步开展三结合夺权斗争誓师大会”上的讲话||Y|Y|未校对
张春桥同志在上海市革委“活学活用毛泽东思想、‘九大’文献讲用会”上的讲话（1969.6.17）|张春桥|N|N|未校对
作为发展人民战争的一部分，进行秘鲁共产党的全面重组，以在全国夺取政权！抓住贡萨罗思想解决新问题||Y|Y|未校对
毛主席读《政治经济学教科书》（第三版）社会主义部分的笔记（郑州大学文化革命联络委员会1967年）||Y|Y|未校对
十月九日晚七时半左右周总理、张春桥同志接见清华大学八个组织五个代表时的谈话（1966.10.9）|周恩来、张春桥，红旗向东战斗小组、动力系锅炉燃烧教研组、清华《红色服务员》《红矛》、清华红卫兵八一远征队、清华锅炉、燃烧、井冈山红卫兵宣传组、北航4系红卫兵、清华大学力104、清华大学船舶教研组|N|Y|未校对
市革会领导成员、工总司主要负责人王洪文同志一九六七年十二月廿二日下午在铁路文化宫大会上的重要讲话||Y|Y|已校对
上海市机电一局系统活学活用毛泽东思想积极分子代表大会上市革会领导成员、工总司负责人王洪文同志的讲话||Y|Y|已校对
关于社会主义革命时期的阶级关系问题——辽宁省委宣传组理论问题讨论会《关于阶级关系问题的讨论情况汇集》|中共温州市委宣传部印|N|Y|未校对
张春桥同志在上海市革命委员会“高举毛泽东思想伟大红旗进一步开展三结合夺权斗争誓师大会”上的讲话（油印版）|复旦《鏖战急》毛泽东主义兵团、上无九厂工人革命造反队整理，华东局机关《卫东彪》革命造反队、士兵革命委员会打印、华东局机关理论班革命造反队、红宣兵革命造反队翻印|Y|N|未校对
周恩来、陈伯达、康生、江青、杨成武、张春桥同志和中央文革小组在接见河南湖北来京参加学习班的军队干部地方干部和红卫兵会议上的讲话||Y|Y|未校对

以及许多未知来源的笔记/讲话记录/文稿/手稿/翻印稿正在录入。

## 计划收录的多媒体资料

### 音乐及歌词

| 名称                             | 收录状态 |
| -------------------------------- | -------- |
| 采药                             | 已收录   |
| 丰收                             | 已收录   |
| 会昌                             | 已收录   |
| 赞歌                             | 已收录   |
| 赞歌                             | 已收录   |
| 毕业歌                           | 已收录   |
| 采茶灯                           | 已收录   |
| 打靶歌                           | 已收录   |
| 大路歌                           | 已收录   |
| 蝶恋花                           | 已收录   |
| 丰收歌                           | 已收录   |
| 逛新城                           | 已收录   |
| 好阿姨                           | 已收录   |
| 红旗颂                           | 已收录   |
| 老司机                           | 已收录   |
| 浏阳河                           | 已收录   |
| 前进歌                           | 已收录   |
| 请茶歌                           | 已收录   |
| 生产忙                           | 已收录   |
| 四好歌                           | 已收录   |
| 洗衣歌                           | 已收录   |
| 小司机                           | 已收录   |
| 新疆好                           | 已收录   |
| 新女性                           | 已收录   |
| 绣彩像                           | 已收录   |
| 绣金匾                           | 已收录   |
| 选良种                           | 已收录   |
| 在一起                           | 已收录   |
| 阿细山歌                         | 已收录   |
| 北京颂歌                         | 已收录   |
| 打靶归来                         | 已收录   |
| 翻身道情                         | 已收录   |
| 歌唱祖国                         | 已收录   |
| 积肥小唱                         | 已收录   |
| 抗日战歌                         | 已收录   |
| 老板之歌                         | 已收录   |
| 老饲养员                         | 已收录   |
| 十送红军                         | 已收录   |
| 说打就打                         | 已收录   |
| 新的女性                         | 已收录   |
| 造反有理                         | 已收录   |
| 争取胜利                         | 已收录   |
| 阿波毛主席                       | 已收录   |
| 大刀进行曲                       | 已收录   |
| 鄂伦春小唱                       | 已收录   |
| 伐木工人歌                       | 已收录   |
| 歌唱华主席                       | 已收录   |
| 歌唱解放军                       | 已收录   |
| 歌唱欧阳海                       | 已收录   |
| 歌颂毛主席                       | 已收录   |
| 革命故事会                       | 已收录   |
| 工农革命歌                       | 已收录   |
| 工农革命歌                       | 已收录   |
| 工农一家人                       | 已收录   |
| 海上女民兵                       | 已收录   |
| 红领巾之歌                       | 已收录   |
| 红卫兵战歌                       | 已收录   |
| 怀念毛主席                       | 已收录   |
| 纪念白求恩                       | 已收录   |
| 舰队进行曲                       | 已收录   |
| 节日的队伍                       | 已收录   |
| 苗岭连北京                       | 已收录   |
| 女社员之歌                       | 已收录   |
| 秋收起义歌                       | 已收录   |
| 人民公社好                       | 已收录   |
| 三八作风歌                       | 已收录   |
| 社会主义好                       | 已收录   |
| 十唱共产党                       | 已收录   |
| 送郎当红军                       | 已收录   |
| 送郎当红军                       | 已收录   |
| 万岁毛主席                       | 已收录   |
| 伟大的北京                       | 已收录   |
| 我是一个兵                       | 已收录   |
| 乌苏里船歌                       | 已收录   |
| 喜摘丰收棉                       | 已收录   |
| 献给毛主席                       | 已收录   |
| 想念毛主席                       | 已收录   |
| 战斗进行曲                       | 已收录   |
| 志愿军战歌                       | 已收录   |
| “共大”赞歌                       | 已收录   |
| “造反有理”                       | 已收录   |
| 八角楼的灯光                     | 已收录   |
| 北京的金山上                     | 已收录   |
| 到敌人后方去                     | 已收录   |
| 读毛主席的书                     | 已收录   |
| 高举革命大旗                     | 已收录   |
| 跟着共产党走                     | 已收录   |
| 红太阳照边疆                     | 已收录   |
| 接过雷锋的枪                     | 已收录   |
| 马儿啊快快走                     | 已收录   |
| 毛主席派人来                     | 已收录   |
| 世界是你们的                     | 已收录   |
| 四个念念不忘                     | 已收录   |
| 我们的连队好                     | 已收录   |
| 向毛主席报喜                     | 已收录   |
| 向着太阳唱歌                     | 已收录   |
| 新世纪的前奏                     | 已收录   |
| 新中国的青年                     | 已收录   |
| 雄伟的天安门                     | 已收录   |
| 医疗队员之歌                     | 已收录   |
| 中苏友谊之歌                     | 已收录   |
| 阿佤人民唱新歌                   | 已收录   |
| 白族姑娘爱唱歌                   | 已收录   |
| 北京有个金太阳                   | 已收录   |
| 边防军人的宣誓                   | 已收录   |
| 苍山歌声永不落                   | 已收录   |
| 藏胞歌唱解放军                   | 已收录   |
| 唱支山歌给党听                   | 已收录   |
| 春光万里红旗扬                   | 已收录   |
| 打起手鼓唱起歌                   | 已收录   |
| 大海航行靠舵手                   | 已收录   |
| 代代高唱东方红                   | 已收录   |
| 党是春雨我是苗                   | 已收录   |
| 侗歌向着北京唱                   | 已收录   |
| 翻身农奴把歌唱                   | 已收录   |
| 反击右倾翻案风                   | 已收录   |
| 歌声飞出心窝窝                   | 已收录   |
| 革命宝书人人读                   | 已收录   |
| 革命青年进行曲                   | 已收录   |
| 根治海河谱新篇                   | 已收录   |
| 工人阶级硬骨头                   | 已收录   |
| 桂花开放幸福来                   | 已收录   |
| 红区干部好作风                   | 已收录   |
| 欢呼歌唱十六条                   | 已收录   |
| 火车向着韶山跑                   | 已收录   |
| 加快步伐朝前走                   | 已收录   |
| 坚决拥护华主席                   | 已收录   |
| 金珠玛米亚古都                   | 已收录   |
| 井冈山下种南瓜                   | 已收录   |
| 看见你们格外亲                   | 已收录   |
| 雷锋我们的战友                   | 已收录   |
| 林彪同志发号召                   | 已收录   |
| 陇原儿女学大寨                   | 已收录   |
| 毛主席畅游长江                   | 已收录   |
| 美酒献给毛主席                   | 已收录   |
| 牧民歌唱毛主席                   | 已收录   |
| 牧区大寨红旗飘                   | 已收录   |
| 七亿人民七亿兵                   | 已收录   |
| 骑马挎枪走天下                   | 已收录   |
| 请喝一杯酥油茶                   | 已收录   |
| 人民公社是金桥                   | 已收录   |
| 人民公社新花开                   | 已收录   |
| 人民军队忠于党                   | 已收录   |
| 人民战士进行曲                   | 已收录   |
| 日夜想念毛主席                   | 已收录   |
| 日夜想念毛主席                   | 已收录   |
| 三湾来了毛委员                   | 已收录   |
| 山歌向着青天唱                   | 已收录   |
| 山乡盼着你们来                   | 已收录   |
| 畲家歌颂毛主席                   | 已收录   |
| 社会主义放光芒                   | 已收录   |
| 社员心向共产党                   | 已收录   |
| 十里长街送总理                   | 已收录   |
| 颂歌献给毛主席                   | 已收录   |
| 颂歌一曲唱韶山                   | 已收录   |
| 天山青松根连根                   | 已收录   |
| 天上太阳红彤彤                   | 已收录   |
| 挑担茶叶上北京                   | 已收录   |
| 听话要听党的话                   | 已收录   |
| 巍巍钟山迎朝阳                   | 已收录   |
| 为咱亲人补军装                   | 已收录   |
| 我爱北京天安门                   | 已收录   |
| 我爱祖国的蓝天                   | 已收录   |
| 我唱公社美景多                   | 已收录   |
| 我的家在日喀则                   | 已收录   |
| 我们都是红卫兵                   | 已收录   |
| 我们怀念杨开慧                   | 已收录   |
| 我们是民主青年                   | 已收录   |
| 我们走在大路上                   | 已收录   |
| 我是公社小社员                   | 已收录   |
| 我为祖国守大桥                   | 已收录   |
| 我为祖国献石油                   | 已收录   |
| 我站在铁索桥上                   | 已收录   |
| 喜送公粮破浪来                   | 已收录   |
| 阳光灿烂照红旗                   | 已收录   |
| 瑶家歌颂毛主席                   | 已收录   |
| 一对银燕飞上天                   | 已收录   |
| 英姿飒爽女电工                   | 已收录   |
| 永远跟着毛主席                   | 已收录   |
| 在北京的金山上                   | 已收录   |
| 赞歌献给华主席                   | 已收录   |
| 战士歌唱东方红                   | 已收录   |
| 针线包是传家宝                   | 已收录   |
| 政治夜校亮堂堂                   | 已收录   |
| 芝麻开花节节高                   | 已收录   |
| 志在宝岛创新业                   | 已收录   |
| 众手浇开幸福花                   | 已收录   |
| 壮锦献给毛主席                   | 已收录   |
| 祖国一片新面貌                   | 已收录   |
| 藏族人民纵情歌唱                 | 已收录   |
| 大寨人心向红太阳                 | 已收录   |
| 党的旗帜高高飘扬                 | 已收录   |
| 富饶美丽的潞江坝                 | 已收录   |
| 歌唱农业发展纲要                 | 已收录   |
| 歌唱社会主义祖国                 | 已收录   |
| 歌唱我们的新西藏                 | 已收录   |
| 革命青年志在四方                 | 已收录   |
| 革命人永远是年轻                 | 已收录   |
| 革命知识青年之歌                 | 已收录   |
| 红花向着毛主席开                 | 已收录   |
| 华主席是咱掌舵人                 | 已收录   |
| 怀念敬爱的周总理                 | 已收录   |
| 解放军野营到山村                 | 已收录   |
| 毛泽东思想传万代                 | 已收录   |
| 毛泽东思想照羌家                 | 已收录   |
| 毛主席穿上绿军装                 | 已收录   |
| 毛主席恩情比海深                 | 已收录   |
| 毛主席来到咱农庄                 | 已收录   |
| 毛主席是咱社里人                 | 已收录   |
| 毛主席万岁万万岁                 | 已收录   |
| 毛主席著作闪金光                 | 已收录   |
| 毛主席著作像太阳                 | 已收录   |
| 毛主席指引大寨路                 | 已收录   |
| 母亲留下的伽倻琴                 | 已收录   |
| 南来的雁北去的风                 | 已收录   |
| 千年的铁树开了花                 | 已收录   |
| 全世界人民心一条                 | 已收录   |
| 群众是真正的英雄                 | 已收录   |
| 人民的总理人民爱                 | 已收录   |
| 三大纪律八项注意                 | 已收录   |
| 山丹丹花开红艳艳                 | 已收录   |
| 生活在毛泽东时代                 | 已收录   |
| 伟大的导师毛主席                 | 已收录   |
| 伟大的领袖毛泽东                 | 已收录   |
| 伟大祖国百花吐艳                 | 已收录   |
| 我爱这公社新一代                 | 已收录   |
| 我爱这蓝色的海洋                 | 已收录   |
| 我们大家要学习他                 | 已收录   |
| 我们的朋友遍天下                 | 已收录   |
| 我们是藏族女民工                 | 已收录   |
| 我们是年青的一代                 | 已收录   |
| 我为伟大祖国站岗                 | 已收录   |
| 心中的太阳永不落                 | 已收录   |
| 要提高我们的勇气                 | 已收录   |
| 有一个美丽的地方                 | 已收录   |
| 做毛主席的好战士                 | 已收录   |
| 唱支歌儿献给毛主席               | 已收录   |
| 大跃进的歌声震山河               | 已收录   |
| 翻身农奴爱戴华主席               | 已收录   |
| 歌唱南京路上好八连               | 已收录   |
| 各族人民歌唱毛主席               | 已收录   |
| 各族人民热爱华主席               | 已收录   |
| 哈尼人民热爱毛主席               | 已收录   |
| 坚决捍卫毛泽东思想               | 已收录   |
| 敬祝毛主席万寿无疆               | 已收录   |
| 库尔班大叔您上哪儿               | 已收录   |
| 毛委员和我们在一起               | 已收录   |
| 毛主席关怀咱山里人               | 已收录   |
| 毛主席和我们在一起               | 已收录   |
| 毛主席和我们在一起               | 已收录   |
| 毛主席呀走遍全中国               | 已收录   |
| 毛主席语录再版前言               | 已收录   |
| 毛主席在我们心坎里               | 已收录   |
| 毛主席走遍祖国大地               | 已收录   |
| 贫下中农最爱毛主席               | 已收录   |
| 千歌万曲歌唱毛主席               | 已收录   |
| 勤俭是咱们的传家宝               | 已收录   |
| 全世界人民一定胜利               | 已收录   |
| 撒尼人民心向红太阳               | 已收录   |
| 上海第三次武装起义               | 已收录   |
| 社会主义新生事物好               | 已收录   |
| 太阳最红毛主席最亲               | 已收录   |
| 铁道兵战士志在四方               | 已收录   |
| 伟大的国家伟大的党               | 已收录   |
| 我爱祖国的西沙群岛               | 已收录   |
| 我走在公社的大路上               | 已收录   |
| 信天游唱给毛主席听               | 已收录   |
| 延安儿女心向毛主席               | 已收录   |
| 延边人民热爱毛主席               | 已收录   |
| 咱是生产队的半边天               | 已收录   |
| 战士爱读毛主席的书               | 已收录   |
| 祝福毛主席万寿无疆               | 已收录   |
| 祝福毛主席万寿无疆               | 已收录   |
| 壮家少年热爱毛主席               | 已收录   |
| 壮族人民歌唱毛主席               | 已收录   |
| 草原上升起不落的太阳             | 已收录   |
| 爹亲娘亲不如毛主席亲             | 已收录   |
| 歌唱 32111 钻井队                | 已收录   |
| 跟着毛泽东世界一片红             | 已收录   |
| 工人阶级必须领导一切             | 已收录   |
| 红太阳一定要照亮台湾             | 已收录   |
| 华主席播下春光暖人心             | 已收录   |
| 洁白的哈达献给毛主席             | 已收录   |
| 解放军同志请你停一停             | 已收录   |
| 看谁的社会主义干劲大             | 已收录   |
| 毛主席的书是革命的宝             | 已收录   |
| 毛主席率领我们反潮流             | 已收录   |
| 毛主席永远和我在一起             | 已收录   |
| 农业机械化道路宽又广             | 已收录   |
| 全世界人民热爱毛主席             | 已收录   |
| 全世界无产者联合起来             | 已收录   |
| 台湾同胞我的骨肉兄弟             | 已收录   |
| 我们都是来自五湖四海             | 已收录   |
| 我们共产党人好比种子             | 已收录   |
| 我们是共产主义接班人             | 已收录   |
| 我们是光荣的人民教师             | 已收录   |
| 我们是毛主席的红卫兵             | 已收录   |
| 我们是毛主席的红小兵             | 已收录   |
| 我们是毛主席的红小兵             | 已收录   |
| 我心中的歌献给解放军             | 已收录   |
| 真正的铜墙铁壁是什么             | 已收录   |
| 总路线的光芒照耀四方             | 已收录   |
| 把列宁主义大旗高高举起           | 已收录   |
| 歌唱无产阶级文化大革命           | 无       |
| 公社是毛泽东思想大学校           | 已收录   |
| 蓝天里有一颗会唱歌的星           | 已收录   |
| 林彪、孔老二都是坏东西           | 已收录   |
| 毛主席，草原人民热爱您           | 已收录   |
| 毛主席，我们心中的太阳           | 已收录   |
| 毛主席的战士最听党的话           | 已收录   |
| 毛主席永远活在我们心中           | 已收录   |
| 万岁！伟大的中国共产党           | 已收录   |
| 万岁毛主席！万岁共产党           | 已收录   |
| 文化大革命凯歌响彻大地           | 已收录   |
| 我爱五指山，我爱万泉河           | 已收录   |
| 我为文化大革命高唱赞歌           | 已收录   |
| 无产阶级革命派联合起来           | 已收录   |
| 英明的领袖敬爱的华主席           | 已收录   |
| 永远歌唱伟大领袖毛主席           | 已收录   |
| 继承毛主席的遗志奋勇向前         | 已收录   |
| 毛主席啊，我们永远忠于您         | 已收录   |
| 毛主席的恩情比山高比水长         | 已收录   |
| 毛主席的革命路线胜利万岁         | 已收录   |
| 毛主席是我们心中的红太阳         | 已收录   |
| 毛主席祝您老人家万寿无疆         | 已收录   |
| 前进在毛主席的革命路线上         | 已收录   |
| 人民是创造世界历史的动力         | 已收录   |
| 世世代代铭记毛主席的恩情         | 已收录   |
| 伟大的毛泽东思想灿烂辉煌         | 已收录   |
| 伟大的社会主义祖国在前进         | 已收录   |
| 无产阶级文化大革命就是好         | 已收录   |
| 在无产阶级专政旗帜下前进         | 无       |
| 中国少年先锋队队歌（旧）         | 已收录   |
| 草原上的红卫兵见到了毛主席       | 已收录   |
| 高举无产阶级专政的旗帜前进       | 已收录   |
| 跟着毛主席在大风大浪中前进       | 已收录   |
| 孩子啊！快接过红旗去打天下       | 已收录   |
| 为巩固无产阶级专政奋勇斗争       | 已收录   |
| 一定要把胜利的旗帜插到台湾       | 已收录   |
| 毛主席的革命路线指引咱永向前     | 已收录   |
| 毛主席是各族人民心中的红太阳     | 已收录   |
| 敬爱的周总理您永远活在我们心间   | 已收录   |
| 毛泽东是全世界人民心中的红太阳   | 已收录   |
| 中华人民共和国国歌(1978)         | 已收录   |
| 歌唱伟大、光荣、正确的中国共产党 | 已收录   |
| 毛主席您是全世界人民心中的红太阳 | 已收录   |
