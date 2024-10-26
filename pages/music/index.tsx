import { EventEmitter } from 'events';
import React, {
  ReactElement,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useState,
} from 'react';
import {
  DataGridPro,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
  useGridApiRef,
  zhCN,
} from '@mui/x-data-grid-pro';
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
import {
  Music as MusicEntity,
  MusicIndexes,
  MusicIndex,
  MusicLyric,
} from '../../types';
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

const getDetails = async (
  id: string,
  archives_id: number,
): Promise<MusicEntity> => {
  const url = `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives${archives_id}/parsed/${id.substr(
    0,
    3,
  )}/${id}/${id}.metadata`;
  const res = (await (await fetch(url)).json()) as MusicEntity;
  return res;
};

function Song({
  ee,
  id,
  archiveId,
  name,
  focusedId,
}: {
  focusedId: string;
  ee: EventEmitter;
  name: string;
  archiveId: number;
  id: string;
}) {
  const [lyricLeft, setLyricLeft] = useState(0);
  const [lyricRight, setLyricRight] = useState(0);
  const [details, setDetails] = useState<MusicEntity>();

  const leftContents = useMemo(
    () =>
      (details?.lyrics[lyricLeft] || details?.lyrics[0])?.content.split('\n'),
    [lyricLeft, details],
  );
  const rightContents = useMemo(
    () =>
      (details?.lyrics[lyricRight] || details?.lyrics[0])?.content.split('\n'),
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
  }, [lyricLeft, lyricRight, details]);
  useEffect(() => {
    if (id == focusedId)
      getDetails(id, archiveId).then((details) => {
        setDetails(details);
        setLyricRight(details.lyrics.length - 1);
      });
  }, [id, focusedId]);
  useEffect(() => {
    function listener(i: string, n: string) {
      if (i == id) {
        getDetails(id, archiveId).then((details) => {
          setDetails(details);
          setLyricRight(details.lyrics.length - 1);
        });
      }
    }
    ee.on('musicChanged', listener);
    return () => {
      ee.off('musicChanged', listener);
    };
  }, [ee, archiveId, id]);
  const [expanded, setExpanded] = useState(false);

  const accordionDetails = (
    <AccordionDetails>
      <Divider />
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 2 }}>
        演唱/演奏版本：
      </Typography>
      <Stack>
        {details?.lyrics.map((lyric, idx) => (
          <Stack key={idx} sx={{ display: 'inline' }}>
            {lyric.audios.map((audio, aid) => {
              const displayName = `${details?.name}-${lyric.version}-${
                audio.artist || '未知'
              }`;
              return (
                <Button
                  key={idx + '-' + aid}
                  sx={{ justifyContent: 'start' }}
                  startIcon={<PlayCircleIcon />}
                  onClick={() => {
                    ee.emit('musicChanged', id, name, archiveId);
                    ee.emit('lyricChanged', lyric);
                    ee.emit('artistChanged', audio.artist);
                    ee.emit('musicStart', audio.url);
                  }}
                >
                  {displayName}
                </Button>
              );
            })}
          </Stack>
        ))}
      </Stack>
      <Divider sx={{ mt: 2 }} />
      {details?.lyrics.length && details?.lyrics.length > 1 ? (
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
        {details?.lyrics.length && details?.lyrics.length > 1 ? (
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
                {details?.lyrics.map((lyric, idx) => (
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
      expanded={focusedId == id || expanded}
      disableGutters
      style={{
        flex: 1,
        margin: '5px 0 5px 0',
      }}
      onChange={(e, expanded) => {
        setExpanded(expanded);
        if (expanded) {
          getDetails(id, archiveId).then((details) => {
            setDetails(details);
          });
        }
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id={id}>
        <Typography variant="subtitle1">{name}</Typography>
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
  ee,
  indexes,
  setFocusedId,
}: {
  setFocusedId: (id: string) => void;
  ee: EventEmitter;
  indexes: MusicIndexes;
}) {
  const [playing, setPlaying] = useState(false);

  const [repeatType, setRepeatType] = useState(RepeatType.shuffle);

  const [songName, setSongName] = useState('');
  const [versionName, setVersionName] = useState('');
  const [artistName, setArtistName] = useState('');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    function lyricChanged(lyric: MusicLyric) {
      setVersionName(lyric.version);
    }
    function artistChanged(artist: string) {
      setArtistName(artist);
    }
    function musicChanged(
      id: string,
      name: string,
      archiveId: number,
      lyricIndex?: number, // -1 -> random
      audioIndex?: number, // -1 -> random
      autoplay?: boolean,
    ) {
      ee.emit('musicPause');
      setSongName(name);
      if (lyricIndex != undefined)
        getDetails(id, archiveId).then((first) => {
          if (lyricIndex == -1) {
            lyricIndex = Math.floor(Math.random() * first.lyrics.length);
          }
          ee.emit('lyricChanged', first.lyrics[lyricIndex!]);
          if (audioIndex != undefined) {
            if (audioIndex == -1) {
              audioIndex = Math.floor(
                Math.random() * first.lyrics[lyricIndex!].audios.length,
              );
            }
            ee.emit(
              'artistChanged',
              first.lyrics[lyricIndex!].audios[audioIndex].artist,
            );
            if (autoplay) {
              ee.emit(
                'musicStart',
                first.lyrics[lyricIndex!].audios[audioIndex].url,
              );
            } else {
              audioRef.current?.setAttribute(
                'src',

                first.lyrics[lyricIndex!].audios[audioIndex].url,
              );
            }
          }
        });
    }
    function musicPause() {
      setPlaying(false);
      audioRef.current?.pause();
    }
    function musicStart(url: string) {
      setPlaying(true);
      audioRef.current?.setAttribute('src', url);
      audioRef.current?.play().catch(() => {});
    }
    ee.on('musicPause', musicPause);
    ee.on('musicStart', musicStart);
    ee.on('artistChanged', artistChanged);
    ee.on('musicChanged', musicChanged);
    ee.on('lyricChanged', lyricChanged);
    return () => {
      ee.off('musicPause', musicPause);
      ee.off('musicStart', musicStart);
      ee.off('artistChanged', artistChanged);
      ee.off('musicChanged', musicChanged);
      ee.off('lyricChanged', lyricChanged);
    };
  }, []);

  const playNext = useCallback(async () => {
    if (repeatType === RepeatType.one) {
      audioRef.current?.play().catch(() => {});
    } else if (repeatType === RepeatType.all) {
      let idx = indexes.findIndex((i) => i[1] == songName);
      if (indexes.length - 1 == idx) {
        idx == 0;
      } else {
        idx++;
      }
      setFocusedId(indexes[idx][0]);
      ee.emit(
        'musicChanged',
        indexes[idx][0],
        indexes[idx][1],
        indexes[idx][2],
        0,
        0,
        true,
      );
    } else if (repeatType === RepeatType.shuffle) {
      const m = indexes[Math.floor(indexes.length * Math.random())];
      setFocusedId(m[0]);
      ee.emit('musicChanged', m[0], m[1], m[2], -1, -1, true);
    }
  }, [indexes, songName, repeatType]);

  return (
    <>
      <audio
        ref={audioRef}
        onEnded={() => {
          playNext();
        }}
        style={{ position: 'fixed', left: '100%' }}
      />
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
            {songName}-{versionName}-{artistName}
          </Typography>
        </Paper>
        <SpeedDial
          ariaLabel="player"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          onClick={() => {
            if (playing) ee.emit('musicPause');
            else {
              setPlaying(true);
              audioRef.current?.play().catch(() => {});
            }
          }}
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
export default function Music({ music }: { music: MusicIndexes }) {
  const ee = useRef(new EventEmitter());
  ee.current.setMaxListeners(9876543);
  const indexesRef = useRef(music);
  const [focusedId, setFocusedId] = useState('');
  const columns: GridColDef<{ index: MusicIndex }>[] = [
    {
      field: 'name',
      headerName: '名称',
      minWidth: 350,
      flex: 1,
      renderCell: (
        params: GridRenderCellParams<string, { index: MusicIndex }>,
      ) => {
        return (
          <Song
            key={params.row.index[0]}
            id={params.row.index[0]}
            focusedId={focusedId}
            name={params.row.index[1]}
            archiveId={params.row.index[2]}
            ee={ee.current}
          />
        );
      },
    },
    {
      field: 'tags',
      headerName: '标签',
      minWidth: 100,
      renderCell: (
        params: GridRenderCellParams<string, { index: MusicIndex }>,
      ) => {
        return null;
      },
    },
  ];

  const apiRef = useGridApiRef();
  useEffect(() => {
    function onChange(id: string) {
      const idx = indexesRef.current.findIndex((i) => i[0] == id);

      setFocusedId('');
      setTimeout(() => {
        apiRef.current.scrollToIndexes({
          colIndex: 0,
          rowIndex: idx,
        });

        setFocusedId(id);
      }, 500); // 等待收起动画结束
    }
    ee.current.on('musicChanged', onChange);
    ee.current.emit(
      'musicChanged',
      music[0][0],
      music[0][1],
      music[0][2],
      0,
      0,
    );
    return () => {
      ee.current.off('musicChanged', onChange);
    };
  }, []);

  return (
    <Stack p={2} sx={{ height: '100%', overflow: 'scroll' }}>
      <Head>
        <title>和谐历史档案馆 Banned Historical Archives</title>
      </Head>
      <Typography variant="h4" sx={{ mb: 1 }}>
        音乐
      </Typography>
      <Player ee={ee.current} indexes={music} setFocusedId={setFocusedId} />
      <Stack sx={{ flex: 1, width: '100%' }}>
        <DataGridPro
          apiRef={apiRef}
          getRowId={(row) => row.index[1]}
          localeText={zhCN.components.MuiDataGrid.defaultProps.localeText}
          getRowHeight={() => 'auto'}
          rows={music.map((i) => ({ index: i }))}
          columns={columns}
          pageSize={100}
          rowsPerPageOptions={[100]}
          disableSelectionOnClick
        />
      </Stack>
    </Stack>
  );
}

Music.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
