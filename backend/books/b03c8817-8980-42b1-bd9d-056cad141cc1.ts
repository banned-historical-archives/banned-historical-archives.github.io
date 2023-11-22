export default {
  entity: {
    id: 'b03c8817-8980-42b1-bd9d-056cad141cc1',
    name: '情况交流（17）',
    internal: false,
    official: false,
    type: 'img',
    author: '浙江省联总《情况交流》编辑组',
    files: new Array(8)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/b03c8817-8980-42b1-bd9d-056cad141cc1/${
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
          '狠狠打击一小撮阶级敌人，煞住资产阶级的歪风邪气，全面落实党中央“七·二三”布告！——王洪文同志在“上海军民坚决拥护党中央‘七·二三’布告大会上的讲话',
        authors: ['王洪文'],
        page_start: 1,
        page_end: 5,
        dates: [{ year: 1969, month: 8, day: 1 }],
      },
      {
        title: '剥开画皮，还其原型——揭露方剑文在高湖公社的罪行',
        authors: ['诸暨高湖公社“红司”'],
        page_start: 5,
        page_end: 8,
        dates: [{ year: 1969, month: 8, day: 13 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/b03c8817-8980-42b1-bd9d-056cad141cc1',
};
