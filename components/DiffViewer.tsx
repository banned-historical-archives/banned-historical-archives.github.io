import { DiffResult } from '../types';

export function DiffViewer({ diff }: { diff?: DiffResult }) {
  if (!diff) return null;
  return (
    <>
      {diff!.map((i) => (
        <p key={i.id}>
          {i.line_diffs.map((j) => (
            <span
              key={j.id}
              style={{
                color: j.added ? 'green' : j.removed ? 'red' : 'auto',
              }}
            >
              {j.value}
            </span>
          ))}
        </p>
      ))}
    </>
  );
}
