export default {
  entity: {
    id: '4b236e91-bc0e-4aa6-9f49-6b15181ce576',
    name: '揭发“四人帮”在《社会主义政治经济学》编写工作中的滔天罪行（1977.3.16）',
    internal: false,
    official: false,
    type: 'img',
    author:
      '《社会主义政治经济学》上海编写组，中山大学经济系十四级翻印，1977.3.16',
    files: new Array(10)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/4b236e91-bc0e-4aa6-9f49-6b15181ce576/${
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
        title: '揭发“四人帮”在《社会主义政治经济学》编写工作中的滔天罪行',
        authors: ['《社会主义政治经济学》上海编写组'],
        page_start: 1,
        page_end: 10,
        dates: [{ year: 1977, month: 3, day: 16 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/4b236e91-bc0e-4aa6-9f49-6b15181ce576',
};
