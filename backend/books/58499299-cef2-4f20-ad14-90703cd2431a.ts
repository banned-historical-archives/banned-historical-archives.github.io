export default {
  entity: {
    id: '58499299-cef2-4f20-ad14-90703cd2431a',
    name: '姚文元在欢庆黄浦区革命委员会成立大会上的讲话和一篇《新北大》社论（1967.3.20）',
    internal: false,
    official: false,
    type: 'img',
    author: '摘要红卫战报、电气革命造反组翻印',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/58499299-cef2-4f20-ad14-90703cd2431a/1.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/58499299-cef2-4f20-ad14-90703cd2431a/2.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/58499299-cef2-4f20-ad14-90703cd2431a/3.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/58499299-cef2-4f20-ad14-90703cd2431a/4.jpg',
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title: '姚文元在欢庆黄浦区革命委员会成立大会上的讲话',
        authors: ['姚文元'],
        page_start: 1,
        page_end: 4,
        tags: [
          { name: '红卫战报', type: 'issuer' }, // 发行方/出版方
          { name: '电气革命造反组', type: 'reprint' }, // 翻印/传抄
        ],
        dates: [{ year: 1967, month: 3, day: 20 }],
      },
      {
        title: '彻底粉碎反革命复辟阴谋',
        authors: ['《新北大》社论'],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1967, month: 3, day: 20 }],
      },
    ],
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/58499299-cef2-4f20-ad14-90703cd2431a',
};
