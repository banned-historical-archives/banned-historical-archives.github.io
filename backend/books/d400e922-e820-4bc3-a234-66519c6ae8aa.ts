export default {
  entity: {
    id: 'd400e922-e820-4bc3-a234-66519c6ae8aa',
    name: '一九七七年湖北省农业学大寨会议典型材料',
    internal: false,
    official: false,
    type: 'img',
    author: '一九七七年湖北省农业学大寨会议秘书处',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/d400e922-e820-4bc3-a234-66519c6ae8aa/${
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
        title: '深揭猛批“四人帮”斩断黑手朱鸿霞',
        authors: ['喻学超'],
        page_start: 1,
        page_end: 5,
        dates: [{ year: 1977, month: 2 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/d400e922-e820-4bc3-a234-66519c6ae8aa',
};
