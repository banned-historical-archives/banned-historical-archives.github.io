export default {
  entity: {
    id: 'd9c809e5-3d65-415e-a120-b9c21e36da01',
    name: '学习文件（1）',
    internal: false,
    official: false,
    type: 'img',
    author: '红卫兵山东文艺革命造反司令部政治宣传部',
    files: new Array(12)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d9c809e5-3d65-415e-a120-b9c21e36da01/${
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
          '中央首长江青、伯达、文元、肖力同志接见浙江省革委会副主任、“省联总”主要负责人张永生和省革委会委员、“省联总”常委杜英信同志谈话纪要',
        authors: ['陈伯达', '江青', '姚文元', '肖力'],
        page_start: 1,
        page_end: 5,
        dates: [{ year: 1968, month: 5, day: 19 }],
      },
      {
        title: '上海市革委会负责同志谈文艺界有关问题',
        authors: [],
        page_start: 5,
        page_end: 8,
        dates: [{ year: 1968, month: 6, day: 17 }],
      },
      {
        title: '我们是怎样依靠群众加强调查研究工作稳、准、狠地打击敌人的',
        authors: [
          '济南市电影公司革命委员会筹委会',
          '红文司济南司令部电影公司挺进战斗队',
        ],
        page_start: 9,
        page_end: 12,
        dates: [{ year: 1968, month: 6, day: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/d9c809e5-3d65-415e-a120-b9c21e36da01',
};
