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
  const [OCRResults, setOCRResults] = useState<OCRResult[]>();
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [imgPath, setImgPath] = useState<string>(
    // '/books/maoyuanxin1/2022-08-04T20:36:03+08:00.png',
    '',
  );
  const [scale, setScale] = useState(1);
  const [size, setSize] = useState({
    height: 200,
    width: 100,
  });
  async function updateOCRResult(imgPath: string) {
    const res = await axios.get(
      'http://localhost:8099?img_path=' + encodeURIComponent(imgPath),
    );
    // const x: OCRResult[] = [{"box":[[931,171],[1337,170],[1337,201],[931,202]],"text":"揭发“四人帮”的死党毛远新"},{"box":[[937,218],[1218,216],[1218,244],[937,246]],"text":"破坏民兵建设的罪行"},{"box":[[824,229],[937,229],[937,246],[824,246]],"text":"领音衣"},{"box":[[967,273],[1253,270],[1253,292],[967,295]],"text":"原省委民兵工作领导小组办公室"},{"box":[[817,329],[1408,324],[1408,350],[817,355]],"text":"亲吴王张江姚“四人帮”反党集团为了实现他们篡党夺权的罪恶阴"},{"box":[[814,364],[1411,360],[1411,386],[814,391]],"text":"谋，拼命抓枪杆子，挖空心思地妄图把民兵搞成一支同解放军相对"},{"box":[[814,400],[1413,395],[1413,421],[814,426]],"text":"立的“第二武装”，变成他们篡党夺权，复辟资本主义的工具。“四"},{"box":[[817,437],[1413,431],[1413,455],[817,462]],"text":"人帮”的死党毛远新，在辽宁紧密配合，把黑手伸进民兵队伍，千"},{"box":[[815,473],[1138,471],[1138,493],[815,494]],"text":"方百计地破坏民兵建设，罪行累累。"},{"box":[[833,508],[1416,503],[1416,528],[834,533]],"text":"一、大造“改造民兵”的反革命奥论，竭力鼓吹“重建”民兵"},{"box":[[814,544],[1306,540],[1306,565],[814,568]],"text":"的谬论，妄图把民兵变成他们篡党夺权的反革命武装。"},{"box":[[818,581],[1422,577],[1422,599],[818,602]],"text":"作狗头军师张春桥采取极其卑劣的行径伪造了一个所谓毛主席关"},{"box":[[508,621],[564,621],[564,642],[508,642]],"text":"（正）"},{"box":[[817,616],[1425,611],[1425,638],[817,642]],"text":"于“民兵改造”的指示，并大肆鼓吹所谓上海的民兵工作“新鲜经"},{"box":[[818,652],[1423,648],[1424,675],[818,678]],"text":"验”。一九七三年，在中央工作会议和党的“十大”期间，王洪文"},{"box":[[441,696],[561,695],[561,716],[441,718]],"text":"至手（大）"},{"box":[[821,690],[1425,685],[1425,710],[821,715]],"text":"专门找毛远新传授了所谓民兵工作的“新鲜经验”。听后，毛远新"},{"box":[[440,735],[508,735],[508,757],[440,757]],"text":"千关"},{"box":[[818,726],[1426,723],[1427,749],[818,752]],"text":"说“很受启发”#“很受教育”。回来后，毛远新亲自挂帅，亲自"},{"box":[[818,763],[1429,760],[1430,786],[818,789]],"text":"推行，他不仅要改造民兵，而且要改造三级军区，改造解放军。他"},{"box":[[420,809],[561,809],[561,831],[420,831]],"text":"一满益手（十）"},{"box":[[821,803],[1428,798],[1428,823],[821,828]],"text":"说“民兵改造，首先要改造民兵的官”，“不但民兵要改造，部队"},{"box":[[821,838],[1431,835],[1431,862],[821,865]],"text":"有好多工作也要改造”，“过去分区、武装部领导的一套已不适应"},{"box":[[821,877],[1432,872],[1433,899],[821,903]],"text":"了”“对民兵的改造首先在三级军区，就是沈阳军区、省军区、军"},{"box":[[821,916],[1434,909],[1434,937],[821,943]],"text":"分区”。毛远新的所谓“改造”，就是要用“四人帮”炮制的所调民"},{"box":[[821,956],[1425,949],[1425,976],[821,982]],"text":"兵工作“新鲜经验”把民兵改造成他们复辟资本主义的御用工具。"},{"box":[[847,993],[1435,987],[1436,1013],[847,1019]],"text":"为了用“四人帮”的所谓“新鲜经验”改造民兵，毛远新极力"}];
    // setOCRResults(x);

    setOCRResults(res.data.ocr_result);
  }
  useEffect(() => {
    if (imgPath) {
      updateOCRResult(imgPath);
    }
    const img = document.createElement('img');
    img.setAttribute('src', imgPath);
    img.onload = () => {
      setSize({ width: img.width, height: img.height });
    };
  }, [imgPath]);

  useEffect(() => {
    setScale((window.innerHeight * 0.8) / size.height);
  }, [size]);
  return (
    <Stack sx={{ height: '100%', overflow: 'scroll' }}>
      <input
        type="file"
        onChange={(e) => {
          setImgPath(`/books/maoyuanxin1/${e!.target!.files![0]!.name}`);
        }}
        style={{ position: 'absolute', top: 10, left: 0, zIndex: 1 }}
      />
      <div
        style={{
          position: 'relative',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          transformOrigin: '0 0',
          transform: `scale(${scale})`,
        }}
        onMouseMove={(e) => {
          setCurX(Math.floor(e.pageX / scale));
          setCurY(Math.floor(e.pageY / scale));
        }}
      >
        <div style={{ position: 'absolute', left: curX + 20, top: curY }}>
          {curX},{curY}
        </div>
        <img src={imgPath} width={size.width} height={size.height} />
        {OCRResults?.map((res) => {
          return (
            <div
              key={Math.random()}
              style={{
                position: 'absolute',
                left: res.box[0]![0],
                background: 'rgba(0, 255, 0, 0.3)',
                width: res.box[1][0] - res.box[0][0],
                top: res.box[0][1] + 20,
                // top: res.box[0][1],
                fontSize: 19,
                color: 'white',
                height: res.box[2][1] - res.box[0][1],
              }}
            >
              {res.text}
            </div>
          );
        })}
      </div>
    </Stack>
  );
}
