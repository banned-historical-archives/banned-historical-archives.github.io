import Chip from '@mui/material/Chip';
import Author from '../backend/entity/author'

export default function Authors({ authors }: { authors: Author[] }) {
  return (
    <>
      {authors.map((author) => (
        <Chip
          key={author.name}
          onClick={() =>
            window.open(
              `/articles?author=${encodeURIComponent(author.name)}`,
              '_blank',
            )
          }
          sx={{ m: 0.3 }}
          label={author.name}
        />
      ))}
    </>
  );
}
