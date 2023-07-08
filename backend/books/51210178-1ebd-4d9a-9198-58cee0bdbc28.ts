export default {
  entity: {
    id: '51210178-1ebd-4d9a-9198-58cee0bdbc28',
    name: '红旗一九六二年第十八期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/51210178-1ebd-4d9a-9198-58cee0bdbc28.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '老挝人民的伟大胜利',
        authors: ['于兆力'],
        page_start: 3,
        page_end: 10,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 9, day: 16 }],
      },
      {
        title: '在“互相依靠”的后面',
        authors: ['思慕'],
        page_start: 11,
        page_end: 14,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 9, day: 16 }],
      },
      {
        title: '充分发挥统计工作在社会主义建设中的作用',
        authors: ['王思华'],
        page_start: 15,
        page_end: 20,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 9, day: 16 }],
      },
      {
        title: '进一步发展我国南方的绿肥生产',
        authors: ['张心一'],
        page_start: 21,
        page_end: 31,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 9, day: 16 }],
      },
      {
        title: '观察的客观性——读书札记',
        authors: ['洪彦林'],
        page_start: 32,
        page_end: 35,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 9, day: 16 }],
      },
      {
        title: '关于传统剧目的整理、改编问题',
        authors: ['郭汉城'],
        page_start: 36,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 9, day: 16 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/51210178-1ebd-4d9a-9198-58cee0bdbc28.pdf',
};
