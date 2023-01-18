export default {
  entity: {
    id: '6b63e2a0-b6b6-4966-907c-e0a534710241',
    name: '红旗一九六八年第一期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/6b63e2a0-b6b6-4966-907c-e0a534710241.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '中国共产党中央委员会主席毛泽东同志支持美国黑人抗暴斗争的声明',
        authors: ['毛泽东'],
        page_start: 8,
        page_end: 10,
        dates: [{ year: 1968, month: 4, day: 16 }],
      },
      {
        title: '发扬党的紧密联系群众的作风——纪念中国共产党诞生四十七周年',
        authors: [
          '《人民日报》编辑部',
          '《红旗》杂志编辑部',
          '《解放军报》编辑部',
        ],
        page_start: 11,
        page_end: 14,
        dates: [{ year: 1968 }],
      },
      {
        title: '迎接无产阶级文化大革命的全面胜利',
        authors: [
          '《人民日报》编辑部',
          '《红旗》杂志编辑部',
          '《解放军报》编辑部',
        ],
        page_start: 15,
        page_end: 19,
        dates: [{ year: 1967, month: 12, day: 31 }],
      },
      {
        title: '革命委员会好',
        authors: [
          '《人民日报》编辑部',
          '《红旗》杂志编辑部',
          '《解放军报》编辑部',
        ],
        page_start: 20,
        page_end: 22,
        dates: [{ year: 1968, month: 3, day: 29 }],
      },
      {
        title: '乘胜前进——庆祝“五一”国际劳动节',
        authors: [
          '《人民日报》编辑部',
          '《红旗》杂志编辑部',
          '《解放军报》编辑部',
        ],
        page_start: 23,
        page_end: 25,
        dates: [{ year: 1968, month: 4, day: 30 }],
      },
      {
        title: '划时代的文献——纪念《通知》发表两周年',
        authors: [
          '《人民日报》编辑部',
          '《红旗》杂志编辑部',
          '《解放军报》编辑部',
        ],
        page_start: 26,
        page_end: 31,
        dates: [{ year: 1968, month: 5, day: 16 }],
      },
      {
        title: '对派性要进行阶级分析',
        authors: ['《红旗》杂志编辑部'],
        page_start: 32,
        page_end: 33,
        dates: [{ year: 1968, month: 4, day: 26 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.15, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/6b63e2a0-b6b6-4966-907c-e0a534710241.pdf',
};
