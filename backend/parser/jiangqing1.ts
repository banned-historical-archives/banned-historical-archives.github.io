import {
  ContentPart,
  ContentType,
  ParserOption,
  ParserResult,
} from '../../types';

export async function parse(
  imgPath: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const title = '江青同志接见江苏代表团的一段讲话';
  const parts: ContentPart[] =[{
    text: title,
    type: ContentType.title,
  }];
  const res: ParserResult[] = [
    {
      title,
      parts: [
        ...parts,
        ...`目前，从敌人方面来的干扰，右倾保守主义、右倾分裂主义，这是主导。但是，极左和形“左”实右就没有表现了吗？什么叫二月逆流？从前年冬天到去年二月份，蹦出来的一贯反对毛主席的谭震林，这样的干将之一，把斗争的锋芒针对毛主席、林副主席，以及毛主席为首的无产阶级司令部，否认无产阶级文化大革命的成绩，企图打乱中国人民解放军的阵角，企图动摇新生的革命委员会和形“左”实右一脉相通。`
          .split('\n')
          .map(i => i.trim())
          .filter((i) => i)
          .map((i) => ({
            text: i,
            type: ContentType.paragraph,
          })),
      ],
      authors: ['江青'],
      dates: [
        {
          year: 1968,
          month: 3,
          day: 19,
        },
      ],
      is_range_date: false,
      comments: [],
      comment_pivots: [],
      description: '',
      page_start: parser_opt.page_limits[0][0],
      page_end: parser_opt.page_limits[0][1],
    },
  ];
  return res;
}