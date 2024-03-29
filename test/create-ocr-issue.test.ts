import {
  assert,
  expect,
  test,
  it,
  describe,
  beforeEach,
  beforeAll,
} from 'vitest';
import { join } from 'node:path';
import { extract_dates } from '../backend/parser/utils';
import { ContentType, ParserResult } from '../types';
import { apply_patch_v2, bracket_left, bracket_right } from '../utils';

describe('create ocr issue', async () => {
  it.skip(
    'test1',
    async () => {
      const issue_body = `
**===== 自动化文稿录入使用说明 =====**

按照以下标准进行自动化文稿录入，随后机器人会生成对应的pull request，通过审核后将会生成对应文稿页面。

1. 填写标题（注意issue的标题仅用于展示，自动化录入程序以下方参数中的title为准）
2. 参考完整的例子（）填写issue最下方的参数，可以使用cnocr的在线页面调试不同参数 https://huggingface.co/spaces/breezedeus/cnocr

完整的例子:
\`\`\`
{
  id: 'maoquanji1', // 来源文件的唯一标识，必填
  source_name: '毛泽东全集第一卷', // 来源文件，书籍，数据库，报纸等等
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
    is_range_date: false, // 如果为 true 表示一段时间（从49年到76年），如果为false表示多/单个时间点
    alias: '', // 标题别名
    page_start: 1, // 从图片集第一张到第五张，如果不填表示从第一张到最后一张
    page_end: 5,
  }],
  ocr: { // ocr 参数 以及 默认参数
    rec_model: 'ch_ppocr_mobile_v2.0',
    rec_backend: 'onnx',
    det_model: 'ch_PP-OCRv3_det',
    det_backend: 'onnx',
    resized_shape: 1496,
    box_score_thresh: 0.3,
    min_box_size: 10,
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
\`\`\`

3. 在issue的最后上传图片，请保持图片格式的统一，全使用jpg或者全使用png

**===== 以上为使用说明 =====**

\`\`\`
{
  id: 'sirenbang1', // 来源文件的唯一标识
  source_name: '四人帮反党罪行材料选编（一）', // 来源文件名称，书籍，数据库，报纸等等
  articles: [{
    title: '江青同志在新华印刷厂工人座谈会上的讲话',
    authors: ['江青'], // 作者
    dates: [
      {
        year: 1975,
        month: 4,
        day: 3,
      },
    ],page_start:6,page_end:7,
  },{
    title: '江青同志在清华大学大兴农村分校的讲话',
    authors: ['江青'], // 作者
    dates: [
      {
        year: 1976,
        month: 9,
      },
    ],page_start:10,page_end:11,
  }]
}
\`\`\`

[此处上传图片]
[一月革命胜利万岁1967.pdf](https://github.com/banned-historical-archives/banned-historical-archives.github.io/files/9750804/1967.pdf)
`;

      (process.env as any).TEST = 'true';
      (process.env as any).BODY = issue_body;
      (process.env as any).TITLE = '[自动化文稿录入]test';

      const { start } = await import('../backend/ocr-gitworkflow');
      await start();
    },
    1000 * 1000 * 100,
  );
});
