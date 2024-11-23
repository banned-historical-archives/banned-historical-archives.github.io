import { diff_match_patch, Diff } from 'diff-match-patch';
import crypto from 'crypto';
import {
  ArticleCategory,
  ArticleType,
  ContentPart,
  ParserResult,
  Patch,
  PatchV2,
  Pivot,
  TagType,
} from '../types';
import { v4 } from 'uuid';

//  A formatted version of a popular md5 implementation.
//  Original copyright (c) Paul Johnston & Greg Holt.
//  The function itself is now 42 lines long.
export function md5(inputString: string) {
  var hc = '0123456789abcdef';
  function rh(n: number) {
    var j,
      s = '';
    for (j = 0; j <= 3; j++)
      s +=
        hc.charAt((n >> (j * 8 + 4)) & 0x0f) + hc.charAt((n >> (j * 8)) & 0x0f);
    return s;
  }
  function ad(x: number, y: number) {
    var l = (x & 0xffff) + (y & 0xffff);
    var m = (x >> 16) + (y >> 16) + (l >> 16);
    return (m << 16) | (l & 0xffff);
  }
  function rl(n: number, c: number) {
    return (n << c) | (n >>> (32 - c));
  }
  function cm(
    q: number,
    a: number,
    b: number,
    x: number,
    s: number,
    t: number,
  ) {
    return ad(rl(ad(ad(a, q), ad(x, t)), s), b);
  }
  function ff(
    a: number,
    b: number,
    c: number,
    d: number,
    x: number,
    s: number,
    t: number,
  ) {
    return cm((b & c) | (~b & d), a, b, x, s, t);
  }
  function gg(
    a: number,
    b: number,
    c: number,
    d: number,
    x: number,
    s: number,
    t: number,
  ) {
    return cm((b & d) | (c & ~d), a, b, x, s, t);
  }
  function hh(
    a: number,
    b: number,
    c: number,
    d: number,
    x: number,
    s: number,
    t: number,
  ) {
    return cm(b ^ c ^ d, a, b, x, s, t);
  }
  function ii(
    a: number,
    b: number,
    c: number,
    d: number,
    x: number,
    s: number,
    t: number,
  ) {
    return cm(c ^ (b | ~d), a, b, x, s, t);
  }
  function sb(x: string) {
    var i;
    var nblk = ((x.length + 8) >> 6) + 1;
    var blks = new Array(nblk * 16);
    for (i = 0; i < nblk * 16; i++) blks[i] = 0;
    for (i = 0; i < x.length; i++)
      blks[i >> 2] |= x.charCodeAt(i) << ((i % 4) * 8);
    blks[i >> 2] |= 0x80 << ((i % 4) * 8);
    blks[nblk * 16 - 2] = x.length * 8;
    return blks;
  }
  var i,
    x = sb(inputString),
    a = 1732584193,
    b = -271733879,
    c = -1732584194,
    d = 271733878,
    olda,
    oldb,
    oldc,
    oldd;
  for (i = 0; i < x.length; i += 16) {
    olda = a;
    oldb = b;
    oldc = c;
    oldd = d;
    a = ff(a, b, c, d, x[i + 0], 7, -680876936);
    d = ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = ff(c, d, a, b, x[i + 10], 17, -42063);
    b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = gg(b, c, d, a, x[i + 0], 20, -373897302);
    a = gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = hh(a, b, c, d, x[i + 5], 4, -378558);
    d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = hh(d, a, b, c, x[i + 0], 11, -358537222);
    c = hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = ii(a, b, c, d, x[i + 0], 6, -198630844);
    d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = ad(a, olda);
    b = ad(b, oldb);
    c = ad(c, oldc);
    d = ad(d, oldd);
  }
  return rh(a) + rh(b) + rh(c) + rh(d);
}

export const bracket_left = '〔';
export const bracket_right = '〕';

export function extract_pivots(s: string, part_idx: number): [Pivot[], string] {
  const res: Pivot[] = [];
  const exp = new RegExp(`${bracket_left}\\d+${bracket_right}`);
  while (true) {
    const idx = s.search(exp);
    if (idx == -1) {
      break;
    }
    const index = parseInt(s.match(exp)![0].substr(1));
    s = s.replace(exp, '');
    res.push({ part_idx: part_idx, offset: idx, index });
  }
  return [res, s];
}

/**
 * 1) 编辑/删除/插入段落，修改段落类型
 * 2) 编辑/删除/插入注释
 * 3) 编辑/删除描述
 */
