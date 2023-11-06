export default {
  entity: {
    id: '08418810-3049-4d29-8bb8-4abd3273d260',
    name: '张铁生一九七六年四月八日在铁岭农学院“坚决拥护中共中央两项决议、愤怒声讨邓小平”大会上的发言',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(4)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/08418810-3049-4d29-8bb8-4abd3273d260/${
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
        title:
          '张铁生一九七六年四月八日在铁岭农学院“坚决拥护中共中央两项决议、愤怒声讨邓小平”大会上的发言',
        authors: ['张铁生'],
        page_start: 1,
        page_end: 4,
        dates: [{ year: 1976, month: 4, day: 8 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/08418810-3049-4d29-8bb8-4abd3273d260',
};
