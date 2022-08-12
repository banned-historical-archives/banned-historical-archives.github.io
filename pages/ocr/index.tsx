// 本地测试使用
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Layout from '../../components/Layout';
import {
  GetStaticProps,
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
} from 'next';

import axios from 'axios';
import Stack from '@mui/material/Stack';
import { join, resolve } from 'path';
import { OCRResult } from '../../types';

export default function OCR() {
  const [OCRResults, setOCRResults] = useState<OCRResult[][]>([]);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [noCache, setNoCache] = useState(false);
  const [basePath, setBasePath] = useState('/books/zhangchunqiao4/');
  const [range, setRange] = useState('1-6');
  const [resize, setResize] = useState(1500);
  const [sizes, setSizes] = useState<{ width: number; height: number }[]>([]);
  useEffect(() => {
    (async () => {
      const a = parseInt(range.split('-')[0]);
      const b = parseInt(range.split('-')[1]);
      const res: OCRResult[][] = [];
      const s: { width: number; height: number }[] = [];
      for (let i = a; i <= b; ++i) {
        const img = document.createElement('img');
        img.setAttribute('src', `${basePath}${i}.jpg`);
        await new Promise<null>(
          (resolve) =>
            (img.onload = () => {
              s.push({ width: img.width, height: img.height });
              resolve(null);
            }),
        );
        const r = await axios.get(
          `http://localhost:8099?resize=${resize}&cache=${
            !noCache ? 'true' : 'false'
          }&img_path=` + encodeURIComponent(`${basePath}${i}.jpg`),
        );
        res.push(r.data.ocr_result);
      }
      setSizes(s);
      setOCRResults(res);
    })();
  }, [basePath, range, noCache, resize]);

  return (
    <Stack
      sx={{ height: '100%', overflow: 'scroll' }}
      onMouseMove={(e) => {
        setCurX(Math.floor(e.clientX));
        setCurY(Math.floor(e.clientY));
      }}
    >
      <input
        type="checkbox"
        checked={noCache}
        onChange={() => setNoCache(!noCache)}
        style={{ position: 'fixed', bottom: 10, left: 10, zIndex: 3 }}
      />
      <input
        defaultValue={basePath}
        onBlur={(e) => {
          setBasePath(e.target.value);
        }}
        style={{ position: 'fixed', bottom: 10, left: 100, zIndex: 3 }}
      />
      <input
        defaultValue={range}
        onBlur={(e) => {
          setRange(e.target.value);
        }}
        style={{ position: 'fixed', bottom: 10, left: 300, zIndex: 3 }}
      />
      <input
        defaultValue={resize}
        onBlur={(e) => {
          setResize(parseInt(e.target.value));
        }}
        style={{ position: 'fixed', bottom: 10, left: 400, zIndex: 3 }}
      />
      <div style={{ position: 'fixed', left: curX + 20, top: curY, zIndex: 4 }}>
        {curX},{curY}
      </div>
      {sizes.map((i, idx) => {
        const n = parseInt(range.split('-')[0]) + idx;
        return (
          <div
            key={`${basePath}${n}.jpg${noCache}`}
            style={{ position: 'relative' }}
          >
            <img
              src={`${basePath}${n}.jpg`}
              width={i.width}
              height={i.height}
            />
            {OCRResults![idx]?.map((res) => {
              return (
                <div
                  key={Math.random()}
                  style={{
                    position: 'absolute',
                    left: res.box[0]![0],
                    background: 'rgba(0, 255, 0, 0.3)',
                    width: res.box[1][0] - res.box[0][0],
                    // top: res.box[0][1] + 20,
                    top: res.box[0][1],
                    fontSize: 19,
                    color: 'white',
                    whiteSpace: 'nowrap',
                    textShadow: '-1px 4px 2px black',
                    height: res.box[2][1] - res.box[0][1],
                  }}
                >
                  {res.text}
                </div>
              );
            })}
          </div>
        );
      })}
    </Stack>
  );
}
