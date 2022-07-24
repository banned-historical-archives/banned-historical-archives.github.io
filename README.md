# 和谐历史档案馆
# Banned Historical Archives

和谐历史档案馆收录各类受官方封锁以及半封锁的文稿和多媒体资料，并对它们进行（自动化地）标准化加工，包括解析、识别、分类，最终形成标准化文稿档案和多媒体档案。

其中文稿包含中央发表的文件，中央高层会议纪要，主要人物的通知、著作、谈话/对话/讲话、宣言/声明、电报、通讯、书信、消息、评论/批语/批注/批示、意见、指示/命令。主要人物包括毛泽东，江青、姚文元、张春桥、王洪文。

多媒体资料包括音乐及歌词、电影、照片、录音等。

同时收录一部分公开文稿和多媒体资料用于版本对比和校验。

## 计划收录的文稿

|名称|作者及出版社|内部文件|官方|收录状态|
|---|---|---|---|---|
中共党史参考资料| 中国人民解放军政治学院（国防大学前身之一）党史教研室|Y|Y|待解析
建国以来毛泽东的文稿（共13卷）|中央文献出版社|Y|Y|待解析
建国以来重要文件选编|中共中央文献研究室 中央文献出版社出版|N|Y|无
毛泽东文集（共8卷）||N|Y|已收录
毛泽东选集（共5卷）||N|Y|无
毛泽东外交文选|中华人民共和国外交部和中共中央文献研究室合作编辑|N|Y|无
毛泽东选集静火版|静火|N|N|已收录
毛泽东思想万岁|王晁星|N|N|已收录
江青文选|新湖大革命委员会政宣部编|N|Y|无
江青十年讲话汇编（1966-1976）||N|N|已收录
王洪文文集||N|N|无
春桥文录||N|N|无
姚文元文录||N|N|无

## 计划收录的多媒体资料

### 音乐及歌词
|名称|作者|版本|收录状态|
|---|---|---|---|
国际歌|||无
我们走在大路上|李劫夫|原版，文革版，1963英文版，改开版|无
毛主席最亲||原版，改开版|无
歌唱祖国||原版，65版，改开版|无
大海航行靠舵手||原版，英文版|无
下定决心，不怕牺牲，排除万难，去争取胜利|||无
独立自主，自立更生|||无
前进在毛主席革命路线上|||无
群众是真正的英雄|||无
千万个铁人奋勇前进|||无
毛泽东同志是当代最伟大的马克思列宁主义者|||无
社会主义祖国好|||无
总路线光芒照四方|||无
新中国的青年|||无
革命知识青年之歌|||无
无产阶级革命派联合起来|||无
真正的铜墙铁壁是什么|||无
造反有理|||无
高举无产阶级专政的旗帜前进|||无
全世界无产者联合起来|||无
前进歌|||无
我们的朋友遍天下|||无
全世界人民一定胜利|||无
因为我们是为人民服务的|||无
总路线光芒照四方|||无
把列宁主义大旗高高举起|||无
反帝大军乘胜前进|||无
人民是创造世界的动力|||无
我们是民主青年|||无
为巩固无产阶级专政奋勇斗争|||无
歌唱无产阶级文化大革命|||无

## 贡献资源/纠错/讨论

https://gitlab.com/banned-historical-archives/banned-historical-archives.gitlab.io/-/issues

## 标准化加工
### 文稿
通过对原始文件的解析(/backend/parser)、识别、分类(/backend/classifier)等操作形成标准化的文稿。详见/backend/entity/*.ts
```
{
  /**
   * 标题
   */
  title: string;

  /**
   * 作者
   */
  authors: {
    name: string;
  }[];

  /**
   * 文稿日期
   * 可能包含多个日期/时间点（发刊日期、审稿日期、起草日期、定稿日期、子文稿的日期等）
   * 
   * 当 is_range_date 为 true 时表示时间段，dates数组中将包含两个日期：起始和截止日期
   */
  is_range_date: boolean;
  dates: {
    year: number;
    month?: number;
    day?: number;
  }[]; // 文稿的时间

  /**
   * 标签
   */
  tags: {
    name: string;
  }[];

  /**
   * 文稿类别
   * type:
   *   writings(文章) |
   *   mail(书信) |
   *   lecture(发言) |
   *   talk(对话) |
   *   declaration(宣言) |
   *   instruction(指示) |
   *   comment(批示) |
   *   telegram(通讯)
   */
  types: {
    type: enum;
  }[];

  /**
   * 初始来源
   * 例如：1919 年 12 月 28 日《湖南教育月刊》
   */
  origin: string;

  /**
   * 出版物（来源书籍）
   */
  publications: {
    internal: boolean;
    official: boolean;
    name: string;
    pdf: string;
    author: string;
    pages: { // 文稿所在页码，相对于 pdf 而不是实体书籍中的页码
      start: number;
      end: number;
    }[];
    contents: { // 文稿内容
      text: string;
      type: enum; // title(大标题) | subtitle(子标题) | paragraph(段落) | appellation(称谓) | cite(引文)
    }[];
    /**
     * 文稿注释
     *
     * part_index: 角注在文稿 contents 中的位置
     * offset: 角注在当前段落的偏移量
     *
     * 特别地，part_index 为 -1 且 offset 为 -1 时表示对整个文稿的注释（描述）
     */
    comments: {
      part_index: number;
      offset: number;
      text: string;
    }[];
  }[];
}
```

## 开发

源代码：https://gitlab.com/banned-historical-archives/banned-historical-archives.gitlab.io

### 0.安装依赖并创建数据库
docker, nodejs, mysql
### 1.初始化 docker image
```
docker build -f ./paddle/docker/DockerFile ./paddle/docker -t paddle-ocr-lac
```
### 2.安装 node_modules
```
npm install
```
### 3.初始化/重置数据库
```
npm run init-db
```
可选环境变量：DB_NAME，DB_PORT，DB_USER，DB_PASSWORD
### 4.本地预览
```
npm run dev:build-static
npm run dev
```