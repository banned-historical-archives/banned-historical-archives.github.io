export default {
  entity: {
    id: '8568f9ff-1aef-46ac-a178-d91870580397',
    name: '北师大井冈山通讯增刊NO：13',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(1)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/8568f9ff-1aef-46ac-a178-d91870580397/${
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
        title: '张春桥同志九月九日队上海高校负责人讲话',
        authors: ['张春桥'],
        page_start: 1,
        page_end: 1,
        dates: [{ year: 1967, month: 9, day: 14 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/8568f9ff-1aef-46ac-a178-d91870580397',
};
