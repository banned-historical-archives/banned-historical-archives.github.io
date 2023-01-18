export default {
  entity: {
    id: 'ff13be52-477d-44ba-a3e7-9b664be2e0dc',
    name: '秘鲁共产党总路线',
    internal: false,
    official: true,
    type: 'pdf',
    author: '秘鲁共产党',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/ff13be52-477d-44ba-a3e7-9b664be2e0dc.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '秘鲁共产党总路线——基础文件',
        authors: ['秘鲁共产党'],
        page_start: 3,
        page_end: 17,
        dates: [{ year: 1988 }],
      },
      {
        title: '秘鲁共产党总路线——国际路线',
        authors: ['秘鲁共产党'],
        page_start: 18,
        page_end: 34,
        dates: [{ year: 1988 }],
      },
      {
        title: '秘鲁共产党总路线——民主主义革命路线',
        authors: ['秘鲁共产党'],
        page_start: 35,
        page_end: 46,
        dates: [{ year: 1988 }],
      },
      {
        title: '秘鲁共产党总路线——军事路线',
        authors: ['秘鲁共产党'],
        page_start: 47,
        page_end: 65,
        dates: [{ year: 1988 }],
      },
      {
        title: '秘鲁共产党总路线——三大工具的建设路线',
        authors: ['秘鲁共产党'],
        page_start: 66,
        page_end: 73,
        dates: [{ year: 1988 }],
      },
      {
        title: '秘鲁共产党总路线——群众路线',
        authors: ['秘鲁共产党'],
        page_start: 74,
        page_end: 85,
        dates: [{ year: 1988 }],
      },
    ],
    ocr: {
      content_thresholds: [0.092, 0, 0, 0],
      standard_paragraph_merge_strategy_threshold: 0.178,
      differential_paragraph_merge_strategy_threshold: 0,
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/ff13be52-477d-44ba-a3e7-9b664be2e0dc.pdf',
};
