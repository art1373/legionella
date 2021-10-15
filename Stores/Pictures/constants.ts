export const initialState = {
  pictures: [],
};

export const FETCH_PICTURES = 'FETCH_PICTURES';
export const SET_PICTURES = 'SET_PICTURES';

type Url = {
  full: string;
  raw: string;
  regular: string;
  thumb: string;
};

export interface Picture {
  id: string;
  width: number;
  height: number;
  blur_hash: string;
  created_at: string;
  urls: Url;
}
