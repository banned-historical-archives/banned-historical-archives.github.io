export default {
  entity: {
    id: '6f4f6e0d-56a9-4406-a848-22e74c5558bf',
    name: '学习毛主席重要指示认清资产阶级就在共产党内——朝阳地区机关干部第一期短训班三四组学习体会',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(11)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/6f4f6e0d-56a9-4406-a848-22e74c5558bf/${
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
          '学习毛主席重要指示认清资产阶级就在共产党内——朝阳地区机关干部第一期短训班三四组学习体会',
        authors: ['朝阳地区机关干部第一期短训班三四组'],
        page_start: 1,
        page_end: 10,
        dates: [{ year: 1976, month: 4, day: 25 }],
      },
      {
        title: '关于讨论资产阶级就在共产党内的问题',
        authors: ['朝阳地区机关干部第一期短训班三四组'],
        page_start: 11,
        page_end: 11,
        dates: [{ year: 1976, month: 4, day: 25 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/6f4f6e0d-56a9-4406-a848-22e74c5558bf',
};
