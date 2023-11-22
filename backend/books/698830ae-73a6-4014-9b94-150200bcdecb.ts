export default {
  entity: {
    id: '698830ae-73a6-4014-9b94-150200bcdecb',
    name: '情况交流（9）',
    internal: false,
    official: false,
    type: 'img',
    author: '浙江省联总《情况交流》编辑组',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/698830ae-73a6-4014-9b94-150200bcdecb/${
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
        title: '春桥同志、文元同志在思想工作座谈会上的讲话',
        authors: ['张春桥', '姚文元'],
        page_start: 1,
        page_end: 3,
        dates: [{ year: 1969, month: 5, day: 16 }],
      },
      {
        title: '把江华死党的爪牙方剑文揪上历史的审判台',
        authors: ['“卫三红”突击队', '杭建公司工代会', '卫东彪'],
        page_start: 3,
        page_end: 5,
        dates: [{ year: 1969, month: 7, day: 30 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/698830ae-73a6-4014-9b94-150200bcdecb',
};
