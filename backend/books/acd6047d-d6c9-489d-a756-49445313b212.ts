export default {
  entity: {
    id: 'acd6047d-d6c9-489d-a756-49445313b212',
    name: '红旗一九六二年第二十一期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/acd6047d-d6c9-489d-a756-49445313b212.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '英雄的古巴人民必胜',
        authors: ['《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 5,
        dates: [{ year: 1962, month: 11, day: 1 }],
      },
      {
        title: '高举毛泽东思想的旗帜，进一步做好社会主义商业工作',
        authors: ['姚依林'],
        page_start: 6,
        page_end: 13,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 11, day: 1 }],
      },
      {
        title: '对积累和消费问题的几点意见',
        authors: ['杨波'],
        page_start: 14,
        page_end: 22,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 11, day: 1 }],
      },
      {
        title: '现代修正主义者在文艺领域中追随没落的资产阶级',
        authors: ['黎庶之'],
        page_start: 23,
        page_end: 28,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 11, day: 1 }],
      },
      {
        title: '教学小品——谈孩子勇敢精神的培养',
        authors: ['敢峰'],
        page_start: 29,
        page_end: 33,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 11, day: 1 }],
      },
      {
        title: '谈黄河流域的水土保持',
        authors: ['赵明甫'],
        page_start: 32,
        page_end: 39,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 11, day: 1 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/acd6047d-d6c9-489d-a756-49445313b212.pdf',
};
