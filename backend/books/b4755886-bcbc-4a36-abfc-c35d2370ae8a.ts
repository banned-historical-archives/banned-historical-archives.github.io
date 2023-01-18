export default {
  entity: {
    id: 'b4755886-bcbc-4a36-abfc-c35d2370ae8a',
    name: '红旗一九六七年第十四期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/b4755886-bcbc-4a36-abfc-c35d2370ae8a.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '评陶铸的两本书',
        authors: ['姚文元'],
        page_start: 4,
        page_end: 18,
        dates: [{ year: 1967 }],
      },
      {
        title: '在革命大批判的高潮中，实现革命的大联合',
        authors: [],
        page_start: 19,
        page_end: 21,
        dates: [{ year: 1967 }],
      },
      {
        title: '做无产阶级革命派的坚强后盾',
        authors: ['吴法宪'],
        page_start: 22,
        page_end: 25,
        dates: [],
      },
      {
        title:
          '伟大的中国人民解放军是我国无产阶级专政和无产阶级文化大革命的可靠支柱',
        authors: [],
        page_start: 26,
        page_end: 27,
        dates: [{ year: 1967 }],
      },
      {
        title: '进一步贯彻毛主席“抓革命，促生产”的伟大方针',
        authors: [],
        page_start: 28,
        page_end: 29,
        dates: [{ year: 1967 }],
      },
      {
        title: '坚决相信和依靠干部的大多数',
        authors: ['周洪生'],
        page_start: 30,
        page_end: 31,
        dates: [{ year: 1967, month: 8, day: 9 }],
        ocr: { vsplit: 0.35 },
      },
    ],
    ocr: { content_thresholds: [0, 0.15, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/b4755886-bcbc-4a36-abfc-c35d2370ae8a.pdf',
};
