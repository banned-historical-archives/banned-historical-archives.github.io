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
import { Article, Content, Comment } from '../../../types';
import { CommentDiff, ContentPart, ContentType } from '../../../types';
import { bracket_left, bracket_right, md5 } from '../../../utils';

export interface InsertCommentDialogProps {
  onClose: (text?: string) => void;
}

function removeIds(p: CommentDiff): CommentDiff {
  const diff: CommentDiff = {
    ...p,
    insertBefore: p.insertBefore!.map((i) => ({ text: i.text })),
    insertAfter: p.insertAfter!.map((i) => ({ text: i.text })),
  };
  if (!diff.insertBefore!.length) {
    delete diff.insertBefore;
  }
  if (!diff.insertAfter!.length) {
    delete diff.insertAfter;
  }
  return diff;
}

function InsertCommentDialog(props: InsertCommentDialogProps) {
  const { onClose } = props;

  const [text, setText] = useState('');

  return (
    <Dialog onClose={() => onClose()} open={true}>
      <DialogTitle>插入</DialogTitle>
      <Stack spacing={2} p={2}>
        <TextField
          size="small"
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          autoFocus
        />
        <ButtonGroup>
          <Button onClick={() => onClose(text)}>确定</Button>
          <Button onClick={() => onClose()}>取消</Button>
        </ButtonGroup>
      </Stack>
    </Dialog>
  );
}

export default function CommentEditor({
  content,
  onChange,
}: {
  onChange: (commentDiff: CommentDiff) => void;
  content: string;
}) {
  const [showInsertBefore, setShowInsertBefore] = useState(false);
  const [showInsertAfter, setShowInsertAfter] = useState(false);
  const [insertBefore, setInsertBefore] = useState<
    { id?: string; text: string }[]
  >([]);
  const [insertAfter, setInsertAfter] = useState<
    { id?: string; text: string }[]
  >([]);
  const [deleted, setDeleted] = useState(!content);
  const commentDiff = useRef<CommentDiff>({
    insertBefore: [],
    insertAfter: [],
  });

  const originText = content;
  const [text, setText] = useState(originText);

  const center = (
    <Stack direction="row" sx={{ mt: 1, mb: 1 }} spacing={1}>
      <TextField
        sx={{ flex: 1 }}
        size="small"
        onChange={(e) => {
          const newCommentDiff: CommentDiff = { ...commentDiff.current };
          if (!e.target.value.length) {
            newCommentDiff.delete = true;
            setDeleted(true);
          } else {
            delete newCommentDiff.delete;
            setDeleted(false);
            const diff = new diff_match_patch().diff_main(
              originText,
              e.target.value,
            );
            if (originText) {
              if (diff.length !== 1) {
                newCommentDiff.diff = new diff_match_patch().diff_toDelta(diff);
              } else {
                delete newCommentDiff.diff;
              }
            } else {
              newCommentDiff.diff = new diff_match_patch().diff_toDelta(diff);
            }
          }
          commentDiff.current = newCommentDiff;
          onChange(removeIds(newCommentDiff));
          setText(e.target.value);
        }}
        value={text}
        multiline
      />
      <Stack spacing={1}>
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
                commentDiff.current = {
                  ...commentDiff.current,
                  delete: e.target.checked,
                };
                onChange(removeIds(commentDiff.current));
              }}
            />
          }
          label="删除"
        />
      </Stack>
    </Stack>
  );
  return (
    <>
      {insertBefore.map((i) => (
        <li key={i.id}>
          <Stack direction="row" spacing={1}>
            <TextField disabled multiline sx={{ flex: 1 }} value={i.text} />
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                commentDiff.current.insertBefore = insertBefore.filter(
                  (j) => j.id !== i.id,
                );
                setInsertBefore(commentDiff.current.insertBefore);
                onChange(removeIds(commentDiff.current));
              }}
            >
              删除
            </Button>
          </Stack>
        </li>
      ))}
      {showInsertBefore ? (
        <InsertCommentDialog
          onClose={(text) => {
            if (!text) {
              setShowInsertBefore(false);
              return;
            }
            const newInsertBefore = [
              ...insertBefore,
              {
                id: Math.random().toString(),
                text,
              },
            ];
            setInsertBefore(newInsertBefore);
            setShowInsertBefore(false);
            commentDiff.current.insertBefore = newInsertBefore;
            onChange(removeIds(commentDiff.current));
          }}
        />
      ) : null}
      {showInsertAfter ? (
        <InsertCommentDialog
          onClose={(text) => {
            if (!text) {
              setShowInsertAfter(false);
              return;
            }
            const newInsertAfter = [
              ...insertAfter,
              {
                id: Math.random().toString(),
                text,
              },
            ];
            setInsertAfter(newInsertAfter);
            setShowInsertAfter(false);
            commentDiff.current.insertAfter = newInsertAfter;
            onChange(removeIds(commentDiff.current));
          }}
        />
      ) : null}
      {deleted ? center : <li key="center">{center}</li>}
      {insertAfter.map((i) => (
        <li key={i.id}>
          <Stack direction="row" spacing={1}>
            <TextField disabled multiline sx={{ flex: 1 }} value={i.text} />
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                commentDiff.current.insertAfter = insertAfter.filter(
                  (j) => j.id !== i.id,
                );
                setInsertAfter(commentDiff.current.insertAfter);
                onChange(removeIds(commentDiff.current));
              }}
            >
              删除
            </Button>
          </Stack>
        </li>
      ))}
    </>
  );
}
