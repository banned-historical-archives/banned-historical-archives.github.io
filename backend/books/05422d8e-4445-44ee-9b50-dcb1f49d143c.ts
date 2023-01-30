export default {
  entity: {
    id: '05422d8e-4445-44ee-9b50-dcb1f49d143c',
    name: '唐岐山同志若干讲话',
    internal: true,
    official: true,
    type: 'img',
    author: '唐岐山，复辟后“揭发”材料',
    files: new Array(12)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/05422d8e-4445-44ee-9b50-dcb1f49d143c/${
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
        title: '唐岐山在一次座谈会上的谈话（摘录）',
        authors: ['唐岐山'],
        page_start: 1,
        page_end: 1,
        ocr_exceptions: { '1': { auto_vsplit: false } },
        dates: [{ year: 1976, month: 3, day: 8 }],
      },
      {
        title: '唐歧山在市委常委会议上的讲话（摘录）',
        authors: ['唐岐山'],
        page_start: 2,
        page_end: 3,
        dates: [{ year: 1976, month: 3, day: 19 }],
      },
      {
        title: '唐歧山同杨顺阳、吴金勇同志的谈话（摘录）',
        authors: ['唐岐山'],
        page_start: 3,
        page_end: 3,
        dates: [{ year: 1976, month: 3, day: 19 }],
      },
      {
        title: '唐歧山三月份的两次谈话',
        authors: ['唐岐山'],
        page_start: 3,
        page_end: 3,
        dates: [{ year: 1976, month: 3 }],
      },
      {
        title: '唐歧山在一次干部座谈上讲话（要点）',
        authors: ['唐岐山'],
        page_start: 3,
        page_end: 5,
        dates: [{ year: 1976, month: 3, day: 21 }],
      },
      {
        title: '唐歧山在郑州市基层单位党委正副书记会议上的讲话（摘录）',
        authors: ['唐岐山'],
        page_start: 5,
        page_end: 5,
        dates: [{ year: 1976, month: 3, day: 27 }],
      },
      {
        title: '唐歧山同常建立同志的几次谈话（摘录）',
        authors: ['唐岐山'],
        page_start: 5,
        page_end: 6,
        dates: [
          { year: 1976, month: 3, day: 23 },
          { year: 1976, month: 3, day: 27 },
          { year: 1976, month: 3, day: 30 },
        ],
      },
      {
        title: '唐岐山与牛岭的几次谈话（摘录）',
        authors: ['唐岐山'],
        page_start: 6,
        page_end: 8,
        dates: [
          { year: 1976, month: 3, day: 28 },
          { year: 1976, month: 4, day: 3 },
          { year: 1976, month: 4, day: 12 },
          { year: 1976, month: 4, day: 15 },
          { year: 1976, month: 7, day: 7 },
        ],
      },
      {
        title: '唐歧山在市委召开的各部、委、局负责同志会议上的讲话（摘录）',
        authors: ['唐岐山'],
        page_start: 8,
        page_end: 9,
        dates: [{ year: 1976, month: 6, day: 22 }],
      },
      {
        title: '唐歧山同志接见周口军分区赴郑汇报团的讲话',
        authors: ['唐岐山'],
        page_start: 9,
        page_end: 10,
        dates: [{ year: 1974, month: 3, day: 30 }],
      },
      {
        title: '唐歧山、董万里同开封市“上访”代表的讲话',
        authors: ['唐岐山'],
        page_start: 10,
        page_end: 12,
        ocr_exceptions: { '12': { auto_vsplit: false } },
        dates: [{ year: 1976, month: 3, day: 9 }],
      },
    ],
    ocr: { auto_vsplit: true, vsplit: 0.5 },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/05422d8e-4445-44ee-9b50-dcb1f49d143c',
};
