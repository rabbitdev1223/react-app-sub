import * as types from 'actions/actionTypes';

const initialAdminInfoState = {
  init: true,
  isFetching: false,
  isFailure: false,
  errorMessage: false,
  value: null
};

export const getCurrentAdminInfo = (state = initialAdminInfoState, action) => {
  switch(action.type) {
    case types.ADMIN_INFO.REQUEST:
      return Object.assign({}, state, {
        init: false,
        isFetching: true,
        isFailure: false,
        errorMessage: false,
        value: null
      });
    case types.ADMIN_INFO.SUCCESS:
      return Object.assign({}, state, {
        init: false,
        isFetching: false,
        isFailure: false,
        errorMessage: false,
        value: action.payload
      });
    case types.ADMIN_INFO.FAILURE:
      return Object.assign({}, state, {
        init: false,
        isFetching: false,
        isFailure: true,
        errorMessage: action.payload,
        value: null
      });
    default:
      return state;
  }
}

export default getCurrentAdminInfo;
