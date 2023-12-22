export default {
  entity: {
    id: '39adb7a3-a162-470a-8446-326f5b111c17',
    name: '一九七五年十月六日胡乔木同志的谈话（1975.10.6）',
    internal: false,
    official: false,
    type: 'img',
    author: '哈尔滨市学习毛主席重要指示批邓、反击右倾翻案风经验交流会翻印材料',
    files: new Array(6)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/39adb7a3-a162-470a-8446-326f5b111c17/${
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
        title: '一九七五年十月六日胡乔木同志的谈话',
        authors: ['胡乔木'],
        page_start: 1,
        page_end: 5,
        dates: [{ year: 1975, month: 10, day: 6 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/39adb7a3-a162-470a-8446-326f5b111c17',
};
