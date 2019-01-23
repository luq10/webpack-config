import {EXAMPLE} from '../../actions/types/example';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE.GET.SUCCESS:
      return action.payload;
    case EXAMPLE.REMOVE.SUCCESS: {
      if(!state) {
        return state;
      }

      return state.filter(item => item.id !== action.payload.removedId);
    }
    default:
      return state;
  }
};
