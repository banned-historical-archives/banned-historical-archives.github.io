export default {
  entity: {
    id: '44985f9d-f460-471e-8862-6ccda78d534e',
    name: '总理、伯达、康生、江青、姚文元同志接见南京军区、江苏赴京代表团讲话纪要（1968.1.28）',
    internal: false,
    official: true,
    type: 'img',
    author:
      '周恩来、陈伯达、康生、江青、姚文元，江苏省军事管制委员会印、南京市新华书店翻印',
    files: new Array(8)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/44985f9d-f460-471e-8862-6ccda78d534e/${
            idx + 1
          }.jpg`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title:
          '总理、伯达、康生、江青、姚文元同志接见南京军区、江苏赴京代表团讲话纪要',
        authors: ['周恩来', '陈伯达', '康生', '江青', '姚文元'],
        page_start: 1,
        page_end: 8,
        dates: [{ year: 1968, month: 1, day: 28 }],
      },
    ],
    ocr: { auto_vsplit: true, vsplit: 0.5 },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/44985f9d-f460-471e-8862-6ccda78d534e',
};
