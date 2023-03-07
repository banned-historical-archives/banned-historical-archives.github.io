import { ArticleType, ParserResult, TagType } from '../types';

function multi_match(a: RegExp[], b: string[]) {
  return a.reduce(
    (m, i) => b.reduce((n, j) => n || i.test(j), false) || m,
    false,
  );
}

export function get_article_types(parser_result: ParserResult) {
  const { title, description } = parser_result;
  const res: ArticleType[] = [];
  if (
    multi_match(
      [/讲演/, /演讲/, /演说/, /讲话/, /发言/, /座谈会/, /开幕/, /闭幕/],
      [title, description],
    )
  ) {
    res.push(ArticleType.lecture);
  }
  if (multi_match([/谈话/, /对话/], [title, description])) {
    res.push(ArticleType.talk);
  }
  if (multi_match([/的信[。]?$/], [title, description])) {
    res.push(ArticleType.mail);
  }
  if (multi_match([/宣言/, /声明/, /布告/, /公开信/], [title, description])) {
    res.push(ArticleType.declaration);
  }
  if (
    multi_match([/指令/, /命令/, /指示/, /通知/, /通报/], [title, description])
  ) {
    res.push(ArticleType.instruction);
  }
  if (multi_match([/评论/, /批语/, /批注/, /批示/], [title, description])) {
    res.push(ArticleType.comment);
  }
  if (multi_match([/电报/, /通讯/], [title, description])) {
    res.push(ArticleType.telegram);
  }
  if (!res.length) {
    res.push(ArticleType.writings);
  }
  return res;
}

