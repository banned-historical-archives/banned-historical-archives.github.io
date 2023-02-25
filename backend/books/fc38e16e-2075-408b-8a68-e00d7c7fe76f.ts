export default {
  entity: {
    id: 'fc38e16e-2075-408b-8a68-e00d7c7fe76f',
    name: '王洪文、纪登奎同志在省委工作会议召集人和县委书记会议上的讲话（1975.7.9）',
    internal: true,
    official: true,
    type: 'img',
    author: '中共浙江省委办公室',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/fc38e16e-2075-408b-8a68-e00d7c7fe76f/1.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/fc38e16e-2075-408b-8a68-e00d7c7fe76f/2.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/fc38e16e-2075-408b-8a68-e00d7c7fe76f/3.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/fc38e16e-2075-408b-8a68-e00d7c7fe76f/4.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/fc38e16e-2075-408b-8a68-e00d7c7fe76f/5.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/fc38e16e-2075-408b-8a68-e00d7c7fe76f/6.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/fc38e16e-2075-408b-8a68-e00d7c7fe76f/7.png',
  },
  parser_option: {
    page_limits: [],
    ext: 'png',
    articles: [
      {
        title: '王洪文、纪登奎在省委工作会议召集人和县委书记会议上的讲话',
        alias: '王洪文、纪登奎同志在省委工作会议召集人和县委书记会议上的讲话',
        authors: ['王洪文', '纪登奎'],
        page_start: 2,
        page_end: 7,
        tags: [{
          name: '反潮流',
          type: 'subject' // 事件
        }, {
          name: '限制资产阶级法权',
          type: 'subject' // 事件
        }, {
          name: '派性问题',
          type: 'subject' // 事件
        }, {
          name: '浙江文革',
          type: 'subject' // 事件
        }, {
          name: '中共浙江省委办公室',
          type: 'issuer' // 发行方/出版方
        }],
        ocr_exceptions: {
          '2': { content_thresholds: [0.5, 0.12, 0, 0] },
          '4': { content_thresholds: [0, 0.12, 0, 0.5] },
          '7': { content_thresholds: [0, 0.5, 0, 0] },
        },
        dates: [{ year: 1975, month: 7, day: 9 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.12, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/fc38e16e-2075-408b-8a68-e00d7c7fe76f',
};
