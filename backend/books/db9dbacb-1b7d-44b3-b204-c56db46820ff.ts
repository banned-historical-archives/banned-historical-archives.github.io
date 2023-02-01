export default {
  entity: {
    id: 'db9dbacb-1b7d-44b3-b204-c56db46820ff',
    name: '林副主席的指示（1966）',
    internal: false,
    official: false,
    type: 'img',
    author:
      '技术物理系《东风战斗队》、北京地质学院东方红公社、北航《红方》六盘山游击队、北京工艺美术学校《井冈山》战斗小组',
    files: new Array(4)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/db9dbacb-1b7d-44b3-b204-c56db46820ff/${
            idx + 1
          }.jpg`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title: '林副主席的指示——把学习毛主席著作提高到新阶段',
        authors: ['林彪'],
        page_start: 1,
        page_end: 3,
        dates: [{ year: 1966 }],
      },
      {
        title: '蟹的感想',
        authors: ['姚文元'],
        page_start: 3,
        page_end: 3,
        dates: [],
      },
      {
        title: '关锋在北京地质学院同学座谈会上的讲话',
        alias: '关锋同志九月二十八日在地质学院同学座谈会上的讲话（摘录）',
        authors: ['关锋'],
        page_start: 3,
        page_end: 3,
        dates: [{ year: 1966, month: 9, day: 28 }],
      },
      {
        title: '朱德在北大的讲话',
        alias: '朱德同志在北大的讲话——《横扫旧的社会习惯势力》',
        authors: ['朱德'],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1966, month: 9, day: 25 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/db9dbacb-1b7d-44b3-b204-c56db46820ff',
};
