export default {
  entity: {
    id: '57a664ec-9c24-4457-949e-ebbfc31ee264',
    name: '彻底揭发批判王张江姚反党集团发言材料汇编（九）',
    internal: false,
    official: false,
    type: 'img',
    author: '中共山东省委宣传部',
    files: new Array(12)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/57a664ec-9c24-4457-949e-ebbfc31ee264/${
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
          '揭发批判“四人帮”伸向曲阜的黑手陈以梅的反革命最新——中共曲阜县委书记张正仪同志在济宁地区揭发批判陈以梅追随“四人帮”篡党夺权罪行有线广播大会上的发言',
        authors: ['张正仪'],
        page_start: 3,
        page_end: 7,
        dates: [{ year: 1977, month: 5, day: 18 }],
      },
      {
        title:
          '剥掉陈以梅的画皮，还其反革命真面目——曲阜县陈家庄大队贫下中农代表陈凡生同志在济宁地区揭发批判陈以梅追随“四人帮”篡党夺权罪行有线广播大会上的发言',
        authors: ['陈凡生'],
        page_start: 7,
        page_end: 10,
        dates: [{ year: 1977, month: 5, day: 18 }],
      },
      {
        title:
          '“四人帮”拼命篡党夺权复辟市他们的反动阶级本性所决定的——中国海阳县委书记臧海强同志在烟台地区深入揭发批判“四人帮”有线广播大会上的发言',
        authors: ['臧海强'],
        page_start: 10,
        page_end: 12,
        dates: [{ year: 1977, month: 5, day: 18 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/57a664ec-9c24-4457-949e-ebbfc31ee264',
};
