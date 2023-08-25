export default {
  entity: {
    id: 'f74445b1-2af6-4332-9115-c6bc40e42ac3',
    name: '红旗一九六五年第五期',
    internal: false,
    official: false,
    type: 'pdf',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/f74445b1-2af6-4332-9115-c6bc40e42ac3.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '纪念战胜德国法西斯把反对美帝国主义的斗争进行到底',
        authors: ['罗瑞卿'],
        page_start: 3,
        page_end: 16,
        dates: [{ year: 1965 }],
      },
      {
        title: '反法西斯战争的历史经验',
        authors: ['红旗杂志编辑部'],
        page_start: 17,
        page_end: 27,
        dates: [{ year: 1965, month: 5, day: 9 }],
      },
      {
        title: '列宁主义的伟大生命力——纪念列宁诞生九十五周年',
        authors: ['越南《学习》杂志'],
        page_start: 28,
        page_end: 39,
        dates: [{ year: 1965, month: 4 }],
      },
      {
        title: '重看影片《攻克柏林》',
        authors: ['黄钢'],
        page_start: 40,
        page_end: 43,
        dates: [{ year: 1965 }],
        ocr: { auto_vsplit: false, vsplit: 0.385 },
      },
    ],
    ocr: { content_thresholds: [0.07, 0.165, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/f74445b1-2af6-4332-9115-c6bc40e42ac3.pdf',
};
