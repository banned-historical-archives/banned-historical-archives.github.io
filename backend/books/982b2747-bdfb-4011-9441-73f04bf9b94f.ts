export default {
  entity: {
    id: '982b2747-bdfb-4011-9441-73f04bf9b94f',
    name: '夏邦银、朱洪霞、胡厚民等人罪行材料（街头大字报节录）',
    internal: false,
    official: true,
    type: 'img',
    author: '中共武汉市委材料组',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/982b2747-bdfb-4011-9441-73f04bf9b94f/1.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/982b2747-bdfb-4011-9441-73f04bf9b94f/2.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/982b2747-bdfb-4011-9441-73f04bf9b94f/3.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/982b2747-bdfb-4011-9441-73f04bf9b94f/4.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/982b2747-bdfb-4011-9441-73f04bf9b94f/5.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/982b2747-bdfb-4011-9441-73f04bf9b94f/6.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/982b2747-bdfb-4011-9441-73f04bf9b94f/7.png',
  },
  parser_option: {
    page_limits: [],
    ext: 'png',
    articles: [
      {
        title: '按',
        authors: ['中共武汉市委材料组'],
        page_start: 2,
        page_end: 2,
        ocr_exceptions: { '2': { content_thresholds: [0, 0, 0, 0.5] } },
        dates: [{ year: 1977, month: 1 }],
      },
      {
        title: '注意国内问题按既定方针办',
        authors: ['夏邦银', '朱洪霞', '胡厚民', '武汉印刷厂革委会'],
        page_start: 2,
        page_end: 5,
        ocr_exceptions: { '2': { content_thresholds: [0, 0, 0.5, 0] } },
        dates: [{ year: 1976, month: 9, day: 9 }],
      },
      {
        title: '老狗们在想什么（节录）',
        authors: ['夏邦银', '朱洪霞', '胡厚民', '晓能屋'],
        page_start: 5,
        page_end: 6,
        ocr_exceptions: {
          '5': { content_thresholds: [0, 0, 0.5, 0] },
          '6': { content_thresholds: [0, 0, 0, 0.5] },
        },
        dates: [{ year: 1976 }],
      },
      {
        title: '读报有感（节录）——从西哈努克退休谈起',
        authors: ['夏邦银', '朱洪霞', '胡厚民', '吴仁筱'],
        page_start: 6,
        page_end: 7,
        ocr_exceptions: { '7': { content_thresholds: [0, 0, 0, 0.5] } },
        dates: [{ year: 1976 }],
      },
    ],
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/982b2747-bdfb-4011-9441-73f04bf9b94f',
};
