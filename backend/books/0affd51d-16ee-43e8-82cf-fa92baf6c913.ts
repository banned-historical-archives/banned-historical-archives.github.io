export default {
  entity: {
    id: '0affd51d-16ee-43e8-82cf-fa92baf6c913',
    name: '中共中央文件 中发〔69〕48号（1969.8.4）',
    internal: false,
    official: true,
    type: 'img',
    author:
      '中共中央、北京卫戍区，浙江省联总《情况交流》编辑组一九六八年八月六日',
    files: new Array(3)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/0affd51d-16ee-43e8-82cf-fa92baf6c913/${
            idx + 1
          }.png`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: 'png',
    articles: [
      {
        title: '中共中央同意对方剑文的问题进行公开批判的通知',
        alias: '中共中央文件 中发〔69〕48号',
        authors: ['中共中央', '北京卫戍区'],
        page_start: 1,
        page_end: 3,
        tags: [{ name: '浙江省联总《情况交流》编辑组', type: 'issuer' }],
        dates: [
          { year: 1969, month: 8, day: 4 },
          { year: 1969, month: 6, day: 25 },
          { year: 1969, month: 7, day: 4 },
        ],
      },
    ],
    ocr: { content_thresholds: [0, 0.121, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/0affd51d-16ee-43e8-82cf-fa92baf6c913',
};
