import {EXAMPLE} from '../../actions/types/example';

const initalState = {
  isPending: false,
  isError: false,
  isSuccess: false,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case EXAMPLE.REMOVE.START:
      return {
        isPending: true,
        isError: false,
        isSuccess: false,
      };
    case EXAMPLE.REMOVE.SUCCESS:
      return {
        isPending: false,
        isError: false,
        isSuccess: true,
      };
    case EXAMPLE.REMOVE.ERROR:
      return {
        isPending: false,
        isError: true,
        isSuccess: false,
      };
    default:
      return state;
  }
};
