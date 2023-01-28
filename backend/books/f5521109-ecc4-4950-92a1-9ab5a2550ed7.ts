export default {
  entity: {
    id: 'f5521109-ecc4-4950-92a1-9ab5a2550ed7',
    name: '“四人帮”在甘肃的代理人冼恒汉罪行材料（1977.11）',
    internal: true,
    official: true,
    type: 'img',
    author: '中共甘肃省委揭批“四人帮”运动办公室印',
    files: new Array(29)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/f5521109-ecc4-4950-92a1-9ab5a2550ed7/${
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
        title: '“四人帮”在甘肃的代理人冼恒汉罪行材料',
        authors: ['中共甘肃省委揭批“四人帮”运动办公室'],
        page_start: 3,
        page_end: 29,
        dates: [{ year: 1977, month: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/f5521109-ecc4-4950-92a1-9ab5a2550ed7',
};
