import type Tag from "../backend/entity/tag";
import { ArticleCategory, ArticleType, TagType } from "../types";
import { articleCategoryToCN, articleTypeToCN } from "./i18n";

export const tagToString = (tag: Tag) =>
  tag.type === TagType.articleType
    ? articleTypeToCN[tag.name as ArticleType]
    : tag.type === TagType.articleCategory
    ? articleCategoryToCN[tag.name as ArticleCategory]
    : tag.name;
