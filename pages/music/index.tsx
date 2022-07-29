import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import { diff_match_patch, Diff } from 'diff-match-patch';
import Popover from '@mui/material/Popover';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { InferGetServerSidePropsType } from 'next';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Layout from '../../components/Layout';
import {
  GetStaticProps,
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
} from 'next';

import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import Paper from '@mui/material/Paper';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { init } from '../../backend/data-source';
import MusicEntity from '../../backend/entity/music';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DiffViewer } from '../../components/DiffViewer';

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const AppDataSource = await init();
  const music = await AppDataSource.manager.find(MusicEntity, {
    relations: {
      lyrics: {
        audios: true,
      },
    },
  });
  return {
    props: {
      music: JSON.parse(JSON.stringify(music)),
    },
  };
};

function Song({
  song,
  setPlayingName,
  setPlaying,
}: {
  song: MusicEntity;
  setPlayingName: Function;
  setPlaying: Function;
}) {
  const [lyricLeft, setLyricLeft] = useState(song.lyrics[0].id);
  const [lyricRight, setLyricRight] = useState(
    song.lyrics[song.lyrics.length - 1].id,
  );
  const leftContents = song.lyrics
    .find((i) => i.id === lyricLeft)!
    .content.split('\n');
  const rightContents = song.lyrics
    .find((i) => i.id === lyricRight)!
    .content.split('\n');

  let i = 0;
  const max_len = Math.max(leftContents.length, rightContents.length);
  const diff: Diff[][] = [];
  while (i < max_len) {
    const a = leftContents[i] || '';
    const b = rightContents[i] || '';
    diff.push(new diff_match_patch().diff_main(a, b));
    ++i;
  }

  return (
    <Accordion disableGutters>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id={song.id}>
        <Typography variant="h6">{song.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Divider />
        <Typography variant="subtitle1" sx={{ mt: 2, mb: 2 }}>
          演唱/演奏版本：
        </Typography>
        <Stack>
          {song.lyrics.map((lyric) => (
            <Stack key={lyric.id} sx={{ display: 'inline' }}>
              {lyric.audios.map((audio) => {
                const name = `${song.name}-${lyric.version}-${
                  audio.artist || '未知'
                }`;
                return (
                  <Button
                    key={audio.id}
                    sx={{ justifyContent: 'start' }}
                    startIcon={<PlayCircleIcon />}
                    onClick={() => {
                      setPlayingName(name);
                      setPlaying(true);
                    }}
                  >
                    {name}
                  </Button>
                );
              })}
            </Stack>
          ))}
        </Stack>
        <Divider sx={{ mt: 2 }} />
        {song.lyrics.length > 1 ? (
          <Typography variant="subtitle1" sx={{ mt: 2, mb: 2 }}>
            歌词对比：
          </Typography>
        ) : null}
        <Stack direction="row" spacing={2}>
          <Stack sx={{ flex: 1 }}>
            <Select
              size="small"
              value={lyricLeft}
              label="版本"
              sx={{ mb: 1 }}
              onChange={(e) => {
                setLyricLeft(e.target.value);
              }}
            >
              {song.lyrics.map((lyric) => (
                <MenuItem key={lyric.id} value={lyric.id}>
                  {lyric.version}
                </MenuItem>
              ))}
            </Select>
            <Stack>
              {leftContents.map((line, idx) => (
                <Typography key={idx}>{line}</Typography>
              ))}
            </Stack>
          </Stack>
          {song.lyrics.length > 1 ? (
            <>
              <Stack sx={{ flex: 1 }}>
                <Select
                  size="small"
                  value={lyricRight}
                  label="版本"
                  sx={{ mb: 1 }}
                  onChange={(e) => {
                    setLyricRight(e.target.value);
                  }}
                >
                  {song.lyrics.map((lyric) => (
                    <MenuItem key={lyric.id} value={lyric.id}>
                      {lyric.version}
                    </MenuItem>
                  ))}
                </Select>
                <Stack>
                  {rightContents.map((line, idx) => (
                    <Typography key={idx}>{line}</Typography>
                  ))}
                </Stack>
              </Stack>
              <Stack sx={{ flex: 1 }}>
                <Stack>
                  <DiffViewer diff={diff} />
                </Stack>
              </Stack>
            </>
          ) : null}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

enum RepeatType {
  all,
  shuffle,
  one,
}

function Player({
  music,
  playing,
  playingName,
  setPlaying,
  setPlayingName,
  playlist,
  repeatType,
  setRepeatType,
}: {
  repeatType: RepeatType;
  setRepeatType: Function;
  music: MusicEntity[];
  playlist: PlayList;
  playingName: string;
  playing: boolean;
  setPlaying: Function;
  setPlayingName: Function;
}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Popover
        id="music-list"
        open={!!anchorEl}
        anchorEl={anchorEl}
        disableRestoreFocus
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        PaperProps={{
          onMouseLeave: () => handleClose(),
          style: { transform: 'translateX(-10px)' },
        }}
      >
        {Object.keys(playlist).map((i) => (
          <Typography
            key={i}
            sx={{
              p: 2,
              wordWrap: 'nowrap',
              cursor: 'pointer',
              color: i === playingName ? '#cc0000' : 'inherit',
            }}
            onClick={() => {
              handleClose();
              setPlayingName(i);
              setPlaying(true);
            }}
          >
            {i}
          </Typography>
        ))}
      </Popover>
      <Box
        sx={{
          bottom: 30,
          right: 30,
          height: 320,
          position: 'fixed',
          transform: 'translateZ(0px)',
          flexGrow: 1,
          zIndex: 20,
        }}
      >
        <Paper
          sx={{
            p: 2,
            pt: 1,
            pb: 1,
            pr: 4,
            mr: -2,
            position: 'absolute',
            bottom: 16 + 56 / 2,
            transform: 'translateY(50%)',
            zIndex: 10,
            right: 70,
          }}
          onClick={handleClick}
          onMouseEnter={handleClick}
        >
          <Typography
            sx={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              width: {
                xs: '200px',
                sm: 'auto',
              },
            }}
          >
            {playingName}
          </Typography>
        </Paper>
        <SpeedDial
          ariaLabel="player"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          onClick={() => setPlaying(!playing)}
          icon={playing ? <PauseCircleIcon /> : <PlayCircleIcon />}
        >
          <SpeedDialAction
            icon={<SkipNextIcon />}
            onClick={(e) => {
              e.stopPropagation();
              if (repeatType === RepeatType.shuffle) {
                const keys = Object.keys(playlist);
                const idx = keys.findIndex((i) => i === playingName);
                let t = 0;
                while (t === idx) t = Math.floor(Math.random() * keys.length);
                setPlayingName(keys[t]);
              } else {
                const keys = Object.keys(playlist);
                const idx = keys.findIndex((i) => i === playingName);
                setPlayingName(keys[idx + 1 < keys.length ? idx + 1 : 0]);
              }
            }}
            tooltipTitle={'下一首'}
          />
          <SpeedDialAction
            icon={
              <ShuffleIcon
                sx={{
                  color:
                    repeatType === RepeatType.shuffle ? '#cc0000' : 'inherit',
                }}
              />
            }
            onClick={(e) => {
              e.stopPropagation();
              setRepeatType(RepeatType.shuffle);
            }}
            tooltipTitle={'随机播放'}
          />
          <SpeedDialAction
            icon={
              <FormatListNumberedIcon
                sx={{
                  color: repeatType === RepeatType.all ? '#cc0000' : 'inherit',
                }}
              />
            }
            onClick={(e) => {
              e.stopPropagation();
              setRepeatType(RepeatType.all);
            }}
            tooltipTitle={'顺序播放'}
          />
          <SpeedDialAction
            icon={
              <RepeatOneIcon
                sx={{
                  color: repeatType === RepeatType.one ? '#cc0000' : 'inherit',
                }}
              />
            }
            onClick={(e) => {
              e.stopPropagation();
              setRepeatType(RepeatType.one);
            }}
            tooltipTitle={'单曲循环'}
          />
        </SpeedDial>
      </Box>
    </>
  );
}
type PlayList = { [key: string]: string };
export default function Music({ music }: { music: MusicEntity[] }) {
  const [playing, setPlaying] = useState(false);
  const [repeatType, setRepeatType] = useState(RepeatType.shuffle);
  const [playingName, setPlayingName] = useState(
    `${music[0].name}-${music[0].lyrics[0].version}-${
      music[0].lyrics[0].audios[0].artist || '未知'
    }`,
  );
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playlist: PlayList = {};
  for (const m of music) {
    for (const l of m.lyrics) {
      for (const a of l.audios) {
        const name = `${m.name}-${l.version}-${a.artist || '未知'}`;
        playlist[name] = a.url;
      }
    }
  }

  useEffect(() => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (!playing) return;
    audioRef.current.src = playlist[playingName];
    audioRef.current.play().catch(() => {});
  }, [playingName, playing, playlist]);

  return (
    <Stack p={2} sx={{ height: '100%', overflow: 'scroll' }}>
      <Head>
        <title>和谐历史档案馆 Banned Historical Archives</title>
      </Head>
      <Typography variant="h4" sx={{ mb: 1 }}>
        音乐
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        主要收录无产阶级文化大革命前后创作的红色音乐，其中一类是文革后被刻意修改歌词的音乐，另一类是歌词或标题被视为敏感内容的音乐。
      </Typography>
      <audio
        ref={audioRef}
        onEnded={() => {
          if (repeatType === RepeatType.one) {
            audioRef.current!.play().catch(() => {});
          } else if (repeatType === RepeatType.all) {
            const keys = Object.keys(playlist);
            const idx = keys.findIndex((i) => i === playingName);
            setPlayingName(keys[idx + 1 < keys.length ? idx + 1 : 0]);
          } else if (repeatType === RepeatType.shuffle) {
            const keys = Object.keys(playlist);
            const idx = keys.findIndex((i) => i === playingName);
            let t = 0;
            while (t === idx) t = Math.floor(Math.random() * keys.length);
            setPlayingName(keys[t]);
          }
        }}
        src={playlist[playingName]}
        style={{ position: 'fixed', left: '100%' }}
      />
      <Player
        music={music}
        playing={playing}
        playlist={playlist}
        repeatType={repeatType}
        setPlaying={setPlaying}
        setRepeatType={setRepeatType}
        setPlayingName={setPlayingName}
        playingName={playingName}
      />
      {music.map((i) => (
        <Song
          key={i.id}
          song={i}
          setPlayingName={setPlayingName}
          setPlaying={setPlaying}
        />
      ))}
    </Stack>
  );
}

Music.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
