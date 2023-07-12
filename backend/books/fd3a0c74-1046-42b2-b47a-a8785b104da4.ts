export default {
  entity: {
    id: 'fd3a0c74-1046-42b2-b47a-a8785b104da4',
    name: '红旗一九六三年第十、十一期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/fd3a0c74-1046-42b2-b47a-a8785b104da4.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title:
          '印度尼西亚人民的革命斗争和印度尼西亚共产党——庆祝印度尼西亚共产党建党四十三周年',
        authors: ['熊复'],
        page_start: 3,
        page_end: 20,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 5, day: 20 }],
      },
      {
        title: '充分发挥铁路运输业支援农业的作用',
        authors: ['吴众'],
        page_start: 21,
        page_end: 25,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 5, day: 20 }],
      },
      {
        title: '可贵的革命干劲',
        authors: ['中共湘潭地方委员会'],
        page_start: 26,
        page_end: 30,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 5, day: 20 }],
      },
      {
        title: '物理学研究中的理论和实验',
        authors: ['周光召', '何祚麻'],
        page_start: 31,
        page_end: 38,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 5, day: 20 }],
      },
      {
        title: '列宁反对修正主义、机会主义的斗争（三）',
        authors: ['郑吉宾'],
        page_start: 39,
        page_end: 79,
        dates: [{ year: 1963, month: 5, day: 20 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/fd3a0c74-1046-42b2-b47a-a8785b104da4.pdf',
};
