export default {
  entity: {
    id: '49dfa82c-62bd-4241-88af-8941e04cabee',
    name: '张延成同志在济南市有线广播大会上的讲话',
    internal: true,
    official: true,
    type: 'img',
    author: '济南市革命委员会办公室印',
    files: new Array(8)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/49dfa82c-62bd-4241-88af-8941e04cabee/${
            idx + 1
          }.png`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: 'png',
    articles: [
      {
        title: '张延成同志在济南市有线广播大会上的讲话',
        authors: ['张延成'],
        page_start: 1,
        page_end: 8,
        dates: [{ year: 1973, month: 11, day: 10 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/49dfa82c-62bd-4241-88af-8941e04cabee',
};
