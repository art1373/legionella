export const initialState = {
  pictures: [],
};

export const FETCH_PICTURES = "FETCH_PICTURES";
export const SET_PICTURES = "SET_PICTURES";

type Url = {
  full: string;
  raw: string;
  regular: string;
  thumb: string;
};

interface Social {
  instagram_username: string;
  paypal_email: string;
  portfolio_url: string;
  twitter_username: string;
}
interface User {
  name: string;
  social: Social;
}
export interface Picture {
  id: string;
  width: number;
  height: number;
  blur_hash: string;
  created_at: string;
  urls: Url;
  alt_description: string;
  portfolio_url: string;
  user: User;
}

export type FetchPicturesAction = {
  offset: string | number;
  onSucces: Function;
  onFailure: Function;
};
