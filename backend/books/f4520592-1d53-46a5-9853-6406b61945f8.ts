export default {
  entity: {
    id: 'f4520592-1d53-46a5-9853-6406b61945f8',
    name: '夏邦银、朱洪霞、胡厚民等人罪行材料（街头大字报、传单节录）',
    internal: false,
    official: true,
    type: 'img',
    author: '中共武汉市委材料组',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/f4520592-1d53-46a5-9853-6406b61945f8/1.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/f4520592-1d53-46a5-9853-6406b61945f8/2.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/f4520592-1d53-46a5-9853-6406b61945f8/3.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/f4520592-1d53-46a5-9853-6406b61945f8/4.png',
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
        dates: [{ year: 1977, month: 1 }],
      },
      {
        title: '关于批邓反击右倾翻案风斗争的几点看法（节录）',
        authors: ['夏邦银', '朱洪霞', '胡厚民'],
        page_start: 3,
        page_end: 4,
        ocr_exceptions: { '4': { content_thresholds: [0, 0.8, 0, 0.5] } },
        dates: [{ year: 1976 }],
      },
      {
        title: '给伟大领袖毛主席的一封信',
        alias: '给伟大领袖毛主席的一封信（节录）',
        authors: ['夏邦银', '朱洪霞', '胡厚民'],
        page_start: 4,
        page_end: 4,
        ocr_exceptions: { '4': { content_thresholds: [0, 0, 0, 0.5] } },
        dates: [{ year: 1976, month: 2, day: 23 }],
      },
    ],
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/f4520592-1d53-46a5-9853-6406b61945f8',
};
