export default {
  entity: {
    id: '0d3234ae-8b97-4a0c-b944-a0fc427e1fca',
    name: '高举马克思列宁毛主义的鲜红旗帜',
    internal: true,
    official: true,
    type: 'pdf',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/0d3234ae-8b97-4a0c-b944-a0fc427e1fca.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '前言',
        authors: ['印度共产党（毛主义）中央委员会'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 2004, month: 9, day: 21 }],
      },
      {
        title: '高举马克思列宁毛主义的鲜红旗帜',
        authors: ['印度共产党（毛主义）中央委员会'],
        page_start: 3,
        page_end: 26,
        dates: [{ year: 2004, month: 9, day: 21 }],
      },
    ],
    ocr: {
      standard_paragraph_merge_strategy_threshold: 0.17,
      differential_paragraph_merge_strategy_threshold: 0,
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/0d3234ae-8b97-4a0c-b944-a0fc427e1fca.pdf',
};
