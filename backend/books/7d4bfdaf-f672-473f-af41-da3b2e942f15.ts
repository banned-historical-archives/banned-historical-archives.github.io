export default {
  entity: {
    id: '7d4bfdaf-f672-473f-af41-da3b2e942f15',
    name: '红旗一九六八年第一期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/7d4bfdaf-f672-473f-af41-da3b2e942f15.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '工人阶级必须领导一切',
        authors: ['姚文元'],
        page_start: 6,
        page_end: 10,
        dates: [{ year: 1968 }],
      },
      {
        title:
          '把新闻战线的大革命进行到底——批判中国赫鲁晓夫反革命修正主义的新闻路线',
        authors: [
          '《人民日报》编辑部',
          '《红旗》杂志编辑部',
          '《解放军报》编辑部',
        ],
        page_start: 11,
        page_end: 23,
        dates: [{ year: 1968 }],
      },
      {
        title: '马蜂窝就是要捅',
        authors: ['《工人造反报》编辑部'],
        page_start: 24,
        page_end: 25,
        dates: [{ year: 1968 }],
      },
      {
        title:
          '在以毛主席为首的无产阶级司令部的领导下团结起来——纪念毛主席《炮打司令部（我的一张大字报）》发表两周年',
        authors: ['《人民日报》编辑部'],
        page_start: 26,
        page_end: 28,
        dates: [{ year: 1968, month: 8, day: 5 }],
      },
      {
        title: '从上海机床厂看培养工程技术人员的道路',
        authors: ['《文汇报》记者', '《新华社》记者'],
        page_start: 29,
        page_end: 34,
        dates: [{ year: 1968, month: 7, day: 22 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.15, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/7d4bfdaf-f672-473f-af41-da3b2e942f15.pdf',
};
