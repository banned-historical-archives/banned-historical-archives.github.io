export default {
  entity: {
    id: 'ee9e44bf-2ac3-4ec6-ab94-68313214472a',
    name: '国际毛主义统一会议成功召开的历史性消息 国际共产主义者同盟成立！（2022.12.26）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '国际共产主义者同盟，2022.12.26',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/ee9e44bf-2ac3-4ec6-ab94-68313214472a.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title:
          '国际毛主义统一会议成功召开的历史性消息 国际共产主义者同盟成立！',
        authors: ['国际共产主义者同盟'],
        page_start: 1,
        page_end: 26,
        dates: [{ year: 2022, month: 12, day: 26 }],
      },
    ],
    ocr: {
      standard_paragraph_merge_strategy_threshold: 0.085,
      differential_paragraph_merge_strategy_threshold: 0,
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/ee9e44bf-2ac3-4ec6-ab94-68313214472a.pdf',
};
