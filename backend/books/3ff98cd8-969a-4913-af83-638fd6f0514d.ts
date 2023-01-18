export default {
  entity: {
    id: '3ff98cd8-969a-4913-af83-638fd6f0514d',
    name: '近代中国史稿（下）（人民出版社1976年）',
    internal: true,
    official: true,
    type: 'pdf',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/3ff98cd8-969a-4913-af83-638fd6f0514d.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '第八章 戊戌维新运动',
        authors: ['《近代中国史稿》编写组'],
        page_start: 7,
        page_end: 83,
        dates: [{ year: 1976, month: 12 }],
      },
      {
        title: '第九章 伟大的义和团反帝爱国运动',
        authors: ['《近代中国史稿》编写组'],
        page_start: 84,
        page_end: 176,
        dates: [{ year: 1976, month: 12 }],
      },
      {
        title: '第十章 粉碎沙俄的“黄俄罗斯”迷梦和抗击英、俄侵略西藏',
        authors: ['《近代中国史稿》编写组'],
        page_start: 177,
        page_end: 221,
        dates: [{ year: 1976, month: 12 }],
      },
      {
        title: '第十一章 资产阶级民主革命运动的高涨',
        authors: ['《近代中国史稿》编写组'],
        page_start: 222,
        page_end: 314,
        dates: [{ year: 1976, month: 12 }],
      },
      {
        title: '第十二章 推翻帝国主义走狗清朝的辛亥革命',
        authors: ['《近代中国史稿》编写组'],
        page_start: 315,
        page_end: 400,
        dates: [{ year: 1976, month: 12 }],
      },
      {
        title: '第十三章 反对帝国主义走狗北洋军阀的斗争',
        authors: ['《近代中国史稿》编写组'],
        page_start: 401,
        page_end: 514,
        dates: [{ year: 1976, month: 12 }],
      },
    ],
    ocr: {
      standard_paragraph_merge_strategy_threshold: 0.18,
      differential_paragraph_merge_strategy_threshold: 0,
      content_thresholds: [0, 0.09, 0, 0],
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/3ff98cd8-969a-4913-af83-638fd6f0514d.pdf',
};
