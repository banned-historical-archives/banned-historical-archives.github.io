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
    '中央文革',
    '红暴',
    '红色暴动委员会',
    '红革会',
    '工总司',
    'P派',
    '辽联',
    '辽革站',
    '八三一',
    '六四〇八',
    '八·二七派',
  ];

  const organization_results = [];
  if (content.indexOf('中央文革') >= 0) {
    organization_results.push({ name: '中央文革', type: TagType.character });
  } else if (content.indexOf('工总司') >= 0) {
    organization_results.push({
      name: '上海市工人革命造反总司令部（工总司）',
      type: TagType.character,
    });
  } else if (
    content.indexOf('红暴') >= 0 ||
    content.indexOf('红色暴动委员会') >= 0
  ) {
    organization_results.push({
      name: '浙江省红色暴动委员会（红暴）',
      type: TagType.character,
    });
  } else if (content.indexOf('红革会') >= 0) {
    organization_results.push({
      name: '红卫兵上海市大专院校革命委员会（红革会）',
      type: TagType.character,
    });
  } else if (content.indexOf('P派') >= 0) {
    organization_results.push({
      name: '安徽无产阶级革命派（P派）',
      type: TagType.character,
    });
  } else if (content.indexOf('辽联') >= 0) {
    organization_results.push({
      name: '辽宁省革命造反派大联合委员会（辽联）',
      type: TagType.character,
    });
  } else if (content.indexOf('辽革站') >= 0) {
    organization_results.push({
      name: '辽宁无产阶级革命派联络站（辽革站）',
      type: TagType.character,
    });
  } else if (content.indexOf('八三一') >= 0 && content.indexOf('辽宁') >= 0) {
    organization_results.push({
      name: '（辽宁）毛泽东思想八三一沈阳革命造反总司令部（八三一）',
      type: TagType.character,
    });
  } else if (
    content.indexOf('六四〇八') >= 0 ||
    content.indexOf('六四〇八部队') >= 0
  ) {
    organization_results.push({
      name: '六四〇八部队（六四〇八）',
      type: TagType.character,
    });
  } else if (
    content.indexOf('八·二七派') >= 0 ||
    content.indexOf('八二七派') >= 0
  ) {
    organization_results.push({
      name: '（江苏）八·二七派（P派）',
      type: TagType.character,
    });
  }

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
    '夺权',
    '革命委员会',
    '教育革命',
    '批陈整风',
    '批林批孔',
    '上山下乡',
    '一打三反',
    '破四旧',
    '党内资产阶级',
    '二月逆流',
    '派性',
    '反潮流',
    '清理阶级队伍',
    '两条路线斗争',
    '七二〇事件',
    '越南战争',
    '朝鲜战争',
    '人民战争',
    '佳士运动',
    '同心建设',
    '毛主义',
    '武斗',
    '人民内部矛盾',
    '三支两军',
  ];

  const event_results = event_subjects
    .filter((i) => content.indexOf(i) >= 0)
    .map((i) => ({ name: i, type: TagType.subject }));

  if (content.indexOf('农业') >= 0) {
    event_results.push({ name: '农业战线', type: TagType.subject });
  } else if (content.indexOf('工业') >= 0) {
    event_results.push({ name: '工业战线', type: TagType.subject });
  } else if (content.indexOf('文艺') >= 0) {
    event_results.push({ name: '文艺战线', type: TagType.subject });
  } else if (content.indexOf('红卫兵') >= 0) {
    event_results.push({ name: '红卫兵运动', type: TagType.subject });
  } else if (content.indexOf('大批判') >= 0) {
    event_results.push({ name: '革命大批判', type: TagType.subject });
  } else if (content.indexOf('大联合') >= 0) {
    event_results.push({ name: '革命大联合', type: TagType.subject });
  } else if (content.indexOf('三结合') >= 0) {
    event_results.push({ name: '革命三结合', type: TagType.subject });
  } else if (
    content.indexOf('邓小平') >= 0 ||
    content.indexOf('刘少奇') >= 0 ||
    content.indexOf('林彪') >= 0
  ) {
    event_results.push({ name: '批判修正主义', type: TagType.subject });
  } else if (content.indexOf('资产阶级法权') >= 0) {
    event_results.push({ name: '限制资产阶级法权', type: TagType.subject });
  } else if (
    content.indexOf('清队') >= 0 ||
    content.indexOf('清理阶级队伍') >= 0
  ) {
    event_results.push({ name: '清理阶级队伍', type: TagType.subject });
  } else if (content.indexOf('同心建设') >= 0) {
    event_results.push({ name: '三大工具的同心建设', type: TagType.subject });
  } else if (content.indexOf('第五卷') >= 0) {
    event_results.push({
      name: '编纂《毛泽东选集》第五卷',
      type: TagType.subject,
    });
  } else if (
    content.indexOf('走资派') >= 0 ||
    content.indexOf('走资本主义道路的当权派') >= 0 ||
    content.indexOf('走资本主义道路当权派') >= 0
  ) {
    event_results.push({ name: '党内资产阶级', type: TagType.subject });
  } else if (
    content.indexOf('国际主义') >= 0 ||
    content.indexOf('无产阶级国际主义') >= 0
  ) {
    event_results.push({ name: '无产阶级国际主义', type: TagType.subject });
  } else if (
    content.indexOf('国际形势') >= 0 ||
    content.indexOf('世界形势') >= 0
  ) {
    event_results.push({ name: '世界形势', type: TagType.subject });
  } else if (content.indexOf('克己复礼') >= 0) {
    event_results.push({ name: '批林批孔', type: TagType.subject });
  } else if (
    content.indexOf('一月革命') >= 0 ||
    content.indexOf('一月风暴') >= 0
  ) {
    event_results.push({ name: '一月革命', type: TagType.subject });
  } else if (
    content.indexOf('一·二六夺权') >= 0 ||
    content.indexOf('一二六夺权') >= 0
  ) {
    event_results.push({ name: '一·二六夺权', type: TagType.subject });
  } else if (
    content.indexOf('九·一三') >= 0 ||
    content.indexOf('九·一三事件') >= 0
  ) {
    event_results.push({ name: '九·一三事件', type: TagType.subject });
  } else if (content.indexOf('5·16') >= 0 || content.indexOf('五·一六') >= 0) {
    event_results.push({ name: '清查五·一六', type: TagType.subject });
  }

  const subjects_results = [...provice_results, ...event_results];

  return [...character_results, ...subjects_results];
}
