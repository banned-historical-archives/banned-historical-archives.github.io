export default {
  entity: {
    id: '08af3418-cd1a-4993-b391-9ace493b3eb6',
    name: '红旗一九六七年第十六期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/08af3418-cd1a-4993-b391-9ace493b3eb6.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '关于按照系统实行革命大联合的通知',
        authors: ['中共中央', '国务院', '中央军委', '中央文革'],
        page_start: 7,
        page_end: 7,
        dates: [{ year: 1967, month: 10, day: 17 }],
      },
      {
        title: '在首都人民纪念十月革命五十周年大会上林彪同志的讲话',
        authors: ['林彪'],
        page_start: 8,
        page_end: 11,
        dates: [{ year: 1967 }],
      },
      {
        title:
          '沿着十月社会主义革命开辟的道路前进——纪念伟大的十月社会主义革命五十周年',
        authors: [
          '《人民日报》编辑部',
          '《红旗》杂志编辑部',
          '《解放军报》编辑部',
        ],
        page_start: 12,
        page_end: 18,
        dates: [{ year: 1967, month: 11, day: 5 }],
      },
      {
        title: '中国农村两条道路的斗争',
        authors: [
          '《人民日报》编辑部',
          '《红旗》杂志编辑部',
          '《解放军报》编辑部',
        ],
        page_start: 19,
        page_end: 30,
        dates: [{ year: 1967 }],
      },
      {
        title:
          '大树特树伟大统帅毛主席的绝对权威，大树特树伟大的毛泽东思想的绝对权威——彻底清算罗瑞卿反对毛主席、反对毛泽东思想的滔天罪行',
        authors: ['杨成武'],
        page_start: 31,
        page_end: 40,
        dates: [{ year: 1967 }],
      },
      {
        title: '三结合的毛泽东思想学习班好得很',
        authors: ['《红旗》杂志记者'],
        page_start: 41,
        page_end: 42,
        dates: [{ year: 1967 }],
        ocr: { vsplit: 0.35 },
      },
      {
        title:
          '斗私批修的一种好形式——北京部队某连开展“一帮一、一对红”活动的情况调查',
        authors: ['《红旗》杂志调查员'],
        page_start: 43,
        page_end: 47,
        dates: [{ year: 1967 }],
        ocr: { vsplit: 0.35 },
      },
      {
        title: '开展“一帮一、一对红”活动，发展和巩固革命的大联合',
        authors: ['《红旗》杂志调查员'],
        page_start: 48,
        page_end: 49,
        dates: [{ year: 1967 }],
        ocr: { vsplit: 0.35 },
      },
    ],
    ocr: { content_thresholds: [0, 0.15, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/08af3418-cd1a-4993-b391-9ace493b3eb6.pdf',
};
