import { ChangeEvent, useCallback, useRef, useState } from 'react';
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

export function useAuthorFilterDialog(authors_all: string[], onChange: (author: string) => void) {
  const [show, setShow] = useState(false);
  const authorFilter = useRef<string | null>('');
  const [selected, setSelected] = useState<string>(authors_all[0]);
  const AuthorDialog = (
    <Dialog onClose={() => {setShow(false)}} open={show} fullWidth maxWidth="lg">
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
        <Button onClick={() => {setShow(false)}}>取消</Button>
        <Button onClick={() => {
          onChange(selected);
        }} autoFocus>
          确定
        </Button>
      </DialogActions>
    </Dialog>
  );
  return {
    AuthorDialog,
    showAuthorDialog: () => setShow(true),
  };
}
