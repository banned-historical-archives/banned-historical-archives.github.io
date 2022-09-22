import path from 'path';

export function normalize(p: string) {
  return p.split(path.sep).join(path.posix.sep);
}

export function exclude(range: [number, number], n: number[]) {
  let start = range [0];
  const res: [number, number][] = [];
  for (let i of n) {
    if (start > i - 1) {
      start = i + 1;
      continue;
    }
    res.push([start, i - 1]);
    start = i + 1;
  }
  res.push([start, range[1]]);
  return res;
}