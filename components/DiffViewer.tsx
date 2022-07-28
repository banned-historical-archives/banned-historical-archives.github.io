import { DiffResult } from '../types';
import Typography from '@mui/material/Typography';

export function DiffViewer({ diff }: { diff?: DiffResult }) {
  if (!diff) return null;
  return (
    <>
      {diff!.map((i) => (
        <Typography key={i.id} variant="body1" sx={{ margin: 0.5 }}>
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
        </Typography>
      ))}
    </>
  );
}
