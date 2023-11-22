export default {
  entity: {
    id: '09e35dcf-32ef-430a-9763-26c685c0ed82',
    name: '揭批“四人帮”材料选编（一）',
    internal: false,
    official: false,
    type: 'img',
    author: '陆军第三十八军政治部',
    files: new Array(45)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/09e35dcf-32ef-430a-9763-26c685c0ed82/${
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
        title: '前言',
        authors: ['陆军第三十八军政治部'],
        page_start: 2,
        page_end: 3,
        dates: [{ year: 1977, month: 5 }],
      },
      {
        title:
          '彻底揭发批判“四人帮”反军乱军的罪行，坚定地执行和捍卫毛主席的建军路线——军领导同志在军区师以上干部集训班批判大会上的发言',
        authors: [],
        page_start: 4,
        page_end: 10,
        dates: [{ year: 1977, month: 5 }],
      },
      {
        title:
          '“四人帮”插手军队的要害是篡党夺权——彻底揭发批判“四人帮”以抓“点”为名，反军乱军的反革命罪行',
        authors: ['军政治部'],
        page_start: 11,
        page_end: 21,
        dates: [{ year: 1977, month: 5 }],
      },
      {
        title:
          '卑鄙的手段，险恶的用心——彻底批判“四人帮”一九七四年七月二十九日窜到我军的反动讲话',
        authors: ['军政治部理论组'],
        page_start: 22,
        page_end: 25,
        dates: [{ year: 1977, month: 5 }],
      },
      {
        title:
          '“四人帮”反军乱军的铁证——从江青的《即兴顺口溜》看她反革命的狼子野心',
        authors: ['军政治部理论组'],
        page_start: 25,
        page_end: 28,
        dates: [{ year: 1977, month: 5 }],
      },
      {
        title:
          '“四人帮”是反军乱军的纵火犯——三三八团八连揭发批判“四人帮”以抓“点”为名，到基层煽风点火的罪行',
        authors: ['一一三师政治部理论组'],
        page_start: 28,
        page_end: 31,
        dates: [{ year: 1976, month: 12, day: 12 }],
      },
      {
        title:
          '决不容许“四人帮”毁我长城——一一二师指战员愤怒批判毒草影片《千秋业》',
        authors: ['一一二师政治部理论组'],
        page_start: 31,
        page_end: 35,
        dates: [{ year: 1977, month: 1, day: 14 }],
      },
      {
        title:
          '乱军师为了篡军——揭发批判王洪文、江青一九七四年七月二十九日保定之行的反革命罪行',
        authors: ['一一四师政治部理论组'],
        page_start: 36,
        page_end: 38,
        dates: [{ year: 1977, month: 5 }],
      },
      {
        title:
          '活灵活现的资产阶级分子——从“四人帮”的丑恶表演看他们的反动阶级本质',
        authors: ['军政治部理论组'],
        page_start: 39,
        page_end: 42,
        dates: [{ year: 1977, month: 5 }],
      },
      {
        title: '考据癖，还是复辟狂',
        authors: ['军政治部理论组'],
        page_start: 43,
        page_end: 45,
        dates: [{ year: 1977, month: 5 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/09e35dcf-32ef-430a-9763-26c685c0ed82',
};
