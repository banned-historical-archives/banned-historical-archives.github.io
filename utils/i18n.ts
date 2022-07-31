import { ArticleCategory, ArticleType, TagType } from "../types";

export const tagTypeToCN: { [key in TagType]: string } = {
  articleCategory: '文稿大类',
  articleType: '文稿类型',
  place: '地点',
  character: '人物',
  issuer: '发行机构',
  subject: '主题',
};

export const articleCategoryToCN: { [key in ArticleCategory]: string } = {
  centralFile: '中央文件',
  editorial: '重要报刊和社论',
  keyFigures: '关键人物文稿',
  keyPapersFromTheMasses: '群众运动重要文献',
};

export const articleTypeToCN: { [key in ArticleType]: string } = {
  writings: '文章',
  mail: '书信',
  lecture: '发言',
  talk: '对话',
  declaration: '宣言',
  instruction: '指示',
  comment: '批示',
  telegram: '通讯',
};
