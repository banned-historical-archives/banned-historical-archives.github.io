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

const default_authors = ['毛泽东', '江青', '王洪文', '张春桥', '姚文元'];
export function useAuthorFilterDialog(authors_all: string[]) {
  const [show, setAuthorDialog] = useState(false);
  const [authorFilter, setAuthorFilter] = useState<string | null>(null);
  const [authors, setAuthors] = useState<string[]>(default_authors);
  const [selected, setSelected] = useState<string>(authors_all[0]);
  const onClose = useCallback(() => setAuthorDialog(false), []);
  const onConfirm = useCallback(() => {
    setAuthors(Array.from(new Set([...default_authors, selected])));
    setAuthorFilter(selected);
    setAuthorDialog(false);
  }, [authors, selected]);
  const AuthorDialog = (
    <Dialog onClose={onClose} open={show}>
      <DialogTitle>选择作者</DialogTitle>
      <DialogContent>
        {authors_all.map((i) => (
          <Chip
            sx={{ m: 0.5 }}
            key={i}
            onClick={() => setSelected(i)}
            label={i}
            color={selected === i ? 'primary' : 'default'}
            variant={selected === i ? 'filled' : 'outlined'}
          />
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
    AuthorDialog,
    authorFilter,
    setAuthorDialog,
    setAuthorFilter,
    authors,
  };
}
