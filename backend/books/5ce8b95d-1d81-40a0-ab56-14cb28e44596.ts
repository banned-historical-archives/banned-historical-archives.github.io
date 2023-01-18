export default {
  entity: {
    id: '5ce8b95d-1d81-40a0-ab56-14cb28e44596',
    name: '红旗一九六九年第二期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/5ce8b95d-1d81-40a0-ab56-14cb28e44596.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '走投无路的自供状——评尼克松的“就职演说”和苏修叛徒集团的无耻捧场',
        authors: ['《人民日报》编辑部', '《红旗》杂志编辑部'],
        page_start: 8,
        page_end: 13,
        dates: [{ year: 1969 }],
      },
      {
        title: '“谁说了算？”',
        authors: ['沙林云'],
        page_start: 18,
        page_end: 21,
        dates: [{ year: 1969 }],
      },
      {
        title: '急躁、坐等，还是促进？——如何正对看待知识分子',
        authors: ['龚群', '朝晖'],
        page_start: 22,
        page_end: 25,
        dates: [{ year: 1969 }],
      },
      {
        title: '革命舆论的战斗力量',
        authors: ['吉扬文'],
        page_start: 26,
        page_end: 28,
        dates: [{ year: 1969 }],
      },
      {
        title:
          '按照毛主席的“五·七”指示改造集镇——辽宁省盘锦垦区田庄台镇的调查报告',
        authors: ['辽宁省革委会', '盘锦垦区革委会', '解放军某部', '新华社记者'],
        page_start: 29,
        page_end: 32,
        dates: [{ year: 1969 }],
      },
      {
        title:
          '“厂办校，两挂钩”——甘肃省兰州市关于城市中学走工厂办校道路的调查报告',
        authors: ['甘肃省革命委员会', '兰州市革命委员会'],
        page_start: 33,
        page_end: 38,
        dates: [{ year: 1969 }],
      },
      {
        title: '坚定不移地突出无产阶级政治',
        authors: ['梁芝禹'],
        page_start: 39,
        page_end: 41,
        dates: [{ year: 1969 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.15, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/5ce8b95d-1d81-40a0-ab56-14cb28e44596.pdf',
};
