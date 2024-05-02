## 标准化加工
### 文稿
通过对pdf等原始文件的解析、识别等操作形成标准化的文稿。

为尽可能保留文稿原有的格式属性，我们对每一段文本进行分类，分为大标题、子标题、段落、引文、注释等等。
对于每篇文稿也进行类别分类，分为文章、书信、对话、批示等等。
除此之外，通过分析正文内容给每篇文稿打标签，例如所关联的地点、人物、事件。

文稿的数据结构如下：
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
  }[];

  /**
   * 标签
   *
   * 文稿大类
   *   centralFile(中央文件) |
   *   keyFigures(关键人物文稿) |
   *   editorial(社论) |
   *   keyPapersFromTheMasses(群众运动中重要文稿)
   *
   * 文稿类型
   *   writings(文章) |
   *   mail(书信) |
   *   lecture(发言) |
   *   talk(对话) |
   *   declaration(宣言) |
   *   instruction(指示) |
   *   comment(批示) |
   *   telegram(通讯)
   */
  tags: {
    name: string;
    type: 
      articleCategory(文稿大类) |
      articleType(文稿类型) |
      place(地点) |
      character(人物) |
      issuer(发布机构) |
      subject(主题)
  }[];

  types: {
    type: enum;
  }[];

  /**
   * 初始来源
   * 例如：1919 年 12 月 28 日《湖南教育月刊》
   */
  origin: string;

  /**
   * 出版物（来源书籍/数据库/手稿等）
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
      type: enum; // title(大标题) | subtitle(子标题) | paragraph(段落) | appellation(称谓) | quotation(引文)
    }[];
    /**
     * 文稿注释
     *
     * index: 尾注编号
     * part_index: 尾注所在段落 index
     * offset: 尾注在段落中的偏移量
     *
     * 特别地，part_index 为 -1 且 offset 为 -1 时表示对整个文稿的注释（描述）
     */
    comments: {
      index: number;
      part_index: number;
      offset: number;
      text: string;
    }[];
  }[];
}
```

## 开发

## 仓库目录结构说明

* 文稿原始文件路径：/raw
* 配置文件路径：/config
* 纯文本文件路径：/parsed
* ocr 补丁文件：/ocr_patch

* 前端：/pages
* 后端：/backend
