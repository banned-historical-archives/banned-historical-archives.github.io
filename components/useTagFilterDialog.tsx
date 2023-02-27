import { ChangeEvent, useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Chip } from '@mui/material';
import { Tag } from '../backend/entities';
import { TagType } from '../types';

export function useTagFilterDialog(
  tags_all: Map<string, Tag>,
  tags_all_order_by_type: Map<TagType, Map<string, Tag>>,
) {
  const [show, setTagDialog] = useState(false);
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  const default_tags = Array.from(
    tags_all_order_by_type.get(TagType.articleType)?.values() || [],
  );
  const [tags, setTags] = useState<Tag[]>(default_tags);
  const [selected, setSelected] = useState<string>(
    tags_all[Symbol.iterator]().next().value
      ? tags_all[Symbol.iterator]().next().value[1].id
      : '',
  );
  const onClose = useCallback(() => setTagDialog(false), []);
  const onConfirm = useCallback(() => {
    setTags(
      Array.from(new Set([...default_tags.map((i) => i.id), selected])).map(
        (i) => tags_all.get(i)!,
      ),
    );
    setTagFilter(selected);
    setTagDialog(false);
  }, [tags, selected]);
  const TagDialog = (
    <Dialog onClose={onClose} open={show}>
      <DialogTitle>选择标签</DialogTitle>
      <DialogContent>
        {Array.from(tags_all_order_by_type.keys()).map((type) => (
          <>
            <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>
              {type}：
            </Typography>
            {Array.from(tags_all_order_by_type.get(type)!.values()).map(
              (tag) => (
                <Chip
                  sx={{ m: 0.5 }}
                  key={tag.id}
                  onClick={() => setSelected(tag.id)}
                  label={tag.name}
                  color={selected === tag.id ? 'primary' : 'default'}
                  variant={selected === tag.id ? 'filled' : 'outlined'}
                />
              ),
            )}
          </>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>取消</Button>
        <Button onClick={onConfirm} autoFocus>
          确定
        </Button>
      </DialogActions>
    </Dialog>
  );
  return {
    TagDialog,
    tagFilter,
    setTagDialog,
    setTagFilter,
    tags,
  };
}
