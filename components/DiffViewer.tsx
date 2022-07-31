import { Diff } from 'diff-match-patch';
import Typography from '@mui/material/Typography';

export function DiffViewer({ diff }: { diff?: Diff[][]}) {
  if (!diff) return null;
  return (
    <>
      {diff!.map((i, idx) => (
        <Typography key={idx} variant="body1" sx={{ margin: 0.5 }}>
          {i.map((j, idx2) => (
            <span
              key={idx2}
              style={{
                color: j[0] === 1 ? 'green' : j[0] === -1 ? 'red' : 'auto',
              }}
            >
              {j[1]}
            </span>
          ))}
        </Typography>
      ))}
    </>
  );
}
