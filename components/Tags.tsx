import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { ReactElement, useState, useEffect, useMemo } from 'react';
import Popover from '@mui/material/Popover';
import { Tag } from '../types';

export default function Tags({
  tags,
  onClick,
}: {
  tags: Tag[];
  onClick?: Function;
}) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [label, setLabel] = useState('');

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Popover
        open={open}
        anchorEl={anchorEl}
        disableRestoreFocus
        sx={{
          pointerEvents: 'none',
          marginTop: '10px',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 1 }}>{label}</Typography>
      </Popover>

      {tags.map((tag) => (
        <Chip
          key={tag.type + '##' + tag.name}
          onMouseEnter={(event) => {
            setLabel(tag.type);
            setAnchorEl(event.currentTarget);
          }}
          onMouseLeave={handleClose}
          onClick={() => {
            if (onClick) {
              onClick(tag);
            } else {
              window.open(
                `/articles?tag=${encodeURIComponent(tag.name)}`,
                '_blank',
              );
            }
          }}
          sx={{ m: 0.3, lineHeight: '34px', float: 'left' }}
          label={tag.name}
        />
      ))}
    </>
  );
}
