export default {
  entity: {
    id: '6102471e-c881-4a39-b8e5-2f2d58cfd666',
    name: '江青、张春桥、姚文元、王洪文在中央政治局同志接见电影、戏剧、音乐工作者座谈会上的讲话记录稿',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(15)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/6102471e-c881-4a39-b8e5-2f2d58cfd666/${
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
        title:
          '江青、张春桥、姚文元、王洪文在中央政治局同志接见电影、戏剧、音乐工作者座谈会上的讲话记录稿',
        authors: ['江青', '张春桥', '姚文元', '王洪文'],
        page_start: 1,
        page_end: 15,
        dates: [{ year: 1973, month: 1, day: 1 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/6102471e-c881-4a39-b8e5-2f2d58cfd666',
};
