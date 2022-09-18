import path from 'path';

export function normalize(p: string) {
  return p.split(path.sep).join(path.posix.sep);
}