export default {
  entity: {
    id: '5f0c1924-5126-4ec8-ae9a-19d74904fe14',
    name: '辽宁省揭批“四人帮”、毛远新及其党羽、亲信反党罪行大会发言材料汇编（1977.8.8辽宁）',
    internal: false,
    official: false,
    type: 'img',
    author: '中共辽宁省委揭批“四人帮”办公室，1977.8.8',
    files: new Array(32)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/5f0c1924-5126-4ec8-ae9a-19d74904fe14/${
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
        title: '彻底清算“四人帮”、毛远新及其党羽和亲信反中央的滔天罪行',
        authors: ['朱川'],
        page_start: 3,
        page_end: 9,
        dates: [{ year: 1977, month: 8, day: 8 }],
      },
      {
        title:
          '揭发批判“四人帮”在省委内的死党、党羽和亲信恶毒攻击华主席、党中央，疯狂破坏揭批“四人帮”斗争的罪行',
        authors: ['高琳'],
        page_start: 10,
        page_end: 13,
        dates: [{ year: 1977, month: 8, day: 8 }],
      },
      {
        title: '彻底揭发批判“四人帮”死党毛远新里通外国的罪行',
        authors: ['康积惠'],
        page_start: 14,
        page_end: 16,
        dates: [{ year: 1977, month: 8, day: 8 }],
      },
      {
        title: '揭发批判“四人帮”的党羽和亲信吴玉德反党篡权的罪行',
        authors: ['于仲明'],
        page_start: 17,
        page_end: 20,
        dates: [{ year: 1977, month: 8, day: 8 }],
      },
      {
        title: '彻底揭发批判魏秉奎搞乱鞍山的反革命罪行',
        authors: ['范业忠'],
        page_start: 21,
        page_end: 25,
        dates: [{ year: 1977, month: 8, day: 8 }],
      },
      {
        title: '彻底揭发批判“四人帮”的党羽和亲信刘盛田结帮篡党的罪行',
        authors: ['刘东升'],
        page_start: 25,
        page_end: 29,
        dates: [{ year: 1977, month: 8, day: 8 }],
      },
      {
        title:
          '彻底揭发批判“四人帮”毛远新及其党羽亲信炮制和推行“哈尔套经验”的罪行',
        authors: ['张英华'],
        page_start: 29,
        page_end: 32,
        dates: [{ year: 1977, month: 8, day: 8 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/5f0c1924-5126-4ec8-ae9a-19d74904fe14',
};
