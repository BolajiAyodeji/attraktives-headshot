export interface Progress {
  key: string;
  current: number;
  total: number;
}

export interface gridLayout {
  [key: number]: {
    x: number;
    y: number;
    color: { r: number; g: number; b: number; a: number };
  };
}
