export default {
  entity: {
    id: 'e2b67e08-41f6-4a1d-b5e6-786da6f2ba6e',
    name: '上海市揭批“四人帮”及其余党的反革命罪行大会发言材料',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(29)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e2b67e08-41f6-4a1d-b5e6-786da6f2ba6e/${
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
        title: '彻底揭发批判政治野心家马天水出卖原则、出卖灵魂的反革命滔天罪行',
        authors: ['市委办公室'],
        page_start: 1,
        page_end: 6,
        dates: [{ year: 1977, month: 11 }],
      },
      {
        title: '陈阿大究竟是什么货色',
        authors: ['市革委会工交组'],
        page_start: 7,
        page_end: 9,
        dates: [{ year: 1977, month: 11 }],
      },
      {
        title:
          '彻底批判“四人帮”及其余党在纺织系统疯狂推行反革命政治纲领的严重罪行',
        authors: ['中共上海市纺织工业局委员会'],
        page_start: 9,
        page_end: 11,
        dates: [{ year: 1977, month: 11 }],
      },
      {
        title: '于会泳和徐景贤是“四人帮”搞阴谋文艺的急先锋',
        authors: ['中共上海市文化局委员会'],
        page_start: 12,
        page_end: 13,
        dates: [{ year: 1977, month: 11 }],
      },
      {
        title: '彻底批判“四人帮残酷迫害知识分子的反动谬论',
        authors: ['上海科学院'],
        page_start: 14,
        page_end: 16,
        dates: [{ year: 1977, month: 11 }],
      },
      {
        title: '罗思鼎影射史学和“四人帮”的反革命政治纲领',
        authors: ['中共复旦大学委员会'],
        page_start: 16,
        page_end: 18,
        dates: [{ year: 1977, month: 11 }],
      },
      {
        title:
          '揭发批判“四人帮”及其余党鼓吹“军内资产阶级”的谬论大搞反军乱军篡军的罪行',
        authors: ['上海警务区'],
        page_start: 19,
        page_end: 21,
        dates: [{ year: 1977, month: 11 }],
      },
      {
        title: '原上海市委写作组是“四人帮”篡党夺权的急先锋',
        authors: ['市委办公室'],
        page_start: 22,
        page_end: 26,
        dates: [{ year: 1977, month: 11 }],
      },
      {
        title:
          '“四人帮”及其余党马、徐、王是怎样操纵上海两报鼓吹反革命政治纲领的？',
        authors: ['解放日报党委', '文汇报党委'],
        page_start: 27,
        page_end: 29,
        dates: [{ year: 1977, month: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/e2b67e08-41f6-4a1d-b5e6-786da6f2ba6e',
};
