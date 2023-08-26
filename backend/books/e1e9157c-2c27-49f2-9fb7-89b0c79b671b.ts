export default {
  entity: {
    id: 'e1e9157c-2c27-49f2-9fb7-89b0c79b671b',
    name: '红旗一九六五年增刊第一号',
    internal: false,
    official: false,
    type: 'pdf',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/e1e9157c-2c27-49f2-9fb7-89b0c79b671b.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title:
          '农民粉碎农村魔鬼——关于西瓜哇农民和农民运动情况调查结果的简要报告',
        authors: ['迪·努·艾地'],
        page_start: 3,
        page_end: 54,
        dates: [{ year: 1965 }],
      },
      {
        title: '南安由县甘当奥尔区东埃列丹乡的阶级划分',
        authors: [],
        page_start: 54,
        page_end: 55,
        dates: [{ year: 1965 }],
      },
      {
        title: '牙律县瓦纳拉查区德卡尔沙里乡雇农、贫农、中农和富农的收支',
        authors: [],
        page_start: 55,
        page_end: 57,
        dates: [{ year: 1965 }],
      },
    ],
    ocr: { content_thresholds: [0.07, 0.165, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/e1e9157c-2c27-49f2-9fb7-89b0c79b671b.pdf',
};
