export default {
  entity: {
    id: 'd08dc616-fabd-4476-8d50-1d4ff74c96b2',
    name: '戚本禹同志、张春桥同志、谢富治同志、傅崇碧同志四月十四日凌晨的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '毛泽东思想三·一八红武锅革命造反军联络总部',
    files: new Array(8)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/d08dc616-fabd-4476-8d50-1d4ff74c96b2/${
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
          '戚本禹同志、张春桥同志、谢富治同志、傅崇碧同志四月十四日凌晨的讲话',
        authors: ['戚本禹', '张春桥', '谢富治', '傅崇碧'],
        page_start: 1,
        page_end: 8,
        dates: [{ year: 1967, month: 4, day: 21 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/d08dc616-fabd-4476-8d50-1d4ff74c96b2',
};
