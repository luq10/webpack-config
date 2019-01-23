import {EXAMPLE} from '../../actions/types/example';

const initialState = {
  isPending: false,
  isError: false,
  isSuccess: false,
  error: null,
  params: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE.GET.START:
      return {
        isPending: true,
        isError: false,
        isSuccess: false,
        error: null,
        params: action.payload,
      };
    case EXAMPLE.GET.SUCCESS:
      return {
        ...state,
        isPending: false,
        isError: false,
        isSuccess: true,
        error: null,
      };
    case EXAMPLE.GET.ERROR:
      return {
        ...state,
        isPending: false,
        isError: true,
        isSuccess: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
