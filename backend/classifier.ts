import { ArticleType, ParserResult } from "../types";

function multi_match(a: RegExp[], b: string[]) {
  return a.reduce(
    (m, i) => b.reduce((n, j) => n || i.test(j), false) || m,
    false,
  );
}

export function get_types(parser_result: ParserResult) {
  const {title, description} = parser_result;
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
  if (
    multi_match([/评论/, /批语/, /批注/, /批示/], [title, description])
  ) {
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

function get_tags(parser_result: ParserResult) {
  // TODO
  return [];
}
