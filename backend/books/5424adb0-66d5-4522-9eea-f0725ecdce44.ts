export default {
  entity: {
    id: '5424adb0-66d5-4522-9eea-f0725ecdce44',
    name: '中共中央文件 中发〔1971〕13号',
    internal: false,
    official: true,
    type: 'pdf',
    author: '中共中央办公厅',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/5424adb0-66d5-4522-9eea-f0725ecdce44.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '中共中央关于建立五·一六专案联合小组的决定',
        authors: [],
        page_start: 1,
        page_end: 12,
        dates: [{ year: 1971, month: 2, day: 8 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.12, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/5424adb0-66d5-4522-9eea-f0725ecdce44.pdf',
};
