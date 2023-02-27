export default {
  entity: {
    id: 'd65f2d46-f659-4061-83b6-ab5386ac2dba',
    name: '怎样理解资产阶级就在共产党内——北京市第三次理论讨论会的五个发言材料（北京人民出版社1976年）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '北京人民出版社、中共北京市委宣传组，1976.4.20',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/d65f2d46-f659-4061-83b6-ab5386ac2dba.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '说明',
        authors: ['中共北京市委宣传组'],
        page_start: 2,
        page_end: 2,
        tags: [
          { name: '北京人民出版社', type: 'issuer' },
          { name: '中共北京市委宣传组', type: 'issuer' },
        ],
        dates: [{ year: 1976, month: 4, day: 20 }],
      },
      {
        title: '怎样理解资产阶级就在共产党内的科学论断',
        authors: ['理论讨论会第三组'],
        page_start: 5,
        page_end: 11,
        tags: [
          { name: '北京人民出版社', type: 'issuer' },
          { name: '中共北京市委宣传组', type: 'issuer' },
        ],
        dates: [{ year: 1976, month: 6 }],
      },
      {
        title: '从阶级关系的变化看党内资产阶级的形成',
        authors: ['理论讨论会第三组'],
        page_start: 12,
        page_end: 19,
        tags: [
          { name: '北京人民出版社', type: 'issuer' },
          { name: '中共北京市委宣传组', type: 'issuer' },
        ],
        dates: [{ year: 1976, month: 6 }],
      },
      {
        title: '从经济地位和政治态度看走资派就是党内资产阶级',
        authors: ['理论讨论会第二组'],
        page_start: 20,
        page_end: 28,
        tags: [
          { name: '北京人民出版社', type: 'issuer' },
          { name: '中共北京市委宣传组', type: 'issuer' },
        ],
        dates: [{ year: 1976, month: 6 }],
      },
      {
        title: '走资派的特点和活动规律',
        authors: ['理论讨论会第一组'],
        page_start: 29,
        page_end: 40,
        tags: [
          { name: '北京人民出版社', type: 'issuer' },
          { name: '中共北京市委宣传组', type: 'issuer' },
        ],
        dates: [{ year: 1976, month: 6 }],
      },
      {
        title: '毛主席关于资产阶级就在共产党内的英明论断是对马列主义的重大发展',
        authors: ['理论讨论会第四组'],
        page_start: 41,
        page_end: 48,
        tags: [
          { name: '北京人民出版社', type: 'issuer' },
          { name: '中共北京市委宣传组', type: 'issuer' },
        ],
        dates: [{ year: 1976, month: 6 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.12, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/d65f2d46-f659-4061-83b6-ab5386ac2dba.pdf',
};
