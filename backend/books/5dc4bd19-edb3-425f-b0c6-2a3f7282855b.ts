export default {
  entity: {
    id: '5dc4bd19-edb3-425f-b0c6-2a3f7282855b',
    name: '红旗一九六三年第九期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/5dc4bd19-edb3-425f-b0c6-2a3f7282855b.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '美国统治集团在古巴问题上的争吵说明了什么？',
        authors: ['郭济洲'],
        page_start: 3,
        page_end: 6,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 5, day: 1 }],
      },
      {
        title: '加强对青少年的政治思想教育',
        authors: ['虞挺英'],
        page_start: 7,
        page_end: 9,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 5, day: 1 }],
      },
      {
        title: '我国社会主义制度下的后备问题',
        authors: ['许毅', '戴园晨'],
        page_start: 10,
        page_end: 15,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 5, day: 1 }],
      },
      {
        title: '批判资产阶级社会学在阶级和阶级斗争问题上的谬论',
        authors: ['庄福龄'],
        page_start: 16,
        page_end: 22,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 5, day: 1 }],
      },
      {
        title: '列宁反对修正主义、机会主义的斗争（二）',
        authors: ['郑吉宾'],
        page_start: 23,
        page_end: 43,
        dates: [{ year: 1963, month: 5, day: 1 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/5dc4bd19-edb3-425f-b0c6-2a3f7282855b.pdf',
};
