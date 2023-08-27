type Item = {
  sort_helper?: string;
  line_id?: string;
  dir: string;
  str: string;
  width: number;
  height: number;
  transform: number[];
};

type ContentObj = {
  items: Item[];
};
type Page = {
  cleanup: () => void;
  getViewport: (opt: { scale: number }) => {
    width: number;
    height: number;
    viewBox: number[];
  };
  getTextContent: () => ContentObj;
};
type Doc = {
  getPage: (x: number) => Page;
  numPages: number;
};
export function getDocument(
  pdfPath:
    | string
    | {
        url: string;
        pdfBug?: boolean;
        cMapUrl?: string;
        disableFontFace?: boolean;
        cMapPacked?: boolean;
        useSystemFonts?: boolean;
        standardFontDataUrl?: string;
      },
): { promise: Promise<Doc> };
