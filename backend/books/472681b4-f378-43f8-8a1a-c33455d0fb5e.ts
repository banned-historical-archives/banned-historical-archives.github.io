export default {
  entity: {
    id: '472681b4-f378-43f8-8a1a-c33455d0fb5e',
    name: '无产阶级文化大革命概述简论（第二篇）（上）（水陆洲2011年）',
    internal: false,
    official: false,
    type: 'pdf',
    author: '水陆洲编',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/472681b4-f378-43f8-8a1a-c33455d0fb5e.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '概述',
        authors: ['水陆洲'],
        page_start: 3,
        page_end: 9,
        dates: [{ year: 2012, month: 8, day: 10 }],
      },
      {
        title: '第一章 1965—1966年文化大革命的序幕',
        authors: ['水陆洲'],
        page_start: 10,
        page_end: 80,
        dates: [{ year: 2011, month: 7, day: 4 }],
      },
      {
        title: '第二章 炮打资产阶级司令部 批判资产阶级反动路线',
        authors: ['水陆洲'],
        page_start: 81,
        page_end: 373,
        dates: [{ year: 2011, month: 5 }],
      },
      {
        title: '第三章 一九六七年一月的革命风暴',
        authors: ['水陆洲'],
        page_start: 374,
        page_end: 646,
        dates: [{ year: 2011, month: 8, day: 16 }],
      },
    ],
    ocr: {
      standard_paragraph_merge_strategy_threshold: 0.186,
      differential_paragraph_merge_strategy_threshold: 0,
      content_thresholds: [0.054, 0, 0, 0],
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/472681b4-f378-43f8-8a1a-c33455d0fb5e.pdf',
};
