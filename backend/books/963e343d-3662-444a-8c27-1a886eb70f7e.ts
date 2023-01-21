export default {
  entity: {
    id: '963e343d-3662-444a-8c27-1a886eb70f7e',
    name: '红旗一九六六年第九期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/963e343d-3662-444a-8c27-1a886eb70f7e.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '在延安文艺座谈会上的讲话',
        authors: ['毛泽东'],
        page_start: 3,
        page_end: 26,
        dates: [{ year: 1942, month: 5 }],
      },
      {
        title:
          '无产阶级文化大革命的指南针——重新发表《在延安文艺座谈会上的讲话》按语',
        authors: ['《红旗》杂志编辑部'],
        page_start: 27,
        page_end: 29,
        dates: [{ year: 1966 }],
      },
      {
        title: '信任群众 依靠群众',
        authors: [],
        page_start: 30,
        page_end: 32,
        dates: [{ year: 1966 }],
      },
      {
        title: '彻底批判前北京市委一些主要负责人的修正主义路线',
        authors: [],
        page_start: 33,
        page_end: 36,
        dates: [{ year: 1966 }],
      },
      {
        title: '周扬颠倒历史的一支暗箭——评《鲁迅全集》第六卷的一条注释',
        authors: ['阮铭', '阮若瑛'],
        page_start: 37,
        page_end: 46,
        ocr: { auto_vsplit: false, vsplit: 0.41 },
        dates: [{ year: 1966 }],
      },
      {
        title: '“国防文学”是王明右倾机会主义路线的口号',
        authors: ['穆欣'],
        page_start: 47,
        page_end: 59,
        ocr: { auto_vsplit: false, vsplit: 0.41 },
        dates: [{ year: 1966 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.15, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/963e343d-3662-444a-8c27-1a886eb70f7e.pdf',
};
