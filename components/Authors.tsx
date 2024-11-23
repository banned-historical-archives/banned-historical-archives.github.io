import Chip from '@mui/material/Chip';

export default function Authors({
  authors,
  onClick,
}: {
  authors: string[];
  onClick?: Function;
}) {
  return (
    <>
      {authors.map((author) => (
        <Chip
          key={author}
          onClick={() => {
            if (onClick) {
              onClick(author);
            } else {
              window.open(
                `/articles?author=${encodeURIComponent(author)}`,
                '_blank',
              );
            }
          }}
          sx={{ m: 0.3 }}
          label={author}
        />
      ))}
    </>
  );
}
