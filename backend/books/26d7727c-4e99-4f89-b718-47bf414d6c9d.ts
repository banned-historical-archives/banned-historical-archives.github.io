export default {
  entity: {
    id: '26d7727c-4e99-4f89-b718-47bf414d6c9d',
    name: '邓小平与机会主义路线头子言论对照（初编）',
    internal: false,
    official: false,
    type: 'img',
    author: '北京大学、清华大学材料组',
    files: new Array(20)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/26d7727c-4e99-4f89-b718-47bf414d6c9d/${
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
        title: '邓小平反对以毛主席为首的党中央，反对马列主义、毛泽东思想',
        authors: ['北京大学材料组', '清华大学材料组'],
        page_start: 3,
        page_end: 5,
        dates: [{ year: 1976, month: 5 }],
      },
      {
        title: '邓小平反对以阶级斗争为纲，否定无产阶级专政',
        authors: ['北京大学清华大学材料组'],
        page_start: 6,
        page_end: 10,
        dates: [{ year: 1976, month: 5 }],
      },
      {
        title: '邓小平反对无产阶级政治挂帅，鼓吹“唯生产力论”',
        authors: ['北京大学清华大学材料组'],
        page_start: 10,
        page_end: 13,
        dates: [{ year: 1976, month: 5 }],
      },
      {
        title: '邓小平反对无产阶级文化大革命，猖狂反攻倒算',
        authors: ['北京大学清华大学材料组'],
        page_start: 14,
        page_end: 16,
        dates: [{ year: 1976, month: 5 }],
      },
      {
        title: '邓小平反对上层建筑领域的革命，扼杀社会主义新生事物',
        authors: ['北京大学清华大学材料组'],
        page_start: 16,
        page_end: 20,
        dates: [{ year: 1976, month: 5 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/26d7727c-4e99-4f89-b718-47bf414d6c9d',
};
