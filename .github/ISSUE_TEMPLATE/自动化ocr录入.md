---
name: 自动化OCR录入
about: 自动化OCR录入
title: "[自动化文稿录入]标题"
labels: ''
assignees: ''

---

**===== 自动化文稿录入使用说明 =====**

按照以下标准进行自动化文稿录入，随后机器人会生成对应的pull request，通过审核后将会生成对应文稿页面。

1. 填写标题（注意issue的标题仅用于展示，自动化录入程序以下方参数中的title为准）
2. 参考完整的例子（）填写issue最下方的参数，可以使用cnocr的在线页面调试不同参数 https://huggingface.co/spaces/breezedeus/cnocr

完整的例子:
```
{
  source_name: '毛泽东全集第一卷', // 来源文件，书籍，数据库，报纸等等
  archive_id: 1, // 子仓库id，banned-historical-archives[id]，默认为 1
  articles: [{
    title: '在中央政治局会议上的讲话',
    authors: ['毛泽东', '江青'], // 作者
    dates: [
      {
        year: 1949,
        month: 10,
        day: 1,
      },
      {
        year: 1976,
        month: 10,
        day: 1,
      },
    ], // 时间 或者 时间范围 或者 多个时间点
    is_range_date: false, // 默认为false，如果为 true 表示一段时间（从49年到76年），如果为false表示多/单个时间点
    alias: '', // 标题别名
    page_start: 1, // 从图片集第一张到第五张，如果是图片集不填表示从第一张到最后一张，如果是pdf，必须填写page_start和page_end
    page_end: 5,
  }],
  ocr: { // ocr 参数 以及 默认参数
    rec_model: 'ch_ppocr_mobile_v2.0',
    rec_backend: 'onnx',
    det_model: 'ch_PP-OCRv3_det',
    det_backend: 'onnx',
    resized_shape: 1496, // 在OCR前resize到这个尺寸，这个参数仅影响识别效果，识别结果的坐标仍是取决于原图像尺寸
    box_score_thresh: 0.3,
    min_box_size: 10,
    auto_vsplit: true, // 用于分页或者处理特殊的排版。如果为 ture，当页面宽度大于高度时，将ocr结果中页面中间(vsplit的位置)分开
    vsplit: 0.5, // 如果设置为0.5，ocr结果将从页面宽度的50%处分割，如果为0表示不分割。当auto_vsplit为false且vsplit不为0时，表示任何页面都进行分割。
    content_thresholds: [0.0, 0.0, 0.0, 0.0]; // 通常需要忽略在页面边缘的页眉，页码或者噪声，数组内4个数值分别表示上下左右相对于宽高的比例， 例如 [0.1,0,0,0] 表示忽略顶部占总高度百分之10的内容
    line_merge_threshold: 30; // 单位像素，如果小于这个阈值将被视为同一行
    standard_paragraph_merge_strategy_threshold: 0; // 标准段落合并策略，超过 threshold * width 的表示新段落，否则向上合并
    differential_paragraph_merge_strategy_threshold: 30; // 差分段落合并策略，x[i] - x[i-1] > threshold 的表示新段落，否则向上合并，单位像素
  },
  ocr_exceptions: {
    "3": {
      content_thresholds: [0.2, 0.2, 0.1, 0.1],
      // ...其他ocr参数（可选）
    },
  } // 例外， 比如第三页的ocr参数与其他页面不同，默认为空
}
```

3. 在issue的最后上传图片或pdf。如果上传图片请保持图片格式的统一，全使用jpg或者全使用png。如果上传pdf，目前只能接受单个pdf文件。多个pdf建议合并后再上传。

**===== 以上为使用说明(建议删除) =====**

```
{
  source_name: '毛泽东全集第一卷', // 来源文件名称，书籍，数据库，报纸等等
  archive_id: 1,
  articles: [{
    title: '在中央政治局会议上的讲话',
    authors: ['毛泽东', '江青'], // 作者
    page_start: 1,
    page_end: 5,
    dates: [
      {
        year: 1949,
        month: 10,
        day: 1,
      },
    ],
  }]
}
```

<此处上传图片/pdf>
