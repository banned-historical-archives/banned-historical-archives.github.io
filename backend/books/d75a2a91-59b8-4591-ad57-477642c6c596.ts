export default {
  entity: {
    id: 'd75a2a91-59b8-4591-ad57-477642c6c596',
    name: '刘殷农部份罪行材料（1984.4）',
    internal: true,
    official: true,
    type: 'img',
    author: '刘殷农专案组',
    files: new Array(54)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d75a2a91-59b8-4591-ad57-477642c6c596/${
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
        title: '第一部分 “四人帮”的余党刘殷农是我省资产阶级帮派体系的头目',
        authors: ['刘殷农专案组'],
        page_start: 3,
        page_end: 9,
        dates: [{ year: 1984, month: 4 }],
      },
      {
        title:
          '第二部分 捏造事实，私整各级领导干部的黑材料，向“四人帮”告黑状，领取黑旨意',
        authors: ['刘殷农专案组'],
        page_start: 10,
        page_end: 13,
        dates: [{ year: 1984, month: 4 }],
      },
      {
        title:
          '第三部分 疯狂推行“四人帮”的反革命政治纲领，大搞篡党夺权的阴谋活动',
        authors: ['刘殷农专案组'],
        page_start: 13,
        page_end: 25,
        dates: [{ year: 1984, month: 4 }],
      },
      {
        title: '第四部分 反军乱军，破坏部队稳定，阴谋策划组织反革命第二武装',
        authors: ['刘殷农专案组'],
        page_start: 26,
        page_end: 28,
        dates: [{ year: 1984, month: 4 }],
      },
      {
        title: '第五部分 竭力推行“两个否定”、“一个砸烂”，破坏无产阶级专政',
        authors: ['刘殷农专案组'],
        page_start: 28,
        page_end: 35,
        dates: [{ year: 1984, month: 4 }],
      },
      {
        title: '第六部分 疯狂攻击敬爱的周总理',
        authors: ['刘殷农专案组'],
        page_start: 36,
        page_end: 43,
        dates: [{ year: 1984, month: 4 }],
      },
      {
        title: '第七部分 密谋策划发动反革命武装叛乱，对抗以华主席为首的党中央',
        authors: ['刘殷农专案组'],
        page_start: 43,
        page_end: 49,
        dates: [{ year: 1984, month: 4 }],
      },
      {
        title: '第八部分 非法抓捕、打死无辜革命群众袁宝华同志',
        authors: ['刘殷农专案组'],
        page_start: 50,
        page_end: 54,
        dates: [{ year: 1984, month: 4 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/d75a2a91-59b8-4591-ad57-477642c6c596',
};
