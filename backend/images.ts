import { ImageTagType } from "../types";
import { Image } from "./entities";

const images: (Image & {
  id?: string;
})[] = [
  {"name":"《上海工人革命造反总司令部斗争纪要》插图一","description":"我们的伟大领袖毛主席","source":"《上海工人革命造反总司令部斗争纪要》","show_in_gallery":true,"tags":[{"type":"character","name":"毛泽东"}],"id":"e76ea17e-f53a-418c-be68-5a725aad779d","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/e7/e76ea17e-f53a-418c-be68-5a725aad779d.png"},
  {"name":"《上海工人革命造反总司令部斗争纪要》插图二","description":"上海工人革命造反总司令部成立宣言原件","source":"《上海工人革命造反总司令部斗争纪要》","show_in_gallery":true,"tags":[{"type":"subject","name":"工总司"}],"id":"a8db5d46-6004-45d5-b22d-dd5a63072008","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/a8/a8db5d46-6004-45d5-b22d-dd5a63072008.png"},
  {"name":"《上海工人革命造反总司令部斗争纪要》插图三","description":"1966年11月，毛主席派张春桥同志代表中央文革小组来到安亭","source":"《上海工人革命造反总司令部斗争纪要》","show_in_gallery":true,"tags":[{"type":"subject","name":"安亭事件"},{"type":"character","name":"张春桥"},{"type":"character","name":"工总司"}],"id":"0d8b3e97-c159-4d91-83f4-c199fa6e228a","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/0d/0d8b3e97-c159-4d91-83f4-c199fa6e228a.png"},
  {"name":"《上海工人革命造反总司令部斗争纪要》插图四","description":"张春桥同志在苏州为工总司队员题词","source":"《上海工人革命造反总司令部斗争纪要》","show_in_gallery":true,"tags":[{"type":"character","name":"张春桥"},{"type":"character","name":"工总司"}],"id":"6aa98e24-e62e-4e44-a7d1-6a92070c016b","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/6a/6aa98e24-e62e-4e44-a7d1-6a92070c016b.png"},
  {"name":"《上海工人革命造反总司令部斗争纪要》插图五","description":"批刻工总司图章和制作袖章的签条原件","source":"《上海工人革命造反总司令部斗争纪要》","show_in_gallery":true,"tags":[{"type":"character","name":"张春桥"},{"type":"character","name":"工总司"}],"id":"4d4d4af5-e085-49ed-9b6c-66dfd14b81be","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/4d/4d4d4af5-e085-49ed-9b6c-66dfd14b81be.png"},
  {"name":"《上海工人革命造反总司令部斗争纪要》插图六","description":"告上海全市人民书原稿","source":"《上海工人革命造反总司令部斗争纪要》","show_in_gallery":true,"tags":[{"type":"subject","name":"一月风暴"}],"id":"036575e8-eb6e-4d72-9098-1283f349f448","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/03/036575e8-eb6e-4d72-9098-1283f349f448.png"},
  {
    name: '红卫兵串联',
    description: '',
    show_in_gallery: true,
    tags: [{ type: 'character', name: '红卫兵' }, { type: 'place', name: '北京' }, { type: 'place', name: '天安门' }],
    id: '6e0b7e7f-96ab-4ce6-b508-9a56162157e8',
    url: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/6e/6e0b7e7f-96ab-4ce6-b508-9a56162157e8.jpg',
  },
];

export default images;