export function apply_patch_v2(
  parserResult: ParserResult,
  patch: PatchV2,
): ParserResult {
  const { parts, comment_pivots, comments } = parserResult;
  const final_parts: ContentPart[] = [];
  const final_comments: string[] = [];
  const final_pivots: Pivot[] = [];
  for (let i in parts) {
    const idx = parseInt(i);
    if (patch.parts[i]) {
      if (patch.parts[i].insertBefore)
        for (const j of patch.parts[i].insertBefore!) {
          const [pivots, k] = extract_pivots(j.text, final_parts.length);
          final_parts.push({ type: j.type, text: k });
          final_pivots.push(...pivots);
        }
      if (!patch.parts[i].delete) {
        let final_text = parts[i].text;
        if (patch.parts[i].diff) {
          const original_text_arr = Array.from(parts[idx].text);
          // 恢复bracket
          comment_pivots
            .filter((i) => i.part_idx === idx)
            .sort((a, b) => b.index - a.index)
            .forEach((i) =>
              original_text_arr.splice(
                i.offset,
                0,
                `${bracket_left}${i.index}${bracket_right}`,
              ),
            );
          const original_text_with_brackets = original_text_arr.join('');
          final_text = new diff_match_patch()
            .diff_fromDelta(original_text_with_brackets, patch.parts[i].diff!)
            .filter((i) => i[0] !== -1)
            .map((i) => i[1])
            .join('');
        }

        const [pivots, final_text_without_brackets] = extract_pivots(
          final_text,
          final_parts.length,
        );
        final_parts.push({
          type: patch.parts[i].type || parts[i].type,
          text: final_text_without_brackets,
        });
        final_pivots.push(...pivots);
      }
      if (patch.parts[i].insertAfter)
        for (const j of patch.parts[i].insertAfter!) {
          const [pivots, k] = extract_pivots(j.text, final_parts.length);
          final_parts.push({ type: j.type, text: k });
          final_pivots.push(...pivots);
        }
    } else {
      final_pivots.push(
        ...comment_pivots
          .filter((j) => j.part_idx === idx)
          .map((j) => ({ ...j, part_idx: final_parts.length })),
      );
      final_parts.push(parts[i]);
    }
  }
  if (patch.newComments && patch.newComments.length) {
    final_comments.push(...patch.newComments);
  } else {
    for (let idx_from_0 in comments) {
      const idx_from_1 = parseInt(idx_from_0) + 1;
      if (patch.comments[idx_from_1]) {
        if (patch.comments[idx_from_1].insertBefore)
          final_comments.push(
            ...patch.comments[idx_from_1].insertBefore!.map((j) => j.text),
          );
        if (!patch.comments[idx_from_1].delete) {
          const final_text = patch.comments[idx_from_1].diff
            ? new diff_match_patch()
                .diff_fromDelta(
                  comments[idx_from_0],
                  patch.comments[idx_from_1].diff!,
                )
                .filter((i) => i[0] !== -1)
                .map((i) => i[1])
                .join('')
            : comments[idx_from_0];
          final_comments.push(final_text);
        }
        if (patch.comments[idx_from_1].insertAfter)
          final_comments.push(
            ...patch.comments[idx_from_1].insertAfter!.map((j) => j.text),
          );
      } else {
        final_comments.push(parserResult.comments[idx_from_0]);
      }
    }
  }

  const newResult: ParserResult = { ...parserResult };
  newResult.comments = final_comments;
  newResult.parts = final_parts;
  newResult.comment_pivots = final_pivots;
  if (typeof patch.description === 'string') {
    if (patch.description.length) {
      newResult.description = new diff_match_patch()
        .diff_fromDelta(parserResult.description || '', patch.description)
        .filter((i) => i[0] !== -1)
        .map((i) => i[1])
        .join('');
    }
  } else {
    newResult.description = '';
  }
  return newResult;
}

export function apply_patch(parserResult: ParserResult, patch: Patch) {
  const d = new diff_match_patch();
  const { parts, comment_pivots } = parserResult;
  Object.keys(patch.parts).forEach((i) => {
    const idx = parseInt(i);
    const text_arr = Array.from(parts[idx].text);
    comment_pivots
      .filter((i) => i.part_idx === idx)
      .sort((a, b) => b.index - a.index)
      .forEach((i) =>
        text_arr.splice(
          i.offset,
          0,
          `${bracket_left}${i.index}${bracket_right}`,
        ),
      );
    const origin_text = text_arr.join('');
    const diff = d.diff_fromDelta(origin_text, patch.parts[i]);
    const new_text = diff
      .filter((i) => i[0] !== -1)
      .map((i) => i[1])
      .join('');
    parserResult.comment_pivots = comment_pivots.filter(
      (x) => x.part_idx !== idx,
    );
    const [pivots, pure_text] = extract_pivots(new_text, idx);
    parserResult.comment_pivots.push(...pivots);
    parts[idx].text = pure_text;
  });
  Object.keys(patch.comments).forEach((i) => {
    const idx = parseInt(i);
    const diff = d.diff_fromDelta(
      parserResult.comments[idx - 1],
      patch.comments[i],
    );
    const new_text = diff
      .filter((i) => i[0] !== -1)
      .map((i) => i[1])
      .join('');
    parserResult.comments[idx - 1] = new_text;
  });
  if (patch.description) {
    const diff = d.diff_fromDelta(parserResult.description, patch.description);
    const new_text = diff
      .filter((i) => i[0] !== -1)
      .map((i) => i[1])
      .join('');
    patch.description = new_text;
  }
}

export function ensure_two_digits(a: number | undefined, fallback = '00') {
  if (!a && a !== 0) {
    return fallback;
  }
  return a < 10 ? `0${a}` : a;
}

export function crypto_md5(str: string) {
  return crypto.createHash('md5').update(str).digest('hex');
}
export function get_article_id(r: ParserResult) {
  const res = crypto_md5(
    JSON.stringify([
      r.title,
      r.dates
        .sort((a, b) =>
          `${a.year || '0000'}-${ensure_two_digits(
            a.month,
          )}-${ensure_two_digits(a.day)}` >
          `${b.year || '0000'}-${ensure_two_digits(
            b.month,
          )}-${ensure_two_digits(b.day)}`
            ? 1
            : -1,
        )
        .map(
          (a) =>
            `${a.year || '0000'}-${ensure_two_digits(
              a.month,
            )}-${ensure_two_digits(a.day)}`,
        ),
      !!r.is_range_date,
      r.authors.sort((a, b) => (a > b ? 1 : -1)),
      r.file_id || '',
    ]),
  );
  return res.substr(0, 10);
}

export async function sleep(t: number) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

export function uuid() {
  return v4();
}
