export default {
  entity: {
    id: 'ff6be19a-2db8-4312-afd5-88e859c0fadc',
    name: '隗永忠支持帮派势力阴谋篡党夺权罪行的部分材料',
    internal: false,
    official: false,
    type: 'img',
    author: '中共贵阳市委清查领导小组办公室',
    files: new Array(25)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/ff6be19a-2db8-4312-afd5-88e859c0fadc/${
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
        title: '隗永忠支持帮派势力阴谋篡党夺权罪行的部分材料',
        authors: ['中共贵阳市委清查领导小组办公室'],
        page_start: 1,
        page_end: 25,
        dates: [{ year: 1977, month: 10 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/ff6be19a-2db8-4312-afd5-88e859c0fadc',
};
