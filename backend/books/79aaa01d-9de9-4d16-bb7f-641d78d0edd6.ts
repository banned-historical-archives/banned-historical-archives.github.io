export default {
  entity: {
    id: '79aaa01d-9de9-4d16-bb7f-641d78d0edd6',
    name: '“四人帮”死党毛远新在鞍山的主要罪行（1977.1辽宁）',
    internal: false,
    official: true,
    type: 'img',
    author: '中共鞍山市委清查王张江姚反党集团罪行小组办公室，1977.1辽宁',
    files: new Array(13)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/79aaa01d-9de9-4d16-bb7f-641d78d0edd6/${
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
        title: '“四人帮”死党毛远新在鞍山的主要罪行',
        authors: ['中共鞍山市委清查王张江姚反党集团罪行小组办公室'],
        page_start: 1,
        page_end: 13,
        dates: [{ year: 1977, month: 1 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/79aaa01d-9de9-4d16-bb7f-641d78d0edd6',
};
