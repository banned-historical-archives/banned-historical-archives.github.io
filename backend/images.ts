import { ImageTagType } from "../types";
import { Image } from "./entities";

const images: (Image & {
  id?: string;
})[] = [
  {"name":"接见红卫兵","description":"","show_in_gallery":true,"tags":[{"type":"character","name":"毛泽东"}],"id":"e24899bc-d0fe-4599-b66d-0819c2c92439","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/e2/e24899bc-d0fe-4599-b66d-0819c2c92439.jpg"},
];

export default images;