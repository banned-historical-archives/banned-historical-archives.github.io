export default {
  entity: {
    id: '4e817631-2061-4d8e-af2e-e49e0939d464',
    name: '中共中央文件 中发〔1971〕20号',
    internal: false,
    official: true,
    type: 'pdf',
    author: '中共中央',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/4e817631-2061-4d8e-af2e-e49e0939d464.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '中共中央批转《第十五次全国公安会议纪要》',
        alias: '中共中央文件 中发〔1971〕20号',
        authors: ['中共中央'],
        page_start: 1,
        page_end: 17,
        dates: [{ year: 1971, month: 2, day: 26 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.12, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/4e817631-2061-4d8e-af2e-e49e0939d464.pdf',
};
