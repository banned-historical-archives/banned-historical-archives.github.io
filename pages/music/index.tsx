import React, {
  ReactElement,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useState,
} from 'react';
import Head from 'next/head';
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
import { Music as MusicEntity, MusicIndexes } from '../../types';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DiffViewer } from '../../components/DiffViewer';
import { readFile } from 'fs-extra';
import { join } from 'path';
import { Skeleton } from '@mui/material';

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const res = JSON.parse(
    (await readFile(join(process.cwd(), './music_indexes.json'))).toString(),
  ) as MusicIndexes;
  return {
    props: {
      music: res,
    },
  };
};

function Song({
  idx,
  setPlaying,
  setPlayingMusicIndex,
  setPlayingLyricIndex,
  setPlayingFileIndex,
  musicIndex,
  details,
  musicIndexes,
}: {
  musicIndex: number;
  idx: number;
  details?: MusicEntity;
  musicIndexes: MusicIndexes;
  setPlaying: Function;
  setPlayingMusicIndex: Function;
  setPlayingLyricIndex: Function;
  setPlayingFileIndex: Function;
}) {
  const [lyricLeft, setLyricLeft] = useState(0);
  const [lyricRight, setLyricRight] = useState(0);

  const leftContents = useMemo(
    () => (details?.lyrics[lyricLeft] || details?.lyrics[0])?.content.split('\n'),
    [lyricLeft, details],
  );
  const rightContents = useMemo(
    () => (details?.lyrics[lyricRight] || details?.lyrics[0])?.content.split('\n'),
    [lyricRight, details],
  );
  const diff: Diff[][] = useMemo(() => {
    if (!details) return [];
    const left = details?.lyrics[lyricLeft] || details?.lyrics[0];
    const right = details?.lyrics[lyricRight] || details?.lyrics[0];
    const leftContents = left.content.split('\n');
    const rightContents = right!.content.split('\n');
    let i = 0;
    const max_len = Math.max(leftContents.length, rightContents.length);

    const res: Diff[][] = [];
    while (i < max_len) {
      const a = leftContents[i] || '';
      const b = rightContents[i] || '';
      res.push(new diff_match_patch().diff_main(a, b));
      ++i;
    }
    return res;
  }, [musicIndex, lyricLeft, lyricRight, details]);
  const loading = !details || details?.id !== musicIndexes[idx][0];
  const accordionDetails = loading ? (
    <></>
  ) : (
    <AccordionDetails>
      <Divider />
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 2 }}>
        演唱/演奏版本：
      </Typography>
      <Stack>
        {details.lyrics.map((lyric, idx) => (
          <Stack key={idx} sx={{ display: 'inline' }}>
            {lyric.audios.map((audio, aid) => {
              const name = `${details?.name}-${lyric.version}-${
                audio.artist || '未知'
              }`;
              return (
                <Button
                  key={idx + '-' + aid}
                  sx={{ justifyContent: 'start' }}
                  startIcon={<PlayCircleIcon />}
                  onClick={() => {
                    setPlayingLyricIndex(idx);
                    setPlayingFileIndex(0);
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
      {details.lyrics.length > 1 ? (
        <Typography variant="subtitle1" sx={{ mt: 2, mb: 2 }}>
          歌词对比：
        </Typography>
      ) : null}
      <Stack direction="row" spacing={2}>
        <Stack sx={{ flex: 1 }}>
          <Select
            size="small"
            value={details?.lyrics[lyricLeft] ? lyricLeft : 0}
            label="版本"
            sx={{ mb: 1 }}
            onChange={(e) => {
              setLyricLeft(parseInt(e.target.value as string));
            }}
          >
            {details?.lyrics.map((lyric, idx) => (
              <MenuItem key={idx} value={idx}>
                {lyric.version}
              </MenuItem>
            ))}
          </Select>
          <Stack>
            {leftContents?.map((line, idx) => (
              <Typography key={idx}>{line}</Typography>
            ))}
          </Stack>
        </Stack>
        {details.lyrics.length > 1 ? (
          <>
            <Stack sx={{ flex: 1 }}>
              <Select
                size="small"
                value={details?.lyrics[lyricRight] ? lyricRight : 0}
                label="版本"
                sx={{ mb: 1 }}
                onChange={(e) => {
                  setLyricRight(parseInt(e.target.value as string));
                }}
              >
                {details.lyrics.map((lyric, idx) => (
                  <MenuItem key={idx} value={idx}>
                    {lyric.version}
                  </MenuItem>
                ))}
              </Select>
              <Stack>
                {rightContents?.map((line, idx) => (
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
  );
  return (
    <Accordion
      expanded={musicIndexes[idx][0] == details?.id}
      disableGutters
      onChange={(e, expanded) => {
        if (expanded) {
          setPlayingMusicIndex(idx);
          setPlayingLyricIndex(0);
          setPlayingFileIndex(0);
          setTimeout(() => {
            location.href = '#' + idx;
          }, 100);
        }
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id={idx.toString()}>
        <Typography variant="h6">{musicIndexes[idx][1]}</Typography>
      </AccordionSummary>
      {accordionDetails}
    </Accordion>
  );
}

enum RepeatType {
  all,
  shuffle,
  one,
}

function Player({
  playing,
  playingName,
  playNext,
  repeatType,
  setPlaying,
  setRepeatType,
}: {
  playingName: string;
  repeatType: RepeatType;
  playNext: Function;
  setRepeatType: Function;
  playing: boolean;
  setPlaying: Function;
}) {
  return (
    <>
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
              playNext();
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
export default function Music({ music }: { music: MusicIndexes }) {
  const [playing, setPlaying] = useState(false);

  const [repeatType, setRepeatType] = useState(RepeatType.shuffle);

  const [playingDetails, setPlayingDetails] = useState<MusicEntity>();
  const [playingMusicIndex, setPlayingMusicIndex] = useState(0);
  const [playingLyricIndex, setPlayingLyricIndex] = useState(0);
  const [playingFileIndex, setPlayingFileIndex] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  /*
    `${music[0].name}-${music[0].lyrics[0].version}-${
      music[0].lyrics[0].audios[0].artist || '未知'
    }`,
  );
  */

  const getDetails = useCallback(
    async (id: string, archives_id: number): Promise<MusicEntity> => {
      const url = `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives${archives_id}/parsed/${id.substr(
        0,
        3,
      )}/${id}/${id}.metadata`;
      const res = (await (await fetch(url)).json()) as MusicEntity;
      return res;
    },
    [],
  );

  useEffect(() => {
    getDetails(music[playingMusicIndex][0], music[playingMusicIndex][2]).then(
      (first) => {
        setPlayingDetails(first);
        setPlayingLyricIndex(0);
        setPlayingFileIndex(0);
      },
    );
  }, [playingMusicIndex]);

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
    const version = playingDetails?.lyrics[playingLyricIndex];
    if (!version) return;
    if (!version.audios[playingFileIndex]) return;
    audioRef.current.src = version.audios[playingFileIndex].url;
    audioRef.current.play().catch(() => {});
  }, [playingDetails, playing, playingFileIndex, playingLyricIndex]);

  const playNext = useCallback(async () => {
    if (repeatType === RepeatType.one) {
      audioRef.current!.play().catch(() => {});
    } else if (repeatType === RepeatType.all) {
      const version = playingDetails!.lyrics[playingLyricIndex];
      if (version.audios[playingFileIndex + 1]) {
        setPlayingFileIndex(playingFileIndex + 1);
      } else if (playingDetails!.lyrics[playingLyricIndex + 1]) {
        setPlayingLyricIndex(playingLyricIndex + 1);
        setPlayingFileIndex(0);
      } else if (music[playingMusicIndex + 1]) {
        setPlayingMusicIndex(playingMusicIndex + 1);
        setPlayingLyricIndex(0);
        setPlayingFileIndex(0);
        setTimeout(() => {
          location.href = '#' + (playingMusicIndex + 1);
        }, 100);
      } else {
        setPlayingMusicIndex(0);
        setPlayingLyricIndex(0);
        setPlayingFileIndex(0);
        setTimeout(() => {
          location.href = '#' + 0;
        }, 100);
      }
    } else if (repeatType === RepeatType.shuffle) {
      const m_idx = Math.floor(Math.random() * music.length);
      const m = music[m_idx];
      setPlayingMusicIndex(m_idx);
      const details = await getDetails(m[0], m[2]);
      setPlayingDetails(details);
      const l = Math.floor(details.lyrics.length * Math.random());
      setPlayingLyricIndex(l);
      setPlayingFileIndex(
        Math.floor(details.lyrics[l].audios.length * Math.random()),
      );
      setTimeout(() => {
        location.href = '#' + m_idx;
      }, 100);
    }
  }, [
    playingDetails,
    playingMusicIndex,
    playingFileIndex,
    playingLyricIndex,
    repeatType,
  ]);

  return (
    <Stack p={2} sx={{ height: '100%', overflow: 'scroll' }}>
      <Head>
        <title>和谐历史档案馆 Banned Historical Archives</title>
      </Head>
      <Typography variant="h4" sx={{ mb: 1 }}>
        音乐
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        多媒体资料包括音乐及歌词、电影、照片、录音等。目前主要收录社会主义中国创作的红色音乐。
      </Typography>
      <audio
        ref={audioRef}
        onEnded={() => {
          playNext();
        }}
        src={
          playingDetails?.lyrics[playingLyricIndex].audios[playingFileIndex].url
        }
        style={{ position: 'fixed', left: '100%' }}
      />
      <Player
        playing={playing}
        playNext={playNext}
        repeatType={repeatType}
        playingName={`${playingDetails?.name}-${
          playingDetails?.lyrics[playingLyricIndex]?.version
        }-${
          playingDetails?.lyrics[playingLyricIndex]?.audios[playingFileIndex]
            ?.artist || '未知'
        }`}
        setRepeatType={setRepeatType}
        setPlaying={setPlaying}
      />
      {music.map((i, idx) => (
        <Song
          key={idx}
          musicIndex={playingMusicIndex}
          idx={idx}
          details={
            music[playingMusicIndex][0] === playingDetails?.id
              ? playingDetails
              : undefined
          }
          setPlaying={setPlaying}
          setPlayingLyricIndex={setPlayingLyricIndex}
          setPlayingMusicIndex={setPlayingMusicIndex}
          setPlayingFileIndex={setPlayingFileIndex}
          musicIndexes={music}
        />
      ))}
    </Stack>
  );
}

Music.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
