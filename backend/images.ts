import { ImageTagType } from "../types";
import { Image } from "./entities";

const images: (Image & {
  id?: string;
})[] = [
  {"name":"接见红卫兵","description":"","show_in_gallery":true,"tags":[{"type":"character","name":"毛泽东"}],"id":"0af83c26-ab73-472a-a138-c74526bb67f0","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/0a/0af83c26-ab73-472a-a138-c74526bb67f0.jpg"},
];

export default images;