export default {
  entity: {
    id: 'a111b3f7-d498-4ff6-bac7-a2955fd065e9',
    name: '红旗一九六三年第二十四期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/a111b3f7-d498-4ff6-bac7-a2955fd065e9.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title:
          '哲学社会科学工作者的战斗任务（一九六三年十月二十六日在中国科学院哲学社会科学部委员会第四次扩大会议上的讲话）',
        authors: ['周扬'],
        page_start: 3,
        page_end: 32,
        dates: [{ year: 1963, month: 10, day: 26 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/a111b3f7-d498-4ff6-bac7-a2955fd065e9.pdf',
};
