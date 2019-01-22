import { createLogic } from 'redux-logic';

import {EXAMPLE} from '../actions/types/example';

export const get = createLogic({
  type: EXAMPLE.GET.START,

  processOptions: {
    successType: EXAMPLE.GET.SUCCESS,
    failType: EXAMPLE.GET.ERROR,
  },

  process() {
    return Promise.resolve({
      action: 'get'
    });
  },
});

export const remove = createLogic({
  type: EXAMPLE.REMOVE.START,

  processOptions: {
    successType: EXAMPLE.REMOVE.SUCCESS,
    failType: EXAMPLE.REMOVE.ERROR,
  },

  process() {
    return Promise.resolve({
      action: 'remove'
    });
  },
});

export default [
  get,
  remove,
];
