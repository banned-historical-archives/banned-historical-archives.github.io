export default {
  entity: {
    id: '8b086210-ac2e-4c1f-8c24-1d22cda94649',
    name: '参考案例',
    internal: false,
    official: false,
    type: 'img',
    author: '中共上海市委揭批“四人帮”运动办公室',
    files: new Array(23)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/8b086210-ac2e-4c1f-8c24-1d22cda94649/${
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
        title: '通知',
        authors: ['中共上海市委揭批“四人帮”运动办公室'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1978, month: 11, day: 20 }],
      },
      {
        title: '关于续中一同志问题的审查结论',
        authors: ['中共上海市委揭批“四人帮”运动办公室'],
        page_start: 3,
        page_end: 6,
        dates: [{ year: 1978, month: 11 }],
      },
      {
        title: '关于沈友根同志问题的审查结论',
        authors: ['中共上海市委揭批“四人帮”运动办公室'],
        page_start: 7,
        page_end: 9,
        dates: [{ year: 1978, month: 11 }],
      },
      {
        title: '关于吕应潮同志问题的审查结论',
        authors: ['中共上海市委揭批“四人帮”运动办公室'],
        page_start: 9,
        page_end: 11,
        dates: [{ year: 1978, month: 11 }],
      },
      {
        title: '关于欧阳靖同志问题的审查结论',
        authors: ['中共上海市委揭批“四人帮”运动办公室'],
        page_start: 11,
        page_end: 14,
        dates: [{ year: 1978, month: 11 }],
      },
      {
        title: '关于赵玉树同志问题的审查结论',
        authors: ['中共上海市委揭批“四人帮”运动办公室'],
        page_start: 14,
        page_end: 16,
        dates: [{ year: 1978, month: 11 }],
      },
      {
        title: '关于陆明成同志问题的审查结论',
        authors: ['中共上海市委揭批“四人帮”运动办公室'],
        page_start: 17,
        page_end: 19,
        dates: [{ year: 1978, month: 11 }],
      },
      {
        title: '关于朱菊英同志问题的审查结论',
        authors: ['中共上海市委揭批“四人帮”运动办公室'],
        page_start: 20,
        page_end: 21,
        dates: [{ year: 1978, month: 11 }],
      },
      {
        title: '关于曹渊同志问题的审查结论',
        authors: ['中共上海市委揭批“四人帮”运动办公室'],
        page_start: 22,
        page_end: 23,
        dates: [{ year: 1978, month: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/8b086210-ac2e-4c1f-8c24-1d22cda94649',
};
