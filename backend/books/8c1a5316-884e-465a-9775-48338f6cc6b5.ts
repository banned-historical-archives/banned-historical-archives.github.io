export default {
  entity: {
    id: '8c1a5316-884e-465a-9775-48338f6cc6b5',
    name: '揭发“四人帮”王洪文插手控制上影阴谋篡党夺权的罪行',
    internal: true,
    official: true,
    type: 'img',
    author: '中共上海电影制片厂委员会',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8c1a5316-884e-465a-9775-48338f6cc6b5/1.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8c1a5316-884e-465a-9775-48338f6cc6b5/2.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8c1a5316-884e-465a-9775-48338f6cc6b5/3.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8c1a5316-884e-465a-9775-48338f6cc6b5/4.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8c1a5316-884e-465a-9775-48338f6cc6b5/5.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8c1a5316-884e-465a-9775-48338f6cc6b5/6.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8c1a5316-884e-465a-9775-48338f6cc6b5/7.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8c1a5316-884e-465a-9775-48338f6cc6b5/8.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8c1a5316-884e-465a-9775-48338f6cc6b5/9.jpg',
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title: '前言',
        authors: ['中共上海电影制片厂委员会'],
        page_start: 2,
        page_end: 2,
        ocr_exceptions: { '2': { content_thresholds: [0, 0.2, 0, 0.5] } },
        dates: [{ year: 1976, month: 12 }],
      },
      {
        title: '第一部分',
        authors: [
          '中共上海电影制片厂委员会',
          '王洪文',
          '马天水',
          '徐景贤',
          '黄涛',
        ],
        page_start: 2,
        page_end: 6,
        ocr_exceptions: {
          '2': { content_thresholds: [0, 0, 0.5, 0] },
          '6': { content_thresholds: [0, 0, 0, 0.5] },
        },
        dates: [
          { year: 1975, month: 8, day: 31 },
          { year: 1975, month: 9, day: 3 },
          { year: 1975, month: 9, day: 14 },
        ],
      },
      {
        title: '第二部分',
        authors: ['中共上海电影制片厂委员会', '王洪文'],
        page_start: 6,
        page_end: 7,
        ocr_exceptions: { '6': { content_thresholds: [0, 0, 0.5, 0] } },
        dates: [{ year: 1975, month: 10, day: 14 }],
      },
      {
        title: '第三部分',
        authors: ['中共上海电影制片厂委员会', '王洪文'],
        page_start: 8,
        page_end: 9,
        dates: [{ year: 1976, month: 5, day: 8 }],
      },
    ],
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/8c1a5316-884e-465a-9775-48338f6cc6b5',
};
