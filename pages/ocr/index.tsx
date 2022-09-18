// 本地测试使用
import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
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

import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `/pdfjs-dist/legacy/build/pdf.worker.min.js`;

export default function OCR() {
  const [OCRResults, setOCRResults] = useState<OCRResult[][]>([]);
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [noCache, setNoCache] = useState(false);
  const [img_ext, setExt] = useState('jpg');
  const [id, setId] = useState('maoquanji27');
  const [isPDF, setIsPDF] = useState(true);
  const [PDFPath, setPDFPath] = useState('archives0/mao-quanji/27-OCR.pdf');
  const [range, setRange] = useState('11-11');
  const [resize, setResize] = useState(1500);
  const update = useCallback(async () => {
    const a = parseInt(range.split('-')[0]);
    const b = parseInt(range.split('-')[1]);
    const res: OCRResult[][] = [];
    for (let i = a; i <= b; ++i) {
      const r = await axios.get(
        `http://localhost:8099?resize=${resize}&cache=${
          !noCache ? 'true' : 'false'
        }&id=${id}&page=${i}&${
          isPDF ? `pdf_path=${encodeURIComponent(PDFPath)}` : `img_ext=${img_ext}`
        }`,
      );
      res.push(r.data.ocr_result);
    }
    setOCRResults(res);
  }, [id, range, noCache, resize, img_ext, isPDF, PDFPath]);

  useEffect(() => {
    update();
  }, [])

  const range_a = parseInt(range.split('-')[0]);
  const range_b = parseInt(range.split('-')[1]);
  return (
    <Stack sx={{ height: '100%', overflow: 'scroll' }}>
      <div
        style={{
          width: 100,
          height: 400,
          position: 'fixed',
          bottom: 10,
          left: 10,
          zIndex: 3,
        }}
      >
        noCache:
        <input
          type="checkbox"
          checked={noCache}
          onChange={() => setNoCache(!noCache)}
        />
        isPDF:
        <input
          type="checkbox"
          checked={isPDF}
          onChange={() => setIsPDF(!isPDF)}
        />
        {isPDF ? (
          <>
            pdfPath:
            <input
              defaultValue={PDFPath}
              onBlur={(e) => {
                setPDFPath(e.target.value);
              }}
            />
          </>
        ) : (
          <div>
            ext:
            <input
              defaultValue={img_ext}
              onBlur={(e) => {
                setExt(e.target.value);
              }}
            />
            id:
            <input
              defaultValue={id}
              onBlur={(e) => {
                setId(e.target.value);
              }}
            />
          </div>
        )}
        range:
        <input
          defaultValue={range}
          onBlur={(e) => {
            setRange(e.target.value);
          }}
        />
        size:
        <input
          defaultValue={resize}
          onBlur={(e) => {
            setResize(parseInt(e.target.value));
          }}
        />
        <button onClick={() => update()}>update</button>
      </div>
      {new Array(range_b - range_a + 1).fill(0).map((i, idx) => (
        <div
          key={`${isPDF}-${PDFPath}-${id}-${idx}-${img_ext}${noCache}`}
          style={{ position: 'relative' }}
          onMouseMove={(e) => {
            setCurX(Math.floor(e.clientX));
            setCurY(Math.floor(e.clientY));
            setPageX(Math.floor(e.pageX));
            setPageY(Math.floor(e.pageY));
          }}
        >
          <div
            style={{ position: 'fixed', left: curX + 20, top: curY, zIndex: 4 }}
          >
            {pageX},{pageY}
          </div>
          {isPDF ? (
            <Document
              file={`/books/${PDFPath}`}
              options={{
                cMapUrl: `/pdfjs-dist/cmaps/`,
                cMapPacked: true,
              }}
            >
              <Page pageNumber={idx + range_a} height={1500} />
            </Document>
          ) : (
            <img src={`/books/${id}/${idx + range_a}.${img_ext}`} />
          )}
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
      ))}
    </Stack>
  );
}
