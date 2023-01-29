export default {
  entity: {
    id: '7b1f4ced-1735-462b-a9ce-1737b989f919',
    name: '国务院秘书长周荣鑫同志十月九日在地院的讲话（1966.10.9）',
    internal: false,
    official: false,
    type: 'img',
    author: '周荣鑫、李富春',
    files: new Array(2)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/7b1f4ced-1735-462b-a9ce-1737b989f919/${
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
        title: '国务院秘书长周荣鑫同志十月九日在地院的讲话',
        authors: ['周荣鑫'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1966, month: 10, day: 9 }],
      },
      {
        title:
          '李富春付总理十月九日凌晨召见北京地质学院东方红公社五位代表时作的五点指示',
        authors: ['李富春'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1966, month: 10, day: 9 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/7b1f4ced-1735-462b-a9ce-1737b989f919',
};
