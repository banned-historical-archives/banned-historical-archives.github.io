export default {
  entity: {
    id: '23d59bc0-c178-4541-9e8b-79b76e80095e',
    name: '揭发批判“四人帮”炮制“蜗牛事件”阴谋篡党夺权罪行大会发言材料汇编',
    internal: false,
    official: false,
    type: 'img',
    author: '第四机械工业部',
    files: new Array(31)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/23d59bc0-c178-4541-9e8b-79b76e80095e/${
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
        title: '“蜗牛事件”是”四人帮“篡党夺权阴谋的组成部分',
        authors: ['高峻'],
        page_start: 5,
        page_end: 9,
        dates: [{ year: 1977, month: 3 }],
      },
      {
        title: '江青炮制“蜗牛事件”，反对毛主席的革命外交路线，阴谋篡党夺权',
        authors: ['邓国军'],
        page_start: 9,
        page_end: 12,
        dates: [{ year: 1977, month: 3 }],
      },
      {
        title:
          '“蜗牛事件”是“四人帮”在批林批孔中另搞一套的又一罪证——彻底戳穿“四人帮”所谓揪“现代大儒”的反革命阴谋',
        authors: ['王天成'],
        page_start: 13,
        page_end: 17,
        dates: [{ year: 1977, month: 3 }],
      },
      {
        title: '彻底揭露“四人帮”制造“蜗牛事件”反对技术引进的阴谋',
        authors: ['刘强'],
        page_start: 18,
        page_end: 22,
        dates: [{ year: 1977, month: 3 }],
      },
      {
        title: '彻底清算许文彬追随“四人帮”反对周总理的罪行',
        authors: ['姚明'],
        page_start: 22,
        page_end: 27,
        dates: [{ year: 1977, month: 3 }],
      },
      {
        title: '许文彬卖身投靠江青为“四人帮”篡党夺权效劳的罪行必须彻底批判',
        authors: ['樊勖昌'],
        page_start: 27,
        page_end: 31,
        dates: [{ year: 1977, month: 3 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/23d59bc0-c178-4541-9e8b-79b76e80095e',
};
