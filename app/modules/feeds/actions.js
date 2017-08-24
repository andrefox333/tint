import axios from 'axios';
import * as types from './types';

export function getUserFeeds(profileId) {
  return {
    type: types.GET_USER_FEEDS,
    payload: axios
      .get(`api/feeds/${profileId}`)
      .then(response => response.data),
  };
}

export function loadMore(url) {
  console.log('URL', url);
  return {
    type: types.LOAD_MORE,
    payload: axios.get(url).then(response => response.data),
  };
}
