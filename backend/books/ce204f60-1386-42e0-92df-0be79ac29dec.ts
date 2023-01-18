export default {
  entity: {
    id: 'ce204f60-1386-42e0-92df-0be79ac29dec',
    name: '关于1961年高校招生工作中贯彻统战政策情况的报告',
    internal: true,
    official: true,
    type: 'img',
    author: '',
    files: new Array(2)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/ce204f60-1386-42e0-92df-0be79ac29dec/${
            idx + 1
          }.JPG`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: 'JPG',
    articles: [
      {
        title: '关于1961年高校招生工作中贯彻统战政策情况的报告',
        authors: ['上海市高等学校招生委员会办公室'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1961, month: 12, day: 28 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/ce204f60-1386-42e0-92df-0be79ac29dec',
};
