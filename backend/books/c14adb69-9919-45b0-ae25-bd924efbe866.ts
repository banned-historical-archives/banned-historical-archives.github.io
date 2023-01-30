export default {
  entity: {
    id: 'c14adb69-9919-45b0-ae25-bd924efbe866',
    name: '黄兆其的部分罪行材料（1977.7）',
    internal: true,
    official: true,
    type: 'img',
    author: '朱、黄专案组',
    files: new Array(39)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c14adb69-9919-45b0-ae25-bd924efbe866/${
            idx + 1
          }.jpg`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title: '第一部分 黄兆其是“四人帮”在我省培植的资产阶级帮派头目',
        authors: ['朱、黄专案组'],
        page_start: 3,
        page_end: 8,
        dates: [{ year: 1977, month: 7 }],
      },
      {
        title: '第二部分 秉承“四人帮”的黑旨意 大造篡党夺权的反革命舆论',
        authors: ['朱、黄专案组'],
        page_start: 8,
        page_end: 17,
        dates: [{ year: 1977, month: 7 }],
      },
      {
        title: '第三部分 对抗中央〔1976〕四、五号文件 疯狂进行篡党夺权阴谋活动',
        authors: ['朱、黄专案组'],
        page_start: 17,
        page_end: 26,
        dates: [{ year: 1977, month: 7 }],
      },
      {
        title: '第四部分 强行释放在押罪犯 破坏无产阶级专政',
        authors: ['朱、黄专案组'],
        page_start: 27,
        page_end: 32,
        dates: [{ year: 1977, month: 7 }],
      },
      {
        title:
          '第五部分 “四人帮”被粉碎后策划反革命武装叛乱，负隅顽抗进行垂死挣扎',
        authors: ['朱、黄专案组'],
        page_start: 33,
        page_end: 39,
        dates: [{ year: 1977, month: 7 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/c14adb69-9919-45b0-ae25-bd924efbe866',
};
