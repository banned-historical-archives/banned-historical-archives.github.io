export default {
  entity: {
    id: '5c7acab9-7534-46d4-9f38-7368dfe01557',
    name: '关于党内资产阶级问题的意见综述',
    internal: true,
    official: true,
    type: 'pdf',
    author: '中共中山县委宣传部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/5c7acab9-7534-46d4-9f38-7368dfe01557.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '关于党内资产阶级问题的意见综述',
        authors: ['中共中山县委宣传部'],
        page_start: 2,
        page_end: 14,
        dates: [{ year: 1976, month: 7, day: 8 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.082, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/5c7acab9-7534-46d4-9f38-7368dfe01557.pdf',
};
