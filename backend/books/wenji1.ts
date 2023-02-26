export default {
  entity: {
    id: 'wenji1',
    type: 'pdf',
    name: '毛泽东文集第一卷（1999）',
    internal: false,
    official: true,
    author: '中央文献研究室',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives9/main/books/wenji1.pdf',
  },
  parser_option: {
    page_limits: [[14, 526]],
    page_width: 435.2,
    content_min_x: 74.5,
  },
  parser_id: 'wenji',
  path: '/archives9/books/wenji1.pdf',
};
