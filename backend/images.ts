import { ImageTagType } from "../types";
import { Image } from "./entities";

const images: (Image & {
  id?: string;
})[] = [
  {"name":"接见红卫兵","description":"","show_in_gallery":true,"tags":[{"type":"character","name":"毛泽东"}],"id":"5164b84c-de18-419b-8082-8b0321b09f37","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/51/5164b84c-de18-419b-8082-8b0321b09f37.jpg"},
];

export default images;