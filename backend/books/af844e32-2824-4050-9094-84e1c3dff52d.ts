export default {
  entity: {
    id: 'af844e32-2824-4050-9094-84e1c3dff52d',
    name: '《谈谈党内资产阶级》一书谬论摘录',
    internal: false,
    official: false,
    type: 'img',
    author: '上海人民出版社',
    files: new Array(10)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/af844e32-2824-4050-9094-84e1c3dff52d/${
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
        title: '《谈谈党内资产阶级》一书谬论摘录',
        authors: ['上海人民出版社'],
        page_start: 1,
        page_end: 10,
        dates: [{ year: 1978, month: 7 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/af844e32-2824-4050-9094-84e1c3dff52d',
};
