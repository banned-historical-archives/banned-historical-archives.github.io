export default {
  entity: {
    id: '828075b4-ffc8-4eb9-86e1-a766a31006ec',
    name: '学习材料（30）',
    internal: false,
    official: false,
    type: 'img',
    author: '山东革命工人造反总指挥部济南总指挥部宣传部',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/828075b4-ffc8-4eb9-86e1-a766a31006ec/${
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
        title: '张春桥同志在驻浙部队团以上干部会议上的讲话',
        authors: ['张春桥'],
        page_start: 1,
        page_end: 2,
        dates: [],
      },
      {
        title:
          '副总参谋长、北京卫戍区司令员温玉成同志在北京部队支左干部会议上的讲话',
        authors: ['温玉成'],
        page_start: 2,
        page_end: 3,
        dates: [{ year: 1968, month: 3, day: 28 }],
      },
      {
        title: '在深入开展革命大批判的基础上认真地做好清理阶级队伍的工作',
        authors: ['《文汇报》社论'],
        page_start: 3,
        page_end: 4,
        dates: [{ year: 1968, month: 5, day: 2 }],
      },
      {
        title: '关于清理阶级队伍问题',
        authors: ['《贵州工人》'],
        page_start: 4,
        page_end: 5,
        dates: [{ year: 1968, month: 4, day: 26 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/828075b4-ffc8-4eb9-86e1-a766a31006ec',
};
