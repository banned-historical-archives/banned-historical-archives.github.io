export default {
  entity: {
    id: '03f26358-4e39-4656-877c-0adb539cc588',
    name: '彻底揭发批判“四人帮”操纵和指挥的坏人吕毅的反革命罪行（1978.1.3河北）',
    internal: false,
    official: false,
    type: 'img',
    author: '中共保定地委揭批“四人帮”办公室，1978.1.3',
    files: new Array(7)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/03f26358-4e39-4656-877c-0adb539cc588/${
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
        title: '彻底揭发批判“四人帮”操纵和指挥的坏人吕毅的反革命罪行',
        authors: ['中共保定地委揭批“四人帮”办公室'],
        page_start: 1,
        page_end: 7,
        dates: [{ year: 1978, month: 1, day: 3 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/03f26358-4e39-4656-877c-0adb539cc588',
};
