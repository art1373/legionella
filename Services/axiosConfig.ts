import axios from 'axios';
import Config from '../Config';

let baseURL = Config.API_URL;

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: 'Client-ID r9mxd7GLh9k9-35978OVEbaQtWlsc68Kvnniw9fPf1w',
  },
});

export default instance;
