export default {
  entity: {
    id: 'e2fd55e3-368c-4327-af35-328f50d34422',
    name: '省会军民深入揭发批判“四人帮”滔天罪行大会材料',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(15)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e2fd55e3-368c-4327-af35-328f50d34422/${
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
        title: '中共中央办公厅通知',
        authors: ['中共中央办公厅'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1977, month: 3, day: 8 }],
      },
      {
        title: '省委书记毛致用同志宣读华主席、党中央的批示和中共中央办公厅通知',
        authors: ['毛致用'],
        page_start: 3,
        page_end: 3,
        dates: [{ year: 1977, month: 3, day: 10 }],
      },
      {
        title: '唐瑞亭同志的揭发批判发言',
        authors: ['唐瑞亭'],
        page_start: 3,
        page_end: 8,
        dates: [{ year: 1977, month: 3, day: 10 }],
      },
      {
        title: '中共长沙市委副书记李明来同志宣读的省委批示和市委决定',
        authors: ['李明来'],
        page_start: 9,
        page_end: 9,
        dates: [{ year: 1977, month: 3, day: 10 }],
      },
      {
        title: '王甸彬同志的揭发批判发言',
        authors: ['王甸彬'],
        page_start: 9,
        page_end: 12,
        dates: [{ year: 1977, month: 3, day: 10 }],
      },
      {
        title: '万达同志在省会军民深入揭发批判“四人帮”滔天罪行大会上的讲话',
        authors: ['万达'],
        page_start: 13,
        page_end: 15,
        dates: [{ year: 1977, month: 3, day: 10 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/e2fd55e3-368c-4327-af35-328f50d34422',
};
