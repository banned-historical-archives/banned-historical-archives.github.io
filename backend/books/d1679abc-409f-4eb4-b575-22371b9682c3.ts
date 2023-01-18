export default {
  entity: {
    id: 'd1679abc-409f-4eb4-b575-22371b9682c3',
    name: '张春桥关锋同志接见福建部分赴京革命同学的讲话',
    internal: true,
    official: true,
    type: 'img',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d1679abc-409f-4eb4-b575-22371b9682c3/1.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d1679abc-409f-4eb4-b575-22371b9682c3/2.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d1679abc-409f-4eb4-b575-22371b9682c3/3.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d1679abc-409f-4eb4-b575-22371b9682c3/4.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d1679abc-409f-4eb4-b575-22371b9682c3/5.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d1679abc-409f-4eb4-b575-22371b9682c3/6.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d1679abc-409f-4eb4-b575-22371b9682c3/7.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d1679abc-409f-4eb4-b575-22371b9682c3/8.jpg',
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title: '张春桥关锋同志接见福建部分赴京革命同学的讲话',
        authors: ['张春桥', '关锋'],
        page_start: 1,
        page_end: 4,
        ocr_exceptions: {
          '2': { content_thresholds: [0, 0, 0, 0.04] },
          '3': { content_thresholds: [0, 0, 0.06, 0] },
          '4': { content_thresholds: [0, 0.86, 0, 0] },
        },
        dates: [{ year: 1966, month: 10, day: 7 }],
      },
      {
        title: '什么是“大无畏”',
        authors: ['工农兵音乐学院'],
        page_start: 4,
        page_end: 4,
        ocr_exceptions: { '4': { content_thresholds: [0.14, 0, 0, 0.06] } },
        dates: [{ year: 1966 }],
      },
      {
        title: '关锋在北京地质学院同学座谈会上的讲话',
        alias: '关锋同志在地质学院同学座谈会上讲话',
        authors: ['关锋'],
        page_start: 5,
        page_end: 7,
        ocr_exceptions: { '7': { content_thresholds: [0, 0.28, 0, 0] } },
        dates: [{ year: 1966, month: 9, day: 28 }],
      },
      {
        title:
          '北京市委书记雍文涛同志在“首都大专院校红卫兵捍卫毛泽东思想捍卫十六条联络委员会”于清华大学召开的“向右倾机会主义路线猛烈开火——彻底批判谭力夫发言大会”上的讲话',
        authors: ['雍文涛'],
        page_start: 8,
        page_end: 8,
        dates: [{ year: 1966, month: 9, day: 28 }],
      },
    ],
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/d1679abc-409f-4eb4-b575-22371b9682c3',
};
