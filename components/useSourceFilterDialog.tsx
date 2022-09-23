import { ChangeEvent, useCallback, useState } from "react";
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
import { Chip } from "@mui/material";

const default_sources = ['毛泽东选集', '毛泽东全集', '毛泽东文集', '中国文化大革命文库'];
export function useSourceFilterDialog(sources_all: string[]) {
  const [show, setSourceDialog] = useState(false);
  const [sourceFilter, setSourceFilter] = useState<string | null>(null);
  const [sources, setSources] = useState<string[]>(default_sources);
  const [selected, setSelected] = useState<string>(sources_all[0]);
  const onClose = useCallback(() => setSourceDialog(false), []);
  const onConfirm = useCallback(() => {
    setSources(Array.from(new Set([...default_sources, selected])));
    setSourceFilter(selected);
    setSourceDialog(false);
  }, [sources, selected]);
  const SourceDialog = (
    <Dialog onClose={onClose} open={show}>
      <DialogTitle>选择来源</DialogTitle>
      <DialogContent>
        {sources_all.map((i) => (
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
    SourceDialog,
    sourceFilter,
    setSourceDialog,
    setSourceFilter,
    sources,
  }
}