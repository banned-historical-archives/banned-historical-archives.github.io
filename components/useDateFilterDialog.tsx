import { ChangeEvent, useCallback, useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';

const default_date_filter = {
  year_a: 1800,
  year_b: 2200,
  month_a: 1,
  month_b: 12,
  day_a: 1,
  day_b: 31,
};

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

export function useDateFiletrDialog() {
  const [dateFilter, setDateFilter] = useState<DateFilter>(default_date_filter);
  const [dateFilterDialog, setDateFilterDialog] = useState<
    {
      show: boolean;
    } & DateFilter
  >({
    show: false,
    ...default_date_filter,
  });
  const dayAOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setDateFilterDialog((d) => ({
        ...d,
        day_a: to_number(e.target.value),
      })),
    [],
  );
  const monthAOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setDateFilterDialog((d) => ({
        ...d,
        month_a: to_number(e.target.value),
      })),
    [],
  );
  const dayBOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setDateFilterDialog((d) => ({
        ...d,
        day_b: to_number(e.target.value),
      })),
    [],
  );
  const monthBOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setDateFilterDialog((d) => ({
        ...d,
        month_b: to_number(e.target.value),
      })),
    [],
  );
  const yearBOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setDateFilterDialog((d) => ({
        ...d,
        year_b: to_number(e.target.value),
      })),
    [],
  );
  const yearAOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setDateFilterDialog((d) => ({
        ...d,
        year_a: to_number(e.target.value),
      })),
    [],
  );
  const onClose = useCallback(() => setDateFilterDialog((s) => ({ ...s, show: false })), []);
  const onConfirm = useCallback(() => {
    const d = dateFilterDialog;
    const filter: DateFilter = {};
    if (d.year_a && d.year_b && d.year_b >= d.year_a) {
      filter.year_a = d.year_a;
      filter.year_b = d.year_b;
    }
    if (
      d.month_a &&
      d.month_b &&
      d.month_a >= 1 &&
      d.month_a <= 12 &&
      d.month_b >= 1 &&
      d.month_b <= 12
    ) {
      filter.month_a = d.month_a;
      filter.month_b = d.month_b;
    }
    if (
      d.day_a &&
      d.day_b &&
      d.day_a >= 1 &&
      d.day_a <= 31 &&
      d.day_b >= 1 &&
      d.day_b <= 31
    ) {
      filter.day_a = d.day_a;
      filter.day_b = d.day_b;
    }
    if (filter.year_a && filter.month_a && filter.day_a) {
      setDateFilterDialog((s) => ({
        ...s,
        show: false,
      }));
      setDateFilter((d) => filter);
    }
  }, [dateFilterDialog]);

  const DateFilterDialog = (
    <Dialog onClose={onClose} open={dateFilterDialog.show}>
      <DialogTitle>时间过滤器</DialogTitle>
      <DialogContent>
        <Stack spacing={1}>
          <Typography variant="subtitle1">开始时间</Typography>
          <TextField
            label="年"
            value={dateFilterDialog.year_a}
            size="small"
            onChange={yearAOnChange}
          />
          <TextField
            label="月"
            value={dateFilterDialog.month_a}
            size="small"
            onChange={monthAOnChange}
          />
          <TextField
            label="日"
            value={dateFilterDialog.day_a}
            size="small"
            onChange={dayAOnChange}
          />
          <Typography variant="subtitle1">结束时间</Typography>
          <TextField
            label="年"
            value={dateFilterDialog.year_b}
            size="small"
            onChange={yearBOnChange}
          />
          <TextField
            label="月"
            value={dateFilterDialog.month_b}
            size="small"
            onChange={monthBOnChange}
          />
          <TextField
            label="日"
            value={dateFilterDialog.day_b}
            size="small"
            onChange={dayBOnChange}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
        >
          取消
        </Button>
        <Button
          onClick={onConfirm}
          autoFocus
        >
          确定
        </Button>
      </DialogActions>
    </Dialog>
  );
  return {
    DateFilterDialog,
    dateFilter,
    showDateFilterDialog: () =>
      setDateFilterDialog((d) => ({ ...d, show: true })),
  };
}