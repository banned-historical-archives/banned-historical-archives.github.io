export default {
  entity: {
    id: '167d2a20-d096-4949-a8c1-2b07e666de08',
    name: '《工人造反报》第115期',
    internal: false,
    official: false,
    type: 'img',
    author: '张春桥、工总司',
    files: new Array(4)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/167d2a20-d096-4949-a8c1-2b07e666de08/${
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
        title: '张春桥同志在“积代会”上的讲话',
        authors: ['张春桥'],
        page_start: 1,
        page_end: 3,
        dates: [{ year: 1968, month: 4, day: 4 }],
      },
      {
        title: '关于认真学好用好毛主席最新指示的通知',
        authors: ['上海工人革命造反总司令部'],
        page_start: 1,
        page_end: 3,
        dates: [{ year: 1968, month: 4, day: 1 }],
      },
      {
        title:
          '一个有坚强无产阶级党性的共产党员——记革命领导干部于兴洲的先进事迹',
        authors: ['《工人造反报》编辑部'],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1968, month: 4, day: 1 }],
      },
      {
        title: '关于交运局某些人非法绑架交运联络站负责人事件的通报',
        authors: ['上海工人革命造反总司令部'],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1968, month: 4, day: 3 }],
      },
    ],
    ocr: { auto_vsplit: false, vsplit: 0.25 },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/167d2a20-d096-4949-a8c1-2b07e666de08',
};
