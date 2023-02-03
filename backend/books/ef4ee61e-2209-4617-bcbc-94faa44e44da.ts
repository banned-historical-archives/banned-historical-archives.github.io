export default {
  entity: {
    id: 'ef4ee61e-2209-4617-bcbc-94faa44e44da',
    name: '国务院、中央军委文件 国发〔1974〕102号',
    internal: false,
    official: true,
    type: 'pdf',
    author:
      '国务院、中央军委文件，浙江省金华地区民兵工作经验交流会1976年9月翻印',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/ef4ee61e-2209-4617-bcbc-94faa44e44da.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '国务院、中央军委批转《总参谋部民兵组训工作座谈会议纪要》',
        authors: ['国务院', '中央军委'],
        page_start: 1,
        page_end: 7,
        dates: [{ year: 1974, month: 10, day: 30 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.12, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/ef4ee61e-2209-4617-bcbc-94faa44e44da.pdf',
};
