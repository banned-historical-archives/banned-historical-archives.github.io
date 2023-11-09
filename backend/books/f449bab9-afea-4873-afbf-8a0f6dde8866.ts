export default {
  entity: {
    id: 'f449bab9-afea-4873-afbf-8a0f6dde8866',
    name: '“四人帮”在甘肃的代理人冼恒汉罪行材料',
    internal: false,
    official: false,
    type: 'img',
    author: '中共甘肃省委揭批“四人帮”运动办公室',
    files: new Array(29)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/f449bab9-afea-4873-afbf-8a0f6dde8866/${
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
        title: '“四人帮”在甘肃的代理人冼恒汉罪行材料',
        authors: ['中共甘肃省委揭批“四人帮”运动办公室'],
        page_start: 1,
        page_end: 29,
        dates: [{ year: 1977, month: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/f449bab9-afea-4873-afbf-8a0f6dde8866',
};
