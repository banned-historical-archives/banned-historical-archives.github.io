export default {
  entity: {
    id: 'e5e8b117-4c34-4c72-86a8-1b7d83450db0',
    name: '揭发批判“四人帮”在辽宁省委内反党帮派的罪行（之二）',
    internal: false,
    official: false,
    type: 'img',
    author: '辽宁人民出版社',
    files: new Array(28)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/e5e8b117-4c34-4c72-86a8-1b7d83450db0/${
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
        title: '揭发批判反党帮派的总管李伯秋反党反中央的罪行',
        authors: ['仲伟祥'],
        page_start: 5,
        page_end: 12,
        dates: [],
      },
      {
        title: '揭发批判反党帮派的黑干将魏秉奎反党篡权的罪行',
        authors: ['苍水新'],
        page_start: 12,
        page_end: 16,
        dates: [],
      },
      {
        title: '揭发批判“四人帮”的黑爪牙杨春甫向党中央发难的罪行',
        authors: ['朱川'],
        page_start: 17,
        page_end: 21,
        dates: [],
      },
      {
        title: '揭发批判反党帮派的黑干将刘盛田反党篡权的罪行',
        authors: ['赵奇'],
        page_start: 21,
        page_end: 27,
        dates: [],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/e5e8b117-4c34-4c72-86a8-1b7d83450db0',
};
