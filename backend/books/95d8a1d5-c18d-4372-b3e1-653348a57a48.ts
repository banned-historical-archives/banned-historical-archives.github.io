export default {
  entity: {
    id: '95d8a1d5-c18d-4372-b3e1-653348a57a48',
    name: '董明会配合“四人帮”在湖北大搞篡党夺权阴谋活动的罪行（1977.3.22湖北）',
    internal: false,
    official: false,
    type: 'img',
    author: '中共湖北省委材料组，1977.3.22整理',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/95d8a1d5-c18d-4372-b3e1-653348a57a48/${
            idx + 1
          }.`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: '',
    articles: [
      {
        title: '董明会配合“四人帮”在湖北大搞篡党夺权阴谋活动的罪行',
        authors: ['中共湖北省委材料组'],
        page_start: 1,
        page_end: 5,
        dates: [{ year: 1977, month: 3, day: 22 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/95d8a1d5-c18d-4372-b3e1-653348a57a48',
};
