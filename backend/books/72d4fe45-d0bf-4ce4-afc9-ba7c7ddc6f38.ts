export default {
  entity: {
    id: '72d4fe45-d0bf-4ce4-afc9-ba7c7ddc6f38',
    name: '“四人帮”罪行材料（八）（1977.1）',
    internal: true,
    official: true,
    type: 'img',
    author: '总参谋部政治部，1977.1',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/72d4fe45-d0bf-4ce4-afc9-ba7c7ddc6f38/1.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/72d4fe45-d0bf-4ce4-afc9-ba7c7ddc6f38/2.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/72d4fe45-d0bf-4ce4-afc9-ba7c7ddc6f38/3.png',
  },
  parser_option: {
    page_limits: [],
    ext: 'png',
    articles: [
      {
        title: '王洪文对作战部领导同志的讲话',
        alias: '一九七四年五月四日王洪文对作战部领导同志的讲话',
        authors: ['王洪文'],
        page_start: 1,
        page_end: 3,
        ocr_exceptions: {
          '2': { content_thresholds: [0, 0.1, 0, 0] },
          '3': { content_thresholds: [0, 0.5, 0, 0.16] },
        },
        dates: [{ year: 1974, month: 5, day: 4 }],
      },
    ],
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/72d4fe45-d0bf-4ce4-afc9-ba7c7ddc6f38',
};
