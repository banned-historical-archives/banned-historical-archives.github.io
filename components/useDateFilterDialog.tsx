import { ChangeEvent, useCallback, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';

export type DateFilter = {
  year_a?: number;
  year_b?: number;
  month_a?: number;
  month_b?: number;
  day_a?: number;
  day_b?: number;
};

function to_number(s: string) {
  const n = parseInt(s);
  if (!isNaN(n) && n != Infinity && n != -Infinity) {
    return n;
  }
  return undefined;
}

export function useDateFilterDialog(
  default_date_filter: DateFilter,
  onChange: (d: DateFilter) => void,
) {
  const dateFilter = useRef<DateFilter>(default_date_filter);
  const [show, setShow] = useState(false);
  const [_, forceUpdate] = useState(0);

  const onConfirm = useCallback(() => {
    const d = dateFilter.current;
    const res: DateFilter = {};
    if (d.year_a && d.year_b && d.year_b >= d.year_a) {
      res.year_a = d.year_a;
      res.year_b = d.year_b;
    }
    if (
      d.month_a &&
      d.month_b &&
      d.month_a >= 1 &&
      d.month_a <= 12 &&
      d.month_b >= 1 &&
      d.month_b <= 12
    ) {
      res.month_a = d.month_a;
      res.month_b = d.month_b;
    }
    if (
      d.day_a &&
      d.day_b &&
      d.day_a >= 1 &&
      d.day_a <= 31 &&
      d.day_b >= 1 &&
      d.day_b <= 31
    ) {
      res.day_a = d.day_a;
      res.day_b = d.day_b;
    }
    if (res.year_a && res.month_a && res.day_a) {
      onChange(res);
      setShow(false);
      dateFilter.current = res;
      forceUpdate((x) => x + 1);
    }
  }, []);

  const DateFilterDialog = (
    <Dialog onClose={() => setShow(false)} open={show}>
      <DialogTitle>时间过滤器</DialogTitle>
      <DialogContent>
        <Stack spacing={1}>
          <Typography variant="subtitle1">开始时间</Typography>
          <TextField
            label="年"
            value={dateFilter.current.year_a}
            size="small"
            onChange={(e) => {
              dateFilter.current.year_a = to_number(e.target.value);
              forceUpdate((x) => x + 1);
            }}
          />
          <TextField
            label="月"
            value={dateFilter.current.month_a}
            size="small"
            onChange={(e) => {
              dateFilter.current.month_a = to_number(e.target.value);
              forceUpdate((x) => x + 1);
            }}
          />
          <TextField
            label="日"
            value={dateFilter.current.day_a}
            size="small"
            onChange={(e) => {
              dateFilter.current.day_a = to_number(e.target.value);
              forceUpdate((x) => x + 1);
            }}
          />
          <Typography variant="subtitle1">结束时间</Typography>
          <TextField
            label="年"
            value={dateFilter.current.year_b}
            size="small"
            onChange={(e) => {
              dateFilter.current.year_b = to_number(e.target.value);
              forceUpdate((x) => x + 1);
            }}
          />
          <TextField
            label="月"
            value={dateFilter.current.month_b}
            size="small"
            onChange={(e) => {
              dateFilter.current.month_b = to_number(e.target.value);
              forceUpdate((x) => x + 1);
            }}
          />
          <TextField
            label="日"
            value={dateFilter.current.day_b}
            size="small"
            onChange={(e) => {
              dateFilter.current.day_b = to_number(e.target.value);
              forceUpdate((x) => x + 1);
            }}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShow(false)}>取消</Button>
        <Button onClick={onConfirm} autoFocus>
          确定
        </Button>
      </DialogActions>
    </Dialog>
  );
  return {
    DateFilterDialog,
    showDateFilterDialog: () => setShow(true),
  };
}
