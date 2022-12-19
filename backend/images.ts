import { ImageTagType } from "../types";
import { Image } from "./entities";

const images: (Image & {
  id?: string;
})[] = [
  {"name":"接见红卫兵","description":"","show_in_gallery":true,"tags":[{"type":"character","name":"毛泽东"}],"id":"af4ac918-d637-494b-8857-bdd6271f8a5e","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/af/af4ac918-d637-494b-8857-bdd6271f8a5e.jpg"},
];

export default images;