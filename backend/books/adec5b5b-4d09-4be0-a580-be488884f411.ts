export default {
  entity: {
    id: 'adec5b5b-4d09-4be0-a580-be488884f411',
    name: '红旗一九六〇年第二十四期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/adec5b5b-4d09-4be0-a580-be488884f411.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '反帝国主义的伟大号召',
        authors: ['许辛学'],
        page_start: 3,
        page_end: 8,
        dates: [{ year: 1960, month: 12 }],
      },
      {
        title: '适应形势的发展，加强党的建设',
        authors: ['安子文'],
        page_start: 9,
        page_end: 17,
        dates: [{ year: 1960, month: 12 }],
      },
      {
        title: '集中力量，各个解决',
        authors: ['闻师润'],
        page_start: 18,
        page_end: 28,
        dates: [{ year: 1960, month: 12 }],
      },
      {
        title: '从设计“积木式机床”试论机床内部矛盾运动的规律',
        authors: ['中共哈尔滨工业大学机械系机床及自动化专业分总支委员会'],
        page_start: 29,
        page_end: 32,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 12 }],
      },
      {
        title: '厂矿企业一定要办好运输',
        authors: ['潘琪'],
        page_start: 33,
        page_end: 36,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 12 }],
      },
      {
        title: '进一步发挥水利工程的灌溉效益',
        authors: ['余为农'],
        page_start: 37,
        page_end: 41,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 12 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/adec5b5b-4d09-4be0-a580-be488884f411.pdf',
};
