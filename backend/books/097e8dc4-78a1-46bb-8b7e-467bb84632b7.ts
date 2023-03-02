export default {
  entity: {
    id: '097e8dc4-78a1-46bb-8b7e-467bb84632b7',
    name: '中央首长重要讲话（1967年）',
    internal: false,
    official: false,
    type: 'img',
    author: '毛泽东、江青、康生、张春桥、关锋，1967年左右',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/097e8dc4-78a1-46bb-8b7e-467bb84632b7/1.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/097e8dc4-78a1-46bb-8b7e-467bb84632b7/2.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/097e8dc4-78a1-46bb-8b7e-467bb84632b7/3.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/097e8dc4-78a1-46bb-8b7e-467bb84632b7/4.jpg',
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title: '在关于知识分子问题会议上的讲话',
        alias: '在中央召开的关于知识分子问题会议上的讲话',
        authors: ['毛泽东'],
        page_start: 1,
        page_end: 1,
        ocr_exceptions: { '1': { content_thresholds: [0.15, 0.52, 0, 0] } },
        dates: [{ year: 1956, month: 1, day: 20 }],
      },
      {
        title: '事情正在起变化',
        authors: ['毛泽东'],
        page_start: 1,
        page_end: 1,
        ocr_exceptions: { '1': { content_thresholds: [0.47, 0.22, 0, 0] } },
        dates: [{ year: 1957, month: 5, day: 15 }],
      },
      {
        title: '湘江评论',
        authors: [],
        page_start: 1,
        page_end: 1,
        ocr_exceptions: { '1': { content_thresholds: [0.81, 0, 0, 0] } },
        dates: [],
      },
      {
        title: '陈伯达等对“赴广州揪王任重革命造反团”的指示',
        alias: '彻底批判刘、邓、陶资产阶级的反动路线',
        authors: ['江青', '陈伯达', '康生'],
        page_start: 2,
        page_end: 2,
        tags: [
          { name: '北京政法学院“政法公社”', type: 'reprint' }, // 翻印/传抄
          { name: '北京航空学院三〇三教研室', type: 'reprint' }, // 翻印/传抄
          { name: '上海五十四中学红色造反团', type: 'reprint' }, // 翻印/传抄
        ],
        dates: [{ year: 1967, month: 1, day: 4 }],
      },
      {
        title:
          '江青同志在“全国在京革命师生向资产阶级反动路线猛烈开火誓师大会”上的讲话',
        authors: ['江青'],
        page_start: 3,
        page_end: 3,
        tags: [
          {
            name: '清华大学毛泽东思想红卫兵《震五洲》战斗小组',
            type: 'recorder',
          }, // 记录
        ],
        ocr_exceptions: { '3': { content_thresholds: [0, 0.26, 0, 0] } },
        dates: [{ year: 1966, month: 10, day: 6 }],
      },
      {
        title: '张春桥关锋同志接见福建部分赴京革命同学的讲话',
        alias: '张春桥同志接见福建部分赴京革命同学的讲话片段',
        authors: ['张春桥', '关锋'],
        page_start: 3,
        page_end: 4,
        ocr_exceptions: {
          '3': { content_thresholds: [0.74, 0, 0, 0] },
          '4': { content_thresholds: [0, 0.73, 0, 0] },
        },
        dates: [{ year: 1966, month: 10, day: 7 }],
      },
      {
        title: '关锋在北京地质学院同学座谈会上的讲话',
        alias: '关锋同志九月二十八日在地质学院同学座谈会上讲话片段',
        authors: ['关锋'],
        page_start: 4,
        page_end: 4,
        tags: [
          { name: '清华大学力九五', type: 'reprint' }, // 翻印/传抄
          { name: '《铁臂》', type: 'reprint' }, // 翻印/传抄
        ],
        ocr_exceptions: { '4': { content_thresholds: [0.27, 0, 0, 0] } },
        dates: [{ year: 1966, month: 9, day: 28 }],
      },
    ],
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/097e8dc4-78a1-46bb-8b7e-467bb84632b7',
};
