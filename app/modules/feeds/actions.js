import axios from 'axios';
import jsonp from 'jsonp';
import * as types from './types';

export function getUserFeeds(profileId) {
  return {
    type: types.GET_USER_FEEDS,
    payload: axios
      .get(`api/feeds/${profileId}`)
      .then(response => response.data),
  };
}

function getNextPage(url) {
  const promise = new Promise((resolve, reject) => {
    jsonp(url, null, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });

  return promise;
}
export function loadMore(url) {
  return {
    type: types.LOAD_MORE,
    payload: getNextPage(url),
  };
}
