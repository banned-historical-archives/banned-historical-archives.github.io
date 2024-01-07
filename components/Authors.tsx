import Chip from '@mui/material/Chip';
import Author from '../backend/entity/author';

export default function Authors({ authors }: { authors: string[] }) {
  return (
    <>
      {authors.map((author) => (
        <Chip
          key={author}
          onClick={() =>
            window.open(
              `/articles?author=${encodeURIComponent(author)}`,
              '_blank',
            )
          }
          sx={{ m: 0.3 }}
          label={author}
        />
      ))}
    </>
  );
}
