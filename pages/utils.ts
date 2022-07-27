import * as Diff from 'diff';
import { DiffResult, LineDiff } from "../types";

export function diff(
  contents_a: string[],
  contents_b: string[],
) {
  let i = 0;
  const a_diff: DiffResult = [];
  while (i < contents_a.length && i < contents_b.length) {
    const line_diffs: LineDiff[] = [];
    a_diff.push({ line_diffs, id: Math.random().toString() });
    const line_diff = Diff.diffChars(contents_a[i], contents_b[i]);
    for (const r of line_diff) {
      line_diffs.push({
        id: Math.random().toString(),
        removed: r.removed,
        added: r.added,
        value: r.value,
      });
    }
    ++i;
  }
  if (contents_a.length != contents_b.length) {
    const max_len = Math.max(contents_a.length, contents_b.length);
    const target =
      contents_a.length > contents_b.length ? contents_a : contents_b;
    while (i < max_len) {
      a_diff.push({
        line_diffs: [
          {
            id: Math.random().toString(),
            removed: target === contents_a ? false : true,
            added: target === contents_a ? true : false,
            value: target[i],
          },
        ],
        id: Math.random().toString(),
      });
      ++i;
    }
  }
  return a_diff;
}