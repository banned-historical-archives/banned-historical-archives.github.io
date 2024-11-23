import { ChangeEvent, useCallback, useMemo, useRef, useState } from 'react';
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
import {
  DataGridPro,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from '@mui/x-data-grid-pro';
import { zhCN } from '@mui/x-data-grid/locales';

export function useAuthorFilterDialog(
  authors_all: string[],
  onChange: (author: string) => void,
) {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<string>(authors_all[0]);

  const columns = useRef<GridColDef[]>([
    {
      field: 'name',
      headerName: '作者',
      minWidth: 350,
      flex: 1,
      renderCell: (
        params: GridRenderCellParams<{ name: string; selected: boolean }>,
      ) => {
        return (
          <Chip
            sx={{ m: 0.5 }}
            key={params.row.name}
            onClick={() => {
              setSelected(params.row.name);
            }}
            label={params.row.name}
            color={params.row.selected ? 'primary' : 'default'}
            variant={params.row.selected ? 'filled' : 'outlined'}
          />
        );
      },
    },
  ]);
  const authors = useMemo(
    () => authors_all.map((i) => ({ name: i, selected: selected == i })),
    [authors_all, selected],
  );
  const AuthorDialog = (
    <Dialog
      onClose={() => {
        setShow(false);
      }}
      open={show}
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle>选择作者</DialogTitle>
      <DialogContent sx={{ height: 600 }}>
        <DataGridPro
          headerFilters
          disableColumnFilter
          getRowId={(row) => row.name}
          disableRowSelectionOnClick
          rows={authors}
          columns={columns.current}
          localeText={zhCN.components.MuiDataGrid.defaultProps.localeText}
          pageSizeOptions={[100]}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setShow(false);
          }}
        >
          取消
        </Button>
        <Button
          onClick={() => {
            onChange(selected);
            setShow(false);
          }}
          autoFocus
        >
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
