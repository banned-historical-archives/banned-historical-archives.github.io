import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { ReactElement, useState, useEffect, useMemo } from 'react';
import Popover from '@mui/material/Popover';
import { ArticleCategory, ArticleType, TagType } from '../types';
import { Tag } from '../backend/entities';
import { articleCategoryToCN, articleTypeToCN, tagTypeToCN} from '../utils/i18n';
import { tagToString } from '../utils';

export default function TagComponent({ tag }: { tag: Tag }) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'tag-popover' : undefined;

  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        disableRestoreFocus
        sx={{
          pointerEvents: 'none',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>{tagTypeToCN[tag.type]}</Typography>
      </Popover>
      <Chip
        onMouseEnter={handleClick}
        onMouseLeave={handleClose}
        sx={{ m: 0.3 }}
        label={tagToString(tag)}
      />
    </>
  );
};
