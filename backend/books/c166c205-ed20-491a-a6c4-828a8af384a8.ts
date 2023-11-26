export default {
  entity: {
    id: 'c166c205-ed20-491a-a6c4-828a8af384a8',
    name: '毛主席对吴法宪、叶群和黄永胜、邱会作、李作鹏书面检讨的批示',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(13)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/c166c205-ed20-491a-a6c4-828a8af384a8/${
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
        title: '毛主席一九七〇年十月十四日对吴法宪第一次书面检讨的批示',
        authors: ['毛泽东'],
        page_start: 3,
        page_end: 7,
        dates: [{ year: 1970, month: 10, day: 14 }],
      },
      {
        title: '吴法宪一九七〇年九月二十九日第一次书面检讨',
        authors: ['吴法宪'],
        page_start: 3,
        page_end: 7,
        dates: [{ year: 1970, month: 10, day: 14 }],
      },
      {
        title: '毛主席一九七〇年十月十五日对叶群第一次书面检讨的批示',
        authors: ['毛泽东'],
        page_start: 8,
        page_end: 12,
        dates: [{ year: 1970, month: 10, day: 15 }],
      },
      {
        title: '叶群一九七〇年十月十二日第一次书面检讨',
        authors: ['毛泽东'],
        page_start: 8,
        page_end: 12,
        dates: [{ year: 1970, month: 10, day: 12 }],
      },
      {
        title:
          '毛主席一九七一年三月二十四日对黄永胜、邱会作、李作鹏书面检讨的批示',
        authors: ['毛泽东'],
        page_start: 12,
        page_end: 13,
        dates: [{ year: 1971, month: 3, day: 24 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/c166c205-ed20-491a-a6c4-828a8af384a8',
};
