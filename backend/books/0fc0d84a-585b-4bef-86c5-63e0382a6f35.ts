export default {
  entity: {
    id: '0fc0d84a-585b-4bef-86c5-63e0382a6f35',
    name: '红旗一九六〇年第五期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/0fc0d84a-585b-4bef-86c5-63e0382a6f35.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '人民公社是我国人民群众的伟大创造',
        authors: ['吉群义'],
        page_start: 3,
        page_end: 17,
        dates: [{ year: 1960, month: 3 }],
      },
      {
        title:
          '人民公社是妇女彻底解放的很好组织形式——纪念“三八”国际劳动妇女节五十周年',
        authors: ['《红旗》杂志评论员'],
        page_start: 18,
        page_end: 20,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 3 }],
      },
      {
        title: '我们为什么废除了封建家长制',
        authors: ['范若愚'],
        page_start: 21,
        page_end: 29,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 3 }],
      },
      {
        title: '西藏民主革命的胜利',
        authors: ['张经武'],
        page_start: 30,
        page_end: 36,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 3 }],
      },
      {
        title: '组织城市人民的经济生活是建设社会主义新城市的一个重要方面',
        authors: ['任白戈'],
        page_start: 37,
        page_end: 45,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 3 }],
      },
      {
        title: '养猪业对于农业生产和人民生活的重大意义',
        authors: ['司马农'],
        page_start: 46,
        page_end: 51,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 3 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/0fc0d84a-585b-4bef-86c5-63e0382a6f35.pdf',
};
