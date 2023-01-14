import { join } from 'node:path/posix';
import { existsSync } from 'node:fs';
import { Book, ParserOption } from '../types';
import * as jinghuo_parser from './parser/jinghuo_parser';
import * as wansui_parser from './parser/wansui_parser';
import * as wenji_parser from './parser/wenji_parser';
import * as jqjianghua_parser from './parser/jqjianghua_parser';
import * as xuanji_parser from './parser/xuanji';
import * as jimi from './parser/jimi';
import * as wenku_parser from './parser/wenku';
import * as maoquanji from './parser/maoquanji';
import * as wanghongwen from './parser/wanghongwen';
import * as yaowenyuan from './parser/yaowenyuan';
import * as zhangchunqiao from './parser/zhangchunqiao';
import * as zzj1 from './parser/zzj1';
import * as automation from './parser/automation';
import { apply_patch, apply_patch_v2, get_article_id } from '../utils';
import { traditionalChineseToSimpleChinese } from '../utils/i18n';
import { exclude, normalize } from './utils';

const patch_dir = join(normalize(__dirname), '../patch/articles');
const books: Book[] = [
  {
    entity: {
      id: 'afaea63a-1dbf-4481-98c7-a198625e13cf',
      name: '红旗一九七六年第十一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/afaea63a-1dbf-4481-98c7-a198625e13cf.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"关于建立伟大的领袖和导师毛泽东主席纪念堂的决定","authors":["中国共产党中央委员会","中华人民共和国全国人民代表大会常务委员会","中华人民共和国国务院","中国共产党中央军事委员会"],"page_start":14,"page_end":16,"dates":[{"year":1976,"month":10,"day":8}]},{"title":"亿万人民的共同心愿","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":17,"page_end":19,"dates":[{"year":1976}]},{"title":"吴德同志在首都庆祝大会上的讲话","authors":["吴德"],"page_start":20,"page_end":24,"dates":[{"year":1976,"month":10,"day":24}]},{"title":"伟大的历史胜利","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":25,"page_end":29,"dates":[{"year":1976}]},{"title":"华国锋同志是我们党当之无愧的领袖","authors":["《解放军报》编辑部"],"page_start":30,"page_end":33,"dates":[{"year":1976}]},{"title":"坚持“三要三不要”彻底砸烂“四人帮”","authors":["大寨大队党支部"],"page_start":34,"page_end":38,"dates":[{"year":1976}]},{"title":"狠批“四人帮”夺取革命、生产双胜利","authors":["中共大庆委员会"],"page_start":39,"page_end":42,"dates":[{"year":1976}]},{"title":"誓死保卫以华国锋主席为首的党中央","authors":["北京部队某部特功六连党支部"],"page_start":43,"page_end":45,"dates":[{"year":1976}]},{"title":"“四人帮”扼杀《创业》说明了什么？","authors":["洪广思"],"page_start":46,"page_end":49,"dates":[{"year":1976}]},{"title":"一个地地道道的老投降派","authors":["任平"],"page_start":50,"page_end":52,"dates":[{"year":1976,"month":10,"day":21}]},{"title":"三月的租界","authors":["鲁迅"],"page_start":53,"page_end":55,"dates":[{"year":1936,"month":4,"day":16}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/afaea63a-1dbf-4481-98c7-a198625e13cf.pdf'),
  },
  {
    entity: {
      id: '8abcffb2-22fc-4131-bf38-de63da71354c',
      name: '邓小平全面背叛马克思主义',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/8abcffb2-22fc-4131-bf38-de63da71354c.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"邓小平全面背叛马克思主义","authors":["黎章"],"page_start":7,"page_end":21,"dates":[{"year":1976}]},{"title":"批判工交战线的修正主义谬论","authors":["钟实"],"page_start":22,"page_end":34,"dates":[{"year":1976}]},{"title":"评邓小平的买办资产阶级经济思想","authors":["高路","常戈"],"page_start":35,"page_end":42,"dates":[{"year":1976}]},{"title":"一个复辟倒退的条例——《关于加快工业发展的若干问题》批判","authors":["上海钟表元件厂工人理论小组"],"page_start":43,"page_end":50,"dates":[{"year":1976}]},{"title":"精神可以变成物质——批判邓小平反对工人参加上层建筑领域革命的谬论","authors":["大连红旗造船厂党委会"],"page_start":51,"page_end":59,"dates":[{"year":1976}]},{"title":"篡改马克思主义的一个标本","authors":["方海"],"page_start":60,"page_end":64,"dates":[{"year":1976}]},{"title":"一个在科技界复辟资本主义的纲领——评《科学院工作汇报提纲》","authors":["中国科学院大批判组"],"page_start":65,"page_end":74,"dates":[{"year":1976}]},{"title":"永远坚持毛主席的建军路线——批判邓小平在军队建设上的修正主义谬论","authors":["沈屏"],"page_start":75,"page_end":82,"dates":[{"year":1965}]}],
      ocr: {"content_thresholds":[0,0.072,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/8abcffb2-22fc-4131-bf38-de63da71354c.pdf'),
  },
  {
    entity: {
      id: '6c9c8b32-5c48-49eb-a3fb-02cf509d13cc',
      name: '工作简报（第21期）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/6c9c8b32-5c48-49eb-a3fb-02cf509d13cc/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"共青团组织在服务行业中开展思想教育活动","authors":["中共合肥市委办公室编"],"page_start":2,"page_end":2,"dates":[{"year":1961,"month":9,"day":27}]},{"title":"勤俭节约安排生活一例","authors":["中共合肥市委办公室编"],"page_start":2,"page_end":2,"dates":[{"year":1961,"month":9,"day":27}]},{"title":"一起严重违反乱纪事件","authors":["中共合肥市委办公室编"],"page_start":3,"page_end":3,"dates":[{"year":1961,"month":9,"day":27}]},{"title":"查获一起盗卖粮票案","authors":["中共合肥市委办公室编"],"page_start":3,"page_end":3,"dates":[{"year":1961,"month":9,"day":27}]},{"title":"永青公社发现少数社员赌博","authors":["中共合肥市委办公室编"],"page_start":3,"page_end":3,"dates":[{"year":1961,"month":9,"day":27}]},{"title":"最近学校信访增多","authors":["中共合肥市委办公室编"],"page_start":3,"page_end":3,"dates":[{"year":1961,"month":9,"day":27}]}],
      ocr: {"auto_vsplit":false,"vsplit":0.5},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/6c9c8b32-5c48-49eb-a3fb-02cf509d13cc'),
  },
  {
    entity: {
      id: '1b42a88a-5b24-4ab5-8738-0fb1b675af7f',
      name: '自然辩证法一九七四年第二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/1b42a88a-5b24-4ab5-8738-0fb1b675af7f.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"马克思的数学手稿","authors":["马克思"],"page_start":5,"page_end":33,"dates":[{"year":1881}]},{"title":"人类对数的认识的发展","authors":["司春林"],"page_start":34,"page_end":48,"dates":[{"year":1974,"month":5}]},{"title":"怎样认识微分——学习马克思《数学手稿》札记之一","authors":["吴咸"],"page_start":49,"page_end":58,"dates":[{"year":1974,"month":5}]},{"title":"“数学”唯心主义必须批判——学习《唯物主义和经验批判主义》的体会","authors":["谷超豪"],"page_start":59,"page_end":72,"dates":[{"year":1974,"month":5}]},{"title":"意识来源于社会实践","authors":["袁明","单世谊"],"page_start":73,"page_end":82,"dates":[{"year":1974,"month":5}]},{"title":"脑功能定位学说（名词解释）","authors":["司春林"],"page_start":82,"page_end":82,"dates":[{"year":1974,"month":5}]},{"title":"实践提高了对脑功能的认识","authors":["张香桐"],"page_start":83,"page_end":97,"dates":[{"year":1974,"month":5}]},{"title":"生理能赋予人才智吗？","authors":["李炳文"],"page_start":98,"page_end":105,"dates":[{"year":1974,"month":5}]},{"title":"《核移植——新的可能性》批注","authors":["陈国梁","张开明","庚镇城","李柯"],"page_start":101,"page_end":119,"dates":[{"year":1974,"month":5}]},{"title":"癌症是可以征服的","authors":["袁任平"],"page_start":120,"page_end":124,"dates":[{"year":1974,"month":5}]},{"title":"癌症可知癌症可治——肿瘤问题座谈会纪要","authors":[],"page_start":125,"page_end":138,"dates":[{"year":1974,"month":5}]},{"title":"银针也能攻癌症","authors":["俞云"],"page_start":139,"page_end":144,"dates":[{"year":1974,"month":5}]},{"title":"癌症患者谈与癌症作斗争的体会","authors":["李学友","斐杏槃","向家伦","费金海","胡德荣","乌文娟"],"page_start":145,"page_end":155,"dates":[{"year":1974,"month":5}]},{"title":"我们是怎样取得棉花高产的？","authors":["南汇县泥城公社远征大队"],"page_start":156,"page_end":160,"dates":[{"year":1974,"month":5}]},{"title":"三麦高产的辩证法","authors":["江苏省沙洲县塘桥公社六大队"],"page_start":161,"page_end":165,"dates":[{"year":1974,"month":5}]},{"title":"稻田灭蚊","authors":["川沙县江镇公社道新大队"],"page_start":166,"page_end":168,"dates":[{"year":1974,"month":5}]},{"title":"治虫要知虫","authors":["金山县枫围公社供销社支农组"],"page_start":169,"page_end":174,"dates":[{"year":1974,"month":5}]},{"title":"测虫﹑报虫和治虫","authors":["复旦大学生物系北桥农作物虫害预测预报站"],"page_start":175,"page_end":179,"dates":[{"year":1974,"month":5}]},{"title":"征服杂菌夺高产","authors":["上海溶剂厂工人写作组"],"page_start":180,"page_end":183,"dates":[{"year":1974,"month":5}]},{"title":"人工育珠放新彩","authors":["上海市水产局人工育珠组"],"page_start":184,"page_end":188,"dates":[{"year":1974,"month":5}]},{"title":"生物生生不息（续）","authors":["胡雨涛"],"page_start":189,"page_end":206,"dates":[{"year":1974,"month":5}]},{"title":"瓦特和蒸汽机","authors":["俞方生","沈继隆"],"page_start":207,"page_end":214,"dates":[{"year":1974,"month":5}]},{"title":"怎样认识热现象的本质？——来信来稿及座谈会发言综述","authors":["《自然辩证法》编辑部"],"page_start":215,"page_end":219,"dates":[{"year":1974,"month":5}]},{"title":"小辞典","authors":["《自然辩证法》编辑部"],"page_start":220,"page_end":225,"dates":[{"year":1974,"month":5}]}],
      ocr: {"content_thresholds":[0,0.12,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/1b42a88a-5b24-4ab5-8738-0fb1b675af7f.pdf'),
  },
  {
    entity: {
      id: 'f39b62f2-6a46-4167-a44e-eeb8790499c4',
      name: '自然辩证法一九七四年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/f39b62f2-6a46-4167-a44e-eeb8790499c4.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"评环境污染","authors":["袁任平"],"page_start":6,"page_end":11,"dates":[{"year":1974,"month":1}]},{"title":"联合治废展新图","authors":["上海市治理三废领导小组调查组"],"page_start":12,"page_end":18,"dates":[{"year":1974,"month":1}]},{"title":"变废为宝无止境","authors":["上海燎原化工厂革命委员会"],"page_start":19,"page_end":24,"dates":[{"year":1974,"month":1}]},{"title":"废气变银丝","authors":["上海化纤九厂革命委员会"],"page_start":25,"page_end":29,"dates":[{"year":1974,"month":1}]},{"title":"认识垃圾 利用垃圾","authors":["上海市废旧物资公司"],"page_start":30,"page_end":33,"dates":[{"year":1974,"month":1}]},{"title":"环境污染的由来和发展","authors":["柯勤"],"page_start":34,"page_end":45,"dates":[{"year":1974,"month":1}]},{"title":"人类起源问题的一些新认识","authors":["李炳文","胡波"],"page_start":46,"page_end":58,"dates":[{"year":1974,"month":1}]},{"title":"自然科学和阶级斗争——读马克思恩格斯关于达尔文进化论的书信","authors":["袁明"],"page_start":59,"page_end":66,"dates":[{"year":1974,"month":1}]},{"title":"针刺麻醉中的辩证法","authors":["任康桐"],"page_start":67,"page_end":84,"dates":[{"year":1974,"month":1}]},{"title":"地球上最早的人——东非人类化石材料简介","authors":["陈德珍"],"page_start":85,"page_end":95,"dates":[{"year":1974,"month":1}]},{"title":"黄牛和水牛也能杂交","authors":["《动物与防治》"],"page_start":95,"page_end":95,"dates":[{"year":1973,"month":6}]},{"title":"生物生生不息","authors":["胡雨涛"],"page_start":96,"page_end":127,"dates":[{"year":1974,"month":1}]},{"title":"全角膜白斑盲人重见光明","authors":["上海铁路中心医院革命委员会"],"page_start":128,"page_end":135,"dates":[{"year":1974,"month":1}]},{"title":"治好严重腰腿痛的启示","authors":["上海市静安区中心医院外科"],"page_start":136,"page_end":142,"dates":[{"year":1974,"month":1}]},{"title":"揭开“红眼病”病因之谜","authors":["上海市“红眼病”病原研究协作组"],"page_start":143,"page_end":148,"dates":[{"year":1974,"month":1}]},{"title":"从焯菜到焯菜素","authors":["上海药物研究所慢性气管炎研究组","王之璋"],"page_start":149,"page_end":154,"dates":[{"year":1974,"month":1}]},{"title":"生物学是不是一门独特的科学？","authors":["迈克尔·A·西蒙","迈克尔·E·鲁斯","陆帆","赵寿元"],"page_start":155,"page_end":173,"dates":[{"year":1974,"month":1}]},{"title":"宇宙有没有“谜底”？——评海克尔的《宇宙之谜》","authors":["朱锋"],"page_start":174,"page_end":183,"dates":[{"year":1974,"month":1}]},{"title":"达尔文和他的进化学说","authors":["辛可"],"page_start":184,"page_end":195,"dates":[{"year":1974,"month":1}]},{"title":"关于星系爆发的时间（答读者问）","authors":["《自然辩证法》编辑部"],"page_start":195,"page_end":195,"dates":[{"year":1974,"month":1}]},{"title":"岂止是“客套”！","authors":["登高"],"page_start":196,"page_end":198,"dates":[{"year":1974,"month":1}]},{"title":"什么是病毒？（名词解释）","authors":["《自然辩证法》编辑部"],"page_start":198,"page_end":198,"dates":[{"year":1974,"month":1}]},{"title":"小辞典","authors":["《自然辩证法》编辑部"],"page_start":199,"page_end":203,"dates":[{"year":1974,"month":1}]}],
      ocr: {"content_thresholds":[0,0.12,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/f39b62f2-6a46-4167-a44e-eeb8790499c4.pdf'),
  },
  {
    entity: {
      id: 'ea381c63-9984-45e0-9a9c-5480ebd22a18',
      name: '自然辩证法一九七三年第二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/ea381c63-9984-45e0-9a9c-5480ebd22a18.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"人类在战胜异常气候中前进","authors":["上海市气象局写作组"],"page_start":6,"page_end":11,"dates":[{"year":1973,"month":11}]},{"title":"异常的气候，异常的措施——我们是怎样夺得油菜高产的","authors":["南汇县六灶公社革命委员会"],"page_start":12,"page_end":17,"dates":[{"year":1973,"month":11}]},{"title":"调节田间小气候","authors":["周文俊"],"page_start":18,"page_end":34,"dates":[{"year":1973,"month":11}]},{"title":"天体的来龙去脉（续完）","authors":["余衡泰"],"page_start":35,"page_end":60,"dates":[{"year":1973,"month":11}]},{"title":"物质是无限可分的","authors":["卞思祖"],"page_start":61,"page_end":78,"dates":[{"year":1973,"month":11}]},{"title":"核物理学从社会实践中来","authors":["卢鹤钹"],"page_start":79,"page_end":91,"dates":[{"year":1973,"month":11}]},{"title":"运动是不能消灭的——试评黑洞学说","authors":["谷超豪"],"page_start":92,"page_end":101,"dates":[{"year":1973,"month":11}]},{"title":"热的本性是什么？","authors":["吴厚湜"],"page_start":102,"page_end":108,"dates":[{"year":1973,"month":11}]},{"title":"用辩证法改造发电机","authors":["上海电机厂工人写作组"],"page_start":109,"page_end":116,"dates":[{"year":1973,"month":11}]},{"title":"“螺狮壳”里天地大","authors":["上海自行车三厂第九车间党支部","张载养","袁思桢"],"page_start":117,"page_end":122,"dates":[{"year":1973,"month":11}]},{"title":"沉船起浮","authors":["上海海难救助打捞局","翟青","房芝芳","陈丽英"],"page_start":123,"page_end":127,"dates":[{"year":1973,"month":11}]},{"title":"厚纸是怎样变薄的","authors":["上海市造纸木材工业公司工人写作组"],"page_start":128,"page_end":131,"dates":[{"year":1973,"month":11}]},{"title":"丝杠加工","authors":["上海机床厂革命委员会"],"page_start":132,"page_end":136,"dates":[{"year":1973,"month":11}]},{"title":"炼渣炉里炼出钢来","authors":["上海第五钢铁厂一车间浇钢工段党支部"],"page_start":137,"page_end":139,"dates":[{"year":1973,"month":11}]},{"title":"《荀子·天论》评注","authors":["李定生"],"page_start":140,"page_end":154,"dates":[{"year":1973,"month":11}]},{"title":"巴斯卡：人在宇宙中不相称","authors":["巴斯卡","全增嘏"],"page_start":155,"page_end":162,"dates":[{"year":1973,"month":11}]},{"title":"自然辩证法和现代物理学","authors":["坂田昌一"],"page_start":163,"page_end":182,"dates":[{"year":1973,"month":11}]},{"title":"引力理论的历史和现状","authors":["邢尔夏"],"page_start":183,"page_end":195,"dates":[{"year":1973,"month":11}]},{"title":"哥白尼","authors":["金若水"],"page_start":196,"page_end":202,"dates":[{"year":1973,"month":11}]},{"title":"编后","authors":["《自然辩证法》编辑部"],"page_start":202,"page_end":202,"dates":[{"year":1973,"month":11}]},{"title":"来信摘登","authors":["刘金华","郑仲耀","彭彤","俞渭贤","邵辛洲","蔡招文","徐文堪"],"page_start":203,"page_end":205,"dates":[{"year":1973,"month":11}]},{"title":"小辞典","authors":["《自然辩证法》编辑部"],"page_start":206,"page_end":211,"dates":[{"year":1973,"month":11}]}],
      ocr: {"content_thresholds":[0,0.1,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/ea381c63-9984-45e0-9a9c-5480ebd22a18.pdf'),
  },
  {
    entity: {
      id: '56345858-52d1-473e-b5bd-436fd87f20a4',
      name: '自然辩证法一九七三年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/56345858-52d1-473e-b5bd-436fd87f20a4.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"天体的来龙去脉","authors":["余衡泰"],"page_start":8,"page_end":66,"dates":[{"year":1973,"month":6}]},{"title":"宇宙是无限和有限的统一","authors":["卞思祖"],"page_start":67,"page_end":86,"dates":[{"year":1973,"month":6}]},{"title":"3°K微波辐射的发现说明了什么？——兼评“大爆炸宇宙学”","authors":["李柯"],"page_start":87,"page_end":103,"dates":[{"year":1973,"month":6}]},{"title":"天文学从社会实践中来","authors":["余珊"],"page_start":104,"page_end":111,"dates":[{"year":1973,"month":6}]},{"title":"报风和乘风","authors":["吴玉远"],"page_start":112,"page_end":118,"dates":[{"year":1973,"month":6}]},{"title":"地下顶管","authors":["上海市政工程公司革命委员会","龚朴","章智明","沈逸珍"],"page_start":119,"page_end":124,"dates":[{"year":1973,"month":6}]},{"title":"苏州河上巧运水泥管","authors":["上海港驳船运输公司拖轮队","唐天林"],"page_start":125,"page_end":129,"dates":[{"year":1973,"month":6}]},{"title":"看鱼下网","authors":["张文振","张文彩"],"page_start":130,"page_end":132,"dates":[{"year":1973,"month":6}]},{"title":"水上也能种花生","authors":["上海川沙县药师四队科学实验小组","佟林清","张燕"],"page_start":133,"page_end":135,"dates":[{"year":1973,"month":6}]},{"title":"论证等级式宇宙学","authors":["G·德·伏古勒","傅季重","周煦良","徐孝通"],"page_start":136,"page_end":154,"dates":[{"year":1973,"month":6}]},{"title":"《天问》《天对》选注","authors":["王运熙","李庆甲","徐鹏","顾易生","章培恒","谭其骧","杨宽","蒋天枢"],"page_start":155,"page_end":177,"dates":[{"year":1973,"month":6}]},{"title":"论无限、宇宙和世界（节译）","authors":["布鲁诺","傅力","王福山"],"page_start":178,"page_end":192,"dates":[{"year":1973,"month":6}]},{"title":"关于地壳结构的一种新理论——板块构造假说","authors":["朱新轩","王慧中","郭蓄民","许世远"],"page_start":193,"page_end":204,"dates":[{"year":1973,"month":6}]},{"title":"天文学中的一些新发现","authors":["李中元"],"page_start":205,"page_end":213,"dates":[{"year":1973,"month":6}]},{"title":"到自然界中去找辩证法——科教片《无限风光在险峰》观后","authors":["朱锋"],"page_start":214,"page_end":218,"dates":[{"year":1973,"month":6}]},{"title":"小辞典","authors":["《自然辩证法》编辑部"],"page_start":219,"page_end":223,"dates":[{"year":1973,"month":6}]},{"title":"编者的话","authors":["《自然辩证法》编辑部"],"page_start":223,"page_end":225,"dates":[{"year":1973,"month":6}]}],
      ocr: {"content_thresholds":[0,0.08,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/56345858-52d1-473e-b5bd-436fd87f20a4.pdf'),
  },
  {
    entity: {
      id: '95bc051a-bd92-48c0-ae43-478814fda629',
      name: '红旗一九七四年第十二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/95bc051a-bd92-48c0-ae43-478814fda629.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"发展社会主义的新生事物","authors":["池恒"],"page_start":6,"page_end":10,"dates":[{"year":1974,"month":11,"day":25}]},{"title":"继续抓好学习和批判","authors":["吕真"],"page_start":11,"page_end":14,"dates":[{"year":1974,"month":11,"day":25}]},{"title":"加强革命团结 争取更大胜利","authors":["郑实"],"page_start":15,"page_end":17,"dates":[{"year":1974,"month":11,"day":25}]},{"title":"集中优势兵力 各个歼灭敌人","authors":["昆骏"],"page_start":18,"page_end":22,"dates":[{"year":1974,"month":11,"day":25}]},{"title":"儒家是杀人如麻的刽子手","authors":["吴畅"],"page_start":23,"page_end":28,"dates":[{"year":1974,"month":11,"day":25}]},{"title":"春秋战国时期儒法两条军事路线的斗争","authors":["魏理"],"page_start":29,"page_end":35,"dates":[{"year":1974,"month":11,"day":25}]},{"title":"论法家与“清官”的根本区别","authors":["天津铁路分局天津站工人理论小组"],"page_start":36,"page_end":40,"dates":[{"year":1974,"month":11,"day":25}]},{"title":"正义战争必然胜利——批判《盐铁论》中儒家的军事投降主义","authors":["中国人民解放军海军三八九舰理论小组"],"page_start":41,"page_end":45,"dates":[{"year":1974,"month":11,"day":25}]},{"title":"在银幕上为无产阶级争光——影片《闪闪的红星》的一些创作体会","authors":["八一电影制片厂《闪闪的红星》创作组、摄制组"],"page_start":46,"page_end":54,"dates":[{"year":1974,"month":11,"day":25}]},{"title":"小厂也能造出四百吨大平板车","authors":["河北沧州市交通局四〇〇小组"],"page_start":55,"page_end":59,"dates":[{"year":1974,"month":11,"day":25}]},{"title":"在两条道路斗争中发挥战斗堡垒作用","authors":["天津市宝坻县小新庄大队党支部"],"page_start":60,"page_end":64,"dates":[{"year":1974,"month":11,"day":25}]},{"title":"干部参加集体生产劳动好得很","authors":["中国共产党辉县委员会"],"page_start":65,"page_end":69,"dates":[{"year":1974,"month":11,"day":25}]},{"title":"争取社会主义农业的更大发展","authors":["赵丰年"],"page_start":70,"page_end":74,"dates":[{"year":1974,"month":11,"day":25}]},{"title":"总结抗旱经验 促进农业发展","authors":["贺建农"],"page_start":75,"page_end":80,"dates":[{"year":1974,"month":11,"day":25}]},{"title":"学大寨就要抓路线","authors":["宁江"],"page_start":81,"page_end":86,"dates":[{"year":1974,"month":11,"day":25}]},{"title":"对人体认识的两种世界观斗争","authors":["金卫"],"page_start":87,"page_end":97,"dates":[{"year":1974,"month":11,"day":25}]},{"title":"红旗杂志一九七四年第一期到第十二期总目录","authors":["《红旗》杂志编辑部"],"page_start":98,"page_end":105,"dates":[{"year":1974,"month":11,"day":25}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/95bc051a-bd92-48c0-ae43-478814fda629.pdf'),
  },
  {
    entity: {
      id: '686e6818-b853-4306-b5e5-a6ff0624d817',
      name: '红旗一九七四年第十一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/686e6818-b853-4306-b5e5-a6ff0624d817.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"掌握一分为二的辩证方法","authors":["池恒"],"page_start":8,"page_end":11,"dates":[{"year":1974,"month":11,"day":1}]},{"title":"加强党的一元化领导","authors":["薛仑"],"page_start":12,"page_end":16,"dates":[{"year":1974,"month":11,"day":1}]},{"title":"正确处理团结和斗争的关系","authors":["黎新"],"page_start":17,"page_end":20,"dates":[{"year":1974,"month":11,"day":1}]},{"title":"正确地估计客观情况——学习毛主席军事著作的一点体会","authors":["武振轩"],"page_start":21,"page_end":27,"dates":[{"year":1974,"month":11,"day":1}]},{"title":"论北宋时期爱国主义和卖国主义的斗争","authors":["罗思鼎"],"page_start":28,"page_end":36,"dates":[{"year":1974,"month":11,"day":1}]},{"title":"战略上藐视敌人，战术上重视敌人","authors":["燕枫"],"page_start":37,"page_end":43,"dates":[{"year":1974,"month":11,"day":1}]},{"title":"《三字经》是为反动统治阶级服务的——剖析《三字经》的两个增补版本","authors":["方玉荣","李敬"],"page_start":43,"page_end":45,"dates":[{"year":1974,"month":11,"day":1}]},{"title":"批“半部《论语》治天下\"","authors":["卞石中"],"page_start":46,"page_end":51,"dates":[{"year":1974,"month":11,"day":1}]},{"title":"扬眉吐气的三万二千里","authors":["“风庆”轮党支部"],"page_start":52,"page_end":58,"dates":[{"year":1974,"month":11,"day":1}]},{"title":"关键在于端正领导的思想政治路线——四川汽车制造厂的调查报告","authors":["中共四川省委调查组"],"page_start":59,"page_end":62,"dates":[{"year":1974,"month":11,"day":1}]},{"title":"两种经济制度的鲜明对照","authors":["夏力之"],"page_start":63,"page_end":67,"dates":[{"year":1974,"month":11,"day":1}]},{"title":"演冬子，学冬子，做党的好孩子","authors":["祝新运"],"page_start":68,"page_end":69,"dates":[{"year":1974,"month":11,"day":1}]},{"title":"发展工业一定要开展技术革新","authors":["宫效闻"],"page_start":70,"page_end":75,"dates":[{"year":1974,"month":11,"day":1}]},{"title":"技术革新必须依靠工人群众","authors":["北京第一机床厂党委会"],"page_start":76,"page_end":79,"dates":[{"year":1974,"month":11,"day":1}]},{"title":"新厂也需要搞技术革新","authors":["天津市第一石油化工厂党委会"],"page_start":80,"page_end":83,"dates":[{"year":1974,"month":11,"day":1}]},{"title":"自力更生发展新技术——上海中国电工厂的调查报告","authors":["上海市仪表电讯工业局调查组"],"page_start":84,"page_end":88,"dates":[{"year":1974,"month":11,"day":1}]},{"title":"呓语","authors":["阳戈"],"page_start":89,"page_end":89,"dates":[{"year":1974,"month":11,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/686e6818-b853-4306-b5e5-a6ff0624d817.pdf'),
  },
  {
    entity: {
      id: 'cdabca69-8d72-462c-a7b7-7debceeba83c',
      name: '红旗一九七四年第十期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/cdabca69-8d72-462c-a7b7-7debceeba83c.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"在社会主义大道上前进","authors":["《红旗》杂志编辑部","《人民日报》编辑部","《解放军报》编辑部"],"page_start":8,"page_end":10,"dates":[{"year":1974,"month":10,"day":1}]},{"title":"历史是螺旋式发展的","authors":["洪宇"],"page_start":11,"page_end":17,"dates":[{"year":1974,"month":10,"day":1}]},{"title":"亿万人民反修防修的伟大实践","authors":["俞彤"],"page_start":18,"page_end":22,"dates":[{"year":1974,"month":10,"day":1}]},{"title":"走自力更生发展石油工业的道路","authors":["中国共产党大庆油田委员会"],"page_start":23,"page_end":28,"dates":[{"year":1974,"month":10,"day":1}]},{"title":"坚持革命 努力前进","authors":["大寨大队党支部"],"page_start":29,"page_end":32,"dates":[{"year":1974,"month":10,"day":1}]},{"title":"军民团结如一人，试看天下谁能敌？","authors":["中国人民解放军济南部队某部三连党支部"],"page_start":33,"page_end":37,"dates":[{"year":1974,"month":10,"day":1}]},{"title":"毛主席的光辉照列麦","authors":["西藏隆子县列麦公社党支部"],"page_start":38,"page_end":42,"dates":[{"year":1974,"month":10,"day":1}]},{"title":"我国教育阵地的深刻变革","authors":["朱研"],"page_start":43,"page_end":48,"dates":[{"year":1974,"month":10,"day":1}]},{"title":"批林批孔与知识分子的进步","authors":["杨荣国"],"page_start":49,"page_end":53,"dates":[{"year":1974,"month":10,"day":1}]},{"title":"军民情意深似海——评革命现代京剧《红云岗》","authors":["秋实"],"page_start":54,"page_end":58,"dates":[{"year":1974,"month":10,"day":1}]},{"title":"研究儒法斗争的历史经验","authors":["梁效"],"page_start":59,"page_end":65,"dates":[{"year":1974,"month":10,"day":1}]},{"title":"论“黔首”","authors":["石仑"],"page_start":66,"page_end":73,"dates":[{"year":1974,"month":10,"day":1}]},{"title":"评白虎观会议与《白虎通》","authors":["洪善思"],"page_start":74,"page_end":80,"dates":[{"year":1974,"month":10,"day":1}]},{"title":"工人理论队伍的一个创造——大连红旗造船厂的调查报告","authors":["中共旅大市委调查组","《辽宁日报》记者"],"page_start":81,"page_end":85,"dates":[{"year":1974,"month":10,"day":1}]},{"title":"团结是胜利的基本保证","authors":["甘戈"],"page_start":86,"page_end":89,"dates":[{"year":1974,"month":10,"day":1}]},{"title":"进一步加强全国各民族的大团结","authors":["夏平"],"page_start":90,"page_end":94,"dates":[{"year":1974,"month":10,"day":1}]},{"title":"执行“惩前瑟后，治病救人”的方针","authors":["吕真"],"page_start":95,"page_end":97,"dates":[{"year":1974,"month":10,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/cdabca69-8d72-462c-a7b7-7debceeba83c.pdf'),
  },
  {
    entity: {
      id: 'a1c62db1-5a85-4670-a439-7aac5fd834e9',
      name: '红旗一九七四年第九期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/a1c62db1-5a85-4670-a439-7aac5fd834e9.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"认真学习毛主席的军事著作","authors":["《红旗》杂志编辑部"],"page_start":8,"page_end":10,"dates":[{"year":1974,"month":9,"day":1}]},{"title":"坚持革命团结深人批林批孔","authors":["齐力"],"page_start":11,"page_end":13,"dates":[{"year":1974,"month":9,"day":1}]},{"title":"重视环境保护工作","authors":["郭寰"],"page_start":14,"page_end":18,"dates":[{"year":1974,"month":9,"day":1}]},{"title":"为巩固无产阶级专政而研究儒法斗争","authors":["方锷"],"page_start":19,"page_end":24,"dates":[{"year":1974,"month":9,"day":1}]},{"title":"先秦法家思想的集大成者——评《韩非子》","authors":["梁凌益"],"page_start":25,"page_end":34,"dates":[{"year":1974,"month":9,"day":1}]},{"title":"李自成起义军对二程的批判","authors":["钟宙"],"page_start":35,"page_end":40,"dates":[{"year":1974,"month":9,"day":1}]},{"title":"批林批孔中坚持看书学习","authors":["天津第二毛纺织厂党委会"],"page_start":41,"page_end":44,"dates":[{"year":1974,"month":9,"day":1}]},{"title":"我们是怎样开展批林批孔的","authors":["北京市第一一二中学党支部"],"page_start":45,"page_end":48,"dates":[{"year":1974,"month":9,"day":1}]},{"title":"劳动人民就该做主人","authors":["郑成礼"],"page_start":49,"page_end":51,"dates":[{"year":1974,"month":9,"day":1}]},{"title":"我们的原则是党指挥枪——批判林彪反对党领导军队的罪行","authors":["田军"],"page_start":52,"page_end":57,"dates":[{"year":1974,"month":9,"day":1}]},{"title":"儒家的“以礼治军”与林彪资产阶级军事路线","authors":["中国人民解放军海军一三三二仓库理论小组"],"page_start":58,"page_end":61,"dates":[{"year":1974,"month":9,"day":1}]},{"title":"揭穿林彪右倾机会主义者的嘴脸","authors":["中国人民解放军空军雷达兵某部六连党支部"],"page_start":62,"page_end":65,"dates":[{"year":1974,"month":9,"day":1}]},{"title":"用党的正确路线教育连队","authors":["中国人民解放军成都部队某部四连党支部"],"page_start":66,"page_end":69,"dates":[{"year":1974,"month":9,"day":1}]},{"title":"巩固农村社会主义阵地","authors":["湖南岳阳县毛田公社党委会"],"page_start":70,"page_end":74,"dates":[{"year":1974,"month":9,"day":1}]},{"title":"执行正确路线 夺取小麦高产——河南新乡地区的调查报告","authors":["中国共产党河南省委员会调查组"],"page_start":75,"page_end":79,"dates":[{"year":1974,"month":9,"day":1}]},{"title":"为革命多出煤","authors":["开滦煤矿唐家庄矿党委会"],"page_start":80,"page_end":84,"dates":[{"year":1974,"month":9,"day":1}]},{"title":"贪得无厌的国际剥削者——揭穿苏修所谓“天然盟友”的假面具","authors":["南景"],"page_start":85,"page_end":89,"dates":[{"year":1974,"month":9,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/a1c62db1-5a85-4670-a439-7aac5fd834e9.pdf'),
  },
  {
    entity: {
      id: 'cff9c9f0-4422-4826-b46f-877ac6effadc',
      name: '红旗一九七四年第八期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/cff9c9f0-4422-4826-b46f-877ac6effadc.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"认真看书学习 掌握理论武器","authors":["池恒"],"page_start":8,"page_end":10,"dates":[{"year":1974,"month":8,"day":1}]},{"title":"做革命团结的促进派","authors":["齐新"],"page_start":11,"page_end":15,"dates":[{"year":1974,"month":8,"day":1}]},{"title":"儒法斗争是“狗咬狗”吗？","authors":["翟平"],"page_start":16,"page_end":18,"dates":[{"year":1974,"month":8,"day":1}]},{"title":"论秦汉之际的阶级斗争","authors":["罗思鼎"],"page_start":19,"page_end":29,"dates":[{"year":1974,"month":8,"day":1}]},{"title":"儒法斗争与我国古代科学技术的发展","authors":["李群"],"page_start":30,"page_end":35,"dates":[{"year":1974,"month":8,"day":1}]},{"title":"尊孔读经与崇洋卖国","authors":["陈今"],"page_start":36,"page_end":42,"dates":[{"year":1974,"month":8,"day":1}]},{"title":"论王充的反儒斗争","authors":["钟达"],"page_start":43,"page_end":48,"dates":[{"year":1974,"month":8,"day":1}]},{"title":"韬晦之计和林彪的复辟阴谋","authors":["师平"],"page_start":49,"page_end":51,"dates":[{"year":1974,"month":8,"day":1}]},{"title":"深入批判林彪的“六个战术原则”","authors":["沈思"],"page_start":52,"page_end":59,"dates":[{"year":1974,"month":8,"day":1}]},{"title":"批判林彪资产阶级军事路线的一些体会","authors":["中国人民解放军北京部队某部八连党支部"],"page_start":60,"page_end":63,"dates":[{"year":1974,"month":8,"day":1}]},{"title":"批林批孔 促进战备","authors":["中国人民解放军沈阳部队某部六连党支部"],"page_start":64,"page_end":67,"dates":[{"year":1974,"month":8,"day":1}]},{"title":"提高警惕 保卫祖国","authors":["中国人民解放军广州部队某部四连党支部"],"page_start":68,"page_end":72,"dates":[{"year":1974,"month":8,"day":1}]},{"title":"发扬官兵一致的革命传统","authors":["中国人民解放军兰州部队某部红一连党支部"],"page_start":73,"page_end":76,"dates":[{"year":1974,"month":8,"day":1}]},{"title":"用毛主席哲学思想指导找油找气","authors":["中国共产党大港油田委员会"],"page_start":77,"page_end":84,"dates":[{"year":1974,"month":8,"day":1}]},{"title":"嘉定县安亭公社新泾大队1974—1980年农业发展规划（修订草案）","authors":["嘉定县安亭公社新泾大队"],"page_start":85,"page_end":89,"dates":[{"year":1973,"month":9},{"year":1974,"month":6}]},{"title":"学大寨 讲路线——湖北随县环城公社八一大队的调查报告","authors":["中国共产党随县委员会宣传部调查组"],"page_start":90,"page_end":93,"dates":[{"year":1974,"month":8,"day":1}]},{"title":"路线搞对头 生产争上游——柳州铁路分局桂林北站的调查报告","authors":["柳州铁路局党委会、柳州铁路分局党委会联合调查组"],"page_start":94,"page_end":97,"dates":[{"year":1974,"month":8,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/cff9c9f0-4422-4826-b46f-877ac6effadc.pdf'),
  },
  {
    entity: {
      id: '8d4ea23c-eec1-49ad-a944-1b111e0020cd',
      name: '红旗一九七四年第七期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/8d4ea23c-eec1-49ad-a944-1b111e0020cd.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"党是领导一切的","authors":["《人民日报》编辑部"],"page_start":6,"page_end":6,"dates":[{"year":1974,"month":7,"day":1}]},{"title":"加强党的思想建设","authors":["钟文"],"page_start":8,"page_end":11,"dates":[{"year":1974,"month":7,"day":1}]},{"title":"革命斗争需要马克思主义理论队伍","authors":["洪广思"],"page_start":12,"page_end":16,"dates":[{"year":1974,"month":7,"day":1}]},{"title":"抓紧理论队伍的建设","authors":["河南郏县广阔天地大有作为人民公社党委会"],"page_start":17,"page_end":21,"dates":[{"year":1974,"month":7,"day":1}]},{"title":"注意发展女党员","authors":["广西梧州市第二轻化工业局党委会"],"page_start":22,"page_end":25,"dates":[{"year":1974,"month":7,"day":1}]},{"title":"批孔与路线斗争——学习毛主席关于批孔的论述","authors":["靳志柏"],"page_start":26,"page_end":37,"dates":[{"year":1974,"month":7,"day":1}]},{"title":"孟轲——复辟奴隶制的吹鼓手","authors":["田力"],"page_start":38,"page_end":45,"dates":[{"year":1974,"month":7,"day":1}]},{"title":"批林批孔促进了革命团结","authors":["济南铁路分局济南电务段党总支"],"page_start":46,"page_end":50,"dates":[{"year":1974,"month":7,"day":1}]},{"title":"我们是怎样联系实际批林批孔的？","authors":["新疆乌鲁木齐县反修大队党支部"],"page_start":51,"page_end":55,"dates":[{"year":1974,"month":7,"day":1}]},{"title":"批林批孔要抓住路线问题","authors":["北京铁路分局党委会"],"page_start":56,"page_end":60,"dates":[{"year":1974,"month":7,"day":1}]},{"title":"正确处理领导机关和基层的运动的关系","authors":["朱江"],"page_start":61,"page_end":64,"dates":[{"year":1974,"month":7,"day":1}]},{"title":"从银雀山竹简看秦始皇焚书","authors":["卫今"],"page_start":65,"page_end":69,"dates":[{"year":1974,"month":7,"day":1}]},{"title":"京剧革命十年","authors":["初澜"],"page_start":70,"page_end":76,"dates":[{"year":1974,"month":7,"day":1}]},{"title":"进一步办好合作医疗","authors":["韦革"],"page_start":77,"page_end":80,"dates":[{"year":1974,"month":7,"day":1}]},{"title":"在斗争中加强赤脚医生队伍","authors":["上海川沙县江镇公社党委会"],"page_start":81,"page_end":83,"dates":[{"year":1974,"month":7,"day":1}]},{"title":"加强协作 快装快卸","authors":["上海港务局党委会"],"page_start":84,"page_end":88,"dates":[{"year":1974,"month":7,"day":1}]},{"title":"发展农业靠群众","authors":["齐跃"],"page_start":89,"page_end":93,"dates":[{"year":1974,"month":7,"day":1}]},{"title":"干部必须密切联系群众","authors":["中国共产党临西县委员会"],"page_start":94,"page_end":97,"dates":[{"year":1974,"month":7,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/8d4ea23c-eec1-49ad-a944-1b111e0020cd.pdf'),
  },
  {
    entity: {
      id: '91ac9869-9423-4cc6-ad9a-2bb7ba472619',
      name: '红旗一九七四年第六期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/91ac9869-9423-4cc6-ad9a-2bb7ba472619.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"加强马克思主义的理论队伍","authors":["《红旗》杂志编辑部"],"page_start":8,"page_end":10,"dates":[{"year":1974,"month":6,"day":1}]},{"title":"孔丘的仁义道德与林彪的修正主义路线","authors":["燕枫"],"page_start":11,"page_end":16,"dates":[{"year":1974,"month":6,"day":1}]},{"title":"人民英雄不容抹煞——批判尊孔派对柳下跖的歪曲和诬蔑","authors":["甘清"],"page_start":17,"page_end":24,"dates":[{"year":1974,"month":6,"day":1}]},{"title":"论商鞅","authors":["梁效"],"page_start":25,"page_end":32,"dates":[{"year":1974,"month":6,"day":1}]},{"title":"注意解决路线问题","authors":["中国共产党武呜县委员会"],"page_start":33,"page_end":36,"dates":[{"year":1974,"month":6,"day":1}]},{"title":"在斗争中培养贫下中农理论队伍","authors":["山西浑源县刁窝大队党支部"],"page_start":37,"page_end":40,"dates":[{"year":1974,"month":6,"day":1}]},{"title":"培养积极分子深入批林批孔","authors":["青海共和县蒙古大队党支部"],"page_start":41,"page_end":44,"dates":[{"year":1974,"month":6,"day":1}]},{"title":"从“天马”看林彪野心家的世界观","authors":["靳南"],"page_start":45,"page_end":47,"dates":[{"year":1974,"month":6,"day":1}]},{"title":"尊孔是为了复辟和倒退","authors":["张本林"],"page_start":48,"page_end":51,"dates":[{"year":1974,"month":6,"day":1}]},{"title":"巩固和发展全国人民的大团结","authors":["庄宁"],"page_start":52,"page_end":55,"dates":[{"year":1974,"month":6,"day":1}]},{"title":"做好农村社会主义商业工作","authors":["柳彤"],"page_start":56,"page_end":59,"dates":[{"year":1974,"month":6,"day":1}]},{"title":"文化大革命促进农业生产大发展","authors":["河北大名县杏现大队党支部"],"page_start":60,"page_end":63,"dates":[{"year":1974,"month":6,"day":1}]},{"title":"批林批孔推动了技术革新——天津自行车厂的调查报告","authors":["天津市革命委员会、轻工业部、天津市第一轻工业局联合调查组"],"page_start":64,"page_end":68,"dates":[{"year":1974,"month":6,"day":1}]},{"title":"自力更生的力量在群众之中","authors":["上海市毛麻纺织工业公司党委会"],"page_start":69,"page_end":72,"dates":[{"year":1974,"month":6,"day":1}]},{"title":"英雄光辉照银幕——评革命现代京剧彩色影片《平原作战》《杜鹃山》","authors":["江天"],"page_start":73,"page_end":78,"dates":[{"year":1974,"month":6,"day":1}]},{"title":"小戏创作的可喜收获——评越剧影片《半篮花生》","authors":["方进"],"page_start":79,"page_end":82,"dates":[{"year":1974,"month":6,"day":1}]},{"title":"来自群众斗争生活的艺术——谈大兴县业余文艺宣传队的舞蹈创作","authors":["辛文影"],"page_start":83,"page_end":87,"dates":[{"year":1974,"month":6,"day":1}]},{"title":"人类在变革物质中认识物质","authors":["李柯"],"page_start":88,"page_end":97,"dates":[{"year":1974,"month":6,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/91ac9869-9423-4cc6-ad9a-2bb7ba472619.pdf'),
  },
  {
    entity: {
      id: '400b2215-d2c3-472f-a981-91294f020b19',
      name: '红旗一九七四年第五期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/400b2215-d2c3-472f-a981-91294f020b19.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"五四时期批孔斗争的历史经验——纪念五四运动五十五周年","authors":["史众"],"page_start":8,"page_end":14,"dates":[{"year":1974,"month":5,"day":1}]},{"title":"读《盐铁论》——西汉中期儒法两家的一场大论战","authors":["梁效"],"page_start":15,"page_end":22,"dates":[{"year":1974,"month":5,"day":1}]},{"title":"林彪反革命策略的破产——批判一份黑笔记","authors":["余凡"],"page_start":23,"page_end":29,"dates":[{"year":1974,"month":5,"day":1}]},{"title":"领导要站在运动的前头","authors":["严章"],"page_start":30,"page_end":32,"dates":[{"year":1974,"month":5,"day":1}]},{"title":"批林批孔联系实际的个做法","authors":["河北饶阳县邹村大队党总支"],"page_start":33,"page_end":36,"dates":[{"year":1974,"month":5,"day":1}]},{"title":"深批“克己复礼”","authors":["广东海南黎族苗族自治州番茅大队党支部"],"page_start":37,"page_end":40,"dates":[{"year":1974,"month":5,"day":1}]},{"title":"团结战斗 批林批孔","authors":["孟庆瑞"],"page_start":41,"page_end":44,"dates":[{"year":1974,"month":5,"day":1}]},{"title":"认真学习 知难而进","authors":["虞和康"],"page_start":45,"page_end":47,"dates":[{"year":1974,"month":5,"day":1}]},{"title":"邓小平在联合国大会特别会议上的发言","alias":"中华人民共和国代表团团长邓小平在联大特别会议上的发言","authors":["邓小平"],"page_start":48,"page_end":55,"dates":[{"year":1974,"month":4,"day":10}]},{"title":"增产节约广积粮","authors":["洪桥"],"page_start":56,"page_end":59,"dates":[{"year":1974,"month":5,"day":1}]},{"title":"抓革命 促生产——沈阳第一机床厂的调查报告","authors":["《辽宁日报》记者"],"page_start":60,"page_end":63,"dates":[{"year":1974,"month":5,"day":1}]},{"title":"依靠群众搞好铁路运输","authors":["山海关铁路机务段党委会"],"page_start":64,"page_end":67,"dates":[{"year":1974,"month":5,"day":1}]},{"title":"批林批孔运动推动教育革命深入发展","authors":["清华大学革命委员会","北京大学革命委员会"],"page_start":68,"page_end":72,"dates":[{"year":1974,"month":5,"day":1}]},{"title":"在本学期化学学习中对对立统一规律的体会","authors":["赵兵"],"page_start":73,"page_end":75,"dates":[{"year":1974,"month":1,"day":3}]},{"title":"把农业大学办到农村去","authors":["西北农学院革命委员会"],"page_start":76,"page_end":80,"dates":[{"year":1974,"month":5,"day":1}]},{"title":"依靠贫下中农进行教学改革——湖北监利县棋盘中学的调查报告","authors":["湖北监利县教育局调查组"],"page_start":81,"page_end":85,"dates":[{"year":1974,"month":5,"day":1}]},{"title":"大力普及牧区小学教育——青海玛多县的调查报告","authors":["果洛藏族自治州玛多县文卫科、青海省革命委员会文化教育局调查组"],"page_start":86,"page_end":89,"dates":[{"year":1974,"month":5,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/400b2215-d2c3-472f-a981-91294f020b19.pdf'),
  },
  {
    entity: {
      id: '5afd0c82-866e-4670-9448-b5644b1b1073',
      name: '红旗一九七四年第四期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/5afd0c82-866e-4670-9448-b5644b1b1073.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"注意总结经验","authors":["《红旗》杂志编辑部"],"page_start":8,"page_end":11,"dates":[{"year":1974,"month":4,"day":1}]},{"title":"孔丘其人","authors":["北京大学","清华大学大批判组"],"page_start":12,"page_end":17,"dates":[{"year":1974,"month":4,"day":1}]},{"title":"评《吕氏春秋》","authors":["罗思鼎"],"page_start":18,"page_end":25,"dates":[{"year":1974,"month":4,"day":1}]},{"title":"评《东北解放战争时期的林彪》","authors":["郑磊"],"page_start":26,"page_end":31,"dates":[{"year":1974,"month":4,"day":1}]},{"title":"认真看书学习 深入批林批孔","authors":["北京友谊商店百货部青年业余学习小组"],"page_start":32,"page_end":37,"dates":[{"year":1974,"month":4,"day":1}]},{"title":"坚持社会主义道路","authors":["广东英德县望河大队党支部"],"page_start":38,"page_end":41,"dates":[{"year":1974,"month":4,"day":1}]},{"title":"攻击干部下放劳动就是要复辟","authors":["北京东城区“五·七”干校大批判组"],"page_start":42,"page_end":45,"dates":[{"year":1974,"month":4,"day":1}]},{"title":"走上山下乡的革命路","authors":["广西恭城县挖沟大队小黄埠生产队插队知识青年小组"],"page_start":46,"page_end":50,"dates":[{"year":1974,"month":4,"day":1}]},{"title":"“大有大的难处”——从《红楼梦》看反动没落阶级的虚弱本质","authors":["方岩梁"],"page_start":51,"page_end":59,"dates":[{"year":1974,"month":4,"day":1}]},{"title":"深入批判资产阶级的人性论——从标题与无标题音乐问题的讨论谈起","authors":["初澜"],"page_start":60,"page_end":66,"dates":[{"year":1974,"month":4,"day":1}]},{"title":"重视革命的历史文物","authors":["卫今"],"page_start":67,"page_end":70,"dates":[{"year":1974,"month":4,"day":1}]},{"title":"要团结大多数——学习《关于正确处理人民内部矛盾的问题》的一点体会","authors":["谢祚"],"page_start":71,"page_end":75,"dates":[{"year":1974,"month":4,"day":1}]},{"title":"学会用对立统一规律观察问题","authors":["洪原"],"page_start":76,"page_end":81,"dates":[{"year":1974,"month":4,"day":1}]},{"title":"发扬知难而进的精神","authors":["湖北应城县炮竹大队评论组"],"page_start":82,"page_end":83,"dates":[{"year":1974,"month":4,"day":1}]},{"title":"批林批孔是推动生产发展的强大动力","authors":["天津冷轧带钢厂党总支"],"page_start":84,"page_end":87,"dates":[{"year":1974,"month":4,"day":1}]},{"title":"依靠群众发展电力工业","authors":["江雷"],"page_start":88,"page_end":92,"dates":[{"year":1974,"month":4,"day":1}]},{"title":"一万三千个合同是怎样完成的？","authors":["上海铜厂革命委员会"],"page_start":93,"page_end":97,"dates":[{"year":1974,"month":4,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/5afd0c82-866e-4670-9448-b5644b1b1073.pdf'),
  },
  {
    entity: {
      id: 'b43aeded-1fb5-4ec8-812f-742210966d88',
      name: '红旗一九七四年第三期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/b43aeded-1fb5-4ec8-812f-742210966d88.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"认真学 深入批","authors":["《红旗》杂志编辑部"],"page_start":6,"page_end":8,"dates":[{"year":1974,"month":3,"day":3}]},{"title":"批“克己复礼”──林彪妄图复辟资本主义的反动纲领","authors":["《人民日报》编辑部"],"page_start":9,"page_end":10,"dates":[{"year":1974,"month":2,"day":20}]},{"title":"孔子和林彪都是政治骗子","authors":["康立"],"page_start":11,"page_end":17,"dates":[{"year":1974,"month":3,"day":3}]},{"title":"秦统一六国起决定作用的是什么？","authors":["李时"],"page_start":18,"page_end":24,"dates":[{"year":1974,"month":3,"day":3}]},{"title":"批林批孔是反修防修的伟大斗争","authors":["燕枫"],"page_start":25,"page_end":29,"dates":[{"year":1974,"month":3,"day":3}]},{"title":"揭穿“己所不欲，勿施于人”的反动实质","authors":["郭企元","黄士耀"],"page_start":30,"page_end":32,"dates":[{"year":1974,"month":3,"day":3}]},{"title":"从“天马”的下场看天命论的破产","authors":["乌云格日勒"],"page_start":33,"page_end":35,"dates":[{"year":1974,"month":3,"day":3}]},{"title":"污蔑劳动人民就是反对革命","authors":["天津铁路分局天津站六号门工人评论组"],"page_start":36,"page_end":39,"dates":[{"year":1974,"month":3,"day":3}]},{"title":"我们革命妇女最恨孔孟之道","authors":["大寨大队铁姑娘队"],"page_start":40,"page_end":42,"dates":[{"year":1974,"month":3,"day":3}]},{"title":"放手发动群众 掌握政策界限","authors":["中国共产党上海第五钢铁厂委员会"],"page_start":43,"page_end":47,"dates":[{"year":1974,"month":3,"day":3}]},{"title":"联系路线斗争实际批林批孔","authors":["河北安平县南王庄大队党支部"],"page_start":48,"page_end":50,"dates":[{"year":1974,"month":3,"day":3}]},{"title":"反修斗争的强大思想武器——学习《帝国主义是资本主义的最高阶段》","authors":["辛风"],"page_start":51,"page_end":57,"dates":[{"year":1974,"month":3,"day":3}]},{"title":"到底是谁家的“工具”？——评安东尼奥尼的“申辩”","authors":["华言"],"page_start":58,"page_end":62,"dates":[{"year":1974,"month":3,"day":3}]},{"title":"评晋剧《三上桃峰》","authors":["初澜"],"page_start":63,"page_end":68,"dates":[{"year":1974,"month":2,"day":28}]},{"title":"从农业出发办好地方工业","authors":["庄宁"],"page_start":69,"page_end":74,"dates":[{"year":1974,"month":3,"day":3}]},{"title":"让工农兵英雄形象牢固地占领故事片阵地","authors":["江天"],"page_start":75,"page_end":79,"dates":[{"year":1974,"month":3,"day":3}]},{"title":"人类对地球的认识和改造","authors":["李之棣"],"page_start":80,"page_end":89,"dates":[{"year":1974,"month":3,"day":3}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/b43aeded-1fb5-4ec8-812f-742210966d88.pdf'),
  },
  {
    entity: {
      id: '052bdd4e-c98c-4f39-8ead-b7d6428f7002',
      name: '红旗一九七四年第二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/052bdd4e-c98c-4f39-8ead-b7d6428f7002.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"广泛深入开展批林批孔的斗争","authors":["《红旗》杂志编辑部"],"page_start":8,"page_end":10,"dates":[{"year":1974,"month":2,"day":1}]},{"title":"林彪与孔孟之道","authors":["北京大学","清华大学大批判组"],"page_start":11,"page_end":18,"dates":[{"year":1974,"month":2,"day":1}]},{"title":"铁证如山——从孔府的罪恶看孔孟之道的反动实质","authors":["洪群"],"page_start":19,"page_end":26,"dates":[{"year":1974,"month":2,"day":1}]},{"title":"从王安石变法看儒法论战的演变——读《王荆公年谱考略》","authors":["罗思鼎"],"page_start":27,"page_end":34,"dates":[{"year":1974,"month":2,"day":1}]},{"title":"读柳宗元《封建论》","authors":["周一良"],"page_start":35,"page_end":42,"dates":[{"year":1974,"month":2,"day":1}]},{"title":"“克己复礼”就是要开倒车","authors":["天津轮胎厂工人评论组"],"page_start":43,"page_end":45,"dates":[{"year":1974,"month":2,"day":1}]},{"title":"中庸之道是政治骗子的哲学","authors":["沈逸珍","丁佩蓉"],"page_start":46,"page_end":47,"dates":[{"year":1974,"month":2,"day":1}]},{"title":"揭穿“人道主义”的骗局——评苏修叛徒集团尊孔反法的丑剧","authors":["刘泽林","朱英武","黄志宏","任学玲","刘奇葆"],"page_start":48,"page_end":52,"dates":[{"year":1974,"month":2,"day":1}]},{"title":"林彪和董仲舒是一个窝里的蝎子","authors":["河北景县董故庄大队党支部"],"page_start":53,"page_end":54,"dates":[{"year":1974,"month":2,"day":1}]},{"title":"打好批林批孔的人民战争","authors":["赵忠范"],"page_start":55,"page_end":57,"dates":[{"year":1974,"month":2,"day":1}]},{"title":"评万事“无有大于此者”——蒋介石的“元旦文告”说明了什么？","authors":["康立"],"page_start":58,"page_end":60,"dates":[{"year":1974,"month":2,"day":1}]},{"title":"提高抓大事的自觉性","authors":["田志松"],"page_start":61,"page_end":65,"dates":[{"year":1974,"month":2,"day":1}]},{"title":"充分发挥群众的社会主义积极性","authors":["岳衡"],"page_start":66,"page_end":71,"dates":[{"year":1974,"month":2,"day":1}]},{"title":"勤俭种田 越种越甜——湖北崇阳县后溪大队的调查报告","authors":["中国共产党崇阳县委员会调查组"],"page_start":72,"page_end":74,"dates":[{"year":1974,"month":2,"day":1}]},{"title":"坚决执行三大纪律八项注意","authors":["洪城"],"page_start":75,"page_end":78,"dates":[{"year":1974,"month":2,"day":1}]},{"title":"恶毒的用心，卑劣的手法──批判安东尼奥尼拍摄的题为《中国》的反华影片","alias":"恶毒的用心 卑劣的手法——批判安东尼奥尼拍摄的题为《中国》的反华影片","authors":["《人民日报》评论员"],"page_start":79,"page_end":85,"dates":[{"year":1974,"month":1,"day":30}]},{"title":"在所谓“能源危机”的背后","authors":["常谦"],"page_start":86,"page_end":89,"dates":[{"year":1974,"month":2,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/052bdd4e-c98c-4f39-8ead-b7d6428f7002.pdf'),
  },
  {
    entity: {
      id: '82f7d6a0-ab65-4018-80d0-d44d00e6d932',
      name: '红旗一九七四年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/82f7d6a0-ab65-4018-80d0-d44d00e6d932.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"元旦献词（一九七四年元旦社论）","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":7,"page_end":10,"dates":[{"year":1974,"month":1,"day":1}]},{"title":"坚持无产阶级世界观","authors":["池恒"],"page_start":11,"page_end":15,"dates":[{"year":1974,"month":1,"day":1}]},{"title":"抓好意识形态领域的阶级斗争——学习《新民主主义论》","authors":["洪广思"],"page_start":16,"page_end":22,"dates":[{"year":1974,"month":1,"day":1}]},{"title":"发扬党的优良作风","authors":["青岩"],"page_start":23,"page_end":29,"dates":[{"year":1974,"month":1,"day":1}]},{"title":"共产党员要加强纪律性","authors":["洪原"],"page_start":30,"page_end":34,"dates":[{"year":1974,"month":1,"day":1}]},{"title":"把艰苦奋斗的革命精神永远传下去","authors":["“南京路上好八连”党支部"],"page_start":35,"page_end":38,"dates":[{"year":1974,"month":1,"day":1}]},{"title":"历史上劳动人民的反孔斗争","authors":["田凯"],"page_start":39,"page_end":46,"dates":[{"year":1974,"month":1,"day":1}]},{"title":"孔子是怎样利用编纂历史维护奴隶制度的？","authors":["牛致功"],"page_start":47,"page_end":54,"dates":[{"year":1974,"month":1,"day":1}]},{"title":"巩固和发展大学教育革命的成果","authors":["清华大学革命委员会","北京大学革命委员会"],"page_start":55,"page_end":60,"dates":[{"year":1974,"month":1,"day":1}]},{"title":"中国革命历史的壮丽画卷——谈革命样板戏的成就和意义","authors":["初澜"],"page_start":61,"page_end":66,"dates":[{"year":1974,"month":1,"day":1}]},{"title":"无产阶级必须牢固占领文化阵地","authors":["季如春"],"page_start":67,"page_end":70,"dates":[{"year":1974,"month":1,"day":1}]},{"title":"伟大的创造力蕴藏在群众之中——安徽淮南大通煤矿的调查报告","authors":["安微省革命委员会、淮南市革命委员会联合调查组"],"page_start":71,"page_end":76,"dates":[{"year":1974,"month":1,"day":1}]},{"title":"依靠群众，加快农业发展的步伐","authors":["赵彦章"],"page_start":77,"page_end":81,"dates":[{"year":1974,"month":1,"day":1}]},{"title":"把山区建成社会主义新农村","authors":["李顺达"],"page_start":82,"page_end":86,"dates":[{"year":1974,"month":1,"day":1}]},{"title":"坚持独立自主、自力更生的方针","authors":["魏秉奎"],"page_start":87,"page_end":90,"dates":[{"year":1974,"month":1,"day":1}]},{"title":"靠什么调动积极性？","authors":["孟增林"],"page_start":91,"page_end":92,"dates":[{"year":1974,"month":1,"day":1}]},{"title":"孔夫子在莫斯科","authors":["康立"],"page_start":93,"page_end":96,"dates":[{"year":1974,"month":1,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/82f7d6a0-ab65-4018-80d0-d44d00e6d932.pdf'),
  },
  {
    entity: {
      id: '5f27c701-5f3c-43f4-9a8d-368bf21a01aa',
      name: '红旗一九七三年第十二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/5f27c701-5f3c-43f4-9a8d-368bf21a01aa.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"巩固无产阶级专政的纲领——学习《论人民民主专政》","authors":["俞彤"],"page_start":8,"page_end":14,"dates":[{"year":1973,"month":12,"day":1}]},{"title":"巩固无产阶级专政的一项战略措施","authors":["云岚"],"page_start":15,"page_end":20,"dates":[{"year":1973,"month":12,"day":1}]},{"title":"积极培养妇女干部","authors":["夏平"],"page_start":21,"page_end":25,"dates":[{"year":1973,"month":12,"day":1}]},{"title":"反潮流是马列主义的一个原则","authors":["方岩梁"],"page_start":26,"page_end":29,"dates":[{"year":1973,"month":12,"day":1}]},{"title":"“倒过来”的哲学和复辟资本主义——批判林彪的资产阶级唯心论","authors":["辛风"],"page_start":30,"page_end":35,"dates":[{"year":1973,"month":12,"day":1}]},{"title":"继续搞好农村的卫生革命","authors":["金卫"],"page_start":36,"page_end":41,"dates":[{"year":1973,"month":12,"day":1}]},{"title":"把无产阶级教育革命进行到底","authors":["钟实"],"page_start":42,"page_end":45,"dates":[{"year":1973,"month":12,"day":1}]},{"title":"开展群众性的革命故事活动","authors":["上海市金山县文化馆"],"page_start":46,"page_end":49,"dates":[{"year":1973,"month":12,"day":1}]},{"title":"把批孔和批林结合起来","authors":["天津市电磁线厂工人评论组"],"page_start":50,"page_end":51,"dates":[{"year":1973,"month":12,"day":1}]},{"title":"孔子是“全民教育家”吗？","authors":["唐晓文"],"page_start":52,"page_end":59,"dates":[{"year":1973,"month":9,"day":27}]},{"title":"林彪为什么咒骂秦始皇？","authors":["陈阳凤","李子林","梅倩"],"page_start":60,"page_end":65,"dates":[{"year":1973,"month":12,"day":1}]},{"title":"加速山区的农业建设","authors":["巴山"],"page_start":66,"page_end":70,"dates":[{"year":1973,"month":12,"day":1}]},{"title":"发展工业 支援农业","authors":["黎峰"],"page_start":71,"page_end":75,"dates":[{"year":1973,"month":12,"day":1}]},{"title":"保护环境 发展生产","authors":["湘晖"],"page_start":76,"page_end":79,"dates":[{"year":1973,"month":12,"day":1}]},{"title":"从进化论看唯物论和唯心论的斗争","authors":["陈燕生"],"page_start":80,"page_end":89,"dates":[{"year":1973,"month":12,"day":1}]},{"title":"红旗杂志一九七三年第一期到第十二期总目录","authors":["《红旗》杂志编辑部"],"page_start":90,"page_end":97,"dates":[{"year":1973,"month":12,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/5f27c701-5f3c-43f4-9a8d-368bf21a01aa.pdf'),
  },
  {
    entity: {
      id: '7ff24beb-487f-40d9-9e06-53efd52fe245',
      name: '红旗一九七三年第十期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/7ff24beb-487f-40d9-9e06-53efd52fe245.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"认真学习继续前进──庆祝中华人民共和国成立二十四周年","alias":"认真学习 继续前进──庆祝中华人民共和国成立二十四周年","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":10,"dates":[{"year":1973,"month":10,"day":1}]},{"title":"必须重视党的基本路线","authors":["齐永红"],"page_start":11,"page_end":15,"dates":[{"year":1973,"month":10,"day":1}]},{"title":"办好工农兵干部的学习班","authors":["钟文"],"page_start":16,"page_end":19,"dates":[{"year":1973,"month":10,"day":1}]},{"title":"霸权决定不了世界历史的命运","authors":["武群"],"page_start":20,"page_end":23,"dates":[{"year":1973,"month":10,"day":1}]},{"title":"共产党员要抵制资产阶级的腐蚀","authors":["天津动力机厂工人评论组"],"page_start":24,"page_end":26,"dates":[{"year":1973,"month":10,"day":1}]},{"title":"党委会要实行民主集中制","authors":["江雪原"],"page_start":27,"page_end":31,"dates":[{"year":1973,"month":10,"day":1}]},{"title":"学习《关于健全党委制》的一点体会","authors":["孙吉全"],"page_start":32,"page_end":35,"dates":[{"year":1973,"month":10,"day":1}]},{"title":"论尊儒反法","authors":["石仑"],"page_start":36,"page_end":46,"dates":[{"year":1973,"month":10,"day":1}]},{"title":"对编写哲学史的一点意见","authors":["张世英"],"page_start":47,"page_end":48,"dates":[{"year":1973,"month":8,"day":12}]},{"title":"杜鹃山","authors":["王树元"],"page_start":49,"page_end":86,"ocr":{"auto_vsplit":false,"vsplit":0.47,"content_thresholds":[0,0.15,0,0.2]},"dates":[{"year":1973,"month":9}]},{"title":"毛主席建军路线的赞歌——评革命现代京剧《杜鹃山》","authors":["王兴志"],"page_start":87,"page_end":91,"dates":[{"year":1973,"month":10,"day":1}]},{"title":"要勤俭办社","authors":["吕汾"],"page_start":92,"page_end":95,"dates":[{"year":1973,"month":10,"day":1}]},{"title":"丰收不忘储备，粮多坚持节约——辽宁辽中县裴家乡大队的调查","authors":["辽宁省辽中县革命委员会、辽中县六间房公社革命委员会联合调查组"],"page_start":96,"page_end":97,"dates":[{"year":1973,"month":10,"day":1}]},{"title":"女同志也能办男同志能办的事","authors":["山西临猗县王见大队“十姐妹”植棉小组"],"page_start":98,"page_end":100,"dates":[{"year":1973,"month":10,"day":1}]},{"title":"军民联防 加强战备","authors":["中国人民解放军北京部队某团党委会"],"page_start":101,"page_end":103,"dates":[{"year":1973,"month":10,"day":1}]},{"title":"随时准备歼灭入侵之敌","authors":["北京外文印刷厂民兵营"],"page_start":104,"page_end":105,"dates":[{"year":1973,"month":10,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/7ff24beb-487f-40d9-9e06-53efd52fe245.pdf'),
  },
  {
    entity: {
      id: 'f2bf6171-641b-4db8-971f-317adf1c5cb4',
      name: '红旗一九七三年第十一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/f2bf6171-641b-4db8-971f-317adf1c5cb4.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"共产党员要为大多数人谋利益——学习十大文件的体会","authors":["洪原"],"page_start":6,"page_end":10,"dates":[{"year":1973,"month":11,"day":1}]},{"title":"分析好，大有益","authors":["江汉"],"page_start":11,"page_end":15,"dates":[{"year":1973,"month":11,"day":1}]},{"title":"用党的基本路线教育农民——山西昔阳县的调查报告","authors":["冯东书"],"page_start":16,"page_end":22,"dates":[{"year":1973,"month":11,"day":1}]},{"title":"依靠工人阶级 加速煤炭生产","authors":["中国共产党开滦煤矿委员会"],"page_start":23,"page_end":27,"dates":[{"year":1973,"month":11,"day":1}]},{"title":"正确对待群众才能执行正确路线","authors":["肉孜·吐尔迪"],"page_start":28,"page_end":32,"dates":[{"year":1973,"month":11,"day":1}]},{"title":"秦王朝建立过程中复辟与反复辟的斗争，兼论儒法论争的社会基础","alias":"秦王朝建立过程中复辟与反复辟的斗争——兼论儒法论争的社会基础","authors":["罗思鼎"],"page_start":33,"page_end":43,"dates":[{"year":1973,"month":11,"day":1}]},{"title":"右倾机会主义和孔子思想","authors":["劲云戈"],"page_start":44,"page_end":49,"dates":[{"year":1973,"month":11,"day":1}]},{"title":"坚持用阶级观点研究《红楼梦》","authors":["孙文光"],"page_start":50,"page_end":57,"dates":[{"year":1973,"month":11,"day":1}]},{"title":"人类在战胜异常气候中前进","authors":["上海市气象局写作组"],"page_start":58,"page_end":62,"dates":[{"year":1973,"month":11,"day":1}]},{"title":"做知识青年上山下乡的促进派","authors":["严志"],"page_start":62,"page_end":67,"dates":[{"year":1973,"month":11,"day":1}]},{"title":"谈反潮流","authors":["李庆霖"],"page_start":68,"page_end":70,"dates":[{"year":1973,"month":11,"day":1}]},{"title":"科学普及读物要生动地宣传唯物辩证法——评新版《十万个为什么》","authors":["翟青"],"page_start":71,"page_end":75,"dates":[{"year":1973,"month":11,"day":1}]},{"title":"这样的评价符合历史实际吗？——评《中国哲学史资料简编》对孔子的介绍","authors":["钟泽","宋新"],"page_start":76,"page_end":81,"dates":[{"year":1973,"month":11,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/f2bf6171-641b-4db8-971f-317adf1c5cb4.pdf'),
  },
  {
    entity: {
      id: 'c0ae4e3a-f292-4359-9e09-2a859511e159',
      name: '红旗一九七三年第九期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/c0ae4e3a-f292-4359-9e09-2a859511e159.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"在中国共产党第十次全国代表大会上的报告","authors":["周恩来"],"page_start":8,"page_end":20,"dates":[{"year":1973,"month":8,"day":24}]},{"title":"王洪文在中共十大上关于修改党章的报告","authors":["王洪文"],"page_start":21,"page_end":26,"dates":[{"year":1973,"month":8,"day":24}]},{"title":"中国共产党章程","authors":[],"page_start":27,"page_end":31,"dates":[{"year":1973,"month":8,"day":28}]},{"title":"中国共产党第十次全国代表大会新闻公报","authors":[],"page_start":32,"page_end":38,"dates":[{"year":1973,"month":8,"day":29}]},{"title":"中国共产党第十届中央委员会第一次全体会议新闻公报","authors":[],"page_start":39,"page_end":39,"dates":[{"year":1973,"month":8,"day":30}]},{"title":"帝国主义是无产阶级社会革命的前夜——学习《帝国主义是资本主义的最高阶段》","authors":["常谦"],"page_start":40,"page_end":46,"dates":[{"year":1973,"month":9,"day":3}]},{"title":"充分发挥无产阶级先锋队的领导作用","authors":["安群"],"page_start":47,"page_end":51,"dates":[{"year":1973,"month":9,"day":3}]},{"title":"一条重要的历史经验","authors":["田志松"],"page_start":52,"page_end":56,"dates":[{"year":1973,"month":9,"day":3}]},{"title":"善于从本质上发现群众的积极性——学习《介绍-一个合作社》","authors":["俞彤"],"page_start":57,"page_end":61,"dates":[{"year":1973,"month":9,"day":3}]},{"title":"林彪是无产阶级专政的可耻叛徒","authors":["甘戈"],"page_start":62,"page_end":66,"dates":[{"year":1973,"month":9,"day":3}]},{"title":"要团结，不要分裂——批判林彪分裂党的罪行","authors":["北京怀柔县大蒲池沟大队党支部"],"page_start":67,"page_end":71,"dates":[{"year":1973,"month":9,"day":3}]},{"title":"努力实现工人阶级的历史任务——批判林彪破坏工人运动的罪行","authors":["天津市建筑工程局工人批判组"],"page_start":72,"page_end":77,"dates":[{"year":1973,"month":9,"day":3}]},{"title":"深入批林整风，加快牧区建设步伐","authors":["宝日勒岱"],"page_start":78,"page_end":81,"dates":[{"year":1973,"month":9,"day":3}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/c0ae4e3a-f292-4359-9e09-2a859511e159.pdf'),
  },
  {
    entity: {
      id: '61cd9fc8-4f3e-4426-9e07-827440d94115',
      name: '红旗一九七三年第八期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/61cd9fc8-4f3e-4426-9e07-827440d94115.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"重视上层建筑领域的革命","authors":["黎坚"],"page_start":6,"page_end":11,"dates":[{"year":1973,"month":8,"day":1}]},{"title":"改革大学招生制度的深远意义","authors":["朱研"],"page_start":12,"page_end":16,"dates":[{"year":1973,"month":8,"day":1}]},{"title":"在革命斗争中坚持看书学习","authors":["田志松"],"page_start":17,"page_end":20,"dates":[{"year":1973,"month":8,"day":1}]},{"title":"把“五·七”干校办得更好","authors":["钟文"],"page_start":21,"page_end":24,"dates":[{"year":1973,"month":8,"day":1}]},{"title":"共产党员要永做无产阶级先进分子","authors":["薛仑"],"page_start":25,"page_end":28,"dates":[{"year":1973,"month":8,"day":1}]},{"title":"工厂也要注意培养理论队伍","authors":["中国共产党武汉冶金建筑机械修造厂委员会"],"page_start":29,"page_end":33,"dates":[{"year":1973,"month":8,"day":1}]},{"title":"我们是怎样办农村图书室的？","authors":["中国共产党醴陵县委员会"],"page_start":34,"page_end":36,"dates":[{"year":1973,"month":8,"day":1}]},{"title":"农业科学研究要面向农村","authors":["中国共产党上海市农业科学院委员会"],"page_start":37,"page_end":40,"dates":[{"year":1973,"month":8,"day":1}]},{"title":"具有历史意义的战略转变——学习《抗日游击战争的战略问题》的一点体会","authors":["纪博涛"],"page_start":41,"page_end":45,"dates":[{"year":1973,"month":8,"day":1}]},{"title":"认真学习毛主席的十大军事原则","authors":["中国人民解放军昆明部队某团党委会"],"page_start":46,"page_end":50,"dates":[{"year":1973,"month":8,"day":1}]},{"title":"英明的战略部署——学习《关于平津战役的作战方针》","authors":["洪城"],"page_start":51,"page_end":55,"dates":[{"year":1973,"month":8,"day":1}]},{"title":"党委要抓大事","authors":["纪平"],"page_start":56,"page_end":59,"dates":[{"year":1973,"month":8,"day":1}]},{"title":"注意保护森林资源","authors":["华林茂"],"page_start":60,"page_end":64,"dates":[{"year":1973,"month":8,"day":1}]},{"title":"更正","authors":["中共保定地委、中共博野县委调查组"],"page_start":64,"page_end":64,"dates":[{"year":1973,"month":8,"day":1}]},{"title":"搞好农村商业的斗、批、改","authors":["河北东光县燕台购销服务处党支部"],"page_start":65,"page_end":68,"dates":[{"year":1973,"month":8,"day":1}]},{"title":"工人群众有无限的创造力——鞍铜第一初轧厂提高开坯能力的调查","authors":["鞍山市革命委员会调查组"],"page_start":69,"page_end":73,"dates":[{"year":1973,"month":8,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/61cd9fc8-4f3e-4426-9e07-827440d94115.pdf'),
  },
  {
    entity: {
      id: '0b64207e-acf7-43b0-a6ec-684e72f1c1e6',
      name: '红旗一九七三年第七期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/0b64207e-acf7-43b0-a6ec-684e72f1c1e6.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"牢记党的基本路线","authors":["钟实"],"page_start":6,"page_end":11,"dates":[{"year":1973,"month":7,"day":1}]},{"title":"维护和加强党的团结","authors":["巴山"],"page_start":12,"page_end":17,"dates":[{"year":1973,"month":7,"day":1}]},{"title":"积极地正确地开展思想斗争","authors":["河北阳原县下沙沟大队党支部"],"page_start":18,"page_end":21,"dates":[{"year":1973,"month":7,"day":1}]},{"title":"组织党员认真看书学习","authors":["吉林扶余县立新大队党总支委员会"],"page_start":22,"page_end":25,"dates":[{"year":1973,"month":7,"day":1}]},{"title":"路线对 面貌变","authors":["安徽安庆市郊区红光大队党支部"],"page_start":26,"page_end":29,"dates":[{"year":1973,"month":7,"day":1}]},{"title":"能上能下 能“官”能民","authors":["湘晖"],"page_start":30,"page_end":33,"dates":[{"year":1973,"month":7,"day":1}]},{"title":"做好发展新党员的工作","authors":["上海船舶修造厂轮机车间党总支委员会"],"page_start":34,"page_end":37,"dates":[{"year":1973,"month":7,"day":1}]},{"title":"坚持参加集体生产劳动","authors":["盘美英"],"page_start":38,"page_end":41,"dates":[{"year":1973,"month":7,"day":1}]},{"title":"充分挖掘现有工业生产潜力","authors":["仲岩"],"page_start":42,"page_end":46,"dates":[{"year":1973,"month":7,"day":1}]},{"title":"县办工业要为农业服务——福建龙海县的调查报告","authors":["农林部、第一机械工业部、福建省机械局调查组"],"page_start":47,"page_end":50,"dates":[{"year":1973,"month":7,"day":1}]},{"title":"平原作战","authors":["中国京剧团"],"page_start":51,"page_end":78,"ocr":{"auto_vsplit":false,"vsplit":0.47,"content_thresholds":[0,0.15,0,0.2]},"dates":[{"year":1973,"month":7,"day":1}]},{"title":"人民是打不破的铁壁铜墙——评革命现代京剧《平原作战》","authors":["辛文彤"],"page_start":79,"page_end":83,"dates":[{"year":1973,"month":7,"day":1}]},{"title":"人类对宇宙认识的发展","authors":["肖彤"],"page_start":84,"page_end":94,"dates":[{"year":1973,"month":7,"day":1}]},{"title":"称霸与偷骗","authors":["阳戈"],"page_start":95,"page_end":97,"dates":[{"year":1973,"month":7,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/0b64207e-acf7-43b0-a6ec-684e72f1c1e6.pdf'),
  },
  {
    entity: {
      id: '285ab922-3283-4e23-9a9f-6c09b4f89f4c',
      name: '红旗一九七三年第六期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/285ab922-3283-4e23-9a9f-6c09b4f89f4c.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"从总结经验中学习","authors":["云岚"],"page_start":8,"page_end":13,"dates":[{"year":1973,"month":6,"day":1}]},{"title":"加强干部队伍的建设","authors":["俞彤"],"page_start":14,"page_end":18,"dates":[{"year":1973,"month":6,"day":1}]},{"title":"掌握政策是领导机关的一项基本任务","authors":["青岩"],"page_start":19,"page_end":22,"dates":[{"year":1973,"month":6,"day":1}]},{"title":"自觉地改造主观世界","authors":["纪平"],"page_start":23,"page_end":27,"dates":[{"year":1973,"month":6,"day":1}]},{"title":"组织社会调查推动深入批修","authors":["中国人民解放军北京部队某部防化连党支部"],"page_start":28,"page_end":35,"dates":[{"year":1973,"month":6,"day":1}]},{"title":"团结胜利的保证","authors":["南郁"],"page_start":36,"page_end":38,"dates":[{"year":1973,"month":6,"day":1}]},{"title":"沿着为工农兵服务的方向继续前进——学习《在延安文艺座谈会上的讲话》","authors":["戚文德"],"page_start":39,"page_end":43,"dates":[{"year":1973,"month":6,"day":1}]},{"title":"大有希望的小将","authors":["任读"],"page_start":44,"page_end":47,"dates":[{"year":1973,"month":6,"day":1}]},{"title":"小评论一组（五篇）","authors":["薛立仑","湖北安陆县夹河公社顾李大队评论组","南宁市环境卫生工作队工人评论组","川沙县严桥公社革命委员会评论组","江苏大丰县利国小煤矿机电队"],"page_start":48,"page_end":56,"dates":[{"year":1973,"month":6,"day":1}]},{"title":"学大寨首先要学路线","authors":["湖南常宁县白沙公社福坪大队党支部"],"page_start":57,"page_end":60,"dates":[{"year":1973,"month":6,"day":1}]},{"title":"路线和政策教育促进了农业的发展","authors":["江苏如皋县革命委员会调查组"],"page_start":61,"page_end":64,"dates":[{"year":1973,"month":6,"day":1}]},{"title":"用辩证唯物论指导农田水利建设","authors":["中国共产党衡水县委员会"],"page_start":65,"page_end":68,"dates":[{"year":1973,"month":6,"day":1}]},{"title":"立足农村生产搞好购销工作——长安县商业部门的调查报告","authors":["陕西西安市革命委员会、长安县革命委员会联合调查组"],"page_start":69,"page_end":73,"dates":[{"year":1973,"month":6,"day":1}]},{"title":"在实践中寻找治虫的规律","authors":["罗河山"],"page_start":74,"page_end":77,"dates":[{"year":1973,"month":6,"day":1}]},{"title":"艰苦奋斗 勤俭办学——内蒙古五原县民族公社复丰大队民办小学的调查报告","authors":["中国共产党内蒙古自治区委员会调查组"],"page_start":78,"page_end":81,"dates":[{"year":1973,"month":6,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/285ab922-3283-4e23-9a9f-6c09b4f89f4c.pdf'),
  },
  {
    entity: {
      id: 'bcc6ea43-92e3-426e-85db-a7b1941c7252',
      name: '红旗一九七三年第五期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/bcc6ea43-92e3-426e-85db-a7b1941c7252.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"批修整风是一次深刻的社会主义教育","authors":["庄宁"],"page_start":8,"page_end":12,"dates":[{"year":1973,"month":5,"day":1}]},{"title":"思想必须适应客观情况的发展——学习《中国农村的社会主义高潮》序言和按语","authors":["冀岩"],"page_start":13,"page_end":17,"dates":[{"year":1973,"month":5,"day":1}]},{"title":"拒腐蚀，永不沾","authors":["田志松"],"page_start":18,"page_end":20,"dates":[{"year":1973,"month":5,"day":1}]},{"title":"历史的经验值得注意——谈读一点中国近代史","authors":["施斌"],"page_start":21,"page_end":29,"dates":[{"year":1973,"month":5,"day":1}]},{"title":"发展农业的根本问题在路线","authors":["安群"],"page_start":30,"page_end":35,"dates":[{"year":1973,"month":5,"day":1}]},{"title":"转炉炉龄是怎样提高的？","authors":["中国共产党首都钢铁公司炼钢厂委员会"],"page_start":36,"page_end":41,"dates":[{"year":1973,"month":5,"day":1}]},{"title":"基本建设要集中力量打歼灭战","authors":["郭建伟"],"page_start":42,"page_end":46,"dates":[{"year":1973,"month":5,"day":1}]},{"title":"进一步做好出版工作","authors":["郑磊"],"page_start":47,"page_end":51,"dates":[{"year":1973,"month":5,"day":1}]},{"title":"我们工人要努力学习革命理论","authors":["张福恒"],"page_start":52,"page_end":55,"dates":[{"year":1973,"month":5,"day":1}]},{"title":"努力提高革命责任感","authors":["张洪池"],"page_start":56,"page_end":60,"dates":[{"year":1973,"month":5,"day":1}]},{"title":"做批判修正主义的火车头","authors":["郭映福"],"page_start":61,"page_end":63,"dates":[{"year":1973,"month":5,"day":1}]},{"title":"全世界无产者团结战斗的光辉诗篇——读《鲍狄埃诗选》","authors":["司钟"],"page_start":64,"page_end":67,"dates":[{"year":1973,"month":5,"day":1}]},{"title":"进一步发挥工人阶级的主力军作用","authors":["《人民日报》编辑部"],"page_start":68,"page_end":70,"dates":[{"year":1973,"month":4,"day":24}]},{"title":"青年要站在革命队伍的前头——学习《青年运动的方向》的一点体会","authors":["谭闻"],"page_start":71,"page_end":74,"dates":[{"year":1973,"month":5,"day":1}]},{"title":"学习鲁迅 培养青年","authors":["周建人"],"page_start":75,"page_end":79,"dates":[{"year":1973,"month":5,"day":1}]},{"title":"我深深爱上了边疆的一草一木","authors":["朱克家"],"page_start":80,"page_end":84,"dates":[{"year":1973,"month":5,"day":1}]},{"title":"全心全意同工农相结合","authors":["颜景堂"],"page_start":85,"page_end":89,"dates":[{"year":1973,"month":5,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/bcc6ea43-92e3-426e-85db-a7b1941c7252.pdf'),
  },
  {
    entity: {
      id: '095c2e91-48a5-4823-b335-97b86ea9ec87',
      name: '红旗一九七三年第四期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/095c2e91-48a5-4823-b335-97b86ea9ec87.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"马克思列宁主义的一个基本原则——学习《对晋绥日报编辑人员的谈话》","authors":["延群"],"page_start":6,"page_end":11,"dates":[{"year":1973,"month":4,"day":1}]},{"title":"学会掌握共性个性的辩证法——学习《矛盾论》","authors":["洪原"],"page_start":12,"page_end":18,"dates":[{"year":1973,"month":4,"day":1}]},{"title":"从认识论看修正主义路线的实质","authors":["薛岑"],"page_start":19,"page_end":23,"dates":[{"year":1973,"month":4,"day":1}]},{"title":"运用党的基本路线深入批修","authors":["中国共产党云南冶金第三矿委员会"],"page_start":24,"page_end":27,"dates":[{"year":1973,"month":4,"day":1}]},{"title":"要树立巩固无产阶级专政的观念——学习《国家与革命》的一点体会","authors":["唐岐山"],"page_start":28,"page_end":32,"dates":[{"year":1973,"month":4,"day":1}]},{"title":"学习雷锋，提高路线觉悟","authors":["沈正平"],"page_start":33,"page_end":37,"dates":[{"year":1973,"month":4,"day":1}]},{"title":"努力培养马克思主义的理论队伍","authors":["齐永红"],"page_start":38,"page_end":41,"dates":[{"year":1973,"month":4,"day":1}]},{"title":"为革命当好配角","authors":["上海江湾化工机修厂工人写作组"],"page_start":42,"page_end":44,"dates":[{"year":1973,"month":4,"day":1}]},{"title":"要留有余地，不要消极保守","authors":["南京十月水泥广工人评论组"],"page_start":45,"page_end":46,"dates":[{"year":1973,"month":4,"day":1}]},{"title":"发展农业要有一个很大的干劲","authors":["江汉"],"page_start":47,"page_end":51,"dates":[{"year":1973,"month":4,"day":1}]},{"title":"进一步发展畜牧业","authors":["赵丰年"],"page_start":52,"page_end":54,"dates":[{"year":1973,"month":4,"day":1}]},{"title":"以牧为主——建设牧区内蒙古乌审旗乌审召公社的调查报告","authors":["中国共产党内蒙古自治区委员会调查组"],"page_start":55,"page_end":57,"dates":[{"year":1973,"month":4,"day":1}]},{"title":"农牧结合 以牧促农——河北博野县城关公社东风大队的调查报告","authors":["中国共产党保定地区委员会、中国共产党博野县委员会调查组"],"page_start":57,"page_end":59,"dates":[{"year":1973,"month":4,"day":1}]},{"title":"面貌变不变 根本在路线","authors":["中国共产党四川广元煤矿委员会"],"page_start":60,"page_end":64,"dates":[{"year":1973,"month":4,"day":1}]},{"title":"工人要努力掌握科学技术","authors":["姚锦钟"],"page_start":65,"page_end":69,"dates":[{"year":1973,"month":4,"day":1}]},{"title":"运用辩证法 粮棉双高产","authors":["河北成安县何横城大队党支部"],"page_start":70,"page_end":76,"dates":[{"year":1973,"month":4,"day":1}]},{"title":"我们是怎样取得管理水库的主动权的？","authors":["广东兴宁县合水水库管理处党支部"],"page_start":77,"page_end":81,"dates":[{"year":1973,"month":4,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/095c2e91-48a5-4823-b335-97b86ea9ec87.pdf'),
  },
  {
    entity: {
      id: 'e6c58ef8-9354-474e-989f-8fae9af88fc6',
      name: '红旗一九七三年第三期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/e6c58ef8-9354-474e-989f-8fae9af88fc6.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"抓住实质才能深入批修","authors":["甘文"],"page_start":6,"page_end":9,"dates":[{"year":1973,"month":3,"day":3}]},{"title":"要从本质上观察问题","authors":["纪平"],"page_start":10,"page_end":13,"dates":[{"year":1973,"month":3,"day":3}]},{"title":"坚定地相信和依靠群众的多数","authors":["安群"],"page_start":14,"page_end":18,"dates":[{"year":1973,"month":3,"day":3}]},{"title":"积极培养少数民族干部","authors":["中国共产党丽江地区委员会"],"page_start":19,"page_end":22,"dates":[{"year":1973,"month":3,"day":3}]},{"title":"小评论一组（五篇）","authors":["安徽芜湖市工人评论组","江苏泰县河横大队评论组","上海第三十棉纺织厂工人评论组","陆珊","山东临朐县城关公社评论组"],"page_start":23,"page_end":31,"dates":[{"year":1973,"month":3,"day":3}]},{"title":"认真总结经验 加速农业发展","authors":["江虹"],"page_start":32,"page_end":37,"dates":[{"year":1973,"month":3,"day":3}]},{"title":"沙滩变绿洲——陕西神木县窝兔采当大队植树造林的调查报告","authors":["农林部调查组"],"page_start":38,"page_end":41,"dates":[{"year":1973,"month":3,"day":3}]},{"title":"淡水养鱼 大有可为——湖北广济县枚川区的调查报告","authors":["农林部调查组"],"page_start":42,"page_end":45,"dates":[{"year":1973,"month":3,"day":3}]},{"title":"更好地发挥妇女劳动力的作用——江苏启东县吕四公社十大队的调查报告","authors":["启东县革命委员会调查组"],"page_start":46,"page_end":48,"dates":[{"year":1973,"month":3,"day":3}]},{"title":"节约人力也能增加生产——山西大同市姜家湾煤矿的调查报告","authors":["中国共产党大同市委员会报道组"],"page_start":49,"page_end":51,"dates":[{"year":1973,"month":3,"day":3}]},{"title":"在实践中提高医疗技术","authors":["王桂珍"],"page_start":52,"page_end":54,"dates":[{"year":1973,"month":3,"day":3}]},{"title":"阶级斗争是社会主义社会发展的动力——学习《共产党宣言》的一点体会","authors":["郭宏杰"],"page_start":55,"page_end":58,"dates":[{"year":1973,"month":3,"day":3}]},{"title":"做工作要“从群众中来，到群众中去”","authors":["丁凤英"],"page_start":59,"page_end":62,"dates":[{"year":1973,"month":3,"day":3}]},{"title":"生气勃勃地开展共青团工作","authors":["《人民日报》编辑部"],"page_start":63,"page_end":65,"dates":[{"year":1973,"month":2,"day":22}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/e6c58ef8-9354-474e-989f-8fae9af88fc6.pdf'),
  },
  {
    entity: {
      id: '8e6be60c-f1a8-4eb9-9d55-43449ad516cc',
      name: '红旗一九七三年第二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/8e6be60c-f1a8-4eb9-9d55-43449ad516cc.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"毛泽东等祝贺《越南问题的巴黎协定》正式签订的电报","alias":"热烈祝贺关于越南问题的巴黎协定正式签订——毛主席董代主席朱委员长周总理致电孙德胜主席黎笋第一书记长征主席范文同总理和阮友寿主席黄晋发主席","authors":["毛泽东"],"page_start":6,"page_end":7,"dates":[{"year":1973,"month":1,"day":29}]},{"title":"党的建设必须密切联系党的政治路线——学习《<共产党人>发刊词》","authors":["俞彤"],"page_start":8,"page_end":13,"dates":[{"year":1973,"month":2,"day":1}]},{"title":"要统筹兼顾——学习《关于正确处理人民内部矛盾的问题》","authors":["云岚"],"page_start":14,"page_end":18,"dates":[{"year":1973,"month":2,"day":1}]},{"title":"“灵魂深处爆发革命”是黑《修养》的翻版","authors":["天津铁路分局天津站工人评论组"],"page_start":19,"page_end":22,"dates":[{"year":1973,"month":2,"day":1}]},{"title":"坚持辩证唯物论和党性的统一","authors":["宜江"],"page_start":23,"page_end":25,"dates":[{"year":1973,"month":2,"day":1}]},{"title":"解决思想间题不能“雷厉风行”","authors":["中国人民解放军北京卫戍区某部一连党支部"],"page_start":26,"page_end":28,"dates":[{"year":1973,"month":2,"day":1}]},{"title":"把认识路线搞正确","authors":["吕玉兰"],"page_start":29,"page_end":31,"dates":[{"year":1973,"month":2,"day":1}]},{"title":"谈谈科学种田","authors":["陈永贵"],"page_start":32,"page_end":41,"dates":[{"year":1973,"month":2,"day":1}]},{"title":"用总路线的精神办钢铁工业——上海市多快好省发展钢铁生产的调查报告","authors":["冶金工业部调查组"],"page_start":42,"page_end":47,"dates":[{"year":1973,"month":2,"day":1}]},{"title":"根据工农兵的需要办商店","authors":["北京市东直门外副食品商店党支部"],"page_start":48,"page_end":51,"dates":[{"year":1973,"month":2,"day":1}]},{"title":"为社会主义建设多作贡献","authors":["大连机床厂革命委员会"],"page_start":52,"page_end":55,"dates":[{"year":1973,"month":2,"day":1}]},{"title":"抓好粮食生产和多种经营","authors":["陆严"],"page_start":56,"page_end":60,"dates":[{"year":1973,"month":2,"day":1}]},{"title":"做好青年的思想工作","authors":["共青团上海第三钢铁厂委员会"],"page_start":61,"page_end":66,"dates":[{"year":1973,"month":2,"day":1}]},{"title":"破旧俗 立新风","authors":["中国共产党启东县惠和公社委员会"],"page_start":67,"page_end":70,"dates":[{"year":1973,"month":2,"day":1}]},{"title":"拍出更多更好的新闻纪录影片","authors":["方亮"],"page_start":71,"page_end":74,"dates":[{"year":1973,"month":2,"day":1}]},{"title":"一切从人民的利益出发","authors":["中国人民解放军沈阳部队某团党委会"],"page_start":75,"page_end":78,"dates":[{"year":1973,"month":2,"day":1}]},{"title":"草原军民 心心相连","authors":["苏荣扎布"],"page_start":79,"page_end":81,"dates":[{"year":1973,"month":2,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/8e6be60c-f1a8-4eb9-9d55-43449ad516cc.pdf'),
  },
  {
    entity: {
      id: '8d6663d1-3539-4513-9851-4c91a374a489',
      name: '红旗一九七三年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/8d6663d1-3539-4513-9851-4c91a374a489.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"新年献词（一九七三年元旦社论）","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":11,"dates":[{"year":1973,"month":1,"day":1}]},{"title":"坚持实事求是和群众路线的方法","authors":["甘戈","庄宁"],"page_start":12,"page_end":17,"dates":[{"year":1973,"month":1,"day":1}]},{"title":"全心全意地为人民服务","authors":["钟实"],"page_start":18,"page_end":21,"dates":[{"year":1973,"month":1,"day":1}]},{"title":"千万不要忘记阶级和阶级斗争","authors":["辛永铭"],"page_start":22,"page_end":25,"dates":[{"year":1973,"month":1,"day":1}]},{"title":"要全面地看问题","authors":["南郁"],"page_start":26,"page_end":30,"dates":[{"year":1973,"month":1,"day":1}]},{"title":"用唯物辩证法观察路线斗争——学习《路德维希·费尔巴哈和德国古典哲学的终结》的一点体会","authors":["方兴"],"page_start":31,"page_end":35,"dates":[{"year":1973,"month":1,"day":1}]},{"title":"永远走与工农相结合的道路","authors":["胡守正"],"page_start":36,"page_end":39,"dates":[{"year":1973,"month":1,"day":1}]},{"title":"艰苦奋斗 勤俭办社","authors":["湖北沔阳县榨湾大队党支部"],"page_start":40,"page_end":43,"dates":[{"year":1973,"month":1,"day":1}]},{"title":"掌握治碱规律 夺取粮棉丰收","authors":["中国共产党新乡县洪门公社委员会"],"page_start":44,"page_end":49,"dates":[{"year":1973,"month":1,"day":1}]},{"title":"队有储备 户有余粮——山西广灵县翟町大队的调查报告","authors":["中国共产党雁北地区委员会、中国共产党广灵县委员会调查组"],"page_start":50,"page_end":52,"dates":[{"year":1973,"month":1,"day":1}]},{"title":"实事求是地领导农业生产","authors":["中国共产党榆树县委员会"],"page_start":53,"page_end":56,"dates":[{"year":1973,"month":1,"day":1}]},{"title":"自力更生办水电——广东梅县办小水电的调查报告","authors":["梅县地区革命委员会调查组"],"page_start":57,"page_end":59,"dates":[{"year":1973,"month":1,"day":1}]},{"title":"永远发扬艰苦朴素的优良作风","authors":["中国人民解放军南京部队某部高炮三连党支部"],"page_start":60,"page_end":63,"dates":[{"year":1973,"month":1,"day":1}]},{"title":"在斗争中培养工人干部","authors":["任菁"],"page_start":64,"page_end":66,"dates":[{"year":1973,"month":1,"day":1}]},{"title":"要深人细致地做思想工作","authors":["金瓯"],"page_start":67,"page_end":71,"dates":[{"year":1973,"month":1,"day":1}]},{"title":"握紧的拳头有力量","authors":["河南林县元家庄大队党支部"],"page_start":72,"page_end":73,"dates":[{"year":1973,"month":1,"day":1}]},{"title":"微积分的理论是怎么来的？","authors":["舒立"],"page_start":74,"page_end":81,"dates":[{"year":1973,"month":1,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/8d6663d1-3539-4513-9851-4c91a374a489.pdf'),
  },
  {
    entity: {
      id: '0d948a84-85f8-4e30-b43d-9148bae6609d',
      name: '红旗一九七二年第十二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/0d948a84-85f8-4e30-b43d-9148bae6609d.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"做工作要敢于负责","authors":["严平"],"page_start":8,"page_end":11,"dates":[{"year":1972,"month":12,"day":1}]},{"title":"扶植和发展革命的新生事物","authors":["高戈"],"page_start":12,"page_end":15,"dates":[{"year":1972,"month":12,"day":1}]},{"title":"要用积极的态度去解决间题","authors":["薛岑"],"page_start":16,"page_end":19,"dates":[{"year":1972,"month":12,"day":1}]},{"title":"小评论一组（六篇）","authors":["江苏高淳县丹湖公社评论组","上海新华电器模具厂党支部","程平","湖南岳阳县南正街综合商店评论组","江卓成","吉林九台县鸡鸣山公社评论组"],"page_start":20,"page_end":28,"dates":[{"year":1972,"month":12,"day":1}]},{"title":"坚持计划用粮、节约用粮","authors":["洪桥"],"page_start":29,"page_end":31,"dates":[{"year":1972,"month":12,"day":1}]},{"title":"加强农业科学研究","authors":["任为农"],"page_start":32,"page_end":36,"dates":[{"year":1972,"month":12,"day":1}]},{"title":"学习辩证法 改造低产田","authors":["湖北安陆县崔兴公社崔沟大队党支部"],"page_start":37,"page_end":40,"dates":[{"year":1972,"month":12,"day":1}]},{"title":"努力实现机械化—―徐州铁路分局车辆段的调查报告","authors":["江苏徐州市革命委员会报道组"],"page_start":41,"page_end":44,"dates":[{"year":1972,"month":12,"day":1}]},{"title":"介绍一个清洁工人办的化工厂","authors":["河北秦皇岛市革命委员会调查组"],"page_start":45,"page_end":47,"dates":[{"year":1972,"month":12,"day":1}]},{"title":"春秋战国时期思想领域内两条路线的斗争——从儒法论争看春秋战国时期的社会变革","authors":["杨荣国"],"page_start":48,"page_end":57,"dates":[{"year":1972,"month":12,"day":1}]},{"title":"毛主席的革命文艺路线给了我新的艺术生命","authors":["李炳淑"],"page_start":58,"page_end":62,"dates":[{"year":1972,"month":12,"day":1}]},{"title":"全心全意为社员群众防病治病","authors":["孙卫东"],"page_start":63,"page_end":65,"dates":[{"year":1972,"month":12,"day":1}]},{"title":"我们是怎样巩固合作医疗的？","authors":["陕西延安县南泥湾公社马坊大队医疗站"],"page_start":66,"page_end":68,"dates":[{"year":1972,"month":12,"day":1}]},{"title":"坚持农民业余教育二十年","authors":["中国共产党蕲春县孙冲公社委员会"],"page_start":69,"page_end":72,"dates":[{"year":1972,"month":12,"day":1}]},{"title":"课文两篇","authors":[],"page_start":72,"page_end":72,"dates":[{"year":1972,"month":12,"day":1}]},{"title":"在实践斗争中增长才干——学习辩证唯物论的认识论的一点体会","authors":["吴桂贤"],"page_start":73,"page_end":78,"dates":[{"year":1972,"month":12,"day":1}]},{"title":"要永远保持普通劳动者的本色——学习《法兰西内战》的一点体会","authors":["尉凤英"],"page_start":79,"page_end":81,"dates":[{"year":1972,"month":12,"day":1}]},{"title":"红旗杂志一九七二年第一期到第十二期总目录","authors":["《红旗》杂志编辑部"],"page_start":82,"page_end":89,"dates":[{"year":1972,"month":12,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/0d948a84-85f8-4e30-b43d-9148bae6609d.pdf'),
  },
  {
    entity: {
      id: '56c4afc1-0f03-4f92-b376-2e72682a26ae',
      name: '红旗一九七二年第十一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/56c4afc1-0f03-4f92-b376-2e72682a26ae.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"中华人民共和国政府声明","authors":[],"page_start":6,"page_end":6,"dates":[{"year":1972,"month":10,"day":30}]},{"title":"加强党的一元化领导","authors":["钟实"],"page_start":7,"page_end":12,"dates":[{"year":1972,"month":11,"day":1}]},{"title":"谦虚谨慎 乘胜前进","authors":["辛源"],"page_start":13,"page_end":15,"dates":[{"year":1972,"month":11,"day":1}]},{"title":"要从思想上弄清楚路线是非","authors":["云岚"],"page_start":16,"page_end":19,"dates":[{"year":1972,"month":11,"day":1}]},{"title":"关键在于提高马列主义理论水平——谈批修整风如何深入下去","authors":["《解放日报》评论员"],"page_start":20,"page_end":21,"dates":[{"year":1972,"month":10,"day":23}]},{"title":"认真总结正反两方面的经验","authors":["庄宁"],"page_start":22,"page_end":25,"dates":[{"year":1972,"month":11,"day":1}]},{"title":"领导工作要坚持群众路线","authors":["中国共产党个旧市委员会"],"page_start":26,"page_end":28,"dates":[{"year":1972,"month":11,"day":1}]},{"title":"奇袭白虎团","authors":["山东省京剧团《奇袭白虎团》剧组"],"page_start":29,"page_end":57,"ocr":{"auto_vsplit":false,"vsplit":0.47,"content_thresholds":[0,0.15,0,0.2]},"dates":[{"year":1972,"month":9}]},{"title":"中朝人民战斗友谊的壮丽颂歌——评革命现代京剧《奇袭白虎团》","authors":["路戈"],"page_start":58,"page_end":61,"dates":[{"year":1972,"month":11,"day":1}]},{"title":"节约一切可能节约的人力","authors":["唐山机车车辆工厂工人评论组"],"page_start":62,"page_end":65,"dates":[{"year":1972,"month":11,"day":1}]},{"title":"坚持储粮 备战备荒——广西全州县紫岭大队红星生产队的调查报告","authors":["中国共产党全州县委员会调查组"],"page_start":66,"page_end":67,"dates":[{"year":1972,"month":11,"day":1}]},{"title":"做好后进队的转化工作","authors":["中国共产党应城县委员会"],"page_start":68,"page_end":70,"dates":[{"year":1972,"month":11,"day":1}]},{"title":"了解一些民族解放运动的历史——四谈读一点世界史","authors":["史军"],"page_start":71,"page_end":76,"dates":[{"year":1972,"month":11,"day":1}]},{"title":"学一点地理","authors":["华志海"],"page_start":77,"page_end":81,"dates":[{"year":1972,"month":11,"day":1}]},{"title":"对于一个提法的建议","authors":["肖学军"],"page_start":81,"page_end":81,"dates":[{"year":1972,"month":11,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/56c4afc1-0f03-4f92-b376-2e72682a26ae.pdf'),
  },
  {
    entity: {
      id: '037434cb-cb09-486c-881f-67c54338ba91',
      name: '红旗一九七二年第十期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/037434cb-cb09-486c-881f-67c54338ba91.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"夺取新的胜利──庆祝中华人民共和国成立二十三周年","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":12,"dates":[{"year":1972,"month":10,"day":1}]},{"title":"中华人民共和国政府、日本国政府联合声明","authors":["新华社"],"page_start":13,"page_end":14,"dates":[{"year":1972,"month":9,"day":29}]},{"title":"从路线上划清是非界限","authors":["江汉"],"page_start":15,"page_end":20,"dates":[{"year":1972,"month":10,"day":1}]},{"title":"大家都来关心青少年的成长","authors":["谭闻"],"page_start":21,"page_end":25,"dates":[{"year":1972,"month":10,"day":1}]},{"title":"继续落实党对知识分子的政策","authors":["中国共产党清华大学委员会"],"page_start":26,"page_end":31,"dates":[{"year":1972,"month":10,"day":1}]},{"title":"克服经验主义——学习《唯物主义和经验批判主义》的一点体会","authors":["倪志福"],"page_start":32,"page_end":36,"dates":[{"year":1972,"month":10,"day":1}]},{"title":"按党的原则办事","authors":["甘戈"],"page_start":37,"page_end":39,"dates":[{"year":1972,"month":10,"day":1}]},{"title":"农业和工业互相促进——贯彻“以农业为基础、工业为主导”总方针的一点体会","authors":["俞中远"],"page_start":40,"page_end":46,"dates":[{"year":1972,"month":10,"day":1}]},{"title":"毛主席指引瑶家走上了幸福路","authors":["云南河口瑶族自治县瑶山公社党委会"],"page_start":47,"page_end":50,"dates":[{"year":1972,"month":10,"day":1}]},{"title":"挖掘潜力 增加生产","authors":["中国共产党大庆油田石油化工总厂委员会"],"page_start":51,"page_end":54,"dates":[{"year":1972,"month":10,"day":1}]},{"title":"依靠群众治理海河","authors":["江冀"],"page_start":55,"page_end":60,"dates":[{"year":1972,"month":10,"day":1}]},{"title":"更好地发展工艺美术生产","authors":["钟青"],"page_start":61,"page_end":65,"dates":[{"year":1972,"month":10,"day":1}]},{"title":"北树南移的哲学启示","authors":["上海市果品杂货公司宝山果园党支部"],"page_start":66,"page_end":70,"dates":[{"year":1972,"month":10,"day":1}]},{"title":"从工人中积极培养新干部","authors":["中国共产党湖南水口山矿务局委员会"],"page_start":71,"page_end":74,"dates":[{"year":1972,"month":10,"day":1}]},{"title":"来信","authors":["郭沫若"],"page_start":74,"page_end":74,"dates":[{"year":1972,"month":9,"day":8}]},{"title":"努力培养妇女干部","authors":["广西梧州市郊区东兴大队党支部"],"page_start":75,"page_end":78,"dates":[{"year":1972,"month":10,"day":1}]},{"title":"青年工人要为革命学好技术","authors":["田志松"],"page_start":79,"page_end":81,"dates":[{"year":1972,"month":10,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/037434cb-cb09-486c-881f-67c54338ba91.pdf'),
  },
  {
    entity: {
      id: '727a5bc3-9baf-4460-8643-9aee2963e657',
      name: '红旗一九七二年第九期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/727a5bc3-9baf-4460-8643-9aee2963e657.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"要善于进行比较","authors":["安群"],"page_start":6,"page_end":10,"dates":[{"year":1972,"month":9,"day":1}]},{"title":"永远保持艰苦奋斗的政治本色","authors":["洪城"],"page_start":11,"page_end":14,"dates":[{"year":1972,"month":9,"day":1}]},{"title":"坚持党的基本路线 巩固无产阶级专政——学习《国家与革命》","authors":["李子元"],"page_start":15,"page_end":20,"dates":[{"year":1972,"month":9,"day":1}]},{"title":"中国革命战争的根本指针——学习《中国革命战争的战略问题》","authors":["金灿"],"page_start":21,"page_end":26,"dates":[{"year":1972,"month":9,"day":1}]},{"title":"运用毛主席哲学思想指导养路","authors":["辽宁新金县公路管理段金山养路道班"],"page_start":27,"page_end":31,"dates":[{"year":1972,"month":9,"day":1}]},{"title":"从实际出发 向群众学习","authors":["黄炳秀"],"page_start":35,"page_end":38,"dates":[{"year":1972,"month":9,"day":1}]},{"title":"怎样使学员学得生动活泼，学得主动？","authors":["清华大学革命委员会"],"page_start":39,"page_end":43,"dates":[{"year":1972,"month":9,"day":1}]},{"title":"形象化教学与培养科学抽象能力——基础理论课改革的一点体会","authors":["大连工学院革命委员会"],"page_start":44,"page_end":48,"dates":[{"year":1972,"month":9,"day":1}]},{"title":"根据工人学员的特点组织理论教学","authors":["中国共产党上海机床厂委员会"],"page_start":49,"page_end":53,"dates":[{"year":1972,"month":9,"day":1}]},{"title":"搞好自然科学基础理论课教学","authors":["北京大学教育革命组"],"page_start":54,"page_end":57,"dates":[{"year":1972,"month":9,"day":1}]},{"title":"切实做好厂校挂钩","authors":["裴玉"],"page_start":58,"page_end":60,"dates":[{"year":1972,"month":9,"day":1}]},{"title":"发挥“教”和“学”两个方面的积极性","authors":["上海市吴淞中学党支部"],"page_start":61,"page_end":63,"dates":[{"year":1972,"month":9,"day":1}]},{"title":"小评论一组（六篇）","authors":["江苏东台县城东公社评论组","上海第三十一棉纺织厂工人评论组","上海重型机器厂工人评论组","南通七一机床厂工人评论组","罗长耕","魏重阳","张玲云"],"page_start":64,"page_end":72,"dates":[{"year":1972,"month":9,"day":1}]},{"title":"拍摄更多更好的科教影片","authors":["方亮"],"page_start":73,"page_end":76,"dates":[{"year":1972,"month":9,"day":1}]},{"title":"在“反酗酒”的背后","authors":["阳戈"],"page_start":77,"page_end":80,"dates":[{"year":1972,"month":9,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/727a5bc3-9baf-4460-8643-9aee2963e657.pdf'),
  },
  {
    entity: {
      id: 'ea68946d-0294-45de-9d96-d32246372af9',
      name: '红旗一九七二年第七期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/ea68946d-0294-45de-9d96-d32246372af9.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"掌握历史发展的总趋势——学习《关于重庆谈判》的一点体会","authors":["洪原"],"page_start":8,"page_end":14,"dates":[{"year":1972,"month":7,"day":1}]},{"title":"坚持进行党的正确路线的教育——学习《关于纠正党内的错误思想》","authors":["靳学民"],"page_start":15,"page_end":20,"dates":[{"year":1972,"month":7,"day":1}]},{"title":"发扬党的谦虚谨慎的优良作风","authors":["湘晖"],"page_start":21,"page_end":24,"dates":[{"year":1972,"month":7,"day":1}]},{"title":"发挥共产党员的先锋模范作用","authors":["中国共产党昆明机床厂委员会"],"page_start":25,"page_end":28,"dates":[{"year":1972,"month":7,"day":1}]},{"title":"党的基本路线指引我们胜利前进","authors":["安徽固镇县瓦坊大队党支部"],"page_start":29,"page_end":32,"dates":[{"year":1972,"month":7,"day":1}]},{"title":"用整风的方法坚持看书学习","authors":["中国共产党江西九〇九地质队委员会"],"page_start":33,"page_end":37,"dates":[{"year":1972,"month":7,"day":1}]},{"title":"学一点政治经济学","authors":["方海"],"page_start":38,"page_end":45,"dates":[{"year":1972,"month":7,"day":1}]},{"title":"两种分配制度的本质区别——学习《雇佣劳动与资本》的一点体会","authors":["上海沪东造船厂阀件车间小车四组"],"page_start":46,"page_end":51,"dates":[{"year":1972,"month":7,"day":1}]},{"title":"我们是怎样结合社会调查学习政治经济学的","authors":["武汉大学政治经济学系"],"page_start":52,"page_end":58,"dates":[{"year":1972,"month":7,"day":1}]},{"title":"中国古代史的分期问题","authors":["郭沫若"],"page_start":59,"page_end":65,"dates":[{"year":1972,"month":7,"day":1}]},{"title":"不断增强新老干部的革命团结","authors":["江虹"],"page_start":66,"page_end":70,"dates":[{"year":1972,"month":7,"day":1}]},{"title":"编写外语教材的一些体会","authors":["上海外国语学院教育革命组"],"page_start":71,"page_end":77,"dates":[{"year":1972,"month":7,"day":1}]},{"title":"按客观规律办事","authors":["卢珊"],"page_start":78,"page_end":84,"dates":[{"year":1972,"month":7,"day":1}]},{"title":"我们治服“碱老虎”的才能是从那里来的？","authors":["张文兰","邓宏旺"],"page_start":85,"page_end":89,"dates":[{"year":1972,"month":7,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/ea68946d-0294-45de-9d96-d32246372af9.pdf'),
  },
  {
    entity: {
      id: '0daa87bc-e961-49ba-84a3-516e1d66526a',
      name: '红旗一九七二年第八期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/0daa87bc-e961-49ba-84a3-516e1d66526a.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"发扬光荣传统──纪念中国人民解放军创建四十五周年","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":7,"page_end":8,"dates":[{"year":1972,"month":8,"day":1}]},{"title":"掌握社会主义时期阶级斗争的规律","authors":["纪平"],"page_start":9,"page_end":13,"dates":[{"year":1972,"month":8,"day":1}]},{"title":"毛主席战略思想的伟大胜利——学习《关于辽沈战役的作战方针》","authors":["沈钧"],"page_start":14,"page_end":18,"dates":[{"year":1972,"month":8,"day":1}]},{"title":"在批修整风中坚持认真看书学习","authors":["齐学思"],"page_start":19,"page_end":22,"dates":[{"year":1972,"month":8,"day":1}]},{"title":"从认识史看先验论的破产","authors":["唐晓文"],"page_start":23,"page_end":29,"dates":[{"year":1972,"month":8,"day":1}]},{"title":"把看书学习和路线教育结合起来","authors":["中国人民解放军北京部队某部四连党支部"],"page_start":30,"page_end":33,"dates":[{"year":1972,"month":8,"day":1}]},{"title":"让党的基本路线在连队生根","authors":["中国人民解放军武汉部队某团党委会"],"page_start":34,"page_end":37,"dates":[{"year":1972,"month":8,"day":1}]},{"title":"把革命大批判长期坚持下去","authors":["天津市第四棉纺织厂工人评论组"],"page_start":38,"page_end":42,"dates":[{"year":1972,"month":8,"day":1}]},{"title":"认真改进文风","authors":["齐永红"],"page_start":43,"page_end":45,"dates":[{"year":1972,"month":8,"day":1}]},{"title":"请读两篇好而短的调查报告","authors":["商业部"],"page_start":46,"page_end":49,"dates":[{"year":1972,"month":7,"day":24}]},{"title":"“瘸腿队”的帽子是怎样甩掉的？——北京顺义县井上大队的调查报告","authors":["中国共产党北京市委员会调查组"],"page_start":50,"page_end":52,"dates":[{"year":1972,"month":8,"day":1}]},{"title":"一个积极支援农业的供销社","authors":["山西神池县革命委员会调查组"],"page_start":53,"page_end":55,"dates":[{"year":1972,"month":8,"day":1}]},{"title":"进一步办好轻工业","authors":["钟青"],"page_start":56,"page_end":60,"dates":[{"year":1972,"month":8,"day":1}]},{"title":"以粮为纲 全面发展——江苏海安县的调查报告","authors":["农林部调查组"],"page_start":61,"page_end":65,"dates":[{"year":1972,"month":8,"day":1}]},{"title":"关于要重视对青少年的思想教育工作的讨论（五篇）","authors":["济南市革命委员会几名青年工作者","长沙市南区十七名小学教师","邓湘雄","鲁志德","洛阳轴承厂工具分厂第五团支部"],"page_start":66,"page_end":73,"dates":[{"year":1972,"month":8,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/0daa87bc-e961-49ba-84a3-516e1d66526a.pdf'),
  },
  {
    entity: {
      id: 'ef0a79bf-0527-4dc3-b978-07f6d4d0d79b',
      name: '红旗一九七二年第六期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/ef0a79bf-0527-4dc3-b978-07f6d4d0d79b.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"坚持毛主席革命路线就是胜利——纪念毛主席《在延安文艺座谈会上的讲话》发表三十周年","authors":["《红旗》杂志编辑部"],"page_start":7,"page_end":10,"dates":[{"year":1972,"month":6,"day":1}]},{"title":"紧紧地掌握党的总路线——学习《在晋绥干部会议上的讲话》的一点体会","authors":["宇文平"],"page_start":11,"page_end":16,"dates":[{"year":1972,"month":6,"day":1}]},{"title":"沿着毛主席无产阶级文艺路线前进——革命现代京剧《龙江颂》创作体会","authors":["上海市《龙江颂》剧组"],"page_start":17,"page_end":26,"dates":[{"year":1972,"month":6,"day":1}]},{"title":"经常进行党的基本路线教育——云南治金第一矿的调查报告","authors":["云南省革命委员会调查组"],"page_start":27,"page_end":30,"dates":[{"year":1972,"month":6,"day":1}]},{"title":"对技术人员进行路线教育的一些经验——吉林热电厂的调查报告","authors":["吉林省革命委员会调查组"],"page_start":31,"page_end":35,"dates":[{"year":1972,"month":6,"day":1}]},{"title":"读一点有关帝国主义的历史——三谈读一点世界史","authors":["史军"],"page_start":36,"page_end":43,"dates":[{"year":1972,"month":6,"day":1}]},{"title":"进一步开展群众性的体育活动","authors":["朱郁"],"page_start":44,"page_end":48,"dates":[{"year":1972,"month":6,"day":1}]},{"title":"总结正确处理农、轻、重关系的经验","authors":["钟力成"],"page_start":49,"page_end":56,"dates":[{"year":1972,"month":6,"day":1}]},{"title":"干部必须坚持参加集体生产劳动——江苏涟水县前进大队的调查报告","authors":["中国共产觉江苏省淮阴地区委员会、中国共产党涟水县委员会联合调查"],"page_start":57,"page_end":62,"dates":[{"year":1972,"month":6,"day":1}]},{"title":"人民群众是历史的创造者——驳“英雄和奴隶共同创造历史”","authors":["田志松"],"page_start":63,"page_end":70,"dates":[{"year":1972,"month":6,"day":1}]},{"title":"文艺问题上两种认识论的斗争","authors":["方刚"],"page_start":71,"page_end":76,"dates":[{"year":1972,"month":6,"day":1}]},{"title":"“复制天才”论是反动的优生学的新变种","authors":["梁正兰"],"page_start":77,"page_end":81,"dates":[{"year":1972,"month":6,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/ef0a79bf-0527-4dc3-b978-07f6d4d0d79b.pdf'),
  },
  {
    entity: {
      id: '4a3a38a2-b387-40ae-8ddd-30fb64ef4d43',
      name: '红旗一九七二年第五期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/4a3a38a2-b387-40ae-8ddd-30fb64ef4d43.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"抓紧思想和政治路线方面的教育","authors":["《红旗》杂志编辑部"],"page_start":8,"page_end":10,"dates":[{"year":1972,"month":5,"day":1}]},{"title":"坚持认真看书学习","authors":["沈茂思"],"page_start":11,"page_end":16,"dates":[{"year":1972,"month":5,"day":1}]},{"title":"摆事实，讲道理","authors":["安群"],"page_start":17,"page_end":20,"dates":[{"year":1972,"month":5,"day":1}]},{"title":"再谈读一点世界史——关于要着重读一点近代史和现代史","authors":["史军"],"page_start":21,"page_end":27,"dates":[{"year":1972,"month":5,"day":1}]},{"title":"联系现实斗争进行基本路线的教育——湖南新田县大坪塘公社大坪塘大队的调查报告","authors":["中国共产党湖南省零陵地区委员会、中国共产党新田县委员会联合调查组"],"page_start":28,"page_end":31,"dates":[{"year":1972,"month":5,"day":1}]},{"title":"把路线教育和斗批改结合起来——沈阳建筑机械厂的调查报告","authors":["沈阳市革命委员会调查组"],"page_start":32,"page_end":34,"dates":[{"year":1972,"month":5,"day":1}]},{"title":"按照毛主席建军路线抓紧军事训练","authors":["中国人民解放军北京部队某团党委会"],"page_start":35,"page_end":37,"dates":[{"year":1972,"month":5,"day":1}]},{"title":"执行“惩前瑟后、治病救人”的方针","authors":["岑粟"],"page_start":38,"page_end":42,"dates":[{"year":1972,"month":5,"day":1}]},{"title":"必须重视提高产品质量","authors":["任峰"],"page_start":43,"page_end":47,"dates":[{"year":1972,"month":5,"day":1}]},{"title":"领导干部要亲自动手","authors":["庄宁"],"page_start":48,"page_end":52,"dates":[{"year":1972,"month":5,"day":1}]},{"title":"反映社会主义时代工人阶级的战斗生活——革命现代京剧《海港》的创作体会","authors":["上海京剧团《海港》剧组"],"page_start":53,"page_end":61,"dates":[{"year":1972,"month":5,"day":1}]},{"title":"努力发展工农兵业余文艺创作","authors":["秦言"],"page_start":62,"page_end":67,"dates":[{"year":1972,"month":5,"day":1}]},{"title":"对《文学与生活漫谈》的再批判","authors":["钟岸"],"page_start":68,"page_end":73,"dates":[{"year":1972,"month":5,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/4a3a38a2-b387-40ae-8ddd-30fb64ef4d43.pdf'),
  },
  {
    entity: {
      id: 'a9839e34-3274-4f8b-a806-82479ee20823',
      name: '红旗一九七二年第四期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/a9839e34-3274-4f8b-a806-82479ee20823.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"要提倡顾全大局","authors":["钟实"],"page_start":8,"page_end":12,"dates":[{"year":1972,"month":4,"day":1}]},{"title":"正确理解和处理政治与业务的关系","authors":["路阳"],"page_start":13,"page_end":18,"dates":[{"year":1972,"month":4,"day":1}]},{"title":"读一点世界史","authors":["史军"],"page_start":19,"page_end":24,"dates":[{"year":1972,"month":4,"day":1}]},{"title":"使社会主义的服务性工作越做越好","authors":["金枫"],"page_start":25,"page_end":29,"dates":[{"year":1972,"month":4,"day":1}]},{"title":"以路线为纲搞好企业管理——大连钢厂如何搞好企业管理的调查报告","authors":["旅大市革命委员会调查组"],"page_start":30,"page_end":35,"dates":[{"year":1972,"month":4,"day":1}]},{"title":"把党的政策交给群众","authors":["河北肥乡县河头堡公社西河头堡大队党支部"],"page_start":36,"page_end":39,"dates":[{"year":1972,"month":4,"day":1}]},{"title":"发扬军民一致的光荣传统","authors":["中国人民解放军兰州部队某部“英雄八连”"],"page_start":40,"page_end":43,"dates":[{"year":1972,"month":4,"day":1}]},{"title":"红色娘子军","authors":["中国京剧团"],"page_start":44,"page_end":70,"ocr":{"auto_vsplit":false,"vsplit":0.47,"content_thresholds":[0,0.15,0,0.2]},"dates":[{"year":1972,"month":1}]},{"title":"移植创作中的优秀成果——评革命现代京剧《红色娘子军》","authors":["宋鸿华"],"page_start":71,"page_end":74,"dates":[{"year":1972,"month":4,"day":1}]},{"title":"我们的头脑是一个加工厂——从大型磨床的设计制透看先验论的破产","authors":["王德法"],"page_start":75,"page_end":78,"dates":[{"year":1972,"month":4,"day":1}]},{"title":"聪明来自实践","authors":["王波"],"page_start":79,"page_end":82,"dates":[{"year":1972,"month":4,"day":1}]},{"title":"正确认识思想和物质的关系","authors":["天津第一炼钢厂平炉车间"],"page_start":83,"page_end":86,"dates":[{"year":1972,"month":4,"day":1}]},{"title":"怎样看待群众中新流行的简化字？","authors":["郭沫若"],"page_start":87,"page_end":88,"dates":[{"year":1972,"month":3,"day":23}]},{"title":"教育青年应注意的问题","authors":["贺德富","卢金才","陈国柱","季秀林"],"page_start":89,"page_end":90,"dates":[{"year":1972,"month":4,"day":1}]},{"title":"正确理解和处理政治与业务的关系","authors":["路阳"],"page_start":13,"page_end":18,"dates":[{"year":1972,"month":4,"day":1}]},{"title":"积极引导青工认真看书学习","authors":["缪梅娣"],"page_start":91,"page_end":93,"dates":[{"year":1972,"month":4,"day":1}]},{"title":"应该重视下乡知识青年的文化学习","authors":["长春市郊区五名下乡知识青年"],"page_start":94,"page_end":94,"dates":[{"year":1972,"month":4,"day":1}]},{"title":"教育青年服从革命需要","authors":["李祥林"],"page_start":95,"page_end":96,"dates":[{"year":1972,"month":4,"day":1}]},{"title":"要加强对干部子女的思想教育","authors":["长春市第十一中学十名教师"],"page_start":96,"page_end":97,"dates":[{"year":1972,"month":4,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/a9839e34-3274-4f8b-a806-82479ee20823.pdf'),
  },
  {
    entity: {
      id: 'f51b44ba-c665-42a9-bce0-274d4f27d473',
      name: '红旗一九七二年第三期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/f51b44ba-c665-42a9-bce0-274d4f27d473.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"联合公报","authors":["新华社"],"page_start":8,"page_end":10,"dates":[{"year":1972,"month":2,"day":28}]},{"title":"运用毛主席哲学思想控制上海地面沉降","authors":["中国共产党上海市水文地质大队委员会"],"page_start":11,"page_end":21,"dates":[{"year":1972,"month":3,"day":1}]},{"title":"重视反面教员的作用","authors":["纪平"],"page_start":22,"page_end":27,"dates":[{"year":1972,"month":3,"day":1}]},{"title":"为什么要提倡读一些鲁迅的杂文？","authors":["雷军"],"page_start":28,"page_end":33,"dates":[{"year":1972,"month":3,"day":1}]},{"title":"要光明正大，不要搞阴谋诡计","authors":["肖彬"],"page_start":34,"page_end":38,"dates":[{"year":1972,"month":3,"day":1}]},{"title":"龙江颂","authors":["上海市《龙江颂》剧组"],"page_start":39,"page_end":65,"ocr":{"auto_vsplit":false,"vsplit":0.475,"content_thresholds":[0,0.15,0,0.2]},"dates":[{"year":1972,"month":1}]},{"title":"社会主义文艺的又一朵新花","authors":["蔚青"],"page_start":66,"page_end":69,"dates":[{"year":1972,"month":3,"day":1}]},{"title":"努力实现农业机械化","authors":["黎峰"],"page_start":70,"page_end":74,"dates":[{"year":1972,"month":3,"day":1}]},{"title":"植树造林 绿化祖国","authors":["华林茂"],"page_start":75,"page_end":80,"dates":[{"year":1972,"month":3,"day":1}]},{"title":"积极发展农村小型水电站","authors":["江雷"],"page_start":81,"page_end":84,"dates":[{"year":1972,"month":3,"day":1}]},{"title":"认真执行农业“八字宪法”","authors":["鲁向"],"page_start":85,"page_end":91,"dates":[{"year":1972,"month":3,"day":1}]},{"title":"怎样实现男女同工同酬——河北宣化县陈家坊大队的调查报告","authors":["宣化县革命委员会调查组"],"page_start":92,"page_end":97,"dates":[{"year":1972,"month":3,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/f51b44ba-c665-42a9-bce0-274d4f27d473.pdf'),
  },
  {
    entity: {
      id: '1537a4aa-be75-4eec-ad71-da04af72cd10',
      name: '红旗一九七二年第二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/1537a4aa-be75-4eec-ad71-da04af72cd10.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"必须继续巩固无产阶级专政——学习《论人民民主专政》的一点体会","authors":["中国共产党广西壮族自治区委员会写作小组"],"page_start":7,"page_end":12,"dates":[{"year":1972,"month":2,"day":1}]},{"title":"读几本哲学史","authors":["唐晓文"],"page_start":13,"page_end":17,"dates":[{"year":1972,"month":2,"day":1}]},{"title":"坚持党的理论和实践相结合的原则","authors":["中国共产党四川省委员会写作小组"],"page_start":18,"page_end":24,"dates":[{"year":1972,"month":2,"day":1}]},{"title":"海港","authors":["上海京剧团《海港》剧组"],"page_start":25,"page_end":51,"ocr":{"auto_vsplit":false,"vsplit":0.47,"content_thresholds":[0,0.15,0,0.2]},"dates":[{"year":1972,"month":1}]},{"title":"无产阶级专政下继续革命的光辉典型——赞方海珍形象的塑造","authors":["闻军"],"page_start":52,"page_end":56,"dates":[{"year":1972,"month":2,"day":1}]},{"title":"要经常注意节约","authors":["阳高照"],"page_start":57,"page_end":61,"dates":[{"year":1972,"month":2,"day":1}]},{"title":"男女同工要同酬——评农村分配问题上的一种错误倾向","authors":["金继祖","洪松"],"page_start":62,"page_end":65,"dates":[{"year":1972,"month":2,"day":1}]},{"title":"提倡“认真”一字——反对一种所谓走“捷径”的坏学风","authors":["上海机床厂、红色线厂、上海无线电二十六厂、上海重型机器厂几位工人"],"page_start":66,"page_end":69,"dates":[{"year":1972,"month":2,"day":1}]},{"title":"勤俭办社绘新图","authors":["江苏常熟县何市公社人民大队党支部"],"page_start":70,"page_end":75,"dates":[{"year":1972,"month":2,"day":1}]},{"title":"坚持正确路线 赢得建设高速度——北京石油化工总厂的调查报告","authors":["中国共产党北京市委员会调查组"],"page_start":76,"page_end":82,"dates":[{"year":1972,"month":2,"day":1}]},{"title":"多快好省地发展钢铁生产","authors":["中国共产党鞍山市委员会"],"page_start":83,"page_end":89,"dates":[{"year":1972,"month":2,"day":1}]},{"title":"甘当人民群众的小学生","authors":["中国人民解放军济南部队某部“遵纪爱民模范连”"],"page_start":90,"page_end":93,"dates":[{"year":1972,"month":2,"day":1}]},{"title":"自觉做好拥军优属工作","authors":["宁夏石嘴山市大武口公社大武口大队党支部"],"page_start":94,"page_end":97,"dates":[{"year":1972,"month":2,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/1537a4aa-be75-4eec-ad71-da04af72cd10.pdf'),
  },
  {
    entity: {
      id: 'fdadf13c-2dcd-4c2a-aef9-41d2da14cc33',
      name: '红旗一九七二年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/fdadf13c-2dcd-4c2a-aef9-41d2da14cc33.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"团结起来，争取更大的胜利（一九七二年元旦社论）","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":13,"dates":[{"year":1972,"month":1,"day":1}]},{"title":"我们应当相信群众 我们应当相信党——重读《中国农村的社会主义高潮》的序言和按语","authors":["安学江"],"page_start":14,"page_end":21,"dates":[{"year":1972,"month":1,"day":1}]},{"title":"批判修正主义的锐利武器——学习《哥达纲领批判》的一点体会","authors":["中国共产党黑龙江省委员会写作小组"],"page_start":22,"page_end":28,"dates":[{"year":1972,"month":1,"day":1}]},{"title":"在实践中不断发展对于真理的认识——学习《反杜林论》的一点体会","authors":["中国共产党马鞍山市委员会"],"page_start":29,"page_end":33,"dates":[{"year":1972,"month":1,"day":1}]},{"title":"发扬党的紧密联系群众的光荣传统","authors":["中国共产党甘肃省委员会写作小组"],"page_start":34,"page_end":40,"dates":[{"year":1972,"month":1,"day":1}]},{"title":"进一步加强党的一元化领导","authors":["齐永红"],"page_start":41,"page_end":46,"dates":[{"year":1972,"month":1,"day":1}]},{"title":"“龙江风格”万古常青——评革命现代京剧《龙江颂》","authors":["丁学雷"],"page_start":47,"page_end":55,"dates":[{"year":1972,"month":1,"day":1}]},{"title":"开发矿业 建设矿山","authors":["中国共产党本溪钢铁公司委员会"],"page_start":56,"page_end":63,"dates":[{"year":1972,"month":1,"day":1}]},{"title":"调动一切积极因素努力办好中小矿山","authors":["江虹"],"page_start":64,"page_end":67,"dates":[{"year":1972,"month":1,"day":1}]},{"title":"认真实行农林牧三结合——河北迁安县的调查报告","authors":["农林部调查组"],"page_start":68,"page_end":75,"dates":[{"year":1972,"month":1,"day":1}]},{"title":"抓革命，促生产，扎扎实实学大寨","authors":["中国共产党新乡县委员会"],"page_start":76,"page_end":80,"dates":[{"year":1972,"month":1,"day":1}]},{"title":"坚决执行三大纪律八项注意","authors":["中国人民解放军南京部队某部三连党支部"],"page_start":81,"page_end":84,"dates":[{"year":1972,"month":1,"day":1}]},{"title":"同工农相结合的道路越走越宽广","authors":["杨慧锦"],"page_start":85,"page_end":89,"dates":[{"year":1972,"month":1,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/fdadf13c-2dcd-4c2a-aef9-41d2da14cc33.pdf'),
  },
  {
    entity: {
      id: 'ec0208fc-d9f3-495f-bacd-73df3b8450a3',
      name: '红旗一九七一年第十三期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/ec0208fc-d9f3-495f-bacd-73df3b8450a3.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"总结加强党的领导的经验","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":7,"page_end":9,"dates":[{"year":1971,"month":12,"day":1}]},{"title":"记住社会主义革命时期阶级斗争的历史经验——重读《关于胡风反革命集团的材料》的序言和按语","authors":["中国共产党北京市委员会写作小组"],"page_start":10,"page_end":17,"dates":[{"year":1971,"month":12,"day":1}]},{"title":"科学的预见革命的真理——学习《星星之火,可以燎原》","authors":["中国共产党云南省委员会写作小组"],"page_start":18,"page_end":22,"dates":[{"year":1971,"month":12,"day":1}]},{"title":"坚持阶级分析方法 正确认识路线斗争","authors":["中国共产党山东省委员会写作小组"],"page_start":23,"page_end":27,"dates":[{"year":1971,"month":12,"day":1}]},{"title":"从两条路线斗争的历史经验看坏事变好事","authors":["中国人民解放军北京部队某部工兵二连党支部"],"page_start":28,"page_end":32,"dates":[{"year":1971,"month":12,"day":1}]},{"title":"认真执行党的农村经济政策","authors":["湘晖"],"page_start":33,"page_end":41,"dates":[{"year":1971,"month":12,"day":1}]},{"title":"中华人民共和国代表团团长乔冠华在联合国大会上的发言","authors":["乔冠华"],"page_start":42,"page_end":47,"dates":[{"year":1971,"month":11,"day":15}]},{"title":"毛主席哲学思想指引着我们前进","authors":["上海市一百五十吨大平板车运输小组"],"page_start":48,"page_end":55,"dates":[{"year":1971,"month":12,"day":1}]},{"title":"把路线教育和革命大批判结合起来——湖南江华瑶族自治县码市公社的调查报告","authors":["中国共产党湖南省零陵地区委员会、中国共产党江华瑶族自治县委员会调查组"],"page_start":56,"page_end":61,"dates":[{"year":1971,"month":12,"day":1}]},{"title":"搞好丘陵山区农业机械化","authors":["广西陆川县革命委员会"],"page_start":62,"page_end":67,"dates":[{"year":1971,"month":12,"day":1}]},{"title":"坚持科学研究的社会主义方向——抚顺煤炭科学研究所的调查报告","authors":["抚顺市革命委员会、抚顺矿务局革委会联合调查组"],"page_start":68,"page_end":73,"dates":[{"year":1971,"month":12,"day":1}]},{"title":"红旗杂志一九七一年第一期到第十三期总目录","authors":["《红旗》杂志编辑部"],"page_start":74,"page_end":81,"dates":[{"year":1971,"month":12,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/ec0208fc-d9f3-495f-bacd-73df3b8450a3.pdf'),
  },
  {
    entity: {
      id: '92a9726b-e187-4276-b399-71f6383e4d2d',
      name: '红旗一九七一年第十二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/92a9726b-e187-4276-b399-71f6383e4d2d.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"欧仁·鲍狄埃","authors":["列宁"],"page_start":8,"page_end":9,"dates":[{"year":1913,"month":1,"day":3}]},{"title":"进行思想和政治路线教育的重要教材","authors":["《红旗》杂志编辑部"],"page_start":10,"page_end":12,"dates":[{"year":1971,"month":11,"day":1}]},{"title":"国际歌","authors":[],"page_start":13,"page_end":13,"dates":[{"year":1971,"month":11,"day":1}]},{"title":"三大纪律八项注意","authors":[],"page_start":14,"page_end":14,"dates":[{"year":1971,"month":11,"day":1}]},{"title":"中华人民共和国政府声明","authors":[],"page_start":15,"page_end":16,"dates":[{"year":1971,"month":10,"day":29}]},{"title":"加强无产阶级党性","authors":["中国共产党辽宁省委员会写作小组"],"page_start":17,"page_end":21,"dates":[{"year":1971,"month":11,"day":1}]},{"title":"发扬党的优良作风——学习《整顿党的作风》的一点体会","authors":["中国共产党江苏省委员会写作小组"],"page_start":22,"page_end":26,"dates":[{"year":1971,"month":11,"day":1}]},{"title":"开展积极的思想斗争进一步增强党的团结——学习《反对自由主义》","authors":["中国共产党河南省委员会写作小组"],"page_start":27,"page_end":31,"dates":[{"year":1971,"month":11,"day":1}]},{"title":"路线斗争要年年讲月月讲天天讲","authors":["中国共产党昔阳县大寨公社委员会"],"page_start":32,"page_end":35,"dates":[{"year":1971,"month":11,"day":1}]},{"title":"密切联系群众是执行毛主席革命路线的重要保证","authors":["中国共产党山东省鱼台县委员会"],"page_start":36,"page_end":41,"dates":[{"year":1971,"month":11,"day":1}]},{"title":"牢牢记住党的基本路线和政策","authors":["郑群"],"page_start":42,"page_end":47,"dates":[{"year":1971,"month":11,"day":1}]},{"title":"正确认识无产阶级专政下的阶级斗争——学习《共产党宣言》的体会","authors":["徐全昇"],"page_start":48,"page_end":52,"dates":[{"year":1971,"month":11,"day":1}]},{"title":"改造认识能力 提高路线觉悟——学习《唯物主义和经验批判主义》的一点体会","authors":["李纯"],"page_start":53,"page_end":57,"dates":[{"year":1971,"month":11,"day":1}]},{"title":"对反革命分子必须实行专政——批判反动电影《人民的巨掌》","authors":["钟岸"],"page_start":58,"page_end":65,"dates":[{"year":1971,"month":11,"day":1}]},{"title":"穴位、经络和针刺麻醉原理","authors":["北京针麻协作组"],"page_start":66,"page_end":73,"dates":[{"year":1971,"month":11,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/92a9726b-e187-4276-b399-71f6383e4d2d.pdf'),
  },
  {
    entity: {
      id: '59af1c7b-0459-4288-8c24-dac1edd4a61f',
      name: '红旗一九七一年第十一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/59af1c7b-0459-4288-8c24-dac1edd4a61f.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"为改变南粮北调而奋斗","authors":["赵丰年"],"page_start":8,"page_end":15,"dates":[{"year":1971,"month":10,"day":1}]},{"title":"在阶级斗争的大风大浪中努力学习","authors":["刘益勇"],"page_start":16,"page_end":19,"dates":[{"year":1971,"month":10,"day":1}]},{"title":"在斗争中贯彻执行毛主席的革命路线","authors":["吕文录"],"page_start":20,"page_end":23,"dates":[{"year":1971,"month":10,"day":1}]},{"title":"毛主席革命路线是我们的生命线","authors":["刘金堂"],"page_start":24,"page_end":27,"dates":[{"year":1971,"month":10,"day":1}]},{"title":"红日照草原 团结开新花","authors":["乌云其其格"],"page_start":28,"page_end":30,"dates":[{"year":1971,"month":10,"day":1}]},{"title":"新工矿区做好商业工作的一点经验——北京石油化工总厂筹办和管理商业、服务业的调查报告","authors":["商业部调查组","北京市革委会","财贸组调查组","北京石油化工总厂报道组","新华社记者"],"page_start":30,"page_end":35,"dates":[{"year":1971,"month":10,"day":1}]},{"title":"批判刘少奇的反动人性论","authors":["丁学雷"],"page_start":36,"page_end":45,"dates":[{"year":1971,"month":10,"day":1}]},{"title":"把批判唯心论的斗争进行到底——驳斥刘少奇、陆定一保护和鼓吹唯心论的反动谬论","authors":["钟慎"],"page_start":46,"page_end":54,"dates":[{"year":1971,"month":10,"day":1}]},{"title":"人民革命斗争推动历史前进——学习《唯心历史观的破产》","authors":["中国共产党北京大学委员会写作小组"],"page_start":55,"page_end":63,"dates":[{"year":1971,"month":10,"day":1}]},{"title":"为革命努力搞好科学研究","authors":["柯言"],"page_start":64,"page_end":69,"dates":[{"year":1971,"month":10,"day":1}]},{"title":"必须重视人民来信来访","authors":["杜健"],"page_start":70,"page_end":73,"dates":[{"year":1971,"month":10,"day":1}]},{"title":"关于要重视对青年的思想教育工作的讨论","authors":["《红旗》杂志编辑部"],"page_start":74,"page_end":81,"dates":[{"year":1971,"month":10,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/59af1c7b-0459-4288-8c24-dac1edd4a61f.pdf'),
  },
  {
    entity: {
      id: 'a40473bb-ddeb-409a-8b2c-0d56dffd952e',
      name: '红旗一九七一年第十期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/a40473bb-ddeb-409a-8b2c-0d56dffd952e.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"要用阶级分析的方法进行调查研究——学习《反对本本主义》","authors":["中国共产党吉林省委员会写作小组"],"page_start":8,"page_end":15,"dates":[{"year":1971,"month":9,"day":1}]},{"title":"发扬无产阶级的革命文风——学习《对晋绥日报编辑人员的谈话》","authors":["中国共产党山西省委员会写作小组"],"page_start":16,"page_end":20,"dates":[{"year":1971,"month":9,"day":1}]},{"title":"努力学会领导学校工作——关于如何加强工人阶级对教育革命领导的一些体会","authors":["驻清华大学工人、解放军毛泽东思想宣传队"],"page_start":21,"page_end":32,"dates":[{"year":1971,"month":9,"day":1}]},{"title":"沿着毛主席的无产阶级教育路线胜利前进——批判刘少奇、陆定一反对无产阶级教育路线的罪行","authors":["钟慎"],"page_start":33,"page_end":44,"dates":[{"year":1971,"month":9,"day":1}]},{"title":"喜见新书为工农——评介几本科学技术读物","authors":["柯苑"],"page_start":45,"page_end":50,"dates":[{"year":1971,"month":9,"day":1}]},{"title":"数风流人物，还看今朝——评三本报告文学集","authors":["孙学文"],"page_start":51,"page_end":56,"dates":[{"year":1971,"month":9,"day":1}]},{"title":"综合利用要兴利除害","authors":["华庆源"],"page_start":57,"page_end":62,"dates":[{"year":1971,"month":9,"day":1}]},{"title":"充分发挥妇女在革命和建设中的作用","authors":["中国共产党湖南省委员会写作小组"],"page_start":63,"page_end":67,"dates":[{"year":1971,"month":9,"day":1}]},{"title":"抓好青年工人的思想教育工作","authors":["龚平"],"page_start":78,"page_end":73,"dates":[{"year":1971,"month":9,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/a40473bb-ddeb-409a-8b2c-0d56dffd952e.pdf'),
  },
  {
    entity: {
      id: '6d5a8792-4734-41c7-8e77-97c14e299265',
      name: '红旗一九七一年第九期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/6d5a8792-4734-41c7-8e77-97c14e299265.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"纪念八一建军节","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":12,"dates":[{"year":1971,"month":8,"day":1}]},{"title":"团结人民战胜敌人的强大武器——学习《论政策》","authors":["中国共产党湖北省委员会写作小组"],"page_start":13,"page_end":20,"dates":[{"year":1971,"month":8,"day":2}]},{"title":"运用辩证唯物论 掌握革命主动权——学习《抗日游击战争的战略问题》","authors":["中国共产党工程兵委员会写作小组"],"page_start":21,"page_end":28,"dates":[{"year":1971,"month":8,"day":2}]},{"title":"学好革命理论才能继续革命","authors":["年继荣"],"page_start":29,"page_end":32,"dates":[{"year":1971,"month":8,"day":2}]},{"title":"认真读书 批修整风","authors":["中国人民解放军空军某郊党委会"],"page_start":33,"page_end":37,"dates":[{"year":1971,"month":8,"day":2}]},{"title":"努力从必然中获得自由——学习《反杜林论》的一点体会","authors":["史秉廉"],"page_start":38,"page_end":42,"dates":[{"year":1971,"month":8,"day":2}]},{"title":"出版更多更好的普及读物","authors":["楚洪舒"],"page_start":43,"page_end":48,"dates":[{"year":1971,"month":8,"day":2}]},{"title":"热情培养新生力量","authors":["叶军"],"page_start":49,"page_end":53,"dates":[{"year":1971,"month":8,"day":2}]},{"title":"先验论是欺骗劳动人民的反动哲学","authors":["李长茂","王淑珍"],"page_start":54,"page_end":60,"dates":[{"year":1971,"month":8,"day":2}]},{"title":"在针刺麻醉下为什么能开刀？","authors":["上海市针刺麻醉协作组"],"page_start":61,"page_end":72,"dates":[{"year":1971,"month":8,"day":2}]},{"title":"关于针刺麻醉原理的一点认识","authors":["中国人民解放军总医院"],"page_start":73,"page_end":77,"dates":[{"year":1971,"month":8,"day":2}]},{"title":"对针刺麻醉镇痛原理的探讨","authors":["中国人民解放军广州部队总医院"],"page_start":78,"page_end":82,"dates":[{"year":1971,"month":8,"day":2}]},{"title":"重视对青年工人的思想教育","authors":["七名青年工人"],"page_start":83,"page_end":86,"dates":[{"year":1971,"month":8,"day":2}]},{"title":"反对帝国主义侵略的坚强同盟——庆祝中朝友好合作互助条约签订十周年","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":87,"page_end":89,"dates":[{"year":1971,"month":8,"day":2}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/6d5a8792-4734-41c7-8e77-97c14e299265.pdf'),
  },
  {
    entity: {
      id: '5d4cbf36-0f89-435a-8f64-80a9168e8109',
      name: '红旗一九七一年第七、八期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/5d4cbf36-0f89-435a-8f64-80a9168e8109.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"纪念中国共产党五十周年","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":28,"dates":[{"year":1971,"month":7,"day":1}]},{"title":"坚持马克思主义的领导方法——学习《关于领导方法的若干问题》","authors":["中国共产党云南省委员会写作小组"],"page_start":29,"page_end":36,"dates":[{"year":1971,"month":7,"day":1}]},{"title":"进一步加强党委会的建设——学习《党委会的工作方法》","authors":["中国共产党广东省委员会写作小组"],"page_start":37,"page_end":42,"dates":[{"year":1971,"month":7,"day":1}]},{"title":"坚持生产关系和生产力的辩证统一论——学习《关于正确处理人民内部矛盾的问题》的一点体会","authors":["权忠"],"page_start":43,"page_end":50,"dates":[{"year":1971,"month":7,"day":1}]},{"title":"牢记党内两条路线斗争的历史经验——学习《学习和时局》","authors":["中国共产党青海省委员会写作小组"],"page_start":51,"page_end":55,"dates":[{"year":1971,"month":7,"day":1}]},{"title":"永远拿起批评和自我批评的武器","authors":["江苏海门县大新公社中兴大队党支部"],"page_start":56,"page_end":61,"dates":[{"year":1971,"month":7,"day":1}]},{"title":"发扬党的密切联系群众的优良作风","authors":["辽宁宽甸县永甸公社军民大队党支部"],"page_start":62,"page_end":65,"dates":[{"year":1971,"month":7,"day":1}]},{"title":"加强党的政策教育","authors":["中国共产党长春客车厂委员会"],"page_start":66,"page_end":70,"dates":[{"year":1971,"month":7,"day":1}]},{"title":"认真读书，坚持坚定正确的政治方向","authors":["中国共产党北京化工三厂委员会"],"page_start":71,"page_end":76,"dates":[{"year":1971,"month":7,"day":1}]},{"title":"在革命大批判中加强党的思想建设","authors":["中国共产党天津自行车厂委员会"],"page_start":77,"page_end":80,"dates":[{"year":1971,"month":7,"day":1}]},{"title":"艰苦奋斗永不忘 延安精神代代传","authors":["陕西延安城区枣园公社杨家岭大队党支部"],"page_start":81,"page_end":84,"dates":[{"year":1971,"month":7,"day":1}]},{"title":"认真实行民主集中制","authors":["中国人民解放军成都部队某团党委会"],"page_start":85,"page_end":89,"dates":[{"year":1971,"month":7,"day":1}]},{"title":"在三大革命运动第一线造就无产阶级干部队伍","authors":["中国共产党江西省委员会写作小组"],"page_start":90,"page_end":97,"dates":[{"year":1971,"month":7,"day":1}]},{"title":"一个密切联系群众的党委会——湖南龙山县洛塔公社党委会的调查报告","authors":["中国共产党湖南省委员会调查组"],"page_start":98,"page_end":105,"dates":[{"year":1971,"month":7,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/5d4cbf36-0f89-435a-8f64-80a9168e8109.pdf'),
  },
  {
    entity: {
      id: '22cf8476-5fe7-491e-bd97-34b805500589',
      name: '红旗一九七一年第六期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/22cf8476-5fe7-491e-bd97-34b805500589.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"反帝斗争的纲领","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":7,"page_end":9,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"编者的话","authors":["《红旗》杂志编辑部"],"page_start":7,"page_end":9,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"编者的话","authors":["《红旗》杂志编辑部"],"page_start":7,"page_end":9,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"加强城市中小学教师队伍的建设","authors":["中国共产党江苏省委员会写作小组"],"page_start":12,"page_end":16,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"批修整风，夺取教育革命的新胜利","authors":["高峡"],"page_start":17,"page_end":19,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"沿着毛主席“七·二一”指示的光辉道路前进","authors":["中国共产党上海机床厂委员会"],"page_start":20,"page_end":28,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"按毛主席指示办好业余教育——山东莒南县高家柳沟大队的调查报告","authors":["中国共产党山东省委员会、临沂地区革命委员会、莒南县革命委员会联合调查组"],"page_start":29,"page_end":35,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"五篇乡土教材","authors":[],"page_start":36,"page_end":37,"ocr_exceptions":{"36":{"auto_vsplit":false,"vsplit":0.44}},"dates":[{"year":1955},{"year":1967},{"year":1968}]},{"title":"一个社会主义的教育普及网——福建南安县的调查报告","authors":["新华社通讯员","新华社记者"],"page_start":38,"page_end":44,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"《五·七指示》是教育革命的指针——广东信宜县信宜中学的调查报告","authors":["湛江地区革命委员会、信宣县革命委员会调查组"],"page_start":45,"page_end":49,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"坚持勤俭办学，为无产阶级政治服务——黑龙江肇源县渔场大队小学的调查报告","authors":["肇源县革委会、绥化地区革委会联合调查组"],"page_start":50,"page_end":54,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"为战备办药厂","authors":["中国人民解放军武汉部队某师制药厂"],"page_start":55,"page_end":58,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"《五·七指示》指引我们不断前进","authors":["中国人民解放军兰州部队某师党委会"],"page_start":59,"page_end":61,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"巩固工人阶级对教育革命的领导权","authors":["中国共产党辽宁大学委员会"],"page_start":62,"page_end":69,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"用革命大批判改造文科大学——复旦大学“五·七”文科试点班的调查报告","authors":["中国共产党复旦大学委员会"],"page_start":70,"page_end":77,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"清华大学工农兵学员和教员谈教育革命的体会","authors":["清华大学"],"page_start":78,"page_end":86,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"多快好省培养师资的“流动大学”——广东师范学院巡回辅导的做法与体会","authors":["广东师范学院革命委员会"],"page_start":87,"page_end":91,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"政治挂帅，坚持理论和实践的统一——同济大学“五·七”公社教育革命实践情况报告","authors":["中国共产党同济大学委员会"],"page_start":92,"page_end":100,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"永远发扬红军卫校的革命传统——沈阳医学院教育革命情况报告","authors":["驻沈阳医学院工人、解放军毛泽东思想宣传队"],"page_start":101,"page_end":107,"dates":[{"year":1971,"month":6,"day":1}]},{"title":"教材改革是一场深刻的思想革命——北方交通大学教材改革情况报告","authors":["驻北方交通大学工人、解放军毛泽东思想宣传队"],"page_start":108,"page_end":113,"dates":[{"year":1971,"month":6,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/22cf8476-5fe7-491e-bd97-34b805500589.pdf'),
  },
  {
    entity: {
      id: '3b803201-9d7b-4f23-ba26-9be96839072b',
      name: '红旗一九七一年第五期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/3b803201-9d7b-4f23-ba26-9be96839072b.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"全世界人民大团结万岁──庆祝“五一”国际劳动节","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":11,"dates":[{"year":1971,"month":5,"day":1}]},{"title":"一九七一年纪念“五一”国际劳动节口号","authors":["《红旗》杂志编辑部"],"page_start":12,"page_end":13,"dates":[{"year":1971,"month":5,"day":1}]},{"title":"认识世界和改造世界的强大思想武器──学习《实践论》","authors":["中国共产党辽宁省委员会写作小组"],"page_start":14,"page_end":22,"dates":[{"year":1971,"month":5,"day":1}]},{"title":"批修整风的战斗纲领──学习《在延安文艺座谈会上的讲话》","authors":["中国共产党河南省委员会写作小组"],"page_start":23,"page_end":30,"dates":[{"year":1971,"month":5,"day":1}]},{"title":"发扬理论联系实际的革命学风──学习《改造我们的学习》","authors":["中国共产党山东省委员会写作小组"],"page_start":31,"page_end":38,"dates":[{"year":1971,"month":5,"day":1}]},{"title":"学习《实践论》 批判“先验论”","authors":["王玉坤","王小其","王小庞"],"page_start":39,"page_end":43,"dates":[{"year":1971,"month":5,"day":1}]},{"title":"把调查、研究、实践结合起来","authors":["广东省陆丰县革命委员会"],"page_start":44,"page_end":48,"dates":[{"year":1971,"month":5,"day":1}]},{"title":"党内的思想和政治路线教育要经常化——北京针织总广针织车间党支部的调查报告","authors":["北京市革命委员会调查组"],"page_start":49,"page_end":56,"dates":[{"year":1971,"month":5,"day":1}]},{"title":"努力提高反骄破满的自觉性","authors":["中国共产党无锡缫丝一厂委员会"],"page_start":57,"page_end":59,"dates":[{"year":1971,"month":5,"day":1}]},{"title":"斗私批修，同私有观念彻底决裂——学习《共产党宣言》的一点体会","authors":["中国人民解放军南京部队某军党委会"],"page_start":60,"page_end":64,"dates":[{"year":1971,"month":5,"day":1}]},{"title":"设计革命必须大搞群众运动","authors":["齐永红"],"page_start":65,"page_end":68,"dates":[{"year":1971,"month":5,"day":1}]},{"title":"为扭转北煤南运而斗争","authors":["燃料化学工业部写作小组"],"page_start":69,"page_end":75,"dates":[{"year":1971,"month":5,"day":1}]},{"title":"用思想革命化带动设计革命——鞍山焦化耐火材料设计研究院的调查报告","authors":["鞍山市革命委员会调查组"],"page_start":76,"page_end":81,"dates":[{"year":1971,"month":5,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/3b803201-9d7b-4f23-ba26-9be96839072b.pdf'),
  },
  {
    entity: {
      id: '270f4202-5a30-470a-b825-12994b8d8a26',
      name: '红旗一九七一年第四期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/270f4202-5a30-470a-b825-12994b8d8a26.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"无产阶级专政胜利万岁──纪念巴黎公社一百周年","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":23,"dates":[{"year":1971,"month":3,"day":18}]},{"title":"坚持唯物论的反映论 批判唯心论的先验论──学习《人的正确思想是从那里来的？》","authors":["中国共产党江西省委员会写作小组"],"page_start":24,"page_end":31,"dates":[{"year":1971,"month":4,"day":1}]},{"title":"批判唯心论的锐利武器──学习《<农村调查>的序言和跋》","authors":["中国共产党北京市委员会写作小组"],"page_start":32,"page_end":39,"dates":[{"year":1971,"month":4,"day":1}]},{"title":"历史的渣滓阻挡不住革命的洪流──从《李秀成之死》看王明、刘少奇、周扬一伙的反革命面目","authors":["钟岸"],"page_start":40,"page_end":49,"dates":[{"year":1971,"month":4,"day":1}]},{"title":"结合实际进行路线教育——湖南新田县欧家塘大队党支部的调查报告","authors":["零陵地区革委会党的核心小组、中国共产党新田县委员会联合调查组"],"page_start":50,"page_end":56,"dates":[{"year":1971,"month":4,"day":1}]},{"title":"坚持唯物论的反映论 批判唯心论的先验论──学习《人的正确思想是从那里来的？》","authors":["中国共产党江西省委员会写作小组"],"page_start":24,"page_end":31,"dates":[{"year":1971,"month":4,"day":1}]},{"title":"虚心向群众学习","authors":["中国人民解放军沈阳部队某师党委会"],"page_start":57,"page_end":61,"dates":[{"year":1971,"month":4,"day":1}]},{"title":"要重视少年儿童工作——山西运城县开展“红小兵”活动的调查报告","authors":["山西省革命委员会、运城地区革命委员会联合调查组"],"page_start":62,"page_end":67,"dates":[{"year":1971,"month":4,"day":1}]},{"title":"整团建团要突出思想和政治路线的教育——长春第一汽车制造厂铸造分厂的调查报告","authors":["吉林省革命委员会、长春市革命委员会联合调查组"],"page_start":68,"page_end":74,"dates":[{"year":1971,"month":4,"day":1}]},{"title":"驳“潜力挖尽论”——上海炼油厂炼油能力提高三倍的潜力是怎样挖出来的？","authors":["宫效闻"],"page_start":75,"page_end":77,"dates":[{"year":1971,"month":4,"day":1}]},{"title":"关于矿山建设中的几个认识问题","authors":["叶谨"],"page_start":78,"page_end":82,"dates":[{"year":1971,"month":4,"day":1}]},{"title":"增产节约的一个重要途径——大连柴油机厂产品设计革命的调查报告","authors":["旅大市革委会调查组","新华社记者"],"page_start":83,"page_end":89,"dates":[{"year":1971,"month":4,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/270f4202-5a30-470a-b825-12994b8d8a26.pdf'),
  },
  {
    entity: {
      id: '9393f2dc-4cca-4aea-8d3b-cf07d34de7c6',
      name: '红旗一九七一年第三期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/9393f2dc-4cca-4aea-8d3b-cf07d34de7c6.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"“合二而一论”是复辟资本主义的反动哲学","authors":["中央党校革命大批判写作组"],"page_start":8,"page_end":20,"dates":[{"year":1971,"month":3,"day":1}]},{"title":"路线斗争决不能休战——评王明、刘少奇、周扬一伙鼓吹“国防文学”的反动性","authors":["闻军"],"page_start":21,"page_end":28,"dates":[{"year":1971,"month":3,"day":1}]},{"title":"学习鲁迅 深入批修——批判周扬一伙歪曲、诬蔑鲁迅的反动谬论","authors":["周建人"],"page_start":29,"page_end":37,"dates":[{"year":1971,"month":3,"day":1}]},{"title":"“让步政策论”必须再批判","authors":["湖北省革命委员会大批判写作小组"],"page_start":38,"page_end":49,"dates":[{"year":1971,"month":3,"day":1}]},{"title":"一个发展资本主义黑纲领的彻底破产——批判叛徒、内奸、工贼刘少奇《天津讲话》的反动实质","authors":["仲智"],"page_start":50,"page_end":58,"dates":[{"year":1971,"month":3,"day":1}]},{"title":"在斗争实践中创建社会主义大学","authors":["高戈"],"page_start":59,"page_end":62,"dates":[{"year":1971,"month":3,"day":1}]},{"title":"进一步办好“五·七”干校","authors":["丛学"],"page_start":63,"page_end":67,"dates":[{"year":1971,"month":3,"day":1}]},{"title":"克服轻视农业机具修配的错误思想","authors":["伊继平"],"page_start":68,"page_end":71,"dates":[{"year":1971,"month":3,"day":1}]},{"title":"认真总结经验提高路线觉悟","authors":["景青"],"page_start":72,"page_end":74,"dates":[{"year":1971,"month":3,"day":1}]},{"title":"还原舞台 高于舞台——我们是怎样把革命现代京剧《智取威虎山》搬上银幕的","authors":["北京电影制片厂《智取威虎山》摄制组"],"page_start":75,"page_end":83,"dates":[{"year":1971,"month":3,"day":1}]},{"title":"怎样把斗、批、改不断引向深入——吉林化工医院的调查报告","authors":["吉林省革委会、吉林市革委会调查组"],"page_start":84,"page_end":89,"dates":[{"year":1971,"month":3,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/9393f2dc-4cca-4aea-8d3b-cf07d34de7c6.pdf'),
  },
  {
    entity: {
      id: '970f7790-c4bd-44c3-a102-7ca01a63cea3',
      name: '红旗一九七一年第二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/970f7790-c4bd-44c3-a102-7ca01a63cea3.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"认真读书，努力改造世界观","authors":["《红旗》杂志编辑部"],"page_start":8,"page_end":10,"dates":[{"year":1971,"month":2,"day":1}]},{"title":"加强新闻报道队伍的思想建设","authors":["江虹"],"page_start":11,"page_end":14,"dates":[{"year":1971,"month":2,"day":1}]},{"title":"把移风易俗的斗争进行到底","authors":["鲁政"],"page_start":15,"page_end":17,"dates":[{"year":1971,"month":2,"day":1}]},{"title":"谦虚谨慎 继续革命","authors":["中国人民解放军济南部队某师党委会"],"page_start":18,"page_end":22,"dates":[{"year":1971,"month":2,"day":1}]},{"title":"认真总结经验 克服骄傲自满","authors":["安徼省安庆地区革命委员会"],"page_start":23,"page_end":26,"dates":[{"year":1971,"month":2,"day":1}]},{"title":"加强传统教育 提高路线觉悟","authors":["中国人民解放军武汉部队某部红军团党委会"],"page_start":27,"page_end":31,"dates":[{"year":1971,"month":2,"day":1}]},{"title":"发扬革命传统 争取更大光荣","authors":["陕西省延安地区革命委员会"],"page_start":32,"page_end":35,"dates":[{"year":1971,"month":2,"day":1}]},{"title":"活学活用毛主席哲学思想提高两条路线斗争觉悟","authors":["华子泉"],"page_start":36,"page_end":41,"dates":[{"year":1971,"month":2,"day":1}]},{"title":"深入开展工业战线的增产节约运动","authors":["国家计委写作小组"],"page_start":42,"page_end":50,"dates":[{"year":1971,"month":2,"day":1}]},{"title":"培养工人阶级的技术队伍","authors":["张梅华"],"page_start":51,"page_end":55,"dates":[{"year":1971,"month":2,"day":1}]},{"title":"执行“发展经济，保障供给”的伟大方针——中国人民银行辽宁抚顺市分行建新服务班的调查报告","authors":["财政部、抚顺市革委会、抚顺军分区联合调查组"],"page_start":56,"page_end":61,"dates":[{"year":1971,"month":2,"day":1}]},{"title":"为普及合成纤维生产而奋斗——广东茂名市化工二厂的调查报告","authors":["茂名市革命委员会调查组"],"page_start":62,"page_end":65,"dates":[{"year":1971,"month":2,"day":1}]},{"title":"我们是怎样加强妇女工作领导的","authors":["韩文"],"page_start":66,"page_end":68,"dates":[{"year":1971,"month":2,"day":1}]},{"title":"革命妇女意志坚——广西环江县同进大队的调查报告","authors":["河池专区革委会、环江县革委会联合调查组"],"page_start":69,"page_end":74,"dates":[{"year":1971,"month":2,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/970f7790-c4bd-44c3-a102-7ca01a63cea3.pdf'),
  },
  {
    entity: {
      id: '81a443cc-c92d-4df4-a996-3e07628a29e7',
      name: '红旗一九七一年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/81a443cc-c92d-4df4-a996-3e07628a29e7.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"沿着毛主席革命路线胜利前进","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":12,"dates":[{"year":1971,"month":1,"day":1}]},{"title":"狠抓两条路线斗争教育","authors":["中国共产党北京新华印刷厂委员会"],"page_start":13,"page_end":16,"dates":[{"year":1971,"month":1,"day":1}]},{"title":"大赛的道路宽又广","authors":["山东曲阜县夏家村大队党支部"],"page_start":17,"page_end":22,"dates":[{"year":1971,"month":1,"day":1}]},{"title":"紧跟毛主席 航行千万里","authors":["中国人民解放军海军北海舰队某部八十二号护卫艇党支部"],"page_start":23,"page_end":27,"dates":[{"year":1971,"month":1,"day":1}]},{"title":"毛主席的革命路线是翻身奴隶的生命线","authors":["吉牛布哈"],"page_start":28,"page_end":32,"dates":[{"year":1971,"month":1,"day":1}]},{"title":"在斗争中提高路线觉悟——始终抓往两个阶级、两条道路、两条路线斗争这个纲","authors":["姚文绪"],"page_start":33,"page_end":37,"dates":[{"year":1971,"month":1,"day":1}]},{"title":"正确对待群众","authors":["方敏"],"page_start":37,"page_end":40,"dates":[{"year":1971,"month":1,"day":1}]},{"title":"进一步加强党的民主集中制","authors":["中国共产党湖南省委员会写作小组"],"page_start":41,"page_end":45,"dates":[{"year":1971,"month":1,"day":1}]},{"title":"继续认真搞好斗、批、改","authors":["江汉文"],"page_start":46,"page_end":50,"dates":[{"year":1971,"month":1,"day":1}]},{"title":"学好辩证唯物论的认识论","authors":["金海"],"page_start":51,"page_end":53,"dates":[{"year":1971,"month":1,"day":1}]},{"title":"认识和掌握阶级斗争的规律性","authors":["尹中奇"],"page_start":54,"page_end":59,"dates":[{"year":1971,"month":1,"day":1}]},{"title":"从实践中掌握地下油水运动规律","authors":["大庆油田采油中二队工人学哲学小纽"],"page_start":60,"page_end":63,"dates":[{"year":1971,"month":1,"day":1}]},{"title":"革命实践必须执行革命路线","authors":["王恩文"],"page_start":64,"page_end":69,"dates":[{"year":1971,"month":1,"day":1}]},{"title":"掌握行车规律 保证安全正点","authors":["田维荣"],"page_start":70,"page_end":73,"dates":[{"year":1971,"month":1,"day":1}]},{"title":"运用辩证法落实农业“八字宪法”","authors":["刘应祥"],"page_start":73,"page_end":76,"dates":[{"year":1971,"month":1,"day":1}]},{"title":"波兰人民的革命风暴","authors":["《人民日报》评论员"],"page_start":77,"page_end":78,"dates":[{"year":1970,"month":12,"day":22}]},{"title":"坦克的履带镇压不了波兰人民的愤怒和仇恨——阿尔巴尼亚《人民之声报》发表文章盛赞波兰人民反抗波修集团的英勇斗争","authors":["新华社"],"page_start":79,"page_end":81,"dates":[{"year":1970,"month":12,"day":20}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/81a443cc-c92d-4df4-a996-3e07628a29e7.pdf'),
  },
  {
    entity: {
      id: 'cee99135-9896-4fc3-81af-aef4ec609898',
      name: '红旗一九七〇年第十二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/cee99135-9896-4fc3-81af-aef4ec609898.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"中共中央致电朝鲜劳动党第五次代表大会最热烈祝贺朝鲜劳动党第五次代表大会召开","authors":["中共中央"],"page_start":7,"page_end":8,"dates":[{"year":1970,"month":11,"day":1}]},{"title":"在学习中提高执行毛主席革命路线的自觉性","authors":["《红旗》杂志评论员"],"page_start":9,"page_end":12,"dates":[{"year":1970,"month":12,"day":1}]},{"title":"要自觉","authors":["薛生平"],"page_start":13,"page_end":15,"dates":[{"year":1970,"month":12,"day":1}]},{"title":"克服盲目性 提高自觉性","authors":["陶成林"],"page_start":16,"page_end":19,"dates":[{"year":1970,"month":12,"day":1}]},{"title":"努力提高两条路线斗争觉悟","authors":["郭忠业"],"page_start":20,"page_end":23,"dates":[{"year":1970,"month":12,"day":1}]},{"title":"联系两条路线斗争实际进行学习","authors":["王江"],"page_start":23,"page_end":26,"dates":[{"year":1970,"month":12,"day":1}]},{"title":"运用毛主席的哲学思想管天","authors":["广西崇左县气象服务站"],"page_start":27,"page_end":32,"dates":[{"year":1970,"month":12,"day":1}]},{"title":"运用毛主席的哲学思想找水","authors":["中国共产党水文地质第二大队委员会"],"page_start":33,"page_end":38,"dates":[{"year":1970,"month":12,"day":1}]},{"title":"继续抓紧革命大批判","authors":["安徽革命大批判写作小组"],"page_start":39,"page_end":43,"dates":[{"year":1970,"month":12,"day":1}]},{"title":"写有分析的短文","authors":["高宏"],"page_start":44,"page_end":45,"dates":[{"year":1970,"month":12,"day":1}]},{"title":"帝国主义走狗的自供状——批判叛徒、内奸、工贼刘少奇的大毒草《救护汉冶萍公司》","authors":["仲智"],"page_start":46,"page_end":53,"dates":[{"year":1970,"month":12,"day":1}]},{"title":"向生产的深度和广度进军——广东江门甘蔗化工厂开展综合利用的调查报告","authors":["广东省革委会、轻工业部联合调查组"],"page_start":54,"page_end":59,"dates":[{"year":1970,"month":12,"day":1}]},{"title":"依靠工人阶级，建立合理的规章制度——沈阳机车车辆工厂起重机车间改革不合理规章制度的调查报告","authors":["辽宁省革委会、沈阳市革委会、沈阳驻军某部联合调查组"],"page_start":60,"page_end":65,"dates":[{"year":1970,"month":12,"day":1}]},{"title":"红旗杂志一九七〇年第一期到第十二期总目录","authors":["《红旗》杂志编辑部"],"page_start":66,"page_end":73,"dates":[{"year":1970,"month":12,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/cee99135-9896-4fc3-81af-aef4ec609898.pdf'),
  },
  {
    entity: {
      id: '17fb52b8-0111-4af5-80ed-d9665739385d',
      name: '红旗一九七〇年第十一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/17fb52b8-0111-4af5-80ed-d9665739385d.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"在庆祝中华人民共和国成立二十一周年大会上的讲话","alias":"在庆祝中华人民共和国成立二十一周年大会上林彪副主席的讲话","authors":["林彪"],"page_start":8,"page_end":11,"dates":[{"year":1970,"month":10,"day":1}]},{"title":"继续革命 乘胜前进——庆祝中华人民共和国成立二十一周年","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":10,"page_end":13,"dates":[{"year":1970,"month":11,"day":1}]},{"title":"中共中央致电朝鲜劳动党中央最热烈祝贺朝鲜劳动党诞生二十五周年","authors":["中共中央"],"page_start":14,"page_end":15,"dates":[{"year":1970,"month":10,"day":9}]},{"title":"领导干部要带头学好","authors":["《红旗》杂志编辑部"],"page_start":16,"page_end":18,"dates":[{"year":1970,"month":11,"day":1}]},{"title":"加强无产阶级党性","authors":["红垒"],"page_start":19,"page_end":22,"dates":[{"year":1970,"month":11,"day":1}]},{"title":"在克服主观主义中前进","authors":["黄祖示"],"page_start":23,"page_end":27,"dates":[{"year":1970,"month":11,"day":1}]},{"title":"要自觉地改造世界观","authors":["戴裕民"],"page_start":28,"page_end":30,"dates":[{"year":1970,"month":11,"day":1}]},{"title":"靠唯物辩证法做好工作——下乡半年的体会","authors":["朱培屏"],"page_start":31,"page_end":33,"dates":[{"year":1970,"month":11,"day":1}]},{"title":"天津市革命委员会关于认真学习毛主席哲学著作的决定","authors":["天津市革命委员会"],"page_start":34,"page_end":35,"dates":[{"year":1970,"month":10,"day":2}]},{"title":"毛泽东思想指引我们多快好省地修建铁路","authors":["中国人民解放军铁道兵写作小组"],"page_start":36,"page_end":44,"dates":[{"year":1970,"month":11,"day":1}]},{"title":"运用毛主席的哲学思想发展科学技术","authors":["李四光"],"page_start":45,"page_end":50,"dates":[{"year":1970,"month":11,"day":1}]},{"title":"要经常分析阶级斗争形势——湖南双峰县青树坪公社的调查报告","authors":["湖南邵阳地区革委会调查组"],"page_start":51,"page_end":55,"dates":[{"year":1970,"month":11,"day":1}]},{"title":"农业学大寨 苗岭换新装","authors":["陈作荣"],"page_start":56,"page_end":57,"dates":[{"year":1970,"month":11,"day":1}]},{"title":"永远与工农群众相结合","authors":["朱思端"],"page_start":58,"page_end":60,"dates":[{"year":1970,"month":11,"day":1}]},{"title":"在阶级斗争风浪中加强连队革命化战斗化","authors":["中国人民解放军某部“红色尖兵连”党支部"],"page_start":61,"page_end":64,"dates":[{"year":1970,"month":11,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/17fb52b8-0111-4af5-80ed-d9665739385d.pdf'),
  },
  {
    entity: {
      id: 'e32ebac4-bba7-4fe1-b8c8-197ebee18dcb',
      name: '红旗一九七〇年第十期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/e32ebac4-bba7-4fe1-b8c8-197ebee18dcb.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"中国共产党第九届中央委员第二次会议公报","alias":"中国共产党第九届中央委员会第二次全体会议公报","authors":[],"page_start":8,"page_end":11,"dates":[{"year":1970,"month":9,"day":6}]},{"title":"认真学习毛主席的哲学著作","authors":["《红旗》杂志编辑部"],"page_start":12,"page_end":14,"dates":[{"year":1970,"month":10,"day":1}]},{"title":"充分认识阶级斗争的长期性、复杂性、曲折性","authors":["刘亚彬"],"page_start":14,"page_end":17,"dates":[{"year":1970,"month":10,"day":1}]},{"title":"在斗争中学，在斗争中用","authors":["耿长锁"],"page_start":17,"page_end":19,"dates":[{"year":1970,"month":10,"day":1}]},{"title":"用一分为二的观点做好知识青年的再教育","authors":["陕西安塞县肖官驿大队革命委员会"],"page_start":20,"page_end":22,"dates":[{"year":1970,"month":10,"day":1}]},{"title":"要便思想合乎客观外界的规律性","authors":["广西百色电机厂铸铝班工人学哲学小组"],"page_start":22,"page_end":24,"dates":[{"year":1970,"month":10,"day":1}]},{"title":"在“合理”上下功夫","authors":["甘肃玉门市白杨河四队科学实验小组"],"page_start":25,"page_end":27,"dates":[{"year":1970,"month":10,"day":1}]},{"title":"掌握水上航运的主动权","authors":["江苏常熟县轮船营业处四三七拖轮小组"],"page_start":27,"page_end":30,"dates":[{"year":1970,"month":10,"day":1}]},{"title":"大厂要向先进小厂学习","authors":["景恭文"],"page_start":31,"page_end":34,"dates":[{"year":1970,"month":10,"day":1}]},{"title":"大家都来关心高校招生","authors":["李志华"],"page_start":35,"page_end":37,"dates":[{"year":1970,"month":10,"day":1}]},{"title":"全面规划，加强领导——评发展县、社、队工业中的几个认识问题","authors":["龙文"],"page_start":38,"page_end":40,"dates":[{"year":1970,"month":10,"day":1}]},{"title":"彻底批判刘少奇的资产阶级唯心论和形而上学","authors":["北京市革命大批判写作小组"],"page_start":41,"page_end":49,"dates":[{"year":1970,"month":10,"day":1}]},{"title":"“国防文学”就是卖国文学——揭穿周扬“国防文学”的反动本质","authors":["清华大学革命大批判写作小组"],"page_start":50,"page_end":58,"dates":[{"year":1970,"month":10,"day":1}]},{"title":"阶级斗争存在一天，革命大批判就要坚持一天——上海高压容器厂持久开展革命大批判的八个“怎么办？”","authors":["上海市革命委员会调查组"],"page_start":59,"page_end":65,"dates":[{"year":1970,"month":10,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/e32ebac4-bba7-4fe1-b8c8-197ebee18dcb.pdf'),
  },
  {
    entity: {
      id: 'b5f53339-13bb-4750-b15c-7d8b5f4def41',
      name: '红旗一九七〇年第九期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/b5f53339-13bb-4750-b15c-7d8b5f4def41.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"提高警惕保卫祖国──纪念中国人民解放军诞生四十三周年","alias":"提高警惕 保卫祖国──纪念中国人民解放军诞生四十三周年","authors":["《红旗》杂志编辑部","《人民日报》编辑部","《解放军报》编辑部"],"page_start":8,"page_end":10,"dates":[{"year":1970,"month":8,"day":1}]},{"title":"发扬爱国主义和国际主义的革命精神","authors":["特级英雄黄继光生前所在连党支部"],"page_start":11,"page_end":13,"dates":[{"year":1970,"month":9,"day":1}]},{"title":"建设边疆 保卫祖国","authors":["岩帅"],"page_start":14,"page_end":17,"dates":[{"year":1970,"month":9,"day":1}]},{"title":"政治思想领导永远是第一位的领导","authors":["中国人民解放军沈阳部队某团党委会"],"page_start":18,"page_end":21,"dates":[{"year":1970,"month":9,"day":1}]},{"title":"共产党员应成为政治思想工作的模范","authors":["白川"],"page_start":22,"page_end":24,"dates":[{"year":1970,"month":9,"day":1}]},{"title":"在改造世界观上狠下功夫","authors":["中国人民解放军北京部队炮兵某师党委会"],"page_start":25,"page_end":28,"dates":[{"year":1970,"month":9,"day":1}]},{"title":"一支社会主义工业建设的开路先锋——江西九〇九地质队的调查报告","authors":["江西省革委会、地质局联合调查组"],"page_start":29,"page_end":36,"dates":[{"year":1970,"month":9,"day":1}]},{"title":"一支土生土长的农业技术队伍——浙江淳安县的调查报告","authors":["浙江省革命委员会调查组"],"page_start":37,"page_end":42,"dates":[{"year":1970,"month":9,"day":1}]},{"title":"在“鞍钢宪法”的光辉旗帜下不断前进——辽宁本溪钢铁公司钢厂的调查报告","authors":["本溪市革命委员会、本溪钢铁公司革命委员会调查组"],"page_start":43,"page_end":47,"dates":[{"year":1970,"month":9,"day":1}]},{"title":"办好“小化纤”——上海小型化学纤维工业发展情况的调查","authors":["上海市革命委员会调查组"],"page_start":48,"page_end":52,"dates":[{"year":1970,"month":9,"day":1}]},{"title":"办好小煤窑——广东阳春县的调查报告","authors":["广东省革命委员会调查组"],"page_start":53,"page_end":55,"dates":[{"year":1970,"month":9,"day":1}]},{"title":"自力更生，坚持为农业服务——河南郾城县机械厂的调查报告","authors":["郾城县革命委员会、郾城县人民武装部调查组"],"page_start":56,"page_end":59,"dates":[{"year":1970,"month":9,"day":1}]},{"title":"自力更生 开源节流——在解决原材料问题上的两种思想斗争","authors":["成渝"],"page_start":60,"page_end":63,"dates":[{"year":1970,"month":9,"day":1}]},{"title":"深入开展群众性的大批判——安徽马鞍山市关于大批判战斗队的调查报告","authors":["安徽省革命委员会调查组"],"page_start":64,"page_end":68,"dates":[{"year":1970,"month":9,"day":1}]},{"title":"用战备观点发展农村医疗卫生事业——湖南衡阳县上峰公社的调查报告","authors":["衡阳县革委会、人武部、新华社记者联合调查组"],"page_start":69,"page_end":72,"dates":[{"year":1970,"month":9,"day":1}]},{"title":"从思想教育入手，整好建好团支部——陕西宝鸡县红旗大队的调查报告","authors":["陕西省革命委员会、宝鸡地区革命委员会、宝鸡县革命委员会调查组"],"page_start":73,"page_end":77,"dates":[{"year":1970,"month":9,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/b5f53339-13bb-4750-b15c-7d8b5f4def41.pdf'),
  },
  {
    entity: {
      id: '15d0e752-13f4-4891-8560-fe4d46a57392',
      name: '红旗一九七〇年第八期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/15d0e752-13f4-4891-8560-fe4d46a57392.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"为创办社会主义理工科大学而奋斗","authors":["驻清华大学工人、解放军毛泽东思想宣传队"],"page_start":8,"page_end":22,"dates":[{"year":1970,"month":8,"day":1}]},{"title":"上海理工科大学教育革命座谈会纪要","authors":["张春桥","姚文元"],"page_start":23,"page_end":37,"dates":[{"year":1970,"month":6,"day":2}]},{"title":"贫下中农有了社会主义文化——甘肃临洮县牛头沟大队关于农村教育革命的调查报告","authors":["甘肃省临洮县革命委员会"],"page_start":38,"page_end":42,"dates":[{"year":1970,"month":8,"day":1}]},{"title":"培养有社会主义觉悟的有文化的劳动者——广西桂平县“五·七”劳动学校的调查报告","authors":["玉林专区革命委员会、桂平县革命委员会调查组"],"page_start":43,"page_end":48,"dates":[{"year":1970,"month":8,"day":1}]},{"title":"《五·七指示》的大道越走越广阔——福建古田县一中教育革命的调查报告","authors":["古田县革命委员会"],"page_start":49,"page_end":52,"dates":[{"year":1970,"month":8,"day":1}]},{"title":"一所为三大革命运动服务的中学——河南许昌县桂村农业中学的调查报告","authors":["许昌地区革命委员会、许昌县革命委员会调查组"],"page_start":53,"page_end":57,"dates":[{"year":1970,"month":8,"day":1}]},{"title":"四种新型的学校——广东省各县(市)创办工业、农业、卫生、师范四种短期学校的综合报告","authors":["广东省革命委员会调查组"],"page_start":58,"page_end":60,"dates":[{"year":1970,"month":8,"day":1}]},{"title":"我们是怎样开展“学工”活动的？","authors":["天津市四十二中革命委员会"],"page_start":61,"page_end":63,"dates":[{"year":1970,"month":8,"day":1}]},{"title":"满腔热情地做好“再教育”工作","authors":["吉林省革命委员会、白城专区革命委员会调查组"],"page_start":64,"page_end":66,"dates":[{"year":1970,"month":8,"day":1}]},{"title":"广阔天地育新人——记在江西德兴县龙头大队插队落户的知识青年","authors":["江西省革命委员会、德兴县革命委员会报道组"],"page_start":67,"page_end":72,"dates":[{"year":1970,"month":8,"day":1}]},{"title":"编后记","authors":["《红旗》杂志编辑部"],"page_start":73,"page_end":73,"dates":[{"year":1970,"month":8,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/15d0e752-13f4-4891-8560-fe4d46a57392.pdf'),
  },
  {
    entity: {
      id: 'b562aaf2-790d-446f-a0a7-9caac35e807c',
      name: '红旗一九七〇年第七期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/b562aaf2-790d-446f-a0a7-9caac35e807c.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"共产党员应是无产阶级先进分子──纪念中国共产党成立四十九周年","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":10,"dates":[{"year":1970,"month":7,"day":1}]},{"title":"亚洲人民团结起来，把美国侵略者从亚洲赶出去！","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":11,"page_end":13,"dates":[{"year":1970,"month":6,"day":24}]},{"title":"为加强党的思想建设而斗争","authors":["驻北京大学工人、解放军毛泽东思想宣传队"],"page_start":14,"page_end":21,"dates":[{"year":1970,"month":7,"day":1}]},{"title":"加强党委会的思想建设","authors":["中国共产党沈阳冶炼厂委员会"],"page_start":22,"page_end":26,"dates":[{"year":1970,"month":7,"day":1}]},{"title":"沿着毛主席的建党路线不断前进——北京锅炉厂第一车间党支部的调查报告","authors":["中国共产党北京锅炉厂委员会驻厂调查组"],"page_start":27,"page_end":33,"dates":[{"year":1970,"month":7,"day":1}]},{"title":"永远密切联系群众","authors":["中国人民解放军广州部队某部“爱民模范连”党支部"],"page_start":34,"page_end":37,"dates":[{"year":1970,"month":7,"day":1}]},{"title":"红色娘子军","authors":["中国舞剧团集体改编"],"page_start":38,"page_end":68,"dates":[{"year":1970,"month":5}]},{"title":"毛泽东思想照耀着舞剧革命的胜利前程——排演革命现代舞剧《红色娘子军》的一些体会","authors":["中国舞剧团"],"page_start":69,"page_end":80,"dates":[{"year":1970,"month":7,"day":1}]},{"title":"思想战线上的新事物","authors":["安江"],"page_start":81,"page_end":84,"dates":[{"year":1970,"month":7,"day":1}]},{"title":"大家动手，自力更生——工业设备更新中两种思想的斗争","authors":["齐永红"],"page_start":85,"page_end":89,"dates":[{"year":1970,"month":7,"day":1}]},{"title":"“增产必增人”对吗？——论开展增产节约运动中的一个思想问题","authors":["辽宁抚顺市革命委员会写作小组"],"page_start":90,"page_end":94,"dates":[{"year":1970,"month":7,"day":1}]},{"title":"“三结合”的技术革新小组好——河北邯郸市汉光机械厂的调查报告","authors":["河北省革命委员会、邯郸地区革命委员会、邯郸市革命委员会、联合调查"],"page_start":95,"page_end":101,"dates":[{"year":1970,"month":7,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/b562aaf2-790d-446f-a0a7-9caac35e807c.pdf'),
  },
  {
    entity: {
      id: 'c2789a7d-95d2-4f51-a1fb-dcd44509509c',
      name: '红旗一九七〇年第六期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/c2789a7d-95d2-4f51-a1fb-dcd44509509c.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"全世界人民团结起来，打败美国侵略者及其一切走狗","authors":["毛泽东"],"page_start":6,"page_end":7,"dates":[{"year":1970,"month":5,"day":20}]},{"title":"改造世界观──纪念《在延安文艺座谈会上的讲话》发表二十八周年","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":10,"dates":[{"year":1970,"month":5,"day":23}]},{"title":"沙家浜","authors":["北京京剧团"],"page_start":11,"page_end":42,"dates":[{"year":1970,"month":5}]},{"title":"《在延安文艺座谈会上的讲话》照耀着《沙家浜》的成长","authors":["北京京剧团《沙家浜》剧组"],"page_start":43,"page_end":52,"dates":[{"year":1970,"month":6,"day":1}]},{"title":"演革命戏 做革命人──纪念毛主席的光辉著作《在延安文艺座谈会上的讲话》发表二十八周年","authors":["上海京剧团《智取威虎山》剧组"],"page_start":53,"page_end":57,"dates":[{"year":1970,"month":6,"day":1}]},{"title":"文艺革命的指路明灯——学习《在延安文艺座谈会上的讲话》的体会","authors":["迈新"],"page_start":58,"page_end":62,"dates":[{"year":1970,"month":6,"day":1}]},{"title":"永远沿着为工农兵服务的方向前进——学习《在延安文艺座谈会上的讲话》","authors":["广西壮族自治区革命委员会写作小组"],"page_start":63,"page_end":69,"dates":[{"year":1970,"month":6,"day":1}]},{"title":"毛主席领导的红军是英雄汉——批判反共历史剧《石达开的末路》","authors":["钟岸"],"page_start":70,"page_end":80,"dates":[{"year":1970,"month":6,"day":1}]},{"title":"工业必须大力支援农业——驳“支农吃亏论”","authors":["齐永红"],"page_start":81,"page_end":84,"dates":[{"year":1970,"month":6,"day":1}]},{"title":"多快好省地发展地方工业","authors":["黑龙江省革命委员会写作小组"],"page_start":85,"page_end":91,"dates":[{"year":1970,"month":6,"day":1}]},{"title":"思想革命带动技术革新——北京维尼纶厂的调查报告","authors":["北京市革命委员会、纺织工业部联合调查组"],"page_start":92,"page_end":97,"dates":[{"year":1970,"month":6,"day":1}]},{"title":"中国人民伟大的革命志气万岁——庆祝我国第一颗人造地球卫星发射成功","authors":["红宇"],"page_start":98,"page_end":101,"dates":[{"year":1970,"month":6,"day":1}]},{"title":"一个全心全意为农业生产服务的修配社——吉林德惠县胶车修配社的调查报告","authors":["长春市革命委员会、德惠县革命委员会调查组"],"page_start":102,"page_end":105,"dates":[{"year":1970,"month":6,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/c2789a7d-95d2-4f51-a1fb-dcd44509509c.pdf'),
  },
  {
    entity: {
      id: 'a69ffe78-9ac4-44e6-8f28-5d885b1bba29',
      name: '红旗一九七〇年第五期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/a69ffe78-9ac4-44e6-8f28-5d885b1bba29.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"列宁主义，还是社会帝国主义？──纪念伟大列宁诞生一百周年","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":24,"dates":[{"year":1970,"month":4,"day":22}]},{"title":"我国第一颗人造地球卫星发射成功","authors":["新华社"],"page_start":25,"page_end":25,"dates":[{"year":1970,"month":4,"day":25}]},{"title":"红灯记","authors":["中国京剧团"],"page_start":26,"page_end":49,"dates":[{"year":1970,"month":5,"day":1}]},{"title":"为塑造无产阶级的英雄典型而斗争——塑造李玉和英雄形象的体会","authors":["中国京剧团《红灯记》剧组"],"page_start":50,"page_end":59,"dates":[{"year":1970,"month":5,"day":1}]},{"title":"革命大批判的强大思想武器——学习《在延安文艺座谈会上的讲话》","authors":["天津市革命委员会写作小组"],"page_start":60,"page_end":65,"dates":[{"year":1970,"month":5,"day":1}]},{"title":"人民战争的壮丽颂歌——评钢琴协奏曲《黄河》","authors":["丁学雷"],"page_start":66,"page_end":73,"dates":[{"year":1970,"month":5,"day":1}]},{"title":"从“老三篇”中学习毛主席的哲学思想","authors":["李长茂"],"page_start":74,"page_end":76,"dates":[{"year":1970,"month":5,"day":1}]},{"title":"把千里草原建设成祖国的钢铁长城","authors":["宝日勒岱"],"page_start":77,"page_end":79,"dates":[{"year":1970,"month":5,"day":1}]},{"title":"紧跟毛主席奋斗终生","authors":["周建人"],"page_start":79,"page_end":82,"dates":[{"year":1970,"month":5,"day":1}]},{"title":"毛泽东思想指引我们妇女永远向前","authors":["杨桂芳"],"page_start":83,"page_end":86,"dates":[{"year":1970,"month":5,"day":1}]},{"title":"无产阶级文化大革命是发展生产的伟大动力","authors":["张正桃"],"page_start":86,"page_end":88,"dates":[{"year":1970,"month":5,"day":1}]},{"title":"艰苦奋斗 继续革命","authors":["“南京路上好八连”党支部"],"page_start":89,"page_end":91,"dates":[{"year":1970,"month":5,"day":1}]},{"title":"革命历史歌曲（五首）","authors":[],"page_start":92,"page_end":97,"dates":[{"year":1970,"month":5,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/a69ffe78-9ac4-44e6-8f28-5d885b1bba29.pdf'),
  },
  {
    entity: {
      id: '9a0b73c4-38fe-45d6-8c7b-5448b0ea54f2',
      name: '红旗一九七〇年第四期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/9a0b73c4-38fe-45d6-8c7b-5448b0ea54f2.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"进一步加强无产阶级专政——学习毛主席关于无产阶级专政下继续革命的学说，纪念“九大”一周年","authors":["黑龙江省革命委员会写作小组"],"page_start":8,"page_end":19,"dates":[{"year":1970,"month":4,"day":1}]},{"title":"打倒洋奴哲学","authors":["赵先平"],"page_start":20,"page_end":24,"dates":[{"year":1970,"month":4,"day":1}]},{"title":"注意综合利用","authors":["于宏"],"page_start":23,"page_end":29,"dates":[{"year":1970,"month":4,"day":1}]},{"title":"无产阶级教育革命大有奔头——驳“当教师没奔头”论","authors":["浙江省革命委员会写作小组"],"page_start":30,"page_end":33,"dates":[{"year":1970,"month":4,"day":1}]},{"title":"为巩固无产阶级专政储备更多的粮草——江苏灌云县吴南生产队的调查报告","authors":["灌云县革命委员会、灌云县人民武装部、《新华日报》记者联合调查"],"page_start":34,"page_end":38,"dates":[{"year":1970,"month":4,"day":1}]},{"title":"一个小厂是怎样年产五百辆汽车的？——江西井冈山汽车制造厂的调查报告","authors":["江西省革命委员会调查组"],"page_start":39,"page_end":44,"dates":[{"year":1970,"month":4,"day":1}]},{"title":"鼓吹资产阶级文艺就是复辟资本主义——驳周扬吹捧资产阶级“文艺复兴”“启蒙运动”“批判现实主义”的反动理论","authors":["上海革命大批判写作小组"],"page_start":45,"page_end":54,"dates":[{"year":1970,"month":4,"day":1}]},{"title":"让哲学变为群众手里的尖锐武器","authors":["《红旗》杂志编辑部"],"page_start":55,"page_end":56,"dates":[{"year":1970,"month":4,"day":1}]},{"title":"只有破得深 才能立得牢","authors":["姜乾位"],"page_start":56,"page_end":57,"dates":[{"year":1970,"month":4,"day":1}]},{"title":"养成分析的习惯","authors":["戴香妹"],"page_start":57,"page_end":58,"dates":[{"year":1970,"month":4,"day":1}]},{"title":"我是怎样学习“一分为二”观点的","authors":["冯照成"],"page_start":59,"page_end":60,"dates":[{"year":1970,"month":4,"day":1}]},{"title":"决定的因素是人","authors":["长春市玻璃总厂工人学哲学小组"],"page_start":61,"page_end":64,"dates":[{"year":1970,"month":4,"day":1}]},{"title":"打破洋框框","authors":["天津化工厂三车间工人学哲学小组"],"page_start":64,"page_end":66,"dates":[{"year":1970,"month":4,"day":1}]},{"title":"安全行车的辩证法","authors":["薛向东"],"page_start":67,"page_end":70,"dates":[{"year":1970,"month":4,"day":1}]},{"title":"有一劳永逸这种事吗？","authors":["江苏泰县河横大队通讯组"],"page_start":71,"page_end":71,"dates":[{"year":1970,"month":4,"day":1}]},{"title":"为传播毛泽东思想做好发行工作","authors":["河南孟津县革命委员会"],"page_start":72,"page_end":73,"dates":[{"year":1970,"month":4,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/9a0b73c4-38fe-45d6-8c7b-5448b0ea54f2.pdf'),
  },
  {
    entity: {
      id: '31fea975-3bd9-47e9-9c76-2c3d3387ff1a',
      name: '红旗一九七〇年第三期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/31fea975-3bd9-47e9-9c76-2c3d3387ff1a.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"建立无产阶级知识分子队伍的伟大纲领——学习《在中国共产党全国宣传工作会议上的讲话》","authors":["安徽省革命委员会写作小组"],"page_start":8,"page_end":18,"dates":[{"year":1970,"month":3,"day":1}]},{"title":"毛泽东思想照亮了我国医学发展的道路","authors":["侯勤文"],"page_start":19,"page_end":29,"dates":[{"year":1970,"month":3,"day":1}]},{"title":"自力更生 勤俭办医","authors":["江苏仪征县金桥大队革命委员会"],"page_start":30,"page_end":33,"dates":[{"year":1970,"month":3,"day":1}]},{"title":"用毛泽东思想统帅文化课","authors":["北京三十一中革命委员会"],"page_start":34,"page_end":40,"dates":[{"year":1970,"month":3,"day":1}]},{"title":"青年人“难弄”吗？——对青年工人进行思想工作中的一个认识问题","authors":["路容"],"page_start":41,"page_end":44,"dates":[{"year":1970,"month":3,"day":1}]},{"title":"突出无产阶级政治，抓紧春耕生产","authors":["赵丰年"],"page_start":45,"page_end":48,"dates":[{"year":1970,"month":3,"day":1}]},{"title":"打击封建宗族残余势力","authors":["江言新"],"page_start":49,"page_end":52,"dates":[{"year":1970,"month":3,"day":1}]},{"title":"克服“当然党员”的错误思想","authors":["张为公"],"page_start":53,"page_end":56,"dates":[{"year":1970,"month":3,"day":1}]},{"title":"越是困难的地方越是要去","authors":["姜英"],"page_start":57,"page_end":58,"dates":[{"year":1970,"month":3,"day":1}]},{"title":"为革命多用脑筋","authors":["郑志虹"],"page_start":58,"page_end":59,"dates":[{"year":1970,"month":3,"day":1}]},{"title":"买卖婚姻的妖风要再扫一扫","authors":["朱韶兴"],"page_start":59,"page_end":61,"dates":[{"year":1970,"month":3,"day":1}]},{"title":"教棒和手怎么能代替思想工作——一个红小兵的大字报","authors":["章敏"],"page_start":61,"page_end":61,"dates":[{"year":1970,"month":3,"day":1}]},{"title":"厉行节约是一场革命——沈阳机车车辆工厂的调查报告","authors":["沈阳市革命委员会"],"page_start":62,"page_end":66,"dates":[{"year":1970,"month":3,"day":1}]},{"title":"从调查研究入手搞好革命大批判——陕西旬邑县郑家公社的调查报告","authors":["陕西省革命委员会"],"page_start":67,"page_end":72,"dates":[{"year":1970,"month":3,"day":1}]},{"title":"五年间的巨大变化——安徽萧县郭庄大队的调查报告","authors":["安徽省革命委员会、宿县专区革命委员会、萧县革命委员会调查组"],"page_start":73,"page_end":79,"dates":[{"year":1970,"month":3,"day":1}]},{"title":"一场粉碎资本主义道路的尖锐斗争——批判叛徒、内奸、工贼刘少奇一九五一年破坏农业合作化运动的滔天罪行","authors":["仲智"],"page_start":80,"page_end":85,"dates":[{"year":1970,"month":3,"day":1}]},{"title":"斯坦尼斯拉夫斯基的“最高任务”是抽掉了阶级内容的理论（摘要）——驳菅井幸雄的修正主义谬论","authors":["日本“齿轮座”剧团机关报《文艺战士》"],"page_start":86,"page_end":90,"dates":[{"year":1970,"month":3,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/31fea975-3bd9-47e9-9c76-2c3d3387ff1a.pdf'),
  },
  {
    entity: {
      id: '1efdd37b-06e8-42db-9b80-8d390be69984',
      name: '红旗一九七〇年第二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/1efdd37b-06e8-42db-9b80-8d390be69984.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"我国社会主义农业的发展道路","authors":["河南省革命委员会写作小组"],"page_start":8,"page_end":18,"dates":[{"year":1970,"month":2,"day":1}]},{"title":"驳“浪费有理论”","authors":["宫效闻"],"page_start":19,"page_end":22,"dates":[{"year":1970,"month":2,"day":1}]},{"title":"搞好农村经济领域的阶级斗争","authors":["安徽省革命大批判写作小组"],"page_start":23,"page_end":26,"dates":[{"year":1970,"month":2,"day":1}]},{"title":"加强革命团结 打击阶级敌人","authors":["沈冶辽"],"page_start":27,"page_end":29,"dates":[{"year":1970,"month":2,"day":1}]},{"title":"为革命封山造林——广西田阳县玉风公社的调查报告","authors":["广西壮族自治区革命委员会、百色专区革命委员会、田阳县革命委员会联合调查组"],"page_start":30,"page_end":33,"dates":[{"year":1970,"month":2,"day":1}]},{"title":"满腔热情 千方百计——关于塑造无产阶级英雄人物音乐形象的几点体会","authors":["上海京剧团《智取威虎山》剧组"],"page_start":34,"page_end":43,"dates":[{"year":1970,"month":2,"day":1}]},{"title":"谁改造谁？——评凯洛夫的《教育学》","authors":["上海革命大批判写作小组"],"page_start":44,"page_end":54,"dates":[{"year":1970,"month":2,"day":1}]},{"title":"社会主义建设与经济学领域中的阶级斗争——批判孙冶方的修正主义经济理论","authors":["吉林省革命委员会写作小组"],"page_start":55,"page_end":66,"dates":[{"year":1970,"month":2,"day":1}]},{"title":"革命战争好得很——批判反动影片《探亲记》","authors":["北京电影制片厂革命大批判小组"],"page_start":67,"page_end":74,"dates":[{"year":1970,"month":2,"day":1}]},{"title":"小评论 威力大——江苏东台县六里大队的调查报告","authors":["东台县革委会、弶港渔业公社革委会联合调查组"],"page_start":75,"page_end":80,"dates":[{"year":1970,"month":2,"day":1}]},{"title":"吃吃喝喝决不是小事","authors":["刘玉艮"],"page_start":81,"page_end":81,"dates":[{"year":1970,"month":2,"day":1}]},{"title":"要擦亮思想上的一根枪","authors":["吴兴才"],"page_start":82,"page_end":82,"dates":[{"year":1970,"month":2,"day":1}]},{"title":"一定要把国家利益放在第一位","authors":["朱国英"],"page_start":82,"page_end":83,"dates":[{"year":1970,"month":2,"day":1}]},{"title":"“炮筒子”和“阴扇子”","authors":["张文兰"],"page_start":83,"page_end":84,"dates":[{"year":1970,"month":2,"day":1}]},{"title":"“大法不犯，小错不改”的思想必须批判","authors":["邓宏旺"],"page_start":84,"page_end":84,"dates":[{"year":1970,"month":2,"day":1}]},{"title":"革命历史歌曲（五首）","authors":[],"page_start":85,"page_end":90,"dates":[{"year":1970,"month":2,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/1efdd37b-06e8-42db-9b80-8d390be69984.pdf'),
  },
  {
    entity: {
      id: 'b550403b-6f3f-4bf8-a521-1901435131a0',
      name: '红旗一九七〇年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/b550403b-6f3f-4bf8-a521-1901435131a0.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"迎接伟大的七十年代（一九七○年元旦社论）","alias":"迎接伟大的七十年代","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":12,"dates":[{"year":1970,"month":1,"day":1}]},{"title":"继续为巩固无产阶级专政而斗争","authors":["中国共产党北京新华印刷厂委员会"],"page_start":13,"page_end":18,"dates":[{"year":1970,"month":1,"day":1}]},{"title":"为革命没有克服不了的困难——吉林市油脂厂自力更生、艰苦创业的调查报告","authors":["吉林省革命委员会、吉林市革命委员会调查组"],"page_start":19,"page_end":26,"dates":[{"year":1970,"month":1,"day":1}]},{"title":"毛泽东思想鼓舞着我们前进——贯彻执行“农业学大寨”的收获和体会","authors":["山西昔阳县革命委员会"],"page_start":27,"page_end":31,"dates":[{"year":1970,"month":1,"day":1}]},{"title":"继续发扬一不怕苦、二不怕死的革命精神","authors":["中国人民解放军济南部队某部“钢铁第一营”党委"],"page_start":32,"page_end":36,"dates":[{"year":1970,"month":1,"day":1}]},{"title":"坚定地走同工人群众相结合的道路","authors":["郑代雨"],"page_start":37,"page_end":39,"dates":[{"year":1970,"month":1,"day":1}]},{"title":"毛主席的光辉千秋万代照雪山","authors":["七林旺丹"],"page_start":40,"page_end":42,"dates":[{"year":1970,"month":1,"day":1}]},{"title":"为捍卫毛主席的革命路线战斗终生","authors":["吴桂贤"],"page_start":43,"page_end":45,"dates":[{"year":1970,"month":1,"day":1}]},{"title":"当一辈子贫下中农的小学生","authors":["艾祖信"],"page_start":46,"page_end":48,"dates":[{"year":1970,"month":1,"day":1}]},{"title":"文科大学一定要搞革命大批判","authors":["上海革命大批判写作小组"],"page_start":49,"page_end":53,"dates":[{"year":1970,"month":1,"day":1}]},{"title":"正确处理抓革命、促生产中的几个关系","authors":["北京第三棉纺织厂工人评论组"],"page_start":54,"page_end":59,"dates":[{"year":1970,"month":1,"day":1}]},{"title":"认真抓好经济领域的阶级斗争","authors":["江虹"],"page_start":60,"page_end":63,"dates":[{"year":1970,"month":1,"day":1}]},{"title":"沿着毛主席的建党路线胜利前进","authors":["八三四一部队驻北京二七机车车辆工厂毛泽东思想宣传队"],"page_start":64,"page_end":70,"dates":[{"year":1970,"month":1,"day":1}]},{"title":"一个密切联系群众的党支部——株洲车辆工厂工具车间党支部的调查报告","authors":["湖南省革命委员会调查组"],"page_start":71,"page_end":76,"dates":[{"year":1970,"month":1,"day":1}]},{"title":"加强党的观念 接受党的领导——学习马克思主义、列宁主义、毛泽东思想关于领袖、政党、政权、阶级、群众相互关系的学说","authors":["龚政耀"],"page_start":77,"page_end":81,"dates":[{"year":1970,"month":1,"day":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/b550403b-6f3f-4bf8-a521-1901435131a0.pdf'),
  },
  {
    entity: {
      id: 'c9a48a35-60c6-421f-ab1e-0eda9eadd092',
      name: '红旗一九七五年第十二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/c9a48a35-60c6-421f-ab1e-0eda9eadd092.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"教育革命的方向不容篡改","authors":["北京大学","清华大学大批判组"],"page_start":8,"page_end":15,"dates":[{"year":1975,"month":12,"day":1}]},{"title":"革命是历史的火车头","authors":["齐永红"],"page_start":16,"page_end":20,"dates":[{"year":1975,"month":12}]},{"title":"热情支持社会主义的新生事物","authors":["俞彤"],"page_start":21,"page_end":24,"dates":[{"year":1975,"month":12}]},{"title":"惩前毖后 治病救人","authors":["齐彦"],"page_start":25,"page_end":27,"dates":[{"year":1975,"month":12}]},{"title":"坚持青年同工农结合的正确路线——学习《青年运动的方向》","authors":["石凌"],"page_start":28,"page_end":33,"dates":[{"year":1975,"month":12}]},{"title":"永远坚持毛主席的教育方针","authors":["叶新"],"page_start":34,"page_end":38,"dates":[{"year":1975,"month":12}]},{"title":"牢记党的基本路线","authors":["上海市第二中学党支部"],"page_start":39,"page_end":42,"dates":[{"year":1975,"month":12}]},{"title":"开门办学 越办越好","authors":["北京市第十三中学党支部"],"page_start":43,"page_end":46,"dates":[{"year":1975,"month":12}]},{"title":"略论方腊","authors":["史文"],"page_start":47,"page_end":53,"dates":[{"year":1975,"month":12}]},{"title":"从宋江看修正主义的反动本质","authors":["袁青"],"page_start":54,"page_end":56,"dates":[{"year":1975,"month":12}]},{"title":"发动群众评论《水浒》","authors":["甘肃庆阳县八里庙大队党支部"],"page_start":57,"page_end":60,"dates":[{"year":1975,"month":12}]},{"title":"普及大寨县要抓好基本路线教育","authors":["严群"],"page_start":61,"page_end":64,"dates":[{"year":1975,"month":12}]},{"title":"丰收了也要注意节约","authors":["江景宏"],"page_start":65,"page_end":67,"dates":[{"year":1975,"month":12}]},{"title":"比什么？","authors":["山东泰安县后省庄大队贫下中农评论组"],"page_start":68,"page_end":69,"dates":[{"year":1975,"month":12}]},{"title":"条件是不可改变的吗？","authors":["上海金山县枫围公社新华大队理论小组"],"page_start":69,"page_end":71,"dates":[{"year":1975,"month":12}]},{"title":"修修配配 大有可为","authors":["广西灵山县农机修造厂工人评论组"],"page_start":71,"page_end":72,"dates":[{"year":1975,"month":12}]},{"title":"搞好农田基本建设依靠什么？——陕西榆林地区的调查报告","authors":["中国共产党陕西省委员会调查组"],"page_start":73,"page_end":77,"dates":[{"year":1975,"month":12}]},{"title":"加强领导班子的思想建设","authors":["邯邢冶金矿山管理局党委会"],"page_start":78,"page_end":81,"dates":[{"year":1975,"month":12}]},{"title":"红旗杂志一九七五年第一期到第十二期总目录","authors":["《红旗》杂志编辑部"],"page_start":82,"page_end":89,"dates":[{"year":1975,"month":12}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/c9a48a35-60c6-421f-ab1e-0eda9eadd092.pdf'),
  },
  {
    entity: {
      id: 'eccb48da-03b5-40eb-aae1-879006a41c32',
      name: '红旗一九七五年第十一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/eccb48da-03b5-40eb-aae1-879006a41c32.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"纪念长征胜利四十周年","authors":["《人民日报》编辑部","《解放军报》编辑部"],"page_start":6,"page_end":7,"dates":[{"year":1975,"month":10,"day":19}]},{"title":"结合评论《水浒》，深入学习理论","alias":"结合评论《水浒》 深入学习理论","authors":["池恒"],"page_start":8,"page_end":10,"dates":[{"year":1975,"month":11,"day":1}]},{"title":"学大寨是一个伟大的革命运动","authors":["华云"],"page_start":11,"page_end":14,"dates":[{"year":1975,"month":11}]},{"title":"以点带面 推动全般","authors":["庄宁"],"page_start":15,"page_end":18,"dates":[{"year":1975,"month":11}]},{"title":"学大寨要永不停步","authors":["中国共产党营口县委员会"],"page_start":19,"page_end":23,"dates":[{"year":1975,"month":11}]},{"title":"加快农业机械化的步伐","authors":["谭枫"],"page_start":24,"page_end":28,"dates":[{"year":1975,"month":11}]},{"title":"穷要长志 富要防修","authors":["吉林榆树县小乡生产队党支部"],"page_start":29,"page_end":33,"dates":[{"year":1975,"month":11}]},{"title":"自力更生就可以大有作为——山东烟台地区发展农业机械化的调查报告","authors":["中国共产党山东省委员会调查组"],"page_start":34,"page_end":38,"dates":[{"year":1975,"month":11}]},{"title":"反对投降主义的重要文献——学习《上海太原失陷以后抗日战争的形势和任务》","authors":["田志松"],"page_start":39,"page_end":43,"dates":[{"year":1975,"month":11}]},{"title":"评胡适的《水浒》考证","authors":["余凡"],"page_start":44,"page_end":49,"dates":[{"year":1975,"month":11}]},{"title":"透过现象看本质——评宋江同高俅的斗争","authors":["方荆"],"page_start":50,"page_end":53,"dates":[{"year":1975,"month":11}]},{"title":"农民起义有这样的“规律”吗？","authors":["杨宽"],"page_start":54,"page_end":58,"dates":[{"year":1975,"month":11}]},{"title":"“让贤”与投降","authors":["北京卫戍区某部一连理论小组"],"page_start":59,"page_end":61,"dates":[{"year":1975,"month":11}]},{"title":"我们评论《水浒》的一点体会","authors":["河北深县护家池大队党支部"],"page_start":62,"page_end":64,"dates":[{"year":1975,"month":11}]},{"title":"大海的力量——评影片《第二个春天》的主题思想","authors":["秦新"],"page_start":65,"page_end":70,"dates":[{"year":1975,"month":11}]},{"title":"重视科学普及工作","authors":["项群"],"page_start":71,"page_end":75,"dates":[{"year":1975,"month":11}]},{"title":"更正","authors":[],"page_start":75,"page_end":75,"dates":[{"year":1975,"month":11}]},{"title":"让革命诗歌占领阵地——重读鲁迅对新诗形式问题的论述","authors":["任犊"],"page_start":76,"page_end":78,"dates":[{"year":1975,"month":11}]},{"title":"请看苏修的一种新行业","authors":["阳戈"],"page_start":79,"page_end":81,"dates":[{"year":1975,"month":11}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/eccb48da-03b5-40eb-aae1-879006a41c32.pdf'),
  },
  {
    entity: {
      id: 'd2bf3c0d-7ad9-484c-b2a5-6b2a2def3b33',
      name: '红旗一九七五年第十期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/d2bf3c0d-7ad9-484c-b2a5-6b2a2def3b33.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"认真总结农业学大寨的经验","authors":["谭枫"],"page_start":8,"page_end":13,"dates":[{"year":1975,"month":10}]},{"title":"积极办好中小工业","authors":["江虹"],"page_start":14,"page_end":18,"dates":[{"year":1975,"month":10}]},{"title":"做好后进队的转化工作","authors":["中国共产党昔阳县委员会"],"page_start":19,"page_end":22,"dates":[{"year":1975,"month":10}]},{"title":"在毛主席革命路线指引下胜利前进——庆祝新疆维吾尔自治区成立二十周年","authors":["赛福鼎"],"page_start":23,"page_end":29,"dates":[{"year":1975,"month":10}]},{"title":"大有希望的新生事物——江苏无锡县发展社队工业的调查报告","authors":["江苏省革命委员会调查组"],"page_start":30,"page_end":33,"dates":[{"year":1975,"month":10}]},{"title":"建设理论队伍 推动群众学习","authors":["天津市染料厂党委会"],"page_start":34,"page_end":37,"dates":[{"year":1975,"month":10}]},{"title":"发挥技术人员的积极作用——上海沪东造船厂的调查报告","authors":["上海市第一机电工业局调查组"],"page_start":38,"page_end":41,"dates":[{"year":1975,"month":10}]},{"title":"评投降派宋江","authors":["安群"],"page_start":42,"page_end":48,"dates":[{"year":1975,"month":10}]},{"title":"评金圣叹腰斩《水浒》——兼驳胡适吹捧金批本《水浒》的谬论","authors":["闻钟"],"page_start":49,"page_end":54,"dates":[{"year":1975,"month":10}]},{"title":"《水浒》与宋代的阶级斗争","authors":["杨荣国"],"page_start":55,"page_end":58,"dates":[{"year":1975,"month":10}]},{"title":"宣扬投降是对农民革命的歪曲","authors":["山东梁山县后集大队《水浒》评论组"],"page_start":59,"page_end":62,"dates":[{"year":1975,"month":10}]},{"title":"《水浒》为何屏晁盖于一百〇八人之外？","authors":["陈大康"],"page_start":62,"page_end":63,"dates":[{"year":1975,"month":10}]},{"title":"加强领导班子的建设","authors":["石平"],"page_start":64,"page_end":67,"dates":[{"year":1975,"month":10}]},{"title":"发展安定团结的大好形势","authors":["巴山"],"page_start":68,"page_end":70,"dates":[{"year":1975,"month":10}]},{"title":"用什么标准要求学生？","authors":["上海市本溪中学党支部"],"page_start":71,"page_end":73,"dates":[{"year":1975,"month":10}]},{"title":"同位素年代学与人类对自然发展史的认识","authors":["周新华","朱炳泉"],"page_start":74,"page_end":83,"dates":[{"year":1975,"month":10}]},{"title":"苏修争霸世界的经济根源","authors":["梁效"],"page_start":84,"page_end":89,"dates":[{"year":1975,"month":10}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/d2bf3c0d-7ad9-484c-b2a5-6b2a2def3b33.pdf'),
  },
  {
    entity: {
      id: 'e569e6be-702a-4fc4-9010-95bb6bab08fb',
      name: '红旗一九七五年第九期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/e569e6be-702a-4fc4-9010-95bb6bab08fb.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"重视对《水浒》的评论","authors":["《红旗》杂志评论员"],"page_start":9,"page_end":10,"dates":[{"year":1975,"month":8,"day":28}]},{"title":"使人民都知道投降派——学习鲁迅对《水浒》的论述","authors":["方岩粱"],"page_start":11,"page_end":15,"dates":[{"year":1975,"month":9}]},{"title":"一部宣扬投降主义的反面教材——评《水浒》","authors":["北京大学、清华大学大批判组"],"page_start":16,"page_end":20,"dates":[{"year":1975,"month":9}]},{"title":"评《水浒》的投降主义路线","authors":["钟谷"],"page_start":21,"page_end":28,"dates":[{"year":1975,"month":9}]},{"title":"叛徒的颂歌","authors":["赵安亭"],"page_start":29,"page_end":35,"dates":[{"year":1975,"month":9}]},{"title":"加强体育队伍的思想建设","authors":["郭育"],"page_start":36,"page_end":38,"dates":[{"year":1975,"month":9}]},{"title":"进一步抓好农村卫生工作","authors":["韦革"],"page_start":39,"page_end":41,"dates":[{"year":1975,"month":9}]},{"title":"共产党员要增强党的观念","authors":["闵雪"],"page_start":42,"page_end":45,"dates":[{"year":1975,"month":9}]},{"title":"坚持精兵简政","authors":["兰文"],"page_start":46,"page_end":49,"dates":[{"year":1975,"month":9}]},{"title":"掌握对立统一的辩证观点","authors":["燕枫"],"page_start":50,"page_end":53,"dates":[{"year":1975,"month":9}]},{"title":"无产阶级专政和资产阶级法权——学习《国家与革命》第五章","authors":["钟实"],"page_start":54,"page_end":58,"dates":[{"year":1975,"month":9}]},{"title":"总结经验 促进学习","authors":["李扬"],"page_start":59,"page_end":60,"dates":[{"year":1975,"month":9}]},{"title":"工人阶级也要不断学习和改造","authors":["洪滨"],"page_start":61,"page_end":65,"dates":[{"year":1975,"month":9}]},{"title":"深入学习理论必须端正学风","authors":["中国共产党盘锦地区委员会"],"page_start":66,"page_end":69,"dates":[{"year":1975,"month":9}]},{"title":"翻身农奴在社会主义道路上前进——庆祝西藏自治区成立十周年","authors":["朱锋"],"page_start":70,"page_end":76,"dates":[{"year":1975,"month":9}]},{"title":"依靠群众赢得了高速度","authors":["上海石油化工总厂筹建指挥部"],"page_start":77,"page_end":80,"dates":[{"year":1975,"month":9}]},{"title":"努力把基本建设搞得更好","authors":["姚尚"],"page_start":81,"page_end":85,"dates":[{"year":1975,"month":9}]},{"title":"在抗灾斗争中锻炼得更坚强","authors":["山东诸城县新河崖大队党支部"],"page_start":86,"page_end":89,"dates":[{"year":1975,"month":9}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/e569e6be-702a-4fc4-9010-95bb6bab08fb.pdf'),
  },
  {
    entity: {
      id: '96a05f33-7f74-44c3-a260-72f9e23c2302',
      name: '红旗一九七五年第七期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/96a05f33-7f74-44c3-a260-72f9e23c2302.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"提倡调查研究","authors":["池恒"],"page_start":6,"page_end":8,"dates":[{"year":1975,"month":7}]},{"title":"巩固和发展上山下乡的成果","authors":["齐坚"],"page_start":9,"page_end":12,"dates":[{"year":1975,"month":7}]},{"title":"做好思想教育工作","authors":["梁华"],"page_start":13,"page_end":14,"dates":[{"year":1975,"month":7}]},{"title":"为青年出版更多更好的自学读物——评《青年自学丛书》","authors":["翟青"],"page_start":15,"page_end":19,"dates":[{"year":1975,"month":7}]},{"title":"充分发挥党组织的先锋队作用","authors":["柏杉"],"page_start":20,"page_end":22,"dates":[{"year":1975,"month":7}]},{"title":"加强党的思想建设和组织建设","authors":["向晖"],"page_start":23,"page_end":27,"dates":[{"year":1975,"month":7}]},{"title":"抓好农村党员的思想教育","authors":["安徽利辛县柳西大队党支部"],"page_start":28,"page_end":31,"dates":[{"year":1975,"month":7}]},{"title":"做名副其实的共产党员","authors":["李增锡"],"page_start":32,"page_end":34,"dates":[{"year":1975,"month":7}]},{"title":"正确认识我国的商品制度","authors":["郑凯"],"page_start":35,"page_end":39,"dates":[{"year":1975,"month":7}]},{"title":"努力使主观符合客观——我们是怎样逐步做好天气预报的？","authors":["贵州水城气象站"],"page_start":40,"page_end":45,"dates":[{"year":1975,"month":7}]},{"title":"论钱干活的思想要不得","authors":["李小四"],"page_start":46,"page_end":48,"dates":[{"year":1975,"month":7}]},{"title":"搞协作非得靠“人情”吗？","authors":["上海无线电十三厂工人理论小组"],"page_start":48,"page_end":49,"dates":[{"year":1975,"month":7}]},{"title":"从一根红头绳谈起","authors":["淮南市李郢孜百货商店党支部"],"page_start":50,"page_end":51,"dates":[{"year":1975,"month":7}]},{"title":"学理论 促生产——天津市电子仪器厂的调查报告","authors":["第四机械工业部、天津市第二机械局调查组"],"page_start":52,"page_end":55,"dates":[{"year":1975,"month":7}]},{"title":"法家路线和黄老思想——读帛书《经法》","authors":["康立","卫今"],"page_start":56,"page_end":65,"dates":[{"year":1975,"month":7}]},{"title":"照毛主席的思想办农业","authors":["葛静"],"page_start":66,"page_end":70,"dates":[{"year":1975,"month":7}]},{"title":"搞好钢铁生产的根本问题在路线","authors":["章迪"],"page_start":71,"page_end":74,"dates":[{"year":1975,"month":7}]},{"title":"注意发展轻工业","authors":["钟成"],"page_start":75,"page_end":78,"dates":[{"year":1975,"month":7}]},{"title":"为革命做好商品供应工作","authors":["北京市西单菜市场党支部"],"page_start":79,"page_end":81,"dates":[{"year":1975,"month":7}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/96a05f33-7f74-44c3-a260-72f9e23c2302.pdf'),
  },
  {
    entity: {
      id: '8a91a197-8c2a-4e8b-9e8a-bbe97afc4f51',
      name: '红旗一九七五年第八期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/8a91a197-8c2a-4e8b-9e8a-bbe97afc4f51.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"搞好农村的社会主义革命——纪念《关于农业合作化问题》发表二十周年","authors":["齐彦"],"page_start":6,"page_end":11,"dates":[{"year":1975,"month":8}]},{"title":"学一点政治经济学","authors":["吴畅"],"page_start":12,"page_end":14,"dates":[{"year":1975,"month":8}]},{"title":"评林彪的卖国哲学","authors":["梁效"],"page_start":15,"page_end":20,"dates":[{"year":1975,"month":8}]},{"title":"进一步加强党的团结","authors":["青岩"],"page_start":21,"page_end":24,"dates":[{"year":1975,"month":8}]},{"title":"理论联系实际 推动学习深入","authors":["池恒"],"page_start":25,"page_end":27,"dates":[{"year":1975,"month":8}]},{"title":"坚持社会主义道路 限制资产阶级法权","authors":["北京平谷县许家务大队党支部"],"page_start":28,"page_end":31,"dates":[{"year":1975,"month":8}]},{"title":"运用理论调查研究农村现状","authors":["江振华"],"page_start":32,"page_end":35,"dates":[{"year":1975,"month":8}]},{"title":"分工虽不同都是主人翁","authors":["上海第五钢铁厂第一车间理论小组"],"page_start":36,"page_end":37,"dates":[{"year":1975,"month":8}]},{"title":"正确处理干部和群众的关系","authors":["中国共产党昆仑机械厂委员会"],"page_start":38,"page_end":40,"dates":[{"year":1975,"month":8}]},{"title":"为建设农村贡献我们的力量","authors":["刘克清","李解忠","李典庆","李维友","李国坚","肖坤书"],"page_start":41,"page_end":43,"dates":[{"year":1975,"month":8}]},{"title":"沿着毛主席的无产阶级建军路线前进","authors":["柯史"],"page_start":44,"page_end":51,"dates":[{"year":1975,"month":8}]},{"title":"密切官兵关系的有效措施","authors":["中国人民解放军空军航空兵某师党委会"],"page_start":52,"page_end":54,"dates":[{"year":1975,"month":8}]},{"title":"自觉地经常地向人民群众学习","authors":["中国人民解放军海军某部“洛阳”舰党支部"],"page_start":55,"page_end":58,"dates":[{"year":1975,"month":8}]},{"title":"保持旺盛的革命斗志","authors":["靳志柏"],"page_start":59,"page_end":61,"dates":[{"year":1975,"month":8}]},{"title":"破除外因论 自觉拒腐蚀","authors":["江景宏"],"page_start":62,"page_end":64,"dates":[{"year":1975,"month":8}]},{"title":"领导要敢于负责","authors":["袁青"],"page_start":65,"page_end":67,"dates":[{"year":1975,"month":8}]},{"title":"实践是农业科学发展的源泉","authors":["金枫"],"page_start":68,"page_end":78,"dates":[{"year":1975,"month":8}]},{"title":"苏修鼓吹“三不”主义的目的何在？","authors":["秦景池"],"page_start":79,"page_end":81,"dates":[{"year":1975,"month":8}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/8a91a197-8c2a-4e8b-9e8a-bbe97afc4f51.pdf'),
  },
  {
    entity: {
      id: '2c1e7af3-1eb3-4fdc-88be-78b70dffb524',
      name: '红旗一九七五年第七期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/2c1e7af3-1eb3-4fdc-88be-78b70dffb524.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"提倡调查研究","authors":["池恒"],"page_start":6,"page_end":8,"dates":[{"year":1975,"month":7}]},{"title":"巩固和发展上山下乡的成果","authors":["齐坚"],"page_start":9,"page_end":12,"dates":[{"year":1975,"month":7}]},{"title":"做好思想教育工作","authors":["梁华"],"page_start":13,"page_end":14,"dates":[{"year":1975,"month":7}]},{"title":"为青年出版更多更好的自学读物——评《青年自学丛书》","authors":["翟青"],"page_start":15,"page_end":19,"dates":[{"year":1975,"month":7}]},{"title":"充分发挥党组织的先锋队作用","authors":["柏杉"],"page_start":20,"page_end":22,"dates":[{"year":1975,"month":7}]},{"title":"加强党的思想建设和组织建设","authors":["向晖"],"page_start":23,"page_end":27,"dates":[{"year":1975,"month":7}]},{"title":"抓好农村党员的思想教育","authors":["安徽利辛县柳西大队党支部"],"page_start":28,"page_end":31,"dates":[{"year":1975,"month":7}]},{"title":"做名副其实的共产党员","authors":["李增锡"],"page_start":32,"page_end":34,"dates":[{"year":1975,"month":7}]},{"title":"正确认识我国的商品制度","authors":["郑凯"],"page_start":35,"page_end":39,"dates":[{"year":1975,"month":7}]},{"title":"努力使主观符合客观——我们是怎样逐步做好天气预报的？","authors":["贵州水城气象站"],"page_start":40,"page_end":45,"dates":[{"year":1975,"month":7}]},{"title":"论钱干活的思想要不得","authors":["李小四"],"page_start":46,"page_end":48,"dates":[{"year":1975,"month":7}]},{"title":"搞协作非得靠“人情”吗？","authors":["上海无线电十三厂工人理论小组"],"page_start":48,"page_end":49,"dates":[{"year":1975,"month":7}]},{"title":"从一根红头绳谈起","authors":["淮南市李郢孜百货商店党支部"],"page_start":50,"page_end":51,"dates":[{"year":1975,"month":7}]},{"title":"学理论 促生产——天津市电子仪器厂的调查报告","authors":["第四机械工业部、天津市第二机械局调查组"],"page_start":52,"page_end":55,"dates":[{"year":1975,"month":7}]},{"title":"法家路线和黄老思想——读帛书《经法》","authors":["康立","卫今"],"page_start":56,"page_end":65,"dates":[{"year":1975,"month":7}]},{"title":"照毛主席的思想办农业","authors":["葛静"],"page_start":66,"page_end":70,"dates":[{"year":1975,"month":7}]},{"title":"搞好钢铁生产的根本问题在路线","authors":["章迪"],"page_start":71,"page_end":74,"dates":[{"year":1975,"month":7}]},{"title":"注意发展轻工业","authors":["钟成"],"page_start":75,"page_end":78,"dates":[{"year":1975,"month":7}]},{"title":"为革命做好商品供应工作","authors":["北京市西单菜市场党支部"],"page_start":79,"page_end":81,"dates":[{"year":1975,"month":7}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/2c1e7af3-1eb3-4fdc-88be-78b70dffb524.pdf'),
  },
  {
    entity: {
      id: '8671ab3f-3819-42c2-8495-f1cdbdd8cd42',
      name: '红旗一九七五年第六期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/8671ab3f-3819-42c2-8495-f1cdbdd8cd42.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"深入学习理论 促进安定团结","authors":["岳海"],"page_start":6,"page_end":9,"dates":[{"year":1975,"month":6}]},{"title":"学习马克思主义要作长期努力","authors":["李钧"],"page_start":10,"page_end":12,"dates":[{"year":1975,"month":6}]},{"title":"学好理论执行政策","authors":["程越"],"page_start":13,"page_end":15,"dates":[{"year":1975,"month":6}]},{"title":"加强对青少年的教育","authors":["江虹"],"page_start":16,"page_end":20,"dates":[{"year":1975,"month":6}]},{"title":"货币交换和现实的阶级斗争","authors":["夏力之"],"page_start":21,"page_end":25,"dates":[{"year":1975,"month":6}]},{"title":"在商品交换中坚持社会主义原则——广西南宁罐头食品厂的调查报告","authors":["中国共产党南宁市委员会调查组"],"page_start":26,"page_end":29,"dates":[{"year":1975,"month":6}]},{"title":"努力提高自己的马列主义水平——重新学习《整顿党的作风》的一点体会","authors":["李铁"],"page_start":30,"page_end":33,"dates":[{"year":1975,"month":6}]},{"title":"组织工人认真看书学习","authors":["北京二七机车车辆工厂工会委员会"],"page_start":34,"page_end":37,"dates":[{"year":1975,"month":6}]},{"title":"青年要做缩小三大差别的促进派","authors":["湖南株洲县白关大队农场知识青年"],"page_start":38,"page_end":42,"dates":[{"year":1975,"month":6}]},{"title":"按照无产阶级面貌改造文化队伍——学习《在延安文艺座谈会上的讲话》","authors":["杜华章"],"page_start":43,"page_end":47,"dates":[{"year":1975,"month":6}]},{"title":"继续做好医疗队工作","authors":["韦革"],"page_start":48,"page_end":52,"dates":[{"year":1975,"month":6}]},{"title":"进一步发展农村电影放映网","authors":["钟颖"],"page_start":53,"page_end":56,"dates":[{"year":1975,"month":6}]},{"title":"法家是春秋战国时期社会大变动的产物","authors":["梁思源"],"page_start":57,"page_end":64,"dates":[{"year":1975,"month":6}]},{"title":"走大庆道路 铺“海上铁路”","authors":["中国共产党沪东造船厂委员会"],"page_start":65,"page_end":69,"dates":[{"year":1975,"month":6}]},{"title":"用无产阶级革命精神办企业——吉林市油脂厂的调查报告","authors":["中国共产党吉林省委员会、中国共产党吉林市委员会调查组"],"page_start":70,"page_end":73,"dates":[{"year":1975,"month":6}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/8671ab3f-3819-42c2-8495-f1cdbdd8cd42.pdf'),
  },
  {
    entity: {
      id: '2b0159fa-768e-43f3-8fb1-7e17634a22fb',
      name: '红旗一九七五年第五期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/2b0159fa-768e-43f3-8fb1-7e17634a22fb.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"精通的目的全在于应用","authors":["田春"],"page_start":8,"page_end":10,"dates":[{"year":1975,"month":5}]},{"title":"生产关系中的一个重要问题","authors":["袁青"],"page_start":11,"page_end":16,"dates":[{"year":1975,"month":5}]},{"title":"进一步加强农村的无产阶级专政","authors":["江渭清"],"page_start":17,"page_end":22,"dates":[{"year":1975,"month":5}]},{"title":"无产阶级专政与叛徒林彪","authors":["北京大学、清华大学大批判组"],"page_start":23,"page_end":29,"dates":[{"year":1975,"month":5}]},{"title":"大学生当农民“吃亏”吗？","authors":["葛义"],"page_start":30,"page_end":31,"dates":[{"year":1975,"month":5}]},{"title":"应当这样掌管钥匙","authors":["晓明"],"page_start":32,"page_end":33,"dates":[{"year":1975,"month":5}]},{"title":"不搞庸俗的“礼尚往来”","authors":["天津市南郊区老左营大队贫下中农理论小组"],"page_start":33,"page_end":35,"dates":[{"year":1975,"month":5}]},{"title":"定期公布账目好","authors":["长沙市郊区合平大队贫下中农评论组"],"page_start":35,"page_end":36,"dates":[{"year":1975,"month":5}]},{"title":"提倡自己动手","authors":["岳曦"],"page_start":36,"page_end":37,"dates":[{"year":1975,"month":5}]},{"title":"坚定不移地走大庆道路","authors":["中国共产党胜利油田委员会"],"page_start":38,"page_end":41,"dates":[{"year":1975,"month":5}]},{"title":"团结战斗 胜利向前","authors":["中国共产党合山矿务局委员会"],"page_start":42,"page_end":45,"dates":[{"year":1975,"month":5}]},{"title":"警惕商品交换原则对党的侵蚀","authors":["甘戈"],"page_start":46,"page_end":49,"dates":[{"year":1975,"month":5}]},{"title":"保持和发扬“穷棒子”精神——重新学习毛主席关于农业合作化的指示","authors":["王国藩"],"page_start":50,"page_end":54,"dates":[{"year":1975,"month":5}]},{"title":"用共产主义思想教育青年","authors":["大寨大队团支部"],"page_start":55,"page_end":58,"dates":[{"year":1975,"month":5}]},{"title":"认真实行精兵简政","authors":["中国共产党大荔县委员会"],"page_start":59,"page_end":62,"dates":[{"year":1975,"month":5}]},{"title":"坚持政治挂帅 批判物质刺激——大连机车车辆厂的调查报告","authors":["中共旅大市委调查组","辽宁日报记者"],"page_start":63,"page_end":66,"dates":[{"year":1975,"month":5}]},{"title":"学校应当成为无产阶级专政的工具","authors":["中国共产党朝阳农学院委员会"],"page_start":67,"page_end":72,"dates":[{"year":1975,"month":5}]},{"title":"教育革命的一个重要经验","authors":["钟实"],"page_start":73,"page_end":76,"dates":[{"year":1975,"month":5}]},{"title":"工科院校要为工业生产服务——山东工学院的调查报告","authors":["山东省革命委员会教育局调查组"],"page_start":77,"page_end":81,"dates":[{"year":1975,"month":5}]},{"title":"继续改革大学教育——北京市的调查报告","authors":["中国共产党北京市委员会教育革命调查组"],"page_start":82,"page_end":85,"dates":[{"year":1975,"month":5}]},{"title":"人类认识和利用能源的历史","authors":["秦华"],"page_start":86,"page_end":97,"dates":[{"year":1975,"month":5}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/2b0159fa-768e-43f3-8fb1-7e17634a22fb.pdf'),
  },
  {
    entity: {
      id: 'c492f936-cda3-4709-a9ef-459edeacd192',
      name: '红旗一九七五年第四期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/c492f936-cda3-4709-a9ef-459edeacd192.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"论对资产阶级的全面专政","authors":["张春桥"],"page_start":6,"page_end":15,"dates":[{"year":1975,"month":4,"day":1}]},{"title":"从理论与实践的结合上学好弄通","authors":["《红旗》杂志编辑部"],"page_start":16,"page_end":19,"dates":[{"year":1975,"month":4}]},{"title":"回顾“三反”“五反”运动","authors":["翟青"],"page_start":20,"page_end":23,"dates":[{"year":1975,"month":4}]},{"title":"巩固和发展社会主义制度——学习《无产阶级专政时代的经济和政治》","authors":["燕枫"],"page_start":26,"page_end":32,"dates":[{"year":1975,"month":4}]},{"title":"限制资产阶级法权的思想武器——学习《在中国共产党第七届中央委员会第二次全体会议上的报告》","authors":["纪岩"],"page_start":33,"page_end":39,"dates":[{"year":1975,"month":4}]},{"title":"调动一切积极因素","authors":["高洛"],"page_start":40,"page_end":43,"dates":[{"year":1975,"month":4}]},{"title":"战胜资产阶级的思想反抗","authors":["庄宁"],"page_start":44,"page_end":48,"dates":[{"year":1975,"month":4}]},{"title":"批资本主义 干社会主义——山东鱼台县相里大队的调查报告","authors":["中国共产党鱼台县委员会调查组"],"page_start":49,"page_end":52,"dates":[{"year":1975,"month":4}]},{"title":"回到农村 继续革命","authors":["北京部队某部八连全体复员战士"],"page_start":53,"page_end":56,"dates":[{"year":1975,"month":4}]},{"title":"开门整风 团结多数","authors":["河北魏县陈庄大队党支部"],"page_start":57,"page_end":60,"dates":[{"year":1975,"month":4}]},{"title":"在反腐蚀的斗争中前进——北京市崇文门第二旅馆的调查报告","authors":["中国共产党北京市委宣传组调查组"],"page_start":61,"page_end":64,"dates":[{"year":1975,"month":4}]},{"title":"认真办好自然科学研究刊物","authors":["柯文"],"page_start":65,"page_end":69,"dates":[{"year":1975,"month":4}]},{"title":"商品交换中两种思想的斗争——从湖南花鼓戏《送货路上》谈起","authors":["胡容"],"page_start":70,"page_end":74,"dates":[{"year":1975,"month":4}]},{"title":"宁夏六个国营农场的变化说明了什么？","authors":["农林部农垦局调查组"],"page_start":75,"page_end":79,"dates":[{"year":1975,"month":4}]},{"title":"坚持正确路线 搞好铁路运输","authors":["吉林铁路局党委会"],"page_start":80,"page_end":84,"dates":[{"year":1975,"month":4}]},{"title":"自力更生是个路线问题","authors":["黎新"],"page_start":85,"page_end":89,"dates":[{"year":1975,"month":4}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/c492f936-cda3-4709-a9ef-459edeacd192.pdf'),
  },
  {
    entity: {
      id: '8c8a7915-75da-4b54-89eb-5837162fb60e',
      name: '红旗一九七五年第三期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/8c8a7915-75da-4b54-89eb-5837162fb60e.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"马克思恩格斯列宁论无产阶级专政","authors":[],"page_start":6,"page_end":22,"dates":[{"year":1975,"month":3}]},{"title":"论林彪反党集团的社会基础","authors":["姚文元"],"page_start":23,"page_end":32,"dates":[{"year":1975,"month":3,"day":1}]},{"title":"认真读书 抓紧学习","authors":["程越"],"page_start":33,"page_end":37,"dates":[{"year":1975,"month":3}]},{"title":"坚持无产阶级专政的理论武器——纪念《哥达纲领批判》写作一百周年","authors":["路明"],"page_start":38,"page_end":45,"dates":[{"year":1975,"month":3}]},{"title":"批判因循守旧 坚持继续革命","authors":["梁效"],"page_start":46,"page_end":51,"dates":[{"year":1975,"month":3}]},{"title":"为巩固无产阶级专政加强革命团结","authors":["俞彤"],"page_start":52,"page_end":55,"dates":[{"year":1975,"month":3}]},{"title":"永葆无产阶级的革命精神","authors":["严群"],"page_start":56,"page_end":58,"dates":[{"year":1975,"month":3}]},{"title":"努力改造世界观","authors":["田志松"],"page_start":59,"page_end":63,"dates":[{"year":1975,"month":3}]},{"title":"十六个青年店员的反腐蚀斗争——上海市中南中心合作食堂的调查报告","authors":["上海市黄浦区第一饮食公司调查组"],"page_start":64,"page_end":66,"dates":[{"year":1975,"month":3}]},{"title":"同资产阶级生活作风彻底决裂","authors":["天津市汽车运输六场党委会"],"page_start":67,"page_end":71,"dates":[{"year":1975,"month":3}]},{"title":"贯彻以农业为基础、工业为主导的方针","authors":["华云"],"page_start":72,"page_end":77,"dates":[{"year":1975,"month":3}]},{"title":"坚定不移地走社会主义道路","authors":["河南新乡县七里营人民公社党委会"],"page_start":78,"page_end":81,"dates":[{"year":1975,"month":3}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/8c8a7915-75da-4b54-89eb-5837162fb60e.pdf'),
  },
  {
    entity: {
      id: 'aee1f9e8-a37b-4f7a-8a7c-bcea461eb5fc',
      name: '红旗一九七五年第二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/aee1f9e8-a37b-4f7a-8a7c-bcea461eb5fc.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"中国共产党第十届中央委员会第二次会议公报","alias":"中国共产党第十届中央委员会第二次全体会议公报","authors":[],"page_start":8,"page_end":8,"dates":[{"year":1975,"month":1,"day":17}]},{"title":"中华人民共和国全国人民代表大会公告","authors":[],"page_start":9,"page_end":17,"dates":[{"year":1975,"month":1,"day":17}]},{"title":"张春桥在第四届全国人民代表大会关于修改宪法的报告","alias":"关于修改宪法的报告","authors":["张春桥"],"page_start":18,"page_end":22,"dates":[{"year":1975,"month":1,"day":13}]},{"title":"政府工作报告","authors":["周恩来"],"page_start":23,"page_end":30,"dates":[{"year":1975,"month":1,"day":13}]},{"title":"中华人民共和国第四届全国人民代表大会第一次会议关于政府工作报告的决议","authors":[],"page_start":30,"page_end":30,"dates":[{"year":1975,"month":1,"day":17}]},{"title":"中华人民共和国第四届全国人民代表大会第一次会议新闻公报","authors":[],"page_start":31,"page_end":34,"dates":[{"year":1975,"month":1,"day":17}]},{"title":"中华人民共和国第四届全国人民代表大会第一次会议主席团和秘书长名单","authors":[],"page_start":34,"page_end":35,"dates":[{"year":1975,"month":1,"day":13}]},{"title":"中华人民共和国全国人民代表大会公告","authors":[],"page_start":36,"page_end":37,"dates":[{"year":1975,"month":1,"day":17}]},{"title":"中华人民共和国全国人民代表大会公告","authors":[],"page_start":37,"page_end":38,"dates":[{"year":1975,"month":1,"day":17}]},{"title":"认真学习无产阶级专政的理论","authors":["池恒"],"page_start":39,"page_end":44,"dates":[{"year":1975,"month":2}]},{"title":"无产阶级专政的历史任务——学习《伟大的创举》","authors":["周斯"],"page_start":45,"page_end":51,"dates":[{"year":1975,"month":2}]},{"title":"坚持无产阶级对资产阶级的专政","authors":["路阳"],"page_start":52,"page_end":58,"dates":[{"year":1975,"month":2}]},{"title":"切实执行民主集中制","authors":["向晖"],"page_start":59,"page_end":64,"dates":[{"year":1975,"month":2}]},{"title":"彻底地为人民的利益工作——学习《为人民服务》","authors":["中国共产党平谷县委员会"],"page_start":65,"page_end":68,"dates":[{"year":1975,"month":2}]},{"title":"加强社会主义教育","authors":["庄立"],"page_start":69,"page_end":74,"dates":[{"year":1975,"month":2}]},{"title":"论刘禹锡的政治诗","authors":["闻军"],"page_start":75,"page_end":84,"dates":[{"year":1975,"month":2}]},{"title":"战争问题中的唯心论和机械论——批判林彪的“六个战术原则”","authors":["柯术"],"page_start":85,"page_end":91,"dates":[{"year":1975,"month":2}]},{"title":"增强革命团结 发展大好形势","authors":["呼和浩特铁路局党委会"],"page_start":92,"page_end":95,"dates":[{"year":1975,"month":2}]},{"title":"进一步加强民族团结","authors":["阿衣木汗","沙马力汗"],"page_start":96,"page_end":98,"dates":[{"year":1975,"month":2}]},{"title":"当前资本主义世界的经济危机","authors":["靳南"],"page_start":99,"page_end":105,"dates":[{"year":1975,"month":2}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/aee1f9e8-a37b-4f7a-8a7c-bcea461eb5fc.pdf'),
  },
  {
    entity: {
      id: '6aa13c1f-4589-40e0-b7fd-13d16d8b3f1b',
      name: '红旗一九七五年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/6aa13c1f-4589-40e0-b7fd-13d16d8b3f1b.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"新年献词","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":6,"page_end":9,"dates":[{"year":1975,"month":1,"day":1}]},{"title":"为反修防修建设理论队伍","authors":["袁青"],"page_start":10,"page_end":15,"dates":[{"year":1975,"month":1}]},{"title":"认真实行干部参加劳动的制度","authors":["于冬"],"page_start":16,"page_end":19,"dates":[{"year":1975,"month":1}]},{"title":"面上的工作要先抓好三分之一","authors":["向伟"],"page_start":20,"page_end":24,"dates":[{"year":1975,"month":1}]},{"title":"要有一个全面规划","authors":["宫效闻"],"page_start":25,"page_end":26,"dates":[{"year":1975,"month":1}]},{"title":"坚持理论和实际的统一——学习《中国革命战争的战略问题》","authors":["纪平"],"page_start":27,"page_end":32,"dates":[{"year":1975,"month":1}]},{"title":"正确认识事物发展的阶段性——学习《矛盾论》的一点体会","authors":["高黎"],"page_start":33,"page_end":37,"dates":[{"year":1975,"month":1}]},{"title":"揭露“让步政策论”尊儒反法的本质","authors":["上海钟表元件厂三车间工人理论学习小组"],"page_start":38,"page_end":41,"dates":[{"year":1975,"month":1}]},{"title":"批判林彪的《论短促突击》","authors":["詹立波"],"page_start":42,"page_end":47,"dates":[{"year":1975,"month":1}]},{"title":"在批林批孔斗争中前进","authors":["北京卫戍区某部六连党支部"],"page_start":48,"page_end":52,"dates":[{"year":1975,"month":1}]},{"title":"为什么说荀子是法家？","authors":["唐晓文"],"page_start":53,"page_end":59,"dates":[{"year":1975,"month":1}]},{"title":"坚持无产阶级专政下的继续革命——开展农业学大寨运动的一些经验","authors":["赵丰年"],"page_start":60,"page_end":65,"dates":[{"year":1975,"month":1}]},{"title":"以路线为纲学大庆","authors":["田志松"],"page_start":66,"page_end":71,"dates":[{"year":1975,"month":1}]},{"title":"制订规划 乘胜前进","authors":["河北遵化县沙石峪大队党支部"],"page_start":72,"page_end":76,"dates":[{"year":1975,"month":1}]},{"title":"依靠工人群众办好企业","authors":["上海手表厂党委会"],"page_start":77,"page_end":80,"dates":[{"year":1975,"month":1}]},{"title":"党的基本路线指引我们胜利向前","authors":["辽宁营口县水源公社党委会"],"page_start":81,"page_end":85,"dates":[{"year":1975,"month":1}]},{"title":"在两条道路斗争中建设新农村","authors":["江苏邳县丁楼大队党支部"],"page_start":86,"page_end":90,"dates":[{"year":1975,"month":1}]},{"title":"社会主义道路越走越宽广","authors":["新疆英吉沙县包孜洪十五大队党支部"],"page_start":91,"page_end":94,"dates":[{"year":1975,"month":1}]},{"title":"“传心术”的妙用","authors":["赵前"],"page_start":95,"page_end":97,"dates":[{"year":1975,"month":1}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/6aa13c1f-4589-40e0-b7fd-13d16d8b3f1b.pdf'),
  },
  {
    entity: {
      id: '8b5f4978-c592-4d06-a8ab-d5863e580ec2',
      name: '学习与批判一九七三年第四期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/8b5f4978-c592-4d06-a8ab-d5863e580ec2.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"要有一个生动活泼的政治局面","authors":["方海"],"page_start":5,"page_end":8,"dates":[{"year":1973}]},{"title":"自觉接受工人群众的监督","authors":["左雨春"],"page_start":9,"page_end":12,"dates":[{"year":1973}]},{"title":"谈谈企业管理","authors":["宫效闻"],"page_start":13,"page_end":15,"dates":[{"year":1973}]},{"title":"靠咱们这号人就能管好码头——记杨树浦装卸站依靠群众改变码头面貌","authors":["王华智"],"page_start":16,"page_end":22,"dates":[{"year":1973}],"ocr":{"vsplit":0.4}},{"title":"码头上的政治经济学——杨树浦装卸站一次学习座谈会纪要","authors":[],"page_start":23,"page_end":28,"dates":[{"year":1973}],"ocr":{"vsplit":0.4}},{"title":"从“一根杠棒上的前后肩”谈起","authors":["吴文虎","郑树清"],"page_start":29,"page_end":30,"dates":[{"year":1973}]},{"title":"质量把关依靠谁？","authors":["上钢五厂一车间革命委员会"],"page_start":31,"page_end":32,"dates":[{"year":1973}]},{"title":"合理和合法","authors":["上海柴油机厂大马力车间革命委员会"],"page_start":33,"page_end":34,"dates":[{"year":1973}]},{"title":"从“早知今日，何必当初”谈起","authors":["上棉三十三厂工人评论组"],"page_start":35,"page_end":36,"dates":[{"year":1973}]},{"title":"雇佣劳动制度在苏联的复活——评苏修叛徒集团推行的“谢基诺试验”","authors":["钟志坚"],"page_start":37,"page_end":40,"dates":[{"year":1973}]},{"title":"“谢基诺试验”是怎么一回事？","authors":[],"page_start":41,"page_end":41,"dates":[{"year":1973}]},{"title":"“外来人”带来的是什么？","authors":["任犊","奚文熙"],"page_start":42,"page_end":47,"dates":[{"year":1973}]},{"title":"中国的第一代工人——江南造船厂早期工人的状况","authors":["《江南造船厂史》编写小组"],"page_start":48,"page_end":58,"dates":[{"year":1973}]},{"title":"《红楼梦》不是爱情小说——略论《红楼梦》的主题","authors":["石一歌"],"page_start":59,"page_end":63,"dates":[{"year":1973}]},{"title":"“防身的本领”及其他——评胡适《红楼梦考证》","authors":["石望江"],"page_start":64,"page_end":67,"dates":[{"year":1973}]},{"title":"焦大与“补天”","authors":["青平","薛工"],"page_start":68,"page_end":69,"dates":[{"year":1973}]},{"title":"因鲁迅之死所想到的","authors":["翟青"],"page_start":70,"page_end":71,"dates":[{"year":1973}]},{"title":"从“受压”说开去——读刘丽华同志的谈话纪要有感","authors":["任菁"],"page_start":71,"page_end":72,"dates":[{"year":1973}]},{"title":"汉代的一场儒法大论战——读《盐铁论》札记","authors":["康立"],"page_start":73,"page_end":77,"dates":[{"year":1973}]},{"title":"从汉代的儒法之争谈到王充的法家思想","authors":["郭绍虞"],"page_start":78,"page_end":83,"dates":[{"year":1973}]},{"title":"秦始皇传","authors":["范凌"],"page_start":84,"page_end":90,"dates":[{"year":1973}]},{"title":"干劲往何处使？","authors":["吴淞中学教育革命组"],"page_start":91,"page_end":92,"dates":[{"year":1973}]},{"title":"他为什么闹情绪？","authors":["刘忠村"],"page_start":92,"page_end":94,"dates":[{"year":1973}]},{"title":"当好学生的“学生”","authors":["钱杭宝"],"page_start":94,"page_end":95,"dates":[{"year":1973}]},{"title":"热烈的讨论，有力的支持——读者来信来稿综述","authors":[],"page_start":96,"page_end":98,"dates":[{"year":1973}]}],
      ocr: {"content_thresholds":[0,0.08,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/8b5f4978-c592-4d06-a8ab-d5863e580ec2.pdf'),
  },
  {
    entity: {
      id: '755b194a-3e40-4ebf-831a-2d1f656ee30e',
      name: '学习与批判一九七三年第三期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/755b194a-3e40-4ebf-831a-2d1f656ee30e.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"正确认识路线斗争的长期性——学习《矛盾论》的一点体会","authors":["方海"],"page_start":5,"page_end":8,"dates":[{"year":1973}]},{"title":"认清无产阶级的历史使命","authors":["复旦大学国际政治系"],"page_start":9,"page_end":11,"dates":[{"year":1973}]},{"title":"从发展不平衡看帝国主义的战争本质","authors":["金士靖"],"page_start":12,"page_end":16,"dates":[{"year":1973}]},{"title":"资产阶级与儒法论争","authors":["《中国近代史丛书》编写组"],"page_start":17,"page_end":25,"dates":[{"year":1973}]},{"title":"《天演论》和中国近代反孔思潮","authors":["金冲及"],"page_start":26,"page_end":31,"dates":[{"year":1973}]},{"title":"从反儒尊法到尊孔读经——试论章太炎思想的演变过程","authors":["沈濮"],"page_start":31,"page_end":36,"dates":[{"year":1973}]},{"title":"尊孔与卖国之间——从鲁迅对胡适的一场斗争谈起","authors":["秋雨"],"page_start":37,"page_end":39,"dates":[{"year":1973}]},{"title":"解决矛盾要靠正确的路线","authors":["巩学庆"],"page_start":40,"page_end":41,"dates":[{"year":1973}]},{"title":"做完善社会主义生产关系的促进派","alias":"上海部分财政专管员座谈会","authors":["许元冲","胡逸民","吴煜延","韩忠琛","钱力行"],"page_start":42,"page_end":45,"dates":[{"year":1973}],"ocr":{"vsplit":0.4}},{"title":"集中兵力打好歼灭战","authors":["上海闵行“一二五”工程指挥组"],"page_start":46,"page_end":49,"dates":[{"year":1973}]},{"title":"美国“能源危机”是怎么回事？","authors":[],"page_start":55,"page_end":56,"dates":[{"year":1973}]},{"title":"前进的步伐——短篇小说集《碧水长流》序","authors":["方泽生"],"page_start":57,"page_end":59,"dates":[{"year":1973}]},{"title":"阳光和土壤","authors":["段瑞夏","林正义"],"page_start":60,"page_end":63,"dates":[{"year":1973}]},{"title":"儿童文艺创作漫谈——彩色美术影片《小号手》、《东海小哨兵》观后","authors":["边善基","陆寿钧"],"page_start":64,"page_end":67,"dates":[{"year":1973}]},{"title":"评晴雯的反抗性格——《红楼梦》人物批判之一","authors":["任犊"],"page_start":68,"page_end":70,"dates":[{"year":1973}]},{"title":"试论雅各宾派的历史作用","authors":["上海师范大学《世界近代史》编写组"],"page_start":71,"page_end":76,"dates":[{"year":1973}]},{"title":"希特勒的声东击西政策","authors":["童澈"],"page_start":77,"page_end":79,"dates":[{"year":1973}]},{"title":"在阿登纳笔下","authors":["史坚斌"],"page_start":80,"page_end":81,"dates":[{"year":1973}]},{"title":"要取得共同的语言","authors":["吕广杰"],"page_start":82,"page_end":83,"dates":[{"year":1973}]},{"title":"虚心向群众学习","authors":["黄秀文"],"page_start":83,"page_end":85,"dates":[{"year":1973}]},{"title":"在反复实践中提高认识增长才干","authors":["周麟昌"],"page_start":85,"page_end":86,"dates":[{"year":1973}]},{"title":"结合社会调查学习马克思主义哲学","authors":["复旦大学哲学系"],"page_start":87,"page_end":91,"dates":[{"year":1973}]},{"title":"邹容传","authors":["陈今"],"page_start":92,"page_end":98,"dates":[{"year":1973}]}],
      ocr: {"content_thresholds":[0,0.08,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/755b194a-3e40-4ebf-831a-2d1f656ee30e.pdf'),
  },
  {
    entity: {
      id: '464418e7-fcf8-443c-9add-13ef394215d8',
      name: '学习与批判一九七三年第二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/464418e7-fcf8-443c-9add-13ef394215d8.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"无产阶级政党是在两条路线斗争中发展的——学习恩格斯致倍倍尔的信的一点体会","authors":["方海"],"page_start":5,"page_end":10,"dates":[{"year":1973}]},{"title":"签订布列斯特条约问题上两条路线的斗争——学习列宁关于区分两种不同妥协的理论和策略的一点体会","authors":["薛源之"],"page_start":11,"page_end":14,"dates":[{"year":1973}]},{"title":"正确认识当代帝国主义的基本特征——《帝国主义是资本主义的最高阶段》学习札记","authors":["冯曼林"],"page_start":15,"page_end":20,"dates":[{"year":1973}]},{"title":"西欧“共同市场”与美苏争霸","authors":["郗群"],"page_start":21,"page_end":25,"dates":[{"year":1973}]},{"title":"评《红楼梦》","authors":["徐缉熙"],"page_start":26,"page_end":38,"dates":[{"year":1973}]},{"title":"惊涛骇浪见英雄——谈革命现代京剧《杜鹃山》对矛盾冲突的艺术处理","authors":["方耘"],"page_start":39,"page_end":43,"dates":[{"year":1973}]},{"title":"一代新人在成长——读短篇小说《金钟长鸣》","authors":["任犊"],"page_start":44,"page_end":47,"dates":[{"year":1973}]},{"title":"塑造具有鲜明时代特色的工人阶级英雄形象——读《特别观众》想到的","authors":["常峰"],"page_start":48,"page_end":50,"dates":[{"year":1973}]},{"title":"可贵的努力——读刘大杰的《中国文学发展史》（第一册）","authors":["简茂森","娄博生","胡格非"],"page_start":51,"page_end":54,"dates":[{"year":1973}]},{"title":"读《封建论》","authors":["康立"],"page_start":55,"page_end":59,"dates":[{"year":1973}]},{"title":"孟子——复辟奴隶制的顽固派","authors":["翟平"],"page_start":60,"page_end":63,"dates":[{"year":1973}]},{"title":"论荀子的哲学思想","authors":["李定生"],"page_start":64,"page_end":68,"dates":[{"year":1973}]},{"title":"春秋战国儒、法经济思想对立的实质","authors":["景池"],"page_start":69,"page_end":73,"dates":[{"year":1973}]},{"title":"倒退是没有出路的——中国封建社会历史上几次复辟分封制的教训","authors":["黄晨敏"],"page_start":74,"page_end":76,"dates":[{"year":1973}]},{"title":"大事和小事","authors":["王恩文"],"page_start":77,"page_end":78,"dates":[{"year":1973}]},{"title":"走自力更生的道路不回头","authors":["照熙祥"],"page_start":78,"page_end":80,"dates":[{"year":1973}]},{"title":"“有教五类”的实质是什么？","authors":["江铭"],"page_start":81,"page_end":82,"dates":[{"year":1973}]},{"title":"孔子眼里的“好学生”","authors":["刘元璋","愈妙根"],"page_start":82,"page_end":83,"dates":[{"year":1973}]},{"title":"如此“循循善诱”","authors":["陈雪良"],"page_start":84,"page_end":84,"dates":[{"year":1973}]},{"title":"孔子传","authors":["刘修明"],"page_start":85,"page_end":93,"dates":[{"year":1973}]},{"title":"地中海的今天昨天和明天——读苏修电影剧本《礼节性的访问》有感","authors":["方泽生"],"page_start":94,"page_end":96,"dates":[{"year":1973}]}],
      ocr: {"content_thresholds":[0,0.08,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/464418e7-fcf8-443c-9add-13ef394215d8.pdf'),
  },
  {
    entity: {
      id: '2829cf2c-bf18-4297-8a13-7b02a45b2d6a',
      name: '学习与批判一九七三年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/2829cf2c-bf18-4297-8a13-7b02a45b2d6a.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"在中国共产党第十次全国代表大会上的报告","authors":["周恩来"],"page_start":5,"page_end":14,"dates":[{"year":1973,"month":8,"day":24}]},{"title":"关于修改党章的报告","authors":["王洪文"],"page_start":15,"page_end":19,"dates":[{"year":1973,"month":8,"day":24}]},{"title":"中国共产党章程","authors":[],"page_start":20,"page_end":23,"dates":[{"year":1973,"month":8,"day":28}]},{"title":"中国共产党第十次全国代表大会新闻公报","authors":[],"page_start":24,"page_end":28,"dates":[{"year":1973,"month":8,"day":29}]},{"title":"中国共产党第十届中央委员会第一次全体会议新闻公报","authors":[],"page_start":29,"page_end":29,"dates":[{"year":1973,"month":8,"day":30}]},{"title":"认清社会趋势，推动革命前进——学习《星星之火，可以燎原》的一点体会","authors":["方海"],"page_start":30,"page_end":34,"dates":[{"year":1973}]},{"title":"批判社会帝国主义的锐利武器——学习《帝国主义是资本主义的最高阶段》的一点体会","authors":["余来"],"page_start":35,"page_end":39,"dates":[{"year":1973}]},{"title":"巴黎公社与工人武装——学习《法兰西内战》的一点体会","authors":["宋敏彬"],"page_start":40,"page_end":45,"dates":[{"year":1973}]},{"title":"论尊儒反法","authors":["石仑"],"page_start":46,"page_end":54,"dates":[{"year":1973}]},{"title":"试论屈原的尊法反儒思想","authors":["王运熙","顾易生","李庆甲"],"page_start":55,"page_end":60,"dates":[{"year":1973}]},{"title":"从“三不足”看王安石的法家思想","authors":["史尚辉"],"page_start":61,"page_end":65,"dates":[{"year":1973}]},{"title":"苏修社会帝国主义尊儒反法资料摘译","authors":[],"page_start":66,"page_end":68,"dates":[{"year":1973}]},{"title":"论鲁迅世界观的转变","authors":["石一歌"],"page_start":69,"page_end":76,"dates":[{"year":1973}]},{"title":"全民皆兵，威力无穷——学习革命现代京剧《平原作战》的一点体会","authors":["君葳"],"page_start":77,"page_end":78,"dates":[{"year":1973}]},{"title":"种菜、卖菜与吃菜——运用毛主席哲学思想搞好蔬菜供应的体会","authors":["上海市农业局、第二商业局蔬菜小组"],"page_start":79,"page_end":83,"dates":[{"year":1973}]},{"title":"“顶牛”的根子在哪里？","authors":["杨桂鑫"],"page_start":84,"page_end":85,"dates":[{"year":1973}]},{"title":"关键在于要有阶级感情","authors":["何玉兰"],"page_start":86,"page_end":88,"dates":[{"year":1973}]},{"title":"“一把钥匙开一把锁”","authors":["韦秉衡"],"page_start":88,"page_end":88,"dates":[{"year":1973}]},{"title":"如此“当代英雄”","authors":["常峰"],"page_start":89,"page_end":94,"dates":[{"year":1973}]}],
      ocr: {"content_thresholds":[0,0.08,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/2829cf2c-bf18-4297-8a13-7b02a45b2d6a.pdf'),
  },
  {
    entity: {
      id: 'ff52da74-cd53-4377-9ad0-620ed1805f33',
      name: '红旗一九七六年第十期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/ff52da74-cd53-4377-9ad0-620ed1805f33.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"中国共产党中央委员会、中华人民共和国全国人民代表大会常务委员会、中华人民共和国国务院、中国共产党中央军事委员会告全党全军全国各族人民书","authors":[],"page_start":8,"page_end":12,"dates":[{"year":1976,"month":9,"day":9}]},{"title":"在伟大的领袖和导师毛泽东主席追悼大会上中国共产党中央委员会第一副主席，国务院总理华国锋同志致悼词","alias":"在伟大的领袖和导师毛泽东主席追悼大会上中国共产党中央委员会第一副主席、国务院总理华国锋同志致悼词","authors":["华国锋"],"page_start":13,"page_end":17,"dates":[{"year":1976,"month":9,"day":19}]},{"title":"毛泽东主席治丧委员会名单","authors":[],"page_start":18,"page_end":19,"dates":[{"year":1976,"month":9,"day":9}]},{"title":"中共中央、全国人大、国务院、中央军委公告","alias":"中国共产党中央委员会、中华人民共和国全国人民代表大会常务委员会、中华人民共和国国务院、中国共产党中央军事委员会公告","authors":[],"page_start":20,"page_end":20,"dates":[{"year":1976,"month":9,"day":9}]},{"title":"毛主席永远活在我们心中","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":21,"page_end":23,"dates":[{"year":1976,"month":9,"day":16}]},{"title":"毛泽东思想永远指引我们前进","authors":["池恒"],"page_start":24,"page_end":28,"dates":[{"year":1976,"month":10}]},{"title":"化悲痛为力量","authors":["齐永红"],"page_start":29,"page_end":32,"dates":[{"year":1976,"month":10}]},{"title":"紧握革命大批判的武器继续战斗","authors":["北京大学、清华大学大批判纽"],"page_start":33,"page_end":37,"dates":[{"year":1976,"month":10}]},{"title":"坚决维护党的团结和统一","authors":["燕枫"],"page_start":38,"page_end":41,"dates":[{"year":1976,"month":10}]},{"title":"牢记党的基本路线","authors":["中共大庆委员会"],"page_start":42,"page_end":44,"dates":[{"year":1976,"month":10}]},{"title":"高举红旗永向前","authors":["大寨大队党支部"],"page_start":45,"page_end":48,"dates":[{"year":1976,"month":10}]},{"title":"永远不忘毛主席的教导","authors":["“南京路上好八连”党支部"],"page_start":49,"page_end":51,"dates":[{"year":1976,"month":10}]},{"title":"我们永远怀念毛主席","authors":["新疆疏附县帕哈太克里公社党委会"],"page_start":52,"page_end":54,"dates":[{"year":1976,"month":10}]},{"title":"坚持以阶级斗争为纲","authors":["程越"],"page_start":55,"page_end":59,"dates":[{"year":1976,"month":10}]},{"title":"邓小平修正主义路线的极右实质","authors":["洪原"],"page_start":60,"page_end":66,"dates":[{"year":1976,"month":10}]},{"title":"邓小平为什么抹杀儒法斗争？","authors":["延亮"],"page_start":67,"page_end":70,"dates":[{"year":1976,"month":10}]},{"title":"“鞍钢宪法”永放光辉","authors":["中共鞍山钢铁公司委员会"],"page_start":71,"page_end":75,"dates":[{"year":1976,"month":10}]},{"title":"深入持久地批判修正主义","authors":["小靳庄大队党支部"],"page_start":76,"page_end":78,"dates":[{"year":1976,"month":10}]},{"title":"对唯生产力论我们就是要批","authors":["黑龙江绥化县利民大队评论组"],"page_start":79,"page_end":81,"dates":[{"year":1976,"month":10}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/ff52da74-cd53-4377-9ad0-620ed1805f33.pdf'),
  },
  {
    entity: {
      id: 'db7eff96-681e-4ccb-b11f-e060d8c51c0b',
      name: '红旗一九七六年第九期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/db7eff96-681e-4ccb-b11f-e060d8c51c0b.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"共产主义精神大放光芒","authors":["《红旗》杂志评论员"],"page_start":8,"page_end":12,"dates":[{"year":1976,"month":9}]},{"title":"胸怀凌云志 重建新唐山","authors":["中国共产党唐山市委员会"],"page_start":13,"page_end":17,"dates":[{"year":1976,"month":9}]},{"title":"党组织是抗震救灾的中流砥柱","authors":["中国共产党丰南县委员会"],"page_start":18,"page_end":21,"dates":[{"year":1976,"month":9}]},{"title":"大力开展地震的群测群防","authors":["中国共产党北京市东城区委员会"],"page_start":22,"page_end":24,"dates":[{"year":1976,"month":9}]},{"title":"从思想政治路线上深入批邓","authors":["方刚"],"page_start":25,"page_end":27,"dates":[{"year":1976,"month":9}]},{"title":"邓小平重搞“条条专政”的反动本质","authors":["纪平"],"page_start":28,"page_end":31,"dates":[{"year":1976,"month":9}]},{"title":"邓小平的修正主义路线与孔孟之道","authors":["梁效"],"page_start":32,"page_end":37,"dates":[{"year":1976,"month":9}]},{"title":"驳“生产力就是科学”","authors":["郑凯"],"page_start":38,"page_end":40,"dates":[{"year":1976,"month":9}]},{"title":"坚持同走资派作斗争","authors":["广西梧州市火柴厂工人评论组"],"page_start":41,"page_end":43,"dates":[{"year":1976,"month":9}]},{"title":"批邓促进了生产","authors":["上海汽轮机厂党委会"],"page_start":44,"page_end":46,"dates":[{"year":1976,"month":9}]},{"title":"坏事可以变成好事","authors":["燕枫"],"page_start":47,"page_end":50,"dates":[{"year":1976,"month":9}]},{"title":"儿童团也能办大事——谈谈我们开展生物防治科研活动的体会","authors":["河南民权县龙塘公社黄庄学校红小兵"],"page_start":51,"page_end":55,"dates":[{"year":1976,"month":9}]},{"title":"愈经磨练 意志愈坚","authors":["樊子山"],"page_start":56,"page_end":59,"dates":[{"year":1976,"month":9}]},{"title":"巩固和发展农村卫生革命的成果","authors":["苗雨"],"page_start":60,"page_end":63,"dates":[{"year":1976,"month":9}]},{"title":"必须勤俭节约","authors":["齐新"],"page_start":64,"page_end":66,"dates":[{"year":1976,"month":9}]},{"title":"学习鲁迅后期杂文的辩证法","authors":["冯华"],"page_start":67,"page_end":71,"dates":[{"year":1976,"month":9}]},{"title":"鲁迅的光辉形象鼓舞我们战斗——评组画《鲁迅——伟大的革命家、思想家、文学家》","authors":["毅征"],"page_start":72,"page_end":75,"dates":[{"year":1976,"month":9}]},{"title":"我国地震史上的两条路线斗争","authors":["岳定"],"page_start":76,"page_end":81,"dates":[{"year":1976,"month":9}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/db7eff96-681e-4ccb-b11f-e060d8c51c0b.pdf'),
  },
  {
    entity: {
      id: '204378d0-bbc1-47c2-b6d2-0cf47d728d58',
      name: '红旗一九七六年第八期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/204378d0-bbc1-47c2-b6d2-0cf47d728d58.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"中共中央给地震灾区人民的慰问电","authors":["中共中央"],"page_start":8,"page_end":8,"dates":[{"year":1976,"month":7,"day":28}]},{"title":"进一步发展社会主义新生事物","authors":["程越"],"page_start":11,"page_end":15,"dates":[{"year":1976,"month":8}]},{"title":"无产阶级是革命的乐观主义者","authors":["毕盛"],"page_start":16,"page_end":20,"dates":[{"year":1976,"month":8}]},{"title":"在批邓斗争中加强团结","authors":["青岩"],"page_start":21,"page_end":23,"dates":[{"year":1976,"month":8}]},{"title":"工人参加企业管理好","authors":["北京市北郊木材厂党委会"],"page_start":24,"page_end":28,"dates":[{"year":1976,"month":8}]},{"title":"集体养猪 大有可为——安徽利辛县小叶园生产队的调查","authors":["中共安徽省委、中共利辛县委联合调查组"],"page_start":29,"page_end":31,"dates":[{"year":1976,"month":8}]},{"title":"坚持继续革命逐步缩小差别——吉林永吉县阿拉底大队的调查","authors":["中共吉林省委、吉林市委、永吉县委调查组"],"page_start":32,"page_end":36,"dates":[{"year":1976,"month":8}]},{"title":"做限制资产阶级法权的促进派","authors":["王连生"],"page_start":37,"page_end":40,"dates":[{"year":1976,"month":8}]},{"title":"一个在科技界复辟资本主义的纲领——评《科学院工作汇报提纲》","authors":["中国科学院大批判组"],"page_start":41,"page_end":47,"dates":[{"year":1976,"month":8}]},{"title":"精神可以变成物质——批判邓小平反对工人参加上层建筑领域革命的谬论","authors":["大连红旗造船厂党委会"],"page_start":48,"page_end":53,"dates":[{"year":1976,"month":8}]},{"title":"篡改马克思主义的一个标本","authors":["方海"],"page_start":54,"page_end":56,"dates":[{"year":1976,"month":8}]},{"title":"邓小平为什么替“老戏”招魂?","authors":["江天"],"page_start":57,"page_end":60,"dates":[{"year":1976,"month":8}]},{"title":"永远坚持毛主席的建军路线——批判邓小平在军队建设上的修正主义谬论","authors":["沈屏"],"page_start":61,"page_end":66,"dates":[{"year":1976,"month":8}]},{"title":"在三同中密切官兵关系","authors":["中国人民解放军北京部队“济南第一团”党委会"],"page_start":67,"page_end":69,"dates":[{"year":1976,"month":8}]},{"title":"以阶级斗争为纲做好战备工作","authors":["中国人民解放军沈阳部队某部红一连党支部"],"page_start":70,"page_end":73,"dates":[{"year":1976,"month":8}]},{"title":"加强工人民兵的建设","authors":["上海沪东造船厂党委会"],"page_start":74,"page_end":77,"dates":[{"year":1976,"month":8}]},{"title":"对生命认识的两种世界观斗争","authors":["胡雨涛"],"page_start":78,"page_end":86,"dates":[{"year":1976,"month":8}]},{"title":"莫斯科版的“升官图”——评奇文《怎样成为部长》","authors":["桑娄东"],"page_start":87,"page_end":89,"dates":[{"year":1976,"month":8}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/204378d0-bbc1-47c2-b6d2-0cf47d728d58.pdf'),
  },
  {
    entity: {
      id: '102623c5-45bf-4cab-8ca6-34ff7850d732',
      name: '红旗一九七六年第七期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/102623c5-45bf-4cab-8ca6-34ff7850d732.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"在斗争中建设党","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":10,"dates":[{"year":1976,"month":7}]},{"title":"党内斗争与党的发展","authors":["池恒"],"page_start":11,"page_end":15,"dates":[{"year":1976,"month":7,"day":1}]},{"title":"决不容许用走资派的面貌改造党","authors":["路阳"],"page_start":16,"page_end":19,"dates":[{"year":1976,"month":7}]},{"title":"领导干部要自觉限制资产阶级法权","authors":["黎新"],"page_start":20,"page_end":23,"dates":[{"year":1976,"month":7}]},{"title":"深入批邓，加强党的建设——河南林县宋家庄大队的调查","authors":["中共河南省委调查组"],"page_start":24,"page_end":27,"dates":[{"year":1976,"month":7}]},{"title":"评邓小平的买办资产阶级经济思想","authors":["高路","常戈"],"page_start":28,"page_end":33,"dates":[{"year":1976,"month":7}]},{"title":"一个复辟倒退的条例——《关于加快工业发展的若干问题》批判","authors":["上海钟表元件厂工人理论小组"],"page_start":34,"page_end":38,"dates":[{"year":1976,"month":7}]},{"title":"卑劣的伎俩 险恶的用心——评邓小平关于评论《水浒》的一次谈话","authors":["田志松"],"page_start":39,"page_end":42,"dates":[{"year":1976,"month":7}]},{"title":"走资派为什么要扩大资产阶级法权？","authors":["景农"],"page_start":43,"page_end":45,"dates":[{"year":1976,"month":7}]},{"title":"在批邓斗争中加强工人理论队伍建设","authors":["施伦"],"page_start":46,"page_end":50,"dates":[{"year":1976,"month":7}]},{"title":"工人群众监督领导学好理论——广西大厂矿务局的调查","authors":["中共广西壮族自治区委员会宣传部、中共河池地区委员会宣传部联合调查组"],"page_start":51,"page_end":53,"dates":[{"year":1976,"month":7}]},{"title":"群测群防战地震","authors":["中国共产党龙陵县委员会"],"page_start":54,"page_end":58,"dates":[{"year":1976,"month":7}]},{"title":"农村商业的一支重要力量——甘肃华亭县的调查","authors":["中共甘肃省委、中共平凉地委联合调查组"],"page_start":59,"page_end":61,"dates":[{"year":1976,"month":7}]},{"title":"农村卫生革命也要学大寨","authors":["昔阳县大寨公社党委会"],"page_start":62,"page_end":64,"dates":[{"year":1976,"month":7}]},{"title":"坚持“赤脚” 永不变色","authors":["侯兰伏"],"page_start":65,"page_end":67,"dates":[{"year":1976,"month":7}]},{"title":"一切从人民的利益出发——沈阳化工厂搞好环境保护的调查","authors":["沈阳市革命委员会调查组"],"page_start":68,"page_end":70,"dates":[{"year":1976,"month":7}]},{"title":"试论我国最早的阶级分化——原始社会文物考古资料的一些分析","authors":["卫今"],"page_start":71,"page_end":78,"dates":[{"year":1976,"month":7}]},{"title":"决不和工人讲平等的新贵族——评苏修剧本《一个能干的女人的故事》","authors":["范毅平"],"page_start":79,"page_end":81,"dates":[{"year":1976,"month":7}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/102623c5-45bf-4cab-8ca6-34ff7850d732.pdf'),
  },
  {
    entity: {
      id: '6e4d3a39-2965-4267-b64e-05bd2add0ba7',
      name: '红旗一九七六年第六期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/6e4d3a39-2965-4267-b64e-05bd2add0ba7.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"文化大革命永放光芒──纪念中共中央一九六六年五月十六日《通知》十周年","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":13,"dates":[{"year":1976,"month":5,"day":16}]},{"title":"加强学习 深入批邓","authors":["程越"],"page_start":14,"page_end":17,"dates":[{"year":1976,"month":6}]},{"title":"走资派就是党内的资产阶级","authors":["方刚"],"page_start":18,"page_end":24,"dates":[{"year":1976,"month":6}]},{"title":"切不可书生气十足——学习《关于胡风反革命集团的材料》的序言和按语","authors":["潘锋"],"page_start":25,"page_end":29,"dates":[{"year":1976,"month":6}]},{"title":"邓小平是党内最大的分裂主义者","authors":["龙巍"],"page_start":30,"page_end":32,"dates":[{"year":1976,"month":6}]},{"title":"领导要向群众学习","authors":["安群"],"page_start":33,"page_end":36,"dates":[{"year":1976,"month":6}]},{"title":"领导干部要旗帜鲜明地参加战斗","authors":["延亮"],"page_start":37,"page_end":39,"dates":[{"year":1976,"month":6}]},{"title":"我们是怎样联系实际批邓的","authors":["长春市缝纫机制造厂党委会"],"page_start":40,"page_end":44,"dates":[{"year":1976,"month":6}]},{"title":"牢记文化大革命对自己的教育——驳“一概忘记”论","authors":["纪岩"],"page_start":45,"page_end":48,"dates":[{"year":1976,"month":6}]},{"title":"绝不能同资产阶级讲平等","authors":["康立"],"page_start":49,"page_end":54,"dates":[{"year":1976,"month":6}]},{"title":"文化大革命与工业的发展","authors":["向纪伟"],"page_start":55,"page_end":58,"dates":[{"year":1976,"month":6}]},{"title":"社会主义农业迅速发展的十年","authors":["赵丰年"],"page_start":59,"page_end":62,"dates":[{"year":1976,"month":6}]},{"title":"在阶级斗争中前进","authors":["中共都安瑶族自治县委员会"],"page_start":63,"page_end":67,"dates":[{"year":1976,"month":6}]},{"title":"沿着毛主席的文艺路线继续前进——学习《在延安文艺座谈会上的讲话》","authors":["燕枫"],"page_start":68,"page_end":73,"dates":[{"year":1976,"month":6}]},{"title":"群众办科研的生动实践——谈吉林陨石雨的考察","authors":["中国科学院吉林省、吉林市联合考察组"],"page_start":74,"page_end":78,"dates":[{"year":1976,"month":6}]},{"title":"学习鲁迅对旧教育的批判","authors":["史众"],"page_start":79,"page_end":84,"dates":[{"year":1976,"month":6}]},{"title":"坚定不移地走与工农相结合的道路","authors":["佟英茹"],"page_start":84,"page_end":89,"dates":[{"year":1976,"month":6}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/6e4d3a39-2965-4267-b64e-05bd2add0ba7.pdf'),
  },
  {
    entity: {
      id: '7c8d92c8-ff3c-4ef9-9190-81b4c2aced20',
      name: '红旗一九七六年第五期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/7c8d92c8-ff3c-4ef9-9190-81b4c2aced20.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"中共中央关于华国锋同志任中共中央第一副主席、国务院总理的决议","authors":[],"page_start":8,"page_end":8,"dates":[{"year":1976,"month":4,"day":7}]},{"title":"中共中央关于撤销邓小平党内外一切职务的决议","authors":[],"page_start":9,"page_end":9,"dates":[{"year":1976,"month":4,"day":7}]},{"title":"天安门广场的反革命政治事件","authors":["《人民日报》工农兵通讯员","《人民日报》记者"],"page_start":10,"page_end":12,"dates":[{"year":1976,"month":4,"day":8}]},{"title":"吴德在天安门广场的广播讲话","alias":"吴德同志在天安门广场广播讲话","authors":["吴德"],"page_start":10,"page_end":12,"dates":[{"year":1976,"month":4,"day":5}]},{"title":"吴德在天安门广场的广播讲话","alias":"吴德同志在天安门广场广播讲话","authors":["吴德"],"page_start":13,"page_end":13,"dates":[{"year":1976,"month":4,"day":5}]},{"title":"无产阶级专政的伟大胜利","authors":["池恒"],"page_start":14,"page_end":18,"dates":[{"year":1976,"month":5}]},{"title":"为巩固无产阶级专政而战斗","authors":["首都工人民兵总指挥部"],"page_start":19,"page_end":23,"dates":[{"year":1976,"month":5}]},{"title":"用革命舆论粉碎反革命舆论","authors":["梁效"],"page_start":24,"page_end":29,"dates":[{"year":1976,"month":4,"day":23}]},{"title":"邓小平是天安门广场事件的罪魁祸首","authors":["洪广思"],"page_start":30,"page_end":33,"dates":[{"year":1976,"month":4,"day":23}]},{"title":"阶级敌人是虚弱和孤立的","authors":["魏峡安"],"page_start":34,"page_end":37,"dates":[{"year":1976,"month":5}]},{"title":"邓小平全面背叛马克思主义","authors":["黎章"],"page_start":38,"page_end":47,"dates":[{"year":1976,"month":5}]},{"title":"批判工交战线的修正主义谬论","authors":["钟实"],"page_start":48,"page_end":55,"dates":[{"year":1976,"month":5}]},{"title":"邓小平在体育战线鼓吹什么？","authors":["云力"],"page_start":56,"page_end":59,"dates":[{"year":1976,"month":5}]},{"title":"攻击文化大革命就是妄图复辟——批判“运动一来往往伤害老工人和有经验的干部”的反动谬论","authors":["秦焰"],"page_start":60,"page_end":64,"dates":[{"year":1976,"month":5}]},{"title":"“记性”与“本性”","authors":["河北正定县三角村大队贫下中农评论组"],"page_start":65,"page_end":66,"dates":[{"year":1976,"month":5}]},{"title":"“相对依靠”是什么意思？","authors":["济南机车上厂工人评论组"],"page_start":67,"page_end":68,"dates":[{"year":1976,"month":5}]},{"title":"紧紧抓住阶级斗争这个纲","authors":["大寨大队党支部"],"page_start":69,"page_end":74,"dates":[{"year":1976,"month":5}]},{"title":"阶级斗争从来没有熄灭","authors":["吴全清"],"page_start":75,"page_end":78,"dates":[{"year":1976,"month":5}]},{"title":"誓做无产阶级专政的坚强柱石","authors":["北京卫戍区某部六连党支部"],"page_start":79,"page_end":82,"dates":[{"year":1976,"month":5}]},{"title":"毛泽东思想指引我们顶风前进","authors":["小靳庄大队党支部"],"page_start":83,"page_end":86,"dates":[{"year":1976,"month":5}]},{"title":"天安门广场事件说明了什么？","authors":["《人民日报》编辑部"],"page_start":87,"page_end":89,"dates":[{"year":1976,"month":4,"day":18}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/7c8d92c8-ff3c-4ef9-9190-81b4c2aced20.pdf'),
  },
  {
    entity: {
      id: 'd40052ea-4994-4533-8775-3b90613fc740',
      name: '红旗一九七六年第四期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/d40052ea-4994-4533-8775-3b90613fc740.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"反击卫生战线的右倾翻案风","authors":["苗雨"],"page_start":8,"page_end":14,"dates":[{"year":1976,"month":4}]},{"title":"一个复辟资本主义的总纲——《论全党全国各项工作的总纲》剖析","authors":["程越"],"page_start":15,"page_end":23,"dates":[{"year":1976,"month":4,"day":1}]},{"title":"批判洋奴哲学","authors":["方海"],"page_start":24,"page_end":29,"dates":[{"year":1976,"month":4}]},{"title":"修正主义的组织路线必须批判","authors":["柏杉"],"page_start":30,"page_end":34,"dates":[{"year":1976,"month":4}]},{"title":"不容抹杀社会主义和资本主义的区别——驳“白猫黑猫”论","authors":["靳志柏"],"page_start":35,"page_end":39,"dates":[{"year":1976,"month":4}]},{"title":"积极参加反击右倾翻案风的斗争","authors":["“南京路上好八连”党支部"],"page_start":40,"page_end":42,"dates":[{"year":1976,"month":4}]},{"title":"共产党员要为大多数人谋利益","authors":["岳海"],"page_start":43,"page_end":47,"dates":[{"year":1976,"month":4}]},{"title":"走资派为什么害怕评论《水浒》？","authors":["燕枫"],"page_start":48,"page_end":50,"dates":[{"year":1976,"month":4}]},{"title":"倒退是没有出路的","authors":["甘戈"],"page_start":51,"page_end":55,"dates":[{"year":1976,"month":4}]},{"title":"马克思主义与自然科学","authors":["辛风"],"page_start":56,"page_end":61,"dates":[{"year":1976,"month":4}]},{"title":"决不能走白专道路","authors":["中山大学大批判组"],"page_start":62,"page_end":65,"dates":[{"year":1976,"month":4}]},{"title":"学大寨要以阶级斗争为纲","authors":["路阳"],"page_start":66,"page_end":71,"dates":[{"year":1976,"month":4}]},{"title":"独立自主、自力更生的战歌——赞近年来上映的一批科教影片","authors":["洪松"],"page_start":72,"page_end":74,"dates":[{"year":1976,"month":4}]},{"title":"文艺革命对我的教育和培养","authors":["杨春霞"],"page_start":75,"page_end":78,"dates":[{"year":1976,"month":4}]},{"title":"“天有可测风云”","authors":["邱向群"],"page_start":79,"page_end":87,"dates":[{"year":1976,"month":4}]},{"title":"翻案不得人心","authors":["《人民日报》编辑部"],"page_start":88,"page_end":89,"dates":[{"year":1976,"month":3,"day":10}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/d40052ea-4994-4533-8775-3b90613fc740.pdf'),
  },
  {
    entity: {
      id: '5382c50c-a47e-4f7f-bb62-396b1033f322',
      name: '红旗一九七六年第三期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/5382c50c-a47e-4f7f-bb62-396b1033f322.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"从资产阶级民主派到走资派","authors":["池恒"],"page_start":8,"page_end":14,"dates":[{"year":1,"month":3}]},{"title":"坚持文艺革命，反击右倾翻案风","authors":["初澜"],"page_start":15,"page_end":19,"dates":[{"year":1965,"month":3}]},{"title":"右倾翻案风与资产阶级法权","authors":["桂志"],"page_start":20,"page_end":25,"dates":[{"year":1965,"month":3}]},{"title":"不许篡改革命接班人的五条标准","authors":["赵源"],"page_start":26,"page_end":30,"dates":[{"year":1965,"month":3}]},{"title":"继续革命 永不停步","authors":["罗定枫"],"page_start":31,"page_end":34,"dates":[{"year":1965,"month":3}]},{"title":"孔丘的亡灵与教育界的奇谈怪论","authors":["冯天瑜"],"page_start":35,"page_end":41,"dates":[{"year":1965,"month":3}]},{"title":"反修必须批孔","authors":["高路"],"page_start":42,"page_end":46,"dates":[{"year":1965,"month":3}]},{"title":"学一点中国哲学史","authors":["翟青"],"page_start":47,"page_end":51,"dates":[{"year":1965,"month":3}]},{"title":"加强对教育革命大辩论的领导","authors":["洪广思"],"page_start":52,"page_end":55,"dates":[{"year":1965,"month":3}]},{"title":"知识分子决不走回头路——批判反对知识分子思想改造的奇谈怪论","authors":["安徽师范大学大批判组"],"page_start":56,"page_end":59,"dates":[{"year":1965,"month":3}]},{"title":"驳“白专对中华人民共和国有好处”论","authors":["上海师范大学地理系大批判组"],"page_start":60,"page_end":62,"dates":[{"year":1965,"month":3}]},{"title":"开门办学不容否定","authors":["西安医学院大批判组"],"page_start":63,"page_end":66,"dates":[{"year":1965,"month":3}]},{"title":"企业管理的两条路线斗争","authors":["宫效闻"],"page_start":67,"page_end":73,"dates":[{"year":1965,"month":3}]},{"title":"学大寨要抓住阶级斗争这个纲——山西昔阳县东沟大队的调查报告","authors":["中国共产党山西省委员会、中国共产党昔阳县委员会调查组"],"page_start":74,"page_end":76,"dates":[{"year":1965,"month":3}]},{"title":"执行抓革命、促生产的方针——首都钢铁公司石钢炼钢厂的调查报告","authors":["中共北京市委宣传组调查组"],"page_start":77,"page_end":80,"dates":[{"year":1965,"month":3}]},{"title":"无产阶级文化大革命的继续和深入——喜看清华大学教育革命大辩论破浪前进","authors":["《人民日报》记者"],"page_start":81,"page_end":85,"dates":[{"year":1965,"month":2,"day":6}]},{"title":"要害是复辟资本主义——北京大学师生员工批判“三项指示为纲”的修正主义纲领","authors":["《人民日报》记者"],"page_start":86,"page_end":89,"dates":[{"year":1965,"month":2,"day":17}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/5382c50c-a47e-4f7f-bb62-396b1033f322.pdf'),
  },
  {
    entity: {
      id: '5a912e06-accb-4194-bc40-bd0948860cc7',
      name: '红旗一九七六年第二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/5a912e06-accb-4194-bc40-bd0948860cc7.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"回击科技界的右倾翻案风","authors":["北京大学","清华大学大批判组"],"page_start":6,"page_end":14,"dates":[{"year":1,"month":2}]},{"title":"在斗争中学习无产阶级专政理论","authors":["程越"],"page_start":15,"page_end":19,"dates":[{"year":1965,"month":2}]},{"title":"折中主义就是修正主义","authors":["纪平"],"page_start":20,"page_end":23,"dates":[{"year":1965,"month":2}]},{"title":"孔孟之道与投降主义——从《宣和遗事》看《水浒》的创作思想","authors":["史众"],"page_start":24,"page_end":29,"dates":[{"year":1965,"month":2}]},{"title":"不许为修正主义教育路线翻案","authors":["辽宁大学大批判组"],"page_start":30,"page_end":34,"dates":[{"year":1965,"month":2}]},{"title":"“反对形而上学”是假 否定教育革命是真","authors":["武汉大学大批判组"],"page_start":35,"page_end":39,"dates":[{"year":1965,"month":2}]},{"title":"深入批判“学而优则仕”的谬论","authors":["广西师范学院中文系理论组"],"page_start":40,"page_end":42,"dates":[{"year":1965,"month":2}]},{"title":"开展教育革命大辩论的一些体会","authors":["广西南宁市第二中学觉支部"],"page_start":43,"page_end":46,"dates":[{"year":1965,"month":2}]},{"title":"历史是人民群众创造的","authors":["江虹"],"page_start":47,"page_end":51,"dates":[{"year":1965,"month":2}]},{"title":"开门办科研好","authors":["中国科学院大连化学物理研究所党委会"],"page_start":52,"page_end":56,"dates":[{"year":1965,"month":2}]},{"title":"积极开展群众性的农业科学实验","authors":["中国共产党华容县委员会"],"page_start":57,"page_end":61,"dates":[{"year":1965,"month":2}]},{"title":"全心全意地依靠工人阶级","authors":["兰州化学工业公司党委会"],"page_start":62,"page_end":66,"dates":[{"year":1965,"month":2}]},{"title":"让教育革命的钟声响彻四方——略论彩色故事片《决裂》的主题思想","authors":["方锷"],"page_start":67,"page_end":73,"dates":[{"year":1965,"month":2}]},{"title":"奔腾向前的社会主义洪流——评长篇小说《千重浪》","authors":["马联玉"],"page_start":74,"page_end":78,"dates":[{"year":1965,"month":2}]},{"title":"大拖拉机和小面包","authors":["景池"],"page_start":79,"page_end":81,"dates":[{"year":1965,"month":2}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/5a912e06-accb-4194-bc40-bd0948860cc7.pdf'),
  },
  {
    entity: {
      id: 'bfe38dad-00f4-4779-9991-fa6a70bf11f1',
      name: '红旗一九七六年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/bfe38dad-00f4-4779-9991-fa6a70bf11f1.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"水调歌头·重上井冈山","authors":["毛泽东"],"page_start":6,"page_end":6,"ocr":{"standard_paragraph_merge_strategy_threshold":0.45,"differential_paragraph_merge_strategy_threshold":0,"content_thresholds":[0,0.16,0,0.2]},"dates":[{"year":1965,"month":5}]},{"title":"念奴娇·鸟儿问答","authors":["毛泽东"],"page_start":6,"page_end":6,"ocr":{"standard_paragraph_merge_strategy_threshold":0.45,"differential_paragraph_merge_strategy_threshold":0,"content_thresholds":[0,0.16,0,0.2]},"dates":[{"year":1965}]},{"title":"世上无难事只要肯登攀（一九七六年元旦社论）","alias":"世上无难事 只要肯登攀","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":11,"dates":[{"year":1976,"month":1,"day":1}]},{"title":"抓紧阶级斗争这个纲","authors":["池恒"],"page_start":12,"page_end":17,"dates":[{"year":1976,"month":1,"day":1}]},{"title":"坚持党的基本路线——学习《关于正确处理人民内部矛盾的问题》","authors":["程越"],"page_start":18,"page_end":24,"dates":[{"year":1976,"month":1}]},{"title":"注意老、中、青结合","authors":["潘锋"],"page_start":25,"page_end":28,"dates":[{"year":1976,"month":1}]},{"title":"评论《水浒》的现实意义","authors":["尹铭"],"page_start":29,"page_end":31,"dates":[{"year":1976,"month":1}]},{"title":"无产阶级专政与文化大革命","authors":["钟实"],"page_start":32,"page_end":36,"dates":[{"year":1976,"month":1}]},{"title":"正确对待无产阶级文化大革命","authors":["高明山"],"page_start":37,"page_end":40,"dates":[{"year":1976,"month":1}]},{"title":"大是大非问题一定要辩论清楚","authors":["中国共产党朝阳农学院委员会"],"page_start":41,"page_end":46,"dates":[{"year":1976,"month":1}]},{"title":"教育革命“拖四个现代化的后腿”吗？","authors":["复旦大学大批判组"],"page_start":47,"page_end":51,"dates":[{"year":1976,"month":1}]},{"title":"驳“今不如昔”论","authors":["余凡"],"page_start":52,"page_end":55,"dates":[{"year":1976,"month":1}]},{"title":"教育革命好得很","authors":["王春兰"],"page_start":56,"page_end":59,"dates":[{"year":1976,"month":1}]},{"title":"喜看工农兵学员茁壮成长","authors":["段学复","黄昆"],"page_start":60,"page_end":64,"dates":[{"year":1976,"month":1}]},{"title":"我们是怎样开展教育革命大辩论的","authors":["清华大学建筑工程系党委会"],"page_start":65,"page_end":68,"dates":[{"year":1976,"month":1}]},{"title":"鼓舞我们战斗的宏伟诗篇——学习毛主席词二首","authors":["袁水拍"],"page_start":69,"page_end":73,"dates":[{"year":1976,"month":1}]},{"title":"深入进行农村两条道路的斗争——纪念《中国农村的社会主义高潮》序言和按语发表二十周年","authors":["向晖"],"page_start":74,"page_end":79,"dates":[{"year":1976,"month":1}]},{"title":"群众是真正的英雄——沙市工业为什么文化大革命以来增长三倍？","authors":["湖北省革命委员会调查组"],"page_start":80,"page_end":83,"dates":[{"year":1976,"month":1}]},{"title":"在继续革命的道路上胜利前进","authors":["山东莒南县厉家赛大队党总支"],"page_start":84,"page_end":87,"dates":[{"year":1976,"month":1}]},{"title":"抓路线教育 促战备工作","authors":["中国人民解放军南京部队某部“硬骨头六连”党支部"],"page_start":88,"page_end":91,"dates":[{"year":1976,"month":1}]},{"title":"一部歌颂文化大革命的好影片——评《春苗》","authors":["初澜"],"page_start":92,"page_end":97,"dates":[{"year":1976,"month":1}]}],
      ocr: {"content_thresholds":[0,0.16,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/bfe38dad-00f4-4779-9991-fa6a70bf11f1.pdf'),
  },
  {
    entity: {
      id: '866fb14d-fa18-4d5d-9bdd-92c3abce6c2a',
      name: '毛泽东选集第四卷（人民出版社1991年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/866fb14d-fa18-4d5d-9bdd-92c3abce6c2a.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"抗日战争胜利后的时局和我们的方针","authors":["毛泽东"],"page_start":12,"page_end":25,"dates":[{"year":1945,"month":8,"day":13}]},{"title":"蒋介石在挑动内战","authors":["毛泽东"],"page_start":26,"page_end":29,"dates":[{"year":1945,"month":8,"day":13}]},{"title":"第十八集团军总司令给蒋介石的两个电报","authors":["毛泽东"],"page_start":30,"page_end":36,"dates":[{"year":1945,"month":8}]},{"title":"评蒋介石发言人谈话","authors":["毛泽东"],"page_start":37,"page_end":40,"dates":[{"year":1945,"month":8,"day":16}]},{"title":"中共中央关于同国民党进行和平谈判的通知","authors":["毛泽东"],"page_start":41,"page_end":44,"dates":[{"year":1945,"month":8,"day":26}]},{"title":"关于重庆谈判","authors":["毛泽东"],"page_start":45,"page_end":55,"dates":[{"year":1945,"month":10,"day":17}]},{"title":"国民党进攻的真相","authors":["毛泽东"],"page_start":56,"page_end":60,"dates":[{"year":1945,"month":11,"day":5}]},{"title":"减租和生产是保卫解放区的两件大事","authors":["毛泽东"],"page_start":61,"page_end":62,"dates":[{"year":1945,"month":11,"day":7}]},{"title":"一九四六年解放区工作的方针","authors":["毛泽东"],"page_start":63,"page_end":67,"dates":[{"year":1945,"month":12,"day":15}]},{"title":"建立巩固的东北根据地","authors":["毛泽东"],"page_start":68,"page_end":72,"dates":[{"year":1945,"month":12,"day":28}]},{"title":"以自卫战争粉碎蒋介石的进攻","authors":["毛泽东"],"page_start":75,"page_end":79,"dates":[{"year":1946,"month":7,"day":20}]},{"title":"和美国记者安娜·路易斯·斯特朗的谈话","authors":["毛泽东"],"page_start":80,"page_end":85,"dates":[{"year":1946,"month":8,"day":6}]},{"title":"集中优势兵力，各个歼灭敌人","authors":["毛泽东"],"page_start":86,"page_end":90,"dates":[{"year":1946,"month":9,"day":16}]},{"title":"美国“调解”真相和中国内战前途——和美国记者斯蒂尔的谈话","authors":["毛泽东"],"page_start":91,"page_end":93,"dates":[{"year":1946,"month":9,"day":29}]},{"title":"三个月总结","authors":["毛泽东"],"page_start":94,"page_end":99,"dates":[{"year":1946,"month":10,"day":1}]},{"title":"迎接中国革命的新高潮","authors":["毛泽东"],"page_start":100,"page_end":107,"dates":[{"year":1947,"month":2,"day":1}]},{"title":"中共中央关于暂时放弃延安和保卫陕甘宁边区的两个文件","authors":["毛泽东"],"page_start":108,"page_end":110,"dates":[{"year":1946,"month":11},{"year":1947,"month":4}]},{"title":"关于西北战场的作战方针","authors":["毛泽东"],"page_start":111,"page_end":112,"dates":[{"year":1947,"month":4,"day":15}]},{"title":"蒋介石政府已处在全民的包围中","authors":["毛泽东"],"page_start":113,"page_end":117,"dates":[{"year":1947,"month":5,"day":30}]},{"title":"解放战争第二年的战略方针","authors":["毛泽东"],"page_start":118,"page_end":123,"dates":[{"year":1947,"month":9,"day":1}]},{"title":"中国人民解放军宣言","authors":["毛泽东"],"page_start":124,"page_end":129,"dates":[{"year":1947,"month":10,"day":10}]},{"title":"中国人民解放军总部关于重行颁布三大纪律八项注意的训令","authors":["毛泽东"],"page_start":130,"page_end":131,"dates":[{"year":1947,"month":10,"day":10}]},{"title":"目前形势和我们的任务","authors":["毛泽东"],"page_start":132,"page_end":155,"dates":[{"year":1947,"month":12,"day":25}]},{"title":"关于目前党的政策中的几个重要问题","authors":["毛泽东"],"page_start":156,"page_end":163,"dates":[{"year":1948,"month":1,"day":18}]},{"title":"军队内部的民主运动","authors":["毛泽东"],"page_start":164,"page_end":165,"dates":[{"year":1948,"month":1,"day":30}]},{"title":"在不同地区实施土地法的不同策略","authors":["毛泽东"],"page_start":166,"page_end":168,"dates":[{"year":1948,"month":2,"day":3}]},{"title":"纠正土地改革宣传中的“左”倾错误","authors":["毛泽东"],"page_start":169,"page_end":171,"dates":[{"year":1948,"month":2,"day":11}]},{"title":"新解放区土地改革要点","authors":["毛泽东"],"page_start":172,"page_end":173,"dates":[{"year":1948,"month":2,"day":15}]},{"title":"关于工商业政策","authors":["毛泽东"],"page_start":174,"page_end":175,"dates":[{"year":1948,"month":2,"day":27}]},{"title":"关于民族资产阶级和开明绅士问题","authors":["毛泽东"],"page_start":176,"page_end":179,"dates":[{"year":1948,"month":3,"day":1}]},{"title":"评西北大捷兼论解放军的新式整军运动","authors":["毛泽东"],"page_start":180,"page_end":185,"dates":[{"year":1948,"month":3,"day":7}]},{"title":"关于情况的通报","authors":["毛泽东"],"page_start":186,"page_end":193,"dates":[{"year":1948,"month":3,"day":20}]},{"title":"在晋绥干部会议上的讲话","authors":["毛泽东"],"page_start":194,"page_end":206,"dates":[{"year":1948,"month":4,"day":1}]},{"title":"对晋绥日报编辑人员的谈话","authors":["毛泽东"],"page_start":207,"page_end":211,"dates":[{"year":1948,"month":4,"day":2}]},{"title":"再克洛阳后给洛阳前线指挥部的电报","authors":["毛泽东"],"page_start":212,"page_end":214,"dates":[{"year":1948,"month":4,"day":8}]},{"title":"新解放区农村工作的策略问题","authors":["毛泽东"],"page_start":215,"page_end":216,"dates":[{"year":1948,"month":5,"day":24}]},{"title":"一九四八年的土地改革工作和整党工作","authors":["毛泽东"],"page_start":217,"page_end":222,"dates":[{"year":1948,"month":5,"day":25}]},{"title":"关于辽沈战役的作战方针","authors":["毛泽东"],"page_start":223,"page_end":227,"dates":[{"year":1948,"month":9},{"year":1948,"month":10}]},{"title":"关于健全党委制","authors":["毛泽东"],"page_start":229,"page_end":230,"dates":[{"year":1948,"month":9,"day":20}]},{"title":"中共中央关于九月会议的通知","authors":["毛泽东"],"page_start":231,"page_end":239,"dates":[{"year":1948,"month":10,"day":10}]},{"title":"关于淮海战役的作战方针","authors":["毛泽东"],"page_start":240,"page_end":244,"dates":[{"year":1948,"month":10,"day":11}]},{"title":"全世界革命力量团结起来，反对帝国主义的侵略","authors":["毛泽东"],"page_start":245,"page_end":248,"dates":[{"year":1948,"month":11}]},{"title":"中国军事形势的重大变化","authors":["毛泽东"],"page_start":249,"page_end":251,"dates":[{"year":1948,"month":11,"day":14}]},{"title":"关于平津战役的作战方针","authors":["毛泽东"],"page_start":252,"page_end":256,"dates":[{"year":1948,"month":12,"day":11}]},{"title":"敦促杜津明等投降书","authors":["毛泽东"],"page_start":258,"page_end":260,"dates":[{"year":1948,"month":12,"day":17}]},{"title":"将革命进行到底","authors":["毛泽东"],"page_start":261,"page_end":269,"dates":[{"year":1948,"month":12,"day":30}]},{"title":"评战犯求和","authors":["毛泽东"],"page_start":270,"page_end":274,"dates":[{"year":1949,"month":1,"day":4}]},{"title":"中共中央毛泽东主席关于时局的声明","authors":["毛泽东"],"page_start":275,"page_end":279,"dates":[{"year":1949,"month":1,"day":14}]},{"title":"中共发言人评南京行政院的决议","authors":["毛泽东"],"page_start":280,"page_end":281,"dates":[{"year":1949,"month":1,"day":21}]},{"title":"中共发言人关于命令国民党反动政府重新逮捕前日本侵华军总司令冈村宁次和逮捕国民党内战罪犯的谈话","authors":["毛泽东"],"page_start":282,"page_end":288,"dates":[{"year":1949,"month":1,"day":28}]},{"title":"中共发言人关于和平条件必须包括惩办日本战犯和国民党战犯的声明","authors":["毛泽东"],"page_start":289,"page_end":293,"dates":[{"year":1949,"month":2,"day":5}]},{"title":"把军队变为工作队","authors":["毛泽东"],"page_start":294,"page_end":296,"dates":[{"year":1949,"month":2,"day":8}]},{"title":"国民党反动派由“呼吁和平”变为呼吁战争","authors":["毛泽东"],"page_start":302,"page_end":304,"dates":[{"year":1949,"month":2,"day":16}]},{"title":"评国民党对战争责任问题的几种答案","authors":["毛泽东"],"page_start":305,"page_end":312,"dates":[{"year":1949,"month":2,"day":18}]},{"title":"在中国共产党第七届中央委员会第二次全体会议上的报告","authors":["毛泽东"],"page_start":313,"page_end":328,"dates":[{"year":1949,"month":3,"day":5}]},{"title":"党委会的工作方法","authors":["毛泽东"],"page_start":329,"page_end":333,"dates":[{"year":1949,"month":3,"day":13}]},{"title":"南京政府向何处去？","authors":["毛泽东"],"page_start":334,"page_end":337,"dates":[{"year":1949,"month":4,"day":4}]},{"title":"向全国进军的命令","authors":["毛泽东"],"page_start":338,"page_end":345,"dates":[{"year":1949,"month":4,"day":21}]},{"title":"中国人民解放军布告","authors":["毛泽东"],"page_start":346,"page_end":348,"dates":[{"year":1949,"month":4,"day":25}]},{"title":"中国人民解放军总部发言人为英国军舰暴行发表的声明","authors":["毛泽东"],"page_start":349,"page_end":351,"dates":[{"year":1949,"month":4,"day":30}]},{"title":"在新政治协商会议筹备会上的讲话","authors":["毛泽东"],"page_start":352,"page_end":356,"dates":[{"year":1949,"month":6,"day":15}]},{"title":"论人民民主专政纪念中国共产党二十八周年","alias":"论人民民主专政 纪念中国共产党二十八周年","authors":["毛泽东"],"page_start":357,"page_end":371,"dates":[{"year":1949,"month":6,"day":30}]},{"title":"丢掉幻想，准备斗争","authors":["毛泽东"],"page_start":372,"page_end":379,"dates":[{"year":1949,"month":8,"day":14}]},{"title":"别了，司徒雷登","authors":["毛泽东"],"page_start":380,"page_end":387,"dates":[{"year":1949,"month":8,"day":18}]},{"title":"为什么要讨论白皮书？","authors":["毛泽东"],"page_start":388,"page_end":393,"dates":[{"year":1949,"month":8,"day":28}]},{"title":"“友谊”，还是侵略？","authors":["毛泽东"],"page_start":394,"page_end":397,"dates":[{"year":1949,"month":8,"day":30}]},{"title":"唯心历史观的破产","authors":["毛泽东"],"page_start":398,"page_end":406,"dates":[{"year":1949,"month":9,"day":16}]}],
      ocr: {"content_thresholds":[0.14,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/866fb14d-fa18-4d5d-9bdd-92c3abce6c2a.pdf'),
  },
  {
    entity: {
      id: '79da64b8-3433-4da6-9e03-61863d278909',
      name: '毛泽东选集第三卷（人民出版社1991年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/79da64b8-3433-4da6-9e03-61863d278909.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"《农村调查》的序言和跋","authors":["毛泽东"],"page_start":7,"page_end":12,"dates":[{"year":1941,"month":3},{"year":1941,"month":4}]},{"title":"改造我们的学习","authors":["毛泽东"],"page_start":13,"page_end":21,"dates":[{"year":1941,"month":5,"day":19}]},{"title":"揭破远东慕尼黑的阴谋","authors":["毛泽东"],"page_start":22,"page_end":23,"dates":[{"year":1941,"month":5,"day":25}]},{"title":"关于反法西斯的国际统一战线","authors":["毛泽东"],"page_start":24,"page_end":24,"dates":[{"year":1941,"month":6,"day":23}]},{"title":"在陕甘宁边区参议会的演说","authors":["毛泽东"],"page_start":25,"page_end":28,"dates":[{"year":1941,"month":11,"day":6}]},{"title":"整顿党的作风","authors":["毛泽东"],"page_start":29,"page_end":47,"dates":[{"year":1942,"month":2,"day":1}]},{"title":"反对党八股","authors":["毛泽东"],"page_start":48,"page_end":64,"dates":[{"year":1942,"month":2,"day":8}]},{"title":"在延安文艺座谈会上的讲话","authors":["毛泽东"],"page_start":65,"page_end":97,"dates":[{"year":1942,"month":5}]},{"title":"一个极其重要的政策","authors":["毛泽东"],"page_start":98,"page_end":101,"dates":[{"year":1942,"month":9,"day":7}]},{"title":"第二次世界大战的转折点","authors":["毛泽东"],"page_start":102,"page_end":107,"dates":[{"year":1942,"month":10,"day":12}]},{"title":"祝十月革命二十五周年","authors":["毛泽东"],"page_start":108,"page_end":108,"dates":[{"year":1942,"month":11,"day":6}]},{"title":"抗日时期的经济问题和财政问题","authors":["毛泽东"],"page_start":109,"page_end":114,"dates":[{"year":1942,"month":12}]},{"title":"关于领导方法的若干问题","authors":["毛泽东"],"page_start":115,"page_end":120,"dates":[{"year":1943,"month":6,"day":1}]},{"title":"质问国民党","authors":["毛泽东"],"page_start":121,"page_end":127,"dates":[{"year":1943,"month":7,"day":12}]},{"title":"开展根据地的减租、生产和拥政爱民运动","authors":["毛泽东"],"page_start":128,"page_end":131,"dates":[{"year":1943,"month":10,"day":1}]},{"title":"评国民党十一中全会和三届二次国民参政会","authors":["毛泽东"],"page_start":132,"page_end":145,"dates":[{"year":1943,"month":10,"day":5}]},{"title":"组织起来","authors":["毛泽东"],"page_start":146,"page_end":154,"dates":[{"year":1943,"month":11,"day":29}]},{"title":"学习和时局","authors":["毛泽东"],"page_start":155,"page_end":169,"dates":[{"year":1944,"month":4,"day":12}]},{"title":"附录：关于若干历史问题的决议","authors":["中共中央"],"page_start":170,"page_end":221,"dates":[{"year":1945,"month":2,"day":20}]},{"title":"为人民服务","authors":["毛泽东"],"page_start":222,"page_end":224,"dates":[{"year":1944,"month":9,"day":8}]},{"title":"评蒋介石在双十节的演说","authors":["毛泽东"],"page_start":225,"page_end":228,"dates":[{"year":1944,"month":10,"day":11}]},{"title":"文化工作中的统一战线","authors":["毛泽东"],"page_start":229,"page_end":231,"dates":[{"year":1944,"month":10,"day":30}]},{"title":"必须学会做经济工作","authors":["毛泽东"],"page_start":232,"page_end":238,"dates":[{"year":1945,"month":1,"day":10}]},{"title":"游击区也能够进行生产","authors":["毛泽东"],"page_start":239,"page_end":242,"dates":[{"year":1945,"month":1,"day":31}]},{"title":"两个中国之命运","authors":["毛泽东"],"page_start":243,"page_end":246,"dates":[{"year":1945,"month":4,"day":23}]},{"title":"论联合政府","authors":["毛泽东"],"page_start":247,"page_end":318,"dates":[{"year":1945,"month":4,"day":24}]},{"title":"愚公移山","authors":["毛泽东"],"page_start":319,"page_end":322,"dates":[{"year":1945,"month":6,"day":11}]},{"title":"论军队生产自给，兼论整风和生产两大运动的重要性","authors":["毛泽东"],"page_start":323,"page_end":327,"dates":[{"year":1945,"month":4,"day":27}]},{"title":"赫尔利和蒋介石的双簧已经破产","authors":["毛泽东"],"page_start":328,"page_end":331,"dates":[{"year":1945,"month":7,"day":10}]},{"title":"评赫尔利政策的危险","authors":["毛泽东"],"page_start":332,"page_end":334,"dates":[{"year":1945,"month":7,"day":12}]},{"title":"给福斯特同志的电报","authors":["毛泽东"],"page_start":335,"page_end":336,"dates":[{"year":1945,"month":7,"day":29}]},{"title":"对日寇的最后一战","authors":["毛泽东"],"page_start":337,"page_end":338,"dates":[{"year":1945,"month":8,"day":9}]}],
      ocr: {"content_thresholds":[0.14,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/79da64b8-3433-4da6-9e03-61863d278909.pdf'),
  },
  {
    entity: {
      id: 'cec31371-d421-4324-9dcd-6605e48283ed',
      name: '毛泽东选集第二卷（人民出版社1991年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/cec31371-d421-4324-9dcd-6605e48283ed.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"反对日本进攻的方针、办法和前途","authors":["毛泽东"],"page_start":11,"page_end":19,"dates":[{"year":1937,"month":7,"day":23}]},{"title":"为动员一切力量争取抗战胜利而斗争","authors":["毛泽东"],"page_start":20,"page_end":26,"dates":[{"year":1937,"month":8,"day":25}]},{"title":"反对自由主义","authors":["毛泽东"],"page_start":27,"page_end":29,"dates":[{"year":1937,"month":9,"day":7}]},{"title":"国共合作成立后的迫切任务","authors":["毛泽东"],"page_start":30,"page_end":40,"dates":[{"year":1937,"month":9,"day":29}]},{"title":"和英国记者贝特兰的谈话","authors":["毛泽东"],"page_start":41,"page_end":54,"dates":[{"year":1937,"month":10,"day":25}]},{"title":"上海太原失陷以后抗日战争的形势和任务","authors":["毛泽东"],"page_start":55,"page_end":68,"dates":[{"year":1937,"month":11,"day":12}]},{"title":"陕甘宁边区政府、第八路军后方留守处布告","authors":["毛泽东"],"page_start":69,"page_end":71,"dates":[{"year":1938,"month":5,"day":15}]},{"title":"抗日游击战争的战略问题","authors":["毛泽东"],"page_start":72,"page_end":106,"dates":[{"year":1938,"month":5}]},{"title":"论持久战","authors":["毛泽东"],"page_start":107,"page_end":186,"dates":[{"year":1938,"month":5}]},{"title":"中国共产党在民族战争中的地位","authors":["毛泽东"],"page_start":187,"page_end":204,"dates":[{"year":1938,"month":10,"day":14}]},{"title":"统一战线中的独立自主问题","authors":["毛泽东"],"page_start":205,"page_end":208,"dates":[{"year":1938,"month":11,"day":5}]},{"title":"五四运动","authors":["毛泽东"],"page_start":226,"page_end":228,"dates":[{"year":1939,"month":5,"day":1}]},{"title":"青年运动的方向","authors":["毛泽东"],"page_start":229,"page_end":237,"dates":[{"year":1939,"month":5,"day":4}]},{"title":"反对投降活动","authors":["毛泽东"],"page_start":238,"page_end":242,"dates":[{"year":1939,"month":6,"day":30}]},{"title":"必须制裁反动派","authors":["毛泽东"],"page_start":243,"page_end":247,"dates":[{"year":1939,"month":8,"day":1}]},{"title":"关于国际新形势对新华日报记者的谈话","authors":["毛泽东"],"page_start":248,"page_end":254,"dates":[{"year":1939,"month":9,"day":1}]},{"title":"和中央社、扫荡报、新民报三记者的谈话","authors":["毛泽东"],"page_start":255,"page_end":260,"dates":[{"year":1939,"month":9,"day":16}]},{"title":"苏联利益和人类利益的一致","authors":["毛泽东"],"page_start":261,"page_end":269,"dates":[{"year":1939,"month":9,"day":28}]},{"title":"《共产党人》发刊词","authors":["毛泽东"],"page_start":270,"page_end":282,"dates":[{"year":1939,"month":10,"day":4}]},{"title":"目前形势和党的任务","authors":["毛泽东"],"page_start":283,"page_end":285,"dates":[{"year":1939,"month":10,"day":10}]},{"title":"大量吸收知识分子","authors":["毛泽东"],"page_start":286,"page_end":288,"dates":[{"year":1939,"month":12,"day":1}]},{"title":"中国革命和中国共产党","authors":["毛泽东"],"page_start":289,"page_end":324,"dates":[{"year":1939,"month":12}]},{"title":"斯大林是中国人民的朋友","authors":["毛泽东"],"page_start":325,"page_end":326,"dates":[{"year":1939,"month":12,"day":20}]},{"title":"纪念白求恩","authors":["毛泽东"],"page_start":327,"page_end":329,"dates":[{"year":1939,"month":12,"day":21}]},{"title":"新民主主义论","authors":["毛泽东"],"page_start":330,"page_end":379,"dates":[{"year":1940,"month":1}]},{"title":"克服投降危险，力争时局好转","authors":["毛泽东"],"page_start":380,"page_end":382,"dates":[{"year":1940,"month":1,"day":28}]},{"title":"团结一切抗日力量，反对反共顽固派","authors":["毛泽东"],"page_start":383,"page_end":388,"dates":[{"year":1940,"month":2,"day":1}]},{"title":"向国民党的十点要求","authors":["毛泽东"],"page_start":389,"page_end":394,"dates":[{"year":1940,"month":2,"day":1}]},{"title":"《中国工人》发刊词","authors":["毛泽东"],"page_start":395,"page_end":396,"dates":[{"year":1940,"month":2,"day":7}]},{"title":"必须强调团结和进步","authors":["毛泽东"],"page_start":397,"page_end":398,"dates":[{"year":1940,"month":2,"day":7}]},{"title":"新民主主义的宪政","authors":["毛泽东"],"page_start":399,"page_end":408,"dates":[{"year":1940,"month":2,"day":20}]},{"title":"抗日根据地的政权问题","authors":["毛泽东"],"page_start":409,"page_end":411,"dates":[{"year":1940,"month":3,"day":6}]},{"title":"目前抗日统一战线中的策略问题","authors":["毛泽东"],"page_start":412,"page_end":420,"dates":[{"year":1940,"month":3,"day":11}]},{"title":"放手发展抗日力量，抵抗反共顽固派的进攻","authors":["毛泽东"],"page_start":421,"page_end":426,"dates":[{"year":1940,"month":5,"day":4}]},{"title":"团结到底","authors":["毛泽东"],"page_start":427,"page_end":429,"dates":[{"year":1940,"month":7,"day":5}]},{"title":"论政策","authors":["毛泽东"],"page_start":430,"page_end":438,"dates":[{"year":1940,"month":12,"day":25}]},{"title":"为皖南事变发表的命令和谈话","authors":["毛泽东"],"page_start":439,"page_end":445,"dates":[{"year":1941,"month":1,"day":20}]},{"title":"打退第二次反共高潮后的时局","authors":["毛泽东"],"page_start":446,"page_end":448,"dates":[{"year":1941,"month":3,"day":18}]},{"title":"关于打退第二次反共高潮的总结","authors":["毛泽东"],"page_start":449,"page_end":454,"dates":[{"year":1941,"month":5,"day":8}]}],
      ocr: {"content_thresholds":[0.14,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/cec31371-d421-4324-9dcd-6605e48283ed.pdf'),
  },
  {
    entity: {
      id: '36113ef7-6801-471c-b40f-17338077deac',
      name: '毛泽东选集第一卷（人民出版社1991年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/36113ef7-6801-471c-b40f-17338077deac.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"第二版说明","authors":["中共中央文献编辑委员会"],"page_start":5,"page_end":6,"dates":[{"year":1991,"month":2}]},{"title":"本书出版的说明","authors":["中共中央毛泽东选集出版委员会"],"page_start":7,"page_end":8,"dates":[{"year":1951,"month":8,"day":25}]},{"title":"中国社会各阶级的分析","authors":["毛泽东"],"page_start":16,"page_end":24,"dates":[{"year":1925,"month":12,"day":1}]},{"title":"湖南农民运动考察报告","authors":["毛泽东"],"page_start":16,"page_end":24,"dates":[{"year":1927,"month":3}]},{"title":"湖南农民运动考察报告","authors":["毛泽东"],"page_start":25,"page_end":57,"dates":[{"year":1927,"month":3}]},{"title":"中国的红色政权为什么能够存在？","authors":["毛泽东"],"page_start":60,"page_end":69,"dates":[{"year":1928,"month":10,"day":5}]},{"title":"井冈山的斗争","authors":["毛泽东"],"page_start":70,"page_end":97,"dates":[{"year":1928,"month":11,"day":25}]},{"title":"关于纠正党内的错误思想","authors":["毛泽东"],"page_start":98,"page_end":109,"dates":[{"year":1929,"month":11}]},{"title":"星星之火，可以燎原","authors":["毛泽东"],"page_start":110,"page_end":121,"dates":[{"year":1930,"month":1,"day":5}]},{"title":"反对本本主义","authors":["毛泽东"],"page_start":122,"page_end":131,"dates":[{"year":1930,"month":5}]},{"title":"必须注意经济工作","authors":["毛泽东"],"page_start":132,"page_end":139,"dates":[{"year":1933,"month":8,"day":12}]},{"title":"怎样分析农村阶级","authors":["毛泽东"],"page_start":140,"page_end":142,"dates":[{"year":1933,"month":10}]},{"title":"我们的经济政策","authors":["毛泽东"],"page_start":143,"page_end":148,"dates":[{"year":1934,"month":1}]},{"title":"关心群众生活，注意工作方法","authors":["毛泽东"],"page_start":149,"page_end":154,"dates":[{"year":1934,"month":1,"day":27}]},{"title":"论反对日本帝国主义的策略","authors":["毛泽东"],"page_start":155,"page_end":182,"dates":[{"year":1935,"month":12,"day":27}]},{"title":"中国革命战争的战略问题","authors":["毛泽东"],"page_start":183,"page_end":257,"dates":[{"year":1936,"month":12}]},{"title":"关于蒋介石声明的声明","authors":["毛泽东"],"page_start":228,"page_end":264,"dates":[{"year":1936,"month":12,"day":28}]},{"title":"中国共产党在抗日时期的任务","authors":["毛泽东"],"page_start":265,"page_end":283,"dates":[{"year":1937,"month":5,"day":3}]},{"title":"为争取千百万群众进入抗日民族统一战线而斗争","authors":["毛泽东"],"page_start":284,"page_end":294,"dates":[{"year":1937,"month":5,"day":8}]},{"title":"实践论","authors":["毛泽东"],"page_start":295,"page_end":311,"dates":[{"year":1937,"month":7}]},{"title":"矛盾论","authors":["毛泽东"],"page_start":312,"page_end":353,"dates":[{"year":1937,"month":8}]}],
      ocr: {"content_thresholds":[0.126,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/36113ef7-6801-471c-b40f-17338077deac.pdf'),
  },
  {
    entity: {
      id: '9b1ca6ac-397b-4cea-9776-82a6dc5af6c5',
      name: '关于工人队伍基本状况的调查',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(25)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/9b1ca6ac-397b-4cea-9776-82a6dc5af6c5/${
              idx + 1
            }.jpeg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpeg',
      articles: [{"title":"第二转炉车间五十六个“海塘青年”的情况调查","authors":[],"page_start":1,"page_end":7,"dates":[{"year":1973,"month":8}]},{"title":"钢板车间青年工人情况调查","authors":[],"page_start":8,"page_end":11,"dates":[{"year":1973,"month":8}]},{"title":"钢板车间可以教育好的子女情况","authors":[],"page_start":11,"page_end":14,"dates":[{"year":1973,"month":8}]},{"title":"如何做好犯错误的人的转化工作","authors":[],"page_start":15,"page_end":18,"dates":[{"year":1973,"month":8}]},{"title":"二纺丙班细沙工段青工学技术情况","authors":[],"page_start":19,"page_end":21,"dates":[{"year":1973,"month":8}]},{"title":"二纺甲班青年女工的健康情况","authors":[],"page_start":21,"page_end":25,"dates":[{"year":1973,"month":8}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/9b1ca6ac-397b-4cea-9776-82a6dc5af6c5'),
  },
  {
    entity: {
      id: '706accb6-84d6-4155-a024-db2895a89fa1',
      name: '上海第一钢铁厂工人队伍状况的调查',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(28)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/706accb6-84d6-4155-a024-db2895a89fa1/${
              idx + 1
            }.jpeg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpeg',
      articles: [{"title":"上海第一钢铁厂发展概貌","authors":[],"page_start":1,"page_end":5,"dates":[{"year":1973,"month":5}]},{"title":"平炉车间老工人情况调查","authors":[],"page_start":5,"page_end":8,"dates":[{"year":1973,"month":5}]},{"title":"四个老工人家庭经济生活的调查","authors":[],"page_start":9,"page_end":12,"dates":[{"year":1973,"month":5}]},{"title":"第二转炉车间五十六个“海塘青年”的情况调查","authors":[],"page_start":12,"page_end":16,"dates":[{"year":1973,"month":5}]},{"title":"如何做好犯错误的人的转化工作","authors":[],"page_start":16,"page_end":19,"dates":[{"year":1973,"month":5}]},{"title":"钢板车间青年工人情况调查","authors":[],"page_start":19,"page_end":22,"dates":[{"year":1973,"month":5}]},{"title":"钢板车间可以教育好的子女情况","authors":[],"page_start":22,"page_end":25,"dates":[{"year":1973,"month":5}]},{"title":"大专毕业的知识分子情况调查","authors":[],"page_start":25,"page_end":28,"dates":[{"year":1973,"month":5}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/706accb6-84d6-4155-a024-db2895a89fa1'),
  },
  {
    entity: {
      id: '16dd6e1b-5336-447f-9560-9e09dea0b6c8',
      name: '红旗一九六九年第十二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/16dd6e1b-5336-447f-9560-9e09dea0b6c8.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"注意工作方法","authors":["《人民日报》编辑部"],"page_start":8,"page_end":10,"dates":[{"year":1969,"month":11,"day":5}]},{"title":"革命青年的榜样","authors":["《红旗》杂志评论员"],"page_start":11,"page_end":13,"dates":[{"year":1969,"month":11,"day":29}]},{"title":"金训华同志日记摘抄（一九六九年七月——八月）","authors":["金训华"],"page_start":14,"page_end":22,"is_range_date":true,"dates":[{"year":1969,"month":7},{"year":1969,"month":8}]},{"title":"注意巩固精兵简政的成果","authors":["金平"],"page_start":23,"page_end":26,"dates":[{"year":1969,"month":12}]},{"title":"继续发扬艰苦奋斗、勤俭节约的作风——丰收以后怎么办？","authors":["梁集慧"],"page_start":27,"page_end":30,"dates":[{"year":1969,"month":12}]},{"title":"论干部插队落户","authors":["江建农"],"page_start":31,"page_end":34,"dates":[{"year":1969,"month":12}]},{"title":"搞好带头人的思想革命化","authors":["丁元功"],"page_start":36,"page_end":38,"dates":[{"year":1969,"month":12}]},{"title":"办好“小化肥”——上海市的调查报告","authors":["上海市革命委员会调查组"],"page_start":39,"page_end":45,"dates":[{"year":1969,"month":12}]},{"title":"一个坚持社会主义方向的社办工厂——广东陵水县椰林人民公社的调查报告","authors":["广东省革委会、海南行政区革委会、陵水县革委会调查组"],"page_start":46,"page_end":50,"dates":[{"year":1969,"month":12}]},{"title":"自力更生的道路越走越广阔——山西武乡县烧高角大队关于合作医疗的调查报告","authors":["武乡县革命委员会、武乡县人民武装部调查组"],"page_start":51,"page_end":54,"dates":[{"year":1969,"month":12}]},{"title":"源于生活，高于生活——关于用舞蹈塑造无产阶级英雄形象的一些体会","authors":["上海京剧团《智取威虎山》剧组"],"page_start":55,"page_end":62,"dates":[{"year":1969,"month":12}]},{"title":"造万吨轮船的辩证法","authors":["夭津新港船厂工人学哲学小组"],"page_start":63,"page_end":65,"dates":[{"year":1969,"month":12}]},{"title":"沿着毛主席的建军路线胜利前进","authors":["人民解放军广州部队某部四连党支部"],"page_start":66,"page_end":70,"dates":[{"year":1969,"month":12}]},{"title":"一件带根本性的大事","authors":["申茂功"],"page_start":71,"page_end":73,"dates":[{"year":1969,"month":12}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/16dd6e1b-5336-447f-9560-9e09dea0b6c8.pdf'),
  },
  {
    entity: {
      id: 'e4b9fbef-a119-4758-b5e9-6ce419db24c0',
      name: '红旗一九六九年第十一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/e4b9fbef-a119-4758-b5e9-6ce419db24c0.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"在庆祝中华人民共和国成立二十周年大会上的讲话","alias":"在庆祝中华人民共和国成立二十周年大会上林彪副主席的讲话","authors":["林彪"],"page_start":6,"page_end":8,"dates":[{"year":1969,"month":10,"day":1}]},{"title":"中华人民共和国政府声明","authors":["新华社"],"page_start":9,"page_end":10,"dates":[{"year":1969,"month":10,"day":7}]},{"title":"中华人民共和国外交部文件——驳苏联政府一九六九年六月十三日声明","authors":["新华社"],"page_start":11,"page_end":20,"dates":[{"year":1969,"month":10,"day":8}]},{"title":"永远保持艰苦奋斗的革命传统","authors":["朱惠"],"page_start":21,"page_end":25,"dates":[{"year":1969,"month":10}]},{"title":"抓好典型","authors":["甘为民"],"page_start":26,"page_end":29,"dates":[{"year":1969,"month":10}]},{"title":"学好毛主席的哲学思想，自觉地改造世界观","authors":["李长茂"],"page_start":30,"page_end":34,"dates":[{"year":1969,"month":10}]},{"title":"智取威虎山","authors":["上海京剧团《智取威虎山》剧组"],"page_start":35,"page_end":64,"ocr":{"auto_vsplit":false,"vsplit":0.46,"content_thresholds":[0,0.15,0,0.2]},"dates":[{"year":1969,"month":10}]},{"title":"努力塑造无产阶级英雄人物的光辉形象——对塑造杨子荣等英雄形象的一些体会","authors":["上海京剧团《智取威虎山》剧组"],"page_start":65,"page_end":74,"dates":[{"year":1969,"month":10}]},{"title":"数风流人物还看今朝——赞革命样板戏《智取威虎山》中杨子荣英雄形象的塑造","authors":["红城"],"page_start":75,"page_end":81,"dates":[{"year":1969,"month":10,"day":24}]},{"title":"为错误路线树碑立传的反动作品——评欧阳山的《一代风流》及其“来龙去脉”","authors":["上海革命大批判写作小组"],"page_start":82,"page_end":91,"dates":[{"year":1969,"month":10}]},{"title":"不脱产委员在革命委员会中怎样发挥作用？","authors":["甘肃省临洮县革命委员会"],"page_start":92,"page_end":94,"dates":[{"year":1969,"month":10}]},{"title":"革命干部在革命委员会中怎样发挥骨干作用？","authors":["中国人民银行青海有分行革命委员会"],"page_start":95,"page_end":98,"dates":[{"year":1969,"month":10}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/e4b9fbef-a119-4758-b5e9-6ce419db24c0.pdf'),
  },
  {
    entity: {
      id: '4828e228-4e46-4374-a1b1-b2cb71877e82',
      name: '红旗一九六九年第十期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/4828e228-4e46-4374-a1b1-b2cb71877e82.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"为进一步巩固无产阶级专政而斗争──庆祝中华人民共和国成立二十周年","authors":["《红旗》杂志编辑部","《解放军报》编辑部","《人民日报》编辑部"],"page_start":8,"page_end":11,"dates":[{"year":1969,"month":10,"day":1}]},{"title":"庆祝中华人民共和国成立二十周年口号","authors":["《红旗》杂志编辑部"],"page_start":12,"page_end":13,"dates":[{"year":1969,"month":10}]},{"title":"光芒万丈的灯塔——学习《关于正确处理人民内部矛盾的问题》","authors":["辽宁省革命委员会写作小组"],"page_start":14,"page_end":24,"dates":[{"year":1969,"month":10}]},{"title":"中国社会主义工业化的道路","authors":["北京市革命委员会写作小组"],"page_start":25,"page_end":34,"dates":[{"year":1969,"month":10}]},{"title":"紧跟毛主席 一步一层天","authors":["李全寿"],"page_start":35,"page_end":39,"dates":[{"year":1969,"month":10}]},{"title":"学习革命样板戏 保卫革命样板戏","authors":["哲平"],"page_start":40,"page_end":43,"dates":[{"year":1969,"month":10}]},{"title":"用唯物辩证法认识矛盾和解决矛盾","authors":["人民解放军武汉部队某部七连党支部"],"page_start":44,"page_end":50,"dates":[{"year":1969,"month":10}]},{"title":"毛泽东思想在社会主义建设中的伟大胜利","authors":["天津市革命委员会写作小组"],"page_start":51,"page_end":59,"dates":[{"year":1969,"month":10}]},{"title":"工人阶级的革命志气","authors":["王超柱"],"page_start":60,"page_end":62,"dates":[{"year":1969,"month":10}]},{"title":"独立自主、自力更生方针的光辉成果","authors":["魏峻烈"],"page_start":63,"page_end":65,"dates":[{"year":1969,"month":10}]},{"title":"在合作化的基础上实现机械化","authors":["程金阶"],"page_start":66,"page_end":68,"dates":[{"year":1969,"month":10}]},{"title":"毛主席人民战争思想的无比威力","authors":["简海金"],"page_start":69,"page_end":71,"dates":[{"year":1969,"month":10}]},{"title":"毛泽东思想的光辉照亮了西藏高原","authors":["央宗"],"page_start":72,"page_end":75,"dates":[{"year":1969,"month":10}]},{"title":"靠毛泽东思想攀登科学技术新高峰","authors":["朱光亚"],"page_start":76,"page_end":78,"dates":[{"year":1969,"month":10}]},{"title":"农村妇女是巨大的革命力量","authors":["黑龙江省革命委员会、兰西县革命委员会调查组"],"page_start":79,"page_end":81,"dates":[{"year":1969,"month":10}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/4828e228-4e46-4374-a1b1-b2cb71877e82.pdf'),
  },
  {
    entity: {
      id: 'cc452f1b-2148-4ce9-98f2-413e04454bb0',
      name: '红旗一九六九年第九期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/cc452f1b-2148-4ce9-98f2-413e04454bb0.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"抓紧革命大批判","authors":["《红旗》杂志编辑部","《解放军报》编辑部","《人民日报》编辑部"],"page_start":8,"page_end":11,"dates":[{"year":1969,"month":8,"day":25}]},{"title":"谁是历史的创造者？——评大毒草《兵临城下》","authors":["上海革命大批判写作小组"],"page_start":12,"page_end":19,"dates":[{"year":1969,"month":9}]},{"title":"念念不忘无产阶级专政——马克思主义同修正主义斗争的一个根本问题","authors":["齐永红"],"page_start":20,"page_end":26,"dates":[{"year":1969,"month":9}]},{"title":"新沙皇向亚洲扩张的新步骤——揭穿所谓“亚洲集体安全体系”的扩张主义本质","authors":["安军道"],"page_start":27,"page_end":31,"dates":[{"year":1969,"month":9}]},{"title":"苏修“经济一体化新阶段”的侵略实质","authors":["海震"],"page_start":32,"page_end":36,"dates":[{"year":1969,"month":9}]},{"title":"打退资产阶级在经济领域里的进攻——财贸战线斗、批、改中的一个重要问题","authors":["沈正平"],"page_start":37,"page_end":41,"dates":[{"year":1969,"month":9}]},{"title":"关心青少年的校外生活","authors":["廖群文"],"page_start":42,"page_end":45,"dates":[{"year":1969,"month":9}]},{"title":"无政府主义是对继续进行社会主义革命的反动","authors":["高志仁","天津大沽化工厂工人评论组"],"page_start":46,"page_end":49,"dates":[{"year":1969,"month":9}]},{"title":"坚持一分为二 自觉继续革命","authors":["齐建军"],"page_start":50,"page_end":52,"dates":[{"year":1969,"month":9}]},{"title":"抓人头与抓车头","authors":["洪绍冰"],"page_start":52,"page_end":54,"dates":[{"year":1969,"month":9}]},{"title":"新课题 新考验","authors":["陈祥龙"],"page_start":55,"page_end":57,"dates":[{"year":1969,"month":9}]},{"title":"深入进行农村两条道路斗争的教育——浙江德清县下高桥大队的调查报告","authors":["浙江省革命委员会、德清县革命委员会调查组"],"page_start":58,"page_end":63,"dates":[{"year":1969,"month":9}]},{"title":"用毛泽东思想对下乡知识青年进行再教育——辽宁营口县松树大队的调查报告","authors":["营口县革命委员会调查组"],"page_start":64,"page_end":68,"dates":[{"year":1969,"month":9}]},{"title":"一所留校插队相结合的“五·七”干校——兰州市白银区“五·七”干校的调查报告","authors":["甘肃省革命委员会、兰州市革命委员会调查组"],"page_start":69,"page_end":74,"dates":[{"year":1969,"month":9}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/cc452f1b-2148-4ce9-98f2-413e04454bb0.pdf'),
  },
  {
    entity: {
      id: '0b885c01-a812-4192-b4d2-217bae67bf27',
      name: '红旗一九六九年第八期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/0b885c01-a812-4192-b4d2-217bae67bf27.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"人民军队所向无敌──纪念中国人民解放军诞生四十二周年","authors":["《红旗》杂志编辑部","《解放军报》编辑部","《人民日报》编辑部"],"page_start":8,"page_end":12,"dates":[{"year":1969,"month":8,"day":1}]},{"title":"永远突出无产阶级政治","authors":["邵海清"],"page_start":13,"page_end":16,"dates":[{"year":1969,"month":8}]},{"title":"毛主席的建军路线是指引我们胜利前进的航标","authors":["人民解放军海军某部航标队党支部"],"page_start":16,"page_end":19,"dates":[{"year":1969,"month":8}]},{"title":"用毛泽东思想武装起来的人是最大的战斗力","authors":["冯全民"],"page_start":20,"page_end":22,"dates":[{"year":1969,"month":8}]},{"title":"我们贫下中农最热爱人民解放军","authors":["姜泰元"],"page_start":22,"page_end":24,"dates":[{"year":1969,"month":8}]},{"title":"政权建设中的一个新问题——支左人员如何正确处理同新的领导班子的关系","authors":["八三四一部队驻南口机车车辆机械厂毛泽东思想宣传队"],"page_start":25,"page_end":30,"dates":[{"year":1969,"month":8}]},{"title":"宗派主义是无产阶级党性的大敌","authors":["洪流"],"page_start":31,"page_end":34,"dates":[{"year":1969,"month":8}]},{"title":"工人革命群众组织必须接受党的领导","authors":["秦连才"],"page_start":35,"page_end":38,"dates":[{"year":1969,"month":8}]},{"title":"一个一个单位地搞好斗、批、改","authors":["栗新"],"page_start":39,"page_end":42,"dates":[{"year":1969,"month":8}]},{"title":"学会使用唯物辩证法——向同志们介绍一组工人学哲学的文章（短评）","authors":["《红旗》杂志编辑部"],"page_start":43,"page_end":44,"dates":[{"year":1969,"month":8}]},{"title":"创先进与“保”先进","authors":["郑尚友"],"page_start":44,"page_end":46,"dates":[{"year":1969,"month":8}]},{"title":"学会全面地看问题","authors":["洪跃工"],"page_start":47,"page_end":49,"dates":[{"year":1969,"month":8}]},{"title":"掌握辩证法 解决“老大难”","authors":["齐学彪"],"page_start":47,"page_end":49,"dates":[{"year":1969,"month":8}]},{"title":"掌握辩证法 解决“老大难”","authors":["齐学彪"],"page_start":49,"page_end":51,"dates":[{"year":1969,"month":8}]},{"title":"印染工艺改革的启示","authors":["申辉年"],"page_start":52,"page_end":53,"dates":[{"year":1969,"month":8}]},{"title":"东风是怎样吹进门窗来的？","authors":["上海国棉十七厂四纺工场工人学哲学小组"],"page_start":52,"page_end":53,"dates":[{"year":1969,"month":8}]},{"title":"东风是怎样吹进门窗来的？","authors":["上海国棉十七厂四纺工场工人学哲学小组"],"page_start":54,"page_end":56,"dates":[{"year":1969,"month":8}]},{"title":"储粮储草 备战备荒——吉林伊通县柴家岗子生产队的调查报告","authors":["四平专区革命委员会、伊通县革命委员会、伊通县人民武装部联合调查组"],"page_start":57,"page_end":61,"dates":[{"year":1969,"month":8}]},{"title":"干部解放出来怎么办？——河北邯郸国棉三厂的调查报告","authors":["邯郸地区革命委员会、邯郸市革命委员会、人民解放军邯郸驻军联合调查组"],"page_start":62,"page_end":67,"dates":[{"year":1969,"month":8}]},{"title":"从炮制“共产主义基督教”看苏修叛徒的堕落","authors":["于奋"],"page_start":68,"page_end":73,"dates":[{"year":1969,"month":8}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/0b885c01-a812-4192-b4d2-217bae67bf27.pdf'),
  },
  {
    entity: {
      id: 'd6e8f47c-70e7-4432-937f-d6c702420d10',
      name: '红旗一九六九年第六、七期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/d6e8f47c-70e7-4432-937f-d6c702420d10.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"中国共产党万岁──纪念中国共产党诞生四十八周年","authors":["《红旗》杂志编辑部","《解放军报》编辑部","《人民日报》编辑部"],"page_start":8,"page_end":12,"dates":[{"year":1969,"month":7,"day":1}]},{"title":"高举“九大”的团结旗帜，争取更大的胜利","authors":["《红旗》杂志编辑部","《解放军报》编辑部","《人民日报》编辑部"],"page_start":13,"page_end":17,"dates":[{"year":1969,"month":6,"day":9}]},{"title":"加强团结，粉碎帝、修、反的阴谋","authors":["肉孜吐尔迪","孜牙"],"page_start":18,"page_end":20,"dates":[{"year":1969,"month":7}]},{"title":"一不怕苦，二不怕死 继续革命，彻底革命","authors":["刘如亮"],"page_start":21,"page_end":23,"dates":[{"year":1969,"month":7}]},{"title":"毛泽东思想是工人阶级团结的基础","authors":["葛信钧"],"page_start":24,"page_end":26,"dates":[{"year":1969,"month":7}]},{"title":"“越是艰险越向前”——驳“文化工作危险论”","authors":["劲松"],"page_start":27,"page_end":30,"dates":[{"year":1969,"month":7}]},{"title":"革命青年工人的责任","authors":["徐继先"],"page_start":31,"page_end":34,"dates":[{"year":1969,"month":7}]},{"title":"做过细的思想教育工作——如何帮助犯错误的干部回到毛主席的革命路线上来","authors":["红涛"],"page_start":35,"page_end":38,"dates":[{"year":1969,"month":7}]},{"title":"评斯坦尼斯拉夫斯基“体系”","authors":["上海革命大批判写作小组"],"page_start":39,"page_end":49,"dates":[{"year":1969,"month":7}]},{"title":"孔家店的幽灵与现实的阶级斗争","authors":["史反修"],"page_start":50,"page_end":57,"dates":[{"year":1969,"month":6,"day":13}]},{"title":"政治统帅经济 革命统帅生产","authors":["葛政"],"page_start":58,"page_end":62,"dates":[{"year":1969,"month":7}]},{"title":"三股绳紧紧拧成一股绳——黑龙江省双鸭山市的调查报告","authors":["《黑龙江日报》记者"],"page_start":63,"page_end":70,"dates":[{"year":1969,"month":7}]},{"title":"一个朝气蓬勃的党支部——北京木城涧煤矿二段党支部的调查报告","authors":["中国共产党北京木城涧煤矿委员会驻矿解放军毛泽东思想宣传队","北京市革命委员会调查组"],"page_start":71,"page_end":75,"dates":[{"year":1969,"month":6,"day":25}]},{"title":"改革不合理的规章制度是一场革命——北京市北郊木材厂的调查报告","authors":["北京市革命委员会调查组"],"page_start":76,"page_end":81,"dates":[{"year":1969,"month":7}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/d6e8f47c-70e7-4432-937f-d6c702420d10.pdf'),
  },
  {
    entity: {
      id: 'adab5d53-878a-4ffc-a470-b49038540d3d',
      name: '红旗一九六九年第五期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/adab5d53-878a-4ffc-a470-b49038540d3d.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"在中国共产党第九次全国代表大会上的报告","authors":["林彪"],"page_start":10,"page_end":36,"dates":[{"year":1969,"month":4,"day":1}]},{"title":"中国共产党章程","authors":[],"page_start":37,"page_end":41,"dates":[{"year":1969,"month":4,"day":14}]},{"title":"中国共产党第九次全国代表大会主席团秘书处新闻公报","authors":[],"page_start":42,"page_end":43,"dates":[{"year":1969,"month":4,"day":1}]},{"title":"中国共产党第九次全国代表大会主席团名单","authors":[],"page_start":44,"page_end":44,"dates":[{"year":1969}]},{"title":"中国共产党第九次全国代表大会主席团秘书处新闻公报","authors":[],"page_start":45,"page_end":47,"dates":[{"year":1969,"month":4,"day":14}]},{"title":"中国共产党第九次全国代表大会主席团秘书处新闻公报","authors":[],"page_start":48,"page_end":52,"dates":[{"year":1969,"month":4,"day":24}]},{"title":"中国共产党第九届中央委员会委员和候补委员二百七十九人名单","authors":[],"page_start":52,"page_end":53,"dates":[{"year":1969}]},{"title":"中国共产党第九届中央委员会第一次全体会议新闻公报","authors":[],"page_start":54,"page_end":55,"dates":[{"year":1969,"month":4,"day":28}]},{"title":"做无产阶级专政下继续革命的先进战士","authors":["马福全"],"page_start":56,"page_end":58,"dates":[{"year":1969}]},{"title":"毛主席的革命路线照得心里亮","authors":["傅耀世"],"page_start":59,"page_end":61,"dates":[{"year":1969}]},{"title":"无产阶级文化大革命把我们百炼成钢","authors":["杨汉堂","李敬国"],"page_start":62,"page_end":64,"dates":[{"year":1969}]},{"title":"一心为人民，一切为人民","authors":["徐道义"],"page_start":65,"page_end":68,"dates":[{"year":1969}]},{"title":"为落实毛主席的无产阶级政策而斗争","authors":["驻清华大学工人、解放军毛泽东思想宣传队"],"page_start":69,"page_end":75,"dates":[{"year":1969}]},{"title":"首先要在思想上“落实”——谈谈落实政策中的一些认识问题","authors":["王德富"],"page_start":76,"page_end":79,"dates":[{"year":1969}]},{"title":"用毛泽东思想组织和调动浩浩荡荡的革命大军","authors":["中海","卫东"],"page_start":80,"page_end":85,"dates":[{"year":1969}]},{"title":"“国际专政论”是社会帝国主义的强盗“理论”","authors":["宫均平"],"page_start":86,"page_end":89,"dates":[{"year":1969}]},{"title":"粉碎新沙皇的“有限主权论”","authors":["齐向阳"],"page_start":90,"page_end":93,"dates":[{"year":1969}]},{"title":"撕掉苏修所谓“侵略定义”的画皮","authors":["王兆才"],"page_start":94,"page_end":97,"dates":[{"year":1969}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/adab5d53-878a-4ffc-a470-b49038540d3d.pdf'),
  },
  {
    entity: {
      id: '1cbf9bf2-87ac-4488-9618-6476989e1c0c',
      name: '红旗一九六九年第三、四期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/1cbf9bf2-87ac-4488-9618-6476989e1c0c.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"关于总结经验","authors":["《红旗》杂志编辑部"],"page_start":8,"page_end":12,"dates":[{"year":1969}]},{"title":"打倒新沙皇！","authors":["《人民日报》编辑部","《解放军报》编辑部"],"page_start":13,"page_end":15,"dates":[{"year":1969}]},{"title":"珍宝岛从来就是中国的领土","authors":["外交部新闻司"],"page_start":16,"page_end":19,"dates":[{"year":1969}]},{"title":"誓死保卫祖国神圣领土","authors":["孙玉国"],"page_start":20,"page_end":21,"dates":[{"year":1969}]},{"title":"打倒苏修社会帝国主义","authors":["廉美仁","孙德玉"],"page_start":22,"page_end":23,"dates":[{"year":1969}]},{"title":"痛击苏修纸老虎","authors":["黄网友"],"page_start":24,"page_end":25,"dates":[{"year":1969}]},{"title":"政治思想战线上的一个新课题——做好“可以教育好的青少年子女”的工作","authors":["洪钢","武强"],"page_start":26,"page_end":29,"dates":[{"year":1969}]},{"title":"永远抓住阶级斗争这个纲——从钢产量的“高——低——高”谈起","authors":["谢佐助"],"page_start":30,"page_end":33,"dates":[{"year":1969}]},{"title":"“读书无用”吗？——驳“读书做官论”的一种翻版","authors":["王为民","李益群"],"page_start":34,"page_end":37,"dates":[{"year":1969}]},{"title":"毛主席建党路线的光辉照亮了前进的道路——北京化工三厂整党调查报告","authors":["北京革命委员会调查组"],"page_start":38,"page_end":45,"dates":[{"year":1969}]},{"title":"对干部进行再教育的一个有效方法——上海市的调查报告","authors":["上海市革命委员会调查组"],"page_start":46,"page_end":50,"dates":[{"year":1969}]},{"title":"县办工厂要为农业生产服务——河北省抚宁县农业机械厂的调查报告","authors":["抚宁县革命委员会","抚宁县驻军支左部队"],"page_start":51,"page_end":55,"dates":[{"year":1969}]},{"title":"一个由贫下中农亲手创办的农业科学实验站——河南省上蔡县东岸大队的调查报告","authors":["上蔡县革委会","上蔡县人民武装部","东岸公社革委会"],"page_start":56,"page_end":60,"dates":[{"year":1969}]},{"title":"“老三篇”，是红灯，风雪高原炼忠心","authors":["朱明仓"],"page_start":61,"page_end":63,"dates":[{"year":1969}]},{"title":"紧跟毛主席，永远闹革命——贫下中农说：“文化革命好无边，一年胜过几千年。”","authors":["宋学义"],"page_start":64,"page_end":66,"dates":[{"year":1969}]},{"title":"贫下中农是我们最好的老师","authors":["林兆枢"],"page_start":67,"page_end":69,"dates":[{"year":1969}]},{"title":"抓革命，促生产，夺取工业战线的新胜利","authors":["《人民日报》编辑部"],"page_start":70,"page_end":73,"dates":[{"year":1969,"month":2,"day":21}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/1cbf9bf2-87ac-4488-9618-6476989e1c0c.pdf'),
  },
  {
    entity: {
      id: '5ce8b95d-1d81-40a0-ab56-14cb28e44596',
      name: '红旗一九六九年第二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/5ce8b95d-1d81-40a0-ab56-14cb28e44596.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"走投无路的自供状——评尼克松的“就职演说”和苏修叛徒集团的无耻捧场","authors":["《人民日报》编辑部","《红旗》杂志编辑部"],"page_start":8,"page_end":13,"dates":[{"year":1969}]},{"title":"“谁说了算？”","authors":["沙林云"],"page_start":18,"page_end":21,"dates":[{"year":1969}]},{"title":"急躁、坐等，还是促进？——如何正对看待知识分子","authors":["龚群","朝晖"],"page_start":22,"page_end":25,"dates":[{"year":1969}]},{"title":"革命舆论的战斗力量","authors":["吉扬文"],"page_start":26,"page_end":28,"dates":[{"year":1969}]},{"title":"按照毛主席的“五·七”指示改造集镇——辽宁省盘锦垦区田庄台镇的调查报告","authors":["辽宁省革委会","盘锦垦区革委会","解放军某部","新华社记者"],"page_start":29,"page_end":32,"dates":[{"year":1969}]},{"title":"“厂办校，两挂钩”——甘肃省兰州市关于城市中学走工厂办校道路的调查报告","authors":["甘肃省革命委员会","兰州市革命委员会"],"page_start":33,"page_end":38,"dates":[{"year":1969}]},{"title":"坚定不移地突出无产阶级政治","authors":["梁芝禹"],"page_start":39,"page_end":41,"dates":[{"year":1969}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/5ce8b95d-1d81-40a0-ab56-14cb28e44596.pdf'),
  },
  {
    entity: {
      id: '6b348e26-051b-407a-9f84-1278001518b5',
      name: '红旗一九六九年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/6b348e26-051b-407a-9f84-1278001518b5.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"用毛泽东思想统帅一切","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":14,"dates":[{"year":1969,"month":1,"day":1}]},{"title":"我国成功地进行了一次新的氢弹爆炸","authors":[],"page_start":15,"page_end":17,"dates":[{"year":1968,"month":12,"day":28}]},{"title":"用实际行动迎接“九大”的召开","authors":["王秀珍"],"page_start":18,"page_end":21,"dates":[{"year":1969}]},{"title":"沿着毛主席的革命路线胜利前进","authors":["洪华"],"page_start":21,"page_end":23,"dates":[{"year":1969}]},{"title":"毛主席自力更生的光辉思想给我们无穷的力量","authors":["郭凤莲"],"page_start":24,"page_end":26,"dates":[{"year":1969}]},{"title":"热情做好下乡知识青年再教育的工作","authors":["林英兵","任卫东"],"page_start":27,"page_end":29,"dates":[{"year":1969}]},{"title":"同工人结合一辈子","authors":["潘玉铭"],"page_start":30,"page_end":32,"dates":[{"year":1969}]},{"title":"一个受工农兵欢迎的新型商店","authors":["天津市汉沽区革委会","天津市汉沽区商业革委会","天津汉沽驻军支左联络站"],"page_start":33,"page_end":37,"dates":[{"year":1969}]},{"title":"广东省、曲江县、群星大队坚持合作医疗制度十一年的情况调查","authors":["广东省革委会","韶关专区革委会","曲江县革委会"],"page_start":38,"page_end":45,"dates":[{"year":1969}]},{"title":"一支能工能农的农村水电技术队伍是怎样成长的——贵州省乌当区东风公社的调查报告","authors":["东风公社革委会","乌当区革委会","新贵州报"],"page_start":46,"page_end":50,"dates":[{"year":1969}]},{"title":"英雄的鲜血与叛徒的恐惧","authors":["苏联“为在苏联重建马克思列宁主义政党而斗争的战士委员会”"],"page_start":51,"page_end":57,"dates":[{"year":1969}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/6b348e26-051b-407a-9f84-1278001518b5.pdf'),
  },
  {
    entity: {
      id: 'b89504e4-9d2e-47cc-9b76-9285491859a3',
      name: '红旗一九六八年第五期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/b89504e4-9d2e-47cc-9b76-9285491859a3.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"认真学习两条路线斗争的历史","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":8,"page_end":15,"dates":[{"year":1968}]},{"title":"在中国共产党第七届中央委员会第二次全体会议上的报告","authors":["毛泽东"],"page_start":16,"page_end":30,"dates":[{"year":1949,"month":3,"day":5}]},{"title":"中国共产党第八届扩大的第十二次中央委员会全会公报","authors":[],"page_start":31,"page_end":36,"dates":[{"year":1968,"month":10,"day":31}]},{"title":"彻底埋葬“阶级斗争熄灭论”","authors":["焦兆海"],"page_start":37,"page_end":38,"dates":[{"year":1968}]},{"title":"批臭复辟资本主义的“驯服工具论”","authors":["张富贵"],"page_start":39,"page_end":41,"dates":[{"year":1968}]},{"title":"揭穿“党内和平论”的反动实质","authors":["王炳贤","吕福庭","魏先德"],"page_start":41,"page_end":43,"dates":[{"year":1968}]},{"title":"“土专家”和农业教育革命——江苏省靖江县的调查报告","authors":["靖江县革命委员会","靖江县大兴公社革命委员会"],"page_start":44,"page_end":49,"dates":[{"year":1968}]},{"title":"一所贫下中农掌权的民办小学——从松树小学的成长看农村办学的方向","authors":["辽宁省革命委员会","解放军某部"],"page_start":50,"page_end":55,"dates":[{"year":1968}]},{"title":"“看不惯”与“看得惯”","authors":["赵国华"],"page_start":56,"page_end":58,"dates":[{"year":1968}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/b89504e4-9d2e-47cc-9b76-9285491859a3.pdf'),
  },
  {
    entity: {
      id: '82057e47-1cf2-4c75-bb62-328d23e4bf4d',
      name: '红旗一九六八年第四期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/82057e47-1cf2-4c75-bb62-328d23e4bf4d.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"吸收无产阶级的新鲜血液——整党工作中的一个重要问题","authors":["《红旗》杂志编辑部"],"page_start":8,"page_end":15,"dates":[{"year":1968}]},{"title":"在中华人民共和国成立十九周年庆祝大会上林彪同志的讲话","authors":["林彪"],"page_start":16,"page_end":18,"dates":[{"year":1968,"month":10,"day":1}]},{"title":"在胜利的大道上奋勇前进——热烈庆祝中华人民共和国成立十九周年","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":19,"page_end":22,"dates":[{"year":1968,"month":9,"day":30}]},{"title":"苏联”斯大林小组“的一张传单","authors":["斯大林小组"],"page_start":23,"page_end":26,"dates":[{"year":1968}]},{"title":"一所理论和实际一致的新型学校——江西省婺源县武口茶叶耕读中学的调查报告","authors":["《江西日报》上饶记者站","《新上饶报》记者","婺源县革命委员会通讯组"],"page_start":27,"page_end":34,"dates":[{"year":1968,"month":9,"day":11}]},{"title":"项城县革命委员会精兵简政的经验","authors":["《人民日报》通讯员"],"page_start":35,"page_end":40,"dates":[{"year":1968}]},{"title":"中国科学院印刷厂坚决走精兵简政的道路","authors":["卫红讯"],"page_start":40,"page_end":41,"dates":[{"year":1968}]},{"title":"工人阶级一定要永远领导学校","authors":["王庆义","陈根焕","王启祥","袁光清"],"page_start":42,"page_end":44,"dates":[{"year":1968}]},{"title":"永远跟着毛主席闹革命","authors":["耿长锁"],"page_start":44,"page_end":46,"dates":[{"year":1968}]},{"title":"同建河山区的人民并肩前进","authors":["张兴培"],"page_start":47,"page_end":49,"dates":[{"year":1968}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/82057e47-1cf2-4c75-bb62-328d23e4bf4d.pdf'),
  },
  {
    entity: {
      id: 'ae043740-d507-4cdc-aebf-356a2e672fae',
      name: '红旗一九六八年第三期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/ae043740-d507-4cdc-aebf-356a2e672fae.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"关于知识分子再教育问题","authors":["《人民日报》编辑部","《红旗》杂志编辑部"],"page_start":6,"page_end":8,"dates":[{"year":1968}]},{"title":"从上海机械学院两条路线的斗争看理工科大学的教育革命","authors":["《红旗》杂志编辑部"],"page_start":11,"page_end":17,"dates":[{"year":1968,"month":9,"day":4}]},{"title":"在北京市革命群众庆祝大会上周恩来总理的讲话","authors":["周恩来"],"page_start":18,"page_end":21,"dates":[{"year":1968,"month":9,"day":7}]},{"title":"在北京市革命群众庆祝大会上江青同志的讲话","authors":["江青"],"page_start":22,"page_end":23,"dates":[{"year":1968,"month":9,"day":7}]},{"title":"从“赤脚医生”的成长看医学教育革命的方向——上海市的调查报告","authors":["《红旗》杂志编辑部"],"page_start":24,"page_end":30,"dates":[{"year":1968}]},{"title":"农村的教育革命必须依靠贫下中农——调查报告，记营口县水源公社开展教育革命的经验","authors":["《人民日报》调查员","《红旗》杂志调查员"],"page_start":31,"page_end":35,"dates":[{"year":1968}]},{"title":"听毛主席的话，为无产阶级革命开车","authors":["赵树增","李景霞"],"page_start":36,"page_end":37,"dates":[{"year":1968}]},{"title":"技术大权我们工人掌定了","authors":["黎新功"],"page_start":38,"page_end":39,"dates":[{"year":1968}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/ae043740-d507-4cdc-aebf-356a2e672fae.pdf'),
  },
  {
    entity: {
      id: '7d4bfdaf-f672-473f-af41-da3b2e942f15',
      name: '红旗一九六八年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/7d4bfdaf-f672-473f-af41-da3b2e942f15.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"工人阶级必须领导一切","authors":["姚文元"],"page_start":6,"page_end":10,"dates":[{"year":1968}]},{"title":"把新闻战线的大革命进行到底——批判中国赫鲁晓夫反革命修正主义的新闻路线","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":11,"page_end":23,"dates":[{"year":1968}]},{"title":"马蜂窝就是要捅","authors":["《工人造反报》编辑部"],"page_start":24,"page_end":25,"dates":[{"year":1968}]},{"title":"在以毛主席为首的无产阶级司令部的领导下团结起来——纪念毛主席《炮打司令部（我的一张大字报）》发表两周年","authors":["《人民日报》编辑部"],"page_start":26,"page_end":28,"dates":[{"year":1968,"month":8,"day":5}]},{"title":"从上海机床厂看培养工程技术人员的道路","authors":["《文汇报》记者","《新华社》记者"],"page_start":29,"page_end":34,"dates":[{"year":1968,"month":7,"day":22}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/7d4bfdaf-f672-473f-af41-da3b2e942f15.pdf'),
  },
  {
    entity: {
      id: '6b63e2a0-b6b6-4966-907c-e0a534710241',
      name: '红旗一九六八年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/6b63e2a0-b6b6-4966-907c-e0a534710241.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"中国共产党中央委员会主席毛泽东同志支持美国黑人抗暴斗争的声明","authors":["毛泽东"],"page_start":8,"page_end":10,"dates":[{"year":1968,"month":4,"day":16}]},{"title":"发扬党的紧密联系群众的作风——纪念中国共产党诞生四十七周年","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":11,"page_end":14,"dates":[{"year":1968}]},{"title":"迎接无产阶级文化大革命的全面胜利","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":15,"page_end":19,"dates":[{"year":1967,"month":12,"day":31}]},{"title":"革命委员会好","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":20,"page_end":22,"dates":[{"year":1968,"month":3,"day":29}]},{"title":"乘胜前进——庆祝“五一”国际劳动节","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":23,"page_end":25,"dates":[{"year":1968,"month":4,"day":30}]},{"title":"划时代的文献——纪念《通知》发表两周年","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":26,"page_end":31,"dates":[{"year":1968,"month":5,"day":16}]},{"title":"对派性要进行阶级分析","authors":["《红旗》杂志编辑部"],"page_start":32,"page_end":33,"dates":[{"year":1968,"month":4,"day":26}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/6b63e2a0-b6b6-4966-907c-e0a534710241.pdf'),
  },
  {
    entity: {
      id: 'ca05f2d9-6729-4738-83c3-10ee950ea8c2',
      name: '国际共产主义运动中两条路线斗争简史（北京人民出版社1976年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/ca05f2d9-6729-4738-83c3-10ee950ea8c2.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"前言","authors":["北京大学国际政治系"],"page_start":11,"page_end":14,"dates":[{"year":1976,"month":7}]},{"title":"一、马克思主义同蒲鲁东主义的斗争","authors":["北京大学国际政治系"],"page_start":15,"page_end":53,"dates":[{"year":1976,"month":7}]},{"title":"二、马克思主义同巴枯宁主义的斗争","authors":["北京大学国际政治系"],"page_start":54,"page_end":95,"dates":[{"year":1976,"month":7}]},{"title":"三、马克思主义同拉萨尔主义的斗争","authors":["北京大学国际政治系"],"page_start":96,"page_end":130,"dates":[{"year":1976,"month":7}]},{"title":"四、马克思列宁主义同伯恩施坦主义的斗争","authors":["北京大学国际政治系"],"page_start":131,"page_end":164,"dates":[{"year":1976,"month":7}]},{"title":"五、马克思列宁主义同考茨基主义的斗争","authors":["北京大学国际政治系"],"page_start":165,"page_end":204,"dates":[{"year":1976,"month":7}]},{"title":"六、马克思列宁主义同托洛茨基主义的斗争","authors":["北京大学国际政治系"],"page_start":205,"page_end":245,"dates":[{"year":1976,"month":7}]},{"title":"七、马克思列宁主义同布哈林主义的斗争","authors":["北京大学国际政治系"],"page_start":247,"page_end":279,"dates":[{"year":1976,"month":7}]},{"title":"结束语","authors":["北京大学国际政治系"],"page_start":280,"page_end":280,"dates":[{"year":1976,"month":7}]}],
      ocr: {"content_thresholds":[0,0.116,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/ca05f2d9-6729-4738-83c3-10ee950ea8c2.pdf'),
  },
  {
    entity: {
      id: 'a202d6ff-1b2f-424a-827f-ef68f5e3ffd1',
      name: '国际共产主义运动简史（1848-1917）（上海人民出版社1976年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/a202d6ff-1b2f-424a-827f-ef68f5e3ffd1.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"《青年自学丛书》编辑说明","authors":["上海师范大学政治教育系","《国际共产主义运动简史》编写组"],"page_start":7,"page_end":7,"dates":[{"year":1976,"month":4}]},{"title":"一 马克思主义的诞生和国际共产主义运动的兴起","authors":["上海师范大学政治教育系","《国际共产主义运动简史》编写组"],"page_start":11,"page_end":39,"dates":[{"year":1976,"month":4}]},{"title":"二 1848年欧洲革命风暴和马克思主义的发展","authors":["上海师范大学政治教育系","《国际共产主义运动简史》编写组"],"page_start":40,"page_end":60,"dates":[{"year":1976,"month":4}]},{"title":"三 第一国际期间马克思、恩格斯反对机会主义的斗争","authors":["上海师范大学政治教育系","《国际共产主义运动简史》编写组"],"page_start":61,"page_end":84,"dates":[{"year":1976,"month":4}]},{"title":"四 无产阶级专政的第一次伟大尝试——巴黎公社","authors":["上海师范大学政治教育系","《国际共产主义运动简史》编写组"],"page_start":85,"page_end":103,"dates":[{"year":1976,"month":4}]},{"title":"五 马克思、恩格斯在欧美各国建党问题上同机会主义路线的斗争","authors":["上海师范大学政治教育系","《国际共产主义运动简史》编写组"],"page_start":104,"page_end":130,"dates":[{"year":1976,"month":4}]},{"title":"六 恩格斯为坚持和捍卫马克思主义革命路线而斗争","authors":["上海师范大学政治教育系","《国际共产主义运动简史》编写组"],"page_start":131,"page_end":151,"dates":[{"year":1976,"month":4}]},{"title":"七 列宁主义的诞生","authors":["上海师范大学政治教育系","《国际共产主义运动简史》编写组"],"page_start":152,"page_end":172,"dates":[{"year":1976,"month":4}]},{"title":"八 列宁为建立新型马克思主义政党而斗争","authors":["上海师范大学政治教育系","《国际共产主义运动简史》编写组"],"page_start":173,"page_end":192,"dates":[{"year":1976,"month":4}]},{"title":"九 列宁在俄国1905年革命期间和革命低潮时期反对机会主义的斗争","authors":["上海师范大学政治教育系","《国际共产主义运动简史》编写组"],"page_start":193,"page_end":217,"dates":[{"year":1976,"month":4}]},{"title":"十 在民族殖民地问题上列宁反对修正主义的斗争","authors":["上海师范大学政治教育系","《国际共产主义运动简史》编写组"],"page_start":218,"page_end":231,"dates":[{"year":1976,"month":4}]},{"title":"十一 在对待帝国主义战争问题上列宁反对第二国际修正主义的斗争","authors":["上海师范大学政治教育系","《国际共产主义运动简史》编写组"],"page_start":232,"page_end":253,"dates":[{"year":1976,"month":4}]},{"title":"十二 十月社会主义革命开辟了人类历史的新纪元","authors":["上海师范大学政治教育系","《国际共产主义运动简史》编写组"],"page_start":254,"page_end":294,"dates":[{"year":1976,"month":4}]},{"title":"后记","authors":["上海师范大学政治教育系","《国际共产主义运动简史》编写组"],"page_start":254,"page_end":294,"dates":[{"year":1975,"month":12}]}],
      ocr: {"content_thresholds":[0,0.122,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/a202d6ff-1b2f-424a-827f-ef68f5e3ffd1.pdf'),
  },
  {
    entity: {
      id: '542565df-264b-4248-9f74-e04cf12ee0f5',
      name: '社会主义社会的基本矛盾和党的基本路线（广东人民出版社1976年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/542565df-264b-4248-9f74-e04cf12ee0f5.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"出版说明","authors":["广州员村地区工农理论学习班","广东师范学院政治历史系"],"page_start":4,"page_end":4,"dates":[{"year":1976,"month":2}]},{"title":"前言","authors":["广州员村地区工农理论学习班","广东师范学院政治历史系"],"page_start":6,"page_end":7,"dates":[{"year":1976,"month":2}]},{"title":"一、社会基本矛盾是社会发展的根本动力","authors":["广州员村地区工农理论学习班","广东师范学院政治历史系"],"page_start":8,"page_end":52,"dates":[{"year":1976,"month":2}]},{"title":"二、正确认识社会主义社会的基本矛盾","authors":["广州员村地区工农理论学习班","广东师范学院政治历史系"],"page_start":53,"page_end":91,"dates":[{"year":1976,"month":2}]},{"title":"三、坚持党的基本路线","authors":["广州员村地区工农理论学习班","广东师范学院政治历史系"],"page_start":92,"page_end":119,"dates":[{"year":1976,"month":2}]}],
      ocr: {"content_thresholds":[0,0.076,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/542565df-264b-4248-9f74-e04cf12ee0f5.pdf'),
  },
  {
    entity: {
      id: '5c7acab9-7534-46d4-9f38-7368dfe01557',
      name: '关于党内资产阶级问题的意见综述',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/5c7acab9-7534-46d4-9f38-7368dfe01557.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"关于党内资产阶级问题的意见综述","authors":["中共中山县委宣传部"],"page_start":2,"page_end":14,"dates":[{"year":1976,"month":7,"day":8}]}],
      ocr: {"content_thresholds":[0,0.082,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/5c7acab9-7534-46d4-9f38-7368dfe01557.pdf'),
  },
  {
    entity: {
      id: '6b469ced-4f61-48c9-9d0b-550abebe4102',
      name: '简明世界史（现代部分）（北京大学历史系1975年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/6b469ced-4f61-48c9-9d0b-550abebe4102.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"编者说明","authors":["北京大学历史系简明世界史编写组"],"page_start":3,"page_end":4,"dates":[{"year":1974,"month":8}]},{"title":"现代部分引言","authors":["北京大学历史系简明世界史编写组"],"page_start":11,"page_end":13,"dates":[{"year":1975,"month":10}]},{"title":"第一章 伟大的俄国十月社会主义革命开辟了人类历史的新纪元","authors":["北京大学历史系简明世界史编写组"],"page_start":15,"page_end":41,"dates":[{"year":1975,"month":10}]},{"title":"第二章 十月革命后资本主义国家革命运动的高涨","authors":["北京大学历史系简明世界史编写组"],"page_start":42,"page_end":74,"dates":[{"year":1975,"month":10}]},{"title":"第三章 十月革命后殖民地半殖民地民族解放运动的高涨","authors":["北京大学历史系简明世界史编写组"],"page_start":75,"page_end":110,"dates":[{"year":1975,"month":10}]},{"title":"第四章 帝国主义的凡尔赛——华盛顿体系 二十年代的国际关系","authors":["北京大学历史系简明世界史编写组"],"page_start":111,"page_end":129,"dates":[{"year":1975,"month":10}]},{"title":"第五章 苏联社会主义革命和建设的伟大胜利","authors":["北京大学历史系简明世界史编写组"],"page_start":130,"page_end":154,"dates":[{"year":1975,"month":10}]},{"title":"第六章 资本主义世界的经济危机 各国人民的反法西斯斗争","authors":["北京大学历史系简明世界史编写组"],"page_start":155,"page_end":181,"dates":[{"year":1975,"month":10}]},{"title":"第七章 三十年代殖民地、半殖民地民族解放运动的发展","authors":["北京大学历史系简明世界史编写组"],"page_start":182,"page_end":207,"dates":[{"year":1975,"month":10}]},{"title":"第八章 三十年代的国际关系 帝国主义准备世界大战","authors":["北京大学历史系简明世界史编写组"],"page_start":208,"page_end":225,"dates":[{"year":1975,"month":10}]},{"title":"第九章 第二次世界大战 世界人民反法西斯战争的伟大胜利","authors":["北京大学历史系简明世界史编写组"],"page_start":226,"page_end":254,"dates":[{"year":1975,"month":10}]},{"title":"大事年表","authors":["北京大学历史系简明世界史编写组"],"page_start":255,"page_end":260,"dates":[{"year":1975,"month":10}]},{"title":"人名中外文对照表","authors":["北京大学历史系简明世界史编写组"],"page_start":261,"page_end":268,"dates":[{"year":1975,"month":10}]},{"title":"地名及其他名词中外文对照表","authors":["北京大学历史系简明世界史编写组"],"page_start":269,"page_end":278,"dates":[{"year":1975,"month":10}]},{"title":"插图","authors":["北京大学历史系简明世界史编写组"],"page_start":279,"page_end":302,"dates":[{"year":1975,"month":10}]}],
      ocr: {"content_thresholds":[0.13,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/6b469ced-4f61-48c9-9d0b-550abebe4102.pdf'),
  },
  {
    entity: {
      id: '2caaa466-6ea4-4dca-aeb8-29a39dd581ca',
      name: '简明世界史（古代部分）（北京大学历史系1974年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/2caaa466-6ea4-4dca-aeb8-29a39dd581ca.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"编者说明","authors":["北京大学历史系简明世界史编写组"],"page_start":4,"page_end":5,"dates":[{"year":1974,"month":8}]},{"title":"古代部分引言","authors":["北京大学历史系简明世界史编写组"],"page_start":15,"page_end":18,"dates":[{"year":1974,"month":10}]},{"title":"第一编 上古史 第一章 原始社会","authors":["北京大学历史系简明世界史编写组"],"page_start":19,"page_end":37,"dates":[{"year":1974,"month":10}]},{"title":"第一编 上古史 第二章 古代埃及","authors":["北京大学历史系简明世界史编写组"],"page_start":38,"page_end":56,"dates":[{"year":1974,"month":10}]},{"title":"第一编 上古史 第三章 古代西南亚奴隶制国家","authors":["北京大学历史系简明世界史编写组"],"page_start":57,"page_end":77,"dates":[{"year":1974,"month":10}]},{"title":"第一编 上古史 第四章 古代伊朗、印度和贵霜帝国","authors":["北京大学历史系简明世界史编写组"],"page_start":78,"page_end":101,"dates":[{"year":1974,"month":10}]},{"title":"第一编 上古史 第五章 古代希腊","authors":["北京大学历史系简明世界史编写组"],"page_start":102,"page_end":133,"dates":[{"year":1974,"month":10}]},{"title":"第一编 上古史 第六章 古代罗马","authors":["北京大学历史系简明世界史编写组"],"page_start":134,"page_end":162,"dates":[{"year":1974,"month":10}]},{"title":"第二编 中古史 第七章 古代的越南、朝鲜和日本","authors":["北京大学历史系简明世界史编写组"],"page_start":163,"page_end":197,"dates":[{"year":1974,"month":10}]},{"title":"第二编 中古史 第八章 印度的封建社会","authors":["北京大学历史系简明世界史编写组"],"page_start":198,"page_end":218,"dates":[{"year":1974,"month":10}]},{"title":"第二编 中古史 第九章 阿拉伯帝国","authors":["北京大学历史系简明世界史编写组"],"page_start":219,"page_end":235,"dates":[{"year":1974,"month":10}]},{"title":"第二编 中古史 第十章 突厥人和蒙古人的封建国家","authors":["北京大学历史系简明世界史编写组"],"page_start":236,"page_end":252,"dates":[{"year":1974,"month":10}]},{"title":"第二编 中古史 第十一章 西欧封建社会","authors":["北京大学历史系简明世界史编写组"],"page_start":253,"page_end":276,"dates":[{"year":1974,"month":10}]},{"title":"第二编 中古史 第十二章 东欧封建国家","authors":["北京大学历史系简明世界史编写组"],"page_start":277,"page_end":297,"dates":[{"year":1974,"month":10}]},{"title":"第二编 中古史 第十三章 古代美洲和古代撒哈拉以南的非洲","authors":["北京大学历史系简明世界史编写组"],"page_start":298,"page_end":313,"dates":[{"year":1974,"month":10}]},{"title":"第二编 中古史 第十四章 西欧资本主义的产生","authors":["北京大学历史系简明世界史编写组"],"page_start":314,"page_end":330,"dates":[{"year":1974,"month":10}]},{"title":"第二编 中古史 第十五章 西欧封建社会衰亡时期的阶级斗争","authors":["北京大学历史系简明世界史编写组"],"page_start":331,"page_end":357,"dates":[{"year":1974,"month":10}]},{"title":"大事年表","authors":["北京大学历史系简明世界史编写组"],"page_start":359,"page_end":365,"dates":[{"year":1974,"month":10}]},{"title":"人名中外文对照表","authors":[],"page_start":366,"page_end":374,"dates":[]},{"title":"地名及其他名词中外文对照表","authors":[],"page_start":375,"page_end":385,"dates":[]},{"title":"插图","authors":[],"page_start":386,"page_end":409,"dates":[]}],
      ocr: {"content_thresholds":[0.13,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/2caaa466-6ea4-4dca-aeb8-29a39dd581ca.pdf'),
  },
  {
    entity: {
      id: 'a0e88e5f-b7fa-454f-b3eb-da261bd4d34f',
      name: '儒法斗争史稿（国营第三五六厂、云南大学理论组1975年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/a0e88e5f-b7fa-454f-b3eb-da261bd4d34f.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"说明","authors":["国营第三五六厂、云南大学理论组"],"page_start":3,"page_end":5,"dates":[{"year":1975,"month":3}]},{"title":"第一部分 春秋至西汉时期的儒法斗争（公元前770——前49年） 第一章 儒家和法家思想的产生及初期的斗争","authors":["国营第三五六厂、云南大学理论组"],"page_start":13,"page_end":30,"dates":[{"year":1975,"month":3}]},{"title":"第一部分 春秋至西汉时期的儒法斗争（公元前770——前49年） 第二章 战国时期的法家思想及其在与儒家斗争中的发展","authors":["国营第三五六厂、云南大学理论组"],"page_start":30,"page_end":57,"dates":[{"year":1975,"month":3}]},{"title":"第一部分 春秋至西汉时期的儒法斗争（公元前770——前49年） 第三章 秦王朝在统一中国过程中的儒法斗争","authors":["国营第三五六厂、云南大学理论组"],"page_start":57,"page_end":84,"dates":[{"year":1975,"month":3}]},{"title":"第一部分 春秋至西汉时期的儒法斗争（公元前770——前49年） 第四章 汉承秦制，在集中统一多民族国家形成过程中的儒法斗争","authors":["国营第三五六厂、云南大学理论组"],"page_start":84,"page_end":126,"dates":[{"year":1975,"month":3}]},{"title":"第二部分 地主阶级转向保守时期儒法斗争的内容和形式的演变（公元前48年——公元907年） 第五章 西汉末至东汉，儒家思想逐步形成占统治地位的思想","authors":["国营第三五六厂、云南大学理论组"],"page_start":127,"page_end":161,"dates":[{"year":1975,"month":3}]},{"title":"第二部分 地主阶级转向保守时期儒法斗争的内容和形式的演变（公元前48年——公元907年） 第六章 三国时期的儒法斗争","authors":["国营第三五六厂、云南大学理论组"],"page_start":161,"page_end":186,"dates":[{"year":1975,"month":3}]},{"title":"第二部分 地主阶级转向保守时期儒法斗争的内容和形式的演变（公元前48年——公元907年） 第七章 两晋南北朝时期儒法斗争的表现形式和特点（公元265——589年）","authors":["国营第三五六厂、云南大学理论组"],"page_start":187,"page_end":221,"dates":[{"year":1975,"month":3}]},{"title":"第二部分 地主阶级转向保守时期儒法斗争的内容和形式的演变（公元前48年——公元907年） 第八章 隋唐五代时期的儒法斗争","authors":["国营第三五六厂、云南大学理论组"],"page_start":221,"page_end":245,"dates":[{"year":1975,"month":3}]},{"title":"第三部分 封建社会向后期过渡时期的儒法斗争（宋元明清 公元960——1840年） 第九章 宋元时期的儒法斗争","authors":["国营第三五六厂、云南大学理论组"],"page_start":246,"page_end":276,"dates":[{"year":1975,"month":3}]},{"title":"第三部分 封建社会向后期过渡时期的儒法斗争（宋元明清 公元960——1840年） 第十章 明清时期的儒法斗争","authors":["国营第三五六厂、云南大学理论组"],"page_start":276,"page_end":322,"dates":[{"year":1975,"month":3}]},{"title":"第四部分 鸦片战争至“五四”运动前反孔尊孔的斗争（公元1840——1919年） 第十一章 太平天国的反孔斗争","authors":["国营第三五六厂、云南大学理论组"],"page_start":323,"page_end":341,"dates":[{"year":1975,"month":3}]},{"title":"第四部分 鸦片战争至“五四”运动前反孔尊孔的斗争（公元1840——1919年） 第十二章 辛亥革命前资产阶级改良派对封建顽固势力的斗争","authors":["国营第三五六厂、云南大学理论组"],"page_start":341,"page_end":355,"dates":[{"year":1975,"month":3}]},{"title":"第四部分 鸦片战争至“五四”运动前反孔尊孔的斗争（公元1840——1919年） 第十三章 辛亥革命时期资产阶级革命派对保皇派的斗争","authors":["国营第三五六厂、云南大学理论组"],"page_start":355,"page_end":373,"dates":[{"year":1975,"month":3}]},{"title":"第四部分 鸦片战争至“五四”运动前反孔尊孔的斗争（公元1840——1919年） 第十四章 辛亥革命后反尊孔反复辟反卖国的斗争","authors":["国营第三五六厂、云南大学理论组"],"page_start":373,"page_end":390,"dates":[{"year":1975,"month":3}]}],
      ocr: {"content_thresholds":[0,0.072,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/a0e88e5f-b7fa-454f-b3eb-da261bd4d34f.pdf'),
  },
  {
    entity: {
      id: 'b6d68afa-47f6-48f4-922a-48a29a80c878',
      name: '中国古代史（下）（南京大学历史系1976年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/b6d68afa-47f6-48f4-922a-48a29a80c878.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"第五编 封建社会衰落阶段（从明朝后期到清朝前期——鸦片战争前） 第一章 明朝后期商品经济的发展和政治思想文化领域的斗争（公元1522——1626年）","authors":["南京大学历史系"],"page_start":10,"page_end":89,"dates":[{"year":1976,"month":10}]},{"title":"第五编 封建社会衰落阶段（从明朝后期到清朝前期——鸦片战争前） 第二章 明末清初“天崩地解”的农民革命战争和社会进步思潮（公元1627——1644年）","authors":["南京大学历史系"],"page_start":90,"page_end":211,"dates":[{"year":1976,"month":10}]},{"title":"第五编 封建社会衰落阶段（从明朝后期到清朝前期——鸦片战争前） 第三章 清朝前期统一多民族国家的巩固和封建社会的没落（公元1664——1840年）","authors":["南京大学历史系"],"page_start":212,"page_end":413,"dates":[{"year":1976,"month":10}]},{"title":"中国古代历史年表","authors":["南京大学历史系"],"page_start":414,"page_end":415,"dates":[{"year":1976,"month":10}]},{"title":"编后记","authors":["南京大学历史系"],"page_start":508,"page_end":509,"dates":[{"year":1977,"month":6}]}],
      ocr: {"content_thresholds":[0,0.132,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/b6d68afa-47f6-48f4-922a-48a29a80c878.pdf'),
  },
  {
    entity: {
      id: '048e4966-0423-4620-8c56-ba095218faf6',
      name: '中国古代史（中）（南京大学历史系1976年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/048e4966-0423-4620-8c56-ba095218faf6.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"第四编 封建社会螺旋式缓慢发展阶段（从东汉到明朝前期） 第五章 隋朝的统一和隋末农民战争（公元581——618年）","authors":["南京大学历史系"],"page_start":12,"page_end":64,"dates":[{"year":1976,"month":7}]},{"title":"第四编 封建社会螺旋式缓慢发展阶段（从东汉到明朝前期） 第六章 唐朝前期封建国家的强盛（公元618——741年）","authors":["南京大学历史系"],"page_start":65,"page_end":147,"dates":[{"year":1976,"month":7}]},{"title":"第四编 封建社会螺旋式缓慢发展阶段（从东汉到明朝前期） 第七章 唐朝后期封建统治的衰落（公元742——858年）","authors":["南京大学历史系"],"page_start":148,"page_end":242,"dates":[{"year":1976,"month":7}]},{"title":"第四编 封建社会螺旋式缓慢发展阶段（从东汉到明朝前期） 第八章 唐末农民大起义和五代十国的短暂分裂（公元859——960年）","authors":["南京大学历史系"],"page_start":148,"page_end":242,"dates":[{"year":1976,"month":7}]},{"title":"第四编 封建社会螺旋式缓慢发展阶段（从东汉到明朝前期） 第八章 唐末农民大起义和五代十国的短暂分裂（公元859——960年）","authors":["南京大学历史系"],"page_start":243,"page_end":291,"dates":[{"year":1976,"month":7}]},{"title":"第四编 封建社会螺旋式缓慢发展阶段（从东汉到明朝前期） 第九章 北末、辽、西夏并立时期的阶级矛盾和民族矛盾（公元960——1127年）","authors":["南京大学历史系"],"page_start":292,"page_end":353,"dates":[{"year":1976,"month":7}]},{"title":"第四编 封建社会螺旋式缓慢发展阶段（从东汉到明朝前期） 第十章 南宋、金并立时期的阶级矛盾和民族矛盾（公元1127——1234年）","authors":["南京大学历史系"],"page_start":354,"page_end":430,"dates":[{"year":1976,"month":7}]},{"title":"第四编 封建社会螺旋式缓慢发展阶段（从东汉到明朝前期） 第十一章 元朝的大统一和元末农民战争（公元1206——1368年）","authors":["南京大学历史系"],"page_start":431,"page_end":498,"dates":[{"year":1976,"month":7}]},{"title":"第四编 封建社会螺旋式缓慢发展阶段（从东汉到明朝前期） 第十二章 明朝前期封建统治的加强和农民的反封建斗争（公元1368——1521年）","authors":["南京大学历史系"],"page_start":499,"page_end":583,"dates":[{"year":1976,"month":7}]}],
      ocr: {"content_thresholds":[0,0.084,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/048e4966-0423-4620-8c56-ba095218faf6.pdf'),
  },
  {
    entity: {
      id: '718bf680-eb73-49c3-aa65-2bcef31bd511',
      name: '中国古代史（中）（南京大学历史系1976年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/718bf680-eb73-49c3-aa65-2bcef31bd511.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"第一编 原始社会（60万年前——4000年前） 第一章 中国历史的开端","authors":["南京大学历史系"],"page_start":16,"page_end":28,"dates":[{"year":1975,"month":9}]},{"title":"第一编 原始社会（60万年前——4000年前） 第二章 母系氏族社会","authors":["南京大学历史系"],"page_start":29,"page_end":51,"dates":[{"year":1975,"month":9}]},{"title":"第一编 原始社会（60万年前——4000年前） 第三章 父系氏族社会","authors":["南京大学历史系"],"page_start":52,"page_end":71,"dates":[{"year":1975,"month":9}]},{"title":"第二编 奴隶社会（约公元前21世记——公元前5世记） 第一章 奴隶社会的开端——夏代（约公元前21世记——公元前17世记）","authors":["南京大学历史系"],"page_start":72,"page_end":81,"dates":[{"year":1975,"month":9}]},{"title":"第二编 奴隶社会（约公元前21世记——公元前5世记） 第二章 商代奴隶制社会的发展（约公元前17世记——公元前11世记）","authors":["南京大学历史系"],"page_start":82,"page_end":103,"dates":[{"year":1975,"month":9}]},{"title":"第二编 奴隶社会（约公元前21世记——公元前5世记） 第三章 西周的奴隶社会（约公元前11世记——前771年）","authors":["南京大学历史系"],"page_start":104,"page_end":124,"dates":[{"year":1975,"month":9}]},{"title":"第二编 奴隶社会（约公元前21世记——公元前5世记） 第四章 由奴隶制向封建制转变的春秋时期（约公元前770年——前476年）","authors":["南京大学历史系"],"page_start":125,"page_end":154,"dates":[{"year":1975,"month":9}]},{"title":"第三编 封建社会上升阶段（从战国、秦到西汉） 第一章 战国时代封建国家的形成（公元前475——前221年）","authors":["南京大学历史系"],"page_start":155,"page_end":204,"dates":[{"year":1975,"month":9}]},{"title":"第三编 封建社会上升阶段（从战国、秦到西汉） 第二章 秦朝统一的中央集权封建国家的建立","authors":["南京大学历史系"],"page_start":205,"page_end":243,"dates":[{"year":1975,"month":9}]},{"title":"第三编 封建社会上升阶段（从战国、秦到西汉） 第三章 法家路线促进西汉时期封建政治、经济、文化的发展（公元前206——公元25年）","authors":["南京大学历史系"],"page_start":244,"page_end":357,"dates":[{"year":1975,"month":9}]},{"title":"第四编 封建社会螺旋式缓慢发展阶段（从东汉到明朝前期） 第一章 东汉豪强大地主的尊儒反法和各族人民的反抗（公元25——184年）","authors":["南京大学历史系"],"page_start":358,"page_end":421,"dates":[{"year":1975,"month":9}]},{"title":"第四编 封建社会螺旋式缓慢发展阶段（从东汉到明朝前期） 第二章 从黄巾大起义、三国分立到西晋统一（公元184——316年）","authors":["南京大学历史系"],"page_start":422,"page_end":479,"dates":[{"year":1975,"month":9}]},{"title":"第四编 封建社会螺旋式缓慢发展阶段（从东汉到明朝前期） 第三章 东晋、南朝时期南方社会经济的开发（公元317——589年）","authors":["南京大学历史系"],"page_start":480,"page_end":531,"dates":[{"year":1975,"month":9}]},{"title":"第四编 封建社会螺旋式缓慢发展阶段（从东汉到明朝前期） 第四章 十六国、北朝时期北方各族人民的融合（公元304——589年）","authors":["南京大学历史系"],"page_start":532,"page_end":602,"dates":[{"year":1975,"month":9}]}],
      ocr: {"content_thresholds":[0,0.096,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/718bf680-eb73-49c3-aa65-2bcef31bd511.pdf'),
  },
  {
    entity: {
      id: 'ad5abecd-54e6-488a-8bc0-1c720f757f33',
      name: '哪个东方才是红的？毛主义在苏联及东欧的存在（1956-1980）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/ad5abecd-54e6-488a-8bc0-1c720f757f33.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"摘要","authors":["安德鲁·M·斯密斯"],"page_start":1,"page_end":1,"dates":[{"year":2017}]},{"title":"引言","authors":["安德鲁·M·斯密斯"],"page_start":2,"page_end":6,"dates":[{"year":2017}]},{"title":"第一章 不易的联盟","authors":["安德鲁·M·斯密斯"],"page_start":7,"page_end":10,"dates":[{"year":2017}]},{"title":"第二章 去斯大林化和中苏决裂的开始","authors":["安德鲁·M·斯密斯"],"page_start":11,"page_end":13,"dates":[{"year":2017}]},{"title":"第三章 异端思想者（Inakomisl Yashchii）：苏联境内反修共产主义者","authors":["安德鲁·M·斯密斯"],"page_start":14,"page_end":36,"dates":[{"year":2017}]},{"title":"第四章 战友：中国和阿尔巴尼亚","authors":["安德鲁·M·斯密斯"],"page_start":37,"page_end":41,"dates":[{"year":2017}]},{"title":"第五章 保加利亚的喧嚣：1965 年的政变企图和1968年的世界青年学生节","authors":["安德鲁·M·斯密斯"],"page_start":42,"page_end":46,"dates":[{"year":2017}]},{"title":"第六章 变成“中国人”：毛主义在德意志民主共和国","authors":["安德鲁·M·斯密斯"],"page_start":47,"page_end":53,"dates":[{"year":2017}]},{"title":"第七章 被审判的毛：卡达尔时代的匈牙利毛主义学生","authors":["安德鲁·M·斯密斯"],"page_start":54,"page_end":60,"dates":[{"year":2017}]},{"title":"第八章 卡齐米日·米雅尔不寻常的一生：波兰毛主义者在1960至1970年间","authors":["安德鲁·M·斯密斯"],"page_start":61,"page_end":66,"dates":[{"year":2017}]},{"title":"结论：对历史和东欧马克思主义单一的神话的质疑","authors":["安德鲁·M·斯密斯"],"page_start":67,"page_end":68,"dates":[{"year":2017}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.178,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/ad5abecd-54e6-488a-8bc0-1c720f757f33.pdf'),
  },
  {
    entity: {
      id: '62c6dac1-786b-4b09-ac44-7808f29b007c',
      name: '资本主义是怎样在苏联复辟的（上海人民出版社1975年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/62c6dac1-786b-4b09-ac44-7808f29b007c.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"译者的话","authors":["上海外国语学院"],"page_start":9,"page_end":9,"dates":[{"year":1975}]},{"title":"前言","authors":["革命联盟"],"page_start":13,"page_end":18,"dates":[{"year":1974,"month":10}]},{"title":"第一章 几个理论问题","authors":["革命联盟"],"page_start":19,"page_end":38,"dates":[{"year":1974,"month":10}]},{"title":"第二章 资本主义复辟的根源和赫鲁晓夫的上台","authors":["革命联盟"],"page_start":39,"page_end":77,"dates":[{"year":1974,"month":10}]},{"title":"第三章 勃列日涅夫和柯西金统治下的苏联经济——资本主义生产关系的全面复辟","authors":["革命联盟"],"page_start":78,"page_end":167,"dates":[{"year":1974,"month":10}]},{"title":"第四章 苏联社会帝国主义在全世界","authors":["革命联盟"],"page_start":168,"page_end":231,"dates":[{"year":1974,"month":10}]},{"title":"第五章 苏联社会帝国主义统治下的日常生活","authors":["革命联盟"],"page_start":232,"page_end":292,"dates":[{"year":1974,"month":10}]},{"title":"第六章 苏联人民的回击","authors":["革命联盟"],"page_start":293,"page_end":326,"dates":[{"year":1974,"month":10}]},{"title":"第七章 文化革命和社会主义阶段中的阶级斗争","authors":["革命联盟"],"page_start":327,"page_end":355,"dates":[{"year":1974,"month":10}]},{"title":"第八章 结论——社会帝国主义在苏联出现的意义","authors":["革命联盟"],"page_start":356,"page_end":370,"dates":[{"year":1974,"month":10}]},{"title":"革命联盟简介","authors":["革命联盟"],"page_start":371,"page_end":372,"dates":[{"year":1974,"month":10}]},{"title":"革命联盟简介","authors":["革命联盟"],"page_start":371,"page_end":372,"dates":[{"year":1974,"month":10}]}],
      ocr: {"content_thresholds":[0,0.09,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/62c6dac1-786b-4b09-ac44-7808f29b007c.pdf'),
  },
  {
    entity: {
      id: 'fba3c05a-b025-479e-afdb-935bfa2207c6',
      name: '联共（布）党史简明教程（人民出版社1975年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/fba3c05a-b025-479e-afdb-935bfa2207c6.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"导言","authors":["联共（布）中央特设委员会"],"page_start":12,"page_end":13,"dates":[{"year":1938}]},{"title":"第一章 为在俄国建立社会民主工党而斗争（1883-1901年）","authors":["联共（布）中央特设委员会"],"page_start":14,"page_end":39,"dates":[{"year":1938}]},{"title":"第二章 俄国社会民主工党的成立。党内布尔什维克和孟什维克两派的出现（1901-1904年）","authors":["联共（布）中央特设委员会"],"page_start":40,"page_end":69,"dates":[{"year":1938}]},{"title":"第三章 孟什维克和布尔什维克在日俄战争和俄国第一次革命时期（1904-1907年）","authors":["联共（布）中央特设委员会"],"page_start":70,"page_end":116,"dates":[{"year":1938}]},{"title":"第四章 孟什维克和布尔什维克在斯托雷平反动时期。布尔什维克正式形成为独立的马克思主义政党（1908-1912年）","authors":["联共（布）中央特设委员会"],"page_start":117,"page_end":172,"dates":[{"year":1938}]},{"title":"第五章 布尔什维克党在第一次帝国主义战争前工人运动高涨年代（1912-1914年）","authors":["联共（布）中央特设委员会"],"page_start":173,"page_end":188,"dates":[{"year":1938}]},{"title":"第六章 布尔什维克党在帝国主义战争时期。俄国第二次革命（1914—1917年3月）","authors":["联共（布）中央特设委员会"],"page_start":189,"page_end":212,"dates":[{"year":1938}]},{"title":"第七章 布尔什维克党在准备和进行十月社会主义革命时期（1917年4月—1918年）","authors":["联共（布）中央特设委员会"],"page_start":213,"page_end":259,"dates":[{"year":1938}]},{"title":"第八章 布尔什维克党在外国武装干涉和国内战争时期（1918—1920年）","authors":["联共（布）中央特设委员会"],"page_start":260,"page_end":284,"dates":[{"year":1938}]},{"title":"第九章 布尔什维克党在过渡到恢复国民经济的和平工作时期（1921—1925年）","authors":["联共（布）中央特设委员会"],"page_start":285,"page_end":319,"dates":[{"year":1938}]},{"title":"第十章 布尔什维克党为实现国家社会主义工业化而斗争（1926—1929年）","authors":["联共（布）中央特设委员会"],"page_start":320,"page_end":341,"dates":[{"year":1938}]},{"title":"第十一章 布尔什维克党为实现农业集体化而斗争（1930—1934年）","authors":["联共（布）中央特设委员会"],"page_start":342,"page_end":374,"dates":[{"year":1938}]},{"title":"第十二章 布尔什维克党为完成社会主义社会建设和实施新宪法而斗争（1935—1937年）","authors":["联共（布）中央特设委员会"],"page_start":375,"page_end":398,"dates":[{"year":1938}]},{"title":"结束语","authors":["联共（布）中央特设委员会"],"page_start":399,"page_end":410,"dates":[{"year":1938}]}],
      ocr: {"content_thresholds":[0,0.102,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/fba3c05a-b025-479e-afdb-935bfa2207c6.pdf'),
  },
  {
    entity: {
      id: 'e06f9143-cb53-44ff-8ee0-693133b1388b',
      name: '无产阶级革命和叛徒考茨基（人民出版社1964年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/e06f9143-cb53-44ff-8ee0-693133b1388b.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"无产阶级革命和叛徒考茨基","authors":["列宁"],"page_start":6,"page_end":103,"is_range_date":true,"dates":[{"year":1918,"month":10},{"year":1918,"month":11}]},{"title":"注释","authors":[],"page_start":104,"page_end":109,"dates":[]}],
      ocr: {"content_thresholds":[0,0.132,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/e06f9143-cb53-44ff-8ee0-693133b1388b.pdf'),
  },
  {
    entity: {
      id: '9d14c6e6-3c6d-4652-a2ca-61747cd7cd29',
      name: '社会民主党在民主革命中的两种策略（人民出版社1971年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/9d14c6e6-3c6d-4652-a2ca-61747cd7cd29.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"社会民主党在民主革命中的两种策略","authors":["列宁"],"page_start":7,"page_end":124,"is_range_date":true,"dates":[{"year":1905,"month":6},{"year":1905,"month":7}]},{"title":"注释","authors":[],"page_start":125,"page_end":130,"dates":[]}],
      ocr: {"content_thresholds":[0,0.108,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/9d14c6e6-3c6d-4652-a2ca-61747cd7cd29.pdf'),
  },
  {
    entity: {
      id: 'da59c86f-1b55-41ef-b159-f2beb5d0ab7b',
      name: '党的基础知识（上海人民出版社1974年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/da59c86f-1b55-41ef-b159-f2beb5d0ab7b.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"一 党的性质","authors":["《党的基础知识》编写组"],"page_start":7,"page_end":15,"dates":[{"year":1974}]},{"title":"二 党的指导思想","authors":["《党的基础知识》编写组"],"page_start":16,"page_end":26,"dates":[{"year":1974}]},{"title":"三 党的基本纲领和最终目的","authors":["《党的基础知识》编写组"],"page_start":27,"page_end":35,"dates":[{"year":1974}]},{"title":"四 党的基本路线","authors":["《党的基础知识》编写组"],"page_start":36,"page_end":46,"dates":[{"year":1974}]},{"title":"五 党的“三要三不要”原则","authors":["《党的基础知识》编写组"],"page_start":47,"page_end":59,"dates":[{"year":1974}]},{"title":"六 党的一元化领导","authors":["《党的基础知识》编写组"],"page_start":60,"page_end":72,"dates":[{"year":1974}]},{"title":"七 党的民主集中制","authors":["《党的基础知识》编写组"],"page_start":73,"page_end":81,"dates":[{"year":1974}]},{"title":"八 党的纪律","authors":["《党的基础知识》编写组"],"page_start":82,"page_end":89,"dates":[{"year":1974}]},{"title":"九 党的三大作风","authors":["《党的基础知识》编写组"],"page_start":90,"page_end":103,"dates":[{"year":1974}]},{"title":"十 培养无产阶级革命事业接班人","authors":["《党的基础知识》编写组"],"page_start":104,"page_end":111,"dates":[{"year":1974}]},{"title":"十一 党的基层组织的任务","authors":["《党的基础知识》编写组"],"page_start":112,"page_end":121,"dates":[{"year":1974}]},{"title":"十二 党员的先锋模范作用","authors":["《党的基础知识》编写组"],"page_start":122,"page_end":128,"dates":[{"year":1974}]},{"title":"十三 入党条件和入党手续","authors":["《党的基础知识》编写组"],"page_start":129,"page_end":138,"dates":[{"year":1974}]},{"title":"十四 坚持无产阶级国际主义","authors":["《党的基础知识》编写组"],"page_start":139,"page_end":147,"dates":[{"year":1974}]},{"title":"后记","authors":["《党的基础知识》编写组"],"page_start":148,"page_end":148,"dates":[{"year":1973,"month":11}]}],
      ocr: {"content_thresholds":[0,0.079,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/da59c86f-1b55-41ef-b159-f2beb5d0ab7b.pdf'),
  },
  {
    entity: {
      id: '6e45e31f-cbd6-4dbc-9ad0-491193c71000',
      name: '城市工作手册',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/6e45e31f-cbd6-4dbc-9ad0-491193c71000.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"1.简介","authors":["印度共产党（毛主义）"],"page_start":5,"page_end":7,"dates":[{"year":2004}]},{"title":"2.印度城市","authors":["印度共产党（毛主义）"],"page_start":7,"page_end":19,"dates":[{"year":2004}]},{"title":"3.政策和指导方针","authors":["印度共产党（毛主义）"],"page_start":19,"page_end":89,"dates":[{"year":2004}]},{"title":"4.回顾我们的理解和实践","authors":["印度共产党（毛主义）"],"page_start":89,"page_end":103,"dates":[{"year":2004}]},{"title":"5.目前的任务","authors":["印度共产党（毛主义）"],"page_start":103,"page_end":112,"dates":[{"year":2004}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.186,"differential_paragraph_merge_strategy_threshold":0,"content_thresholds":[0,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/6e45e31f-cbd6-4dbc-9ad0-491193c71000.pdf'),
  },
  {
    entity: {
      id: '4a6c18bb-f796-45be-9fbd-46d7ce45fd94',
      name: '共产主义运动中的“左派”幼稚病（人民出版社1973年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/4a6c18bb-f796-45be-9fbd-46d7ce45fd94.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"共产主义运动中的“左派”幼稚病","authors":["列宁"],"page_start":7,"page_end":99,"is_range_date":true,"dates":[{"year":1920,"month":4},{"year":1920,"month":5}]},{"title":"注释","authors":[],"page_start":100,"page_end":103,"dates":[]}],
      ocr: {"content_thresholds":[0,0.072,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/4a6c18bb-f796-45be-9fbd-46d7ce45fd94.pdf'),
  },
  {
    entity: {
      id: 'c7eaace4-1838-4662-90ba-7b703b05d6ff',
      name: '怎么办？（人民出版社1965年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/c7eaace4-1838-4662-90ba-7b703b05d6ff.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"怎么办？","authors":["列宁"],"page_start":6,"page_end":185,"is_range_date":true,"dates":[{"year":1901},{"year":1902,"month":2}]},{"title":"注释","authors":[],"page_start":186,"page_end":193,"dates":[]}],
      ocr: {"content_thresholds":[0,0.102,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/c7eaace4-1838-4662-90ba-7b703b05d6ff.pdf'),
  },
  {
    entity: {
      id: 'fcd4f98d-789b-43d7-b468-453e2e756b34',
      name: '进一步，退两步（人民出版社1975年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/fcd4f98d-789b-43d7-b468-453e2e756b34.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"进一步，退两步","authors":["列宁"],"page_start":8,"page_end":225,"is_range_date":true,"dates":[{"year":1904,"month":2},{"year":1904,"month":5}]},{"title":"注释","authors":[],"page_start":226,"page_end":237,"dates":[]}],
      ocr: {"content_thresholds":[0,0.124,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/fcd4f98d-789b-43d7-b468-453e2e756b34.pdf'),
  },
  {
    entity: {
      id: '917cec71-24c6-44a1-96b6-dd99472d1318',
      name: '资本论 第三卷（下）（人民出版社1975年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/917cec71-24c6-44a1-96b6-dd99472d1318.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"第三卷 资本主义生产的总过程（下） 第五篇 利润分为利息和企业主收入。生息资本（续） 第二十九章 银行资本的组成部分","authors":["马克思"],"page_start":9,"page_end":22,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第五篇 利润分为利息和企业主收入。生息资本（续） 第三十章 货币资本和现实资本。I","authors":["马克思"],"page_start":23,"page_end":43,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第五篇 利润分为利息和企业主收入。生息资本（续） 第三十一章 货币资本和现实资本。II（续）","authors":["马克思"],"page_start":44,"page_end":55,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第五篇 利润分为利息和企业主收入。生息资本（续） 第三十二章 货币资本和现实资本。III（续完）","authors":["马克思"],"page_start":56,"page_end":73,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第五篇 利润分为利息和企业主收入。生息资本（续） 第三十三章 信用制度下的流通手段","authors":["马克思"],"page_start":74,"page_end":102,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第五篇 利润分为利息和企业主收入。生息资本（续） 第三十四章 通货原理和1844年英国的银行立法","authors":["马克思"],"page_start":103,"page_end":123,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第五篇 利润分为利息和企业主收入。生息资本（续） 第三十五章 贵金属和汇兑率","authors":["马克思"],"page_start":124,"page_end":154,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第五篇 利润分为利息和企业主收入。生息资本（续） 第三十六章 资本主义以前的状态","authors":["马克思"],"page_start":155,"page_end":176,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第六篇 超额利润转化为地租 第三十七章 导论","authors":["马克思"],"page_start":177,"page_end":204,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第六篇 超额利润转化为地租 第三十八章 级差地租：概论","authors":["马克思"],"page_start":205,"page_end":214,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第六篇 超额利润转化为地租 第三十九章 级差地租的第一形式（级差地租I）","authors":["马克思"],"page_start":215,"page_end":242,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第六篇 超额利润转化为地租 第四十章 级差地租的第二形式（级差地租II）","authors":["马克思"],"page_start":243,"page_end":255,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第六篇 超额利润转化为地租 第四十一章 级差地租II——第一种情况：生产价格不变","authors":["马克思"],"page_start":256,"page_end":264,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第六篇 超额利润转化为地租 第四十二章 级差地租II——第二种情况：生产价格下降","authors":["马克思"],"page_start":265,"page_end":283,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第六篇 超额利润转化为地租 第四十三章 级差地租II——第三种情况：生产价格上涨。结论","authors":["马克思"],"page_start":284,"page_end":315,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第六篇 超额利润转化为地租 第四十四章 最坏耕地也有级差地租","authors":["马克思"],"page_start":316,"page_end":326,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第六篇 超额利润转化为地租 第四十五章 绝对地租","authors":["马克思"],"page_start":327,"page_end":354,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第六篇 超额利润转化为地租 第四十六章 建筑地段的地租。矿山地租。土地价格","authors":["马克思"],"page_start":355,"page_end":364,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第六篇 超额利润转化为地租 第四十七章 资本主义地租的产生","authors":["马克思"],"page_start":365,"page_end":401,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第七篇 各种收入及其源泉 第四十八章 三位一体的公式","authors":["马克思"],"page_start":403,"page_end":424,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第七篇 各种收入及其源泉 第四十九章 关于生产过程的分析","authors":["马克思"],"page_start":425,"page_end":447,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第七篇 各种收入及其源泉 第五十章 竞争的假象","authors":["马克思"],"page_start":448,"page_end":475,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（下） 第七篇 各种收入及其源泉 第五十一章 分配关系和生产关系","authors":["马克思"],"page_start":476,"page_end":483,"dates":[{"year":1894}]},{"title":"《资本论》第三卷增补","authors":["恩格斯"],"page_start":487,"page_end":514,"dates":[{"year":1894}]},{"title":"注释","authors":[],"page_start":517,"page_end":547,"dates":[]},{"title":"人名索引","authors":[],"page_start":548,"page_end":563,"dates":[]},{"title":"本卷中引用和提到的著作索引","authors":[],"page_start":564,"page_end":586,"dates":[]},{"title":"名目索引","authors":[],"page_start":587,"page_end":619,"dates":[]},{"title":"计量单位和货币名称表","authors":[],"page_start":620,"page_end":621,"dates":[]}],
      ocr: {"content_thresholds":[0.137,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/917cec71-24c6-44a1-96b6-dd99472d1318.pdf'),
  },
  {
    entity: {
      id: '0d15fab0-ab7e-4f18-9313-35fcfe01b71b',
      name: '资本论 第三卷（上）（人民出版社1975年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/0d15fab0-ab7e-4f18-9313-35fcfe01b71b.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"序言","authors":["恩格斯"],"page_start":9,"page_end":32,"dates":[{"year":1894,"month":10,"day":4}]},{"title":"第三卷 资本主义生产的总过程（上） 第一篇 剩余价值转化为利润和剩余价值率转化为利润率 第一章 成本价格和利润","authors":["马克思"],"page_start":35,"page_end":54,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第一篇 剩余价值转化为利润和剩余价值率转化为利润率 第二章 利润率","authors":["马克思"],"page_start":55,"page_end":63,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第一篇 剩余价值转化为利润和剩余价值率转化为利润率 第三章 利润率和剩余价值率的关系","authors":["马克思"],"page_start":64,"page_end":89,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第一篇 剩余价值转化为利润和剩余价值率转化为利润率 第四章 周转对利润率的影响","authors":["马克思"],"page_start":90,"page_end":97,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第一篇 剩余价值转化为利润和剩余价值率转化为利润率 第五章 不变资本使用上的节约","authors":["马克思"],"page_start":98,"page_end":126,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第一篇 剩余价值转化为利润和剩余价值率转化为利润率 第六章 价格变动的影响","authors":["马克思"],"page_start":127,"page_end":160,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第一篇 剩余价值转化为利润和剩余价值率转化为利润率 第七章 补充说明","authors":["马克思"],"page_start":161,"page_end":164,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第二篇 利润转化为平均利润 第八章 不同生产部门的资本的不同构成和由此引起的利润率的差别","authors":["马克思"],"page_start":165,"page_end":178,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第二篇 利润转化为平均利润 第九章 一般利润率（平均利润率）的形成和商品价值转化为生产价格","authors":["马克思"],"page_start":179,"page_end":198,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第二篇 利润转化为平均利润 第十章 一般利润率通过竞争而平均化。市场价格和市场价值。超额利润","authors":["马克思"],"page_start":199,"page_end":228,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第二篇 利润转化为平均利润 第十一章 工资的一般变动对生产价格的影响","authors":["马克思"],"page_start":229,"page_end":233,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第二篇 利润转化为平均利润 第十二章 补充说明","authors":["马克思"],"page_start":234,"page_end":240,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第三篇 利润率趋向下降的规律 第十三章 规律本身","authors":["马克思"],"page_start":241,"page_end":263,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第三篇 利润率趋向下降的规律 第十四章 起反作用的各种原因","authors":["马克思"],"page_start":264,"page_end":274,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第三篇 利润率趋向下降的规律 第十五章 规律的内部矛盾的展开","authors":["马克思"],"page_start":275,"page_end":320,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第四篇 商品资本和货币资本转化为商品经营资本和货币经营资本（商人资本） 第十六章 商品经营资本","authors":["马克思"],"page_start":303,"page_end":318,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第四篇 商品资本和货币资本转化为商品经营资本和货币经营资本（商人资本） 第十七章 商业利润","authors":["马克思"],"page_start":319,"page_end":343,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第四篇 商品资本和货币资本转化为商品经营资本和货币经营资本（商人资本） 第十八章 商人资本的周转。价格","authors":["马克思"],"page_start":344,"page_end":357,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第四篇 商品资本和货币资本转化为商品经营资本和货币经营资本（商人资本） 第十九章 货币经营资本","authors":["马克思"],"page_start":358,"page_end":366,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第四篇 商品资本和货币资本转化为商品经营资本和货币经营资本（商人资本） 第二十章 关于商人资本的历史考察","authors":["马克思"],"page_start":367,"page_end":382,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第五篇 利润分为利息和企业主收入。生息资本 第二十一章 生息资本","authors":["马克思"],"page_start":383,"page_end":406,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第五篇 利润分为利息和企业主收入。生息资本 第二十二章 利润的分割。利息率。“自然”利息率","authors":["马克思"],"page_start":407,"page_end":420,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第五篇 利润分为利息和企业主收入。生息资本 第二十三章 利息和企业主收入","authors":["马克思"],"page_start":421,"page_end":445,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第五篇 利润分为利息和企业主收入。生息资本 第二十四章 资本关系在生息资本形式上的外表化","authors":["马克思"],"page_start":446,"page_end":455,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第五篇 利润分为利息和企业主收入。生息资本 第二十五章 信用和虚拟资本","authors":["马克思"],"page_start":456,"page_end":473,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第五篇 利润分为利息和企业主收入。生息资本 第二十六章 货币资本的积累，它对利息率的影响","authors":["马克思"],"page_start":474,"page_end":497,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第五篇 利润分为利息和企业主收入。生息资本 第二十七章 信用在资本主义生产中的作用","authors":["马克思"],"page_start":498,"page_end":505,"dates":[{"year":1894}]},{"title":"第三卷 资本主义生产的总过程（上） 第五篇 利润分为利息和企业主收入。生息资本 第二十八章 流通手段和资本。图克和富拉顿的见解","authors":["马克思"],"page_start":506,"page_end":528,"dates":[{"year":1894}]}],
      ocr: {"content_thresholds":[0.137,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/0d15fab0-ab7e-4f18-9313-35fcfe01b71b.pdf'),
  },
  {
    entity: {
      id: '1db8950a-4bac-4d1f-b7fe-5a28cd61400d',
      name: '资本论 第二卷（人民出版社1975年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/1db8950a-4bac-4d1f-b7fe-5a28cd61400d.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"序言","authors":["恩格斯"],"page_start":9,"page_end":31,"dates":[{"year":1885,"month":5,"day":5}]},{"title":"第二版序言","authors":["恩格斯"],"page_start":32,"page_end":32,"dates":[{"year":1893,"month":7,"day":15}]},{"title":"第二卷 资本的流通过程 第一篇 资本形态变化及其循环 第一章 货币资本的循环","authors":["马克思"],"page_start":37,"page_end":80,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第一篇 资本形态变化及其循环 第二章 生产资本的循环","authors":["马克思"],"page_start":81,"page_end":106,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第一篇 资本形态变化及其循环 第三章 商品资本的循环","authors":["马克思"],"page_start":107,"page_end":121,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第一篇 资本形态变化及其循环 第四章 循环过程的三个公式","authors":["马克思"],"page_start":122,"page_end":143,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第一篇 资本形态变化及其循环 第五章 流通时间","authors":["马克思"],"page_start":144,"page_end":151,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第一篇 资本形态变化及其循环 第六章 流通费用","authors":["马克思"],"page_start":152,"page_end":176,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第二篇 资本周转 第七章 周转时间和周转次数","authors":["马克思"],"page_start":177,"page_end":181,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第二篇 资本周转 第八章 固定资本和流动资本","authors":["马克思"],"page_start":182,"page_end":209,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第二篇 资本周转 第九章 预付资本的总周转。周转的周期","authors":["马克思"],"page_start":210,"page_end":216,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第二篇 资本周转 第十章 关于固定资本和流动资本的理论。重农学派和亚当·斯密","authors":["马克思"],"page_start":217,"page_end":245,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第二篇 资本周转 第十一章 关于固定资本和流动资本的理论。李嘉图","authors":["马克思"],"page_start":246,"page_end":260,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第二篇 资本周转 第十二章 劳动期间","authors":["马克思"],"page_start":261,"page_end":271,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第二篇 资本周转 第十三章 生产时间","authors":["马克思"],"page_start":272,"page_end":281,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第二篇 资本周转 第十四章 流通时间","authors":["马克思"],"page_start":282,"page_end":290,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第二篇 资本周转 第十五章 周转时间对预付资本量的影响","authors":["马克思"],"page_start":291,"page_end":332,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第二篇 资本周转 第十六章 可变资本的周转","authors":["马克思"],"page_start":333,"page_end":360,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第二篇 资本周转 第十七章 剩余价值的流通","authors":["马克思"],"page_start":361,"page_end":394,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第三篇 社会总资本的再生产和流通 第十八章 导言","authors":["马克思"],"page_start":395,"page_end":403,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第三篇 社会总资本的再生产和流通 第十九章 前人对这个问题的阐述","authors":["马克思"],"page_start":404,"page_end":440,"dates":[{"year":1885}]},{"title":"第二卷 资本的流通过程 第三篇 社会总资本的再生产和流通 第二十一章 积累和扩大再生产","authors":["马克思"],"page_start":557,"page_end":598,"dates":[{"year":1885}]},{"title":"注释","authors":[],"page_start":601,"page_end":609,"dates":[]},{"title":"人名索引","authors":[],"page_start":610,"page_end":615,"dates":[]},{"title":"本卷中引用和提到的著作索引","authors":[],"page_start":616,"page_end":624,"dates":[]},{"title":"名目索引","authors":[],"page_start":625,"page_end":654,"dates":[]},{"title":"计量单位和货币名称表","authors":[],"page_start":655,"page_end":655,"dates":[]}],
      ocr: {"content_thresholds":[0.134,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/1db8950a-4bac-4d1f-b7fe-5a28cd61400d.pdf'),
  },
  {
    entity: {
      id: '25783b07-bb1f-4c6e-9ce7-55196d853a0c',
      name: '资本论 第一卷（二）（人民出版社1975年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/25783b07-bb1f-4c6e-9ce7-55196d853a0c.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"第一卷 资本的生产过程 第五篇 绝对剩余价值和相对剩余价值的生产 第十四章 绝对剩余价值和相对剩余价值","authors":["马克思"],"page_start":1,"page_end":12,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第五篇 绝对剩余价值和相对剩余价值的生产 第十五章 劳动力价格和剩余价值的量的变化","authors":["马克思"],"page_start":13,"page_end":25,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第五篇 绝对剩余价值和相对剩余价值的生产 第十六章 剩余价值率的各种公式","authors":["马克思"],"page_start":26,"page_end":30,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第六篇 工资 第十七章 劳动力的价值或价格转化为工资","authors":["马克思"],"page_start":31,"page_end":39,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第六篇 工资 第十八章 计时工资","authors":["马克思"],"page_start":40,"page_end":48,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第六篇 工资 第十九章 计件工资","authors":["马克思"],"page_start":49,"page_end":58,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第六篇 工资 第二十章 工资的国民差异","authors":["马克思"],"page_start":59,"page_end":66,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第七篇 资本的积累过程 第二十一章 简单再生产","authors":["马克思"],"page_start":67,"page_end":80,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第七篇 资本的积累过程 第二十二章 剩余价值转化为资本","authors":["马克思"],"page_start":81,"page_end":117,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第七篇 资本的积累过程 第二十三章 资本主义积累的一般规律","authors":["马克思"],"page_start":118,"page_end":226,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第七篇 资本的积累过程 第二十四章 所谓原始积累","authors":["马克思"],"page_start":227,"page_end":278,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第七篇 资本的积累过程 第二十五章 现代殖民理论","authors":["马克思"],"page_start":279,"page_end":289,"dates":[{"year":1867,"month":9}]},{"title":"注释","authors":[],"page_start":293,"page_end":324,"dates":[]},{"title":"人名索引","authors":[],"page_start":325,"page_end":356,"dates":[]},{"title":"本卷中引用和提到的著作索引","authors":[],"page_start":357,"page_end":406,"dates":[]},{"title":"名目索引","authors":[],"page_start":407,"page_end":428,"dates":[]},{"title":"计量单位和货币名称表","authors":[],"page_start":429,"page_end":430,"dates":[]}],
      ocr: {"content_thresholds":[0.134,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/25783b07-bb1f-4c6e-9ce7-55196d853a0c.pdf'),
  },
  {
    entity: {
      id: 'cfa8b5d5-ebd0-441b-9d76-9580abd066b7',
      name: '资本论 第一卷（一）（人民出版社1975年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/cfa8b5d5-ebd0-441b-9d76-9580abd066b7.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"第一版序言","authors":["马克思"],"page_start":16,"page_end":22,"dates":[{"year":1867,"month":7,"day":25}]},{"title":"第二版跋","authors":["马克思"],"page_start":23,"page_end":34,"dates":[{"year":1873,"month":1,"day":24}]},{"title":"法文版序言","authors":["马克思"],"page_start":35,"page_end":35,"dates":[{"year":1872,"month":3,"day":18}]},{"title":"法文版跋","authors":["马克思"],"page_start":38,"page_end":38,"dates":[{"year":1875,"month":4,"day":28}]},{"title":"英文版序言","authors":["恩格斯"],"page_start":42,"page_end":46,"dates":[{"year":1886,"month":11,"day":5}]},{"title":"第四版序言","authors":["恩格斯"],"page_start":47,"page_end":53,"dates":[{"year":1890,"month":6,"day":25}]},{"title":"第一卷 资本的生产过程 第一篇 商品和货币 第一章 商品","authors":["马克思"],"page_start":56,"page_end":110,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第一篇 商品和货币 第二章 交换过程","authors":["马克思"],"page_start":111,"page_end":120,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第一篇 商品和货币 第三章 货币或商品流通","authors":["马克思"],"page_start":121,"page_end":175,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第二篇 货币转化为资本 第四章 货币转化为资本","authors":["马克思"],"page_start":176,"page_end":209,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第三篇 绝对剩余价值的生产 第五章 劳动过程和价值增殖过程","authors":["马克思"],"page_start":210,"page_end":233,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第三篇 绝对剩余价值的生产 第六章 不变资本和可变资本","authors":["马克思"],"page_start":234,"page_end":246,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第三篇 绝对剩余价值的生产 第七章 剩余价值率","authors":["马克思"],"page_start":247,"page_end":266,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第三篇 绝对剩余价值的生产 第八章 工作日","authors":["马克思"],"page_start":267,"page_end":344,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第三篇 绝对剩余价值的生产 第九章 剩余价值率和剩余价值量","authors":["马克思"],"page_start":345,"page_end":354,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第四篇 相对剩余价值的生产 第十章 相对剩余价值的概念","authors":["马克思"],"page_start":356,"page_end":366,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第四篇 相对剩余价值的生产 第十一章 协作","authors":["马克思"],"page_start":367,"page_end":381,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第四篇 相对剩余价值的生产 第十二章 分工和工场手工业","authors":["马克思"],"page_start":382,"page_end":416,"dates":[{"year":1867,"month":9}]},{"title":"第一卷 资本的生产过程 第四篇 相对剩余价值的生产 第十三章 机器和大工业","authors":["马克思"],"page_start":417,"page_end":562,"dates":[{"year":1867,"month":9}]}],
      ocr: {"content_thresholds":[0.134,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/cfa8b5d5-ebd0-441b-9d76-9580abd066b7.pdf'),
  },
  {
    entity: {
      id: 'fc1f4280-a408-4802-b905-69179daca249',
      name: '雇佣劳动与资本（人民出版社1965年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/fc1f4280-a408-4802-b905-69179daca249.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"出版说明","authors":[],"page_start":4,"page_end":4,"dates":[{"year":1964,"month":3}]},{"title":"雇佣劳动与资本","authors":["马克思"],"page_start":7,"page_end":73,"dates":[{"year":1847,"month":12}]},{"title":"注释","authors":[],"page_start":75,"page_end":79,"dates":[]}],
      ocr: {"content_thresholds":[0,0.1,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/fc1f4280-a408-4802-b905-69179daca249.pdf'),
  },
  {
    entity: {
      id: '0926f4bc-4fe1-4cbe-8ae0-ad6a82bfaec3',
      name: '工资、价格和利润（人民出版社1974年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/0926f4bc-4fe1-4cbe-8ae0-ad6a82bfaec3.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"工资、价格和利润","authors":["马克思"],"page_start":10,"page_end":66,"is_range_date":true,"dates":[{"year":1865,"month":5},{"year":1865,"month":6,"day":27}]},{"title":"注释","authors":[],"page_start":67,"page_end":69,"dates":[]}],
      ocr: {"content_thresholds":[0,0.084,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/0926f4bc-4fe1-4cbe-8ae0-ad6a82bfaec3.pdf'),
  },
  {
    entity: {
      id: '0aade93c-c356-46d2-9807-b567596b7e45',
      name: '哲学笔记（人民出版社1974年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/0aade93c-c356-46d2-9807-b567596b7e45.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"马克思和恩格斯《神圣家族》一书摘要","authors":["列宁"],"page_start":8,"page_end":45,"dates":[{"year":1895}]},{"title":"弗·宇伯威格《哲学史概论》一书札记","authors":["列宁"],"page_start":46,"page_end":46,"dates":[{"year":1903}]},{"title":"弗·保尔《哲学引论》一书札记","authors":["列宁"],"page_start":47,"page_end":49,"dates":[{"year":1903}]},{"title":"关于恩·海克尔《生命的奇迹》和《宇宙之谜》的书评的札记","authors":["列宁"],"page_start":50,"page_end":50,"dates":[{"year":1904}]},{"title":"关于索尔邦图书馆中的自然科学和哲学书籍的札记","authors":["列宁"],"page_start":52,"page_end":56,"dates":[{"year":1904}]},{"title":"关于索尔邦图书馆中的自然科学和哲学书籍的札记","authors":["列宁"],"page_start":52,"page_end":56,"dates":[{"year":1909}]},{"title":"费尔巴哈《宗教本质讲演录》一书摘要","authors":["列宁"],"page_start":58,"page_end":86,"dates":[{"year":1909}]},{"title":"黑格尔《逻辑学》一书摘要","authors":["列宁"],"page_start":88,"page_end":106,"is_range_date":true,"dates":[{"year":1914,"month":9},{"year":1914,"month":12}]},{"title":"黑格尔《逻辑学》一书摘要","authors":["列宁"],"page_start":88,"page_end":264,"is_range_date":true,"dates":[{"year":1914,"month":9},{"year":1914,"month":12}]},{"title":"关于论述黑格尔《逻辑学》的各家著作的书评的札记","authors":["列宁"],"page_start":266,"page_end":274,"dates":[{"year":1914,"month":12}]},{"title":"黑格尔《哲学史讲演录》一书摘要","authors":["列宁"],"page_start":276,"page_end":346,"dates":[{"year":1915}]},{"title":"黑格尔《历史哲学讲演录》一书摘要","authors":["列宁"],"page_start":348,"page_end":360,"dates":[{"year":1915}]},{"title":"诺埃尔《黑格尔的逻辑学》一书札记","authors":["列宁"],"page_start":366,"page_end":373,"dates":[{"year":1915}]},{"title":"让·贝兰《物理化学论文。原理》一书札记","authors":["列宁"],"page_start":374,"page_end":374,"dates":[{"year":1914,"month":12}]},{"title":"盖诺夫《费尔巴哈的认识论和形而上学》一书札记","authors":["列宁"],"page_start":376,"page_end":378,"dates":[{"year":1914,"month":12}]},{"title":"福尔克曼《自然科学的认识论原理》一书札记","authors":["列宁"],"page_start":379,"page_end":380,"dates":[{"year":1915}]},{"title":"费尔伏恩《生物起源假说》一书札记","authors":["列宁"],"page_start":381,"page_end":382,"dates":[{"year":1915}]},{"title":"丹尔曼《我们的世界图画是怎祥构成的？》一书札记","authors":["列宁"],"page_start":383,"page_end":384,"dates":[{"year":1915}]},{"title":"路德维希·达姆施泰特《自然科学和技术历史指南》一书札记","authors":["列宁"],"page_start":385,"page_end":385,"dates":[{"year":1915}]},{"title":"拿破仑《思想》一书札记","authors":["列宁"],"page_start":386,"page_end":386,"dates":[{"year":1915}]},{"title":"阿尔都尔·埃利希·哈斯《现代物理学中的希腊化时期的精神》","authors":["列宁"],"page_start":387,"page_end":387,"dates":[{"year":1915}]},{"title":"泰奥多尔·里普斯《自然科学和世界观》一书札记","authors":["列宁"],"page_start":388,"page_end":388,"dates":[{"year":1915}]},{"title":"拉萨尔《爱非斯的晦涩哲人赫拉克利特的哲学》一书摘要","authors":["列宁"],"page_start":390,"page_end":409,"dates":[{"year":1915}]},{"title":"谈谈辩证法问题","authors":["列宁"],"page_start":410,"page_end":419,"dates":[{"year":1915}]},{"title":"亚里士多德《形而上学》一书摘要","authors":["列宁"],"page_start":420,"page_end":430,"dates":[{"year":1915}]},{"title":"关于费尔巴哈全集和黑格尔全集的卷次札记","authors":["列宁"],"page_start":431,"page_end":431,"is_range_date":true,"dates":[{"year":1914,"month":9},{"year":1914,"month":12}]},{"title":"费尔巴哈《对莱布尼茨哲学的叙述、分析和批判》一书摘要","authors":["列宁"],"page_start":432,"page_end":446,"dates":[{"year":1915}]},{"title":"普连厄《马克思和黑格尔》一书札记","authors":["列宁"],"page_start":447,"page_end":450,"dates":[{"year":1916}]},{"title":"读书札记","authors":["列宁"],"page_start":451,"page_end":455,"is_range_date":true,"dates":[{"year":1912},{"year":1916}]},{"title":"关于约翰·普连厄《马克思和黑格尔》的书评的札记","authors":["列宁"],"page_start":456,"page_end":456,"dates":[{"year":1913}]},{"title":"关于拉·巴·培里《现代哲学倾向》的书评的札记","authors":["列宁"],"page_start":457,"page_end":458,"dates":[{"year":1913,"month":4}]},{"title":"关于阿里奥塔《唯心主义对科学的反动》的书评的札记","authors":["列宁"],"page_start":459,"page_end":460,"dates":[{"year":1913}]},{"title":"关于希法亭（在《金融资本》一书中）论及马赫的言论的札记","authors":["列宁"],"page_start":461,"page_end":461,"dates":[{"year":1916,"month":6}]},{"title":"普列汉诺夫《马克思主义的基本问题》一书批注","authors":["列宁"],"page_start":464,"page_end":468,"dates":[{"year":1908,"month":5}]},{"title":"莱伊《现代哲学》一书批注","authors":["列宁"],"page_start":469,"page_end":543,"dates":[{"year":1909}]},{"title":"德波林〈辩证唯物主义》一书批注","authors":["列宁"],"page_start":544,"page_end":552,"dates":[{"year":1909}]},{"title":"舒里雅齐柯夫《西欧哲学对资本主义的辩护》一书批注","authors":["列宁"],"page_start":553,"page_end":571,"dates":[{"year":1908}]},{"title":"普列汉诺夫《尼·加·车尔尼雪夫斯基》一书批注","authors":["列宁"],"page_start":572,"page_end":633,"is_range_date":true,"dates":[{"year":1909,"month":10},{"year":1911,"month":4}]},{"title":"注释","authors":[],"page_start":634,"page_end":659,"dates":[]},{"title":"列宁在《哲学笔记》中引用和提到的书报杂志索引","authors":[],"page_start":660,"page_end":680,"dates":[]},{"title":"人名索引","authors":[],"page_start":681,"page_end":700,"dates":[]},{"title":"名目索引","authors":[],"page_start":701,"page_end":717,"dates":[]}],
      ocr: {"content_thresholds":[0.132,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/0aade93c-c356-46d2-9807-b567596b7e45.pdf'),
  },
  {
    entity: {
      id: 'b1daa337-79a3-40f9-ba73-7cbf948e0091',
      name: '伟大的创举（人民出版社1973年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/b1daa337-79a3-40f9-ba73-7cbf948e0091.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"伟大的创举","authors":["列宁"],"page_start":4,"page_end":28,"dates":[{"year":1919,"month":6,"day":28}]},{"title":"注释","authors":[],"page_start":29,"page_end":30,"dates":[]}],
      ocr: {"content_thresholds":[0,0.1,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/b1daa337-79a3-40f9-ba73-7cbf948e0091.pdf'),
  },
  {
    entity: {
      id: '6869e951-bde4-44a1-8348-dc6fc27cc26a',
      name: '青年团的任务（人民出版社1973年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/6869e951-bde4-44a1-8348-dc6fc27cc26a.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"青年团的任务","authors":["列宁"],"page_start":4,"page_end":22,"dates":[{"year":1920,"month":10,"day":5},{"year":1920,"month":10,"day":6},{"year":1920,"month":10,"day":7}]}],
      ocr: {"content_thresholds":[0,0.079,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/6869e951-bde4-44a1-8348-dc6fc27cc26a.pdf'),
  },
  {
    entity: {
      id: '959447a7-19ca-480b-b042-22c56f4bdb03',
      name: '国家与革命（人民出版社1976年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/959447a7-19ca-480b-b042-22c56f4bdb03.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"国家与革命","authors":["列宁"],"page_start":7,"page_end":121,"is_range_date":true,"dates":[{"year":1917,"month":8},{"year":1917,"month":9}]},{"title":"注释","authors":[],"page_start":123,"page_end":135,"dates":[]}],
      ocr: {"content_thresholds":[0,0.076,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/959447a7-19ca-480b-b042-22c56f4bdb03.pdf'),
  },
  {
    entity: {
      id: '30e9a4e4-86b8-4204-b1c0-f68199f133f1',
      name: '政治经济学（社会主义部分）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/30e9a4e4-86b8-4204-b1c0-f68199f133f1.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"第一篇 总论 第一章 社会主义社会的性质","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":13,"page_end":52,"dates":[{"year":1976,"month":4}]},{"title":"第二篇 社会主义的生产过程 第二章 社会主义所有制的建立","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":53,"page_end":95,"dates":[{"year":1976,"month":4}]},{"title":"第二篇 社会主义的生产过程 第三章 社会主义所有制的巩固和发展","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":96,"page_end":131,"dates":[{"year":1976,"month":4}]},{"title":"第二篇 社会主义的生产过程 第四章 社会主义生产的一般特征","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":132,"page_end":160,"dates":[{"year":1976,"month":4}]},{"title":"第二篇 社会主义的生产过程 第五章 社会主义生产中人们的相互关系","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":161,"page_end":195,"dates":[{"year":1976,"month":4}]},{"title":"第二篇 社会主义的生产过程 第六章 社会主义生产的高速度发展和节约","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":196,"page_end":230,"dates":[{"year":1976,"month":4}]},{"title":"第三篇 社会主义的流通过程 第七章 社会主义产品的交换","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":231,"page_end":269,"dates":[{"year":1976,"month":4}]},{"title":"第三篇 社会主义的流通过程 第八章 社会主义制度下的货币流通和价值规律","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":270,"page_end":294,"dates":[{"year":1976,"month":4}]},{"title":"第四篇 社会主义的分配过程 第九章 社会主义社会个人消费品的分配","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":295,"page_end":325,"dates":[{"year":1976,"month":4}]},{"title":"第五篇 社会主义生产的总过程 第十章 社会主义再生产和国民经济有计划按比例发展","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":326,"page_end":358,"dates":[{"year":1976,"month":4}]},{"title":"第五篇 社会主义生产的总过程 第十一章 社会主义农业、轻工业和重工业","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":359,"page_end":388,"dates":[{"year":1976,"month":4}]},{"title":"第五篇 社会主义生产的总过程 第十二章 社会主义国民收入的分配","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":389,"page_end":412,"dates":[{"year":1976,"month":4}]},{"title":"第六篇 社会主义和共产主义 第十三章 从社会主义社会向共产主义社会过渡","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":413,"page_end":432,"dates":[{"year":1976,"month":4}]},{"title":"后记","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":433,"page_end":433,"dates":[{"year":1976,"month":4}]}],
      ocr: {"content_thresholds":[0,0.132,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/30e9a4e4-86b8-4204-b1c0-f68199f133f1.pdf'),
  },
  {
    entity: {
      id: '86b9ca9f-61be-4a2e-b545-8bfb7c6fe4ac',
      name: '政治经济学（帝国主义部分）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/86b9ca9f-61be-4a2e-b545-8bfb7c6fe4ac.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"序言","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":6,"page_end":10,"dates":[{"year":1976,"month":3}]},{"title":"第一章 帝国主义是垄断的资本主义","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":11,"page_end":80,"dates":[{"year":1976,"month":3}]},{"title":"第二章 帝国主义是寄生的或腐朽的资本主义","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":81,"page_end":104,"dates":[{"year":1976,"month":3}]},{"title":"第三章 帝国主义是垂死的资本主义","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":105,"page_end":172,"dates":[{"year":1976,"month":3}]}],
      ocr: {"content_thresholds":[0,0.132,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/86b9ca9f-61be-4a2e-b545-8bfb7c6fe4ac.pdf'),
  },
  {
    entity: {
      id: 'd07180b9-ae42-4bdb-bae1-9263e125fa2c',
      name: '政治经济学概论（人民出版社1973年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/d07180b9-ae42-4bdb-bae1-9263e125fa2c.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"第一章 商品和货币","authors":["徐禾"],"page_start":7,"page_end":80,"dates":[{"year":1973,"month":5}]},{"title":"第二章 资本和剩余价值","authors":["徐禾"],"page_start":81,"page_end":133,"dates":[{"year":1973,"month":5}]},{"title":"第三章 工资","authors":["徐禾"],"page_start":134,"page_end":164,"dates":[{"year":1973,"month":5}]},{"title":"第四章 资本积累及其历史趋势","authors":["徐禾"],"page_start":165,"page_end":218,"dates":[{"year":1973,"month":5}]},{"title":"第五章 资本的循环和周转","authors":["徐禾"],"page_start":219,"page_end":262,"dates":[{"year":1973,"month":5}]},{"title":"第六章 社会资本的再生产和流通","authors":["徐禾"],"page_start":263,"page_end":297,"dates":[{"year":1973,"month":5}]},{"title":"第七章 平均利润和生产价格","authors":["徐禾"],"page_start":298,"page_end":334,"dates":[{"year":1973,"month":5}]},{"title":"第八章 商业资本和商业利润","authors":["徐禾"],"page_start":335,"page_end":374,"dates":[{"year":1973,"month":5}]},{"title":"第九章 借贷资本和信用","authors":["徐禾"],"page_start":375,"page_end":422,"dates":[{"year":1973,"month":5}]},{"title":"第十章 地租","authors":["徐禾"],"page_start":423,"page_end":472,"dates":[{"year":1973,"month":5}]},{"title":"第十一章 资本主义的经济危机","authors":["徐禾"],"page_start":473,"page_end":508,"dates":[{"year":1973,"month":5}]},{"title":"后记","authors":["徐禾"],"page_start":509,"page_end":509,"dates":[{"year":1973,"month":5}]}],
      ocr: {"content_thresholds":[0.18,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/d07180b9-ae42-4bdb-bae1-9263e125fa2c.pdf'),
  },
  {
    entity: {
      id: 'afbe42bc-f6ab-4d3b-8acc-e0da4e0b7ab2',
      name: '政治经济学（资本主义部分）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/afbe42bc-f6ab-4d3b-8acc-e0da4e0b7ab2.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"绪论","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":10,"page_end":30,"dates":[{"year":1976,"month":2}]},{"title":"资本主义以前各生产方式 第一章 原始公社制度","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":31,"page_end":51,"dates":[{"year":1976,"month":2}]},{"title":"资本主义以前各生产方式 第二章 奴隶制度","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":52,"page_end":71,"dates":[{"year":1976,"month":2}]},{"title":"资本主义以前各生产方式 第三章 封建制度","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":72,"page_end":93,"dates":[{"year":1976,"month":2}]},{"title":"资本主义生产方式（垄断前阶段） 第一篇资本的生产过程 第一章商品和货币","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":94,"page_end":135,"dates":[{"year":1976,"month":2}]},{"title":"资本主义生产方式（垄断前阶段） 第一篇 资本的生产过程 第二章 资本和剩余价值","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":94,"page_end":135,"dates":[{"year":1976,"month":2}]},{"title":"资本主义生产方式（垄断前阶段） 第一篇 资本的生产过程 第二章 资本和剩余价值","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":136,"page_end":195,"dates":[{"year":1976,"month":2}]},{"title":"资本主义生产方式（垄断前阶段） 第一篇 资本的生产过程 第三章 资本积累和无产阶级贫困化","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":196,"page_end":238,"dates":[{"year":1976,"month":2}]},{"title":"资本主义生产方式（垄断前阶段） 第二篇 资本的流通过程 第四章 资本的循环和周转","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":239,"page_end":266,"dates":[{"year":1976,"month":2}]},{"title":"资本主义生产方式（垄断前阶段） 第二篇 资本的流通过程 第五章 社会资本的再生产与流通","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":267,"page_end":287,"dates":[{"year":1976,"month":2}]},{"title":"资本主义生产方式（垄断前阶段） 第三篇 资本主义生产的总过程 第六章 剩余价值的瓜分","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":288,"page_end":373,"dates":[{"year":1976,"month":2}]},{"title":"资本主义生产方式（垄断前阶段） 第三篇 资本主义生产的总过程 第七章 资本主义的经济危机","authors":["南开大学政治经济学系","南开大学经济研究所"],"page_start":374,"page_end":396,"dates":[{"year":1976,"month":2}]}],
      ocr: {"content_thresholds":[0,0.096,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/afbe42bc-f6ab-4d3b-8acc-e0da4e0b7ab2.pdf'),
  },
  {
    entity: {
      id: 'b61f4938-8d62-4c83-97b9-78884ede4724',
      name: '中国共产党两条路线斗争史讲义',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/b61f4938-8d62-4c83-97b9-78884ede4724.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"前言","authors":["安徽师范大学政教系"],"page_start":4,"page_end":8,"dates":[{"year":1976,"month":7}]},{"title":"第一章 中国共产党的成立。毛主席的革命路线同陈独秀右倾机会主义路线的斗争","authors":["安徽师范大学政教系"],"page_start":14,"page_end":54,"dates":[{"year":1976,"month":7}]},{"title":"第二章 毛主席开辟农村包围城市、武装夺取政权的革命道路。反对瞿秋白、李立三、罗章龙、王明、张国焘“左”、右倾机会主义路线的斗争","authors":["安徽师范大学政教系"],"page_start":55,"page_end":119,"dates":[{"year":1976,"month":7}]},{"title":"第三章 毛主席领导全党坚持抗日民族统一战线中的独立自主原则，实行人民战争，建立抗日根据地，打败日本侵略者，反对王明右倾投降主义路线的斗争","authors":["安徽师范大学政教系"],"page_start":120,"page_end":163,"dates":[{"year":1976,"month":7}]},{"title":"第四章 毛主席领导全国人民夺取民主革命胜利，同刘少奇一伙右倾机会主义路线的斗争","authors":["安徽师范大学政教系"],"page_start":164,"page_end":207,"dates":[{"year":1976,"month":7}]},{"title":"第五章 中国社会主义革命的开始。毛主席领导全国人民实现党在过渡时期的总路线，反对刘少奇“巩固新民主主义秩序”的反动纲领和高岗、饶漱石反党联盟的斗争","authors":["安徽师范大学政教系"],"page_start":208,"page_end":249,"dates":[{"year":1976,"month":7}]},{"title":"第六章 毛主席关于无产阶级专政下继续革命的伟大理论。党的社会主义建设总路线。反对彭德怀反党集团和刘少奇反革命修正主义路线的斗争","authors":["安徽师范大学政教系"],"page_start":250,"page_end":281,"dates":[{"year":1976,"month":7}]},{"title":"第七章 党在社会主义历史阶段的基本路线。毛主席亲自发动和领导无产阶级文化大革命，粉碎刘少奇叛徒集团和林彪反党集团的斗争","authors":["安徽师范大学政教系"],"page_start":282,"page_end":337,"dates":[{"year":1976,"month":7}]},{"title":"结束语","authors":["安徽师范大学政教系"],"page_start":338,"page_end":345,"dates":[{"year":1976,"month":7}]},{"title":"附录","authors":["安徽师范大学政教系"],"page_start":346,"page_end":353,"dates":[{"year":1976,"month":7}]}],
      ocr: {"content_thresholds":[0,0.084,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/b61f4938-8d62-4c83-97b9-78884ede4724.pdf'),
  },
  {
    entity: {
      id: 'a426be33-6310-4446-aa89-95462b693ead',
      name: '中国共产党两条路线斗争史讲义',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/a426be33-6310-4446-aa89-95462b693ead.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"前言","authors":["安徽师范大学政教系"],"page_start":4,"page_end":8,"dates":[{"year":1976,"month":7}]},{"title":"第一章 中国共产党的成立。毛主席的革命路线同陈独秀右倾机会主义路线的斗争","authors":["安徽师范大学政教系"],"page_start":14,"page_end":54,"dates":[{"year":1976,"month":7}]},{"title":"第二章 毛主席开辟农村包围城市、武装夺取政权的革命道路。反对瞿秋白、李立三、罗章龙、王明、张国焘“左”、右倾机会主义路线的斗争","authors":["安徽师范大学政教系"],"page_start":55,"page_end":119,"dates":[{"year":1976,"month":7}]},{"title":"第三章 毛主席领导全党坚持抗日民族统一战线中的独立自主原则，实行人民战争，建立抗日根据地，打败日本侵略者，反对王明右倾投降主义路线的斗争","authors":["安徽师范大学政教系"],"page_start":120,"page_end":163,"dates":[{"year":1976,"month":7}]},{"title":"第四章 毛主席领导全国人民夺取民主革命胜利，同刘少奇一伙右倾机会主义路线的斗争","authors":["安徽师范大学政教系"],"page_start":164,"page_end":207,"dates":[{"year":1976,"month":7}]},{"title":"第五章 中国社会主义革命的开始。毛主席领导全国人民实现党在过渡时期的总路线，反对刘少奇“巩固新民主主义秩序”的反动纲领和高岗、饶漱石反党联盟的斗争","authors":["安徽师范大学政教系"],"page_start":208,"page_end":249,"dates":[{"year":1976,"month":7}]},{"title":"第六章 毛主席关于无产阶级专政下继续革命的伟大理论。党的社会主义建设总路线。反对彭德怀反党集团和刘少奇反革命修正主义路线的斗争","authors":["安徽师范大学政教系"],"page_start":250,"page_end":281,"dates":[{"year":1976,"month":7}]},{"title":"第七章 党在社会主义历史阶段的基本路线。毛主席亲自发动和领导无产阶级文化大革命，粉碎刘少奇叛徒集团和林彪反党集团的斗争","authors":["安徽师范大学政教系"],"page_start":282,"page_end":337,"dates":[{"year":1976,"month":7}]},{"title":"结束语","authors":["安徽师范大学政教系"],"page_start":338,"page_end":345,"dates":[{"year":1976,"month":7}]},{"title":"附录","authors":["安徽师范大学政教系"],"page_start":346,"page_end":353,"dates":[{"year":1976,"month":7}]}],
      ocr: {"content_thresholds":[0,0.084,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/a426be33-6310-4446-aa89-95462b693ead.pdf'),
  },
  {
    entity: {
      id: '11a20f6f-7fc7-43fa-acdb-6dc514785157',
      name: '中国：现代社会帝国主义大国',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/11a20f6f-7fc7-43fa-acdb-6dc514785157.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"前言","authors":["印度共产党（毛主义）"],"page_start":5,"page_end":5,"dates":[{"year":2021,"month":1}]},{"title":"导言","authors":["印度共产党（毛主义）"],"page_start":8,"page_end":11,"dates":[{"year":2021,"month":1}]},{"title":"第一章 社会主义革命：1949-1976","authors":["印度共产党（毛主义）"],"page_start":12,"page_end":15,"dates":[{"year":2021,"month":1}]},{"title":"第二章 资本主义复辟后的修正主义中国","authors":["印度共产党（毛主义）"],"page_start":16,"page_end":32,"dates":[{"year":2021,"month":1}]},{"title":"第三章 作为世界重要经济强国的中国","authors":["印度共产党（毛主义）"],"page_start":33,"page_end":36,"dates":[{"year":2021,"month":1}]},{"title":"第四章 中国的垄断资本主义组织","authors":["印度共产党（毛主义）"],"page_start":37,"page_end":41,"dates":[{"year":2021,"month":1}]},{"title":"第五章 中国的金融资本","authors":["印度共产党（毛主义）"],"page_start":42,"page_end":45,"dates":[{"year":2021,"month":1}]},{"title":"第六章 资本输出造就金融资本的全球霸权","authors":["印度共产党（毛主义）"],"page_start":46,"page_end":60,"dates":[{"year":2021,"month":1}]},{"title":"第七章 国际经济、军事集团的形成及中国帝国主义对其控制的日益加强","authors":["印度共产党（毛主义）"],"page_start":61,"page_end":65,"dates":[{"year":2021,"month":1}]},{"title":"第八章 中国社会帝国主义","authors":["印度共产党（毛主义）"],"page_start":66,"page_end":67,"dates":[{"year":2021,"month":1}]},{"title":"第九章 帝国主义的危机、战争、革命和反革命的历史","authors":["印度共产党（毛主义）"],"page_start":68,"page_end":75,"dates":[{"year":2021,"month":1}]},{"title":"总结","authors":["印度共产党（毛主义）"],"page_start":76,"page_end":78,"dates":[{"year":2021,"month":1}]},{"title":"注释","authors":["印度共产党（毛主义）"],"page_start":79,"page_end":91,"dates":[{"year":2021,"month":1}]}],
      ocr: {"content_thresholds":[0.108,0.108,0,0],"standard_paragraph_merge_strategy_threshold":0.169,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/11a20f6f-7fc7-43fa-acdb-6dc514785157.pdf'),
  },
  {
    entity: {
      id: 'aa251beb-a78f-4ee4-9410-9ea1d1136f81',
      name: '翻身——一个村庄的革命纪实',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/aa251beb-a78f-4ee4-9410-9ea1d1136f81.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"出版说明","authors":[],"page_start":4,"page_end":4,"dates":[]},{"title":"写在《翻身》的前面","authors":["白夜"],"page_start":6,"page_end":8,"dates":[{"year":1980,"month":3,"day":15}]},{"title":"致谢","authors":["韩丁"],"page_start":9,"page_end":9,"dates":[{"year":1966}]},{"title":"关于“翻身”一词的说明","authors":["韩丁"],"page_start":10,"page_end":10,"dates":[{"year":1966,"month":5}]},{"title":"序言","authors":["韩丁"],"page_start":13,"page_end":16,"dates":[{"year":1966,"month":5}]},{"title":"引子","authors":["韩丁"],"page_start":21,"page_end":30,"dates":[{"year":1966,"month":5}]},{"title":"第一部 种下仇恨","authors":["韩丁"],"page_start":31,"page_end":98,"dates":[{"year":1966,"month":5}]},{"title":"第二部 太阳从西边出来了——清算之年","authors":["韩丁"],"page_start":99,"page_end":209,"dates":[{"year":1966,"month":5}]},{"title":"第三部 访贫问苦","authors":["韩丁"],"page_start":210,"page_end":273,"dates":[{"year":1966,"month":5}]},{"title":"第四部 谁来教育教育者？","authors":["韩丁"],"page_start":274,"page_end":358,"dates":[{"year":1966,"month":5}]},{"title":"第五部 复查","authors":["韩丁"],"page_start":359,"page_end":407,"dates":[{"year":1966,"month":5}]},{"title":"第六部 彻底的重新估计","authors":["韩丁"],"page_start":408,"page_end":434,"dates":[{"year":1966,"month":5}]},{"title":"第七部 解疙瘩","authors":["韩丁"],"page_start":435,"page_end":518,"dates":[{"year":1966,"month":5}]},{"title":"附录：各阶级土地占有情况变化表（1944—1948）","authors":[],"page_start":519,"page_end":520,"dates":[]}],
      ocr: {"content_thresholds":[0,0.078,0,0],"standard_paragraph_merge_strategy_threshold":0.153,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/aa251beb-a78f-4ee4-9410-9ea1d1136f81.pdf'),
  },
  {
    entity: {
      id: '3eb4e189-7183-4ad7-9d14-ef0f958a6e3b',
      name: '政治经济学讲座（讨论稿供参考）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/3eb4e189-7183-4ad7-9d14-ef0f958a6e3b.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"关于读两本书的建议","authors":["毛泽东"],"page_start":1,"page_end":1,"dates":[{"year":1959,"month":8,"day":15}]},{"title":"政治经济学讲座（一）","authors":[],"page_start":2,"page_end":15,"dates":[{"year":1972}]},{"title":"政治经济学讲座（二）","authors":[],"page_start":16,"page_end":24,"dates":[{"year":1972}]},{"title":"政治经济学讲座（三）","authors":[],"page_start":25,"page_end":33,"dates":[{"year":1972}]},{"title":"政治经济学讲座（四）","authors":[],"page_start":34,"page_end":38,"dates":[{"year":1972}]},{"title":"政治经济学讲座（五）","authors":[],"page_start":39,"page_end":47,"dates":[{"year":1972,"month":4,"day":6}]},{"title":"政治经济学讲座（六）","authors":[],"page_start":48,"page_end":55,"dates":[{"year":1972}]},{"title":"政治经济学讲座（七）","authors":[],"page_start":56,"page_end":62,"dates":[{"year":1972}]},{"title":"政治经济学讲座（八）","authors":[],"page_start":63,"page_end":81,"dates":[{"year":1972}]},{"title":"政治经济学讲座（九）","authors":[],"page_start":82,"page_end":89,"dates":[{"year":1972}]},{"title":"政治经济学讲座（十）","authors":[],"page_start":90,"page_end":101,"dates":[{"year":1972}]},{"title":"政治经济学讲座（十一）","authors":[],"page_start":102,"page_end":110,"dates":[{"year":1972}]}],
      ocr: {"content_thresholds":[0,0.096,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/3eb4e189-7183-4ad7-9d14-ef0f958a6e3b.pdf'),
  },
  {
    entity: {
      id: 'dac652ea-d810-4c56-bda1-138763d041e3',
      name: '毛主席读《政治经济学教科书》（第三版）社会主义部分的笔记',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/dac652ea-d810-4c56-bda1-138763d041e3.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"翻印说明","authors":["郑州大学文化革命联络委员会材料室"],"page_start":2,"page_end":2,"dates":[{"year":1967,"month":10}]},{"title":"为《经验主义，还是马克思列宁主义》一书写的前言","alias":"毛主席为《经验主义，还是马克思列宁主义》一书写的前言","authors":["毛泽东"],"page_start":3,"page_end":3,"dates":[{"year":1959,"month":8,"day":15}]},{"title":"关于读书的建议","authors":["毛泽东"],"page_start":4,"page_end":4,"dates":[{"year":1958,"month":11,"day":9}]},{"title":"第一部分（从二十章到二十二章）","authors":["毛泽东"],"page_start":9,"page_end":39,"dates":[{"year":1960}]},{"title":"第二部分（从24章到29章）","authors":["毛泽东"],"page_start":39,"page_end":61,"dates":[{"year":1960}]},{"title":"第三部分（从30章到34章）","authors":["毛泽东"],"page_start":62,"page_end":70,"dates":[{"year":1960}]},{"title":"第三部分（从35章到结束语）","authors":["毛泽东"],"page_start":70,"page_end":85,"dates":[{"year":1960}]},{"title":"补遗","authors":["毛泽东"],"page_start":85,"page_end":95,"dates":[{"year":1960}]},{"title":"关于坂田文章的谈话","authors":["毛泽东"],"page_start":95,"page_end":101,"dates":[{"year":1964,"month":8,"day":24}]}],
      ocr: {"content_thresholds":[0,0.1,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/dac652ea-d810-4c56-bda1-138763d041e3.pdf'),
  },
  {
    entity: {
      id: '58160986-6729-431e-b547-279b37ed4c32',
      name: '苏联社会主义经济问题',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/58160986-6729-431e-b547-279b37ed4c32.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"对于和一九五一年十一月讨论会有关的经济问题的意见","authors":["斯大林"],"page_start":6,"page_end":42,"dates":[{"year":1952,"month":2,"day":1}]},{"title":"答亚历山大·伊里奇·诺特京同志","authors":["斯大林"],"page_start":43,"page_end":50,"dates":[{"year":1952,"month":4,"day":21}]},{"title":"关于尔·德·雅罗申柯同志的错误","authors":["斯大林"],"page_start":52,"page_end":72,"dates":[{"year":1952,"month":5,"day":22}]},{"title":"答阿·符·萨宁娜和符·格·温什尔两同志","authors":["斯大林"],"page_start":73,"page_end":81,"dates":[{"year":1952,"month":9,"day":28}]}],
      ocr: {"content_thresholds":[0,0.078,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/58160986-6729-431e-b547-279b37ed4c32.pdf'),
  },
  {
    entity: {
      id: '42b793be-7c1e-4ef6-8818-de097290aa92',
      name: '无产阶级专政时代的经济和政治',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/42b793be-7c1e-4ef6-8818-de097290aa92.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"无产阶级专政时代的经济和政治","authors":["列宁"],"page_start":1,"page_end":11,"dates":[{"year":1919,"month":10,"day":30}]}],
      ocr: {"content_thresholds":[0.12,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/42b793be-7c1e-4ef6-8818-de097290aa92.pdf'),
  },
  {
    entity: {
      id: 'a8ea4e1d-af66-4294-8979-618e5faa703e',
      name: '路易·波拿巴的雾月十八日（人民出版社1972年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/a8ea4e1d-af66-4294-8979-618e5faa703e.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"卡·马克思为本书第二版作的序言","authors":["马克思"],"page_start":4,"page_end":6,"dates":[{"year":1869,"month":6,"day":23}]},{"title":"弗·恩格斯为本书第三版作的序言","authors":["恩格斯"],"page_start":7,"page_end":8,"dates":[{"year":1885}]},{"title":"路易·波拿巴的雾月十八日","authors":["马克思"],"page_start":10,"page_end":117,"dates":[{"year":1851,"month":12},{"year":1852,"month":3}]},{"title":"注释","authors":[],"page_start":118,"page_end":125,"dates":[]}],
      ocr: {"content_thresholds":[0.132,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/a8ea4e1d-af66-4294-8979-618e5faa703e.pdf'),
  },
  {
    entity: {
      id: 'f5841312-d8c2-4fcf-91a1-9f7c1074de05',
      name: '法兰西内战（人民出版社1971年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/f5841312-d8c2-4fcf-91a1-9f7c1074de05.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"弗·恩格斯的导言","authors":["恩格斯"],"page_start":7,"page_end":19,"dates":[{"year":1891,"month":3,"day":18}]},{"title":"国际工人协会总委员会关于普法战争的第一篇宣言","authors":["马克思"],"page_start":20,"page_end":25,"is_range_date":true,"dates":[{"year":1870,"month":7,"day":19},{"year":1870,"month":7,"day":23}]},{"title":"国际工人协会总委员会关于普法战争的第二篇宣言","authors":["马克思"],"page_start":26,"page_end":35,"is_range_date":true,"dates":[{"year":1870,"month":9,"day":6},{"year":1870,"month":9,"day":9}]},{"title":"法兰西内战","authors":["马克思"],"page_start":37,"page_end":92,"is_range_date":true,"dates":[{"year":1871,"month":4},{"year":1871,"month":5}]},{"title":"《法兰西内战》初稿","authors":["马克思"],"page_start":95,"page_end":173,"is_range_date":true,"dates":[{"year":1871,"month":4},{"year":1871,"month":5}]},{"title":"《法兰西内战》二稿","authors":["马克思"],"page_start":174,"page_end":213,"is_range_date":true,"dates":[{"year":1871,"month":4},{"year":1871,"month":5}]},{"title":"注释","authors":[],"page_start":215,"page_end":241,"dates":[]}],
      ocr: {"content_thresholds":[0,0.09,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/f5841312-d8c2-4fcf-91a1-9f7c1074de05.pdf'),
  },
  {
    entity: {
      id: '307eccd7-d7b6-43bb-8b3b-a0fa94534842',
      name: '1848年至1850年的法兰西阶级斗争（人民出版社1973年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/307eccd7-d7b6-43bb-8b3b-a0fa94534842.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"恩格斯的导言","authors":["恩格斯"],"page_start":7,"page_end":27,"dates":[{"year":1895,"month":3,"day":6}]},{"title":"1848年至1850年的法兰西阶级斗争","authors":["马克思"],"page_start":29,"page_end":134,"is_range_date":true,"dates":[{"year":1850,"month":1},{"year":1850,"month":11,"day":1}]},{"title":"注释","authors":[],"page_start":135,"page_end":149,"dates":[]},{"title":"人名索引","authors":[],"page_start":151,"page_end":161,"dates":[]}],
      ocr: {"content_thresholds":[0,0.084,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/307eccd7-d7b6-43bb-8b3b-a0fa94534842.pdf'),
  },
  {
    entity: {
      id: '66c2cc98-f9a7-4ab6-8281-ac69a7c6b5e8',
      name: '中国的文化大革命与工业组织',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/66c2cc98-f9a7-4ab6-8281-ac69a7c6b5e8.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"作者简介","authors":[],"page_start":4,"page_end":7,"dates":[{"year":2009,"month":8}]},{"title":"中文版序","authors":["中国工人研究网"],"page_start":8,"page_end":15,"dates":[{"year":2009,"month":8}]},{"title":"前言","authors":["夏尔·贝特兰"],"page_start":18,"page_end":20,"dates":[{"year":1973,"month":1}]},{"title":"一、针织总厂","authors":["夏尔·贝特兰"],"page_start":21,"page_end":38,"dates":[{"year":1973,"month":1}]},{"title":"二、工业计划","authors":["夏尔·贝特兰"],"page_start":38,"page_end":51,"dates":[{"year":1973,"month":1}]},{"title":"三、苏联劳动分工模式的变革","authors":["夏尔·贝特兰"],"page_start":51,"page_end":64,"dates":[{"year":1973,"month":1}]},{"title":"四、生产关系的革命","authors":["夏尔·贝特兰"],"page_start":64,"page_end":71,"dates":[{"year":1973,"month":1}]},{"title":"后记","authors":["夏尔·贝特兰"],"page_start":72,"page_end":88,"dates":[{"year":1973,"month":1}]},{"title":"附录：《大跃退》节选","authors":["夏尔·贝特兰"],"page_start":89,"page_end":129,"dates":[{"year":1978}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.122,"differential_paragraph_merge_strategy_threshold":0,"content_thresholds":[0,0.072,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/66c2cc98-f9a7-4ab6-8281-ac69a7c6b5e8.pdf'),
  },
  {
    entity: {
      id: 'e54c9ef3-79c8-4a5a-95b4-835064b934c1',
      name: '印度一些革命派的重要文件、文章汇编',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/e54c9ef3-79c8-4a5a-95b4-835064b934c1.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"印共革命派安得拉邦协调委员会的决议","authors":[],"page_start":6,"page_end":10,"dates":[{"year":1969,"month":2}]},{"title":"安得拉邦革命共产党委员会当前纲领","authors":[],"page_start":11,"page_end":32,"dates":[{"year":1969,"month":4}]},{"title":"关于安得拉邦武装斗争的声明","authors":[],"page_start":33,"page_end":36,"dates":[{"year":1969,"month":7}]},{"title":"关于斯里卡库兰县吉里江人武装斗争的报告","authors":[],"page_start":37,"page_end":74,"dates":[{"year":1969,"month":4}]},{"title":"给中国共产党第九次全国代表大会主席团的贺信","authors":[],"page_start":75,"page_end":84,"dates":[{"year":1969,"month":4}]},{"title":"关于与共产党革命派全印协调委员会的分歧","authors":["共产党革命派马哈拉斯特拉邦委员会"],"page_start":86,"page_end":96,"dates":[{"year":1969,"month":6}]},{"title":"建立革命的共产党","authors":["西孟加拉邦帕里玛尔·达斯·古普塔派"],"page_start":97,"page_end":113,"dates":[{"year":1969,"month":5}]},{"title":"新民主的斗争和“新共和”","authors":["西孟加拉邦阿希特·森派"],"page_start":114,"page_end":117,"dates":[{"year":1969,"month":12}]},{"title":"在新民主主义革命中开展群众斗争和建立群众组织是必不可少的","authors":["西孟加拉邦阿希特·森派"],"page_start":118,"page_end":123,"dates":[{"year":1969,"month":12}]},{"title":"剥开所谓“革命领导”的假面具","authors":["西孟加拉邦阿希特·森派"],"page_start":124,"page_end":130,"dates":[{"year":1970,"month":2}]},{"title":"印度革命的前途（供讨论）","authors":["西孟加拉邦《南国》派"],"page_start":132,"page_end":166,"dates":[{"year":1969,"month":5}]},{"title":"关于印度革命的战略问题（供讨论）","authors":["西孟加拉邦《南国》派"],"page_start":167,"page_end":180,"dates":[{"year":1969,"month":5}]},{"title":"依靠毛泽东思想开展批评与自我批评","authors":["琴都·鲍雅尔"],"page_start":181,"page_end":199,"dates":[{"year":1969,"month":5}]},{"title":"特利切里——普尔帕利的一年","authors":["昆尼卡尔·纳拉扬纳"],"page_start":202,"page_end":207,"dates":[{"year":1969,"month":11}]},{"title":"立即向党内处于领导地位的修正主义作斗争","authors":["昆尼卡尔·纳拉扬纳"],"page_start":208,"page_end":217,"dates":[{"year":1969,"month":12}]},{"title":"毛泽东思想的光辉照耀着喀拉拉邦","authors":["昆尼卡尔·纳拉扬纳"],"page_start":218,"page_end":223,"dates":[{"year":1969,"month":12,"day":14}]},{"title":"编后","authors":[],"page_start":224,"page_end":225,"dates":[{"year":1970,"month":4}]}],
      ocr: {"content_thresholds":[0,0.102,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/e54c9ef3-79c8-4a5a-95b4-835064b934c1.pdf'),
  },
  {
    entity: {
      id: '60191974-70c8-4e2a-9aa4-4f11169aa391',
      name: '土耳其民族问题',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/60191974-70c8-4e2a-9aa4-4f11169aa391.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"土耳其民族问题","authors":["易卜拉欣·凯帕喀亚"],"page_start":1,"page_end":31,"dates":[{"year":1971,"month":12}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/60191974-70c8-4e2a-9aa4-4f11169aa391.pdf'),
  },
  {
    entity: {
      id: '6b120776-ef1f-405c-950d-3f361b18fef0',
      name: '关于国际共产主义运动总路线的论战（人民出版社1965年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/6b120776-ef1f-405c-950d-3f361b18fef0.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"关于国际共产主义运动总路线的建议——中国共产党中央委员会对苏联共产党中央委员会一九六三年三月三十日来信的复信","authors":["中国共产党中央委员会"],"page_start":8,"page_end":57,"dates":[{"year":1963,"month":6,"day":14}]},{"title":"苏共领导同我们分歧的由来和发展——评苏共中央的公开信","authors":["《人民日报》编辑部","《红旗》杂志编辑部"],"page_start":58,"page_end":102,"dates":[{"year":1963,"month":9,"day":6}]},{"title":"关于和平过渡问题的意见提纲","authors":[],"page_start":103,"page_end":106,"dates":[{"year":1957,"month":11,"day":10}]},{"title":"中国共产党代表团在布加勒斯特兄弟党会谈上的声明","authors":[],"page_start":107,"page_end":110,"dates":[{"year":1960,"month":6,"day":26}]},{"title":"中共中央对苏共中央通知书的答复信中关于解决分歧、达到团结的五项建议","authors":["中共中央"],"page_start":111,"page_end":112,"dates":[{"year":1960,"month":9,"day":10}]},{"title":"关于斯大林问题——二评苏共中央的公开信","authors":["《人民日报》编辑部","《红旗》杂志编辑部"],"page_start":114,"page_end":136,"dates":[{"year":1963,"month":9,"day":13}]},{"title":"南斯拉夫是社会主义国家吗？——三评苏共中央的公开信","authors":["《人民日报》编辑部","《红旗》杂志编辑部"],"page_start":138,"page_end":180,"dates":[{"year":1963,"month":9,"day":26}]},{"title":"新殖民主义的辩护士——四评苏共中央的公开信","authors":["《人民日报》编辑部","《红旗》杂志编辑部"],"page_start":182,"page_end":213,"dates":[{"year":1963,"month":10,"day":22}]},{"title":"在战争与和平问题上的两条路线——五评苏共中央的公开信","authors":["《人民日报》编辑部","《红旗》杂志编辑部"],"page_start":214,"page_end":248,"dates":[{"year":1963,"month":11,"day":19}]},{"title":"两种根本对立的和平共处政策——六评苏共中央的公开信","authors":["《人民日报》编辑部","《红旗》杂志编辑部"],"page_start":250,"page_end":289,"dates":[{"year":1963,"month":12,"day":12}]},{"title":"苏共领导是当代最大的分裂主义者——七评苏共中央的公开信","authors":["《人民日报》编辑部","《红旗》杂志编辑部"],"page_start":290,"page_end":341,"dates":[{"year":1964,"month":2,"day":4}]},{"title":"无产阶级革命和赫鲁晓夫修正主义——八评苏共中央的公开信","authors":["《人民日报》编辑部","《红旗》杂志编辑部"],"page_start":342,"page_end":391,"dates":[{"year":1964,"month":3,"day":31}]},{"title":"关于赫鲁晓夫的假共产主义及其在世界历史上的教训——九评苏共中央的公开信","authors":["《人民日报》编辑部","《红旗》杂志编辑部"],"page_start":392,"page_end":450,"dates":[{"year":1964,"month":7,"day":14}]},{"title":"赫鲁晓夫是怎样下台的","authors":["《红旗》杂志编辑部"],"page_start":452,"page_end":462,"dates":[{"year":1964,"month":11,"day":21}]},{"title":"苏共中央给中共中央的信","authors":["苏联共产党中央委员会"],"page_start":466,"page_end":493,"dates":[{"year":1963,"month":3,"day":30}]},{"title":"苏联共产党中央委员会给苏联各级党组织和全体共产党员的公开信","authors":["苏联共产党中央委员会"],"page_start":494,"page_end":551,"dates":[{"year":1963,"month":7,"day":14}]}],
      ocr: {"content_thresholds":[0,0.077,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/6b120776-ef1f-405c-950d-3f361b18fef0.pdf'),
  },
  {
    entity: {
      id: '561f1d91-74de-49f3-967a-e61cdb36e4f2',
      name: '反击教条主义者对毛泽东思想的进攻——评恩维尔·霍查的《帝国主义与革命》',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/561f1d91-74de-49f3-967a-e61cdb36e4f2.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"反击教条主义者对毛泽东思想的进攻——评恩维尔·霍查的《帝国主义与革命》","authors":["美国革命共产党"],"page_start":1,"page_end":98,"dates":[{"year":1979,"month":5}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/561f1d91-74de-49f3-967a-e61cdb36e4f2.pdf'),
  },
  {
    entity: {
      id: 'ad036d11-b750-477d-abf0-2eb57649a194',
      name: '帝国主义是资本主义的最高阶段（人民出版社1964年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/ad036d11-b750-477d-abf0-2eb57649a194.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"序言","authors":["列宁"],"page_start":7,"page_end":8,"dates":[{"year":1917,"month":4,"day":26}]},{"title":"法文版和德文版序言","authors":["列宁"],"page_start":9,"page_end":14,"dates":[{"year":1920,"month":7,"day":6}]},{"title":"序言","authors":["列宁"],"page_start":15,"page_end":121,"dates":[{"year":1916,"month":1},{"year":1916,"month":6}]},{"title":"注释","authors":[],"page_start":122,"page_end":123,"dates":[]}],
      ocr: {"content_thresholds":[0,0.094,0,0],"standard_paragraph_merge_strategy_threshold":0.158,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/ad036d11-b750-477d-abf0-2eb57649a194.pdf'),
  },
  {
    entity: {
      id: '717295cf-aab7-4c2c-b2a4-234306b3f462',
      name: '关于第三世界国家的官僚资本主义进程的说明',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/717295cf-aab7-4c2c-b2a4-234306b3f462.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"关于第三世界国家的官僚资本主义进程的说明","authors":["秘鲁人民运动"],"page_start":1,"page_end":66,"dates":[{"year":2014,"month":1,"day":14}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.178,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/717295cf-aab7-4c2c-b2a4-234306b3f462.pdf'),
  },
  {
    entity: {
      id: '08af3418-cd1a-4993-b391-9ace493b3eb6',
      name: '红旗一九六七年第十六期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/08af3418-cd1a-4993-b391-9ace493b3eb6.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"关于按照系统实行革命大联合的通知","authors":["中共中央","国务院","中央军委","中央文革"],"page_start":7,"page_end":7,"dates":[{"year":1967,"month":10,"day":17}]},{"title":"在首都人民纪念十月革命五十周年大会上林彪同志的讲话","authors":["林彪"],"page_start":8,"page_end":11,"dates":[{"year":1967}]},{"title":"沿着十月社会主义革命开辟的道路前进——纪念伟大的十月社会主义革命五十周年","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":12,"page_end":18,"dates":[{"year":1967,"month":11,"day":5}]},{"title":"中国农村两条道路的斗争","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":19,"page_end":30,"dates":[{"year":1967}]},{"title":"大树特树伟大统帅毛主席的绝对权威，大树特树伟大的毛泽东思想的绝对权威——彻底清算罗瑞卿反对毛主席、反对毛泽东思想的滔天罪行","authors":["杨成武"],"page_start":31,"page_end":40,"dates":[{"year":1967}]},{"title":"三结合的毛泽东思想学习班好得很","authors":["《红旗》杂志记者"],"page_start":41,"page_end":42,"dates":[{"year":1967}],"ocr":{"vsplit":0.35}},{"title":"斗私批修的一种好形式——北京部队某连开展“一帮一、一对红”活动的情况调查","authors":["《红旗》杂志调查员"],"page_start":43,"page_end":47,"dates":[{"year":1967}],"ocr":{"vsplit":0.35}},{"title":"开展“一帮一、一对红”活动，发展和巩固革命的大联合","authors":["《红旗》杂志调查员"],"page_start":48,"page_end":49,"dates":[{"year":1967}],"ocr":{"vsplit":0.35}}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/08af3418-cd1a-4993-b391-9ace493b3eb6.pdf'),
  },
  {
    entity: {
      id: '7e5f7d6d-d63e-4257-9381-f4b600c27340',
      name: '红旗一九六七年第十五期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/7e5f7d6d-d63e-4257-9381-f4b600c27340.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"在中华人民共和国成立十八周年庆祝大会上林彪同志的讲话","authors":["林彪"],"page_start":6,"page_end":8,"dates":[{"year":1967}]},{"title":"无产阶级专政下的文化大革命胜利万岁——庆祝中华人民共和国成立十八周年","authors":["《人民日报》编辑部","《红旗》杂志编辑部","《解放军报》编辑部"],"page_start":9,"page_end":15,"dates":[{"year":1967,"month":9,"day":30}]},{"title":"大立毛泽东思想的伟大革命","authors":[],"page_start":16,"page_end":20,"dates":[]},{"title":"“斗私，批修”，做好各学校各单位的斗批改","authors":[],"page_start":21,"page_end":22,"dates":[{"year":1967}]},{"title":"工人阶级联合起来","authors":["《红旗》杂志编辑部"],"page_start":23,"page_end":24,"dates":[{"year":1967}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/7e5f7d6d-d63e-4257-9381-f4b600c27340.pdf'),
  },
  {
    entity: {
      id: 'b4755886-bcbc-4a36-abfc-c35d2370ae8a',
      name: '红旗一九六七年第十四期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/b4755886-bcbc-4a36-abfc-c35d2370ae8a.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"评陶铸的两本书","authors":["姚文元"],"page_start":4,"page_end":18,"dates":[{"year":1967}]},{"title":"在革命大批判的高潮中，实现革命的大联合","authors":[],"page_start":19,"page_end":21,"dates":[{"year":1967}]},{"title":"做无产阶级革命派的坚强后盾","authors":["吴法宪"],"page_start":22,"page_end":25,"dates":[]},{"title":"伟大的中国人民解放军是我国无产阶级专政和无产阶级文化大革命的可靠支柱","authors":[],"page_start":26,"page_end":27,"dates":[{"year":1967}]},{"title":"进一步贯彻毛主席“抓革命，促生产”的伟大方针","authors":[],"page_start":28,"page_end":29,"dates":[{"year":1967}]},{"title":"坚决相信和依靠干部的大多数","authors":["周洪生"],"page_start":30,"page_end":31,"dates":[{"year":1967,"month":8,"day":9}],"ocr":{"vsplit":0.35}}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/b4755886-bcbc-4a36-abfc-c35d2370ae8a.pdf'),
  },
  {
    entity: {
      id: '700dc343-990c-4368-bd5d-84154e8db533',
      name: '红旗一九六七年第十三期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/700dc343-990c-4368-bd5d-84154e8db533.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"炮打司令部——我的一张大字报","authors":["毛泽东"],"page_start":5,"page_end":5,"dates":[{"year":1966,"month":8,"day":5}]},{"title":"走社会主义道路，还是走资本主义道路","authors":["红旗杂志编辑部","人民日报编辑部"],"page_start":6,"page_end":15,"dates":[{"year":1967,"month":8,"day":14}]},{"title":"彻底摧毁资产阶级司令部——纪念党的八届十一中全会召开一周年","authors":[],"page_start":16,"page_end":19,"dates":[{"year":1967,"month":8,"day":6}]},{"title":"中国共产党八届八中全会关于以彭德怀为首的反党集团的决议","authors":[],"page_start":20,"page_end":22,"dates":[{"year":1967}]},{"title":"从彭德怀的失败到中国赫鲁晓夫的破产","authors":[],"page_start":23,"page_end":26,"dates":[{"year":1967}]},{"title":"策动叛党就是为了篡党","authors":["《文汇报》编辑部","《解放日报》编辑部","《支部生活》编辑部"],"page_start":27,"page_end":30,"dates":[{"year":1967,"month":8,"day":9}]},{"title":"中国“议会迷”的破产","authors":["《文汇报》编辑部","《解放日报》编辑部","《支部生活》编辑部"],"page_start":31,"page_end":34,"dates":[{"year":1967,"month":8,"day":10}]},{"title":"青海高原的凯歌","authors":["《人民日报》编辑部"],"page_start":35,"page_end":36,"dates":[{"year":1967,"month":8,"day":13}]},{"title":"给毛主席的致敬电","authors":["青海省革命委员会"],"page_start":37,"page_end":40,"dates":[{"year":1967,"month":8,"day":12}]},{"title":"决不允许把社会主义企业拉到资本主义邪路上去——上海市工人批评会纪要","authors":[],"page_start":41,"page_end":44,"dates":[{"year":1967}],"ocr":{"vsplit":0.35}},{"title":"彻底批评复辟资本主义的“三自一包”——山东省即墨县兰村公社贫下中农和革命干部批判会纪要","authors":[],"page_start":45,"page_end":48,"dates":[{"year":1967}],"ocr":{"vsplit":0.35}},{"title":"怒斥党内最大的走资本主义道路当权派的投降主义纲领——中国人民解放军三军驻京部队指战员批判会纪要","authors":[],"page_start":49,"page_end":52,"dates":[{"year":1967}],"ocr":{"vsplit":0.35}},{"title":"阿拉伯反侵略战争的教训","authors":["周天赤"],"page_start":53,"page_end":59,"dates":[{"year":1967}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/700dc343-990c-4368-bd5d-84154e8db533.pdf'),
  },
  {
    entity: {
      id: 'c9f09747-b2db-423d-a4d9-ef5e75c1e060',
      name: '中国革命的道路——论解放后两条路线的斗争',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/c9f09747-b2db-423d-a4d9-ef5e75c1e060.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"出版序","authors":["杜继平"],"page_start":3,"page_end":5,"dates":[{"year":2020,"month":6,"day":16}]},{"title":"作者序：为什么要写这本书？","authors":["金宝瑜"],"page_start":6,"page_end":10,"dates":[{"year":2020}]},{"title":"前言","authors":["金宝瑜"],"page_start":11,"page_end":19,"dates":[{"year":2020}]},{"title":"第一部份：农业发展的两条路线斗争","authors":["金宝瑜"],"page_start":19,"page_end":36,"dates":[{"year":2020}]},{"title":"第二部份：全民所有制下的两条路线斗争","authors":["金宝瑜"],"page_start":36,"page_end":48,"dates":[{"year":2020}]},{"title":"第三部份：解放后两条路线斗争总结","authors":["金宝瑜"],"page_start":48,"page_end":56,"dates":[{"year":2020}]},{"title":"全文总结","authors":["金宝瑜"],"page_start":56,"page_end":56,"dates":[{"year":2020}]},{"title":"附录一：《鞍钢宪法》划时代的意义","authors":["金宝瑜"],"page_start":57,"page_end":69,"dates":[{"year":2020}]},{"title":"附录二：晚期帝国主义","authors":["金宝瑜"],"page_start":70,"page_end":88,"dates":[{"year":2020}]},{"title":"沃勒斯坦与《世界社会论坛》（World Social Forum）","authors":["金宝瑜"],"page_start":89,"page_end":95,"dates":[{"year":2020}]},{"title":"作者简历","authors":[],"page_start":96,"page_end":96,"dates":[{"year":2020}]}],
      ocr: {"content_thresholds":[0,0.092,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/c9f09747-b2db-423d-a4d9-ef5e75c1e060.pdf'),
  },
  {
    entity: {
      id: 'f9878251-0999-4d57-b968-15d501016a54',
      name: '论中国的文化大革命及其对未来的遗产',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/f9878251-0999-4d57-b968-15d501016a54.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"论中国的文化大革命及其对未来的遗产","authors":["美国马列毛主义革命学习小组"],"page_start":1,"page_end":54,"dates":[{"year":2007,"month":3}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.178,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/f9878251-0999-4d57-b968-15d501016a54.pdf'),
  },
  {
    entity: {
      id: '49c0e64a-0dd4-4b15-94de-22f754f1c0c0',
      name: '大逆转：中国的私有化 1979-1989',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/49c0e64a-0dd4-4b15-94de-22f754f1c0c0.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"前言","authors":["威廉·韩丁"],"page_start":3,"page_end":4,"dates":[{"year":1990}]},{"title":"简介：中国的农村改革","authors":["威廉·韩丁"],"page_start":5,"page_end":12,"dates":[{"year":1990}]},{"title":"中国的一个小城镇：1978年的张庄","authors":["威廉·韩丁"],"page_start":13,"page_end":18,"dates":[{"year":1990}]},{"title":"凤阳之行 1983","authors":["威廉·韩丁"],"page_start":19,"page_end":29,"dates":[{"year":1990}]},{"title":"大刀阔斧的改革，农村的变化 1984","authors":["威廉·韩丁"],"page_start":30,"page_end":34,"dates":[{"year":1990}]},{"title":"草原现状","authors":["威廉·韩丁"],"page_start":35,"page_end":39,"dates":[{"year":1990}]},{"title":"解读改革：1986年农村的变化","authors":["威廉·韩丁"],"page_start":40,"page_end":46,"dates":[{"year":1990}]},{"title":"改革所绕过的：农业机械化 1986","authors":["威廉·韩丁"],"page_start":47,"page_end":52,"dates":[{"year":1990}]},{"title":"重访大寨：1987年","authors":["威廉·韩丁"],"page_start":53,"page_end":59,"dates":[{"year":1990}]},{"title":"毛泽东农村政策再思","authors":["威廉·韩丁"],"page_start":60,"page_end":68,"dates":[{"year":1990}]},{"title":"为什么不走资本主义的道路？","authors":["威廉·韩丁"],"page_start":69,"page_end":73,"dates":[{"year":1990}]},{"title":"天安门屠杀：1989年的6月","authors":["威廉·韩丁"],"page_start":74,"page_end":80,"dates":[{"year":1990}]}],
      ocr: {"content_thresholds":[0,0.046,0,0],"standard_paragraph_merge_strategy_threshold":0.085,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/49c0e64a-0dd4-4b15-94de-22f754f1c0c0.pdf'),
  },
  {
    entity: {
      id: 'ff13be52-477d-44ba-a3e7-9b664be2e0dc',
      name: '秘鲁共产党总路线',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/ff13be52-477d-44ba-a3e7-9b664be2e0dc.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"秘鲁共产党总路线——基础文件","authors":["秘鲁共产党"],"page_start":3,"page_end":17,"dates":[{"year":1988}]},{"title":"秘鲁共产党总路线——国际路线","authors":["秘鲁共产党"],"page_start":18,"page_end":34,"dates":[{"year":1988}]},{"title":"秘鲁共产党总路线——民主主义革命路线","authors":["秘鲁共产党"],"page_start":35,"page_end":46,"dates":[{"year":1988}]},{"title":"秘鲁共产党总路线——军事路线","authors":["秘鲁共产党"],"page_start":47,"page_end":65,"dates":[{"year":1988}]},{"title":"秘鲁共产党总路线——三大工具的建设路线","authors":["秘鲁共产党"],"page_start":66,"page_end":73,"dates":[{"year":1988}]},{"title":"秘鲁共产党总路线——群众路线","authors":["秘鲁共产党"],"page_start":74,"page_end":85,"dates":[{"year":1988}]}],
      ocr: {"content_thresholds":[0.092,0,0,0],"standard_paragraph_merge_strategy_threshold":0.178,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/ff13be52-477d-44ba-a3e7-9b664be2e0dc.pdf'),
  },
  {
    entity: {
      id: '0f43b075-0f25-4722-aafc-bf0cf0cd21c5',
      name: '为了国际毛主义统一会议！关于国际共产主义运动及其当前总政治路线商榷的提案',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/0f43b075-0f25-4722-aafc-bf0cf0cd21c5.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"为了国际毛主义统一会议！关于国际共产主义运动及其当前总政治路线商榷的提案","authors":["国际毛主义统一会议协调委员会"],"page_start":1,"page_end":27,"dates":[{"year":2022}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.178,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/0f43b075-0f25-4722-aafc-bf0cf0cd21c5.pdf'),
  },
  {
    entity: {
      id: '2b76c2fb-c46b-4bc2-a9e7-14a3e76e265e',
      name: '驳国内某些人对各国马列毛主义者的攻击',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/2b76c2fb-c46b-4bc2-a9e7-14a3e76e265e.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"驳国内某些人对各国马列毛主义者的攻击","authors":["龚格晟"],"page_start":1,"page_end":25,"dates":[{"year":2021}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.093,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/2b76c2fb-c46b-4bc2-a9e7-14a3e76e265e.pdf'),
  },
  {
    entity: {
      id: '6ae42ff8-e381-4c6e-b9c2-6d7da68e716f',
      name: '在毛主义和人民战争下对取消主义斗争和团结国际共运：关于阿共（毛）对2018年五一宣言的批评',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/6ae42ff8-e381-4c6e-b9c2-6d7da68e716f.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"在毛主义和人民战争下对取消主义斗争和团结国际共运：关于阿共（毛）对2018年五一宣言的批评","authors":["巴西共产党（红色派）中央委员会"],"page_start":1,"page_end":22,"dates":[{"year":2019,"month":4,"day":25}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.178,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/6ae42ff8-e381-4c6e-b9c2-6d7da68e716f.pdf'),
  },
  {
    entity: {
      id: 'c63dd54f-32f7-4bfb-9c66-d637cc08f85b',
      name: '保卫贡萨罗主席的生命就是保卫毛主义',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/c63dd54f-32f7-4bfb-9c66-d637cc08f85b.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"保卫贡萨罗主席的生命就是保卫毛主义","authors":["法国毛主义共产党"],"page_start":1,"page_end":10,"dates":[{"year":2017}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.169,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/c63dd54f-32f7-4bfb-9c66-d637cc08f85b.pdf'),
  },
  {
    entity: {
      id: '6a87ce7d-2a84-40b5-bc7d-94812cdcfc5e',
      name: '列宁与军事化共产党',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/6a87ce7d-2a84-40b5-bc7d-94812cdcfc5e.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"列宁与军事化共产党","authors":["巴西共产党（红色派）"],"page_start":1,"page_end":34,"dates":[{"year":2017}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.119,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/6a87ce7d-2a84-40b5-bc7d-94812cdcfc5e.pdf'),
  },
  {
    entity: {
      id: 'f8cf96a9-6162-49d0-818d-7912f2d2eaef',
      name: '堪萨斯城红卫兵新路线',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/f8cf96a9-6162-49d0-818d-7912f2d2eaef.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"堪萨斯城红卫兵新路线","authors":["堪萨斯城红卫兵"],"page_start":1,"page_end":7,"dates":[{"year":2019}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.178,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/f8cf96a9-6162-49d0-818d-7912f2d2eaef.pdf'),
  },
  {
    entity: {
      id: 'd6a83940-c7eb-4a0f-beb3-4c0f08aebaa2',
      name: '人民战争与革命',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/d6a83940-c7eb-4a0f-beb3-4c0f08aebaa2.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"人民战争与革命","authors":["巴西共产党（红色派）"],"page_start":1,"page_end":23,"dates":[{"year":2014,"month":5}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.178,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/d6a83940-c7eb-4a0f-beb3-4c0f08aebaa2.pdf'),
  },
  {
    entity: {
      id: '7e814aab-62f2-42f6-bd48-aaa48201d394',
      name: '人民战争——通向解放的唯一道路',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/7e814aab-62f2-42f6-bd48-aaa48201d394.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"人民战争——通向解放的唯一道路","authors":["阶级立场"],"page_start":1,"page_end":42,"dates":[{"year":2017}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.093,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/7e814aab-62f2-42f6-bd48-aaa48201d394.pdf'),
  },
  {
    entity: {
      id: '18d49b9c-2acd-43b3-948b-4282c2d2fda4',
      name: '红旗一九六七年第十二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/18d49b9c-2acd-43b3-948b-4282c2d2fda4.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"毛主席论人民战争","authors":["毛泽东"],"page_start":3,"page_end":17,"dates":[]},{"title":"人民战争胜利万岁","alias":"纪念中国人民抗日战争胜利二十周年","authors":["林彪"],"page_start":18,"page_end":43,"dates":[{"year":1965,"month":9,"day":3}]},{"title":"无产阶级必须牢牢掌握枪杆子——纪念中国人民解放军建军四十周年","authors":[],"page_start":44,"page_end":48,"dates":[{"year":1967,"month":7,"day":30}]},{"title":"向人民的主要敌人猛烈开火","authors":[],"page_start":49,"page_end":50,"dates":[{"year":1967,"month":7,"day":30}]},{"title":"永远沿着毛主席的无产阶级建军路线胜利前进","authors":["中国人民解放军某部九连"],"page_start":51,"page_end":55,"dates":[{"year":1967}],"ocr":{"vsplit":0.35}},{"title":"从政治上思想上彻底打倒党内一小撮走资本主义道路当权派","authors":["空军司令部","红尖兵"],"page_start":56,"page_end":58,"dates":[{"year":1967}]},{"title":"推荐一篇好文章","authors":["《解放军报》评论员"],"page_start":59,"page_end":60,"dates":[{"year":1967,"month":7,"day":22}]},{"title":"坚决保卫毛主席的无产阶级革命路线","authors":["陈永贵","任井夫","王振国","张怀英"],"page_start":61,"page_end":65,"dates":[{"year":1967}],"ocr":{"vsplit":0.35}}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/18d49b9c-2acd-43b3-948b-4282c2d2fda4.pdf'),
  },
  {
    entity: {
      id: 'e8f644e6-1143-4765-8a31-48d38f7602e8',
      name: '持久人民战争：革命的唯一途径',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/e8f644e6-1143-4765-8a31-48d38f7602e8.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"持久人民战争：革命的唯一途径","authors":["加拿大革命共产党"],"page_start":2,"page_end":44,"dates":[{"year":2002}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.178,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/e8f644e6-1143-4765-8a31-48d38f7602e8.pdf'),
  },
  {
    entity: {
      id: '7a8f3b48-1107-4235-b6cc-0b092aacb163',
      name: '红旗一九六七年第十一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/7a8f3b48-1107-4235-b6cc-0b092aacb163.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"毛泽东思想照亮了我们党胜利前进的道路——纪念中国共产党诞生四十六周年","authors":[],"page_start":3,"page_end":7,"dates":[{"year":1967}]},{"title":"缅甸的蒋介石——奈温军人政府必败！人民必胜！","alias":"一九六七年七月五日在北京举行的追悼刘逸烈士大会上的讲话","authors":["德钦巴登顶"],"page_start":8,"page_end":14,"dates":[{"year":1967,"month":7,"day":5}]},{"title":"印度尼西亚人民团结起来，为推翻法西斯政权而斗争","authors":[],"page_start":15,"page_end":18,"dates":[{"year":1967}]},{"title":"印度尼西亚共产党中央政治局声明（摘要）","authors":["印度尼西亚共产党中央政治局"],"page_start":19,"page_end":24,"dates":[{"year":1967,"month":8,"day":17}]},{"title":"印度尼西亚共产党中央政治局的自我批评（摘要）","authors":["印度尼西亚共产党中央政治局"],"page_start":25,"page_end":36,"dates":[{"year":1967,"month":9}]},{"title":"实现革命的大联合必须打倒私字","authors":[],"page_start":37,"page_end":40,"dates":[{"year":1967}]},{"title":"依靠群众，实现革命的大联合","authors":["中国人民解放军北京部队空军某部毛泽东思想宣传队"],"page_start":41,"page_end":43,"dates":[{"year":1967}],"ocr":{"vsplit":0.35}},{"title":"实现革命的大联合，复课闹革命","authors":["中国人民解放军海军某部驻北京八十九中军训团"],"page_start":44,"page_end":47,"dates":[{"year":1967}],"ocr":{"vsplit":0.35}},{"title":"永保无产阶级的革命本色","authors":["北京钟表厂红旗大队"],"page_start":48,"page_end":49,"dates":[{"year":1967}],"ocr":{"vsplit":0.35}},{"title":"破私立公，才能掌好权用好权","authors":["《新贵州报》革命委员会"],"page_start":50,"page_end":52,"dates":[{"year":1967}],"ocr":{"vsplit":0.35}},{"title":"不折不扣地按党的政策办事","authors":["中国人民解放军第二炮兵星火文工团文革筹委会"],"page_start":53,"page_end":56,"dates":[{"year":1967}],"ocr":{"vsplit":0.35}},{"title":"高举革命大联合的旗帜","authors":["洪平"],"page_start":57,"page_end":58,"dates":[{"year":1967}]},{"title":"坚决支持革命干部站出来","authors":["洪晓斌"],"page_start":59,"page_end":61,"dates":[{"year":1967}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/7a8f3b48-1107-4235-b6cc-0b092aacb163.pdf'),
  },
  {
    entity: {
      id: '224de5af-a8f4-43a4-8181-3dbf11f1b42f',
      name: '红旗一九六七年第十期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/224de5af-a8f4-43a4-8181-3dbf11f1b42f.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"关于正确处理人民内部矛盾的问题","authors":["毛泽东"],"page_start":4,"page_end":33,"dates":[{"year":1957,"month":2,"day":27}]},{"title":"无产阶级专政下进行革命的理论武器——纪念《关于正确处理人民内部矛盾的问题》发表十周年","authors":[],"page_start":34,"page_end":41,"dates":[{"year":1967}]},{"title":"伟大的战略措施","authors":["红旗杂志","人民日报"],"page_start":42,"page_end":45,"dates":[{"year":1967}]},{"title":"活学活用毛主席著作正确处理人民内部矛盾","authors":["中国人民解放军北京部队空军直属队毛泽东思想宣传队"],"page_start":46,"page_end":50,"dates":[{"year":1967}],"ocr":{"vsplit":0.35}},{"title":"严格区分两类不同性质的矛盾正确对待受蒙蔽的群众","authors":["中国人民解放军空军政治部文工团革命委员会"],"page_start":51,"page_end":54,"dates":[{"year":1967}],"ocr":{"vsplit":0.35}},{"title":"永远忠于毛主席的无产阶级革命路线","authors":["李水清","陈继德"],"page_start":55,"page_end":61,"dates":[{"year":1967}]},{"title":"正确认识和运用无产阶级专政下的大民主","authors":["洪晓斌"],"page_start":62,"page_end":64,"dates":[{"year":1967}],"ocr":{"vsplit":0.35}},{"title":"防止资产阶级思想侵蚀","authors":["《红旗》杂志编辑部"],"page_start":65,"page_end":66,"dates":[{"year":1967}]},{"title":"山东省革命委员会关于认真转变作风若干规定","authors":["山东省革命委员会"],"page_start":67,"page_end":67,"dates":[{"year":1967,"month":6,"day":7}]},{"title":"念念不忘斗争大方向——三论无产阶级革命派怎样掌好权用好权","authors":["文汇报"],"page_start":68,"page_end":70,"dates":[{"year":1967,"month":6,"day":11}]},{"title":"把大批判和本单位斗批改结合起来","authors":["上海爱民糖果厂工人革命造反队"],"page_start":71,"page_end":75,"dates":[{"year":1967}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/224de5af-a8f4-43a4-8181-3dbf11f1b42f.pdf'),
  },
  {
    entity: {
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      id: 'd309a3d9-17e8-4491-9602-57b226112aac',
      name: '帝国主义国家中的人民战争',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/d309a3d9-17e8-4491-9602-57b226112aac.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"帝国主义国家中的人民战争","authors":["法国毛主义共产党"],"page_start":1,"page_end":8,"dates":[{"year":2009}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/d309a3d9-17e8-4491-9602-57b226112aac.pdf'),
  },
  {
    entity: {
      id: '1c08350f-94a5-442d-a4b2-8669042a15f3',
      name: '社会改良还是社会革命（生活·读书·新知三联书店1958年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/1c08350f-94a5-442d-a4b2-8669042a15f3.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"出版者说明","authors":[],"page_start":4,"page_end":4,"dates":[{"year":1958}]},{"title":"社会改良还是社会革命","authors":["罗莎·卢森堡"],"page_start":6,"page_end":75,"dates":[{"year":1899}]},{"title":"民军和军国主义","authors":["罗莎·卢森堡"],"page_start":76,"page_end":92,"dates":[{"year":1899,"month":2}]},{"title":"站在工人背后的“德意志科学”","authors":["罗莎·卢森堡"],"page_start":93,"page_end":119,"is_range_date":true,"dates":[{"year":1899},{"year":1900}]}],
      ocr: {"content_thresholds":[0.139,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/1c08350f-94a5-442d-a4b2-8669042a15f3.pdf'),
  },
  {
    entity: {
      id: '1ca028e4-fff4-4082-b7bb-2e7960cb315e',
      name: '论一元论唯物史观的发展（生活·读书·新知三联书店1973年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/1ca028e4-fff4-4082-b7bb-2e7960cb315e.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"第二、三版序言","authors":["普列汉诺夫"],"page_start":6,"page_end":7,"dates":[]},{"title":"第一章 十八世纪的法国唯物主义","authors":["普列汉诺夫"],"page_start":8,"page_end":17,"dates":[{"year":1895}]},{"title":"第二章 复辟时代的法国历史家","authors":["普列汉诺夫"],"page_start":18,"page_end":31,"dates":[{"year":1895}]},{"title":"第三章 空想社会主义者","authors":["普列汉诺夫"],"page_start":32,"page_end":62,"dates":[{"year":1895}]},{"title":"第四章 德国的唯心主义哲学","authors":["普列汉诺夫"],"page_start":63,"page_end":104,"dates":[{"year":1895}]},{"title":"第五章 现代唯物主义","authors":["普列汉诺夫"],"page_start":105,"page_end":212,"dates":[{"year":1895}]},{"title":"结论","authors":["普列汉诺夫"],"page_start":213,"page_end":242,"dates":[{"year":1895}]},{"title":"附录一 再论米海洛夫先生，再论“三段式”","authors":["普列汉诺夫"],"page_start":243,"page_end":251,"dates":[{"year":1895}]},{"title":"附录二 对我们的反对者讲几句话","authors":["普列汉诺夫"],"page_start":252,"page_end":294,"dates":[{"year":1895}]},{"title":"注释","authors":[],"page_start":296,"page_end":313,"dates":[]}],
      ocr: {"content_thresholds":[0,0.101,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/1ca028e4-fff4-4082-b7bb-2e7960cb315e.pdf'),
  },
  {
    entity: {
      id: '356200c1-f3bd-460d-b160-e9b1d6c20060',
      name: '论个人在历史上的作用问题（生活·读书·新知三联书店1964年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/356200c1-f3bd-460d-b160-e9b1d6c20060.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"论个人在历史上的作用问题","authors":["普列汉诺夫"],"page_start":4,"page_end":55,"dates":[{"year":1898}]},{"title":"注释","authors":[],"page_start":56,"page_end":61,"dates":[]},{"title":"人名索引","authors":[],"page_start":62,"page_end":69,"ocr":{"auto_vsplit":false,"vsplit":0.495},"dates":[]}],
      ocr: {"content_thresholds":[0,0.128,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/356200c1-f3bd-460d-b160-e9b1d6c20060.pdf'),
  },
  {
    entity: {
      id: 'd4e5bc82-4b7e-437b-89ae-e720f47d3d82',
      name: '红旗一九六七年第九期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/d4e5bc82-4b7e-437b-89ae-e720f47d3d82.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"看了《逼上梁山》以后写给延安平剧院的信","authors":["毛泽东"],"page_start":4,"page_end":4,"dates":[{"year":1944,"month":1,"day":9}]},{"title":"应当重视电影《武训传》的讨论","authors":["毛泽东"],"page_start":5,"page_end":7,"dates":[{"year":1951,"month":5,"day":20}]},{"title":"关于红楼梦研究问题的信","authors":["毛泽东"],"page_start":8,"page_end":9,"dates":[{"year":1954,"month":10,"day":16}]},{"title":"关于文学艺术的两个批示","authors":["毛泽东"],"page_start":10,"page_end":11,"dates":[{"year":1963,"month":12,"day":12},{"year":1964,"month":6,"day":27}]},{"title":"给军委常委的信","authors":["林彪"],"page_start":12,"page_end":12,"dates":[{"year":1966,"month":3,"day":22}]},{"title":"林彪同志委托江青同志召开的部队文艺工作座谈会纪要","authors":[],"page_start":13,"page_end":22,"dates":[{"year":1967,"month":6}]},{"title":"伟大的真理，锐利的武器","authors":["《红旗》杂志编辑部"],"page_start":23,"page_end":26,"dates":[{"year":1967,"month":6}]},{"title":"两个根本对立的文件","authors":["《红旗》杂志编辑部"],"page_start":27,"page_end":30,"dates":[{"year":1967,"month":6}]},{"title":"姚文元在上海纪念毛泽东《在延安文艺座谈会上的讲话》发表二十五周年大会上的讲话","authors":["姚文元"],"page_start":31,"page_end":37,"dates":[{"year":1967,"month":5,"day":23}]},{"title":"码头工人登上了戏剧舞台","authors":["上海港务局第五装卸区工人革命造反队"],"page_start":38,"page_end":39,"ocr":{"auto_vsplit":false,"vsplit":0.43},"dates":[{"year":1967,"month":6}]},{"title":"《奇袭白虎团》是一出体现了毛泽东思想的好戏","authors":["杨育才"],"page_start":40,"page_end":42,"ocr":{"auto_vsplit":false,"vsplit":0.43},"dates":[{"year":1967,"month":6}]},{"title":"工农兵一定要占领艺术舞台","authors":["吕嘉才"],"page_start":42,"page_end":43,"ocr":{"auto_vsplit":false,"vsplit":0.43},"dates":[{"year":1967,"month":6}]},{"title":"光焰无际的毛主席的革命文艺路线胜利万岁","authors":["杜近芳"],"page_start":44,"page_end":49,"ocr":{"auto_vsplit":false,"vsplit":0.43},"dates":[{"year":1967,"month":6}]},{"title":"毛主席的革命文艺路线的新胜利","authors":["新兵"],"page_start":49,"page_end":52,"ocr":{"auto_vsplit":false,"vsplit":0.43},"dates":[{"year":1967,"month":6}]},{"title":"战无不胜的毛泽东文艺思想万岁——赞革命样板戏的划时代历史意义","authors":["文泽雨"],"page_start":53,"page_end":59,"ocr":{"auto_vsplit":false,"vsplit":0.43},"dates":[{"year":1967,"month":6}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/d4e5bc82-4b7e-437b-89ae-e720f47d3d82.pdf'),
  },
  {
    entity: {
      id: '30299295-af23-4582-9bfc-2c78a5f913fa',
      name: '红旗一九六七年第八期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/30299295-af23-4582-9bfc-2c78a5f913fa.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"在延安文艺座谈会上的讲话","authors":["毛泽东"],"page_start":5,"page_end":28,"dates":[{"year":1942,"month":5}]},{"title":"陈伯达在纪念毛泽东《在延安文艺座谈会上的讲话》发表二十五周年大会上的讲话","authors":["陈伯达"],"page_start":29,"page_end":34,"dates":[{"year":1967,"month":5,"day":23}]},{"title":"戚本禹在纪念毛泽东《在延安文艺座谈会上的讲话》发表二十五周年大会上的讲话","authors":["戚本禹"],"page_start":35,"page_end":45,"dates":[{"year":1967,"month":5,"day":23}]},{"title":"在首都纪念毛主席的光辉著作《在延安文艺座谈会上的讲话》发表二十五周年大会上金敬迈同志的讲话","authors":["金敬迈"],"page_start":46,"page_end":48,"dates":[{"year":1967,"month":5,"day":23}]},{"title":"在首都纪念毛主席的光辉著作《在延安文艺座谈会上的讲话》发表二十五周年大会上于会泳同志的讲话","authors":["于会泳"],"page_start":49,"page_end":51,"dates":[{"year":1967,"month":5,"day":23}]},{"title":"在首都纪念毛主席的光辉著作《在延安文艺座谈会上的讲话》发表二十五周年大会上钟润夏同志的讲话","authors":["钟润夏"],"page_start":51,"page_end":54,"dates":[{"year":1967,"month":5,"day":23}]},{"title":"在首都纪念毛主席的光辉著作《在延安文艺座谈会上的讲话》发表二十五周年大会上陈汝棠同志的讲话","authors":["陈汝棠"],"page_start":54,"page_end":56,"dates":[{"year":1967,"month":5,"day":23}]},{"title":"在首都纪念毛主席的光辉著作《在延安文艺座谈会上的讲话》发表二十五周年大会给毛主席的致敬信","authors":[],"page_start":57,"page_end":58,"dates":[{"year":1967,"month":5,"day":23}]},{"title":"为捍卫无产阶级专政而斗争──纪念《在延安文艺座谈会上的讲话》发表二十五周年","authors":["《红旗》杂志编辑部"],"page_start":59,"page_end":62,"dates":[{"year":1967,"month":5,"day":22}]},{"title":"赞京剧革命现代戏《智取威虎山》","authors":["洪平"],"page_start":63,"page_end":68,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967,"month":5}]},{"title":"塑造高大的无产阶级英雄形象","authors":["钱浩梁"],"page_start":69,"page_end":73,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967,"month":5}]},{"title":"我们工农兵一定要做文艺舞台上的主人","authors":["北京光华木材厂红色造反者"],"page_start":74,"page_end":75,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967,"month":5}]},{"title":"毛主席的革命文艺路线万岁","authors":["韩爱晶"],"page_start":76,"page_end":77,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967,"month":5}]},{"title":"智取威虎山（剧本）","authors":["上海京剧院集体改编"],"page_start":78,"page_end":100,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967,"month":5}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/30299295-af23-4582-9bfc-2c78a5f913fa.pdf'),
  },
  {
    entity: {
      id: 'b47af6ff-5fc5-4226-9320-3bce4c882455',
      name: '红旗一九六七年第七期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/b47af6ff-5fc5-4226-9320-3bce4c882455.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"中国共产党中央委员会通知——五·一六通知","authors":["毛泽东"],"page_start":3,"page_end":8,"dates":[{"year":1966,"month":5,"day":16}]},{"title":"伟大的历史文件","authors":["《人民日报》编辑部","《红旗》杂志编辑部"],"page_start":9,"page_end":13,"dates":[{"year":1967,"month":5,"day":18}]},{"title":"抓住主要矛盾，掌握斗争大方向──学习中共中央一九六六年五月十六日的《通知》","authors":["《红旗》杂志评论员"],"page_start":14,"page_end":16,"dates":[{"year":1967,"month":5,"day":19}]},{"title":"光辉的文献 指路的明灯","authors":["北京邮票厂革命造反总部"],"page_start":17,"page_end":18,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967,"month":5}]},{"title":"为保卫无产阶级政权站好岗打好仗","authors":["董小海"],"page_start":19,"page_end":20,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967,"month":5}]},{"title":"把无产阶级文化大革命进行到底","authors":["《新北大》编辑部"],"page_start":20,"page_end":22,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967,"month":5}]},{"title":"《通知》指明了斗争的大方向","authors":["王大宾"],"page_start":22,"page_end":23,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967,"month":5}]},{"title":"把斗争矛头指向最危险的敌人","authors":["战犹酣"],"page_start":24,"page_end":27,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967,"month":5}]},{"title":"警惕阶级敌人扰乱我们的革命阵线","authors":["武文"],"page_start":27,"page_end":29,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967,"month":5}]},{"title":"学习《伟大的历史文件》的一个资料","authors":[],"page_start":30,"page_end":34,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967,"month":5}]},{"title":"反动电影《燎原》与中国的赫鲁晓夫","authors":["黄锡章"],"page_start":35,"page_end":46,"dates":[{"year":1967,"month":5}]},{"title":"掌握斗争大方向，实现革命的“三结合”","authors":["北京第二机床厂革命造反总部"],"page_start":47,"page_end":51,"dates":[{"year":1967,"month":5}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/b47af6ff-5fc5-4226-9320-3bce4c882455.pdf'),
  },
  {
    entity: {
      id: '65b91eb9-585f-4834-9613-dd9e4d4824a9',
      name: '红旗一九六七年第六期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/65b91eb9-585f-4834-9613-dd9e4d4824a9.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"《修养》的要害是背叛无产阶级专政","authors":["《人民日报》编辑部","《红旗》杂志编辑部"],"page_start":4,"page_end":10,"dates":[{"year":1967,"month":5,"day":8}]},{"title":"给毛主席的致敬信","authors":["北京市革命委员会"],"page_start":11,"page_end":13,"dates":[{"year":1967,"month":4,"day":20}]},{"title":"周恩来在北京市革命委员会成立大会上的讲话","authors":[],"page_start":14,"page_end":16,"dates":[{"year":1967,"month":4,"day":20}]},{"title":"江青在北京市革命委员会成立大会上的讲话","authors":["江青"],"page_start":17,"page_end":19,"dates":[{"year":1967,"month":4,"day":20}]},{"title":"谢富治在北京市革命委员会成立大会上的讲话","authors":["谢富治"],"page_start":20,"page_end":25,"dates":[{"year":1967,"month":4,"day":20}]},{"title":"谈京剧革命——一九六四年七月在京剧现代戏观摩演出人员的座谈会上的讲话","authors":["江青"],"page_start":26,"page_end":28,"dates":[{"year":1964,"month":7}]},{"title":"欢呼京剧革命的伟大胜利","authors":["《红旗》杂志编辑部"],"page_start":29,"page_end":30,"dates":[{"year":1967,"month":5,"day":8}]},{"title":"热烈响应拥军爱民的号召","authors":["《红旗》杂志编辑部"],"page_start":31,"page_end":32,"dates":[{"year":1967}]},{"title":"坚定地同无产阶级革命派站在一起","authors":["潘复生"],"page_start":33,"page_end":37,"dates":[{"year":1967,"month":5,"day":8}]},{"title":"发扬人民军队的光荣传统在无产阶级文化大革命中立新功","authors":["李再含"],"page_start":38,"page_end":40,"dates":[{"year":1967,"month":5,"day":13}]},{"title":"用毛泽东思想支援工业","authors":["解放军某部支援大同煤矿毛泽东思想宣传队"],"page_start":41,"page_end":45,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]},{"title":"毛泽东思想是办好新《文汇报》的灵魂──上海《文汇报》新生后办报的几点经验","authors":["《红旗》杂志编辑部"],"page_start":46,"page_end":50,"dates":[{"year":1967,"month":5,"day":8}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/65b91eb9-585f-4834-9613-dd9e4d4824a9.pdf'),
  },
  {
    entity: {
      id: '678bf2d4-62a5-482a-ae4b-122bdc1a038c',
      name: '红旗一九六七年第五期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/678bf2d4-62a5-482a-ae4b-122bdc1a038c.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"中共中央给全国厂矿企业革命职工、革命干部的信","authors":[],"page_start":4,"page_end":5,"dates":[{"year":1967,"month":3,"day":18}]},{"title":"论革命的“三结合”","authors":["《红旗》杂志编辑部"],"page_start":6,"page_end":9,"dates":[{"year":1967}]},{"title":"爱国主义还是卖国主义？评反动影片《清宫秘史》","authors":["戚本禹"],"page_start":10,"page_end":24,"dates":[{"year":1967,"month":3,"day":30}]},{"title":"在干部问题上的资产阶级反动路线必须批判","authors":["《红旗》杂志评论员"],"page_start":25,"page_end":26,"dates":[{"year":1967,"month":3,"day":30}]},{"title":"“打击一大片，保护一小撮”是资产阶级反动路线的一个组成部分（一九六六年六、七两月清华大学工作组在干部问题上执行资产阶级反动路线的情况调查）","authors":["《红旗》杂志编辑部调查员"],"page_start":27,"page_end":31,"dates":[{"year":1967,"month":3,"day":30}]},{"title":"放手发动群众，粉碎反革命复辟阴谋","authors":["王效禹"],"page_start":32,"page_end":34,"dates":[{"year":1967,"month":3,"day":30}]},{"title":"跟着毛主席革命到底","authors":["潘复生"],"page_start":35,"page_end":39,"dates":[{"year":1967,"month":3,"day":21}]},{"title":"我们是怎样支持无产阶级革命派的","authors":["梁辑卿","杜方平","吴大胜"],"page_start":40,"page_end":44,"dates":[{"year":1967,"month":3}]},{"title":"迎着阶级斗争的大风浪奋勇前进","authors":["林杰"],"page_start":45,"page_end":48,"dates":[{"year":1967,"month":3}]},{"title":"大寨在毛泽东思想的光辉照耀下前进","authors":["陈永贵"],"page_start":49,"page_end":52,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967,"month":3}]},{"title":"坚决执行毛主席的干部政策","authors":["黑龙江省依兰县红色造反者"],"page_start":53,"page_end":57,"dates":[{"year":1967}]},{"title":"把革命放在首位","authors":["《红旗》杂志编辑部"],"page_start":58,"page_end":59,"dates":[{"year":1967}]},{"title":"哈尔滨铁路局夺权后运输形势大好","authors":[],"page_start":59,"page_end":61,"dates":[{"year":1967}]},{"title":"革命统帅生产——山西省军区某部协同太原第一热电厂无产阶级革命派管理工业的基本经验","authors":["中国人民解放军山西省军区支援工业工作队","太原第一热电厂革命委员会"],"page_start":62,"page_end":66,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/678bf2d4-62a5-482a-ae4b-122bdc1a038c.pdf'),
  },
  {
    entity: {
      id: '0aa42889-8ffa-4c59-8328-f5fecb4c8bc5',
      name: '作为发展人民战争的一部分，进行秘鲁共产党的全面重组，以在全国夺取政权！抓住贡萨罗思想解决新问题',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/0aa42889-8ffa-4c59-8328-f5fecb4c8bc5.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"作为发展人民战争的一部分，进行秘鲁共产党的全面重组，以在全国夺取政权！抓住贡萨罗思想解决新问题","authors":["新民主主义协会"],"page_start":1,"page_end":22,"dates":[{"year":2011,"month":10}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.169,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/0aa42889-8ffa-4c59-8328-f5fecb4c8bc5.pdf'),
  },
  {
    entity: {
      id: '18e2f682-cab0-46c1-8938-73d651dfe1a9',
      name: '论贡萨罗的普适贡献',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/18e2f682-cab0-46c1-8938-73d651dfe1a9.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"论贡萨罗的普适贡献","authors":["中国革命左派"],"page_start":1,"page_end":24,"dates":[{"year":2022}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.085,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/18e2f682-cab0-46c1-8938-73d651dfe1a9.pdf'),
  },
  {
    entity: {
      id: 'b22aa9e7-4513-4f72-b912-17f5d5138bb4',
      name: '家庭、私有制和国家的起源（人民出版社1972年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/b22aa9e7-4513-4f72-b912-17f5d5138bb4.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"第一版序言","authors":["恩格斯"],"page_start":8,"page_end":10,"is_range_date":true,"dates":[{"year":1884,"month":3},{"year":1884,"month":5,"day":26}]},{"title":"第四版序言","authors":["恩格斯"],"page_start":11,"page_end":23,"dates":[{"year":1891,"month":6,"day":16}]},{"title":"一 史前各文化阶段","authors":["恩格斯"],"page_start":24,"page_end":30,"is_range_date":true,"dates":[{"year":1884,"month":3},{"year":1884,"month":5,"day":26}]},{"title":"二 家庭","authors":["恩格斯"],"page_start":30,"page_end":86,"is_range_date":true,"dates":[{"year":1884,"month":3},{"year":1884,"month":5,"day":26}]},{"title":"三 易洛魁人的氏族","authors":["恩格斯"],"page_start":86,"page_end":101,"is_range_date":true,"dates":[{"year":1884,"month":3},{"year":1884,"month":5,"day":26}]},{"title":"四 希腊人的氏族","authors":["恩格斯"],"page_start":101,"page_end":111,"is_range_date":true,"dates":[{"year":1884,"month":3},{"year":1884,"month":5,"day":26}]},{"title":"五 雅典国家的产生","authors":["恩格斯"],"page_start":111,"page_end":122,"is_range_date":true,"dates":[{"year":1884,"month":3},{"year":1884,"month":5,"day":26}]},{"title":"六 罗马的氏族和国家","authors":["恩格斯"],"page_start":122,"page_end":133,"is_range_date":true,"dates":[{"year":1884,"month":3},{"year":1884,"month":5,"day":26}]},{"title":"七 克尔特人和德意志人的氏族","authors":["恩格斯"],"page_start":133,"page_end":148,"is_range_date":true,"dates":[{"year":1884,"month":3},{"year":1884,"month":5,"day":26}]},{"title":"八 德意志人国家的形成","authors":["恩格斯"],"page_start":148,"page_end":160,"is_range_date":true,"dates":[{"year":1884,"month":3},{"year":1884,"month":5,"day":26}]},{"title":"九 野蛮时代和文明时代","authors":["恩格斯"],"page_start":160,"page_end":181,"is_range_date":true,"dates":[{"year":1884,"month":3},{"year":1884,"month":5,"day":26}]},{"title":"附录 新发现的一个群婚实例","authors":["恩格斯"],"page_start":181,"page_end":185,"is_range_date":true,"dates":[{"year":1892,"month":11},{"year":1892,"month":12,"day":4}]},{"title":"注释","authors":[],"page_start":186,"page_end":203,"dates":[]},{"title":"族名索引","authors":[],"page_start":204,"page_end":210,"dates":[]}],
      ocr: {"content_thresholds":[0,0.096,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/b22aa9e7-4513-4f72-b912-17f5d5138bb4.pdf'),
  },
  {
    entity: {
      id: '65e1c2e6-7cad-438f-8bfb-fab996595b1c',
      name: '关于正确处理人民内部矛盾的问题（毛泽东著作选读）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/65e1c2e6-7cad-438f-8bfb-fab996595b1c.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"关于正确处理人民内部矛盾的问题","authors":["毛泽东"],"page_start":1,"page_end":54,"dates":[{"year":1957,"month":2,"day":27}]}],
      ocr: {"content_thresholds":[0.139,0,0,0],"standard_paragraph_merge_strategy_threshold":0.178,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/65e1c2e6-7cad-438f-8bfb-fab996595b1c.pdf'),
  },
  {
    entity: {
      id: '8a563ff2-adac-4454-a821-36ef7e584dd4',
      name: '我们应该如何看待秘鲁的人民战争？',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/8a563ff2-adac-4454-a821-36ef7e584dd4.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"我们应该如何看待秘鲁的人民战争？","authors":["红色文献翻译"],"page_start":1,"page_end":11,"dates":[{"year":2020}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/8a563ff2-adac-4454-a821-36ef7e584dd4.pdf'),
  },
  {
    entity: {
      id: '7ca5f98f-3f32-47e2-a382-f82c1c185a61',
      name: '贡萨罗主席虎笼演讲',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/7ca5f98f-3f32-47e2-a382-f82c1c185a61.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"贡萨罗主席虎笼演讲","authors":["贡萨罗"],"page_start":1,"page_end":3,"dates":[{"year":1992,"month":9,"day":24}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/7ca5f98f-3f32-47e2-a382-f82c1c185a61.pdf'),
  },
  {
    entity: {
      id: '8df86c6d-7b4e-4d28-8d93-4dfe4cb87a51',
      name: '与贡萨罗主席的访谈',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/8df86c6d-7b4e-4d28-8d93-4dfe4cb87a51.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"一、目标","authors":["贡萨罗"],"page_start":2,"page_end":3,"dates":[{"year":1988,"month":7}]},{"title":"二、意识形态问题","authors":["贡萨罗"],"page_start":3,"page_end":10,"dates":[{"year":1988,"month":7}]},{"title":"三、关于党","authors":["贡萨罗"],"page_start":10,"page_end":25,"dates":[{"year":1988,"month":7}]},{"title":"四、人民战争","authors":["贡萨罗"],"page_start":25,"page_end":44,"dates":[{"year":1988,"month":7}]},{"title":"五、关于国家政治局势","authors":["贡萨罗"],"page_start":44,"page_end":66,"dates":[{"year":1988,"month":7}]},{"title":"六、国际政治","authors":["贡萨罗"],"page_start":66,"page_end":79,"dates":[{"year":1988,"month":7}]},{"title":"七、其他问题","authors":["贡萨罗"],"page_start":79,"page_end":84,"dates":[{"year":1988,"month":7}]}],
      ocr: {"content_thresholds":[0,0.076,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/8df86c6d-7b4e-4d28-8d93-4dfe4cb87a51.pdf'),
  },
  {
    entity: {
      id: '0c621503-01d4-4b8f-9cf2-f405bbb14ad9',
      name: '纪念中国共产党成立一百周年',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/0c621503-01d4-4b8f-9cf2-f405bbb14ad9.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"纪念中国共产党成立一百周年","authors":["共产主义小组（毛主义）"],"page_start":1,"page_end":23,"dates":[{"year":2021,"month":7,"day":1}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.186,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/0c621503-01d4-4b8f-9cf2-f405bbb14ad9.pdf'),
  },
  {
    entity: {
      id: '01970a4d-895c-4f40-9511-60b51d869906',
      name: '唯物辩证法大纲（人民出版社1978年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/01970a4d-895c-4f40-9511-60b51d869906.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"出版说明","authors":[],"page_start":4,"page_end":5,"dates":[{"year":1978,"month":5}]},{"title":"引言","authors":["李达"],"page_start":14,"page_end":15,"dates":[{"year":1978}]},{"title":"第一篇 前言 马克思主义哲学是唯一科学和彻底革命的哲学","authors":["李达"],"page_start":18,"page_end":21,"dates":[{"year":1978}]},{"title":"第一篇第一章 哲学的基本问题的第一方面","authors":["李达"],"page_start":22,"page_end":42,"dates":[{"year":1978}]},{"title":"第一篇第二章 哲学的基本问题的第二方面","authors":["李达"],"page_start":43,"page_end":54,"dates":[{"year":1978}]},{"title":"第一篇第三章 辩证法与形而上学的对立","authors":["李达"],"page_start":55,"page_end":70,"dates":[{"year":1978}]},{"title":"第一篇第四章 唯物辩证法的对象及其一般特征","authors":["李达"],"page_start":71,"page_end":83,"dates":[{"year":1978}]},{"title":"第二篇 前言 马克思主义哲学是人类认识史的积极成果的批判的总结","authors":["李达"],"page_start":86,"page_end":92,"dates":[{"year":1978}]},{"title":"第二篇第一章 唯物辩证法的前史","authors":["李达"],"page_start":93,"page_end":129,"dates":[{"year":1978}]},{"title":"第二篇第二章 唯物辩证法的创立和发展","authors":["李达"],"page_start":130,"page_end":173,"dates":[{"year":1978}]},{"title":"第三篇 前言 唯物辩证法是彻底的物质一元论","authors":["李达"],"page_start":176,"page_end":178,"dates":[{"year":1978}]},{"title":"第三篇第一章 物质、运动、空间与时间","authors":["李达"],"page_start":179,"page_end":222,"dates":[{"year":1978}]},{"title":"第三篇第二章 世界的物质的统一性和发展的无限性","authors":["李达"],"page_start":223,"page_end":245,"dates":[{"year":1978}]},{"title":"第四篇 前言 唯物辩证法的规律是自然、社会和思维发展的普遍规律","authors":["李达"],"page_start":248,"page_end":253,"dates":[{"year":1978}]},{"title":"第四篇第一章 对立统一规律","authors":["李达"],"page_start":254,"page_end":296,"dates":[{"year":1978}]},{"title":"第四篇第二章 量变质变规律","authors":["李达"],"page_start":297,"page_end":330,"dates":[{"year":1978}]},{"title":"第四篇第三章 肯定否定规律","authors":["李达"],"page_start":331,"page_end":355,"dates":[{"year":1978}]},{"title":"第四篇第四章 唯物辩证法的诸成对范畴","authors":["李达"],"page_start":356,"page_end":409,"dates":[{"year":1978}]},{"title":"第四篇第四章 唯物辩证法的诸成对范畴","authors":["李达"],"page_start":356,"page_end":409,"dates":[{"year":1978}]},{"title":"第五篇 前言 辩证法、认识论和逻辑学的同一性","authors":["李达"],"page_start":412,"page_end":425,"dates":[{"year":1978}]},{"title":"第五篇第一章 唯物辩证法的认识论是科学的革命的认识论","authors":["李达"],"page_start":426,"page_end":436,"dates":[{"year":1978}]},{"title":"第五篇第二章 认识对实践的依赖关系","authors":["李达"],"page_start":437,"page_end":449,"dates":[{"year":1978}]},{"title":"第五篇第三章 认识的低级阶段——感性认识","authors":["李达"],"page_start":450,"page_end":461,"dates":[{"year":1978}]},{"title":"第五篇第四章 认识的高级阶段——理性认识","authors":["李达"],"page_start":462,"page_end":482,"dates":[{"year":1978}]},{"title":"第五篇第五章 认识的检验和发展","authors":["李达"],"page_start":483,"page_end":498,"dates":[{"year":1978}]},{"title":"第五篇第六章 真理论","authors":["李达"],"page_start":499,"page_end":514,"dates":[{"year":1978}]}],
      ocr: {"content_thresholds":[0,0.128,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/01970a4d-895c-4f40-9511-60b51d869906.pdf'),
  },
  {
    entity: {
      id: 'f1a4874b-ff59-4524-acd5-b23fac5d81d1',
      name: '论辩证唯物主义和历史唯物主义',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/f1a4874b-ff59-4524-acd5-b23fac5d81d1.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"论辩证唯物主义和历史唯物主义","authors":["斯大林"],"page_start":1,"page_end":32,"dates":[{"year":1938}]}],
      ocr: {"content_thresholds":[0,0.146,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/f1a4874b-ff59-4524-acd5-b23fac5d81d1.pdf'),
  },
  {
    entity: {
      id: '0bbdba91-48e9-4148-9ec2-38bf6792cca7',
      name: '自然辩证法（人民出版社1971年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/0bbdba91-48e9-4148-9ec2-38bf6792cca7.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"计划草案 - 总计划草案","authors":["恩格斯"],"page_start":9,"page_end":10,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"计划草案 - 局部计划草案","authors":["恩格斯"],"page_start":11,"page_end":11,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"论文 - 导言","authors":["恩格斯"],"page_start":12,"page_end":30,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"论文 - 《反杜林论》旧序。论辩证法","authors":["恩格斯"],"page_start":31,"page_end":39,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"论文 - 神灵世界中的自然科学","authors":["恩格斯"],"page_start":40,"page_end":51,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"论文 - 辩证法","authors":["恩格斯"],"page_start":52,"page_end":58,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"论文 - 运动的基本形式","authors":["恩格斯"],"page_start":59,"page_end":75,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"论文 - 运动的量度。——功","authors":["恩格斯"],"page_start":76,"page_end":90,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"论文 - 潮汐摩擦。康德和汤姆生——台特","authors":["恩格斯"],"page_start":91,"page_end":95,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"论文 - 热","authors":["恩格斯"],"page_start":96,"page_end":100,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"论文 - 电","authors":["恩格斯"],"page_start":101,"page_end":154,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"论文 - 劳动在从猿到人转变过程中的作用","authors":["恩格斯"],"page_start":155,"page_end":167,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"札记和片断 - 科学历史摘要","authors":["恩格斯"],"page_start":168,"page_end":185,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"札记和片断 - 自然科学和哲学","authors":["恩格斯"],"page_start":186,"page_end":194,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"札记和片断 - 辩证法","authors":["恩格斯"],"page_start":195,"page_end":226,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"札记和片断 - 物质的运动形式。科学分类","authors":["恩格斯"],"page_start":227,"page_end":240,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"札记和片断 - 数学","authors":["恩格斯"],"page_start":241,"page_end":255,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"札记和片断 - 力学和天文学","authors":["恩格斯"],"page_start":256,"page_end":261,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"札记和片断 - 物理学","authors":["恩格斯"],"page_start":262,"page_end":274,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"札记和片断 - 化学","authors":["恩格斯"],"page_start":275,"page_end":276,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"札记和片断 - 生物学","authors":["恩格斯"],"page_start":277,"page_end":293,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"各束手稿的名称和目录","authors":["恩格斯"],"page_start":294,"page_end":295,"is_range_date":true,"dates":[{"year":1873},{"year":1883}]},{"title":"注释","authors":[],"page_start":296,"page_end":333,"dates":[]},{"title":"《自然辩证法》各束手稿内容索引","authors":[],"page_start":334,"page_end":341,"dates":[]},{"title":"《自然辩证法》论文和片断成稿年表","authors":[],"page_start":342,"page_end":346,"dates":[]}],
      ocr: {"content_thresholds":[0,0.102,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/0bbdba91-48e9-4148-9ec2-38bf6792cca7.pdf'),
  },
  {
    entity: {
      id: '5a84af78-bb0e-4b06-9927-91920277b267',
      name: '哥达纲领批判（人民出版社1971年版）（2）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/5a84af78-bb0e-4b06-9927-91920277b267.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"恩格斯致奥古斯特·倍倍尔","authors":["恩格斯"],"page_start":3,"page_end":11,"is_range_date":true,"dates":[{"year":1875,"month":3,"day":18},{"year":1875,"month":3,"day":28}]},{"title":"恩格斯致威廉·白拉克","authors":["恩格斯"],"page_start":12,"page_end":15,"dates":[{"year":1875,"month":10,"day":11}]},{"title":"恩格斯致奥古斯特·倍倍尔","authors":["恩格斯"],"page_start":16,"page_end":18,"dates":[{"year":1875,"month":10,"day":12}]},{"title":"恩格斯致卡尔·考茨基","authors":["恩格斯"],"page_start":19,"page_end":20,"dates":[{"year":1891,"month":1,"day":7}]},{"title":"恩格斯致卡尔·考茨基","authors":["恩格斯"],"page_start":21,"page_end":21,"dates":[{"year":1891,"month":1,"day":15}]},{"title":"恩格斯致卡尔·考茨基","authors":["恩格斯"],"page_start":22,"page_end":24,"dates":[{"year":1891,"month":2,"day":3}]},{"title":"恩格斯致卡尔·考茨基","authors":["恩格斯"],"page_start":25,"page_end":27,"dates":[{"year":1891,"month":2,"day":11}]},{"title":"恩格斯致弗里德里希·阿道夫·左尔格","authors":["恩格斯"],"page_start":28,"page_end":29,"dates":[{"year":1891,"month":2,"day":11}]},{"title":"恩格斯致卡尔·考茨基","authors":["恩格斯"],"page_start":30,"page_end":33,"dates":[{"year":1891,"month":2,"day":23}]},{"title":"恩格斯致弗里德里希·阿道夫·左尔格","authors":["恩格斯"],"page_start":34,"page_end":34,"dates":[{"year":1891,"month":3,"day":4}]},{"title":"恩格斯致奥古斯特·倍倍尔","authors":["恩格斯"],"page_start":35,"page_end":40,"is_range_date":true,"dates":[{"year":1891,"month":5,"day":1},{"year":1891,"month":5,"day":2}]},{"title":"德国社会民主工党纲领","authors":["德国社会民主工党"],"page_start":41,"page_end":43,"dates":[{"year":1869}]},{"title":"德国社会主义工人党纲领","authors":["德国社会民主工党"],"page_start":44,"page_end":46,"dates":[{"year":1875}]},{"title":"注释","authors":[],"page_start":47,"page_end":56,"dates":[]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.178,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/5a84af78-bb0e-4b06-9927-91920277b267.pdf'),
  },
  {
    entity: {
      id: '0390c365-6951-4e70-9dc5-9f7aa4c900ab',
      name: '哥达纲领批判（人民出版社1971年版）（1）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/0390c365-6951-4e70-9dc5-9f7aa4c900ab.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"弗里德里希·恩格斯的序言","authors":["恩格斯"],"page_start":8,"page_end":9,"dates":[{"year":1891,"month":1,"day":6}]},{"title":"马克思致威廉·白拉克","authors":["马克思"],"page_start":10,"page_end":12,"dates":[{"year":1875,"month":5,"day":5}]},{"title":"对德国工人党纲领的几点意见","authors":["马克思"],"page_start":13,"page_end":37,"dates":[{"year":1875,"month":5,"day":5}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.178,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/0390c365-6951-4e70-9dc5-9f7aa4c900ab.pdf'),
  },
  {
    entity: {
      id: '15594e62-38a3-46db-b5e7-dc4be1d194fa',
      name: '论列宁主义基础',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/15594e62-38a3-46db-b5e7-dc4be1d194fa.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"论列宁主义基础","authors":["斯大林"],"page_start":1,"page_end":49,"dates":[{"year":1926,"month":4,"day":26},{"year":1926,"month":4,"day":30},{"year":1926,"month":5,"day":9},{"year":1926,"month":5,"day":11},{"year":1926,"month":5,"day":14},{"year":1926,"month":5,"day":15},{"year":1926,"month":5,"day":18}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.178,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/15594e62-38a3-46db-b5e7-dc4be1d194fa.pdf'),
  },
  {
    entity: {
      id: 'ff7c277a-e54a-4c0f-97f7-f1548d7728b1',
      name: '马克思主义哲学基本知识（政治理论课辅助教材）湖南省衡阳、邵阳地区卫生学校编',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/ff7c277a-e54a-4c0f-97f7-f1548d7728b1.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"第一章 什么是马克思主义哲学","authors":["湖南省衡阳地区卫生学校","湖南省邵阳地区卫生学校"],"page_start":8,"page_end":18,"dates":[{"year":1976,"month":3}]},{"title":"第二章 物质和意识","authors":["湖南省衡阳地区卫生学校","湖南省邵阳地区卫生学校"],"page_start":19,"page_end":36,"dates":[{"year":1976,"month":3}]},{"title":"第三章 对立统一规律","authors":["湖南省衡阳地区卫生学校","湖南省邵阳地区卫生学校"],"page_start":37,"page_end":85,"dates":[{"year":1976,"month":3}]},{"title":"第四章 认识和实践","authors":["湖南省衡阳地区卫生学校","湖南省邵阳地区卫生学校"],"page_start":86,"page_end":117,"dates":[{"year":1976,"month":3}]},{"title":"第五章 社会基本矛盾","authors":["湖南省衡阳地区卫生学校","湖南省邵阳地区卫生学校"],"page_start":118,"page_end":139,"dates":[{"year":1976,"month":3}]},{"title":"第六章 阶级和阶级斗争","authors":["湖南省衡阳地区卫生学校","湖南省邵阳地区卫生学校"],"page_start":140,"page_end":162,"dates":[{"year":1976,"month":3}]},{"title":"第七章 国家与革命","authors":["湖南省衡阳地区卫生学校","湖南省邵阳地区卫生学校"],"page_start":163,"page_end":178,"dates":[{"year":1976,"month":3}]},{"title":"第八章 无产阶级专政下的继续革命","authors":["湖南省衡阳地区卫生学校","湖南省邵阳地区卫生学校"],"page_start":179,"page_end":202,"dates":[{"year":1976,"month":3}]},{"title":"第九章 人民群众是历史的创造者","authors":["湖南省衡阳地区卫生学校","湖南省邵阳地区卫生学校"],"page_start":203,"page_end":216,"dates":[{"year":1976,"month":3}]}],
      ocr: {"content_thresholds":[0,0.114,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/ff7c277a-e54a-4c0f-97f7-f1548d7728b1.pdf'),
  },
  {
    entity: {
      id: '5717249f-0249-47cf-9d87-0f960ce7d4b3',
      name: '陈以梅同志在济南市二所对济南工人谈话',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/5717249f-0249-47cf-9d87-0f960ce7d4b3.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"陈以梅同志在济南市二所对济南工人谈话","authors":["陈以梅"],"page_start":1,"page_end":3,"dates":[{"year":1974,"month":3,"day":22}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.186,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/5717249f-0249-47cf-9d87-0f960ce7d4b3.pdf'),
  },
  {
    entity: {
      id: '187473e3-da31-44f3-95e9-8b7b89c95627',
      name: '全国农业劳动模范陈以梅同志在山东省工农兵代表批林批孔汇报大会上的讲话',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/187473e3-da31-44f3-95e9-8b7b89c95627.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"全国农业劳动模范陈以梅同志在山东省工农兵代表批林批孔汇报大会上的讲话","authors":["陈以梅"],"page_start":1,"page_end":7,"dates":[{"year":1974,"month":2,"day":27}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.186,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/187473e3-da31-44f3-95e9-8b7b89c95627.pdf'),
  },
  {
    entity: {
      id: '61ae9a00-9153-4e4e-9b79-f8aeb954c7e9',
      name: '马列毛基本教程',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/61ae9a00-9153-4e4e-9b79-f8aeb954c7e9.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"第一章 引子","authors":["印度共产党（毛主义）"],"page_start":4,"page_end":5,"dates":[]},{"title":"第二章 什么是马列毛主义？","authors":["印度共产党（毛主义）"],"page_start":6,"page_end":8,"dates":[]},{"title":"第三章 社会经济环境致使马克思主义问世","authors":["印度共产党（毛主义）"],"page_start":9,"page_end":13,"dates":[]},{"title":"第四章 马克思和恩格斯在成为马克思主义者之前的早年生活","authors":["印度共产党（毛主义）"],"page_start":14,"page_end":23,"dates":[]},{"title":"第五章 马克思主义的三大源头","authors":["印度共产党（毛主义）"],"page_start":24,"page_end":27,"dates":[]},{"title":"第六章 马克思主义哲学的基本形式：辩证唯物主义和历史唯物主义","authors":["印度共产党（毛主义）"],"page_start":28,"page_end":31,"dates":[]},{"title":"第七章 同空想社会主义的斗争和科学社会主义的构建","authors":["印度共产党（毛主义）"],"page_start":32,"page_end":35,"dates":[]},{"title":"第八章 马克思主义政治经济学","authors":["印度共产党（毛主义）"],"page_start":36,"page_end":38,"dates":[]},{"title":"第九章 马克思主义与工人阶级的联系","authors":["印度共产党（毛主义）"],"page_start":39,"page_end":43,"dates":[]},{"title":"第十章 从巴黎公社中所学到的","authors":["印度共产党（毛主义）"],"page_start":44,"page_end":47,"dates":[]},{"title":"第十一章 马克思主义的传播和机会主义的兴起","authors":["印度共产党（毛主义）"],"page_start":48,"page_end":50,"dates":[]},{"title":"第十二章 马克思主义在俄国——列宁的早年生活","authors":["印度共产党（毛主义）"],"page_start":51,"page_end":56,"dates":[]},{"title":"第十三章 列宁及其新式无产阶级政党","authors":["印度共产党（毛主义）"],"page_start":57,"page_end":60,"dates":[]},{"title":"第十四章 一九〇五年俄国资产阶级革命：无产阶级革命策略发展","authors":["印度共产党（毛主义）"],"page_start":61,"page_end":65,"dates":[]},{"title":"第十五章 第一次世界大战：机会主义兴起与革命策略的发展","authors":["印度共产党（毛主义）"],"page_start":66,"page_end":69,"dates":[]},{"title":"第十六章 列宁对资本主义最高阶段帝国主义的分析","authors":["印度共产党（毛主义）"],"page_start":70,"page_end":72,"dates":[]},{"title":"第十七章 伟大的十月革命","authors":["印度共产党（毛主义）"],"page_start":73,"page_end":78,"dates":[]},{"title":"第十八章 第三国际的成立","authors":["印度共产党（毛主义）"],"page_start":79,"page_end":81,"dates":[]},{"title":"第十九章 民族与殖民地问题","authors":["印度共产党（毛主义）"],"page_start":82,"page_end":85,"dates":[]},{"title":"第二十章 一九一七年革命前斯大林早期的活动及其革命贡献","authors":["印度共产党（毛主义）"],"page_start":86,"page_end":94,"dates":[]},{"title":"第二十一章 社会主义建设：苏联的经验","authors":["印度共产党（毛主义）"],"page_start":95,"page_end":100,"dates":[]},{"title":"第二十二章 对托派及其他机会主义者的斗争","authors":["印度共产党（毛主义）"],"page_start":101,"page_end":104,"dates":[]},{"title":"第二十三章 第二次世界大战时的策略","authors":["印度共产党（毛主义）"],"page_start":105,"page_end":109,"dates":[]},{"title":"第二十四章 毛泽东的早年生活","authors":["印度共产党（毛主义）"],"page_start":110,"page_end":117,"dates":[]},{"title":"第二十五章 毛泽东对右派和“左”的斗争以及中国革命的胜利","authors":["印度共产党（毛主义）"],"page_start":118,"page_end":124,"dates":[]},{"title":"第二十六章 殖民地与半殖民地革命的道路","authors":["印度共产党（毛主义）"],"page_start":125,"page_end":127,"dates":[]},{"title":"第二十七章 毛泽东的哲学","authors":["印度共产党（毛主义）"],"page_start":128,"page_end":132,"dates":[]},{"title":"第二十八章 毛泽东论党","authors":["印度共产党（毛主义）"],"page_start":133,"page_end":137,"dates":[]},{"title":"第二十九章 社会主义建设：中国的经验","authors":["印度共产党（毛主义）"],"page_start":138,"page_end":144,"dates":[]},{"title":"第三十章 大论战：毛主席对赫鲁晓夫现代修正主义的斗争","authors":["印度共产党（毛主义）"],"page_start":145,"page_end":149,"dates":[]},{"title":"第三十一章 无产阶级文化大革命","authors":["印度共产党（毛主义）"],"page_start":150,"page_end":156,"dates":[]},{"title":"第三十二章 毛主席去世之后","authors":["印度共产党（毛主义）"],"page_start":157,"page_end":160,"dates":[]}],
      ocr: {"content_thresholds":[0,0.146,0,0],"standard_paragraph_merge_strategy_threshold":0.116,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/61ae9a00-9153-4e4e-9b79-f8aeb954c7e9.pdf'),
  },
  {
    entity: {
      id: '289bf08c-009d-4507-a4f4-b9f4a5002e1d',
      name: '上海工人革命造反总司令部斗争纪要',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(40)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/289bf08c-009d-4507-a4f4-b9f4a5002e1d/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"上海工人革命造反总司令部斗争纪要","authors":["《工人造反报》编辑部","《一月风暴》编辑部 "],"dates":[{"year":1967}],"page_start":1,"page_end":40}],
      ocr: {"vsplit":0.4},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/289bf08c-009d-4507-a4f4-b9f4a5002e1d'),
  },
  {
    entity: {
      id: 'e3f95fea-9501-4dd7-8e5a-845a1c7234b3',
      name: '杨春甫在全国计划工作座谈会东北组的发言记录',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/e3f95fea-9501-4dd7-8e5a-845a1c7234b3/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"杨春甫在全国计划工作座谈会东北组的发言记录","authors":["杨春甫"],"page_start":2,"page_end":9,"dates":[{"year":1976,"month":7,"day":19}]}],
      ocr: {"content_thresholds":[0,0.104,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/e3f95fea-9501-4dd7-8e5a-845a1c7234b3'),
  },
  {
    entity: {
      id: '1b577929-8e72-4e52-a897-1388a0b4949c',
      name: '杨春甫在全国计划工作座谈会上的发言（要点）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/1b577929-8e72-4e52-a897-1388a0b4949c/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"杨春甫在全国计划工作座谈会上的发言（要点）","authors":["杨春甫"],"page_start":1,"page_end":2,"ocr_exceptions":{"1":{"content_thresholds":[0,0,0.5,0]}},"dates":[{"year":1976,"month":7,"day":19}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/1b577929-8e72-4e52-a897-1388a0b4949c'),
  },
  {
    entity: {
      id: 'd5aa4730-b778-49c2-af22-093b61025603',
      name: '检查交代我向党进攻的思想情况',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d5aa4730-b778-49c2-af22-093b61025603/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"检查交代我向党进攻的思想情况","authors":["杨春甫"],"page_start":2,"page_end":4,"dates":[{"year":1976,"month":12,"day":19}]}],
      ocr: {"content_thresholds":[0,0.076,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/d5aa4730-b778-49c2-af22-093b61025603'),
  },
  {
    entity: {
      id: '2e2e3766-4530-464b-882c-f8b079a63e66',
      name: '检查交代我和上海黄涛串联的犯罪情况',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/2e2e3766-4530-464b-882c-f8b079a63e66/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"检查交代我和上海黄涛串联的犯罪情况","authors":["杨春甫"],"page_start":2,"page_end":4,"dates":[{"year":1976,"month":12,"day":17}]}],
      ocr: {"content_thresholds":[0,0.1,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/2e2e3766-4530-464b-882c-f8b079a63e66'),
  },
  {
    entity: {
      id: 'aaa61d45-fb7f-40d1-8012-54defb857880',
      name: '马克思主义的三个来源和三个组成部分（人民出版社1974年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/aaa61d45-fb7f-40d1-8012-54defb857880.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"马克思主义的三个来源和三个组成部分","authors":["列宁"],"page_start":4,"page_end":11,"dates":[{"year":1913,"month":3}]}],
      ocr: {"content_thresholds":[0,0.1,0,0],"standard_paragraph_merge_strategy_threshold":0.19,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/aaa61d45-fb7f-40d1-8012-54defb857880.pdf'),
  },
  {
    entity: {
      id: '8c040e88-0a79-4c47-8f9c-bb158d7207a2',
      name: '为什么是毛主义–什么是毛主义？',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/8c040e88-0a79-4c47-8f9c-bb158d7207a2.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"为什么是毛主义–什么是毛主义？","authors":["（挪威）为人民服务-共产主义联盟"],"page_start":1,"page_end":6,"dates":[{"year":2018}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.165,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/8c040e88-0a79-4c47-8f9c-bb158d7207a2.pdf'),
  },
  {
    entity: {
      id: '255cf4cb-cd67-45ab-b5e8-8240fdbad8f8',
      name: '社会主义从空想到科学的发展（人民出版社1967年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/255cf4cb-cd67-45ab-b5e8-8240fdbad8f8.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"马克思写的法文版序言","authors":["马克思"],"page_start":5,"page_end":7,"is_range_date":true,"dates":[{"year":1880,"month":5,"day":4},{"year":1880,"month":5,"day":5}]},{"title":"德文第四版序言","authors":["恩格斯"],"page_start":11,"page_end":11,"dates":[{"year":1891,"month":5,"day":12}]},{"title":"英文版序言","authors":["恩格斯"],"page_start":12,"page_end":38,"dates":[{"year":1892,"month":4,"day":20}]},{"title":"社会主义从空想到科学的发展","authors":["恩格斯"],"page_start":39,"page_end":81,"is_range_date":true,"dates":[{"year":1880,"month":1},{"year":1880,"month":3}]},{"title":"注释","authors":[],"page_start":82,"page_end":100,"dates":[]}],
      ocr: {"content_thresholds":[0,0.087,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/255cf4cb-cd67-45ab-b5e8-8240fdbad8f8.pdf'),
  },
  {
    entity: {
      id: '473a6aa4-11e7-4750-b958-17c7a7ebe666',
      name: '卡尔·马克思',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/473a6aa4-11e7-4750-b958-17c7a7ebe666.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"卡尔·马克思","authors":["列宁"],"page_start":1,"page_end":32,"is_range_date":true,"dates":[{"year":1914,"month":7},{"year":1914,"month":11}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.161,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/473a6aa4-11e7-4750-b958-17c7a7ebe666.pdf'),
  },
  {
    entity: {
      id: '8a5d13d0-5502-47e3-ba6d-d6366092d4a5',
      name: '革命国际主义运动宣言',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/8a5d13d0-5502-47e3-ba6d-d6366092d4a5.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"革命国际主义运动宣言","authors":["革命国际主义运动"],"page_start":1,"page_end":19,"dates":[{"year":1984,"month":3}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.161,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/8a5d13d0-5502-47e3-ba6d-d6366092d4a5.pdf'),
  },
  {
    entity: {
      id: '0d3234ae-8b97-4a0c-b944-a0fc427e1fca',
      name: '高举马克思列宁毛主义的鲜红旗帜',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/0d3234ae-8b97-4a0c-b944-a0fc427e1fca.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"前言","authors":["印度共产党（毛主义）中央委员会"],"page_start":2,"page_end":2,"dates":[{"year":2004,"month":9,"day":21}]},{"title":"高举马克思列宁毛主义的鲜红旗帜","authors":["印度共产党（毛主义）中央委员会"],"page_start":3,"page_end":26,"dates":[{"year":2004,"month":9,"day":21}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.17,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/0d3234ae-8b97-4a0c-b944-a0fc427e1fca.pdf'),
  },
  {
    entity: {
      id: '91043fc5-3827-42f1-921b-6ac089edce61',
      name: '马列毛主义万岁',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/91043fc5-3827-42f1-921b-6ac089edce61.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"马列毛主义万岁","authors":["革命国际主义运动"],"page_start":1,"page_end":4,"dates":[{"year":1993,"month":12,"day":26}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/91043fc5-3827-42f1-921b-6ac089edce61.pdf'),
  },
  {
    entity: {
      id: '0fcbbaa0-3b65-40fb-902e-678b9fd6e506',
      name: '共产党宣言（人民出版社1963年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/0fcbbaa0-3b65-40fb-902e-678b9fd6e506.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"1872年德文版序言","authors":["马克思","恩格斯"],"page_start":8,"page_end":10,"dates":[{"year":1872,"month":6,"day":24}]},{"title":"1882年俄文版序言","authors":["马克思","恩格斯"],"page_start":11,"page_end":13,"dates":[{"year":1882,"month":1,"day":21}]},{"title":"1883年德文版序言","authors":["恩格斯"],"page_start":14,"page_end":15,"dates":[{"year":1883,"month":6,"day":28}]},{"title":"1888年英文版序言","authors":["恩格斯"],"page_start":16,"page_end":22,"dates":[{"year":1888,"month":1,"day":30}]},{"title":"1890年德文版序言","authors":["恩格斯"],"page_start":23,"page_end":30,"dates":[{"year":1890,"month":5,"day":1}]},{"title":"1892年波兰文版序言","authors":["恩格斯"],"page_start":31,"page_end":33,"dates":[{"year":1892,"month":2,"day":10}]},{"title":"1893年意大利文版序言 告意大利读者","authors":["恩格斯"],"page_start":34,"page_end":36,"dates":[{"year":1893,"month":2,"day":1}]},{"title":"1893年意大利文版序言 告意大利读者","authors":["恩格斯"],"page_start":34,"page_end":36,"dates":[{"year":1893,"month":2,"day":1}]},{"title":"共产党宣言","authors":["马克思","恩格斯"],"page_start":38,"page_end":93,"is_range_date":true,"dates":[{"year":1847,"month":12},{"year":1848,"month":1}]}],
      ocr: {"content_thresholds":[0,0.11,0,0],"standard_paragraph_merge_strategy_threshold":0.17,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/0fcbbaa0-3b65-40fb-902e-678b9fd6e506.pdf'),
  },
  {
    entity: {
      id: '9396d223-50a3-44f6-990b-88dbf5b0aec8',
      name: '红旗一九六七年第四期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/9396d223-50a3-44f6-990b-88dbf5b0aec8.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"中共中央给全国农村人民公社贫下中农和各级干部的信","authors":[],"page_start":4,"page_end":5,"dates":[{"year":1967,"month":2,"day":20}]},{"title":"必须正确地对待干部","authors":["《红旗》杂志编辑部"],"page_start":6,"page_end":12,"dates":[{"year":1967,"month":2,"day":23}]},{"title":"黑龙江省红色造反者夺权斗争的基本经验","authors":["黑龙江省红色造反者"],"page_start":13,"page_end":15,"dates":[{"year":1967,"month":2,"day":9}]},{"title":"坚决捍卫“三结合”的正确方针","authors":["《人民日报》编辑部"],"page_start":16,"page_end":17,"dates":[{"year":1967,"month":2,"day":17}]},{"title":"革命的“三结合”是夺权斗争胜利的保证","authors":["《人民日报》编辑部"],"page_start":17,"page_end":19,"dates":[{"year":1967,"month":3,"day":2}]},{"title":"彻底粉碎反革命逆流","authors":["《解放军报》编辑部"],"page_start":19,"page_end":20,"dates":[{"year":1967,"month":2,"day":18}]},{"title":"当前文化大革命的形势和任务","authors":["上海市革命委员会"],"page_start":21,"page_end":26,"dates":[{"year":1967,"month":2,"day":23}]},{"title":"革命不分先后","authors":["《文汇报》编辑部"],"page_start":27,"page_end":29,"dates":[{"year":1967,"month":2,"day":18}]},{"title":"坚定不移地支持无产阶级革命派的夺权斗争","authors":["张日清"],"page_start":30,"page_end":34,"dates":[{"year":1967}]},{"title":"推荐两篇好文章","authors":["《红旗》杂志编辑部"],"page_start":35,"page_end":36,"dates":[{"year":1967}]},{"title":"我们鲁迅兵团向何处去？","authors":["上海体育战线革命造反司令部鲁迅兵团东方红战斗队"],"page_start":37,"page_end":44,"dates":[{"year":1967}]},{"title":"为“东方红”小将的一张大字报叫好","authors":["上海《体育战报》评论员"],"page_start":44,"page_end":45,"dates":[{"year":1967}]},{"title":"我们是怎样争取和团结群众大多数的","authors":["北京邮票厂革命造反总部"],"page_start":46,"page_end":49,"dates":[{"year":1967}]},{"title":"保卫四清运动的伟大成果","authors":["《红旗》杂志评论员"],"page_start":50,"page_end":51,"dates":[{"year":1967,"month":3,"day":1}]},{"title":"响应毛主席、党中央的号召，掀起春耕生产的高潮","authors":["《红旗》杂志评论员"],"page_start":52,"page_end":53,"dates":[{"year":1967,"month":3,"day":1}]},{"title":"在支持无产阶级革命派夺权斗争中活学活用毛主席著作","authors":["王泽俊"],"page_start":54,"page_end":56,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]},{"title":"坚决站在无产阶级革命派一边","authors":["王坤"],"page_start":57,"page_end":58,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/9396d223-50a3-44f6-990b-88dbf5b0aec8.pdf'),
  },
  {
    entity: {
      id: '8ee91ddf-1674-4e2a-acdc-3e4feeed9318',
      name: '矛盾论 实践论（上海人民出版社1968年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/8ee91ddf-1674-4e2a-acdc-3e4feeed9318.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"实践论","authors":["毛泽东"],"page_start":5,"page_end":58,"dates":[{"year":1937,"month":7}]},{"title":"矛盾论","authors":["毛泽东"],"page_start":59,"page_end":192,"dates":[{"year":1937,"month":8}]}],
      ocr: {"content_thresholds":[0,0.08,0,0],"standard_paragraph_merge_strategy_threshold":0.12,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/8ee91ddf-1674-4e2a-acdc-3e4feeed9318.pdf'),
  },
  {
    entity: {
      id: 'e7f7880a-12b6-4450-992d-72b1be2d1385',
      name: '唯物主义和经验批判主义（人民出版社1971年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/e7f7880a-12b6-4450-992d-72b1be2d1385.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"向报告人提十个问题","authors":["列宁"],"page_start":9,"page_end":10,"is_range_date":true,"dates":[{"year":1908,"month":5},{"year":1908,"month":6}]},{"title":"第一版序言","authors":["列宁"],"page_start":13,"page_end":14,"dates":[{"year":1908,"month":9}]},{"title":"第二版序言","authors":["列宁"],"page_start":15,"page_end":15,"dates":[{"year":1920,"month":9,"day":2}]},{"title":"代绪论 某些“马克思主义者”在1908年和某些唯心主义者在1710年是怎样驳斥唯物主义的","authors":["列宁"],"page_start":16,"page_end":33,"is_range_date":true,"dates":[{"year":1908,"month":2},{"year":1908,"month":10}]},{"title":"第一章 经验批判主义的认识论和辩证唯物主义的认识论（一）","authors":["列宁"],"page_start":34,"page_end":94,"is_range_date":true,"dates":[{"year":1908,"month":2},{"year":1908,"month":10}]},{"title":"第二章 经验批判主义的认识论和辩证唯物主义的认识论（二）","authors":["列宁"],"page_start":95,"page_end":143,"is_range_date":true,"dates":[{"year":1908,"month":2},{"year":1908,"month":10}]},{"title":"第三章 经验批判主义的认识论和辩证唯物主义的认识论（三）","authors":["列宁"],"page_start":144,"page_end":196,"is_range_date":true,"dates":[{"year":1908,"month":2},{"year":1908,"month":10}]},{"title":"第四章 作为经验批判主义的战友和继承者的哲学唯心主义者","authors":["列宁"],"page_start":197,"page_end":257,"is_range_date":true,"dates":[{"year":1908,"month":2},{"year":1908,"month":10}]},{"title":"第五章 最近的自然科学革命和哲学唯心主义","authors":["列宁"],"page_start":258,"page_end":321,"is_range_date":true,"dates":[{"year":1908,"month":2},{"year":1908,"month":10}]},{"title":"第六章 经验批判主义和历史唯物主义","authors":["列宁"],"page_start":322,"page_end":366,"is_range_date":true,"dates":[{"year":1908,"month":2},{"year":1908,"month":10}]},{"title":"结论","authors":["列宁"],"page_start":367,"page_end":371,"is_range_date":true,"dates":[{"year":1908,"month":2},{"year":1908,"month":10}]},{"title":"注释","authors":[],"page_start":372,"page_end":379,"dates":[]}],
      ocr: {"content_thresholds":[0,0.09,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives5/e7f7880a-12b6-4450-992d-72b1be2d1385.pdf'),
  },
  {
    entity: {
      id: '7bad84cf-bf80-4e51-9638-bc219b7eee2c',
      name: '路德维希·费尔巴哈和德国古典哲学的终结（人民出版社1972年版）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/7bad84cf-bf80-4e51-9638-bc219b7eee2c.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"1888年单行本序言","authors":["恩格斯"],"page_start":8,"page_end":9,"dates":[{"year":1888,"month":1,"day":21}]},{"title":"路德维希·费尔巴哈和德国古典哲学的终结","authors":["恩格斯"],"page_start":10,"page_end":54,"dates":[{"year":1886}]},{"title":"关于费尔巴哈的提纲","authors":["马克思"],"page_start":55,"page_end":58,"dates":[{"year":1845}]},{"title":"俄译第一版译者的话","authors":["普列汉诺夫"],"page_start":66,"page_end":67,"dates":[{"year":1892,"month":6}]},{"title":"俄译本注释","authors":["普列汉诺夫"],"page_start":68,"page_end":120,"dates":[{"year":1892},{"year":1905}]},{"title":"俄译本注释被删去的部分","authors":["普列汉诺夫"],"page_start":121,"page_end":126,"dates":[{"year":1905}]},{"title":"俄译本第二版译者序言","authors":["普列汉诺夫"],"page_start":127,"page_end":126,"dates":[{"year":1905,"month":7,"day":4}]},{"title":"《普列汉诺夫哲学著作选集》俄文版编者为普列汉诺夫的序言和注释所加的注释","authors":[],"page_start":150,"page_end":156,"dates":[]}],
      ocr: {"content_thresholds":[0,0.1,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives4/7bad84cf-bf80-4e51-9638-bc219b7eee2c.pdf'),
  },
  {
    entity: {
      id: '563a0188-ee72-4cd8-bd21-734004f80cae',
      name: '关于社会主义革命时期的阶级关系问题——辽宁省委宣传组理论问题讨论会《关于阶级关系问题的讨论情况汇集》',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/563a0188-ee72-4cd8-bd21-734004f80cae.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"关于社会主义革命时期的阶级关系问题——辽宁省委宣传组理论问题讨论会《关于阶级关系问题的讨论情况汇集》","authors":["辽宁省委宣传组"],"page_start":1,"page_end":9,"dates":[{"year":1976,"month":5,"day":15}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.17,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/563a0188-ee72-4cd8-bd21-734004f80cae.pdf'),
  },
  {
    entity: {
      id: '77fd62e6-e508-483f-91b3-f5e144115abb',
      name: '社会主义时期的党内资产阶级（谈谈党内资产阶级）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/77fd62e6-e508-483f-91b3-f5e144115abb.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"说明","authors":[],"page_start":2,"page_end":2,"dates":[]},{"title":"第一讲 搞社会主义革命要知道资产阶级在哪里","authors":["秦正先","中共上海市委写作组"],"page_start":4,"page_end":11,"dates":[{"year":1976,"month":8,"day":31}]},{"title":"第二讲 无产阶级专政下的阶级变动","authors":["秦正先","中共上海市委写作组"],"page_start":12,"page_end":20,"dates":[{"year":1976,"month":9,"day":7},{"year":1976,"month":9,"day":25}]},{"title":"第三讲 产生党内资产阶级的经济基础","authors":["秦正先","中共上海市委写作组"],"page_start":21,"page_end":35,"dates":[{"year":1976,"month":9,"day":28},{"year":1976,"month":10,"day":2}]},{"title":"第四讲 上层建筑在形成党内资产阶级过程中的作用","authors":["秦正先","中共上海市委写作组"],"page_start":36,"page_end":44,"dates":[{"year":1976,"month":10,"day":5},{"year":1976,"month":10,"day":9}]},{"title":"第五讲 党内资产阶级比资本家还厉害","authors":["秦正先","中共上海市委写作组"],"page_start":45,"page_end":52,"dates":[{"year":1976,"month":10,"day":12},{"year":1976,"month":10,"day":16}]},{"title":"第六讲 党内资产阶级的活动规律","authors":["秦正先","中共上海市委写作组"],"page_start":53,"page_end":61,"dates":[{"year":1976}]},{"title":"第七讲 战胜党内资产阶级的方法（上、下）","authors":["秦正先","中共上海市委写作组"],"page_start":62,"page_end":76,"dates":[{"year":1976}]},{"title":"第八讲 前途光明 道路曲折","authors":["秦正先","中共上海市委写作组"],"page_start":77,"page_end":85,"dates":[{"year":1976}]}],
      ocr: {"content_thresholds":[0,0.13,0,0],"standard_paragraph_merge_strategy_threshold":0.12,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/77fd62e6-e508-483f-91b3-f5e144115abb.pdf'),
  },
  {
    entity: {
      id: 'ec092bcb-62c2-4012-8852-e8af817c0656',
      name: '红旗一九六七年第三期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/ec092bcb-62c2-4012-8852-e8af817c0656.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"关于纠正党内的错误思想","authors":["毛泽东"],"page_start":4,"page_end":13,"dates":[{"year":1929,"month":12}]},{"title":"论无产阶级革命派的夺权斗争","authors":[],"page_start":14,"page_end":19,"dates":[{"year":1967}]},{"title":"论无产阶级的革命纪律和革命权威","authors":["《红旗》杂志评论员"],"page_start":20,"page_end":22,"dates":[{"year":1967,"month":2,"day":3}]},{"title":"人民解放军坚决支持无产阶级革命派","authors":["《人民日报》编辑部"],"page_start":23,"page_end":24,"dates":[{"year":1967,"month":1,"day":25}]},{"title":"山西革命造反总指挥部第一号通告","authors":["山西革命造反总指挥部"],"page_start":25,"page_end":27,"dates":[{"year":1967,"month":1,"day":14}]},{"title":"山西省无产阶级文化大革命的伟大胜利","authors":["《人民日报》编辑部"],"page_start":28,"page_end":29,"dates":[{"year":1967,"month":1,"day":25}]},{"title":"青岛市革命造反委员会第一号通令","authors":["青岛市革命造反委员会"],"page_start":30,"page_end":31,"dates":[{"year":1967,"month":1,"day":22}]},{"title":"关键在于大联合","authors":["《人民日报》编辑部"],"page_start":31,"page_end":32,"dates":[{"year":1967,"month":1,"day":30}]},{"title":"贵州无产阶级革命造反总指挥部通告","authors":["贵州无产阶级革命造反总指挥部"],"page_start":33,"page_end":36,"dates":[{"year":1967,"month":1,"day":25}]},{"title":"西南的春雷","authors":["《人民日报》编辑部"],"page_start":37,"page_end":37,"dates":[{"year":1967,"month":2,"day":1}]},{"title":"黑龙江省红色造反者革命委员会第一号通告","authors":["黑龙江省红色造反者革命委员会"],"page_start":38,"page_end":40,"dates":[{"year":1967,"month":1,"day":31}]},{"title":"东北的新曙光","authors":["《人民日报》编辑部"],"page_start":40,"page_end":41,"dates":[{"year":1967,"month":2,"day":2}]},{"title":"打倒“私”字，实行革命造反派大联合","authors":["首都红卫兵第三司令部"],"page_start":42,"page_end":45,"dates":[{"year":1967,"month":1,"day":31}]},{"title":"夺权以后","authors":["北京光华木材厂红色造反者"],"page_start":46,"page_end":50,"dates":[{"year":1967}]},{"title":"一定要把报纸的领导权夺过来","authors":["《文汇报》“星火燎原”革命造反总部"],"page_start":50,"page_end":54,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]},{"title":"海港的命运由我们自己来掌握","authors":["上海港务局五区工人革命造反队"],"page_start":55,"page_end":57,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/ec092bcb-62c2-4012-8852-e8af817c0656.pdf'),
  },
  {
    entity: {
      id: '1402c0cd-2f04-47cb-bce0-12fcb4b03a4f',
      name: '红旗一九六七年第二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/1402c0cd-2f04-47cb-bce0-12fcb4b03a4f.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"中共中央、国务院、中央军委、中央文革小组给上海各革命造反团体的贺电","authors":[],"page_start":5,"page_end":6,"dates":[{"year":1967,"month":1,"day":11}]},{"title":"抓革命，促生产彻底粉碎资产阶级反动路线的新反扑──告上海全市人民书","authors":["上海工人革命造反总司令部等十一个革命群众组织"],"page_start":7,"page_end":9,"dates":[{"year":1967,"month":1,"day":4}]},{"title":"向毛主席敬贺电","authors":["文汇报、解放军报全体革命职工"],"page_start":10,"page_end":11,"dates":[{"year":1967,"month":1,"day":9}]},{"title":"紧急通告","authors":["上海十一个革命造反组织"],"page_start":12,"page_end":14,"dates":[{"year":1967,"month":1,"day":9}]},{"title":"工农群众、革命学生和革命干部大联合大团结坚决贯彻毛主席的革命路线上海革命造反派向资产阶级反动路线发起总攻击","authors":["《解放日报》记者","《文汇报》记者"],"page_start":15,"page_end":17,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967,"month":1,"day":8}]},{"title":"向毛主席的致敬电","authors":["上海造反派"],"page_start":18,"page_end":19,"dates":[{"year":1967,"month":1,"day":12}]},{"title":"向毛主席的致敬信","authors":["上海造反派"],"page_start":20,"page_end":21,"dates":[{"year":1967,"month":1,"day":12}]},{"title":"反对经济主义粉碎资产阶级反动路线的新反扑","authors":["《人民日报》编辑部","《红旗》杂志编辑部"],"page_start":22,"page_end":24,"dates":[{"year":1967,"month":1,"day":12}]},{"title":"无产阶级革命派联合起来","authors":["《红旗》杂志编辑部"],"page_start":25,"page_end":28,"dates":[{"year":1967,"month":1,"day":16}]},{"title":"响应毛主席的号召，到群众里面去","authors":[],"page_start":29,"page_end":30,"dates":[{"year":1967}]},{"title":"革命造反有理万岁","authors":["《文汇报》编辑部"],"page_start":31,"page_end":33,"dates":[{"year":1967,"month":1,"day":6}]},{"title":"彻底打垮资产阶级反动路线的新反扑","authors":["北京第一机床厂红色造反者"],"page_start":34,"page_end":35,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]},{"title":"我坚决顶住了经济主义的阴风","authors":["任招娣"],"page_start":36,"page_end":37,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]},{"title":"金钱难移造反志","authors":["包立年","何康平"],"page_start":37,"page_end":37,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]},{"title":"坚决反对经济主义","authors":["清华大学井冈山兵团“号兵”战斗队"],"page_start":38,"page_end":39,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]},{"title":"无产阶级专政和无产阶级大民主","authors":["谭厚兰"],"page_start":40,"page_end":42,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]},{"title":"和工人结合的第一步","authors":["北京航空学院“红旗”战斗队在北京第一机床厂的全体战士"],"page_start":42,"page_end":44,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]},{"title":"在无产阶级文化大革命中活学活用毛主席著作","authors":["林杰"],"page_start":45,"page_end":46,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967,"month":1,"day":18}]},{"title":"劳动模范要站在无产阶级文化大革命的前列","authors":["力平"],"page_start":47,"page_end":48,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/1402c0cd-2f04-47cb-bce0-12fcb4b03a4f.pdf'),
  },
  {
    entity: {
      id: '5d134b4e-e043-4e82-9c29-b46cc18715c1',
      name: '红旗一九六七年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/5d134b4e-e043-4e82-9c29-b46cc18715c1.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"《毛主席语录》再版前言","authors":["林彪"],"page_start":4,"page_end":5,"dates":[{"year":1966,"month":12,"day":16}]},{"title":"把无产阶级文化大革命进行到底（一九六七年元旦社论）","alias":"把无产阶级文化大革命进行到底","authors":["《人民日报》编辑部","《解放军报》编辑部","《红旗》杂志编辑部"],"page_start":6,"page_end":15,"dates":[{"year":1967,"month":1,"day":1}]},{"title":"评反革命两面派周扬","authors":["姚文元"],"page_start":16,"page_end":38,"dates":[{"year":1967,"month":1,"day":3}]},{"title":"誓死跟着毛主席闹革命","authors":["崔忠诚","李希文","王和钧"],"page_start":39,"page_end":42,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]},{"title":"抓住两个环子，担起两副担子","authors":["解悦"],"page_start":42,"page_end":44,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]},{"title":"夺取革命和生产的双胜利","authors":["尉凤英"],"page_start":45,"page_end":47,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]},{"title":"只有思想革命化，才有生产的大发展","authors":["陈永贵"],"page_start":47,"page_end":51,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]},{"title":"抓革命、促生产靠的是毛泽东思想","authors":["王永幸"],"page_start":50,"page_end":52,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]},{"title":"开展群众性的破私立公运动","authors":["解放军某部红九连党支部"],"page_start":53,"page_end":54,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]},{"title":"向活学活用毛主席著作的新高峰前进","authors":["杨道根"],"page_start":55,"page_end":56,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]},{"title":"沿着毛主席开辟的航道阔步前进","authors":["李素文"],"page_start":57,"page_end":58,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1967}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/5d134b4e-e043-4e82-9c29-b46cc18715c1.pdf'),
  },
  {
    entity: {
      id: '61612ccb-a285-40a9-a563-c70499cdd364',
      name: '红旗一九六六年第十五期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/61612ccb-a285-40a9-a563-c70499cdd364.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"致阿尔巴尼亚劳动党第五次代表大会的贺电","authors":["毛泽东"],"page_start":3,"page_end":4,"dates":[{"year":1966,"month":10,"day":25}]},{"title":"在接见全国各地来京革命师生大会上的讲话","authors":["林彪"],"page_start":5,"page_end":6,"dates":[{"year":1966,"month":11,"day":3}]},{"title":"首都举行文艺界无产阶级文化大革命大会","authors":["新华社"],"page_start":7,"page_end":7,"dates":[{"year":1966,"month":12,"day":3}]},{"title":"在文艺界无产阶级文化大革命大会上的开幕词","authors":["陈伯达"],"page_start":7,"page_end":8,"dates":[{"year":1966,"month":11,"day":28}]},{"title":"在文艺界无产阶级文化大革命大会上的讲话","authors":["江青"],"page_start":8,"page_end":12,"dates":[{"year":1966,"month":11,"day":28}]},{"title":"在文艺界无产阶级文化大革命大会上的发言","authors":["谢镗忠"],"page_start":12,"page_end":12,"dates":[{"year":1966,"month":11,"day":28}]},{"title":"在文艺界无产阶级文化大革命大会上的发言","authors":["吴德"],"page_start":12,"page_end":13,"dates":[{"year":1966,"month":11,"day":28}]},{"title":"在文艺界无产阶级文化大革命大会上的发言","authors":["谭元寿"],"page_start":13,"page_end":13,"dates":[{"year":1966,"month":11,"day":28}]},{"title":"在文艺界无产阶级文化大革命大会上的讲话","authors":["周恩来"],"page_start":14,"page_end":15,"dates":[{"year":1966,"month":11,"day":28}]},{"title":"夺取新的胜利（一九六六年第十五期社论）","alias":"夺取新的胜利","authors":["《红旗》杂志编辑部"],"page_start":16,"page_end":18,"dates":[{"year":1966,"month":12,"day":13}]},{"title":"无产阶级专政和无产阶级文化大革命","authors":["王力","贾一学","李鑫"],"page_start":19,"page_end":26,"dates":[{"year":1966,"month":12,"day":24}]},{"title":"反共分子翦伯赞的真面目","authors":["戚本禹","林杰","阎长贵"],"page_start":27,"page_end":37,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"一个心眼为人民服务","authors":["热多"],"page_start":38,"page_end":45,"dates":[{"year":1966}]},{"title":"用毛泽东思想造就共产主义新人","authors":["崔富勇"],"page_start":45,"page_end":51,"dates":[{"year":1966}]}],
      ocr: {"content_thresholds":[0,0.17,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/61612ccb-a285-40a9-a563-c70499cdd364.pdf'),
  },
  {
    entity: {
      id: '3a913e40-fb5b-470e-8dfb-423ca1a03da6',
      name: '红旗一九六六年第十四期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/3a913e40-fb5b-470e-8dfb-423ca1a03da6.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"以毛主席为代表的无产阶级革命路线的胜利（一九六六年第十四期社论）","alias":"以毛主席为代表的无产阶级革命路线的胜利","authors":["《红旗》杂志编辑部"],"page_start":3,"page_end":5,"dates":[{"year":1966,"month":11,"day":1}]},{"title":"纪念鲁迅 革命到底","authors":["姚文元"],"page_start":6,"page_end":12,"dates":[{"year":1966,"month":11,"day":1}]},{"title":"学习鲁迅，永远忠于毛主席","authors":["黄平稳"],"page_start":13,"page_end":15,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"斥西蒙诺夫","authors":["刘路"],"page_start":14,"page_end":16,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"毛泽东思想的阳光照耀着鲁迅","authors":["许广平"],"page_start":17,"page_end":19,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"纪念鲁迅的造反精神","authors":["郭沫若"],"page_start":20,"page_end":22,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"在纪念鲁迅大会上的闭幕词","authors":["陈伯达"],"page_start":23,"page_end":24,"dates":[{"year":1966,"month":11,"day":1}]},{"title":"纪念我们的文化革命先驱鲁迅","authors":["《红旗》杂志编辑部"],"page_start":25,"page_end":27,"dates":[{"year":1966}]},{"title":"一定要把毛泽东思想真正学到手","authors":["北京外国语学院红旗战斗大队"],"page_start":28,"page_end":29,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"敢于斗争，善于斗争","authors":["山东师范学院“革命串连”红卫兵"],"page_start":29,"page_end":30,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"把毛泽东思想化为自己的灵魂","authors":["王有发"],"page_start":31,"page_end":34,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"以革命利益为第一生命","authors":["雷洪炳"],"page_start":35,"page_end":37,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"毛泽东思想哺育下成长起来的新人","authors":["《红旗》杂志评论员"],"page_start":38,"page_end":39,"dates":[{"year":1966}]}],
      ocr: {"content_thresholds":[0,0.17,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/3a913e40-fb5b-470e-8dfb-423ca1a03da6.pdf'),
  },
  {
    entity: {
      id: '2ce1c58d-24f9-4cbb-b9c1-7430b717d8a5',
      name: '红旗一九六六年第十三期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/2ce1c58d-24f9-4cbb-b9c1-7430b717d8a5.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"在中华人民共和国成立十七周年庆祝大会上的讲话","authors":["林彪"],"page_start":4,"page_end":5,"dates":[{"year":1966,"month":10,"day":1}]},{"title":"在毛泽东思想的大路上前进（一九六六年第十三期社论）","alias":"在毛泽东思想的大路上前进","authors":["《红旗》杂志编辑部"],"page_start":6,"page_end":8,"dates":[{"year":1966,"month":10,"day":3}]},{"title":"夺取革命和生产的更大胜利","authors":["王进喜"],"page_start":9,"page_end":13,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"在毛泽东思想的光辉照耀下飞跃前进","authors":["蔡祖泉"],"page_start":13,"page_end":14,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"思想革命带动生产革命","authors":["吕玉兰"],"page_start":15,"page_end":17,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"毛主席，您是我们心中的红太阳","authors":["罗昌秀"],"page_start":17,"page_end":18,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"人民战士永远忠于毛主席","authors":["卢燕财"],"page_start":19,"page_end":21,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"新北大在高歌猛进","authors":["长缨"],"page_start":20,"page_end":22,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"把连队建设成毛泽东思想的好学校","authors":["陈金元"],"page_start":23,"page_end":33,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"用毛泽东思想武装农民的头脑——山西省昔阳县大寨大队政治思想工作的基本经验","authors":["陈永贵"],"page_start":34,"page_end":42,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"为人民管好油井","authors":["胡法莲"],"page_start":43,"page_end":47,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"把毕生的力量贡献给革命事业","authors":["姚建纲"],"page_start":47,"page_end":52,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]}],
      ocr: {"content_thresholds":[0,0.17,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/2ce1c58d-24f9-4cbb-b9c1-7430b717d8a5.pdf'),
  },
  {
    entity: {
      id: '5ba19c54-124b-4e05-bf76-73e558230021',
      name: '红旗一九六六年第十二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/5ba19c54-124b-4e05-bf76-73e558230021.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"在接见外地来京革命师生大会上的讲话","alias":"在接见外地来京革命师生大会上林彪同志的讲话","authors":["林彪"],"page_start":4,"page_end":5,"dates":[{"year":1966,"month":8,"day":31}]},{"title":"在接见全国各地来京革命师生大会上的讲话","alias":"在接见外地来京革命师生大会上林彪同志的讲话","authors":["林彪"],"page_start":6,"page_end":7,"dates":[{"year":1966,"month":9,"day":15}]},{"title":"周恩来在接见外地来京革命师生大会上的讲话","authors":["周恩来"],"page_start":8,"page_end":9,"dates":[{"year":1966,"month":8,"day":31}]},{"title":"周恩来在接见外地来京革命师生大会上的讲话","authors":["周恩来"],"page_start":10,"page_end":11,"dates":[{"year":1966,"month":9,"day":15}]},{"title":"掌握斗争的大方向","authors":[],"page_start":12,"page_end":14,"dates":[{"year":1966}]},{"title":"抓革命，促生产","authors":["《人民日报》编辑部"],"page_start":15,"page_end":16,"dates":[{"year":1966,"month":9,"day":7}]},{"title":"红卫兵赞","authors":["《红旗杂志》评论员"],"page_start":17,"page_end":19,"dates":[{"year":1966,"month":9,"day":17}]},{"title":"红卫兵文选","authors":[],"page_start":20,"page_end":21,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"无产阶级文化大革命的形势好得很","authors":["北京市第六中学红卫兵"],"page_start":21,"page_end":23,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966,"month":9,"day":1}]},{"title":"坚决贯彻十六条","authors":["清华大学附属中学红卫兵"],"page_start":23,"page_end":25,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966,"month":9,"day":13}]},{"title":"一定要坚持文斗","authors":["首都红卫兵西城区纠察队"],"page_start":26,"page_end":27,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966,"month":9,"day":15}]},{"title":"我们的倡议","authors":["安徽省亳县红卫兵代表会议全体代表"],"page_start":28,"page_end":29,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966,"month":9,"day":6}]},{"title":"不许周扬攻击和诬蔑鲁迅","authors":["许广平"],"page_start":30,"page_end":39,"dates":[{"year":1966}]}],
      ocr: {"content_thresholds":[0,0.17,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/5ba19c54-124b-4e05-bf76-73e558230021.pdf'),
  },
  {
    entity: {
      id: '9ee7a157-a1ac-450b-b7a3-3c22a9c29eb3',
      name: '红旗一九六六年第十一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/9ee7a157-a1ac-450b-b7a3-3c22a9c29eb3.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"中国共产党第八届中央委员会第十一次全体会议公报","authors":[],"page_start":4,"page_end":9,"dates":[{"year":1966,"month":8,"day":12}]},{"title":"“我们最伟大的领袖，我们最亲近的人”——毛主席会见首都革命群众","authors":[],"page_start":10,"page_end":14,"dates":[{"year":1966}]},{"title":"在庆祝无产阶级文化大革命群众大会上的讲话","authors":["林彪"],"page_start":15,"page_end":16,"dates":[{"year":1966,"month":8,"day":18}]},{"title":"在庆祝无产阶级文化大革命群众大会上的讲话","authors":["周恩来"],"page_start":17,"page_end":18,"dates":[{"year":1966,"month":8,"day":18}]},{"title":"陈伯达在外地来京学生群众会上的讲话","authors":["陈伯达"],"page_start":19,"page_end":20,"dates":[{"year":1966,"month":8,"day":16}]},{"title":"在毛泽东思想的道路上胜利前进","authors":[],"page_start":21,"page_end":23,"dates":[{"year":1966}]},{"title":"宋硕、陆平、彭佩云在文化革命中究竟干些什么？","alias":"宋硕、陆平、彭珮云在文化大革命中究竟干些什么？","authors":["北大聂元梓等"],"page_start":24,"page_end":26,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966,"month":5,"day":25}]},{"title":"给聂元梓等七位同志的一封信","authors":["彭新生","彭汇生"],"page_start":26,"page_end":28,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966,"month":6,"day":4}]},{"title":"无产阶级的革命造反精神万岁","authors":["清华大学附属中学红卫兵"],"page_start":29,"page_end":29,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966,"month":6,"day":24}]},{"title":"再论无产阶级的革命造反精神万岁","authors":["清华大学附属中学红卫兵"],"page_start":30,"page_end":30,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966,"month":7,"day":4}]},{"title":"三论无产阶级的革命造反精神万岁","authors":["清华大学附属中学红卫兵"],"page_start":31,"page_end":31,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966,"month":7,"day":27}]},{"title":"拿出主人翁的态度来","authors":["清华大学附属中学红卫兵"],"page_start":32,"page_end":32,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966,"month":8,"day":13}]},{"title":"欢呼北大的一张大字报","authors":["《人民日报》评论员"],"page_start":33,"page_end":34,"dates":[{"year":1966,"month":6,"day":2}]},{"title":"向革命的青少年致敬","authors":["《红旗杂志》评论员"],"page_start":35,"page_end":37,"dates":[{"year":1966,"month":8,"day":11}]},{"title":"巴黎公社的全面选举制","authors":["刘惠明"],"page_start":38,"page_end":39,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]}],
      ocr: {"content_thresholds":[0,0.17,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/9ee7a157-a1ac-450b-b7a3-3c22a9c29eb3.pdf'),
  },
  {
    entity: {
      id: '78596687-074b-4839-9152-44d820015582',
      name: '红旗一九六六年第十期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/78596687-074b-4839-9152-44d820015582.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"中国共产党中央委员会关于无产阶级文化大革命的决定","authors":[],"page_start":3,"page_end":10,"dates":[{"year":1966,"month":8,"day":8}]},{"title":"无产阶级文化大革命的纲领性文件","authors":[],"page_start":11,"page_end":14,"dates":[{"year":1966}]},{"title":"大搞学习毛主席著作的群众运动，加速农民思想的无产阶级革命化——广东农村开展学习毛主席著作的群众运动的基本情况和经验","authors":["赵紫阳"],"page_start":15,"page_end":26,"dates":[{"year":1966}]},{"title":"评孙冶方反动的政治立场和经济纲领","authors":["梦奎","晓林"],"page_start":27,"page_end":38,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"坚决铲除侯外庐论汤显祖剧作的三株大毒草","authors":["王恩宇","唐宇元","孟祥才"],"page_start":39,"page_end":50,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]}],
      ocr: {"content_thresholds":[0,0.17,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/78596687-074b-4839-9152-44d820015582.pdf'),
  },
  {
    entity: {
      id: '963e343d-3662-444a-8c27-1a886eb70f7e',
      name: '红旗一九六六年第九期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/963e343d-3662-444a-8c27-1a886eb70f7e.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"在延安文艺座谈会上的讲话","authors":["毛泽东"],"page_start":3,"page_end":26,"dates":[{"year":1942,"month":5}]},{"title":"无产阶级文化大革命的指南针——重新发表《在延安文艺座谈会上的讲话》按语","authors":["《红旗杂志》编辑部"],"page_start":27,"page_end":29,"dates":[{"year":1966}]},{"title":"信任群众 依靠群众","authors":[],"page_start":30,"page_end":32,"dates":[{"year":1966}]},{"title":"彻底批判前北京市委一些主要负责人的修正主义路线","authors":[],"page_start":33,"page_end":36,"dates":[{"year":1966}]},{"title":"周扬颠倒历史的一支暗箭——评《鲁迅全集》第六卷的一条注释","authors":["阮铭","阮若瑛"],"page_start":37,"page_end":46,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]},{"title":"“国防文学”是王明右倾机会主义路线的口号","authors":["穆欣"],"page_start":47,"page_end":59,"ocr":{"auto_vsplit":false,"vsplit":0.41},"dates":[{"year":1966}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/963e343d-3662-444a-8c27-1a886eb70f7e.pdf'),
  },
  {
    entity: {
      id: '79570b44-6e88-4875-8247-b408ad91873d',
      name: '红旗一九六六年第八期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/79570b44-6e88-4875-8247-b408ad91873d.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"毛泽东思想领先 干部层层带头","authors":[],"page_start":3,"page_end":5,"dates":[{"year":1966}]},{"title":"无产阶级文化大革命万岁","authors":[],"page_start":6,"page_end":13,"dates":[{"year":1966}]},{"title":"横扫一切牛鬼蛇神","authors":["《人民日报》"],"page_start":14,"page_end":16,"dates":[{"year":1966,"month":6,"day":1}]},{"title":"毛泽东思想是我们革命事业的望远镜和显微镜","authors":["《解放军报》"],"page_start":17,"page_end":19,"dates":[{"year":1966,"month":6,"day":7}]},{"title":"工农兵和学生痛斥“三家村”反革命集团","authors":[],"page_start":20,"page_end":35,"dates":[{"year":1966}]}],
      ocr: {"content_thresholds":[0,0.15,0,0.2]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/79570b44-6e88-4875-8247-b408ad91873d.pdf'),
  },
  {
    entity: {
      id: '7522f55b-37cb-41d0-8229-0f0144b823ce',
      name: '张春桥、姚文元在《社会主义政治经济学》座谈会上的言论',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(16)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/7522f55b-37cb-41d0-8229-0f0144b823ce/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"张春桥、姚文元在《社会主义政治经济学》座谈会上的言论","authors":["张春桥","姚文元"],"page_start":1,"page_end":13,"ocr_exceptions":{"13":{"content_thresholds":[0,0.15,0,0.5]}},"dates":[{"year":1972,"month":10,"day":15}]},{"title":"姚文元在《社会主义政治经济学》座谈会第二次会议上的言论","authors":["张春桥","姚文元"],"page_start":13,"page_end":16,"ocr_exceptions":{"13":{"content_thresholds":[0,0.15,0.5,0]}},"dates":[{"year":1972,"month":10,"day":18}]},{"title":"张春桥在上海市委写作组工作计划纲要上的批语","authors":["张春桥"],"page_start":16,"page_end":16,"dates":[{"year":1976,"month":3}]}],
      ocr: {"content_thresholds":[0,0.15,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/7522f55b-37cb-41d0-8229-0f0144b823ce'),
  },
  {
    entity: {
      id: '4277f31d-4aaf-4702-87d4-fe80f59bb565',
      name: '张春桥、姚文元同志在济南军区机关排以上干部会议上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(19)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/4277f31d-4aaf-4702-87d4-fe80f59bb565/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"张春桥姚文元在济南军区机关以上干部会议上的讲话","alias":"张春桥、姚文元同志在济南军区机关排以上干部会议上的讲话","authors":["张春桥","姚文元"],"page_start":1,"page_end":19,"dates":[{"year":1967,"month":5,"day":5}]}],
      ocr: {"content_thresholds":[0,0.1,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/4277f31d-4aaf-4702-87d4-fe80f59bb565'),
  },
  {
    entity: {
      id: 'e05ce1c3-89f9-4bd7-b16d-4727a0ddbc93',
      name: '张春桥、姚文元同志重要讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(28)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/e05ce1c3-89f9-4bd7-b16d-4727a0ddbc93/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"张春桥姚文元杜平对江苏和南京地区无产阶级革命派的讲话","authors":["张春桥","姚文元","杜平"],"page_start":1,"page_end":28,"dates":[{"year":1967,"month":5,"day":14}]}],
      ocr: {"content_thresholds":[0,0.11,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/e05ce1c3-89f9-4bd7-b16d-4727a0ddbc93'),
  },
  {
    entity: {
      id: '6cdfc273-6e70-4ae6-8c85-79e273b2f07f',
      name: '张春桥同志对驻沪三军负责人的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(21)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/6cdfc273-6e70-4ae6-8c85-79e273b2f07f/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"张春桥同志对驻沪三军负责人的讲话","authors":["张春桥"],"page_start":1,"page_end":21,"dates":[{"year":1967,"month":6,"day":8}]}],
      ocr: {"content_thresholds":[0,0.1,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/6cdfc273-6e70-4ae6-8c85-79e273b2f07f'),
  },
  {
    entity: {
      id: '6f46675c-df6e-49de-ad08-56be55cfba14',
      name: '张春桥同志、姚文元同志在上海市革命委员会教卫小组座谈会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/6f46675c-df6e-49de-ad08-56be55cfba14/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥、姚文元同志在上海市革命委员会教卫小组座谈会上的讲话","authors":["张春桥","姚文元"],"page_start":1,"page_end":2,"dates":[{"year":1967,"month":3}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.5,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/6f46675c-df6e-49de-ad08-56be55cfba14'),
  },
  {
    entity: {
      id: '402db3bf-1b65-4a55-9be3-841cdf1a2b55',
      name: '张春桥、姚文元同志在整风报告会上的重要讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(20)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/402db3bf-1b65-4a55-9be3-841cdf1a2b55/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"徐景贤同志在上海市革命造反派整风大会上致开幕词","authors":["徐景贤"],"page_start":2,"page_end":2,"ocr_exceptions":{"2":{"content_thresholds":[0,0.06,0.5,0]}},"dates":[{"year":1967,"month":3,"day":26}]},{"title":"姚文元在上海市革命造反派整风大会上的报告","alias":"姚文元同志的讲话","authors":["姚文元"],"page_start":3,"page_end":13,"dates":[{"year":1967,"month":3,"day":26}]},{"title":"张春桥在上海市革命造反派整风大会上的讲话","alias":"张春桥同志的讲话","authors":["张春桥"],"page_start":14,"page_end":20,"ocr_exceptions":{"20":{"content_thresholds":[0,0.06,0,0.5]}},"dates":[{"year":1967,"month":3,"day":26}]},{"title":"徐景贤同志在上海市革命造反派整风大会结束前的讲话","authors":["徐景贤"],"page_start":20,"page_end":20,"ocr_exceptions":{"20":{"content_thresholds":[0,0.06,0.5,0]}},"dates":[{"year":1967,"month":3,"day":26}]}],
      ocr: {"content_thresholds":[0,0.06,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/402db3bf-1b65-4a55-9be3-841cdf1a2b55'),
  },
  {
    entity: {
      id: 'fd6bc233-9bf7-4904-a48b-0bd8a7745def',
      name: '张春桥、姚文元同志接见上海市革命委员会工作人员（学生、群众组织）时的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/fd6bc233-9bf7-4904-a48b-0bd8a7745def/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥、姚文元同志接见上海市革命委员会工作人员（学生、群众组织）时的讲话","authors":["张春桥","姚文元"],"page_start":1,"page_end":4,"ocr_exceptions":{"1":{"content_thresholds":[0,0,0.5,0]}},"dates":[{"year":1967,"month":3,"day":20}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/fd6bc233-9bf7-4904-a48b-0bd8a7745def'),
  },
  {
    entity: {
      id: 'ae99e514-f613-49a6-b3a0-23a0912589cb',
      name: '在“高举毛泽东思想伟大红旗，进一步开展‘三结合’夺权斗争誓师大会”上张春桥、姚文元同志的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(11)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/ae99e514-f613-49a6-b3a0-23a0912589cb/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"张春桥姚文元在“高举毛泽东思想伟大红旗进一步开展三结合夺权斗争誓师大会”上的讲话","alias":"张春桥、姚文元同志在“高举毛泽东思想伟大红旗，进一步开展‘三结合’夺权斗争誓师大会”上的讲话","authors":["张春桥","姚文元"],"page_start":2,"page_end":11,"dates":[{"year":1967,"month":2,"day":24}]}],
      ocr: {"content_thresholds":[0,0.09,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/ae99e514-f613-49a6-b3a0-23a0912589cb'),
  },
  {
    entity: {
      id: '7b3123c6-00a9-4c92-b554-15d6dfa8e4e2',
      name: '张春桥、姚文元同志在上海市革命造反派座谈会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/7b3123c6-00a9-4c92-b554-15d6dfa8e4e2/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"张春桥在上海市革命造反派座谈会上的讲话","alias":"张春桥、姚文元同志在上海市革命造反派座谈会上的讲话","authors":["张春桥","姚文元"],"page_start":1,"page_end":2,"dates":[{"year":1967,"month":1,"day":11}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/7b3123c6-00a9-4c92-b554-15d6dfa8e4e2'),
  },
  {
    entity: {
      id: 'b72a9ab1-e739-4fe3-a588-4d2d1a59c542',
      name: '张春桥姚文元同志接见上海工人革命造反总司令部赴京代表团的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b72a9ab1-e739-4fe3-a588-4d2d1a59c542/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥姚文元同志接见上海工人革命造反总司令部赴京代表团的讲话","authors":["张春桥","姚文元"],"page_start":1,"page_end":4,"dates":[{"year":1966,"month":12,"day":6}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/b72a9ab1-e739-4fe3-a588-4d2d1a59c542'),
  },
  {
    entity: {
      id: '5f48d67e-bb91-4d4e-a1a4-149945e2e9d6',
      name: '张春桥姚文元同志接见上海工人革命造反总司令部赴京代表团的讲话（印刷版）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/5f48d67e-bb91-4d4e-a1a4-149945e2e9d6/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"张春桥姚文元同志接见上海工人革命造反总司令部赴京代表团的讲话","authors":["张春桥","姚文元"],"page_start":1,"page_end":4,"dates":[{"year":1966,"month":12,"day":6}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/5f48d67e-bb91-4d4e-a1a4-149945e2e9d6'),
  },
  {
    entity: {
      id: '3699bc62-2efc-4575-ab3a-e1cb7e50b2bf',
      name: '张春桥同志接见全国教育工作会议领导小组时的讲话',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/3699bc62-2efc-4575-ab3a-e1cb7e50b2bf.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"张春桥同志接见全国教育工作会议领导小组时的讲话","authors":["张春桥"],"page_start":1,"page_end":5,"dates":[{"year":1971,"month":7,"day":11}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.16,"differential_paragraph_merge_strategy_threshold":0,"content_thresholds":[0,0.12,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/3699bc62-2efc-4575-ab3a-e1cb7e50b2bf.pdf'),
  },
  {
    entity: {
      id: '11eaecfb-0b66-4a75-8720-50f82c9d0859',
      name: '张春桥同志在上海市革委“活学活用毛泽东思想、‘九大’文献讲用会”上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(10)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/11eaecfb-0b66-4a75-8720-50f82c9d0859/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志在上海市革命委员会“活学活用毛泽东思想、‘九大’文献讲用会”上的讲话","authors":["张春桥"],"page_start":1,"page_end":10,"dates":[{"year":1968,"month":3,"day":27}]}],
      ocr: {"content_thresholds":[0,0.06,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/11eaecfb-0b66-4a75-8720-50f82c9d0859'),
  },
  {
    entity: {
      id: 'a273ff3e-c25e-4dbc-8f19-33651337163e',
      name: '张春桥同志在省市革命委员会座谈会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/a273ff3e-c25e-4dbc-8f19-33651337163e/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"张春桥同志在省市革命委员会座谈会上的讲话","authors":["张春桥"],"page_start":1,"page_end":8,"dates":[{"year":1968,"month":3,"day":27}]}],
      ocr: {"content_thresholds":[0,0.06,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/a273ff3e-c25e-4dbc-8f19-33651337163e'),
  },
  {
    entity: {
      id: 'f59cc233-3f7b-4a42-9340-05f069e89d7b',
      name: '在市革会扩大会议上张春桥同志的讲话（记录稿）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/f59cc233-3f7b-4a42-9340-05f069e89d7b/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志在上海市革命委员会扩大会议上的讲话","authors":["张春桥"],"page_start":1,"page_end":3,"dates":[{"year":1968,"month":1,"day":11}]}],
      ocr: {"content_thresholds":[0,0.07,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/f59cc233-3f7b-4a42-9340-05f069e89d7b'),
  },
  {
    entity: {
      id: 'd4256afc-a49d-4cc3-bbf3-7a739ce4caa0',
      name: '张春桥同志一月四日讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d4256afc-a49d-4cc3-bbf3-7a739ce4caa0/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志讲话","authors":["张春桥"],"page_start":1,"page_end":3,"dates":[{"year":1968,"month":1,"day":4}]}],
      ocr: {"content_thresholds":[0,0.07,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/d4256afc-a49d-4cc3-bbf3-7a739ce4caa0'),
  },
  {
    entity: {
      id: '3f386526-454c-4e92-a192-fc5920b2c78d',
      name: '一月三日市革会扩大会议上张春桥同志最新指示',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(5)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/3f386526-454c-4e92-a192-fc5920b2c78d/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志在上海市革命委员会扩大会议上的讲话","authors":["张春桥"],"page_start":1,"page_end":5,"dates":[{"year":1968,"month":1,"day":3}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/3f386526-454c-4e92-a192-fc5920b2c78d'),
  },
  {
    entity: {
      id: '6bd01bc2-faec-47ec-9110-720cae195dcc',
      name: '张春桥同志讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(7)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/6bd01bc2-faec-47ec-9110-720cae195dcc/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志讲话","authors":["张春桥"],"page_start":1,"page_end":7,"dates":[{"year":1967,"month":1,"day":3}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/6bd01bc2-faec-47ec-9110-720cae195dcc'),
  },
  {
    entity: {
      id: 'a998d3d5-eabf-4abc-b717-f4dc401f53b3',
      name: '学习文件',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(12)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/a998d3d5-eabf-4abc-b717-f4dc401f53b3/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志在上海市革命委员会报告会上的讲话","authors":["张春桥"],"page_start":2,"page_end":12,"dates":[{"year":1967,"month":6,"day":3}]}],
      ocr: {"content_thresholds":[0,0.06,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/a998d3d5-eabf-4abc-b717-f4dc401f53b3'),
  },
  {
    entity: {
      id: '8800caac-f5a2-417f-aab5-1d6959527fd3',
      name: '首长讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8800caac-f5a2-417f-aab5-1d6959527fd3/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志在上海市革命委员会常委会上的讲话","authors":["张春桥"],"page_start":1,"page_end":2,"dates":[{"year":1967,"month":7,"day":11}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.5,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/8800caac-f5a2-417f-aab5-1d6959527fd3'),
  },
  {
    entity: {
      id: 'ecde42e7-0750-448b-95fe-cdeaf886c53d',
      name: '张春桥同志六月十日在工总司骨干学习会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/ecde42e7-0750-448b-95fe-cdeaf886c53d/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志六月十日在工总司骨干学习会上的讲话","authors":["张春桥"],"page_start":1,"page_end":3,"dates":[{"year":1967,"month":6,"day":10}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/ecde42e7-0750-448b-95fe-cdeaf886c53d'),
  },
  {
    entity: {
      id: '507a28b9-7e0c-4164-98a6-16ddc2f5cfce',
      name: '张春桥同志在南京体育馆的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(11)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/507a28b9-7e0c-4164-98a6-16ddc2f5cfce/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志在南京体育馆的讲话","authors":["张春桥"],"page_start":1,"page_end":11,"dates":[{"year":1967,"month":5,"day":14}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.5,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/507a28b9-7e0c-4164-98a6-16ddc2f5cfce'),
  },
  {
    entity: {
      id: '5c0df172-470f-4b11-8926-4f2dcfbf3e30',
      name: '张春桥同志讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(12)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/5c0df172-470f-4b11-8926-4f2dcfbf3e30/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥在上海市革命造反派整风大会上的讲话","alias":"张春桥同志讲话","authors":["张春桥"],"page_start":2,"page_end":12,"dates":[{"year":1967,"month":3,"day":26}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/5c0df172-470f-4b11-8926-4f2dcfbf3e30'),
  },
  {
    entity: {
      id: '411e22df-9335-4965-aeb5-a29c1089d733',
      name: '在《上海市市政交通系统革命造反派抓革命、促生产誓师大会》上张春桥同志讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/411e22df-9335-4965-aeb5-a29c1089d733/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志在上海市市政交通系统革命派誓师大会上的讲话","alias":"张春桥同志在《上海市市政交通系统革命造反派抓革命、促生产誓师大会》上的讲话","authors":["张春桥"],"page_start":2,"page_end":4,"dates":[{"year":1967,"month":3,"day":13}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/411e22df-9335-4965-aeb5-a29c1089d733'),
  },
  {
    entity: {
      id: 'f95d1fbe-9826-4ee6-93fe-db430db7c974',
      name: '张春桥同志在上海市市政交通系统革命派誓师大会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/f95d1fbe-9826-4ee6-93fe-db430db7c974/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志在上海市市政交通系统革命派誓师大会上的讲话","authors":["张春桥"],"page_start":1,"page_end":4,"dates":[{"year":1967,"month":3,"day":13}]}],
      ocr: {"content_thresholds":[0,0.07,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/f95d1fbe-9826-4ee6-93fe-db430db7c974'),
  },
  {
    entity: {
      id: 'cb43d83a-f293-4e06-a24e-34e3012b7f0c',
      name: '张春桥同志最新讲话——二月二十五日与华东局革命造反派座谈纪要',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/cb43d83a-f293-4e06-a24e-34e3012b7f0c/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"张春桥同志与华东局革命造反派座谈纪要","alias":"张春桥同志最新讲话——二月二十五日与华东局革命造反派座谈纪要","authors":["张春桥"],"page_start":2,"page_end":4,"dates":[{"year":1967,"month":2,"day":25}]}],
      ocr: {"content_thresholds":[0,0.07,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/cb43d83a-f293-4e06-a24e-34e3012b7f0c'),
  },
  {
    entity: {
      id: '5072b701-c253-4ac0-81e6-3741a490dbfc',
      name: '张春桥同志在上海市革命委员会“高举毛泽东思想伟大红旗进一步开展三结合夺权斗争誓师大会”上的讲话（油印版）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(19)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/5072b701-c253-4ac0-81e6-3741a490dbfc/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志在上海市革命委员会“高举毛泽东思想伟大红旗进一步开展三结合夺权斗争誓师大会”上的讲话","authors":["张春桥"],"page_start":1,"page_end":19,"dates":[{"year":1967,"month":2,"day":24}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/5072b701-c253-4ac0-81e6-3741a490dbfc'),
  },
  {
    entity: {
      id: '4ec0d46d-01c3-4b91-8aba-f44ad4f6af72',
      name: '张春桥同志讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(13)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/4ec0d46d-01c3-4b91-8aba-f44ad4f6af72/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志在上海市革命委员会“高举毛泽东思想伟大红旗进一步开展三结合夺权斗争誓师大会”上的讲话","alias":"张春桥同志讲话","authors":["张春桥"],"page_start":2,"page_end":13,"dates":[{"year":1967,"month":2,"day":24}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.5,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/4ec0d46d-01c3-4b91-8aba-f44ad4f6af72'),
  },
  {
    entity: {
      id: '01ec427d-9e37-4ead-a568-05b3614d4dde',
      name: '张春桥同志在上海市革命委员会“高举毛泽东思想伟大红旗进一步开展三结合夺权斗争誓师大会”上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(15)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/01ec427d-9e37-4ead-a568-05b3614d4dde/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志在上海市革命委员会“高举毛泽东思想伟大红旗进一步开展三结合夺权斗争誓师大会”上的讲话","authors":["张春桥"],"page_start":1,"page_end":15,"dates":[{"year":1967,"month":2,"day":24}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/01ec427d-9e37-4ead-a568-05b3614d4dde'),
  },
  {
    entity: {
      id: '1276ea8e-f709-43fb-ae5e-9c9df5a83ee2',
      name: '张春桥同志讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/1276ea8e-f709-43fb-ae5e-9c9df5a83ee2/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志讲话","authors":["张春桥"],"page_start":1,"page_end":2,"dates":[{"year":1967,"month":1,"day":10}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/1276ea8e-f709-43fb-ae5e-9c9df5a83ee2'),
  },
  {
    entity: {
      id: 'a6af1672-f7d5-4f1d-8fbc-23476e9c0a9e',
      name: '张春桥同志重要报告',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(11)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/a6af1672-f7d5-4f1d-8fbc-23476e9c0a9e/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"张春桥在上海市革命委员会报告会上的讲话","alias":"张春桥同志重要报告","authors":["张春桥"],"page_start":2,"page_end":10,"dates":[{"year":1967,"month":10,"day":16}]}],
      ocr: {"content_thresholds":[0.1,0,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/a6af1672-f7d5-4f1d-8fbc-23476e9c0a9e'),
  },
  {
    entity: {
      id: '2264a81e-a211-453b-bae9-b666c592f08b',
      name: '张春桥同志讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(5)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/2264a81e-a211-453b-bae9-b666c592f08b/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"张春桥同志在市革会扩大会议上的讲话","authors":["张春桥"],"page_start":1,"page_end":5,"dates":[{"year":1967,"month":12,"day":27}]}],
      ocr: {"content_thresholds":[0,0.07,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/2264a81e-a211-453b-bae9-b666c592f08b'),
  },
  {
    entity: {
      id: 'c8188f4c-34ac-4468-8b7a-46af942cf862',
      name: '张春桥同志十一月十九日在上海市革会扩大会议上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(15)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c8188f4c-34ac-4468-8b7a-46af942cf862/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志在上海市革会扩大会议上的讲话","authors":["张春桥"],"page_start":1,"page_end":15,"dates":[{"year":1967,"month":11,"day":19}]}],
      ocr: {"content_thresholds":[0,0.08,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/c8188f4c-34ac-4468-8b7a-46af942cf862'),
  },
  {
    entity: {
      id: '3484fcc0-93f5-4e1a-b6b5-61a78e2811cf',
      name: '“四人帮”在湖北的黑干将、现行反革命分子夏邦银、朱鸿霞、胡厚民、张立国、董明会的罪行材料',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(46)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/3484fcc0-93f5-4e1a-b6b5-61a78e2811cf/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"“四人帮”在湖北的主要干将、现行反革命分子夏邦银的罪行材料","authors":["中共湖北省委运动办公室"],"page_start":3,"page_end":14,"ocr_exceptions":{"3":{"content_thresholds":[0,0.1,0.5,0]}},"dates":[{"year":1977}]},{"title":"“四人帮”在湖北的黑干将、现行反革命分子朱鸿霞的罪行材料","authors":["中共湖北省委运动办公室"],"page_start":15,"page_end":19,"dates":[{"year":1977}]},{"title":"“四人帮”在湖北的黑干将现行反革命分子胡厚民的罪行材料","authors":["中共湖北省委运动办公室"],"page_start":20,"page_end":29,"ocr_exceptions":{"29":{"content_thresholds":[0,0.1,0,0.5]}},"dates":[{"year":1977}]},{"title":"“四人帮”在湖北的黑干将、现行反革命分子张立国的罪行材料","authors":["中共湖北省委运动办公室"],"page_start":29,"page_end":38,"ocr_exceptions":{"29":{"content_thresholds":[0,0.1,0.5,0]}},"dates":[{"year":1977}]},{"title":"董明会的罪行材料","authors":["中共湖北省委运动办公室"],"page_start":39,"page_end":46,"dates":[{"year":1977}]}],
      ocr: {"content_thresholds":[0,0.1,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/3484fcc0-93f5-4e1a-b6b5-61a78e2811cf'),
  },
  {
    entity: {
      id: 'a6fd5977-6216-489a-b746-2fe7689a04d4',
      name: '夏邦银、朱鸿霞、胡厚民等人配合“四人帮”在湖北大搞篡党夺权阴谋活动的罪行',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/a6fd5977-6216-489a-b746-2fe7689a04d4/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"夏邦银、朱鸿霞、胡厚民等人配合“四人帮”在湖北大搞篡党夺权阴谋活动的罪行","authors":["中共湖北省委材料组"],"page_start":2,"page_end":9,"dates":[{"year":1977,"month":2,"day":16}]}],
      ocr: {"content_thresholds":[0,0.1,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/a6fd5977-6216-489a-b746-2fe7689a04d4'),
  },
  {
    entity: {
      id: '8e9cdddb-b1bb-4984-b926-e8d5725a19da',
      name: '宗明兰在省直机关批判右倾翻案风大会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(10)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8e9cdddb-b1bb-4984-b926-e8d5725a19da/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"宗明兰在省直机关批判右倾翻案风大会上的讲话","authors":["宗明兰"],"page_start":2,"page_end":10,"dates":[{"year":1976,"month":1,"day":21}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/8e9cdddb-b1bb-4984-b926-e8d5725a19da'),
  },
  {
    entity: {
      id: '6379476a-690e-41d6-9202-58881bad8576',
      name: '宗明兰在省理论讨论会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/6379476a-690e-41d6-9202-58881bad8576/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"宗明兰在省理论讨论会上的讲话","authors":["宗明兰"],"page_start":2,"page_end":8,"dates":[{"year":1976,"month":7,"day":4}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/6379476a-690e-41d6-9202-58881bad8576'),
  },
  {
    entity: {
      id: '0578160b-2db6-4294-8b88-157c133bd0b9',
      name: '张春桥同志在上海市革命委员会报告会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/0578160b-2db6-4294-8b88-157c133bd0b9/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥在上海市革命委员会报告会上的讲话","alias":"张春桥同志在上海市革命委员会报告会上的讲话","authors":["张春桥"],"page_start":1,"page_end":9,"dates":[{"year":1967,"month":10,"day":16}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/0578160b-2db6-4294-8b88-157c133bd0b9'),
  },
  {
    entity: {
      id: '5a95e270-13cc-43e2-8bc5-d2c877be5c6a',
      name: '坚决批倒批臭刘少奇反革命修正主义路线',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(13)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/5a95e270-13cc-43e2-8bc5-d2c877be5c6a/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"陈伯达、张春桥、关锋、戚本禹接见红代会及人民日报、解放军报、红旗杂志负责人的讲话","authors":["陈伯达","张春桥","关锋","戚本禹"],"page_start":2,"page_end":10,"dates":[{"year":1967,"month":7,"day":16}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/5a95e270-13cc-43e2-8bc5-d2c877be5c6a'),
  },
  {
    entity: {
      id: '799f3f6f-d8d1-4181-b6a7-9a9daaf84bb8',
      name: '宗明兰在省工农干部学习班大会上的发言（提纲）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(7)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/799f3f6f-d8d1-4181-b6a7-9a9daaf84bb8/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"宗明兰在省工农干部学习班大会上的发言（提纲）","authors":["宗明兰"],"page_start":2,"page_end":7,"dates":[{"year":1974,"month":2}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/799f3f6f-d8d1-4181-b6a7-9a9daaf84bb8'),
  },
  {
    entity: {
      id: '1a64a4ed-2bab-4ea1-8b71-c280caca4767',
      name: '宗明兰在各市、地宣传组长座谈会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(10)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/1a64a4ed-2bab-4ea1-8b71-c280caca4767/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"宗明兰在各市、地宣传组长座谈会上的讲话","authors":["宗明兰"],"page_start":2,"page_end":10,"dates":[{"year":1976,"month":9,"day":24}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/1a64a4ed-2bab-4ea1-8b71-c280caca4767'),
  },
  {
    entity: {
      id: 'eb1072b3-9057-4142-8fd8-544053ced488',
      name: '赵辛初同志在全省广播大会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(7)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/eb1072b3-9057-4142-8fd8-544053ced488/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"赵辛初同志在全省广播大会上的讲话","authors":["赵辛初"],"page_start":2,"page_end":7,"dates":[{"year":1975,"month":6,"day":4}]}],
      ocr: {"content_thresholds":[0,0.07,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/eb1072b3-9057-4142-8fd8-544053ced488'),
  },
  {
    entity: {
      id: 'fb28741c-20d2-4d76-b35d-5b00cf8fc258',
      name: '张春桥同志接见福建部分赴京革命同学讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/fb28741c-20d2-4d76-b35d-5b00cf8fc258/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志接见福建部分赴京革命同学的讲话","alias":"张春桥同志接见福建部分赴京革命同学讲话","authors":["张春桥"],"page_start":1,"page_end":3,"dates":[{"year":1977,"month":1}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/fb28741c-20d2-4d76-b35d-5b00cf8fc258'),
  },
  {
    entity: {
      id: '982b2747-bdfb-4011-9441-73f04bf9b94f',
      name: '夏邦银、朱洪霞、胡厚民等人罪行材料（街头大字报节录）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(7)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/982b2747-bdfb-4011-9441-73f04bf9b94f/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"按","authors":["中共武汉市委材料组"],"page_start":2,"page_end":2,"ocr_exceptions":{"2":{"content_thresholds":[0,0,0,0.5]}},"dates":[{"year":1977,"month":1}]},{"title":"注意国内问题按既定方针办","authors":["夏邦银","朱洪霞","胡厚民","武汉印刷厂革委会"],"page_start":2,"page_end":5,"ocr_exceptions":{"2":{"content_thresholds":[0,0,0.5,0]}},"dates":[{"year":1976,"month":9,"day":9}]},{"title":"老狗们在想什么（节录）","authors":["夏邦银","朱洪霞","胡厚民","晓能屋"],"page_start":5,"page_end":6,"ocr_exceptions":{"5":{"content_thresholds":[0,0,0.5,0]},"6":{"content_thresholds":[0,0,0,0.5]}},"dates":[{"year":1976}]},{"title":"读报有感（节录）——从西哈努克退休谈起","authors":["夏邦银","朱洪霞","胡厚民","吴仁筱"],"page_start":6,"page_end":7,"ocr_exceptions":{"7":{"content_thresholds":[0,0,0,0.5]}},"dates":[{"year":1976}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/982b2747-bdfb-4011-9441-73f04bf9b94f'),
  },
  {
    entity: {
      id: 'f4520592-1d53-46a5-9853-6406b61945f8',
      name: '夏邦银、朱洪霞、胡厚民等人罪行材料（街头大字报、传单节录）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/f4520592-1d53-46a5-9853-6406b61945f8/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"按","authors":["中共武汉市委材料组"],"page_start":2,"page_end":2,"dates":[{"year":1977,"month":1}]},{"title":"关于批邓反击右倾翻案风斗争的几点看法（节录）","authors":["夏邦银","朱洪霞","胡厚民"],"page_start":3,"page_end":4,"ocr_exceptions":{"4":{"content_thresholds":[0,0.8,0,0.5]}},"dates":[{"year":1976}]},{"title":"给伟大领袖毛主席的一封信","alias":"给伟大领袖毛主席的一封信（节录）","authors":["夏邦银","朱洪霞","胡厚民"],"page_start":4,"page_end":4,"ocr_exceptions":{"4":{"content_thresholds":[0,0,0,0.5]}},"dates":[{"year":1976,"month":2,"day":23}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/f4520592-1d53-46a5-9853-6406b61945f8'),
  },
  {
    entity: {
      id: 'c21f8808-2334-4e60-a047-27a52e8adbce',
      name: '夏邦银、朱洪霞、胡厚民等人的言论节录',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(17)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c21f8808-2334-4e60-a047-27a52e8adbce/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"前言","authors":["中共武汉市委材料组"],"page_start":2,"page_end":3,"ocr_exceptions":{"3":{"content_thresholds":[0,0.08,0,0.5]}},"dates":[{"year":1976,"month":12}]},{"title":"给伟大领袖毛主席的一封信","authors":["夏邦银","朱洪霞","胡厚民"],"page_start":4,"page_end":5,"ocr_exceptions":{"4":{"content_thresholds":[0,0.08,0.5,0]},"5":{"content_thresholds":[0,0.08,0,0.5]}},"dates":[{"year":1976,"month":2,"day":23}]},{"title":"口号报","authors":["夏邦银","朱洪霞","胡厚民"],"page_start":5,"page_end":5,"ocr_exceptions":{"5":{"content_thresholds":[0,0.08,0.5,0]}},"dates":[{"year":1976,"month":2}]},{"title":"跟上形势端正态度积极领导——致省、市委主要负责同志的一封公开信","authors":["夏邦银","朱洪霞","胡厚民"],"page_start":6,"page_end":6,"dates":[{"year":1976,"month":3,"day":1}]},{"title":"朱洪霞在武重俱乐部集会上的讲话（节录）","authors":["朱洪霞","戴行江"],"page_start":7,"page_end":7,"ocr_exceptions":{"7":{"content_thresholds":[0,0.08,0,0.5]}},"dates":[{"year":1976,"month":3,"day":8}]},{"title":"朱洪霞在武重俱乐部集会上的讲话（节录）","authors":["朱洪霞"],"page_start":7,"page_end":7,"ocr_exceptions":{"7":{"content_thresholds":[0,0.08,0.5,0]}},"dates":[{"year":1976,"month":3,"day":14}]},{"title":"朱洪霞在市房地局礼堂集会上的讲话（节录）","authors":["朱洪霞"],"page_start":7,"page_end":8,"ocr_exceptions":{"7":{"content_thresholds":[0,0.08,0.5,0]},"8":{"content_thresholds":[0,0.08,0,0.5]}},"dates":[{"year":1976,"month":3,"day":15}]},{"title":"朱洪霞在市房地局礼堂集会上的讲话（节录）","authors":["朱洪霞","胡厚民","聂年生"],"page_start":8,"page_end":9,"ocr_exceptions":{"9":{"content_thresholds":[0,0.08,0,0.5]}},"dates":[{"year":1976,"month":3,"day":15}]},{"title":"吴正斌在武胜路集会上的讲话（节录）","authors":["吴正斌"],"page_start":9,"page_end":9,"ocr_exceptions":{"9":{"content_thresholds":[0,0.08,0,0.5]}},"dates":[{"year":1976,"month":3,"day":21}]},{"title":"朱洪霞等人在市建工局礼堂集会上的讲话（节录）","authors":["胡厚民","朱洪霞","顾建棠","吴焱金"],"page_start":9,"page_end":11,"ocr_exceptions":{"9":{"content_thresholds":[0,0.08,0.5,0]}},"dates":[{"year":1976,"month":3,"day":25}]},{"title":"胡厚民、朱洪霞等人在市政三公司集会上的讲话（节录）","authors":["胡厚民","朱洪霞"],"page_start":11,"page_end":12,"ocr_exceptions":{"11":{"content_thresholds":[0,0.08,0.5,0]}},"dates":[{"year":1976,"month":3,"day":31}]},{"title":"胡厚民等人在市建工局礼堂集会上的讲话（节录）","authors":["胡厚民","吴焱金"],"page_start":12,"page_end":13,"ocr_exceptions":{"12":{"content_thresholds":[0,0.08,0.5,0]},"13":{"content_thresholds":[0,0.08,0,0.5]}},"dates":[{"year":1976,"month":4,"day":1}]},{"title":"朱洪霞、胡厚民等人在武胜路街头集会上的讲话（节录）","authors":["胡厚民","朱洪霞"],"page_start":13,"page_end":14,"ocr_exceptions":{"14":{"content_thresholds":[0,0.08,0,0.5]}},"dates":[{"year":1976,"month":4,"day":4}]},{"title":"朱洪霞、胡厚民在市建工局礼堂集会上的讲话（节录）","authors":["胡厚民","朱洪霞"],"page_start":14,"page_end":14,"dates":[{"year":1976,"month":4,"day":12}]},{"title":"朱洪霞、胡厚民在江汉工人文化宫集会上的讲话（节录）","authors":["胡厚民","朱洪霞"],"page_start":14,"page_end":15,"ocr_exceptions":{"14":{"content_thresholds":[0,0.08,0.5,0]}},"dates":[{"year":1976,"month":4,"day":13}]},{"title":"顾建棠等人在市建工局礼堂集会上的讲话（节录）","authors":["顾建棠"],"page_start":15,"page_end":15,"ocr_exceptions":{"15":{"content_thresholds":[0,0.08,0.5,0]}},"dates":[{"year":1976,"month":4,"day":15}]},{"title":"朱洪霞在国棉六厂子弟小学集会上的讲话（节录）","authors":["朱洪霞"],"page_start":15,"page_end":16,"ocr_exceptions":{"15":{"content_thresholds":[0,0.08,0.5,0]}},"dates":[{"year":1976,"month":4,"day":28}]},{"title":"夏邦银、胡厚民等人在长航集会上的讲话（节录）","authors":["夏邦银","胡厚民"],"page_start":16,"page_end":16,"ocr_exceptions":{"16":{"content_thresholds":[0,0.08,0,0.5]}},"dates":[{"year":1976,"month":5,"day":8}]},{"title":"朱洪霞在江岸区环卫所集会上的讲话（节录）","authors":["朱洪霞"],"page_start":16,"page_end":16,"dates":[{"year":1976,"month":5,"day":22}]},{"title":"夏邦银、胡厚民讲话（节录）","authors":["夏邦银","胡厚民"],"page_start":16,"page_end":17,"ocr_exceptions":{"16":{"content_thresholds":[0,0.08,0.5,0]},"17":{"content_thresholds":[0,0.08,0,0.5]}},"dates":[{"year":1976,"month":7,"day":9}]},{"title":"潘洪斌在市房地局礼堂集会上的讲话（节录）","authors":["潘洪斌"],"page_start":17,"page_end":17,"ocr_exceptions":{"17":{"content_thresholds":[0,0.08,0,0.5]}},"dates":[{"year":1976,"month":7,"day":13}]},{"title":"彭勋、顾建棠在国棉六厂集会上的讲话（节录）","authors":["彭勋","顾建棠"],"page_start":17,"page_end":17,"dates":[{"year":1976,"month":7,"day":14}]}],
      ocr: {"content_thresholds":[0,0.08,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/c21f8808-2334-4e60-a047-27a52e8adbce'),
  },
  {
    entity: {
      id: '097e8dc4-78a1-46bb-8b7e-467bb84632b7',
      name: '重要讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/097e8dc4-78a1-46bb-8b7e-467bb84632b7/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"在关于知识分子问题会议上的讲话","alias":"在中央召开的关于知识分子问题会议上的讲话","authors":["毛泽东"],"page_start":1,"page_end":1,"ocr_exceptions":{"1":{"content_thresholds":[0.15,0.52,0,0]}},"dates":[{"year":1956,"month":1,"day":20}]},{"title":"事情正在起变化","authors":["毛泽东"],"page_start":1,"page_end":1,"ocr_exceptions":{"1":{"content_thresholds":[0.47,0.22,0,0]}},"dates":[{"year":1957,"month":5,"day":15}]},{"title":"湘江评论","authors":[],"page_start":1,"page_end":1,"ocr_exceptions":{"1":{"content_thresholds":[0.81,0,0,0]}},"dates":[]},{"title":"陈伯达等对“赴广州揪王任重革命造反团”的指示","alias":"彻底批判刘、邓、陶资产阶级的反动路线","authors":["江青","陈伯达","康生"],"page_start":2,"page_end":2,"dates":[{"year":1967,"month":1,"day":4}]},{"title":"江青同志在“全国在京革命师生向资产阶级反动路线猛烈开火誓师大会”上的讲话","authors":["江青"],"page_start":3,"page_end":3,"ocr_exceptions":{"3":{"content_thresholds":[0,0.26,0,0]}},"dates":[{"year":1966,"month":10,"day":6}]},{"title":"张春桥同志接见福建部分赴京革命同学的讲话","alias":"张春桥同志接见福建部分赴京革命同学的讲话片段","authors":["张春桥"],"page_start":3,"page_end":4,"ocr_exceptions":{"3":{"content_thresholds":[0.74,0,0,0]},"4":{"content_thresholds":[0,0.73,0,0]}},"dates":[{"year":1966,"month":10,"day":7}]},{"title":"关锋在北京地质学院同学座谈会上的讲话","alias":"关锋同志九月二十八日在地质学院同学座谈会上讲话片段","authors":["关锋"],"page_start":4,"page_end":4,"ocr_exceptions":{"4":{"content_thresholds":[0.27,0,0,0]}},"dates":[{"year":1966,"month":9,"day":28}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/097e8dc4-78a1-46bb-8b7e-467bb84632b7'),
  },
  {
    entity: {
      id: '5a790475-01ac-4334-9941-63d3ee59c46c',
      name: '认真学习毛主席重要指示——搞清楚资产阶级就在共产党内',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/5a790475-01ac-4334-9941-63d3ee59c46c.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"认真学习毛主席重要指示——搞清楚资产阶级就在共产党内","authors":[],"page_start":2,"page_end":46,"ocr_exceptions":{"2":{"content_thresholds":[0.6,0,0,0],"standard_paragraph_merge_strategy_threshold":0.17,"differential_paragraph_merge_strategy_threshold":0}},"dates":[{"year":1976}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.17,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/5a790475-01ac-4334-9941-63d3ee59c46c.pdf'),
  },
  {
    entity: {
      id: '7211a45f-26fb-4355-bd7f-fd025d873813',
      name: '怎样理解资产阶级就在共产党内——北京市第三次理论讨论会的五个发言材料',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/7211a45f-26fb-4355-bd7f-fd025d873813.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"说明","authors":["中共北京市委宣传组"],"page_start":2,"page_end":2,"dates":[{"year":1976,"month":4,"day":20}]},{"title":"怎样理解资产阶级就在共产党内的科学论断","authors":["理论讨论会第三组"],"page_start":5,"page_end":11,"dates":[{"year":1976,"month":4,"day":20}]},{"title":"从阶级关系的变化看党内资产阶级的形成","authors":["理论讨论会第三组"],"page_start":12,"page_end":19,"dates":[{"year":1976,"month":4,"day":20}]},{"title":"从经济地位和政治态度看走资派就是党内资产阶级","authors":["理论讨论会第二组"],"page_start":20,"page_end":28,"dates":[{"year":1976,"month":4,"day":20}]},{"title":"走资派的特点和活动规律","authors":["理论讨论会第一组"],"page_start":29,"page_end":40,"dates":[{"year":1976,"month":4,"day":20}]},{"title":"毛主席关于资产阶级就在共产党内的英明论断是对马列主义的重大发展","authors":["理论讨论会第四组"],"page_start":41,"page_end":48,"ocr_exceptions":{"48":{"standard_paragraph_merge_strategy_threshold":0.17,"differential_paragraph_merge_strategy_threshold":0,"content_thresholds":[0,0.5,0,0]}},"dates":[{"year":1976,"month":4,"day":20}]}],
      ocr: {"standard_paragraph_merge_strategy_threshold":0.17,"differential_paragraph_merge_strategy_threshold":0,"content_thresholds":[0,0.12,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/7211a45f-26fb-4355-bd7f-fd025d873813.pdf'),
  },
  {
    entity: {
      id: '386e343b-abb3-44d4-8d5f-86ed45cea277',
      name: '张春桥在总政宣传部、解放军报社部分同志座谈会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/386e343b-abb3-44d4-8d5f-86ed45cea277/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"张春桥在总政宣传部、解放军报社部分同志座谈会上的讲话","authors":["张春桥"],"page_start":1,"page_end":2,"dates":[{"year":1975,"month":2,"day":8}]}],
      ocr: {"content_thresholds":[0,0.1,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/386e343b-abb3-44d4-8d5f-86ed45cea277'),
  },
  {
    entity: {
      id: 'c814e28a-6a5d-435e-b402-3c375ab69c97',
      name: '张春桥同志指示',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c814e28a-6a5d-435e-b402-3c375ab69c97/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志指示","authors":["张春桥"],"page_start":1,"page_end":3,"dates":[{"year":1967,"month":3}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/c814e28a-6a5d-435e-b402-3c375ab69c97'),
  },
  {
    entity: {
      id: '82069f34-dd44-417e-ba98-b17129bb637c',
      name: '在工总司召开的“坚决响应毛主席伟大号召，‘斗私批修’誓师大会”上张春桥同志的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/82069f34-dd44-417e-ba98-b17129bb637c/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"在工总司召开的“坚决响应毛主席伟大号召，‘斗私批修’誓师大会”上张春桥同志的讲话","authors":["张春桥"],"page_start":1,"page_end":4,"dates":[{"year":1967,"month":10,"day":6}]}],
      ocr: {"content_thresholds":[0,0.09,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/82069f34-dd44-417e-ba98-b17129bb637c'),
  },
  {
    entity: {
      id: '8d98ee74-15ee-4e9a-a255-e5997a8a5bde',
      name: '张春桥同志讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8d98ee74-15ee-4e9a-a255-e5997a8a5bde/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志讲话","authors":["张春桥"],"page_start":1,"page_end":3,"dates":[{"year":1967,"month":1,"day":22}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/8d98ee74-15ee-4e9a-a255-e5997a8a5bde'),
  },
  {
    entity: {
      id: '6f37606f-a3d5-47bb-b957-b2fa6bcf72fe',
      name: '张春桥同志二月二十五日与华东局革命造反派座谈纪要',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/6f37606f-a3d5-47bb-b957-b2fa6bcf72fe/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志与华东局革命造反派座谈纪要","authors":["张春桥"],"page_start":1,"page_end":3,"ocr_exceptions":{"3":{"content_thresholds":[0,0.07,0,0.5]}},"dates":[{"year":1967,"month":2,"day":25}]}],
      ocr: {"content_thresholds":[0,0.07,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/6f37606f-a3d5-47bb-b957-b2fa6bcf72fe'),
  },
  {
    entity: {
      id: 'c3e84977-6102-42ff-bc79-3e7ceacfead1',
      name: '张春桥同志十一月二十五日在市革会扩大会议上的讲话纪要',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(5)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c3e84977-6102-42ff-bc79-3e7ceacfead1/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志在市革会扩大会议上的讲话纪要","authors":["张春桥"],"page_start":1,"page_end":5,"dates":[{"year":1968,"month":11,"day":25}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/c3e84977-6102-42ff-bc79-3e7ceacfead1'),
  },
  {
    entity: {
      id: '5af91bc2-3540-46ef-824e-c1e2158c6255',
      name: '张春桥同志接见上海《红革会》与《工人革命造反总司令部》代表的谈话记录',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/5af91bc2-3540-46ef-824e-c1e2158c6255/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志接见上海红革会与工人革命造反总司令部代表的谈话记录","authors":["张春桥"],"page_start":1,"page_end":8,"dates":[{"year":1966,"month":12,"day":23}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/5af91bc2-3540-46ef-824e-c1e2158c6255'),
  },
  {
    entity: {
      id: '8da1b3f4-a862-487f-9c7a-af20178846c8',
      name: '资料摘编（内部参考）第七期',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(5)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8da1b3f4-a862-487f-9c7a-af20178846c8/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志在“热烈欢迎中国人民解放军毛泽东思想宣传队进驻市公安局大会”上讲话（摘录）","authors":["张春桥"],"page_start":1,"page_end":5,"ocr_exceptions":{"1":{"content_thresholds":[0.3,0.1,0,0]}},"dates":[{"year":1967,"month":12,"day":19}]}],
      ocr: {"content_thresholds":[0,0.1,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/8da1b3f4-a862-487f-9c7a-af20178846c8'),
  },
  {
    entity: {
      id: 'a974022d-7b96-4e81-bc17-767113571fa5',
      name: '张春桥同志十二月十日下午接见宣传系统代表讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/a974022d-7b96-4e81-bc17-767113571fa5/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志十二月十日下午接见宣传系统代表讲话","authors":["张春桥"],"page_start":1,"page_end":8,"dates":[{"year":1967,"month":12,"day":10}]}],
      ocr: {"content_thresholds":[0,0.11,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/a974022d-7b96-4e81-bc17-767113571fa5'),
  },
  {
    entity: {
      id: '4487f711-d1dc-4c33-a1a9-50a1b7f7d659',
      name: '关于日本问题的报告',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(6)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/4487f711-d1dc-4c33-a1a9-50a1b7f7d659/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志在中共上海市委宣传部举办的第13次时事政策讲演会上的报告记录稿","authors":["张春桥"],"page_start":1,"page_end":6,"dates":[{"year":1956,"month":11}]}],
      ocr: {"content_thresholds":[0,0.08,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/4487f711-d1dc-4c33-a1a9-50a1b7f7d659'),
  },
  {
    entity: {
      id: '7bbe94bc-b48d-4d7b-b4a6-1325d0b0a2d3',
      name: '张春桥主任一九七五年三月一日在全军各大单位政治部主任座谈会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(21)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/7bbe94bc-b48d-4d7b-b4a6-1325d0b0a2d3/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥主任在全军各大单位政治部主任座谈会上的讲话","authors":["张春桥"],"page_start":1,"page_end":21,"dates":[{"year":1975,"month":3,"day":1}]}],
      ocr: {"content_thresholds":[0,0.13,0,0],"standard_paragraph_merge_strategy_threshold":0.16,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/7bbe94bc-b48d-4d7b-b4a6-1325d0b0a2d3'),
  },
  {
    entity: {
      id: '0fb5b8d7-6378-4332-9016-a8c17ebf7b99',
      name: '“四人帮”罪行材料（二）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(10)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/0fb5b8d7-6378-4332-9016-a8c17ebf7b99/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥在总参党委扩大会第一次全体会议上的讲话","authors":["张春桥"],"page_start":2,"page_end":10,"dates":[{"year":1973,"month":3,"day":15}]}],
      ocr: {"content_thresholds":[0,0.1,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/0fb5b8d7-6378-4332-9016-a8c17ebf7b99'),
  },
  {
    entity: {
      id: 'd36737e2-811c-4b1d-9c2c-8889eade960c',
      name: '“四人帮”罪行材料（六）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d36737e2-811c-4b1d-9c2c-8889eade960c/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥在作战部关于处理于会泳、浩亮、刘庆棠等人参观问题的检查报告上的批注","authors":["张春桥"],"page_start":1,"page_end":4,"dates":[{"year":1973,"month":1,"day":30}]}],
      ocr: {"content_thresholds":[0,0.11,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/d36737e2-811c-4b1d-9c2c-8889eade960c'),
  },
  {
    entity: {
      id: '040958d6-6657-414d-9702-8234e7c28625',
      name: '张春桥同志在济南军区的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志在济南军区的讲话","authors":["张春桥"],"page_start":1,"page_end":2,"dates":[{"year":1967,"month":5}]},{"title":"王效禹同志讲话","authors":["王效禹"],"page_start":2,"page_end":4,"ocr_exceptions":{"2":{"content_thresholds":[0.25,0.09,0.5,0]},"4":{"content_thresholds":[0,0.09,0,0.5]}},"dates":[{"year":1967,"month":5,"day":29}]},{"title":"王效禹同志讲话","authors":["王效禹"],"page_start":4,"page_end":9,"dates":[{"year":1967,"month":5,"day":28}]}],
      ocr: {"content_thresholds":[0,0.09,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/040958d6-6657-414d-9702-8234e7c28625'),
  },
  {
    entity: {
      id: 'b8cb3468-7dc6-4668-87e8-4fceb1f91d3d',
      name: '“四人帮”罪行材料（一）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(16)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"江青给中央军委的信","authors":["江青"],"page_start":2,"page_end":3,"ocr_exceptions":{"3":{"content_thresholds":[0,0.11,0,0.5]}},"dates":[{"year":1974,"month":1,"day":24}]},{"title":"迟群、谢静宜在军委直属单位批林批孔报告会上的讲话","authors":["迟群","谢静宜"],"page_start":3,"page_end":16,"ocr_exceptions":{"3":{"content_thresholds":[0,0.11,0.5,0]}},"dates":[{"year":1974,"month":1,"day":24}]}],
      ocr: {"content_thresholds":[0,0.11,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/b8cb3468-7dc6-4668-87e8-4fceb1f91d3d'),
  },
  {
    entity: {
      id: 'db46f9b6-a73c-4531-a3e9-3a2e4c73a8f1',
      name: '研究“工代会”会议记录',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(11)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/db46f9b6-a73c-4531-a3e9-3a2e4c73a8f1/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"研究“工代会”会议记录","authors":["张春桥","王洪文"],"page_start":1,"page_end":11,"dates":[{"year":1967,"month":11,"day":22}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/db46f9b6-a73c-4531-a3e9-3a2e4c73a8f1'),
  },
  {
    entity: {
      id: '7492dacf-eac4-45d3-aecb-6184761f1139',
      name: '毛远新同志在辽联赴京代表团座谈会上的讲话纪要',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/7492dacf-eac4-45d3-aecb-6184761f1139/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新同志在辽联赴京代表团座谈会上的讲话纪要","authors":["毛远新"],"page_start":1,"page_end":2,"ocr_exceptions":{"2":{"auto_vsplit":true,"vsplit":0.5,"content_thresholds":[0,0.41,0,0]}},"dates":[{"year":1968,"month":3,"day":20}]},{"title":"江青同志昨天接见江苏代表团的一段讲话","authors":["江青"],"page_start":2,"page_end":2,"ocr_exceptions":{"2":{"auto_vsplit":true,"vsplit":0.5,"content_thresholds":[0.59,0.2,0,0]}},"dates":[{"year":1968,"month":3,"day":19}]}],
      ocr: {"auto_vsplit":true,"vsplit":0.5},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/7492dacf-eac4-45d3-aecb-6184761f1139'),
  },
  {
    entity: {
      id: '7a1ea3a9-d3ab-4cfe-a417-9cbb73dbc318',
      name: '王洪文副主席在接见总参民兵组训工作座谈会议全体同志时的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(7)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/7a1ea3a9-d3ab-4cfe-a417-9cbb73dbc318/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"王洪文副主席在接见总参民兵组训工作座谈会议全体同志时的讲话","authors":["王洪文"],"page_start":1,"page_end":4,"ocr_exceptions":{"4":{"content_thresholds":[0.1,0.1,0,0]}},"dates":[{"year":1974,"month":9,"day":22}]},{"title":"叶剑英付主席在接见总参民兵组训工作座谈会议全体同志时的讲话","authors":["叶剑英"],"page_start":5,"page_end":7,"ocr_exceptions":{"5":{"content_thresholds":[0.15,0.1,0,0]}},"dates":[{"year":1974,"month":9,"day":22}]}],
      ocr: {"content_thresholds":[0,0.1,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/7a1ea3a9-d3ab-4cfe-a417-9cbb73dbc318'),
  },
  {
    entity: {
      id: 'fc38e16e-2075-408b-8a68-e00d7c7fe76f',
      name: '王洪文、纪登奎同志在省委工作会议召集人和县委书记会议上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(7)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/fc38e16e-2075-408b-8a68-e00d7c7fe76f/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"王洪文同志讲话","authors":["王洪文"],"page_start":2,"page_end":4,"ocr_exceptions":{"2":{"content_thresholds":[0.5,0.12,0,0]},"4":{"content_thresholds":[0,0.12,0,0.5]}},"dates":[{"year":1975,"month":7,"day":9}]},{"title":"纪登奎同志讲话","authors":["纪登奎"],"page_start":4,"page_end":7,"ocr_exceptions":{"4":{"content_thresholds":[0,0.12,0.5,0]},"7":{"content_thresholds":[0,0.5,0,0]}},"dates":[{"year":1975,"month":7,"day":9}]}],
      ocr: {"content_thresholds":[0,0.12,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/fc38e16e-2075-408b-8a68-e00d7c7fe76f'),
  },
  {
    entity: {
      id: '9206ecb2-3e0a-458f-be99-98532260fd27',
      name: '“四人帮”罪行材料（五）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/9206ecb2-3e0a-458f-be99-98532260fd27/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"王洪文、张春桥在听取三部批林批孔运动情况汇报时的插话","authors":["王洪文","张春桥"],"page_start":2,"page_end":4,"dates":[{"year":1974,"month":3,"day":6}]}],
      ocr: {"content_thresholds":[0,0.11,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/9206ecb2-3e0a-458f-be99-98532260fd27'),
  },
  {
    entity: {
      id: 'db61721a-a96f-4ecf-8ec8-dc3d9be7de1d',
      name: '“四人帮”罪行材料（一〇）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/db61721a-a96f-4ecf-8ec8-dc3d9be7de1d/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"王洪文、张春桥在中央军委领导同志听取通信兵批林批孔运动情况汇报时的插话","authors":["王洪文","张春桥"],"page_start":2,"page_end":8,"dates":[{"year":1974,"month":3,"day":18}]}],
      ocr: {"content_thresholds":[0,0.1,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/db61721a-a96f-4ecf-8ec8-dc3d9be7de1d'),
  },
  {
    entity: {
      id: 'ba649341-ec2e-4344-bb21-ba1d35fd1cd7',
      name: '“四人帮”罪行材料（四）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(5)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/ba649341-ec2e-4344-bb21-ba1d35fd1cd7/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"王洪文、张春桥在作战部汇报批林批孔运动情况时的插话","authors":["王洪文","张春桥"],"page_start":2,"page_end":5,"dates":[{"year":1974,"month":3,"day":15}]}],
      ocr: {"content_thresholds":[0,0.11,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/ba649341-ec2e-4344-bb21-ba1d35fd1cd7'),
  },
  {
    entity: {
      id: 'bd33de67-6641-49bc-a820-870b3a2aa3df',
      name: '“四人帮”罪行材料（九）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/bd33de67-6641-49bc-a820-870b3a2aa3df/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"王洪文、张春桥在军委办公会议听取三总部汇报批林批孔运动情况时的插话（摘录）","authors":["王洪文","张春桥"],"page_start":2,"page_end":3,"dates":[{"year":1974,"month":2,"day":8}]}],
      ocr: {"content_thresholds":[0,0.11,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/bd33de67-6641-49bc-a820-870b3a2aa3df'),
  },
  {
    entity: {
      id: 'd1679abc-409f-4eb4-b575-22371b9682c3',
      name: '张春桥同志接见福建部分赴京革命同学的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d1679abc-409f-4eb4-b575-22371b9682c3/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志接见福建部分赴京革命同学的讲话","authors":["张春桥"],"page_start":1,"page_end":4,"ocr_exceptions":{"2":{"content_thresholds":[0,0,0,0.04]},"3":{"content_thresholds":[0,0,0.06,0]},"4":{"content_thresholds":[0,0.86,0,0]}},"dates":[{"year":1966,"month":10,"day":7}]},{"title":"什么是“大无畏”","authors":["工农兵音乐学院"],"page_start":4,"page_end":4,"ocr_exceptions":{"4":{"content_thresholds":[0.14,0,0,0.06]}},"dates":[{"year":1966}]},{"title":"关锋在北京地质学院同学座谈会上的讲话","alias":"关锋同志在地质学院同学座谈会上讲话","authors":["关锋"],"page_start":5,"page_end":7,"ocr_exceptions":{"7":{"content_thresholds":[0,0.28,0,0]}},"dates":[{"year":1966,"month":9,"day":28}]},{"title":"北京市委书记雍文涛同志在“首都大专院校红卫兵捍卫毛泽东思想捍卫十六条联络委员会”于清华大学召开的“向右倾机会主义路线猛烈开火——彻底批判谭力夫发言大会”上的讲话","authors":["雍文涛"],"page_start":8,"page_end":8,"dates":[{"year":1966,"month":9,"day":28}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/d1679abc-409f-4eb4-b575-22371b9682c3'),
  },
  {
    entity: {
      id: '67b43734-d924-48ac-9e62-359edd11e690',
      name: '中央首长第三次接见安徽代表',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/67b43734-d924-48ac-9e62-359edd11e690/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"中央首长第三次接见安徽双方代表团的指示","alias":"中央首长第三次接见安徽代表","authors":["康生","江青"],"page_start":1,"page_end":8,"dates":[{"year":1967,"month":9,"day":5}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/67b43734-d924-48ac-9e62-359edd11e690'),
  },
  {
    entity: {
      id: '77a422f8-fc82-4e56-87e4-a6fbd48de6b8',
      name: '“四人帮”罪行材料（三）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/77a422f8-fc82-4e56-87e4-a6fbd48de6b8/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"王洪文在总参民兵组训工作座谈会议上的讲话","authors":["王洪文"],"page_start":2,"page_end":5,"ocr_exceptions":{"5":{"content_thresholds":[0,0.09,0,0.5]}},"dates":[{"year":1974,"month":9,"day":22}]},{"title":"王洪文、张春桥在总参民兵组训工作座谈会议汇报会上的插话","authors":["王洪文","张春桥"],"page_start":5,"page_end":9,"ocr_exceptions":{"5":{"content_thresholds":[0,0.09,0.5,0]}},"dates":[{"year":1974,"month":9,"day":22}]}],
      ocr: {"content_thresholds":[0,0.09,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/77a422f8-fc82-4e56-87e4-a6fbd48de6b8'),
  },
  {
    entity: {
      id: '8c1a5316-884e-465a-9775-48338f6cc6b5',
      name: '揭发“四人帮”王洪文插手控制上影阴谋篡党夺权的罪行',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8c1a5316-884e-465a-9775-48338f6cc6b5/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"前言","authors":["中共上海电影制片厂委员会"],"page_start":2,"page_end":2,"ocr_exceptions":{"2":{"content_thresholds":[0,0.2,0,0.5]}},"dates":[{"year":1976,"month":12}]},{"title":"第一部分","authors":["中共上海电影制片厂委员会","王洪文","马天水","徐景贤","黄涛"],"page_start":2,"page_end":6,"ocr_exceptions":{"2":{"content_thresholds":[0,0,0.5,0]},"6":{"content_thresholds":[0,0,0,0.5]}},"dates":[{"year":1975,"month":8,"day":31},{"year":1975,"month":9,"day":3},{"year":1975,"month":9,"day":14}]},{"title":"第二部分","authors":["中共上海电影制片厂委员会","王洪文"],"page_start":6,"page_end":7,"ocr_exceptions":{"6":{"content_thresholds":[0,0,0.5,0]}},"dates":[{"year":1975,"month":10,"day":14}]},{"title":"第三部分","authors":["中共上海电影制片厂委员会","王洪文"],"page_start":8,"page_end":9,"dates":[{"year":1976,"month":5,"day":8}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/8c1a5316-884e-465a-9775-48338f6cc6b5'),
  },
  {
    entity: {
      id: '0f85f67b-fe32-425f-91d4-613f3126705c',
      name: '王洪文关于学习毛主席理论问题指示的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/0f85f67b-fe32-425f-91d4-613f3126705c/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"王洪文关于学习毛主席理论问题指示的讲话","authors":["王洪文"],"page_start":1,"page_end":8,"ocr_exceptions":{"1":{"content_thresholds":[0.12,0.12,0,0]}},"dates":[{"year":1975,"month":1,"day":14}]}],
      ocr: {"content_thresholds":[0,0.12,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/0f85f67b-fe32-425f-91d4-613f3126705c'),
  },
  {
    entity: {
      id: '3f502324-0a16-4470-b3fc-3e237f39b604',
      name: '王洪文付主席和马天水同志的谈话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(1)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/3f502324-0a16-4470-b3fc-3e237f39b604/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"王洪文付主席和马天水同志的谈话","authors":["王洪文"],"page_start":1,"page_end":1,"ocr_exceptions":{"1":{"content_thresholds":[0,0.1,0,0]}},"dates":[{"year":1974,"month":3}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/3f502324-0a16-4470-b3fc-3e237f39b604'),
  },
  {
    entity: {
      id: '72d4fe45-d0bf-4ce4-afc9-ba7c7ddc6f38',
      name: '“四人帮”罪行材料（八）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/72d4fe45-d0bf-4ce4-afc9-ba7c7ddc6f38/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"王洪文对作战部领导同志的讲话","authors":["王洪文"],"page_start":1,"page_end":3,"ocr_exceptions":{"2":{"content_thresholds":[0,0.1,0,0]},"3":{"content_thresholds":[0,0.5,0,0.16]}},"dates":[{"year":1974,"month":5,"day":4}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/72d4fe45-d0bf-4ce4-afc9-ba7c7ddc6f38'),
  },
  {
    entity: {
      id: '9172bd1f-5918-4850-820a-b229e2d89b8f',
      name: '王洪文副主席重要电话指示',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(1)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/9172bd1f-5918-4850-820a-b229e2d89b8f/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"王洪文副主席重要电话指示","authors":["王洪文"],"page_start":1,"page_end":1,"ocr_exceptions":{"1":{"content_thresholds":[0.14,0,0,0]}},"dates":[{"year":1974,"month":3,"day":16}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/9172bd1f-5918-4850-820a-b229e2d89b8f'),
  },
  {
    entity: {
      id: '1ce721bb-e004-4708-a437-dde2f92a1a98',
      name: '上海市机电一局系统活学活用毛泽东思想积极分子代表大会上市革会领导成员、工总司负责人王洪文同志的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(5)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/1ce721bb-e004-4708-a437-dde2f92a1a98/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"上海市机电一局系统活学活用毛泽东思想积极分子代表大会上市革会领导成员、工总司负责人王洪文同志的讲话","authors":["王洪文"],"page_start":1,"page_end":5,"dates":[{"year":1968,"month":3,"day":18}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/1ce721bb-e004-4708-a437-dde2f92a1a98'),
  },
  {
    entity: {
      id: 'ff8206e9-00e6-42aa-bd57-a36d2faa5e49',
      name: '市革会领导成员、工总司主要负责人王洪文同志一九六七年十二月廿二日下午在铁路文化宫大会上的重要讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(6)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/ff8206e9-00e6-42aa-bd57-a36d2faa5e49/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"市革会领导成员、工总司主要负责人王洪文同志下午在铁路文化宫大会上的重要讲话","authors":["王洪文"],"page_start":1,"page_end":6,"dates":[{"year":1967,"month":12,"day":22}]}],
      ocr: {"content_thresholds":[0,0.07,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/ff8206e9-00e6-42aa-bd57-a36d2faa5e49'),
  },
  {
    entity: {
      id: '416aed01-110d-4f35-af13-f44ee4d11ec3',
      name: '工总司负责人王洪文同志一月十一日在长宁区俱乐部的重要讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/416aed01-110d-4f35-af13-f44ee4d11ec3/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"工总司负责人王洪文同志一月十一日在长宁区俱乐部的重要讲话","authors":["王洪文"],"page_start":1,"page_end":4,"dates":[{"year":1968,"month":1,"day":11}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/416aed01-110d-4f35-af13-f44ee4d11ec3'),
  },
  {
    entity: {
      id: 'b99cafbf-6442-4c20-bd92-45f37dbfdcff',
      name: '王洪文同志讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b99cafbf-6442-4c20-bd92-45f37dbfdcff/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"王洪文同志在沪东造船厂“高举毛泽东思想伟大红旗，以党的政策武装和发动群众，对敌斗争现场会议”的讲话","authors":["王洪文"],"page_start":1,"page_end":2,"dates":[{"year":1968,"month":7,"day":5}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/b99cafbf-6442-4c20-bd92-45f37dbfdcff'),
  },
  {
    entity: {
      id: 'e51c3cd5-f427-4fce-ad75-da87f2df5195',
      name: '王洪文同志二月九日在接见四川大足汽车厂在北京学习班同志的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/e51c3cd5-f427-4fce-ad75-da87f2df5195/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"王洪文同志在接见四川大足汽车厂在北京学习班同志的讲话","authors":["王洪文"],"page_start":1,"page_end":4,"dates":[{"year":1974,"month":2,"day":9}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/e51c3cd5-f427-4fce-ad75-da87f2df5195'),
  },
  {
    entity: {
      id: '72a130d0-a36b-4b75-8e93-f35bf6ff8176',
      name: '关于无产阶级文化大革命问题',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(10)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/72a130d0-a36b-4b75-8e93-f35bf6ff8176/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"关于无产阶级文化大革命问题","authors":["王洪文"],"page_start":1,"page_end":10,"dates":[{"year":1973,"month":12,"day":30}]}],
      ocr: {"content_thresholds":[0,0.1,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/72a130d0-a36b-4b75-8e93-f35bf6ff8176'),
  },
  {
    entity: {
      id: '2ac69c65-449e-40a6-b06a-0d62772ab71d',
      name: '王洪文同志在山东重点企业批林批孔汇报会议上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/2ac69c65-449e-40a6-b06a-0d62772ab71d/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"王洪文同志在山东重点企业批林批孔汇报会议上的讲话","authors":["王洪文"],"page_start":1,"page_end":8,"dates":[{"year":1974,"month":6,"day":27}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/2ac69c65-449e-40a6-b06a-0d62772ab71d'),
  },
  {
    entity: {
      id: 'f750c865-cb15-4c03-98b2-aad6e569d88a',
      name: '毛远新破坏民兵建设的部分罪行材料',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(16)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/f750c865-cb15-4c03-98b2-aad6e569d88a/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"一、揭发“四人帮”的死党毛远新破坏民兵建设的罪行","authors":["辽宁省委民兵工作领导小组办公室"],"page_start":3,"page_end":5,"ocr_exceptions":{"5":{"content_thresholds":[0,0,0,0.5]}},"dates":[{"year":1976}]},{"title":"（一）毛远新一九七三年十二月八日对辽宁省军区司令部《关于今冬明春民兵整组几个问题的意见》的批示","authors":["毛远新"],"page_start":5,"page_end":5,"ocr_exceptions":{"5":{"content_thresholds":[0.19,0.46,0.5,0]}},"dates":[{"year":1973,"month":12,"day":8}]},{"title":"（二）毛远新一九七三年十二月十三日在省委城市民兵工作会议上的讲话（摘录）","authors":["毛远新"],"page_start":5,"page_end":8,"ocr_exceptions":{"5":{"content_thresholds":[0.54,0,0.5,0]}},"dates":[{"year":1973,"month":12,"day":13}]},{"title":"（三）毛远新一九七四年一月十四日检查沈阳市民兵总指挥部工作时的插话（摘录）","authors":["毛远新"],"page_start":8,"page_end":9,"ocr_exceptions":{"8":{"content_thresholds":[0.3,0,0.5,0]}},"dates":[{"year":1974,"month":1,"day":14}]},{"title":"（四）毛远新一九七四年一月二十一日在检查民兵执勤工作时的插话（摘录）","authors":["毛远新"],"page_start":9,"page_end":10,"ocr_exceptions":{"9":{"content_thresholds":[0.31,0,0.5,0]},"10":{"content_thresholds":[0,0.73,0,0.5]}},"dates":[{"year":1974,"month":1,"day":21}]},{"title":"（五）毛远新一九七四年三月十一日在第三次省委民兵工作领导小组会议上的讲话（摘录）","authors":["毛远新"],"page_start":10,"page_end":11,"ocr_exceptions":{"11":{"content_thresholds":[0,0,0,0.5]}},"dates":[{"year":1974,"month":3,"day":31}]},{"title":"（六）毛远新一九七四年四月五日在辽宁省军区关于“总参召开全国通讯分队建设现场会”给省委报告上的批示","authors":["毛远新"],"page_start":11,"page_end":11,"ocr_exceptions":{"11":{"content_thresholds":[0,0.7,0.5,0]}},"dates":[{"year":1974,"month":4,"day":5}]},{"title":"（七）毛远新一九七四年十一月在听取汇报省委民兵工作领导小组会议情况时的插话（摘录）","authors":["毛远新"],"page_start":11,"page_end":11,"ocr_exceptions":{"11":{"content_thresholds":[0.3,0.51,0.5,0]}},"dates":[{"year":1974,"month":11}]},{"title":"（八）毛远新一九七四年十一月二十日在辽、吉、黑三省民兵工作座谈会上的讲话（摘录）","authors":["毛远新"],"page_start":11,"page_end":15,"ocr_exceptions":{"11":{"content_thresholds":[0.5,0,0.5,0]},"15":{"content_thresholds":[0,0.5,0,0.5]}},"dates":[{"year":1974,"month":11,"day":20}]},{"title":"（九）毛远新一九七五年五月十六日在省委常委会上听取民兵工作汇报时的讲话（摘录）","authors":["毛远新"],"page_start":15,"page_end":16,"ocr_exceptions":{"16":{"content_thresholds":[0,0.84,0,0.5]}},"dates":[{"year":1975,"month":5,"day":16}]},{"title":"（十）毛远新对所谓“三位一体”的言论和批示","authors":["毛远新"],"page_start":16,"page_end":16,"ocr_exceptions":{"16":{"content_thresholds":[0.16,0,0,0.5]}},"dates":[{"year":1975,"month":3},{"year":1975,"month":4,"day":10},{"year":1975,"month":5,"day":25}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/f750c865-cb15-4c03-98b2-aad6e569d88a'),
  },
  {
    entity: {
      id: '68d2d72e-cdc1-4871-8acb-fc644774b5e3',
      name: '冯金传达毛远新同志在省工农兵干部学习班上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(5)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/68d2d72e-cdc1-4871-8acb-fc644774b5e3/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新同志在省工农兵干部学习班上的讲话","authors":["毛远新"],"page_start":1,"page_end":5,"dates":[{"year":1974,"month":2,"day":16}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/68d2d72e-cdc1-4871-8acb-fc644774b5e3'),
  },
  {
    entity: {
      id: '06439682-30be-43c0-8fc3-fcd67fd66bec',
      name: '我为什么参加红色造反团',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/06439682-30be-43c0-8fc3-fcd67fd66bec/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"我为什么参加红色造反团","authors":["毛远新"],"page_start":1,"page_end":2,"dates":[{"year":1966,"month":12,"day":11}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/06439682-30be-43c0-8fc3-fcd67fd66bec'),
  },
  {
    entity: {
      id: '317dfc36-b5df-4092-b9e9-6c1e0c3c0585',
      name: '毛远新一九七四年一月在团省委召开的“学习吴献忠座谈会”上的讲话（节录）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/317dfc36-b5df-4092-b9e9-6c1e0c3c0585/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新一九七四年一月在团省委召开的“学习吴献忠座谈会”上的讲话（节录）","authors":["毛远新"],"page_start":1,"page_end":9,"dates":[{"year":1974,"month":1}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/317dfc36-b5df-4092-b9e9-6c1e0c3c0585'),
  },
  {
    entity: {
      id: '2b0f3a68-1cdd-4494-b122-3ed9cb3cb0b7',
      name: '毛远新同志在辽革站赴京代表团揭发批判宋任穷会议上的讲话纪要',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(1)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/2b0f3a68-1cdd-4494-b122-3ed9cb3cb0b7/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新同志在辽革站赴京代表团揭发批判宋任穷会议上的讲话纪要","authors":["毛远新"],"page_start":1,"page_end":1,"dates":[{"year":1968,"month":3,"day":7}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/2b0f3a68-1cdd-4494-b122-3ed9cb3cb0b7'),
  },
  {
    entity: {
      id: '5551106b-99c0-496b-af47-d8335692e6ca',
      name: '毛远新同志的讲话——四月八日在京沈阳三派代表批斗宋任穷会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/5551106b-99c0-496b-af47-d8335692e6ca/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新同志在京沈阳三派代表批斗宋任穷会上的讲话","authors":["毛远新"],"page_start":1,"page_end":2,"dates":[{"year":1968,"month":4,"day":8}]}],
      ocr: {"content_thresholds":[0.18,0.08,0.09,0.21]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/5551106b-99c0-496b-af47-d8335692e6ca'),
  },
  {
    entity: {
      id: '96cdc4a4-0b09-4d57-8277-6dbcbcf6e4e0',
      name: '四人帮反党罪行选编（二）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(18)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/96cdc4a4-0b09-4d57-8277-6dbcbcf6e4e0/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"江青九月二十七日在清华农村分校散布的反党言论摘录","authors":["江青"],"page_start":4,"page_end":6,"dates":[{"year":1976,"month":9,"day":27}]},{"title":"江青九月二十八日下午在清华农村分校花生地里散布的反党言论摘录","authors":["江青"],"page_start":7,"page_end":11,"dates":[{"year":1976,"month":9,"day":28}]},{"title":"江青九月二十九日在清华工程物理系散布的反党言论摘录","authors":["江青"],"page_start":12,"page_end":18,"dates":[{"year":1976,"month":9,"day":29}]}],
      ocr: {"content_thresholds":[0,0.08,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/96cdc4a4-0b09-4d57-8277-6dbcbcf6e4e0'),
  },
  {
    entity: {
      id: 'c748a5f5-0b62-433b-b425-a3295b905902',
      name: '四人帮反党罪行材料选编（一）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(23)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c748a5f5-0b62-433b-b425-a3295b905902/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"江青一九七五年四月三日找新华印刷厂工人座谈时散布的反党言论","authors":["江青","迟群","谢静宜"],"page_start":4,"page_end":14,"dates":[{"year":1975,"month":4,"day":3}]},{"title":"江青一九七六年九月窜到清华大学大兴农村分校的反党言行","authors":["江青","迟群","谢静宜"],"page_start":15,"page_end":23,"dates":[{"year":1976,"month":9}]}],
      ocr: {"content_thresholds":[0,0.08,0,0]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/c748a5f5-0b62-433b-b425-a3295b905902'),
  },
  {
    entity: {
      id: 'e4beec83-82d8-42b2-845d-fe2f8c163d3d',
      name: '关于国际形势的报告',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(15)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/e4beec83-82d8-42b2-845d-fe2f8c163d3d/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"姚文元同志关于国际形势的报告","authors":["姚文元"],"page_start":1,"page_end":15,"dates":[{"year":1967,"month":6}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/e4beec83-82d8-42b2-845d-fe2f8c163d3d'),
  },
  {
    entity: {
      id: '58499299-cef2-4f20-ad14-90703cd2431a',
      name: '姚文元同志在欢庆黄浦区革命委员会成立大会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/58499299-cef2-4f20-ad14-90703cd2431a/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"姚文元同志在欢庆黄浦区革命委员会成立大会上的讲话","authors":["姚文元"],"page_start":1,"page_end":4,"dates":[{"year":1967,"month":3,"day":20}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/58499299-cef2-4f20-ad14-90703cd2431a'),
  },
  {
    entity: {
      id: 'cf7e2b8e-9249-4aa3-b0f4-2707aa6e74b0',
      name: '姚文元同志在上海市革命委员会报告会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(10)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/cf7e2b8e-9249-4aa3-b0f4-2707aa6e74b0/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"姚文元同志在上海市革命委员会报告会上的讲话","authors":["姚文元"],"page_start":1,"page_end":10,"dates":[{"year":1967,"month":6,"day":3}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/cf7e2b8e-9249-4aa3-b0f4-2707aa6e74b0'),
  },
  {
    entity: {
      id: 'bb264672-4652-4810-b440-516ae554b3be',
      name: '毛远新有关研究“儒法斗争史"的三次谈话（摘编）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/bb264672-4652-4810-b440-516ae554b3be/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"一、毛远新一九七四年七月七日在省委批林批孔汇报会议上的总结（节录）","authors":["毛远新"],"page_start":2,"page_end":4,"ocr_exceptions":{"2":{"content_thresholds":[0,0,0.5,0]}},"dates":[{"year":1974,"month":7,"day":7}]},{"title":"二、毛远新一九七四年八月二十八日在常委扩大会议上的发言（节录）","authors":["毛远新"],"page_start":5,"page_end":5,"dates":[{"year":1974,"month":8,"day":28}]},{"title":"三、毛远新一九七四年十月十二日在沈阳机床一厂汇报运动情况时的讲话（节录）","authors":["毛远新"],"page_start":6,"page_end":9,"ocr_exceptions":{"9":{"content_thresholds":[0,0,0,0.5]}},"dates":[{"year":1974,"month":10,"day":12}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/bb264672-4652-4810-b440-516ae554b3be'),
  },
  {
    entity: {
      id: 'b0d92e3c-d75b-447f-8e3d-6a80bda133b3',
      name: '毛远新一九七五年挑拨中央与地方关系的几次谈话（摘录）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b0d92e3c-d75b-447f-8e3d-6a80bda133b3/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"毛远新一九七五年挑拨中央与地方关系的几次谈话（摘录）","authors":["毛远新"],"page_start":1,"page_end":3,"dates":[{"year":1975,"month":3,"day":6},{"year":1975,"month":6,"day":22},{"year":1975,"month":7,"day":12}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/b0d92e3c-d75b-447f-8e3d-6a80bda133b3'),
  },
  {
    entity: {
      id: 'c02feeb6-58b4-44b9-9965-47de5504e4b7',
      name: '毛远新在批邓、反击右倾翻案风斗争中的一些言论（摘编）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(10)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c02feeb6-58b4-44b9-9965-47de5504e4b7/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"（一）毛远新在反击右倾翻案风开始时的讲话（摘录）","authors":["毛远新"],"page_start":2,"page_end":5,"ocr_exceptions":{"2":{"content_thresholds":[0,0,0.5,0]},"5":{"content_thresholds":[0,0,0,0.5]}},"dates":[{"year":1975,"month":11,"day":29},{"year":1975,"month":12,"day":1},{"year":1975,"month":12,"day":2}]},{"title":"毛远新的谈话记录","alias":"（二）毛远新一九七六年一月一日的谈话（摘录）","authors":["毛远新"],"page_start":5,"page_end":7,"ocr_exceptions":{"7":{"content_thresholds":[0,0,0,0.5]}},"dates":[{"year":1976,"month":1,"day":1}]},{"title":"（三）毛远新一九七六年二月八日的谈话（摘录）","authors":["毛远新"],"page_start":7,"page_end":7,"dates":[{"year":1976,"month":2,"day":8}]},{"title":"毛远新对当前工作的意见","alias":"（四）毛远新一九七六年四月十九日谈对当前工作的意见","authors":["毛远新"],"page_start":7,"page_end":8,"ocr_exceptions":{"7":{"content_thresholds":[0,0,0.5,0]},"8":{"content_thresholds":[0,0,0,0.5]}},"dates":[{"year":1976,"month":4,"day":19}]},{"title":"毛远新谈话记录","alias":"（五）毛远新一九七六年四月二十二日的谈话（摘录）","authors":["毛远新"],"page_start":8,"page_end":9,"ocr_exceptions":{"8":{"content_thresholds":[0,0,0.5,0]},"9":{"content_thresholds":[0,0,0,0.5]}},"dates":[{"year":1976,"month":4,"day":22}]},{"title":"毛远新的两次谈话记录","alias":"（六）毛远新一九七六年六月二日、五日的两次谈话（摘录）","authors":["毛远新"],"page_start":9,"page_end":10,"dates":[{"year":1976,"month":6,"day":2},{"year":1976,"month":6,"day":5}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/c02feeb6-58b4-44b9-9965-47de5504e4b7'),
  },
  {
    entity: {
      id: '9000310e-2f60-4711-a81d-a8fd520f6db7',
      name: '怎样理解资产阶级在党内？——宗明兰同志在辽宁省理论讨论会上的总结发言（记录整理）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(16)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/9000310e-2f60-4711-a81d-a8fd520f6db7/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"怎样理解资产阶级在党内？——宗明兰同志在辽宁省理论讨论会上的总结发言","authors":["宗明兰"],"page_start":1,"page_end":16,"dates":[{"year":1976,"month":3,"day":1}]}],
      ocr: {"content_thresholds":[0,0.13,0,0],"standard_paragraph_merge_strategy_threshold":0.16,"differential_paragraph_merge_strategy_threshold":0},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/9000310e-2f60-4711-a81d-a8fd520f6db7'),
  },
  {
    entity: {
      id: '306f36e6-2329-42e8-92d9-ed3f6faad595',
      name: '宗明兰同志的两份揭批查资料',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(7)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/306f36e6-2329-42e8-92d9-ed3f6faad595/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"宗明兰给周忠民的回信的送审稿","authors":["宗明兰"],"page_start":2,"page_end":4,"dates":[{"year":1976,"month":9,"day":30}]},{"title":"宗明兰给周忠民的回信","authors":["宗明兰"],"page_start":2,"page_end":4,"dates":[{"year":1976,"month":9,"day":30}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/306f36e6-2329-42e8-92d9-ed3f6faad595'),
  },
  {
    entity: {
      id: '93482dc4-edc3-4ce3-a6d2-960ec210656a',
      name: '“四人帮”死党毛远新破坏教育革命言论摘编（初编）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/93482dc4-edc3-4ce3-a6d2-960ec210656a/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"一、拼命抓教育，为“四人帮”篡党夺权大造反革命舆论","authors":["毛远新"],"page_start":3,"page_end":4,"ocr_exceptions":{"3":{"content_thresholds":[0,0,0.5,0]}},"dates":[{"year":1974},{"year":1975,"month":3,"day":8},{"year":1974,"month":12,"day":28},{"year":1973,"month":10,"day":17},{"year":1973,"month":8,"day":11},{"year":1973},{"year":1974,"month":12,"day":23},{"year":1974,"month":2,"day":19},{"year":1974,"month":8,"day":11}]},{"title":"二、篡改、歪曲毛主席的教育方针，为篡党夺权，复辟资本主义培植力量","authors":["毛远新"],"page_start":5,"page_end":5,"dates":[{"year":1974,"month":4,"day":11},{"year":1973,"month":11,"day":24},{"year":1973,"month":8,"day":11},{"year":1974,"month":12,"day":23},{"year":1973},{"year":1976,"month":6}]},{"title":"三、挑拨工、干，师、生之间的关系，破坏党的知识分子政策","authors":["毛远新"],"page_start":6,"page_end":7,"ocr_exceptions":{"7":{"content_thresholds":[0,0,0,0.5]}},"dates":[{"year":1976,"month":1,"day":1},{"year":1974,"month":2,"day":19},{"year":1974,"month":2,"day":18},{"year":1974,"month":4,"day":9},{"year":1974},{"year":1974,"month":1,"day":18},{"year":1973,"month":12,"day":21},{"year":1973,"month":8,"day":11}]},{"title":"四、破坏党的一元化领导，削弱工宣队的政治作用","authors":["毛远新"],"page_start":7,"page_end":9,"ocr_exceptions":{"9":{"content_thresholds":[0,0,0,0.5]}},"dates":[{"year":1974,"month":2,"day":22},{"year":1974,"month":2,"day":20},{"year":1974,"month":4,"day":11},{"year":1973,"month":12,"day":21},{"year":1974,"month":2,"day":18},{"year":1973,"month":12,"day":1},{"year":1974,"month":4,"day":9},{"year":1974,"month":2,"day":19},{"year":1973}]},{"title":"五、宣扬“天才论”，大搞形而上学，竭力把教育战线搞乱","authors":["毛远新"],"page_start":9,"page_end":9,"dates":[{"year":1972,"month":11,"day":11},{"year":1974,"month":11,"day":28},{"year":1974,"month":12,"day":23},{"year":1974,"month":4,"day":9},{"year":1974,"month":4,"day":11},{"year":1973},{"year":1974,"month":10}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/93482dc4-edc3-4ce3-a6d2-960ec210656a'),
  },
  {
    entity: {
      id: '33d26a96-67db-4a35-a4ce-d02beb985e58',
      name: '红旗一九六六年第七期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/33d26a96-67db-4a35-a4ce-d02beb985e58.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"评“三家村”——《燕山夜话》《三家村札记》的反动本质","authors":["姚文元"],"page_start":3,"page_end":21,"dates":[{"year":1966,"month":5,"day":10}]},{"title":"千万不要忘记阶级斗争","authors":["《解放军报》社论"],"page_start":22,"page_end":25,"dates":[{"year":1966,"month":5,"day":4}]},{"title":"评《前线》《北京日报》的资产阶级立场","authors":["戚本禹"],"page_start":26,"page_end":33,"dates":[{"year":1966}]},{"title":"邓拓贩卖的是什么货色？","authors":["陈同浩"],"page_start":34,"page_end":34,"ocr":{"vsplit":0.35},"dates":[{"year":1966,"month":5,"day":9}]},{"title":"邓拓，我们就是要斗倒你！","authors":["陆志天"],"page_start":35,"page_end":35,"ocr":{"vsplit":0.35},"dates":[{"year":1966,"month":5,"day":9}]},{"title":"吴晗，不许你反党反社会主义！","authors":["楼森"],"page_start":35,"page_end":37,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"把兴无灭资的阶级斗争进行到底","authors":["李素文"],"page_start":38,"page_end":40,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"突出政治，大写英雄——评长篇小说《欧阳海之歌》","authors":["仲正文"],"page_start":41,"page_end":47,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]}],
      ocr: {"auto_vsplit":false,"vsplit":0,"content_thresholds":[0,0.1,0,0.1]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/33d26a96-67db-4a35-a4ce-d02beb985e58.pdf'),
  },
  {
    entity: {
      id: 'becd9f73-f6d4-4f1a-88ac-2fb3b1dfbffa',
      name: '毛远新紧跟“四人帮”大反经验主义的部分罪行材料',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(15)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/becd9f73-f6d4-4f1a-88ac-2fb3b1dfbffa/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"一、毛远新紧跟“四人帮”大反经验主义的罪行","authors":["毛远新"],"page_start":2,"page_end":3,"ocr_exceptions":{"2":{"content_thresholds":[0,0,0.5,0]}},"dates":[{"year":1975,"month":3,"day":5},{"year":1975,"month":3,"day":31},{"year":1975,"month":4,"day":3},{"year":1975,"month":4,"day":10},{"year":1975,"month":4,"day":15},{"year":1975,"month":4,"day":22},{"year":1975,"month":4,"day":23},{"year":1975,"month":4,"day":24},{"year":1975,"month":4,"day":25},{"year":1975,"month":11,"day":26}]},{"title":"二、毛远新大反经验主义的言论（摘编）","authors":["毛远新"],"page_start":3,"page_end":9,"ocr_exceptions":{"9":{"content_thresholds":[0,0,0,0.5]}},"dates":[{"year":1975,"month":3,"day":5},{"year":1975,"month":3,"day":31},{"year":1975,"month":4,"day":3},{"year":1975,"month":4,"day":10},{"year":1975,"month":4,"day":15},{"year":1975,"month":4,"day":25},{"year":1975,"month":7,"day":16},{"year":1975,"month":7,"day":17},{"year":1975,"month":11,"day":26}]},{"title":"三、毛远新亲自修改的一份未发出的省委文件（大样）","authors":["毛远新","中共辽宁省委","辽宁省革命委员会宣传组"],"page_start":9,"page_end":13,"ocr_exceptions":{"9":{"content_thresholds":[0,0,0.5,0]},"13":{"content_thresholds":[0,0,0,0.5]}},"dates":[{"year":1975,"month":4,"day":15},{"year":1975,"month":4,"day":18}]},{"title":"四、毛远新授意发表的第二次理论讨论会的消息报道","authors":["辽宁日报","中共辽宁省委","辽宁省革命委员会宣传组"],"page_start":13,"page_end":15,"ocr_exceptions":{"13":{"content_thresholds":[0,0,0.5,0]}},"dates":[{"year":1975,"month":4,"day":22}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/becd9f73-f6d4-4f1a-88ac-2fb3b1dfbffa'),
  },
  {
    entity: {
      id: 'ff69a7c6-9559-4b80-98fa-cfbd3c072a56',
      name: '红旗一九六六年第六期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/ff69a7c6-9559-4b80-98fa-cfbd3c072a56.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"高举毛泽东思想伟大红旗积极参加社会主义文化大革命","authors":["《解放军报》社论"],"page_start":3,"page_end":11,"dates":[{"year":1966}]},{"title":"工农兵群众批判吴晗反党反社会主义的政治立场和学术观点","authors":[],"page_start":12,"page_end":21,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"工农兵群众参加学术批判是划时代的大事","authors":["红旗杂志评论员"],"page_start":22,"page_end":24,"dates":[{"year":1966}]},{"title":"评吴晗的《投枪集》","authors":["史绍宾"],"page_start":25,"page_end":35,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]}],
      ocr: {"auto_vsplit":false,"vsplit":0,"content_thresholds":[0,0.1,0,0.1]},
      ocr_exceptions: {"10":{"vsplit":0.35},"11":{"vsplit":0.35}},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/ff69a7c6-9559-4b80-98fa-cfbd3c072a56.pdf'),
  },
  {
    entity: {
      id: 'b4980847-3787-4b09-b95f-d4bc32199051',
      name: '红旗一九六六年第五期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/b4980847-3787-4b09-b95f-d4bc32199051.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"一九六六年二月十二日在湖北省农村工作会议上的讲话","authors":["王任重"],"page_start":3,"page_end":16,"dates":[{"year":1966,"month":2,"day":12}]},{"title":"《海瑞骂皇帝》和《海瑞罢官》是反党反社会主义的两株大毒草","authors":["关峰","林杰"],"page_start":17,"page_end":35,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"文艺领域里必须坚持马克思主义的认识论——对形象思维论的批判","authors":["郑季翘"],"page_start":36,"page_end":54,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"工农兵诗选","authors":["梅茂亭","薛治本","殷光兰","郭国栋"],"page_start":55,"page_end":55,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]}],
      ocr: {"auto_vsplit":false,"vsplit":0,"content_thresholds":[0,0.1,0,0.1]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/b4980847-3787-4b09-b95f-d4bc32199051.pdf'),
  },
  {
    entity: {
      id: '05553c80-edc7-44da-9c04-763802e9f833',
      name: '红旗一九六六年第四期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/05553c80-edc7-44da-9c04-763802e9f833.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"中国共产党中央委员会一九六六年三月二十二日给苏联共产党中央委员会的复信","authors":["中国共产党中央委员会"],"page_start":3,"page_end":5,"dates":[{"year":1966,"month":3,"day":22}]},{"title":"苏联共产党中央委员会二月二十四日给中国共产党中央委员会的来信","authors":["苏联共产党中央委员会"],"page_start":5,"page_end":5,"dates":[{"year":1966,"month":2,"day":24}]},{"title":"巴黎公社的伟大启示——纪念巴黎公社九十五周年","authors":["郑之思"],"page_start":6,"page_end":20,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"翦伯赞的历史观点应当批判","authors":["戚本禹","林杰","阎长贵"],"page_start":22,"page_end":32,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"焦裕禄同志是活学活用毛泽东思想的好榜样","authors":["红旗杂志评论员"],"page_start":33,"page_end":36,"dates":[{"year":1966}]},{"title":"解放军某部侦察连的哲学故事会","authors":[],"page_start":37,"page_end":42,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"实践出智慧","authors":["宋乐山"],"page_start":43,"ocr":{"vsplit":0.35},"page_end":53,"dates":[{"year":1966}]},{"title":"日常工作中的辩证法","authors":["王培建","黄玉明","姜大洪","刘杰"],"page_start":54,"page_end":58,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"简单一些好，还是复杂一些好？——从液压操纵箱的改革谈简单和复杂的辩证法","authors":["徐永德","顾舒"],"page_start":59,"page_end":61,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"坚决突出政治反对折中主义","authors":["倪志荣"],"page_start":61,"page_end":63,"ocr":{"vsplit":0.35},"dates":[{"year":1966,"month":3,"day":2}]}],
      ocr: {"auto_vsplit":false,"vsplit":0,"content_thresholds":[0,0.1,0,0.1]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/05553c80-edc7-44da-9c04-763802e9f833.pdf'),
  },
  {
    entity: {
      id: 'd7255791-fc0e-4d11-9391-b5a8c1d3cf8b',
      name: '社会主义政治经济学 （未定稿第二版讨论稿）',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/d7255791-fc0e-4d11-9391-b5a8c1d3cf8b.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"序言","authors":["《社会主义政治经济学》编写组"],"page_start":11,"page_end":19,"dates":[{"year":1976}]},{"title":"第一章 社会主义所有制","authors":["《社会主义政治经济学》编写组"],"page_start":25,"page_end":74,"dates":[{"year":1976}]},{"title":"第二章 社会主义生产中的相互关系","authors":["《社会主义政治经济学》编写组"],"page_start":75,"page_end":112,"dates":[{"year":1976}]},{"title":"第三章 社会主义生产的性质和目的","authors":["《社会主义政治经济学》编写组"],"page_start":115,"page_end":155,"dates":[{"year":1976}]},{"title":"第四章 社会主义生产的性质和目的","authors":["《社会主义政治经济学》编写组"],"page_start":159,"page_end":201,"dates":[{"year":1976}]},{"title":"第五章 社会主义农业和工业","authors":["《社会主义政治经济学》编写组"],"page_start":205,"page_end":252,"dates":[{"year":1976}]},{"title":"第六章 社会主义制度下的节约","authors":["《社会主义政治经济学》编写组"],"page_start":253,"page_end":275,"dates":[{"year":1976}]},{"title":"第七章 社会主义经济核算制","authors":["《社会主义政治经济学》编写组"],"page_start":281,"page_end":309,"dates":[{"year":1976}]},{"title":"第八章 社会主义社会的商品交换","authors":["《社会主义政治经济学》编写组"],"page_start":313,"page_end":360,"dates":[{"year":1976}]},{"title":"第九章 社会主义社会的货币和货币流通","authors":["《社会主义政治经济学》编写组"],"page_start":361,"page_end":387,"dates":[{"year":1976}]},{"title":"第十章 社会主义社会的分配","authors":["《社会主义政治经济学》编写组"],"page_start":393,"page_end":437,"dates":[{"year":1976}]},{"title":"第十一章 社会主义积累和扩大再生产","authors":["《社会主义政治经济学》编写组"],"page_start":441,"page_end":474,"dates":[{"year":1976}]},{"title":"第十二章 社会主义再生产中的资金运动","authors":["《社会主义政治经济学》编写组"],"page_start":475,"page_end":509,"dates":[{"year":1976}]},{"title":"第十三章 社会主义生产关系和阶级关系","authors":["《社会主义政治经济学》编写组"],"page_start":515,"page_end":524,"dates":[{"year":1976}]},{"title":"第十四章 无产阶级专政下的继续革命","authors":["《社会主义政治经济学》编写组"],"page_start":525,"page_end":534,"dates":[{"year":1976}]},{"title":"第十五章 共产主义是社会主义发展的必然趋势","authors":["《社会主义政治经济学》编写组"],"page_start":535,"page_end":551,"dates":[{"year":1976}]}],
      ocr: {
        content_thresholds: [0.0, 0.12, 0.0, 0.0],
        standard_paragraph_merge_strategy_threshold: 0.15, 
        differential_paragraph_merge_strategy_threshold: 0,
      },
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/d7255791-fc0e-4d11-9391-b5a8c1d3cf8b.pdf'),
  },
  {
    entity: {
      id: '7c69c3ac-22a8-483f-b7ba-33fb0081f388',
      name: '毛远新在省工农兵干部学习班的几次讲话（摘编）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(12)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/7c69c3ac-22a8-483f-b7ba-33fb0081f388/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"毛远新在省工农兵干部学习班向省委常委汇报学习心得会上的讲话（节录）","authors":["毛远新"],"page_start":2,"page_end":3,"dates":[{"year":1974,"month":2,"day":15},{"year":1974,"month":2,"day":16}]},{"title":"毛远新在省第二期工农兵干部学习班开学典礼上的讲话（节录）","authors":["毛远新"],"page_start":3,"page_end":5,"dates":[{"year":1974,"month":3,"day":28}]},{"title":"毛远新在省工农兵干部学习班的讲话（节录）","authors":["毛远新"],"page_start":5,"page_end":6,"dates":[{"year":1974,"month":4}]},{"title":"毛远新在省工农兵干部学习班组长座谈会上的讲话（节录）","authors":["毛远新"],"page_start":6,"page_end":8,"dates":[{"year":1974,"month":4,"day":3}]},{"title":"毛远新在省第一期工农兵干部学习班部分学员座谈会上的讲话（节录）","authors":["毛远新"],"page_start":8,"page_end":11,"dates":[{"year":1974,"month":5,"day":7}]},{"title":"毛远新在辽宁省工人干部学校第一期开学典礼上的讲话（节录）","authors":["毛远新"],"page_start":11,"page_end":12,"dates":[{"year":1974,"month":6,"day":20}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/7c69c3ac-22a8-483f-b7ba-33fb0081f388'),
  },
  {
    entity: {
      id: '1889b60c-cfab-44db-b430-0af194080c11',
      name: '毛远新同志的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(1)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/1889b60c-cfab-44db-b430-0af194080c11/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新同志在辽宁省革委会落实政策加强团结抚顺现场经验交流会上的讲话","authors":["毛远新"],"page_start":1,"page_end":1,"dates":[{"year":1969,"month":8,"day":14}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/1889b60c-cfab-44db-b430-0af194080c11'),
  },
  {
    entity: {
      id: '24ce30a0-4265-4ad5-8743-fc952385a77b',
      name: '陈锡联同志在沈阳三派革命群众组织代表座谈会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(1)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/24ce30a0-4265-4ad5-8743-fc952385a77b/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"陈锡联在沈阳三派革命群众组织代表座谈会上的讲话","authors":["陈锡联"],"page_start":1,"page_end":1,"dates":[{"year":1968,"month":4,"day":7}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/24ce30a0-4265-4ad5-8743-fc952385a77b'),
  },
  {
    entity: {
      id: 'b1848c1e-baa9-49fd-abc4-a8b263e4bcf6',
      name: '毛远新同志在沈阳三派革命群众组织代表座谈会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b1848c1e-baa9-49fd-abc4-a8b263e4bcf6/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"毛远新同志在沈阳三派革命群众组织代表座谈会上的讲话","authors":["毛远新"],"page_start":1,"page_end":3,"dates":[{"year":1968,"month":4,"day":7}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/b1848c1e-baa9-49fd-abc4-a8b263e4bcf6'),
  },
  {
    entity: {
      id: '52d8fbe4-965f-4cfc-872b-e6029e3f734d',
      name: '在北京接见辽革站赴京代表团时毛远新同志的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/52d8fbe4-965f-4cfc-872b-e6029e3f734d/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新同志在北京会见辽革站赴京代表团时的讲话","authors":["毛远新"],"page_start":1,"page_end":2,"dates":[{"year":1968,"month":3,"day":4}]}],
      ocr: {"auto_vsplit":true,"vsplit":0.5},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/52d8fbe4-965f-4cfc-872b-e6029e3f734d'),
  },
  {
    entity: {
      id: 'fb71dfe8-41f8-40fc-be7e-de81d9bcab90',
      name: '红旗一九六六年第二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/fb71dfe8-41f8-40fc-be7e-de81d9bcab90.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"苏共新领导奉行苏美合作路线的供状","authors":["红旗杂志评论员"],"page_start":3,"page_end":11,"dates":[{"year":1966}]},{"title":"苏共新领导鼓吹苏美合作的两本书","authors":[],"page_start":12,"page_end":17,"dates":[{"year":1966}]},{"title":"工农兵群众掌握理论的时代开始了","authors":["红旗杂志评论员"],"page_start":18,"page_end":21,"dates":[{"year":1966}]},{"title":"运用《实践论》总结民间测天经验","authors":["段春作"],"page_start":22,"page_end":29,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"《矛盾论》的思想进了水泥窖","authors":["刘培顺"],"page_start":30,"page_end":34,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"一万公里和一公里","authors":["赵维会"],"page_start":35,"page_end":36,"ocr":{"vsplit":0.35},"dates":[{"year":1965,"month":7,"day":22}]},{"title":"老规矩是怎样一破再破的——解放军某炊事班磨豆腐的故事","authors":["魏勤生"],"page_start":36,"page_end":37,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"为人民站柜台，从实践中学本领","authors":["杨瑾瑜"],"page_start":38,"page_end":43,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"评吴晗同志的资产阶级历史观","authors":["马岩"],"page_start":44,"page_end":53,"dates":[{"year":1966}]},{"title":"一家贫农——访问越南通讯：《人民战争花最红》之二","authors":["魏巍"],"page_start":54,"page_end":59,"dates":[{"year":1966}]}],
      ocr: {"auto_vsplit":false,"vsplit":0,"content_thresholds":[0,0.1,0,0.1]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/fb71dfe8-41f8-40fc-be7e-de81d9bcab90.pdf'),
  },
  {
    entity: {
      id: '7c5acd07-d5d3-4bee-b72f-af92099f6097',
      name: '红旗一九六六年第三期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/7c5acd07-d5d3-4bee-b72f-af92099f6097.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"必须把史学革命进行到底","authors":["尹达"],"page_start":3,"page_end":12,"dates":[{"year":1966}]},{"title":"不爱红装爱武装","authors":["杨作红"],"page_start":13,"page_end":17,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"思想不断革命 技术不断革命","authors":["邹瑞禄"],"page_start":17,"page_end":22,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"从不愿意当干部到决心干一辈子革命","authors":["宋文美"],"page_start":22,"page_end":27,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"毛泽东文艺思想的胜利——评《收租院》泥塑群象","authors":["蔡若红"],"page_start":28,"page_end":35,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]}],
      ocr: {"auto_vsplit":false,"vsplit":0,"content_thresholds":[0,0.1,0,0.1]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/7c5acd07-d5d3-4bee-b72f-af92099f6097.pdf'),
  },
  {
    entity: {
      id: '7e25f78e-34c8-4f74-bb66-f25361b2a16a',
      name: '红旗一九六六年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/7e25f78e-34c8-4f74-bb66-f25361b2a16a.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"政治是统帅，是灵魂","alias":"一九六六年元旦社论","authors":[],"page_start":3,"page_end":5,"dates":[{"year":1966,"month":1,"day":1}]},{"title":"苏共领导是宣言和声明的背叛者","authors":["人民日报编辑部"],"page_start":6,"page_end":9,"dates":[{"year":1965,"month":12,"day":30}]},{"title":"高举毛泽东思想红旗做又会劳动又会创作的文艺战士","alias":"一九六五年十一月二十九日在全国青年业余文学创作积极分子大会上的讲话","authors":["周扬"],"page_start":10,"page_end":28,"dates":[{"year":1965,"month":11,"day":29}]},{"title":"高标准的质量来自高标准的思想","authors":["苏星"],"page_start":29,"page_end":31,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"社会主义事业的发展不能坐着等","authors":["王永幸"],"page_start":32,"page_end":38,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"一个长期扎根农村的电影放映队","authors":["吉映"],"page_start":39,"page_end":42,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"把书送到农民手里","authors":["崔月仙"],"page_start":43,"page_end":46,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"人类认识化学元素的过程","authors":["刘际启"],"page_start":47,"page_end":55,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]}],
      ocr: {"auto_vsplit":false,"vsplit":0,"content_thresholds":[0,0.1,0,0.1]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/7e25f78e-34c8-4f74-bb66-f25361b2a16a.pdf'),
  },
  {
    entity: {
      id: 'eaefb094-86e6-4c5f-a190-46818d16ffa2',
      name: '毛远新同志、陈锡联司令员、李伯秋主任在接见辽宁三大派赴京代表团会议上讲话纪要',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/eaefb094-86e6-4c5f-a190-46818d16ffa2/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新同志、陈锡联司令员、李伯秋主任在接见辽宁三大派赴京代表团会议上讲话纪要","authors":["毛远新","陈锡联"],"page_start":1,"page_end":1,"dates":[{"year":1968,"month":4,"day":7}]},{"title":"陈锡联同志的讲话","authors":["陈锡联"],"page_start":2,"page_end":2,"dates":[{"year":1968,"month":4,"day":7}]},{"title":"坚决打倒宋任穷的口号","authors":[],"page_start":2,"page_end":2,"dates":[]}],
      ocr: {"auto_vsplit":true,"vsplit":0.5},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/eaefb094-86e6-4c5f-a190-46818d16ffa2'),
  },
  {
    entity: {
      id: '3bced832-3272-4fe6-b454-b0ef7886081d',
      name: '毛远新同志讲话（五月四日）八三一总司全委扩大会议简报',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/3bced832-3272-4fe6-b454-b0ef7886081d/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新同志在八三一总司揭发批判张群久、于跃、雷云江、付长恩大会上的讲话","authors":["毛远新"],"page_start":1,"page_end":2,"dates":[{"year":1968,"month":5,"day":4}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/3bced832-3272-4fe6-b454-b0ef7886081d'),
  },
  {
    entity: {
      id: 'ca52d8a2-4eb3-4da5-b1db-ceebcbf032d2',
      name: '毛远新的两次谈话记录',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/ca52d8a2-4eb3-4da5-b1db-ceebcbf032d2/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新的两次谈话记录","authors":["毛远新"],"page_start":1,"page_end":9,"dates":[{"year":1976,"month":6,"day":2},{"year":1976,"month":6,"day":5}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/ca52d8a2-4eb3-4da5-b1db-ceebcbf032d2'),
  },
  {
    entity: {
      id: 'c4f4035b-486a-459b-9cb7-4deb00350052',
      name: '毛远新在学习辽宁朝阳农学院教育革命经验现场会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(21)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c4f4035b-486a-459b-9cb7-4deb00350052/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新在学习辽宁朝阳农学院教育革命经验现场会上的讲话","authors":["毛远新"],"page_start":1,"page_end":21,"dates":[{"year":1974,"month":12,"day":23}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/c4f4035b-486a-459b-9cb7-4deb00350052'),
  },
  {
    entity: {
      id: '787c5af3-10c9-40fd-bd3e-6e0a13e7e67c',
      name: '毛远新吹捧宋江、美化自己的一段谈话（节录）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/787c5af3-10c9-40fd-bd3e-6e0a13e7e67c/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"毛远新在鞍山市党员干部会议上的讲话（摘录）","authors":["毛远新"],"page_start":2,"page_end":3,"dates":[{"year":1975,"month":7,"day":7}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/787c5af3-10c9-40fd-bd3e-6e0a13e7e67c'),
  },
  {
    entity: {
      id: '6959f089-922d-4677-b3cb-eba8636787d0',
      name: '毛远新的谈话记录',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(10)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/6959f089-922d-4677-b3cb-eba8636787d0/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"毛远新的谈话记录","authors":["毛远新"],"page_start":2,"page_end":10,"dates":[{"year":1976,"month":2,"day":8}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/6959f089-922d-4677-b3cb-eba8636787d0'),
  },
  {
    entity: {
      id: 'febb7416-870c-4ca2-85c1-00de96d8a9d0',
      name: '毛远新谈话记录',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/febb7416-870c-4ca2-85c1-00de96d8a9d0/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"毛远新谈话记录","authors":["毛远新"],"page_start":2,"page_end":4,"dates":[{"year":1976,"month":4,"day":22}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/febb7416-870c-4ca2-85c1-00de96d8a9d0'),
  },
  {
    entity: {
      id: 'b8079465-9bf6-46cd-9c6c-95208979eed0',
      name: '工人阶级必须领导一切',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/b8079465-9bf6-46cd-9c6c-95208979eed0.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"工人阶级必须领导一切","authors":["姚文元"],"page_start":3,"page_end":10,"dates":[{"year":1968,"month":8,"day":25}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/b8079465-9bf6-46cd-9c6c-95208979eed0.pdf'),
  },
  {
    entity: {
      id: 'dcd0d64f-fa58-4455-a6ce-8c78a1f187d0',
      name: '毛远新对当前工作的意见',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/dcd0d64f-fa58-4455-a6ce-8c78a1f187d0/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"毛远新对当前工作的意见","authors":["毛远新"],"page_start":1,"page_end":2,"dates":[{"year":1976,"month":4,"day":19}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/dcd0d64f-fa58-4455-a6ce-8c78a1f187d0'),
  },
  {
    entity: {
      id: 'f692a8bf-a640-4079-89e3-c41186cb50ff',
      name: '毛远新的谈话记录',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/f692a8bf-a640-4079-89e3-c41186cb50ff/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"毛远新的谈话记录","authors":["毛远新"],"page_start":2,"page_end":8,"dates":[{"year":1976,"month":1,"day":1}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/f692a8bf-a640-4079-89e3-c41186cb50ff'),
  },
  {
    entity: {
      id: '5c2a93f5-a845-42ca-aeb7-69a6f92fc954',
      name: '毛远新在市地委书记会议召集人会上的讲话记录',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(7)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/5c2a93f5-a845-42ca-aeb7-69a6f92fc954/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新在市地委书记会议召集人会上的讲话记录","authors":["毛远新"],"page_start":2,"page_end":7,"dates":[{"year":1975,"month":12,"day":2}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/5c2a93f5-a845-42ca-aeb7-69a6f92fc954'),
  },
  {
    entity: {
      id: '78256f65-d15b-4800-976e-d4a9e6e7a160',
      name: '红旗一九五八年第二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/78256f65-d15b-4800-976e-d4a9e6e7a160.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [
        {"title":"破除迷信","authors":["范文澜"],"page_start":3,"page_end":6,"dates":[{"year":1958}]},
        {"title":"治水问题的两条路线","authors":["曾希圣"],"page_start":7,"page_end":10,"dates":[{"year":1958}]},
        {"title":"开渠歌","authors":[],"page_start":10,"page_end":10,"dates":[{"year":1958}]},
        {"title":"高山顶上人造江","authors":[],"page_start":10,"page_end":10,"dates":[{"year":1958}]},
        {"title":"车干长江与黄河","authors":[],"page_start":10,"page_end":10,"dates":[{"year":1958}]},
        {"title":"驳斥现代修正主义反动的国家论","authors":["王稼祥"],"page_start":11,"page_end":18,"dates":[{"year":1958}]},
        {"title":"美帝国主义在南斯拉夫的赌注","authors":["陈伯达"],"page_start":19,"page_end":21,"dates":[{"year":1958}], ocr:{ vsplit: 0.35}},
        {"title":"病树前头万木春——从泰晤士报的一篇评论谈起","authors":["胡乔木"],"page_start":22,"page_end":24,"dates":[{"year":1958}]},
        {"title":"水力和电力结合，乡社工业遍地开花","authors":["张桂如"],"page_start":25,"page_end":28,"dates":[{"year":1958}]},
        {"title":"颂抗旱","authors":["陈忠生"],"page_start":28,"page_end":28,"dates":[{"year":1958}]},
        {"title":"每人七分地也能成为余粮社、富裕社","authors":["田荣申"],"page_start":29,"page_end":31,"dates":[{"year":1958}]},
        {"title":"农具大革新，生产大跃进","authors":["师道铎"],"page_start":32,"page_end":35,"dates":[{"year":1958}], ocr:{ vsplit: 0.35}},
        {"title":"一个青年农民把柴油机改装成了拖拉机","authors":["仝云"],"page_start":35,"page_end":35,"dates":[{"year":1958}], ocr:{ vsplit: 0.35}},
        {"title":"找资源，挖潜力，做好农村的采购工作","authors":["杨一辰"],"page_start":36,"page_end":39,"dates":[{"year":1958}]},
        {"title":"为啥云上红旗飘","authors":[],"page_start":39,"page_end":39,"dates":[{"year":1958}]},
        {"title":"五台山变成聚宝山","authors":["王铭三"],"page_start":40,"page_end":43,"dates":[{"year":1958}], ocr:{ vsplit: 0.35}}
      ],
      ocr: {"auto_vsplit":false,"vsplit":0,"content_thresholds":[0,0.1,0,0.1], differential_paragraph_merge_strategy_threshold: 20},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/78256f65-d15b-4800-976e-d4a9e6e7a160.pdf'),
  },
  {
    entity: {
      id: '57df1a72-767a-4bb8-8cbe-f09d976eec5a',
      name: '论林彪反党集团的社会基础',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/57df1a72-767a-4bb8-8cbe-f09d976eec5a.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"论林彪反党集团的社会基础","authors":["姚文元"],"page_start":1,"page_end":6,"dates":[{"year":1975,"month":3,"day":1}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives3/57df1a72-767a-4bb8-8cbe-f09d976eec5a.pdf'),
  },
  {
    entity: {
      id: '2cec027f-70be-4525-8a87-8da2e7cfa6fc',
      name: '毛远新在省委常委会议上的发言（摘录）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/2cec027f-70be-4525-8a87-8da2e7cfa6fc/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"毛远新在省委常委会议上的发言","authors":["毛远新"],"page_start":2,"page_end":4,"archive_id":1,"dates":[{"year":1974,"month":2,"day":9}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/2cec027f-70be-4525-8a87-8da2e7cfa6fc'),
  },
  {
    entity: {
      id: '31b69dc5-0197-45f9-b432-e090f4f60114',
      name: '中央首长在北京市革命委员会常委扩大会议上的重要讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/31b69dc5-0197-45f9-b432-e090f4f60114/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"中央首长在北京市革命委员会常委扩大会议上的重要讲话","authors":["江青","张春桥","陈伯达","康生","周恩来","谢富治"],"dates":[{"year":1967,"month":9,"day":1}],"page_start":1,"page_end":9}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/31b69dc5-0197-45f9-b432-e090f4f60114'),
  },
  {
    entity: {
      id: 'a13a4008-5f3a-4f1d-8e0b-940a1c633cd5',
      name: '红旗一九五八年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/a13a4008-5f3a-4f1d-8e0b-940a1c633cd5.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      archive_id: 2,
      articles: [{"title":"红旗杂志发刊词","alias":"发刊词","authors":[],"dates":[{"year":1958}],"page_start":3,"page_end":4},{"title":"介绍一个合作社","authors":["毛泽东"],"dates":[{"year":1958,"month":4,"day":15}],"page_start":5,"page_end":6},{"title":"一个苦战了两年改变了面貌的合作社","authors":["中共封丘县委员会"],"dates":[{"year":1958}],"page_start":6,"page_end":12},{"title":"南斯拉夫修正主义是帝国主义政策的产物","authors":["陈伯达"],"dates":[{"year":1958}],"page_start":13,"page_end":20},{"title":"关于美国经济危机","authors":["张闻天"],"dates":[{"year":1958}],"page_start":21,"page_end":29},{"title":"劳动人民一定要做文化的主人","authors":["柯庆施"],"dates":[{"year":1958}],"page_start":30,"page_end":34},{"title":"新民歌开拓了诗歌的新道路","authors":["周扬"],"dates":[{"year":1958}],"page_start":35,"page_end":40},{"title":"依靠群众，势如破竹","authors":["王任重"],"dates":[{"year":1958}],"page_start":41,"page_end":48},{"title":"农具改良和技术革命","authors":["郑刚"],"dates":[{"year":1958}],"page_start":48,"page_end":51}],
      ocr: {"auto_vsplit":false,"vsplit":0,"content_thresholds":[0,0.1,0,0.1]},
      ocr_exceptions: {"6":{"vsplit":0.35},"7":{"vsplit":0.35},"8":{"vsplit":0.35},"9":{"vsplit":0.35},"10":{"vsplit":0.35},"11":{"vsplit":0.35},"12":{"vsplit":0.35},"35":{"vsplit":0.35},"36":{"vsplit":0.35},"37":{"vsplit":0.35},"38":{"vsplit":0.35},"39":{"vsplit":0.35},"40":{"vsplit":0.35},"48":{"vsplit":0.35},"49":{"vsplit":0.35},"50":{"vsplit":0.35},"51":{"vsplit":0.35}},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives2/a13a4008-5f3a-4f1d-8e0b-940a1c633cd5.pdf'),
  },
  {
    entity: {
      id: '259053b8-c23b-40e9-95d0-63476a3bc6c8',
      name: '江青陈伯达在北京大学的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/259053b8-c23b-40e9-95d0-63476a3bc6c8/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"江青陈伯达在北京大学的讲话","authors":["江青","陈伯达"],"dates":[{"year":1966,"month":7,"day":23}],"page_start":1,"page_end":2}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/259053b8-c23b-40e9-95d0-63476a3bc6c8'),
  },
  {
    entity: {
      id: 'f4596d80-d0b2-4349-91d5-aadaae94aa11',
      name: '洪文、春桥同志批示',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(15)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/f4596d80-d0b2-4349-91d5-aadaae94aa11/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"王洪文、张春桥同志批示","authors":["王洪文","张春桥"],"dates":[{"year":1974,"month":4,"day":7}],"page_start":1,"page_end":1},{"title":"上海市委领导同志在警备区看大字报时讲话","authors":[],"dates":[{"year":1974,"month":6,"day":28}],"page_start":1,"page_end":2},{"title":"关于许世友的大字报","authors":["曲增言"],"dates":[{"year":1974,"month":6,"day":27}],"page_start":3,"page_end":15}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/f4596d80-d0b2-4349-91d5-aadaae94aa11'),
  },
  {
    entity: {
      id: 'ea12100d-1d0d-43a9-a4bc-355af558ae65',
      name: '张春桥同志接见工总司常委时的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/ea12100d-1d0d-43a9-a4bc-355af558ae65/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志接见工总司常委时的讲话","authors":["张春桥"],"dates":[{"year":1967,"month":9,"day":8}],"page_start":1,"page_end":3}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/ea12100d-1d0d-43a9-a4bc-355af558ae65'),
  },
  {
    entity: {
      id: '262825ac-988f-4c65-abb7-03ca63794c98',
      name: '周恩来、陈伯达、康生、江青、杨成武、张春桥同志和中央文革小组在接见河南湖北来京参加学习班的军队干部地方干部和红卫兵会议上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(7)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/262825ac-988f-4c65-abb7-03ca63794c98/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"周恩来、陈伯达、康生、江青、杨成武、张春桥同志和中央文革小组在接见河南湖北来京参加学习班的军队干部地方干部和红卫兵会议上的讲话","authors":["周恩来","陈伯达","康生","江青","杨成武","张春桥"],"dates":[{"year":1967,"month":9,"day":26}],"page_start":1,"page_end":7}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/262825ac-988f-4c65-abb7-03ca63794c98'),
  },
  {
    entity: {
      id: '38d166b6-f2ce-4f65-93a7-3b9bb5794592',
      name: '张春桥同志在上海市革命委员会扩大会议上的重要指示',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(5)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/38d166b6-f2ce-4f65-93a7-3b9bb5794592/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥在上海革委会扩大会议上的讲话","authors":["张春桥"],"dates":[{"year":1967,"month":11,"day":19}],"page_start":1,"page_end":5}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/38d166b6-f2ce-4f65-93a7-3b9bb5794592'),
  },
  {
    entity: {
      id: '57d74152-648c-41b9-8746-2b76ca7f572f',
      name: '张春桥同志1967年12月10日下午接见文艺界代表讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(6)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/57d74152-648c-41b9-8746-2b76ca7f572f/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥接见文艺出版界代表的讲话","alias":"张春桥同志1967年12月10日下午接见文艺界代表讲话","authors":["张春桥"],"dates":[{"year":1967,"month":12,"day":10}],"page_start":1,"page_end":6}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/57d74152-648c-41b9-8746-2b76ca7f572f'),
  },
  {
    entity: {
      id: 'b3ca39f5-3154-4c20-8f01-d8ed821d5ea5',
      name: '总理、陈伯达、康生、江青、姚文元等同志在接见全国铁路、交通会议全体代表时的重要讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(7)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b3ca39f5-3154-4c20-8f01-d8ed821d5ea5/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"周总理陈伯达康生江青姚文元等同志在接见全国铁路、交通会议全体代表时的讲话","authors":["周恩来","江青","陈伯达","康生","姚文元"],"dates":[{"year":1968,"month":5,"day":12}],"page_start":1,"page_end":7}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/archives1/b3ca39f5-3154-4c20-8f01-d8ed821d5ea5'),
  },
  {
    entity: {
      id: 'maoxuan-jinghuo',
      name: '毛泽东选集1-7(静火版)',
      internal: false,
      official: false,
      author: '静火',
      type: 'pdf',
      files: '/books/maoxuan-jinghuo.pdf',
    },
    parser_option: {
      page_limits: [
        [20, 1183],
        [1192, 1489],
        [1504, 1791],
      ],
    },
    parser: jinghuo_parser.parse,
    path: join(normalize(__dirname), '../public/books/maoxuan-jinghuo.pdf'),
  },
  {
    entity: {
      id: 'wansui1',
      name: '毛泽东思想万岁(1913-1943卷)',
      internal: false,
      official: false,
      author: '未知',
      type: 'pdf',
      files: '/books/wansui1a.pdf',
    },
    parser_option: {
      page_limits: [[9, 569]],
    },
    parser: wansui_parser.parse,
    path: join(normalize(__dirname), '../public/books/wansui1a.pdf'),
  },
  {
    entity: {
      id: 'wansui2',
      name: '毛泽东思想万岁(1943-1949卷)',
      internal: false,
      official: false,
      author: '未知',
      type: 'pdf',
      files: '/books/wansui2a.pdf',
    },
    parser_option: {
      page_limits: [[9, 542]],
    },
    parser: wansui_parser.parse,
    path: join(normalize(__dirname), '../public/books/wansui2a.pdf'),
  },
  {
    entity: {
      id: 'wansui3',
      name: '毛泽东思想万岁(1949-1957卷)',
      type: 'pdf',
      internal: false,
      official: false,
      author: '未知',
      files: '/books/wansui3a.pdf',
    },
    parser_option: {
      page_limits: [[9, 508]],
    },
    parser: wansui_parser.parse,
    path: join(normalize(__dirname), '../public/books/wansui3a.pdf'),
  },
  {
    entity: {
      id: 'wansui4',
      type: 'pdf',
      name: '毛泽东思想万岁(1958-1960卷)',
      internal: false,
      official: false,
      author: '未知',
      files: '/books/wansui4a.pdf',
    },
    parser_option: {
      page_limits: [[11, 674]],
    },
    parser: wansui_parser.parse,
    path: join(normalize(__dirname), '../public/books/wansui4a.pdf'),
  },
  {
    entity: {
      id: 'wansui5',
      name: '毛泽东思想万岁(1961-1968卷)',
      type: 'pdf',
      internal: false,
      official: false,
      author: '未知',
      files: '/books/wansui5a.pdf',
    },
    parser_option: {
      page_limits: [[16, 668]],
    },
    parser: wansui_parser.parse,
    path: join(normalize(__dirname), '../public/books/wansui5a.pdf'),
  },
  {
    entity: {
      id: 'wenji1',
      type: 'pdf',
      name: '毛泽东文集第一卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji1.pdf',
    },
    parser_option: {
      page_limits: [[14, 526]],
      page_width: 435.2,
      content_min_x: 74.5,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji1.pdf'),
  },
  {
    entity: {
      id: 'wenji2',
      name: '毛泽东文集第二卷(1999)',
      type: 'pdf',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji2.pdf',
    },
    parser_option: {
      page_limits: [[14, 481]],
      page_width: 393.2,
      content_min_x: 44.88,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji2.pdf'),
  },
  {
    entity: {
      id: 'wenji3',
      type: 'pdf',
      name: '毛泽东文集第三卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji3.pdf',
    },
    parser_option: {
      page_limits: [[12, 467]],
      page_width: 442,
      content_min_x: 74.28,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji3.pdf'),
  },
  {
    entity: {
      type: 'pdf',
      id: 'wenji4',
      name: '毛泽东文集第四卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji4.pdf',
    },
    parser_option: {
      page_limits: [[15, 354]],
      page_width: 442,
      content_min_x: 74.28,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji4.pdf'),
  },
  {
    entity: {
      type: 'pdf',
      id: 'wenji5',
      name: '毛泽东文集第五卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji5.pdf',
    },
    parser_option: {
      page_limits: [[14, 363]],
      page_width: 382,
      content_min_x: 45.84,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji5.pdf'),
  },
  {
    entity: {
      id: 'wenji6',
      type: 'pdf',
      name: '毛泽东文集第六卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji6.pdf',
    },
    parser_option: {
      page_limits: [[15, 527]],
      page_width: 449.5,
      content_min_x: 72.28,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji6.pdf'),
  },
  {
    entity: {
      id: 'wenji7',
      type: 'pdf',
      name: '毛泽东文集第七卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji7.pdf',
    },
    parser_option: {
      page_limits: [[10, 474]],
      page_width: 389.5,
      content_min_x: 43.24,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji7.pdf'),
  },
  {
    entity: {
      id: 'wenji8',
      type: 'pdf',
      name: '毛泽东文集第八卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji8.pdf',
    },
    parser_option: {
      page_limits: [[12, 457]],
      page_width: 389.5,
      content_min_x: 43.24,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji8.pdf'),
  },
  {
    entity: {
      id: 'jqjianghua',
      type: 'pdf',
      name: '江青十年讲话汇编',
      internal: false,
      official: false,
      author: '',
      files: '/books/jqjianghua.pdf',
    },
    parser_option: {
      page_limits: [
        [7, 730],
        [736, 752],
      ],
    },
    parser: jqjianghua_parser.parse,
    path: join(normalize(__dirname), '../public/books/jqjianghua.pdf'),
  },
  {
    entity: {
      id: 'xuanji1',
      type: 'pdf',
      name: '毛泽东选集第一卷(1967)',
      internal: false,
      official: true,
      author: '毛泽东',
      files: '/books/毛泽东选集(1967)1.pdf',
    },
    parser_option: {
      page_limits: [[12, 321]],
      name: 'xuanji1',
    },
    parser: xuanji_parser.parse,
    path: join(normalize(__dirname), '../public/books/毛泽东选集(1967)1.pdf'),
  },
  {
    entity: {
      id: 'xuanji2',
      name: '毛泽东选集第二卷(1967)',
      type: 'pdf',
      internal: false,
      official: true,
      author: '毛泽东',
      files: '/books/毛泽东选集(1967)2.pdf',
    },
    parser_option: {
      page_limits: [[12, 441]],
      name: 'xuanji2',
    },
    parser: xuanji_parser.parse,
    path: join(normalize(__dirname), '../public/books/毛泽东选集(1967)2.pdf'),
  },
  {
    entity: {
      id: 'xuanji3',
      name: '毛泽东选集第三卷(1967)',
      type: 'pdf',
      internal: false,
      official: true,
      author: '毛泽东',
      files: '/books/毛泽东选集(1967)3.pdf',
    },
    parser_option: {
      page_limits: [[10, 329]],
      name: 'xuanji3',
    },
    parser: xuanji_parser.parse,
    path: join(normalize(__dirname), '../public/books/毛泽东选集(1967)3.pdf'),
  },
  {
    entity: {
      id: 'xuanji4',
      name: '毛泽东选集第四卷(1967)',
      internal: false,
      official: true,
      type: 'pdf',
      author: '毛泽东',
      files: '/books/毛泽东选集(1967)4.pdf',
    },
    parser_option: {
      page_limits: [[10, 395]],
      name: 'xuanji4',
    },
    parser: xuanji_parser.parse,
    path: join(normalize(__dirname), '../public/books/毛泽东选集(1967)4.pdf'),
  },
  {
    entity: {
      id: 'xuanji5',
      name: '毛泽东选集第五卷(1977)',
      internal: false,
      type: 'pdf',
      official: true,
      author: '毛泽东',
      files: '/books/毛泽东选集(1977)5.pdf',
    },
    parser_option: {
      page_limits: [[16, 513]],
      page_width: 602,
      content_min_x: 90,
      header_min_height: 17,
      name: 'xuanji5',
    },
    parser: xuanji_parser.parse,
    path: join(normalize(__dirname), '../public/books/毛泽东选集(1977)5.pdf'),
  },
  {
    entity: {
      id: 'yaowenyuan',
      name: '姚文元文录',
      internal: false,
      type: 'pdf',
      official: true,
      author: '姚文元',
      files: '/books/姚文元文录.pdf',
    },
    parser_option: {
      page_limits: [[12, 876]],
    },
    parser: yaowenyuan.parse,
    path: join(normalize(__dirname), '../public/books/姚文元文录.pdf'),
  },
  {
    entity: {
      id: 'maoquanji27',
      name: '毛泽东全集第27卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/27-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 31],
        ...exclude(
          [32, 537],
          [
            50, 58, 61, 78, 86, 90, 92, 93, 94, 95, 96, 97, 98, 99, 131, 153,
            159, 163, 170, 176, 178, 187, 188, 198, 222, 231, 255, 256, 257,
            258, 259, 260, 261, 262, 263, 270, 273, 280, 281, 282, 283, 284,
            285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 297, 300, 309,
            310, 312, 314, 316, 319, 323, 324, 325, 326, 328, 329, 332, 336,
            337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349,
            350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362,
            363, 364, 365, 366, 367, 369, 399, 400, 409, 413, 416, 422, 426,
            428, 429, 442, 443, 449, 468, 486, 497, 518, 530,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/27-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji28',
      name: '毛泽东全集第28卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/28-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 34],
        ...exclude(
          [35, 540],
          [
            42, 51, 55, 57, 61, 72, 85, 89, 90, 91, 92, 93, 94, 95, 96, 102,
            103, 116, 118, 120, 122, 125, 129, 132, 134, 139, 149, 160, 161,
            163, 173, 190, 198, 200, 201, 205, 207, 218, 219, 221, 223, 225,
            227, 228, 231, 237, 239, 241, 246, 257, 262, 265, 267, 268, 273,
            277, 279, 282, 289, 291, 293, 295, 298, 300, 302, 305, 309, 312,
            314, 324, 330, 332, 334, 335, 338, 340, 346, 348, 352, 354, 356,
            366, 375, 377, 379, 383, 393, 394, 399, 401, 407, 409, 412, 416,
            419, 425, 430, 432, 445, 453, 454, 455, 474, 476, 478, 481, 488,
            489, 490, 491, 492, 493, 494, 495, 496, 497, 503, 504, 510, 511,
            512, 513, 516, 517, 519, 525, 526, 530, 533,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/28-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji29',
      name: '毛泽东全集第29卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/29-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 37],
        ...exclude(
          [38, 547],
          [
            39, 44, 54, 56, 74, 76, 79, 93, 109, 124, 129, 150, 169, 171, 175,
            181, 183, 184, 185, 186, 187, 188, 189, 198, 200, 201, 202, 203,
            204, 214, 218, 220, 221, 237, 277, 278, 293, 327, 328, 329, 330,
            333, 369, 394, 400, 402, 411, 439, 448, 462, 473, 477, 479, 490,
            495, 497, 499, 501, 503, 505, 532, 536, 539, 540, 543,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/29-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji30',
      name: '毛泽东全集第30卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/30-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 36],
        ...exclude(
          [37, 541],
          [
            46, 59, 81, 104, 128, 130, 152, 191, 204, 215, 219, 235, 254, 260,
            263, 265, 267, 270, 275, 296, 298, 314, 330, 331, 332, 333, 348,
            349, 350, 361, 368, 369, 370, 371, 372, 388, 390, 398, 410, 411,
            455, 463, 469, 472, 473, 474, 483, 494, 497, 509, 513, 514, 524,
            530,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/30-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji31',
      name: '毛泽东全集第31卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/31-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 39],
        ...exclude(
          [40, 548],
          [
            41, 42, 45, 46, 56, 59, 64, 81, 92, 97, 99, 107, 139, 143, 162, 176,
            213, 216, 238, 300, 362, 363, 364, 376, 396, 440, 448, 449, 502,
            504, 505,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/31-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji32',
      name: '毛泽东全集第32卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/32-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 34],
        ...exclude(
          [35, 535],
          [
            50, 95, 96, 97, 111, 112, 114, 123, 125, 136, 149, 154, 165, 192,
            193, 198, 203, 205, 209, 212, 213, 214, 230, 231, 247, 250, 265,
            270, 272, 273, 274, 279, 282, 290, 309, 313, 314, 315, 316, 317,
            318, 319, 321, 322, 323, 324, 326, 338, 340, 350, 351, 359, 374,
            387, 391, 409, 411, 415, 417, 418, 426, 427, 437, 478, 479, 480,
            481, 482, 500, 501, 502, 503, 505, 506, 507, 508, 509, 510, 511,
            512, 513, 514, 515, 516, 517, 518, 519, 521, 522, 523, 524, 525,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/32-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji33',
      name: '毛泽东全集第33卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/33-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 31],
        ...exclude(
          [32, 537],
          [
            43, 53, 54, 71, 101, 126, 127, 128, 132, 133, 134, 137, 141, 142,
            150, 151, 152, 155, 156, 165, 174, 186, 187, 189, 190, 210, 222,
            225, 231, 232, 236, 241, 246, 262, 271, 282, 295, 305, 307, 312,
            320, 322, 323, 331, 332, 333, 337, 338, 351, 352, 359, 363, 364,
            365, 374, 375, 377, 381, 387, 409, 412, 414, 415, 432, 437, 438,
            449, 451, 456, 462, 463, 464, 466, 475, 479, 482, 484, 489, 496,
            498, 500, 502, 504, 512, 515, 516, 517, 520, 525, 526, 527, 528,
            529, 530, 531, 534,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/33-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji34',
      name: '毛泽东全集第34卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/34-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 26],
        ...exclude(
          [27, 529],
          [
            43, 44, 48, 57, 58, 59, 60, 63, 70, 73, 74, 75, 77, 83, 86, 89, 90,
            93, 94, 95, 96, 97, 98, 100, 101, 102, 103, 107, 108, 111, 113, 148,
            150, 151, 161, 166, 168, 169, 170, 181, 182, 183, 184, 185, 186,
            187, 188, 189, 190, 192, 199, 205, 206, 213, 214, 216, 227, 243,
            244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256,
            257, 258, 259, 263, 264, 265, 266, 267, 268, 269, 273, 278, 279,
            314, 321, 326, 327, 328, 331, 350, 355, 380, 392, 394, 396, 397,
            402, 403, 404, 405, 406, 411, 412, 414, 415, 425, 430, 438, 440,
            447, 455, 461, 472, 479, 496, 521,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/34-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji35',
      name: '毛泽东全集第35卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/35-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 25],
        ...exclude(
          [26, 533],
          [
            27, 28, 35, 45, 46, 49, 53, 54, 55, 58, 59, 61, 62, 66, 73, 91, 92,
            93, 94, 109, 116, 129, 131, 158, 159, 160, 161, 162, 163, 164, 165,
            166, 167, 168, 169, 170, 171, 183, 200, 209, 210, 211, 216, 218,
            219, 270, 272, 335, 371, 372, 385, 459, 460, 461, 462, 463, 464,
            465, 470, 471, 472, 473, 477, 519,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/35-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji36',
      name: '毛泽东全集第36卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/36-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 23],
        ...exclude(
          [24, 528],
          [
            31, 32, 46, 47, 58, 67, 74, 75, 77, 80, 90, 92, 101, 104, 112, 127,
            128, 130, 132, 133, 139, 140, 142, 143, 144, 145, 146, 147, 148,
            149, 150, 151, 152, 153, 154, 156, 157, 158, 159, 160, 162, 163,
            164, 174, 184, 192, 193, 195, 199, 200, 201, 204, 205, 206, 207,
            219, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 241, 247,
            263, 264, 265, 297, 319, 342, 343, 344, 345, 346, 349, 352, 355,
            356, 360, 362, 363, 364, 366, 367, 368, 369, 370, 371, 372, 373,
            375, 376, 379, 381, 382, 388, 391, 392, 393, 394, 395, 419, 447,
            449, 474, 517, 518,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/36-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji37',
      name: '毛泽东全集第37卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/37-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 19],
        ...exclude(
          [20, 522],
          [
            25, 26, 27, 28, 30, 37, 38, 39, 40, 41, 42, 45, 46, 76, 88, 89, 90,
            91, 94, 98, 105, 106, 107, 108, 109, 110, 111, 112, 119, 120, 121,
            122, 146, 147, 148, 163, 167, 183, 186, 194, 195, 205, 214, 215,
            217, 218, 226, 228, 271, 275, 301, 351, 352, 356, 357, 358, 359,
            360, 361, 362, 363, 364, 365, 366, 425, 426, 464,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/37-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji38',
      name: '毛泽东全集第38卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/38-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [12, 25],
        ...exclude(
          [26, 532],
          [
            29, 33, 45, 60, 63, 68, 76, 84, 85, 95, 96, 97, 98, 99, 100, 101,
            102, 103, 104, 115, 118, 193, 217, 218, 219, 220, 221, 225, 238,
            239, 241, 264, 267, 294, 297, 298, 299, 300, 301, 302, 304, 314,
            334, 335, 336, 349, 350, 351, 352, 353, 367, 368, 369, 381, 384,
            386, 389, 394, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419,
            420, 421, 438, 455, 456, 457, 458, 511, 512, 523, 531,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/38-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji39',
      name: '毛泽东全集第39卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/39-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 24],
        ...exclude(
          [25, 529],
          [
            26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 45, 59, 60, 85, 117,
            118, 119, 120, 121, 122, 123, 124, 128, 151, 152, 159, 160, 161,
            162, 163, 164, 165, 166, 197, 198, 199, 200, 201, 202, 203, 204,
            223, 224, 225, 226, 227, 233, 234, 235, 241, 242, 243, 244, 245,
            246, 247, 248, 249, 250, 258, 259, 260, 261, 262, 263, 264, 271,
            290, 300, 307, 361, 363, 373, 379, 380, 381, 382, 383, 384, 385,
            420, 421, 422, 434, 443, 444, 445, 456, 457, 460, 466, 468, 483,
            487, 508, 509, 515, 518, 519, 521, 522, 523, 524, 525, 526, 527,
            528,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/39-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji40',
      name: '毛泽东全集第40卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/40-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 22],
        ...exclude(
          [23, 528],
          [
            25, 26, 27, 28, 29, 30, 31, 32, 33, 37, 50, 53, 54, 55, 56, 57, 58,
            59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 163, 165, 167, 168, 170,
            171, 172, 173, 174, 175, 176, 177, 178, 182, 183, 184, 185, 186,
            187, 188, 189, 190, 191, 192, 193, 194, 196, 197, 198, 199, 201,
            203, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216,
            217, 218, 219, 220, 221, 222, 223, 224, 225, 227, 228, 229, 230,
            231, 232, 233, 234, 235, 236, 237, 238, 241, 242, 243, 244, 245,
            246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258,
            259, 261, 270, 273, 274, 278, 279, 280, 281, 282, 283, 284, 293,
            303, 311, 322, 332, 333, 334, 392, 426, 427, 428, 429, 430, 431,
            481, 482, 483, 486, 519,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/40-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji41',
      name: '毛泽东全集第41卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/41-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 26],
        ...exclude(
          [27, 532],
          [
            53, 54, 60, 71, 98, 99, 100, 101, 125, 126, 127, 128, 129, 130, 136,
            138, 141, 147, 150, 152, 160, 164, 186, 209, 322, 323, 328, 333,
            334, 335, 336, 337, 338, 358, 360, 361, 362, 445, 446, 447, 448,
            455, 456, 463, 503, 504, 505, 506, 507, 527,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/41-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji42',
      name: '毛泽东全集第42卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/42-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 28],
        ...exclude(
          [29, 534],
          [
            46, 47, 48, 49, 56, 57, 111, 112, 113, 114, 115, 116, 117, 118, 119,
            120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132,
            133, 134, 135, 136, 137, 138, 139, 153, 154, 155, 156, 159, 160,
            164, 191, 192, 219, 228, 229, 265, 274, 275, 320, 359, 372, 373,
            374, 375, 376, 377, 384, 385, 387, 388, 389, 390, 391, 392, 393,
            394, 395, 396, 399, 403, 404, 405, 406, 407, 408, 409, 410, 411,
            412, 413, 414, 415, 416, 421, 422, 423, 424, 425, 445, 453, 464,
            465, 466, 467, 468, 480, 481, 507, 508,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/42-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji43',
      name: '毛泽东全集第43卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/43-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 25],
        ...exclude(
          [26, 532],
          [
            29, 30, 33, 90, 93, 94, 96, 98, 104, 105, 136, 137, 154, 167, 168,
            169, 229, 230, 231, 232, 233, 234, 235, 242, 256, 272, 273, 278,
            279, 283, 291, 293, 294, 295, 296, 301, 302, 303, 304, 305, 306,
            307, 308, 309, 310, 311, 312, 313, 337, 338, 339, 340, 341, 342,
            346, 373, 379, 385, 389, 393, 399, 418, 419, 420, 422, 423, 424,
            428, 429, 430, 431, 432, 433, 434, 435, 445, 465, 472, 473, 474,
            475, 476, 490, 492, 496, 497, 498, 514, 516, 517, 518, 519,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/43-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji44',
      name: '毛泽东全集第44卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/44-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 25],
        ...exclude(
          [26, 534],
          [
            32, 59, 60, 65, 66, 76, 87, 95, 96, 97, 98, 103, 121, 130, 141, 143,
            162, 172, 194, 202, 203, 237, 253, 254, 255, 262, 263, 275, 276,
            277, 278, 288, 295, 315, 316, 317, 321, 322, 323, 324, 328, 330,
            340, 342, 343, 344, 349, 351, 352, 353, 354, 355, 356, 357, 358,
            364, 369, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381,
            382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394,
            395, 396, 397, 398, 399, 400, 401, 425, 428, 429, 433, 438, 439,
            440, 441, 457, 459, 467, 470, 474, 482, 483, 494, 496, 500, 501,
            503, 504, 505, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519,
            520, 529, 530, 531,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/44-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji45',
      name: '毛泽东全集第45卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/45-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 26],
        ...exclude(
          [28, 530],
          [
            42, 43, 45, 84, 93, 96, 108, 109, 110, 123, 127, 128, 148, 153, 154,
            155, 156, 157, 158, 161, 167, 173, 186, 192, 193, 201, 208, 219,
            224, 244, 250, 261, 262, 271, 277, 279, 280, 281, 290, 294, 298,
            300, 307, 314, 315, 320, 322, 324, 325, 329, 332, 337, 338, 342,
            361, 362, 364, 365, 366, 368, 372, 373, 377, 383, 392, 409, 410,
            425, 426, 427, 457, 466, 467, 470, 471, 472, 478, 492, 493, 494,
            495, 496, 504, 521,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/45-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji46',
      name: '毛泽东全集第46卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/46-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 24],
        ...exclude(
          [25, 525],
          [
            30, 31, 45, 48, 49, 54, 59, 60, 61, 62, 63, 64, 65, 69, 73, 84, 94,
            95, 96, 97, 98, 118, 130, 143, 157, 160, 173, 178, 179, 180, 181,
            187, 190, 191, 197, 199, 202, 203, 223, 258, 288, 289, 292, 294,
            332, 335, 344, 350, 367, 381, 388, 389, 390, 391, 392, 393, 394,
            395, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412,
            462, 466, 475, 477, 514, 515, 519, 520,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/46-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji47',
      name: '毛泽东全集第47卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/47-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 26],
        ...exclude(
          [27, 533],
          [
            28, 30, 40, 41, 72, 100, 113, 138, 151, 165, 167, 179, 180, 181,
            185, 186, 196, 203, 204, 205, 225, 226, 245, 246, 247, 254, 269,
            281, 282, 287, 292, 295, 314, 317, 340, 341, 342, 358, 359, 360,
            361, 362, 367, 370, 372, 375, 378, 380, 383, 403, 405, 407, 415,
            426, 427, 428, 481, 483, 484, 486, 494, 511, 512, 513, 514, 515,
            516, 517,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/47-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji48',
      name: '毛泽东全集第48卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/48-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 26],
        ...exclude(
          [27, 527],
          [
            29, 47, 48, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 66, 78, 79,
            91, 92, 96, 97, 99, 100, 105, 109, 114, 115, 117, 124, 125, 126,
            128, 169, 170, 174, 175, 177, 191, 194, 196, 203, 206, 211, 212,
            213, 214, 215, 216, 217, 225, 239, 247, 282, 285, 288, 289, 308,
            314, 316, 356, 363, 364, 365, 366, 376, 377, 378, 389, 393, 394,
            395, 399, 400, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418,
            419, 420, 421, 435, 436, 437, 438, 453, 454, 455, 456, 457, 458,
            459, 460, 466, 469, 472, 478, 479, 480, 481, 482, 483, 484, 485,
            486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498,
            499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 514,
            515, 516, 517, 519, 526,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/48-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji49',
      name: '毛泽东全集第49卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/49-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 28],
        ...exclude(
          [29, 547],
          [
            30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
            47, 48, 49, 50, 53, 54, 76, 77, 78, 79, 80, 81, 82, 83, 84, 86, 88,
            89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104,
            105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
            123, 124, 125, 126, 127, 128, 129, 143, 144, 145, 146, 147, 148,
            155, 156, 157, 158, 159, 160, 161, 162, 168, 169, 170, 171, 172,
            173, 174, 175, 176, 177, 178, 185, 186, 187, 188, 189, 190, 191,
            192, 193, 194, 195, 196, 197, 198, 205, 206, 207, 208, 209, 210,
            211, 212, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226,
            227, 232, 233, 234, 235, 236, 237, 238, 239, 240, 245, 246, 247,
            251, 255, 256, 257, 271, 303, 359, 360, 361, 362, 384, 416, 424,
            425, 442, 446, 447, 448, 470, 471, 472, 491, 492, 493, 495, 503,
            504, 505, 506, 517, 522, 536, 543, 544,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/49-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji50',
      name: '毛泽东全集第50卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/50-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 30],
        ...exclude(
          [31, 534],
          [
            33, 39, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 118,
            127, 138, 139, 146, 169, 170, 171, 197, 199, 202, 263, 264, 267,
            285, 303, 314, 317, 318, 319, 320, 327, 328, 382, 392, 401, 402,
            419, 420, 421, 422, 423, 424, 443, 446, 447, 448, 449, 450, 451,
            452, 459, 461, 475, 482, 483, 495, 496, 498, 499, 500, 501, 502,
            503, 511, 519, 524,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/50-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji51',
      name: '毛泽东全集第51卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/51-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [12, 28],
        ...exclude(
          [29, 549],
          [
            39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 55, 62, 67, 72, 73, 84, 85,
            95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 123, 126, 129,
            130, 165, 166, 167, 190, 191, 200, 202, 222, 258, 271, 284, 289,
            291, 292, 305, 306, 307, 308, 309, 310, 323, 347, 348, 349, 350,
            351, 369, 372, 374, 375, 376, 380, 400, 403, 405, 411, 412, 414,
            425, 426, 427, 428, 429, 431, 435, 440, 442, 443, 446, 447, 448,
            462, 464, 467, 477, 478, 481, 484, 485, 486, 487, 492, 493, 494,
            495, 504, 506, 509, 510, 511, 512, 514, 515, 517, 526, 533, 534,
            536, 537, 538, 544,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/51-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji52',
      name: '毛泽东全集第52卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/52-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 21],
        ...exclude(
          [22, 499],
          [
            34, 35, 36, 38, 47, 48, 54, 55, 61, 64, 73, 81, 86, 94, 98, 121,
            122, 128, 130, 133, 142, 146, 150, 163, 164, 165, 166, 167, 168,
            169, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186,
            187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199,
            200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 235, 237,
            244, 247, 250, 260, 262, 268, 273, 277, 279, 287, 293, 296, 299,
            303, 304, 306, 308, 313, 316, 325, 326, 333, 342, 352, 357, 359,
            370, 373, 376, 378, 388, 393, 397, 400, 406, 409, 414, 418, 422,
            430, 435, 437, 439, 442, 446, 449, 450, 453, 454, 496,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/archives0/mao-quanji/52-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'wanghongwen',
      name: '王洪文文集',
      internal: false,
      type: 'pdf',
      official: true,
      author: '王洪文',
      files: '/books/王洪文文集.pdf',
    },
    parser_option: {
      page_limits: [[4, 66]],
    },
    parser: wanghongwen.parse,
    path: join(normalize(__dirname), '../public/books/王洪文文集.pdf'),
  },
  {
    entity: {
      id: 'wenku',
      name: '中国文化大革命文库(第一版)',
      internal: false,
      type: 'db',
      official: false,
      author: '宋永毅',
      files: '',
    },
    parser_option: {
      page_limits: [],
    },
    parser: wenku_parser.parse,
    path: join(normalize(__dirname), '../public/TheGPCRdatabase'),
  },
  {
    entity: {
      id: 'jimi',
      name: '机密档案中新发现的毛泽东讲话',
      internal: false,
      official: false,
      type: 'epub',
      author: '',
      files: `/books/机密档案中新发现的毛泽东讲话.epub`,
    },
    parser_option: {
      page_limits: [],
    },
    parser: jimi.parse,
    path: join(
      normalize(__dirname),
      '../public/books/机密档案中新发现的毛泽东讲话.epub',
    ),
  },
  {
    entity: {
      id: 'zzj1',
      name: '中共中央政治局同志7月30日晚接见全国计划工作座谈会全体同志时的讲话',
      internal: true,
      official: true,
      author: '',
      type: 'pdf',
      files: '/books/zzj1.pdf',
    },
    parser_option: {
      page_limits: [[1, 6]],
    },
    parser: zzj1.parse,
    path: join(normalize(__dirname), '../public/books/zzj1.pdf'),
  },
  {
    entity: {
      id: 'zhangchunqiao',
      name: '春桥文录',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张春桥',
      files: '/books/zhangchunqiao.pdf',
    },
    parser_option: {
      page_limits: [[5, 290]],
    },
    parser: zhangchunqiao.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao.pdf'),
  }
].map((i) => {
  const book: Book = {
    entity: i.entity,
    parser_option: i.parser_option as ParserOption,
    path: i.path,
    parser: async (path: string, opt: ParserOption) => {
      const res = await i.parser(path, opt);
      for (const j in res) {
        const article = res[j];
        for (const part of article.parts) {
          part.text = traditionalChineseToSimpleChinese(part.text);
        }
        for (let i = 0; i < article.comments.length; ++i) {
          article.comments[i] = traditionalChineseToSimpleChinese(
            article.comments[i],
          );
        }
        article.description = traditionalChineseToSimpleChinese(
          article.description,
        );
        const id = get_article_id(article);
        const p = join(patch_dir, `[${id}][${i.entity.id}].ts`);
        if (existsSync(p)) {
          const x = await import(p);
          for (const patch of x.default) {
            if (patch.version === 2) {
              res[j] = apply_patch_v2(res[j], patch);
            } else {
              apply_patch(article, patch);
            }
          }
        }
      }
      return res;
    },
  };
  return book;
});

export default books;
