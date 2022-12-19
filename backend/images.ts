import { ImageTagType } from "../types";
import { Image } from "./entities";

const images: (Image & {
  id?: string;
})[] = [
  {"name":"接见红卫兵","description":"","show_in_gallery":true,"tags":[{"type":"character","name":"毛泽东"}],"id":"6e0b7e7f-96ab-4ce6-b508-9a56162157e8","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/6e/6e0b7e7f-96ab-4ce6-b508-9a56162157e8.jpg"},
];

export default images;