import {EXAMPLE} from '../types/example';

export const get = (page) => ({
  type: EXAMPLE.GET.START,
  payload: {
    page,
  }
});

export const remove = (id) => ({
  type: EXAMPLE.REMOVE.START,
  payload: {
    id,
  }
});

export default {
  get,
  remove,
};
