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
    '全军文革',
    '金敬迈',
    '廖承志',
    '王秀珍',
    '雍文涛',
    '王林',
    '李雪峰',
    '中央文革',
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
    '中央文革办事组',
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
    '中央文革调查组',
    '宋穷',
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
    '周总理',
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
  ];
  const content =
    parser_result.description +
    parser_result.title +
    parser_result.parts.reduce((m, i) => m + i.text + '\n', '');
  return important_characters
    .filter(
      (i) =>
        content.indexOf(i) !== content.lastIndexOf(i) ||
        parser_result.authors.indexOf(i) >= 0,
    )
    .map((i) => ({
      name: i,
      type: TagType.character,
    }));
}
