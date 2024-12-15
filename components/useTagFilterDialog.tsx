import { ChangeEvent, useCallback, useEffect, useState } from 'react';
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
import { TagType, Tag } from '../types';

export function useTagFilterDialog(
  tags_all: Tag[],
  tags_all_order_by_type: Map<string, Map<string, Tag>>,
) {
  const [show, setTagDialog] = useState(false);
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  const [tags, setTags] = useState<Tag[]>([]);
  const [selected, setSelected] = useState<Tag | null>(
    tags_all.length ? tags_all[0] : null,
  );
  const onClose = useCallback(() => setTagDialog(false), []);
  const [default_tags, setDefaultTags] = useState<Tag[]>([]);
  useEffect(() => {
    const t = Array.from(
      tags_all_order_by_type.get(TagType.articleType)?.values() || [],
    );
    setDefaultTags(t);
    setTags(t);
  }, [tags_all_order_by_type]);
  const onConfirm = useCallback(() => {
    setTags(selected ? [...default_tags, selected] : default_tags);
    setTagFilter(selected ? selected.id! : null);
    setTagDialog(false);
  }, [selected, default_tags]);
  const TagDialog = (
    <Dialog onClose={onClose} open={show} fullWidth maxWidth="lg">
      <DialogTitle>选择标签</DialogTitle>
      <DialogContent>
        {Array.from(tags_all_order_by_type.keys()).map((type) => (
          <div key={type}>
            <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>
              {type}：
            </Typography>
            {Array.from(tags_all_order_by_type.get(type)!.values())
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((tag) => (
                <Chip
                  sx={{ m: 0.5 }}
                  key={tag.id}
                  onClick={() => setSelected(tag)}
                  label={tag.name}
                  color={selected?.id === tag.id ? 'primary' : 'default'}
                  variant={selected?.id === tag.id ? 'filled' : 'outlined'}
                />
              ))}
          </div>
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
