export default {
  entity: {
    id: '552af2a0-e704-461b-b229-51188b7a86b6',
    name: '康生、江青、文元、富治同志在中共八届扩大的十二中全会小组会议上的重要插话要点',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/552af2a0-e704-461b-b229-51188b7a86b6/${
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
        title:
          '康生、江青、文元、富治同志在中共八届扩大的十二中全会小组会议上的重要插话要点',
        authors: ['谢富治', '江青', '姚文元', '康生'],
        page_start: 1,
        page_end: 5,
        dates: [{ year: 1968, month: 10, day: 17 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/552af2a0-e704-461b-b229-51188b7a86b6',
};