export function get_tags(
  parser_result: ParserResult,
): { name: string; type: TagType }[] {
  const content =
    parser_result.description +
    parser_result.title +
    parser_result.parts.reduce((m, i) => m + i.text + '\n', '');

  // 关键人物在 标题/正文/描述 中出现大于等于两次，加入 tags
  const important_characters = [
    '周恩来',
    '戚本禹',
    '吴法宪',
    '张平化',
    '谢富治',
    '康生',
    '江青',
    '陈伯达',
    '陶铸',
    '关锋',
    '陈国栋',
    '邓小平',
    '迟群',
    '姚文元',
    '杨成武',
    '王洪文',
    '刘丰',
    '贺龙',
    '袁子钦',
    '李曼村',
    '周荣鑫',
    '叶剑英',
    '王力',
    '吴德',
    '张春桥',
    '王光美',
    '李富春',
    '王任重',
    '李德生',
    '谢镗忠',
    '陈毅',
    '杨得志',
    '傅崇碧',
    '华国锋',
    '潘复生',
    '肖华',
    '李天焕',
    '李作鹏',
    '刘志坚',
    '刘宁一',
    '谢胡',
    '汪东兴',
    '刘建勋',
    '文敏生',
    '林杰',
    '尉凤英',
    '刘格平',
    '滕海清',
    '李先念',
    '粟裕',
    '姚依林',
    '徐景贤',
    '毛泽东',
    '林彪',
    '聂元梓',
    '徐今强',
    '谷牧',
    '钱学森',
    '李钟奇',
    '温玉成',
    '金敬迈',
    '廖承志',
    '王秀珍',
    '雍文涛',
    '王林',
    '李雪峰',
    '李震',
    '刘少奇',
    '胡耀邦',
    '徐立清',
    '刘西尧',
    '陈永贵',
    '薄一波',
    '左齐',
    '黄永胜',
    '付崇碧',
    '唐平铸',
    '许世友',
    '叶群',
    '聂荣臻',
    '纪登奎',
    '范文澜',
    '阎长贵',
    '宋寒毅',
    '童小鹏',
    '谭震林',
    '王效禹',
    '曹荻秋',
    '王震',
    '谭启龙',
    '彭真',
    '杜平',
    '王必成',
    '李广文',
    '康克清',
    '穆欣',
    '冼恒汉',
    '马天水',
    '郭影秋',
    '徐向前',
    '黄树则',
    '陶鲁笳',
    '陈云',
    '陈少敏',
    '袁宝华',
    '耿飙',
    '黄作珍',
    '宋任穷',
    '张国华',
    '王海蓉',
    '邱会作',
    '黄传龙',
    '黄经耀',
    '解学恭',
    '刘贤权',
    '郑维山',
    '罗瑞卿',
    '孙玉国',
    '王磊',
    '朱声达',
    '李树德',
    '吴涛',
    '张玉华',
    '蒋南翔',
    '马纯古',
    '王树声',
    '邓力群',
    '董枫',
    '乔冠华',
    '于会泳',
    '胡乔木',
    '高云屏',
    '曾思玉',
    '高锦明',
    '张闻天',
    '王宏坤',
    '梁兴初',
    '刘巨成',
    '陶琦',
    '毛远新',
    '余秋里',
    '刘涛',
    '熊复',
    '霍士廉',
    '章含之',
    '朱德',
    '王新亭',
    '王良恩',
    '廖容标',
    '张本',
    '廖政国',
    '陆定一',
    '耿飚',
    '赵毅敏',
    '刘澜涛',
    '叶飞',
    '丁国钰',
    '李天佑',
    '李再含',
    '周扬',
    '向仲华',
    '陈锡联',
    '四人帮',
    '贡萨罗',
    '张延成',
    '宗明兰',
    '习仲勋',
    '习近平',
    '胡锦涛',
    '江泽民',
    '赵紫阳',
    '陈独秀',
    '瞿秋白',
    '李立三',
    '王明',
    '罗章龙',
    '张国焘',
    '高岗',
    '饶漱石',
    '彭德怀',
    '方剑文',
    '梁守富',
    '曹在风',
    '曹轶欧',
    '曾希圣',
    '陈再道',
    '黄岩',
    '刘秀山',
    '程明远',
    '严光',
    '阎洪滏',
    '蔡洪江',
    '黄文明',
    '周世忠',
    '吴献忠',
    '柴春泽',
    '张铁生',
    '黄帅',
    '耿金章',
    '潘国平',
    '温巨敏',
    '博古',

  ];

  const person_results = important_characters
    .filter(
      (i) =>
        content.indexOf(i) !== content.lastIndexOf(i) ||
        parser_result.authors.indexOf(i) >= 0,
    )
    .map((i) => ({ name: i, type: TagType.character }));

  // 关键组织在 标题/正文/描述 中出现，加入 tags
  const important_organizations = [
    {
      origin: ['中央文革'],
      after: '中央文革',
    },
    {
      origin: ['红暴', '红色暴动委员会'],
      after: '浙江省红色暴动委员会（红暴）',
    },
    {
      origin: ['红革会'],
      after: '红卫兵上海市大专院校革命委员会（红革会）',
    },
    {
      origin: ['工总司'],
      after: '上海市工人革命造反总司令部（工总司）',
    },
    {
      origin: ['P派'],
      after: '安徽无产阶级革命派（P派）',
    },
    {
      origin: ['辽联'],
      after: '辽宁省革命造反派大联合委员会（辽联）',
    },
    {
      origin: ['辽革站'],
      after: '辽宁无产阶级革命派联络站（辽革站）',
    },
    {
      origin: ['八三一'],
      after: '（辽宁）毛泽东思想八三一沈阳革命造反总司令部（八三一）',
    },
    {
      origin: ['六四〇八', '六四〇八部队'],
      after: '六四〇八部队（六四〇八）',
    },
    {
      origin: ['八·二七派'],
      after: '安徽无产阶级革命派（P派）',
    },
    {
      origin: ['百万雄师'],
      after: '武汉地区无产阶级革命派百万雄师联络站（百万雄师）',
    },
    {
      origin: ['八·二七派', '（江苏）八·二七派（P派）'],
      after: '六四〇八部队（六四〇八）',
    },
    {
      origin: ['赤卫队'],
      after: '捍卫毛泽东思想工人赤卫队上海总部（赤卫队）',
    }
  ]

  const organization_results: { name: string; type: TagType.character; }[] = [];

  important_organizations.forEach(item => {
    item.origin.forEach(i => {
      if (content.indexOf(i) >= 0) {
        for (let i = 0; i < parser_result.dates.length; i++) {
          if (parser_result.dates[i].year! >= 1965) {
            organization_results.push({
              name: item.after,
              type: TagType.character,
            });
          }
        }
      }
    })
  })

  const character_results = [...person_results, ...organization_results];

  // 全国省和自治区在 标题/正文/描述 中出现大于等于两次，且日期非空并内含至少一项年份大于 1965，将“xx文革”加入 tags
  const provice_subjects = [
    '黑龙江',
    '吉林',
    '辽宁',
    '河北',
    '河南',
    '山东',
    '山西',
    '陕西',
    '甘肃',
    '青海',
    '四川',
    '湖北',
    '湖南',
    '江西',
    '安徽',
    '江苏',
    '浙江',
    '福建',
    '广东',
    '海南省',
    '云南',
    '贵州',
    '北京',
    '天津',
    '上海',
    '重庆',
    '内蒙古',
    '宁夏',
    '新疆',
    '西藏',
    '广西',
  ];

  const provice_results = provice_subjects
    .filter((i) => {
      if (parser_result.dates.length === 0) {
        return false;
      } else if (content.indexOf(i) !== content.lastIndexOf(i)) {
        for (let i = 0; i < parser_result.dates.length; i++) {
          if (parser_result.dates[i].year! >= 1965) return true;
        }
      }
    })
    .map((i) => ({ name: `${i}文革`, type: TagType.character }));

  // 关键事件在 标题/正文/描述 中出现，稍加修改或不修改后加入 tags
  const event_subjects = [
    {
      origin: ['夺权'],
      after: '夺权'
    },
    {
      origin: ['革命委员会'],
      after: '革命委员会'
    },
    {
      origin: ['批陈整风'],
      after: '批陈整风'
    },
    {
      origin: ['批林批孔', '克己复礼'],
      after: '批林批孔'
    },
    {
      origin: ['教育革命'],
      after: '教育革命'
    },
    {
      origin: ['上山下乡'],
      after: '上山下乡'
    },
    {
      origin: ['一打三反'],
      after: '一打三反'
    },
    {
      origin: ['破四旧'],
      after: '破四旧'
    },
    {
      origin: ['二月逆流'],
      after: '二月逆流'
    },
    {
      origin: ['派性'],
      after: '派性'
    },
    {
      origin: ['反潮流'],
      after: '反潮流'
    },
    {
      origin: ['两条路线斗争'],
      after: '两条路线斗争'
    },
    {
      origin: ['七二〇事件'],
      after: '七二〇事件'
    },
    {
      origin: ['越南战争'],
      after: '越南战争'
    },
    {
      origin: ['朝鲜战争'],
      after: '朝鲜战争'
    },
    {
      origin: ['人民战争'],
      after: '人民战争'
    },
    {
      origin: ['佳士运动'],
      after: '佳士运动'
    },
    {
      origin: ['毛主义'],
      after: '毛主义'
    },
    {
      origin: ['武斗'],
      after: '武斗'
    },
    {
      origin: ['人民内部矛盾'],
      after: '人民内部矛盾'
    },
    {
      origin: ['三支两军'],
      after: '三支两军'
    },
    {
      origin: ['农业'],
      after: '农业战线'
    },
    {
      origin: ['工业'],
      after: '工业战线'
    },
    {
      origin: ['文艺'],
      after: '文艺战线'
    },
    {
      origin: ['红卫兵'],
      after: '红卫兵运动'
    },
    {
      origin: ['大批判'],
      after: '革命大批判'
    },
    {
      origin: ['大联合'],
      after: '革命大联合'
    },
    {
      origin: ['三结合'],
      after: '革命三结合'
    },
    {
      origin: ['资产阶级法权'],
      after: '限制资产阶级法权'
    },
    {
      origin: ['清队', '清理阶级队伍'],
      after: '清理阶级队伍'
    },
    {
      origin: ['同心建设'],
      after: '三大工具的同心建设'
    },
    {
      origin: ['第五卷'],
      after: '编纂《毛泽东选集》第五卷'
    },
    {
      origin: ['走资派', '走资本主义道路的当权派', '走资本主义道路当权派'],
      after: '党内资产阶级'
    },
    {
      origin: ['国际主义', '无产阶级国际主义'],
      after: '无产阶级国际主义'
    },
    {
      origin: ['国际形势', '世界形势'],
      after: '世界形势'
    },
    {
      origin: ['一月革命', '一月风暴'],
      after: '一月革命'
    },
    {
      origin: ['一·二六夺权', '一二六夺权'],
      after: '一·二六夺权'
    },
    {
      origin: ['九·一三', '九一三'],
      after: '九·一三事件'
    },
    {
      origin: ['5·16', '五·一六'],
      after: '清查五·一六'
    },
    {
      origin: ['哈尔套会议'],
      after: '哈尔套会议'
    },
    {
      origin: ['朝阳农学院'],
      after: '朝阳农学院'
    },
    {
      origin: ['以三项指示为纲'],
      after: '以三项指示为纲'
    },
    {
      origin: ['四五运动'],
      after: '四五运动'
    },
    {
      origin: ['儒法斗争'],
      after: '儒法斗争'
    },
    {
      origin: ['支左'],
      after: '军队支左'
    }
  ];

  const event_results: { name: string; type: TagType.subject; }[] = [];

  event_subjects.forEach(item => {
    item.origin.forEach(i => {
      if (content.indexOf(i) >= 0) {
        event_results.push({
          name: item.after,
          type: TagType.subject,
        })
      }
    })
  })

  const subjects_results = [...provice_results, ...event_results];

  return [...character_results, ...subjects_results];
}
