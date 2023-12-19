export default {
  entity: {
    id: '6217a650-402c-431d-bc67-8fb48f4f35d2',
    name: '邓小平言论摘录（续编）（1976.4）',
    internal: false,
    official: false,
    type: 'img',
    author: '北京大学、清华大学材料组编，1976.4',
    files: new Array(17)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/6217a650-402c-431d-bc67-8fb48f4f35d2/${
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
        title: '邓小平在万里同志向国务院汇报××铁路局情况时的插话',
        authors: ['邓小平'],
        page_start: 3,
        page_end: 4,
        dates: [{ year: 1975, month: 3, day: 25 }],
      },
      {
        title: '邓小平接见×××、×××同志时的谈话',
        authors: ['邓小平'],
        page_start: 4,
        page_end: 6,
        dates: [{ year: 1975, month: 8, day: 6 }],
      },
      {
        title: '邓小平通知×××同志到××省委工作时的谈话',
        authors: ['邓小平'],
        page_start: 6,
        page_end: 6,
        dates: [{ year: 1975, month: 9, day: 21 }],
      },
      {
        title: '邓小平在中央农村工作座谈会预备会上的讲话',
        authors: ['邓小平'],
        page_start: 6,
        page_end: 7,
        dates: [{ year: 1975, month: 9, day: 22 }],
      },
      {
        title: '邓小平在研究××省委领导班子会议上的讲话',
        authors: ['邓小平'],
        page_start: 7,
        page_end: 7,
        dates: [{ year: 1975, month: 10, day: 12 }],
      },
      {
        title: '胡乔木同志揭发的邓小平的言论',
        authors: ['胡乔木'],
        page_start: 7,
        page_end: 9,
        dates: [{ year: 1976, month: 3, day: 23 }],
      },
      {
        title: 'XXX同志揭发的邓小平在中央农村工作座谈会期间的讲话',
        authors: [],
        page_start: 9,
        page_end: 11,
        dates: [{ year: 1976, month: 3, day: 7 }],
      },
      {
        title: '×××同志揭发的邓小平的言论',
        authors: [],
        page_start: 11,
        page_end: 12,
        dates: [{ year: 1976, month: 3, day: 11 }],
      },
      {
        title: '邓小平在接见全国工业书记会议代表时的讲话',
        authors: ['邓小平'],
        page_start: 12,
        page_end: 12,
        dates: [{ year: 1975, month: 3, day: 5 }],
      },
      {
        title: '邓小平在国务院办公会议上的讲话',
        authors: ['邓小平'],
        page_start: 12,
        page_end: 13,
        dates: [{ year: 1975, month: 5, day: 21 }],
      },
      {
        title: '邓小平的其他言论',
        authors: ['邓小平'],
        page_start: 13,
        page_end: 17,
        dates: [{ year: 1976 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/6217a650-402c-431d-bc67-8fb48f4f35d2',
};
