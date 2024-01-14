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
} from '@mui/material';
import { diff_match_patch, Diff } from 'diff-match-patch';
import { ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import { Article, Content, Comment } from '../../../types';
import {
  ContentPart,
  ContentType,
  PartDiff,
  CommentDiff,
  PatchV2,
  ParserResult,
} from '../../../types';
import { bracket_left, bracket_right, md5 } from '../../../utils';
import CommentEditor from './CommentEditor';
import Part from './PartEditor';

const commit_hash = process.env.COMMIT_HASH;
export default function PatchableArticle({
  contents,
  comments,
  description,
  article,
  articleId,
  publicationId,
  publicationName,
}: {
  articleId: string;
  description?: string;
  contents: Content[];
  comments: Comment[];
  article: ParserResult;
  publicationName?: string;
  publicationId: string;
}) {
  const changes = useRef<PatchV2>({
    version: 2,
    parts: {},
    comments: {},
    description: '',
  });

  const [popoverContent, setPopoverContent] = useState('');
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  return (
    <>
      <Stack sx={{ mb: 1 }} spacing={1} direction="row">
        <Button
          variant="outlined"
          size="small"
          onClick={() =>
            window.open(
              'https://github.com/banned-historical-archives/banned-historical-archives.github.io/wiki/%E6%A0%87%E5%87%86%E5%8C%96%E6%96%87%E7%A8%BF%E5%BD%95%E5%85%A5%E4%B8%8E%E6%A0%A1%E5%AF%B9',
              '_blank',
            )
          }
        >
          校对注意事项
        </Button>
      </Stack>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        <TextField multiline value={popoverContent} />
      </Popover>
      {contents.map((content, idx) => (
        <Part
          key={content.id}
          onChange={(partDiff: PartDiff) => {
            if (
              partDiff.diff ||
              partDiff.delete ||
              (partDiff.type && partDiff.type !== content.type) ||
              partDiff.insertAfter ||
              partDiff.insertBefore
            ) {
              changes.current.parts[idx] = partDiff;
            } else {
              delete changes.current.parts[idx];
            }
          }}
          idx={idx}
          comments={comments}
          content={content}
        />
      ))}
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Typography variant="h6" sx={{ mb: 2 }}>
        描述
      </Typography>
      {((comment) => {
        return (
          <TextField
            defaultValue={comment.text}
            multiline
            onChange={(e) => {
              if (e.target.value.length === 0) {
                delete changes.current!.description;
                return;
              }
              const diff = new diff_match_patch().diff_main(
                comment.text,
                e.target.value,
              );
              if (comment.text && diff.length === 1) {
                changes.current.description = '';
              } else {
                changes.current.description =
                  new diff_match_patch().diff_toDelta(diff);
              }
            }}
          />
        );
      })(
        comments.find((i) => i.index === -1) || {
          index: -1,
          text: '',
        },
      )}
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Typography variant="h6" sx={{ mb: 2 }}>
        注释
      </Typography>
      <ol>
        {!comments.filter((i) => i.index !== -1).length ? (
          <CommentEditor
            key="virtual"
            content={''}
            onChange={(diff) => {
              if (diff.diff || diff.insertAfter || diff.insertBefore) {
                changes.current.newComments = [
                  ...(diff.insertBefore || []).map((i) => i.text),
                  ...(diff.diff
                    ? [
                        new diff_match_patch()
                          .diff_fromDelta('', diff.diff)
                          .filter((i) => i[0] !== -1)
                          .map((i) => i[1])
                          .join(''),
                      ]
                    : []),
                  ...(diff.insertAfter || []).map((i) => i.text),
                ];
              } else {
                delete changes.current.newComments;
              }
            }}
          />
        ) : (
          comments
            .filter((i) => i.index !== -1)
            .map((comment, idx) => {
              return (
                <CommentEditor
                  key={idx}
                  content={comment.text}
                  onChange={(commentDiff: CommentDiff) => {
                    if (
                      commentDiff.diff ||
                      commentDiff.delete ||
                      commentDiff.insertAfter ||
                      commentDiff.insertBefore
                    ) {
                      changes.current.comments[comment.index] = commentDiff;
                    } else {
                      delete changes.current.comments[comment.index];
                    }
                  }}
                />
              );
            })
        )}
      </ol>
      <Stack spacing={1}>
        <Button
          variant="contained"
          size="small"
          sx={{ width: 80, mt: 1 }}
          onClick={() => {
            const params = JSON.stringify({
              articleId: articleId,
              publicationId: publicationId,
              commitHash: commit_hash,
              patch: changes.current,
            });
            const url = `https://github.com/banned-historical-archives/banned-historical-archives.github.io/issues/new?title=${encodeURIComponent(
              `[OCR patch]${article.title}[${publicationName}][${articleId}][${publicationId}]`,
            )}&body=${encodeURIComponent(`{OCR补丁}
${params}
请复制以上代码在对比选项中粘贴进行预览：https://banned-historical-archives.github.io/articles/${articleId}
`)}`;
            window.open(url, '_blank');
          }}
        >
          提交变更
        </Button>
        <Typography>
          如果出现 Your request URL is too long 的错误，请点击
          <Button
            size="small"
            onClick={(e) => {
              const params = JSON.stringify({
                articleId: articleId,
                publicationId: publicationId,
                commitHash: commit_hash,
                patch: changes.current,
              });
              const text = `{OCR补丁}
${params}
请复制以上代码在对比选项中粘贴进行预览：https://banned-historical-archives.github.io/articles/${articleId}`;
              navigator.clipboard.writeText(text);
              const url = `https://github.com/banned-historical-archives/banned-historical-archives.github.io/issues/new?title=${encodeURIComponent(
                `[OCR patch]${article.title}[${publicationName}][${articleId}][${publicationId}]`,
              )}`;
              window.open(url, '_blank');
              setPopoverContent(text);
              setAnchorEl(e.currentTarget);
            }}
          >
            复制代码并跳转
          </Button>
          ，粘贴代码再提交。
        </Typography>
        <Typography>
          如果核对无误也可以提交，使其他人知道此文稿已经被校对（可多次提交，表示多次核对）
        </Typography>
      </Stack>
    </>
  );
}
