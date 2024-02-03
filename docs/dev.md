## 架构

主仓库:
banned-historical-archives/banned-historical-archives.github.io

分支:
* master: 源代码
* gh-pages: 自动构建的html
* txt: 自动构建的txt

资源仓库:
banned-historical-archives/banned-historical-archives0
banned-historical-archives/banned-historical-archives1
...
banned-historical-archives/banned-historical-archives20

分支:
* main: 原始文件
* config: 配置文件
* ocr_cache: 原始文件的OCR结果 （自动构建的分支）
* ocr_patch: OCR结果的补丁
* parsed: 解析后的文件（自动构建的分支）

## 构建流程

资源仓库的 config 分支发生变更时触发：
* ocr_cache 的构建
* parsed 的构建
* 当 parsed 发生变更时，触发主仓库的构建

资源仓库的 ocr_cache 分支发生变更时触发：
* parsed 的构建
* 当 parsed 发生变更时，触发主仓库的构建

资源仓库的 ocr_patch 分支发生变更时触发：
* parsed 的构建
* 当 parsed 发生变更时，触发主仓库的构建

主仓库的 master 分支发生变更时：
* 触发主仓库的构建

主仓库的构建：
* 构建txt分支
* 构建gh-pages分支，并且发布到github pages