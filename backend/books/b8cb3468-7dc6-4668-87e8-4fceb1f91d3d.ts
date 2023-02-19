export default {
  entity: {
    id: 'b8cb3468-7dc6-4668-87e8-4fceb1f91d3d',
    name: '“四人帮”罪行材料（一）（1976.12）',
    internal: true,
    official: true,
    type: 'img',
    author: '总参谋部政治部，1976.12',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d/1.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d/2.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d/3.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d/4.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d/5.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d/6.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d/7.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d/8.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d/9.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d/10.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d/11.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d/12.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d/13.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d/14.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d/15.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d/16.png',
  },
  parser_option: {
    page_limits: [],
    ext: 'png',
    articles: [
      {
        title: '江青致王洪文叶剑英张春桥邓小平的信',
        alias: '江青一九七四年一月二十四日给中央军委的信',
        authors: ['江青'],
        page_start: 2,
        page_end: 3,
        ocr_exceptions: { '3': { content_thresholds: [0, 0.11, 0, 0.5] } },
        dates: [{ year: 1974, month: 1, day: 24 }],
      },
      {
        title: '迟群、谢静宜在军委直属单位批林批孔报告会上的讲话',
        alias:
          '迟群、谢静宜一九七四年一月二十四日在军委直属单位批林批孔报告会上的讲话',
        authors: ['迟群', '谢静宜'],
        page_start: 3,
        page_end: 16,
        ocr_exceptions: { '3': { content_thresholds: [0, 0.11, 0.5, 0] } },
        dates: [{ year: 1974, month: 1, day: 24 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.11, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d',
};
