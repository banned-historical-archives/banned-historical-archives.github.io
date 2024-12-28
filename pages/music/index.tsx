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
  GridFilterModel,
  GridRenderCellParams,
  GridValueGetter,
  useGridApiRef,
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
  Tag,
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
import { Chip, Grid2, Skeleton } from '@mui/material';
import { GridApiPro } from '@mui/x-data-grid-pro/models/gridApiPro';
import Tags from '../../components/Tags';
import { zhCN } from '@mui/x-data-grid/locales';

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
}: {
  ee: EventEmitter;
  name: string;
  archiveId: number;
  id: string;
}) {
  const [lyricLeft, setLyricLeft] = useState(0);
  const [lyricRight, setLyricRight] = useState(0);
  const [details, setDetails] = useState<MusicEntity>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetails(id, archiveId).then((res) => {
      setLoading(false);
      setDetails(res);
      setLyricRight(res.lyrics.length - 1);
    });
  }, []);

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

  if (loading)
    return (
      <Stack padding="20px" spacing="10px">
        <Skeleton variant="rectangular" width={'100%'} height={20} />
        <Skeleton variant="rectangular" width={'100%'} height={20} />
        <Skeleton variant="rectangular" width={'100%'} height={20} />
        <Skeleton variant="rectangular" width={'100%'} height={20} />
      </Stack>
    );
  return (
    <Stack padding="20px">
      <Paper sx={{ flex: 1, mx: 'auto', p: '20px', width: '100%' }}>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          演唱/演奏版本：
        </Typography>
        <Stack>
          {details?.lyrics.map((lyric, idx) => (
            <Stack key={idx} sx={{ display: 'inline' }}>
              {lyric.audios.map((audio, aid) => {
                const displayName = `${details?.name}-${lyric.version}-${
                  audio.artists.map((i) => `${i.name}(${i.type})`).join(' ') ||
                  '未知'
                }`;
                return (
                  <Button
                    key={idx + '-' + aid}
                    sx={{ justifyContent: 'start' }}
                    startIcon={<PlayCircleIcon />}
                    onClick={() => {
                      ee.emit('musicChanged', id, name, archiveId);
                      ee.emit('lyricChanged', lyric);
                      ee.emit('artistChanged', audio.artists);
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
              sx={{
                mb: 1,
                display:
                  details?.lyrics.length && details?.lyrics.length > 1
                    ? 'block'
                    : 'none',
              }}
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
            <Paper sx={{ p: '20px' }}>
              {leftContents?.map((line, idx) => (
                <Typography key={idx}>{line}</Typography>
              ))}
            </Paper>
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
                <Paper sx={{ p: '20px' }}>
                  {rightContents?.map((line, idx) => (
                    <Typography key={idx}>{line}</Typography>
                  ))}
                </Paper>
              </Stack>
              <Stack sx={{ flex: 1, pt: '48px' }}>
                <Paper sx={{ p: '20px' }}>
                  <DiffViewer diff={diff} />
                </Paper>
              </Stack>
            </>
          ) : null}
        </Stack>
      </Paper>
    </Stack>
  );
}

enum RepeatType {
  all,
  shuffle,
  one,
}

function Player({
  apiRef,
  ee,
}: {
  apiRef: React.MutableRefObject<GridApiPro>;
  ee: EventEmitter;
}) {
  const [playing, setPlaying] = useState(false);

  const [repeatType, setRepeatType] = useState(RepeatType.shuffle);

  const [songName, setSongName] = useState('');
  const [versionName, setVersionName] = useState('');
  const [artistName, setArtistName] = useState('');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const curId = useRef('');

  useEffect(() => {
    function lyricChanged(lyric: MusicLyric) {
      setVersionName(lyric.version);
    }
    function artistChanged(artists: { name: string; type: string }[]) {
      setArtistName(artists.map((i) => `${i.name}(${i.type})`).join(' '));
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
      curId.current = id;
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
              first.lyrics[lyricIndex!].audios[audioIndex].artists,
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
      const sorted = apiRef.current
        .getSortedRowIds()
        .filter((i) => apiRef.current.state.visibleRowsLookup[i]);
      let idx = apiRef.current.getRowIndexRelativeToVisibleRows(curId.current);
      if (sorted.length - 1 == idx) {
        idx = 0;
      } else if (idx >= 0) {
        idx++;
      } else {
        idx = 0;
      }
      const row = apiRef.current.getRow(sorted[idx]);
      ee.emit('musicChanged', row.id, row.name, row.archiveId, 0, 0, true);
    } else if (repeatType === RepeatType.shuffle) {
      const row_ids = Object.keys(
        apiRef.current.state.visibleRowsLookup,
      ).filter((i) => apiRef.current.state.visibleRowsLookup[i]);

      const m = Math.floor(row_ids.length * Math.random());
      const row = apiRef.current.getRow(row_ids[m]);
      ee.emit('musicChanged', row.id, row.name, row.archiveId, -1, -1, true);
    }
  }, [apiRef, repeatType]);

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

type Column = {
  id: string;
  archiveId: number;
  name: string;
  nLyrics: number;
  tags: string[];
  composers: string[];
  lyricists: string[];
  artists: { name: string; type: string }[];
  sources: string[];
  art_forms: string[];
};
export default function Music() {
  const ee = useRef(new EventEmitter());
  ee.current.setMaxListeners(9876543);
  const filterModelRef = useRef<GridFilterModel>({ items: [] });
  const [indexes, setIndexes] = useState<Column[]>([]);
  const apiRef = useGridApiRef();
  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(
          'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives.github.io/refs/heads/indexes/indexes/music.json',
        )
      ).json();
      setIndexes(
        data.map((i: any) => ({
          id: i[0],
          name: i[1],
          archiveId: i[2],
          tags: i[4],
          nLyrics: i[3],
          composers: i[5],
          art_forms: i[9],
          lyricists: i[6],
          artists: i[7],
          sources: i[8],
        })),
      );
      setTimeout(() => {
        const rows = apiRef.current.getSortedRows();
        const row = rows[0];
        ee.current.emit('musicChanged', row.id, row.name, row.archiveId, 0, 0);
      }, 500);
    })();
  }, []);
  const buildHeaderOnClick = useCallback((field: string) => {
    return (t: Tag) => {
      const newFilter: GridFilterModel = {
        ...filterModelRef.current,
        items: [
          ...filterModelRef.current.items.filter((i) => i.field != field),
          {
            id: field,
            field: field,
            operator: 'contains',
            value: t.name,
          },
        ],
      };
      apiRef.current.setFilterModel(newFilter);
      filterModelRef.current = newFilter;
    };
  }, []);
  const columns: GridColDef<Column>[] = useMemo(
    () => [
      {
        field: 'name',
        headerName: '名称',
        minWidth: 250,
        flex: 1,
        valueGetter: (name: string) => name,
        renderCell: (params: GridRenderCellParams<Column>) => {
          return params.row.name;
        },
      },
      {
        field: 'composers',
        headerName: '作曲',
        minWidth: 150,
        valueGetter: (_: any, row: Column) => row.composers.join(','),
        renderCell: (params: GridRenderCellParams<Column>) => {
          return (
            <div style={{ overflow: 'scroll', height: '100%' }}>
              <Tags
                tags={params.row.composers.map((i) => ({
                  name: i,
                  type: 'composer',
                }))}
                onClick={buildHeaderOnClick('composers')}
              />
            </div>
          );
        },
      },
      {
        field: 'lyricists',
        headerName: '作词',
        valueGetter: (_: any, row: Column) => row.lyricists.join(','),
        minWidth: 150,
        renderCell: (params: GridRenderCellParams<Column>) => {
          return (
            <div style={{ overflow: 'scroll', height: '100%' }}>
              <Tags
                tags={params.row.lyricists.map((i) => ({
                  name: i,
                  type: 'lyricist',
                }))}
                onClick={buildHeaderOnClick('lyricists')}
              />
            </div>
          );
        },
      },
      {
        field: 'artists',
        headerName: '艺术家',
        valueGetter: (_: any, row: Column) =>
          row.artists.map((i) => i.name).join(','),
        minWidth: 150,
        renderCell: (params: GridRenderCellParams<Column>) => {
          return (
            <div style={{ overflow: 'scroll', height: '100%' }}>
              <Tags
                tags={params.row.artists.map((i) => ({
                  name: i.name,
                  type: i.type,
                }))}
                onClick={buildHeaderOnClick('artists')}
              />
            </div>
          );
        },
      },
      {
        field: 'sources',
        headerName: '来源',
        valueGetter: (_: any, row: Column) => row.sources.join(','),
        minWidth: 150,
        renderCell: (params: GridRenderCellParams<Column>) => {
          return (
            <div style={{ overflow: 'scroll', height: '100%' }}>
              <Tags
                tags={params.row.sources.map((i) => ({
                  name: i,
                  type: 'source',
                }))}
                onClick={buildHeaderOnClick('sources')}
              />
            </div>
          );
        },
      },
      {
        field: 'art_forms',
        headerName: '艺术形式',
        minWidth: 150,
        valueGetter: (_: any, row: Column) => row.art_forms.join(','),
        renderCell: (params: GridRenderCellParams<Column>) => {
          return (
            <div style={{ overflow: 'scroll', height: '100%' }}>
              <Tags
                tags={params.row.art_forms.map((i) => ({
                  name: i,
                  type: 'art_form',
                }))}
                onClick={buildHeaderOnClick('art_forms')}
              />
            </div>
          );
        },
      },
      {
        field: 'nLyrics',
        headerName: '歌词版本数量',
        minWidth: 150,
        renderCell: (params: GridRenderCellParams<Column>) => {
          return params.row.nLyrics;
        },
      },
      {
        field: 'tags',
        headerName: '标签',
        minWidth: 200,
        valueGetter: (_: any, row: Column) => row.tags.join(','),
        renderCell: (params: GridRenderCellParams<Column>) => {
          return (
            <div style={{ overflow: 'scroll', height: '100%' }}>
              <Tags
                tags={params.row.tags.map((i) => ({
                  name: i,
                  type: 'tag',
                }))}
                onClick={buildHeaderOnClick('tags')}
              />
            </div>
          );
        },
      },
    ],
    [],
  );

  useEffect(() => {
    function onChange(id: string) {
      const idx = apiRef.current.getRowIndexRelativeToVisibleRows(id);

      try {
        apiRef.current.scrollToIndexes({
          colIndex: 0,
          rowIndex: idx,
        });
        apiRef.current.setExpandedDetailPanels([id]);
      } catch (e) {}
    }
    ee.current.on('musicChanged', onChange);
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
      <Player ee={ee.current} apiRef={apiRef} />
      <Stack sx={{ flex: 1, width: '100%', height: '500px' }}>
        <DataGridPro
          disableColumnFilter
          headerFilters
          apiRef={apiRef}
          initialState={{
            sorting: {
              sortModel: [{ field: 'nLyrics', sort: 'desc' }],
            },
          }}
          getDetailPanelContent={({ row }) => (
            <Song
              id={row.id}
              name={row.name}
              archiveId={row.archiveId}
              ee={ee.current}
            />
          )}
          onFilterModelChange={(f) => {
            apiRef.current.setFilterModel(f);
            filterModelRef.current = f;
          }}
          getRowId={(row) => row.id}
          getDetailPanelHeight={() => 'auto'}
          rows={indexes}
          columns={columns}
          localeText={zhCN.components.MuiDataGrid.defaultProps.localeText}
          pageSizeOptions={[100]}
        />
      </Stack>
    </Stack>
  );
}

Music.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
