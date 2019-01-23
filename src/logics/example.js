import { createLogic } from 'redux-logic';

import {EXAMPLE} from '../actions/types/example';

export const get = createLogic({
  type: EXAMPLE.GET.START,

  processOptions: {
    successType: EXAMPLE.GET.SUCCESS,
    failType: EXAMPLE.GET.ERROR,
  },

  process({api, action}) {
    const {page} = action.payload;

    return api.example.get(page);
  },
});

export const remove = createLogic({
  type: EXAMPLE.REMOVE.START,

  processOptions: {
    successType: EXAMPLE.REMOVE.SUCCESS,
    failType: EXAMPLE.REMOVE.ERROR,
  },

  process({api, action}) {
    const {id} = action.payload;

    return api.example.remove(id)
      .then(() => ({
        removedId: id,
      }));
  },
});

export default [
  get,
  remove,
];
