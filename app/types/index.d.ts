export interface DownloadProgress {
  key: string;
  current: number;
  total: number;
}

export interface GridLayout {
  [key: number]: {
    x: number;
    y: number;
    color: { r: number; g: number; b: number; a: number };
  };
}
