export default {
  entity: {
    id: '6d699b70-aefe-4ba5-b655-f61a181b8138',
    name: '国际共运参考资料第4804期（1972.6.26）',
    internal: true,
    official: false,
    type: 'img',
    author: '1972.6.26',
    files: new Array(8)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/6d699b70-aefe-4ba5-b655-f61a181b8138/${
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
          '印《解放》杂志刊登印共（马列）安得拉邦委员会的党内通信任务“党内存在修正主义思想残余是受到挫折的主要原因”',
        authors: ['毛泽东'],
        page_start: 1,
        page_end: 8,
        dates: [{ year: 1971, month: 3 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/6d699b70-aefe-4ba5-b655-f61a181b8138',
};
