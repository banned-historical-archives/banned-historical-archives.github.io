export default {
  entity: {
    id: 'b2b7fbce-0a58-4ee5-99b4-73ffa6d0abd7',
    name: '红旗一九六三年第十六期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/b2b7fbce-0a58-4ee5-99b4-73ffa6d0abd7.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title:
          '呼吁世界人民联合起来反对美帝国主义的种族歧视、支持美国黑人反对种族歧视的斗争的声明',
        authors: ['毛泽东'],
        page_start: 3,
        page_end: 4,
        dates: [{ year: 1963, month: 8, day: 8 }],
      },
      {
        title: '中国政府发言人声明——评苏联政府八月三日的声明',
        authors: ['中国共产党中央委员会'],
        page_start: 5,
        page_end: 16,
        dates: [{ year: 1963, month: 8, day: 15 }],
      },
      {
        title: '考察战争问题不能背离马克思列宁主义的阶级斗争观点',
        authors: ['卢之超'],
        page_start: 17,
        page_end: 28,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 8, day: 15 }],
      },
      {
        title: '战后日本经济的发展及其矛盾的加深',
        authors: ['庄涛'],
        page_start: 29,
        page_end: 39,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 8, day: 15 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/b2b7fbce-0a58-4ee5-99b4-73ffa6d0abd7.pdf',
};
