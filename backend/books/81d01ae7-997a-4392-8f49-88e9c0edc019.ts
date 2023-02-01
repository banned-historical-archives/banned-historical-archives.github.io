export default {
  entity: {
    id: '81d01ae7-997a-4392-8f49-88e9c0edc019',
    name: '王力同志十月十七日在政协礼堂的讲话记录（1966.10.17）',
    internal: false,
    official: false,
    type: 'img',
    author:
      '清华大学井冈山红卫兵、中山医学院《红色女兵》、新北大《长征》战斗队',
    files: new Array(6)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/81d01ae7-997a-4392-8f49-88e9c0edc019/${
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
        title: '王力同志十月十七日的讲话',
        alias: '王力同志十月十七日在政协礼堂的讲话记录',
        authors: ['王力'],
        page_start: 1,
        page_end: 4,
        dates: [{ year: 1966, month: 10, day: 17 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/81d01ae7-997a-4392-8f49-88e9c0edc019',
};
