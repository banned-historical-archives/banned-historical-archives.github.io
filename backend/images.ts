import { ImageTagType } from "../types";
import { Image } from "./entities";

const images: (Image & {
  id?: string;
})[] = [
  {"name":"我们的伟大统帅毛主席","description":"","source":"《上海工人革命造反总司令部斗争纪要》","show_in_gallery":false,"tags":[{"type":"character","name":"毛泽东"}],"id":"f2a71a11-2ab5-442d-bede-6e233eb55e5f","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/f2/f2a71a11-2ab5-442d-bede-6e233eb55e5f.png"},
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