export default {
  entity: {
    id: '91d70c70-8e9d-47b6-9c90-55def4e13ac6',
    name: '深入开展路线对比认真解决好打砸抢问题（文件〔1978〕京40号）（1978.12.8北京）',
    internal: false,
    official: false,
    type: 'img',
    author: '铁道部北京铁路局政治部，1978.12.8',
    files: new Array(8)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/91d70c70-8e9d-47b6-9c90-55def4e13ac6/${
            idx + 1
          }.`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: '',
    articles: [
      {
        title: '深入开展路线对比认真解决好打砸抢问题',
        authors: ['铁道部北京铁路局政治部'],
        page_start: 1,
        page_end: 8,
        dates: [{ year: 1978, month: 12, day: 8 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/91d70c70-8e9d-47b6-9c90-55def4e13ac6',
};
