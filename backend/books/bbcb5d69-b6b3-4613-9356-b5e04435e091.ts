export default {
  entity: {
    id: 'bbcb5d69-b6b3-4613-9356-b5e04435e091',
    name: '揭发材料——上海市委机关揭发王、张、江、姚“四人帮”反党集团及其爪牙罪行大字报摘抄部分人员交待材料摘要',
    internal: false,
    official: false,
    type: 'img',
    author: '合肥供电局工会',
    files: new Array(54)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/bbcb5d69-b6b3-4613-9356-b5e04435e091/${
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
        title: '一九七六年十月廿二日凌晨四点卅分贺汝义对“四人帮”揭发交待',
        authors: ['贺汝义'],
        page_start: 3,
        page_end: 7,
        dates: [{ year: 1976, month: 10, day: 12 }],
      },
      {
        title: '编者按',
        authors: ['合肥供电局工会'],
        page_start: 8,
        page_end: 8,
        dates: [{ year: 1976, month: 11, day: 16 }],
      },
      {
        title: '“四人帮”及其黑爪牙攻击迫害周总理罪行材料汇编',
        authors: ['某校'],
        page_start: 9,
        page_end: 18,
        dates: [{ year: 1976, month: 11, day: 16 }],
      },
      {
        title: '上海机床厂十条经验',
        authors: ['某校'],
        page_start: 19,
        page_end: 20,
        dates: [{ year: 1976, month: 11, day: 16 }],
      },
      {
        title: '补遗',
        authors: ['某校'],
        page_start: 21,
        page_end: 23,
        dates: [{ year: 1976, month: 11, day: 16 }],
      },
      {
        title: '“四人帮”及爪牙的罪行大字报',
        authors: ['某校'],
        page_start: 24,
        page_end: 32,
        dates: [{ year: 1976, month: 11, day: 16 }],
      },
      {
        title: '市委写作组揭发声讨“四人帮”会议纪要',
        authors: ['王绍玺', '顾澄海', '王守稼', '陈冀德'],
        page_start: 33,
        page_end: 40,
        dates: [{ year: 1976, month: 10, day: 21 }],
      },
      {
        title: '“四人帮”与上海市委某些人',
        authors: [],
        page_start: 41,
        page_end: 46,
        dates: [{ year: 1976 }],
      },
      {
        title: '关于徐景贤反总理的一些罪行',
        authors: [],
        page_start: 47,
        page_end: 49,
        dates: [{ year: 1976 }],
      },
      {
        title: '新资产阶级分子王洪文的滔天罪行',
        authors: ['市委招待处'],
        page_start: 50,
        page_end: 51,
        dates: [{ year: 1976 }],
      },
      {
        title: '朱永嘉为“四人帮”炮制吕后文章的罪恶阴谋',
        authors: ['潘富恩'],
        page_start: 51,
        page_end: 52,
        dates: [{ year: 1976 }],
      },
      {
        title: '朱永嘉分裂党的的阴谋活动',
        authors: [],
        page_start: 52,
        page_end: 52,
        dates: [{ year: 1976 }],
      },
      {
        title: '反面材料',
        authors: ['上海师范大学工宣对团部'],
        page_start: 53,
        page_end: 54,
        dates: [{ year: 1976 }],
      },
    ],
    ocr: undefined,
    pdf_no_ocr: false,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives17/bbcb5d69-b6b3-4613-9356-b5e04435e091',
};
