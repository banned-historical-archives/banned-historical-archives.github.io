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
  Input,
  Grid2,
  Slider,
  FormControl,
  InputLabel,
} from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import { diff_match_patch, Diff } from 'diff-match-patch';
import {
  CSSProperties,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Article, Content, Comment } from '../../types';
import { ContentType, ParserResult } from '../../types';
import { bracket_left, bracket_right, crypto_md5, sleep } from '../../utils';
import PatchableArticle from './PatchableArticle';

function PureArticle({
  description,
  comments,
  contents,
}: {
  contents: Content[];
  comments: Comment[];
  description?: string;
}) {
  const ssu = useRef<SpeechSynthesisUtterance>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>();
  const [currentTTSIndex, setCurrentTTSIndex] = useState(-1);

  useEffect(() => {
    if (currentTTSIndex < 0) return;
    ssu.current = new SpeechSynthesisUtterance(contents[currentTTSIndex].text);
    ssu.current.voice = voices.find((i) => i.name == selectedVoice)!;
    ssu.current.pitch = pitch;
    ssu.current.rate = rate;
    speechSynthesis.speak(ssu.current);

    ssu.current.onerror = (event) => console.error('发生错误：', event.error);
    ssu.current.onend = () => {
      if (contents.length - 1 > currentTTSIndex)
        setCurrentTTSIndex(currentTTSIndex + 1);
      else {
        setPlaying(false);
        ssu.current!.onend = null;
        speechSynthesis.cancel();
        setCurrentTTSIndex(-1);
      }
    };
  }, [currentTTSIndex, contents]);
  useEffect(() => {
    (async () => {
      if (!window.speechSynthesis) {
        return;
      }
      let v = speechSynthesis.getVoices();
      while (!v.length) {
        v = speechSynthesis.getVoices();
        await sleep(100);
      }
      setVoices(v.sort((a, b) => (a.lang > b.lang ? 1 : -1)));
      setSelectedVoice(
        localStorage.getItem('tts_voice') ||
          v.find((i) => i.lang.startsWith('zh_CN'))?.name ||
          v.find((i) => i.lang.startsWith('zh-CN'))?.name ||
          v.find((i) => i.name.indexOf('中国') >= 0)?.name ||
          v.find((i) => i.name.indexOf('中文') >= 0)?.name ||
          v[0]?.name,
      );
      setPitch(parseFloat(localStorage.getItem('tts_pitch') || '1'));
      setRate(parseFloat(localStorage.getItem('tts_rate') || '1'));
    })();
  }, []);

  const contentsComponent = useMemo(
    () =>
      contents.map((part, idx) => {
        const highlight = idx === currentTTSIndex;
        const x = highlight
          ? (e: any) => {
              if (e) {
                e.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                  inline: 'nearest',
                });
              }
            }
          : undefined;
        const ext_css: CSSProperties = highlight ? { color: '#cf0000' } : {};
        let s: string[] = [];
        const part_comments = comments.filter((i) => i.part_idx === part.index);
        let text = part.text;
        let t = 0;
        const texts: string[] = [];
        if (part_comments.length) {
          for (const part_comment of part_comments) {
            const p = text.substr(t, part_comment.offset - t);
            texts.push(p);
            t += p.length;
          }
          if (t < text.length) {
            texts.push(text.substr(t));
          }
        } else {
          texts.push(text);
        }
        const content: (ReactElement | string)[] = [];
        texts.forEach((text, idx) => {
          content.push(<span key={`${crypto_md5(text)}-${idx}`}>{text}</span>);
          s.push(text);
          if (part_comments.length) {
            const comment_idx = part_comments.shift()!.index;
            s.push(`〔${comment_idx}〕`);
            content.push(
              <a
                id={`comment${comment_idx}_content`}
                key={Math.random()}
                href={`#comment${comment_idx}_comment`}
                style={{ userSelect: 'none' }}
              >
                {bracket_left}
                {comment_idx}
                {bracket_right}
              </a>,
            );
          }
        });

        if (part.type === ContentType.title) s.unshift('# ');
        else if (part.type === ContentType.subtitle) s.unshift('## ');
        else if (part.type === ContentType.subtitle2) s.unshift('### ');
        else if (part.type === ContentType.subtitle3) s.unshift('#### ');

        const key = part.id;
        if (part.type === ContentType.title) {
          return (
            <Typography
              key={key}
              ref={x}
              variant="h5"
              sx={{ textAlign: 'center', margin: 4, ...ext_css }}
            >
              {content}
            </Typography>
          );
        } else if (part.type === ContentType.appellation) {
          return (
            <Typography
              key={key}
              ref={x}
              variant="body1"
              sx={{ margin: 0.5, fontWeight: 'bold', ...ext_css }}
            >
              {content}
            </Typography>
          );
        } else if (part.type === ContentType.image) {
          return (
            <img
              alt=""
              ref={x}
              key={key}
              src={part.text}
              style={{
                width: '50%',
                display: 'block',
                margin: 'auto',
                marginTop: '1.25em',
              }}
            />
          );
        } else if (part.type === ContentType.image_description) {
          return (
            <Typography
              key={key}
              ref={x}
              variant="subtitle1"
              sx={{ textAlign: 'center', marginBottom: '1.25em', ...ext_css }}
            >
              {content}
            </Typography>
          );
        } else if (part.type === ContentType.subdate) {
          return (
            <Typography
              ref={x}
              key={key}
              variant="subtitle1"
              sx={{ textAlign: 'center', ...ext_css }}
            >
              {content}
            </Typography>
          );
        } else if (part.type === ContentType.place) {
          return (
            <Typography
              ref={x}
              key={key}
              variant="subtitle1"
              sx={{ textAlign: 'center', ...ext_css }}
            >
              {content}
            </Typography>
          );
        } else if (part.type === ContentType.authors) {
          return (
            <Typography
              ref={x}
              key={key}
              variant="subtitle1"
              sx={{ textAlign: 'center', ...ext_css }}
            >
              {content}
            </Typography>
          );
        } else if (part.type === ContentType.signature) {
          return (
            <Typography
              ref={x}
              key={key}
              variant="subtitle1"
              sx={{ textAlign: 'right', ...ext_css }}
            >
              {content}
            </Typography>
          );
        } else if (part.type === ContentType.subtitle) {
          return (
            <Typography
              key={key}
              ref={x}
              variant="subtitle1"
              sx={{
                textAlign: 'center',
                fontSize: '1.5em',
                fontWeight: 'bold',
                margin: '1.25em 0 1.25em 0',
                ...ext_css,
              }}
            >
              {content}
            </Typography>
          );
        } else if (part.type === ContentType.subtitle2) {
          return (
            <Typography
              key={key}
              ref={x}
              variant="subtitle1"
              sx={{
                textAlign: 'center',
                fontSize: '1.17em',
                fontWeight: 'bold',
                margin: '1.25em 0 1.25em 0',
                ...ext_css,
              }}
            >
              {content}
            </Typography>
          );
        } else if (part.type === ContentType.subtitle3) {
          return (
            <Typography
              ref={x}
              key={key}
              variant="subtitle1"
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                margin: '0.625em 0 0.625em 0',
                ...ext_css,
              }}
            >
              {content}
            </Typography>
          );
        } else if (
          part.type === ContentType.subtitle4 ||
          part.type === ContentType.subtitle5
        ) {
          return (
            <Typography
              ref={x}
              key={key}
              variant="subtitle1"
              sx={{ textAlign: 'center', ...ext_css }}
            >
              {content}
            </Typography>
          );
        } else if (part.type === ContentType.paragraph) {
          return (
            <Typography
              key={key}
              variant="body1"
              ref={x}
              sx={{ textIndent: '2em', margin: 0.5, ...ext_css }}
            >
              {content}
            </Typography>
          );
        } else if (part.type === ContentType.quotation) {
          return (
            <Stack ref={x} spacing={1} key={key}>
              {part.text
                .split('\n')
                .filter((j) => j)
                .map((j, j_idx) => (
                  <Typography
                    variant="body1"
                    key={j_idx}
                    sx={{
                      color: 'grey',
                      padding: '0.625em 2.5em 0.625em 2.5em',
                      borderLeft: '2px solid',
                      ...ext_css,
                    }}
                  >
                    {j}
                  </Typography>
                ))}
            </Stack>
          );
        } else {
          return (
            <Typography
              key={key}
              ref={x}
              variant="body1"
              sx={{ textIndent: '2em', margin: 0.5, ...ext_css }}
            >
              {content}
            </Typography>
          );
        }
      }),
    [contents, currentTTSIndex],
  );
  const descriptionComponent = description ? (
    <>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Typography variant="h6" sx={{ mb: 2 }}>
        描述
      </Typography>
      <Stack spacing={1}>
        {description
          .split('\n')
          .filter((j) => j)
          .map((j, j_idx) => (
            <Typography variant="body1" key={j_idx}>
              {j}
            </Typography>
          ))}
      </Stack>
    </>
  ) : null;

  const commentsComponent = comments.filter((i) => i.index !== -1).length ? (
    <>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Typography variant="h6" sx={{ mb: 2 }}>
        注释
      </Typography>
      {comments
        .filter((i) => i.index !== -1)
        .map((i, i_idx) => (
          <Stack direction="row" key={i.id}>
            <span>
              <a
                id={`comment${i_idx + 1}_comment`}
                href={`#comment${i_idx + 1}_content`}
                style={{ userSelect: 'none' }}
              >
                {bracket_left}
                {i_idx + 1}
                {bracket_right}
              </a>
            </span>
            <Stack spacing={1}>
              {i.text
                .split('\n')
                .filter((j) => j)
                .map((j, j_idx) => (
                  <Typography variant="body1" key={j_idx}>
                    {j}
                  </Typography>
                ))}
            </Stack>
          </Stack>
        ))}
    </>
  ) : null;

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Button
          sx={{
            position: 'absolute',
            visibility: selectedVoice ? 'visible' : 'hidden',
            top: 4,
            left: 0,
            minWidth: 0,
            opacity: '0.5',
            width: '20px',
            height: '20px',
            borderRadius: '10px',
          }}
          ref={(e) => {
            setAnchorEl(e);
          }}
          onClick={() => {
            if (!playing) {
              setShowSettings(!showSettings);
            } else {
              setPlaying(false);
              ssu.current!.onend = null;
              speechSynthesis.cancel();
              setCurrentTTSIndex(-1);
            }
          }}
        >
          {playing ? <StopCircleIcon /> : <PlayCircleIcon />}
        </Button>
        <Popover
          open={showSettings}
          anchorEl={anchorEl}
          onClose={() => setShowSettings(false)}
          sx={{
            marginTop: '10px',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Grid2
            container
            alignItems="center"
            justifyContent="center"
            sx={{ p: 2, width: '400px' }}
            spacing={2}
            rowSpacing={1}
          >
            <Grid2 size={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">语音</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  value={selectedVoice}
                  label="语音"
                  onChange={(e) => {
                    setSelectedVoice(e.target.value);
                    localStorage.setItem('tts_voice', e.target.value);
                  }}
                >
                  {voices.map((i) => (
                    <MenuItem key={i.name} value={i.name}>
                      {i.lang}-{i.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid2>
            <Grid2 size={2}>
              <Typography>速度</Typography>
            </Grid2>
            <Grid2 size={10}>
              <Slider
                value={rate}
                valueLabelDisplay="auto"
                step={0.1}
                marks
                min={0.1}
                max={2}
                onChange={(e, value) => {
                  setRate(value as number);
                  localStorage.setItem('tts_rate', value.toString());
                }}
              />
            </Grid2>
            <Grid2 size={2}>
              <Typography>音高</Typography>
            </Grid2>
            <Grid2 size={10}>
              <Slider
                value={pitch}
                valueLabelDisplay="auto"
                step={0.1}
                marks
                min={0.1}
                max={2}
                onChange={(e, value) => {
                  setPitch(value as number);
                  localStorage.setItem('tts_pitch', value.toString());
                }}
              />
            </Grid2>
            <Grid2 size={12}>
              <Button
                variant="outlined"
                onClick={() => {
                  setPlaying(true);
                  setShowSettings(false);
                  setCurrentTTSIndex(0);
                }}
              >
                朗读
              </Button>
            </Grid2>
          </Grid2>
        </Popover>
        <div ref={containerRef}>
          {contentsComponent}
          {descriptionComponent}
          {commentsComponent}
        </div>
      </div>
    </>
  );
}

export default function ArticleComponent({
  article,
  articleId,
  comments,
  patchable,
  contents,
  publicationId,
  publicationName,
  description,
}: {
  description: string;
  articleId: string;
  publicationName?: string;
  publicationId: string;
  patchable?: boolean;
  article: ParserResult;
  comments: Comment[];
  contents: Content[];
}) {
  contents = contents.sort((a, b) => (a.index > b.index ? 1 : -1));
  comments = comments.sort((a, b) => a.index - b.index);

  return patchable ? (
    <PatchableArticle
      articleId={articleId}
      article={article}
      comments={comments}
      contents={contents}
      description={description}
      publicationId={publicationId}
      publicationName={publicationName}
    />
  ) : (
    <PureArticle
      description={description}
      comments={comments}
      contents={contents}
    />
  );
}
