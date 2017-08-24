import * as types from './types';

const defaultState = {
  list: [],
  nextPageUrl: '',
  hasNextPage: false,
};

export default function feedsReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case `${types.GET_USER_FEEDS}_FULFILLED`:
      return {
        ...state,
        list: action.payload.data,
        nextPageUrl: action.payload.next_page,
        hasNextPage: action.payload.has_next_page,
      };

    case `${types.LOAD_MORE}_FULFILLED`:
      return {
        ...state,
        list: [...state.list, ...action.payload.data],
        nextPageUrl: action.payload.next_page,
        hasNextPage: action.payload.has_next_page,
      };
    default:
      return state;
  }
}
