import {
  Checkbox,
  Button,
  Divider,
  MenuItem,
  Popover,
  Select,
  Stack,
  TextField,
  Typography,
  FormControlLabel,
  Menu,
  Dialog,
  DialogTitle,
  ButtonGroup,
} from '@mui/material';
import { diff_match_patch, Diff } from 'diff-match-patch';
import { ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import {
  Content,
  Comment,
  ContentPart,
  ContentType,
  PartDiff,
} from '../../../types';
import { bracket_left, bracket_right, md5 } from '../../../utils';

export interface InsertPartDialogProps {
  onClose: (type?: ContentType, text?: string) => void;
}

function InsertPartDialog(props: InsertPartDialogProps) {
  const { onClose } = props;

  const [text, setText] = useState('');
  const [type, setType] = useState(ContentType.paragraph);

  return (
    <Dialog onClose={() => onClose()} open={true}>
      <DialogTitle>插入段落</DialogTitle>
      <Stack spacing={2} p={2}>
        <TextField
          size="small"
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          autoFocus
        />
        <Typography>类型：</Typography>
        <Select
          sx={{ width: 130 }}
          size="small"
          defaultValue={type}
          onChange={(e) => {
            setType(e.target.value as ContentType);
          }}
        >
          {Object.keys(ContentType).map((i) => (
            <MenuItem key={i} value={i}>
              {i}
            </MenuItem>
          ))}
        </Select>
        <ButtonGroup>
          <Button onClick={() => onClose(type, text)}>确定</Button>
          <Button onClick={() => onClose()}>取消</Button>
        </ButtonGroup>
      </Stack>
    </Dialog>
  );
}

function removeIds(p: PartDiff): PartDiff {
  const diff: PartDiff = {
    ...p,
    insertBefore: p.insertBefore!.map((i) => ({ type: i.type, text: i.text })),
    insertAfter: p.insertAfter!.map((i) => ({ type: i.type, text: i.text })),
  };
  if (!diff.insertBefore!.length) {
    delete diff.insertBefore;
  }
  if (!diff.insertAfter!.length) {
    delete diff.insertAfter;
  }
  return diff;
}

export default function Part({
  idx,
  content,
  comments,
  onChange,
}: {
  onChange: (partDiff: PartDiff) => void;
  idx: number;
  content: Content;
  comments: Comment[];
}) {
  const [showInsertBefore, setShowInsertBefore] = useState(false);
  const [showInsertAfter, setShowInsertAfter] = useState(false);
  const [insertBefore, setInsertBefore] = useState<
    (ContentPart & { id?: string })[]
  >([]);
  const [insertAfter, setInsertAfter] = useState<
    (ContentPart & { id?: string })[]
  >([]);
  const [deleted, setDeleted] = useState(false);
  const partDiff = useRef<PartDiff>({
    insertBefore: [],
    insertAfter: [],
  });

  const originText = useMemo(() => {
    const text_arr = Array.from(content.text);
    comments
      .filter((i) => i.part_idx === idx)
      .sort((a, b) => b.index - a.index)
      .forEach((i) =>
        text_arr.splice(
          i.offset,
          0,
          `${bracket_left}${i.index}${bracket_right}`,
        ),
      );
    return text_arr.join('');
  }, [content, comments, idx]);

  const [text, setText] = useState(originText);

  return (
    <>
      {insertBefore.map((i) => (
        <Stack key={i.id} direction="row" spacing={1}>
          <TextField disabled multiline sx={{ flex: 1 }} value={i.text} />
          <Typography variant="caption">{i.type}</Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              partDiff.current.insertBefore = insertBefore.filter(
                (j) => j.id !== i.id,
              );
              setInsertBefore(partDiff.current.insertBefore);
              onChange(removeIds(partDiff.current));
            }}
          >
            删除
          </Button>
        </Stack>
      ))}
      {showInsertBefore ? (
        <InsertPartDialog
          onClose={(type, text) => {
            if (!type || !text) {
              return;
            }
            const newInsertBefore = [
              ...insertBefore,
              {
                id: Math.random().toString(),
                type,
                text,
              },
            ];
            setInsertBefore(newInsertBefore);
            setShowInsertBefore(false);
            partDiff.current.insertBefore = newInsertBefore;
            onChange(removeIds(partDiff.current));
          }}
        />
      ) : null}
      {showInsertAfter ? (
        <InsertPartDialog
          onClose={(type, text) => {
            if (!type || !text) {
              return;
            }
            const newInsertAfter = [
              ...insertAfter,
              {
                id: Math.random().toString(),
                type,
                text,
              },
            ];
            setInsertAfter(newInsertAfter);
            setShowInsertAfter(false);
            partDiff.current.insertAfter = newInsertAfter;
            onChange(removeIds(partDiff.current));
          }}
        />
      ) : null}
      <Stack direction="row" sx={{ mt: 1, mb: 1 }} spacing={1}>
        <TextField
          sx={{ flex: 1 }}
          size="small"
          key={content.id}
          onChange={(e) => {
            const newPartDiff: PartDiff = { ...partDiff.current };
            if (!e.target.value.length) {
              newPartDiff.delete = true;
              delete newPartDiff.diff;
              setDeleted(true);
            } else {
              delete newPartDiff.delete;
              setDeleted(false);
              const diff = new diff_match_patch().diff_main(
                originText,
                e.target.value,
              );
              if (diff.length !== 1 || !originText) {
                newPartDiff.diff = new diff_match_patch().diff_toDelta(diff);
              } else {
                delete newPartDiff.diff;
              }
            }
            partDiff.current = newPartDiff;
            onChange(removeIds(newPartDiff));
            setText(e.target.value);
          }}
          value={text}
          multiline
        />
        <Stack spacing={1}>
          <Select
            sx={{ width: 130 }}
            size="small"
            defaultValue={content.type}
            onChange={(e) => {
              partDiff.current = {
                ...partDiff.current,
                type: e.target.value as ContentType,
              };
              onChange(removeIds(partDiff.current));
            }}
          >
            {Object.keys(ContentType).map((i) => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
          <Button
            size="small"
            variant="outlined"
            onClick={() => setShowInsertBefore(true)}
          >
            上方插入
          </Button>
          <Button
            size="small"
            variant="outlined"
            onClick={() => setShowInsertAfter(true)}
          >
            下方插入
          </Button>
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={deleted}
                onChange={(e) => {
                  if (!text.length) {
                    return;
                  }
                  setDeleted(e.target.checked);
                  partDiff.current = {
                    ...partDiff.current,
                    delete: e.target.checked,
                  };
                  onChange(removeIds(partDiff.current));
                }}
              />
            }
            label="删除"
          />
        </Stack>
      </Stack>
      {insertAfter.map((i) => (
        <Stack key={i.id} direction="row" spacing={1}>
          <TextField disabled multiline sx={{ flex: 1 }} value={i.text} />
          <Typography variant="caption">{i.type}</Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              partDiff.current.insertAfter = insertAfter.filter(
                (j) => j.id !== i.id,
              );
              setInsertAfter(partDiff.current.insertAfter);
              onChange(removeIds(partDiff.current));
            }}
          >
            删除
          </Button>
        </Stack>
      ))}
    </>
  );
}
