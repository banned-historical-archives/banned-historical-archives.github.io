export default {
  entity: {
    id: '15c940de-3de9-4bac-baf8-570e1a43fbcd',
    name: '朱克家的部分罪行材料（1977.7）',
    internal: true,
    official: true,
    type: 'img',
    author: '朱、黄专案组，1977.7',
    files: new Array(28)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/15c940de-3de9-4bac-baf8-570e1a43fbcd/${
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
        title: '第一部分 朱克家是“四人帮”一手培植起来的亲信',
        authors: ['朱、黄专案组'],
        page_start: 4,
        page_end: 12,
        dates: [{ year: 1977, month: 7 }],
      },
      {
        title:
          '第二部分 朱克家秉承“四人帮”的黑旨意，对抗中央〔1976〕四号、五号文件，进行篡党夺权活动的罪证',
        authors: ['朱、黄专案组'],
        page_start: 13,
        page_end: 21,
        dates: [{ year: 1977, month: 7 }],
      },
      {
        title: '第三部分 朱克家插手部队，反军乱军的罪证',
        authors: ['朱、黄专案组'],
        page_start: 22,
        page_end: 23,
        dates: [{ year: 1977, month: 7 }],
      },
      {
        title:
          '第四部分 朱克家威逼省委，强迫释放在押罪犯，破坏无产阶级专政的罪证',
        authors: ['朱、黄专案组'],
        page_start: 23,
        page_end: 26,
        dates: [{ year: 1977, month: 7 }],
      },
      {
        title:
          '第五部分 伟大领袖毛主席逝世后，朱克家配合“四人帮”，为加紧篡党夺权，大造反革命舆论；“四人帮”被粉碎后，朱克家继续坚持反动立场，对抗揭批“四人帮”运动的罪证',
        authors: ['朱、黄专案组'],
        page_start: 26,
        page_end: 28,
        dates: [{ year: 1977, month: 7 }],
      },
    ],
    ocr: { auto_vsplit: true, vsplit: 0.5 },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/15c940de-3de9-4bac-baf8-570e1a43fbcd',
};
