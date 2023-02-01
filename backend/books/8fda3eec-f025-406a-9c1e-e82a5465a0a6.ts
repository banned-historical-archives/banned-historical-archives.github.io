export default {
  entity: {
    id: '8fda3eec-f025-406a-9c1e-e82a5465a0a6',
    name: '关于杨德政﹑康岩中、杨世才、袁昌福等人召开反革命应变会的部分材料（1977.3）',
    internal: false,
    official: true,
    type: 'img',
    author: '中共贵州省委清查领导小组办公室，1977年3月',
    files: new Array(26)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8fda3eec-f025-406a-9c1e-e82a5465a0a6/${
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
        title: '按语',
        authors: ['中共贵州省委清查领导小组办公室'],
        page_start: 2,
        page_end: 3,
        dates: [{ year: 1977, month: 3, day: 24 }],
      },
      {
        title: '一、杨德政、康岩中召集的反革命应变会',
        authors: ['杨德政', '康岩中'],
        page_start: 4,
        page_end: 7,
        dates: [
          { year: 1977, month: 1, day: 1 },
          { year: 1977, month: 2, day: 7 },
        ],
      },
      {
        title: '二、杨世才召集的反革命应变会',
        authors: ['杨世才'],
        page_start: 7,
        page_end: 20,
        dates: [{ year: 1976, month: 10, day: 12 }],
      },
      {
        title: '三、袁昌福召集的反革命应变会',
        authors: ['袁昌福'],
        page_start: 7,
        page_end: 20,
        dates: [{ year: 1976, month: 10, day: 15 }],
      },
      {
        title: '三、袁昌福召集的反革命应变会',
        authors: ['袁昌福'],
        page_start: 20,
        page_end: 26,
        dates: [{ year: 1976, month: 10, day: 15 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/8fda3eec-f025-406a-9c1e-e82a5465a0a6',
};
