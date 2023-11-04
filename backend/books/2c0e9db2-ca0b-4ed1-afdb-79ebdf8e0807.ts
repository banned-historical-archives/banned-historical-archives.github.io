export default {
  entity: {
    id: '2c0e9db2-ca0b-4ed1-afdb-79ebdf8e0807',
    name: '卫生部揭批“四人帮”大会发言汇编（一）',
    internal: false,
    official: false,
    type: 'img',
    author: '卫生部运动办公室',
    files: new Array(48)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/2c0e9db2-ca0b-4ed1-afdb-79ebdf8e0807/${
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
        title: '揭发批判刘湘屏同“四人帮”干扰破坏毛主席遗体保存工作的滔天罪行',
        authors: ['黄树则'],
        page_start: 2,
        page_end: 8,
        dates: [{ year: 1976, month: 12 }],
      },
      {
        title: '愤怒揭批“四人帮”斩断他们伸向卫生战线的黑手',
        authors: ['董炳琨'],
        page_start: 8,
        page_end: 16,
        dates: [{ year: 1976, month: 12 }],
      },
      {
        title: '愤怒揭发批判“四人帮”反党集团反对周总理的滔天罪行！',
        authors: ['杨纯'],
        page_start: 16,
        page_end: 22,
        dates: [{ year: 1976, month: 12 }],
      },
      {
        title:
          '揭发批判刘湘屏批邓另搞一套的罪行——“批邓联钱”的要害是阴谋篡党夺权',
        authors: ['鲁之俊'],
        page_start: 22,
        page_end: 27,
        dates: [{ year: 1976, month: 12 }],
      },
      {
        title: '揭发批判刘湘屏紧跟“四人帮”泡制“苗雨”黑文的反革命罪行',
        authors: ['李洢真'],
        page_start: 28,
        page_end: 34,
        dates: [{ year: 1976, month: 12 }],
      },
      {
        title: '“四人帮”及其黑干将刘湘屏的“两个工厂”是篡党夺权的罪恶工具',
        authors: ['刘学文'],
        page_start: 35,
        page_end: 39,
        dates: [{ year: 1976, month: 12 }],
      },
      {
        title:
          '揭发批判刘湘屏追随“四人帮”篡党夺权、破坏毛主席革命外交路线的罪行',
        authors: ['刘培龙'],
        page_start: 40,
        page_end: 46,
        dates: [{ year: 1976, month: 12 }],
      },
      {
        title: '钱信忠同志在外事局揭批“四人帮”滔天罪行发言中的插话',
        authors: ['钱信忠'],
        page_start: 46,
        page_end: 47,
        dates: [{ year: 1976, month: 12 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/2c0e9db2-ca0b-4ed1-afdb-79ebdf8e0807',
};
