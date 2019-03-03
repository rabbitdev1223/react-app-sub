import * as types from '../actions/actionTypes';

const initialState = {
  init: true,
  isFetching: false,
  isFetched: false,
  errorMessage: false,
  isFailure: false,
  value: []
};

export default function talentReducer(state = initialState, action) {
  // console.log("==video==", state, action);
  switch(action.type) {
    case types.TALENT_UPLOAD_PICTURE.SUCCESS:
      return Object.assign({}, state, {
        init: false,
        isFetched: true,
        isFailure: false,
        errorMessage: false,
        value: action.payload,
      });
    case types.TALENT_UPLOAD_PICTURE.FAILURE:
      console.log('=== action.payload: ', action.payload)
      return Object.assign({}, state, {
        init: false,
        isFetched: false,
        failure: true,
        errorMessage: action.payload,
      });
    case types.TALENT_UPLOAD_PICTURE.INIT:
      return Object.assign({}, state, {
        init: true,
        isFetched: false,
        errorMessage: false,
        isFailure: false,
        value: []
      });
    default:
      return state;
  }
}

const initialTalentInfoState = {
  init: true,
  isFetched: false,
  errorMessage: false,
  isFailure: false,
  value: null
};

export function getCurrentTalentInfo(state = initialTalentInfoState, action) {
  switch(action.type) {
    case types.TALENT_INFO.REQUEST:
      return Object.assign({}, state, {
        init: false,
        isFetching: true,
        isFetched: false,
        isFailure: false,
        errorMessage: false,
        value: null
      });
    case types.TALENT_INFO.SUCCESS:
      return Object.assign({}, state, {
        init: false,
        isFetching: false,
        isFetched: true,
        isFailure: false,
        failure: true,
        value: action.payload,
      });
    case types.TALENT_INFO.FAILURE:
      return Object.assign({}, state, {
        init: true,
        isFetching: false,
        isFetched: false,
        isFailure: true,
        errorMessage: action.payload,
        value: null
      });
    default:
      return state;
  }
}

const initialChangePasswordState = {
  init: true,
  isFetched: false,
  errorMessage: false,
  isFailure: false,
  value: null
};

export function changePassword(state = initialChangePasswordState, action) {
  switch(action.type) {
    case types.TALENT_CHANGE_PASSWORD.REQUEST:
      return Object.assign({}, state, {
        init: false,
        isFetched: false,
        isFailure: false,
        errorMessage: false,
        value: null
      });
    case types.TALENT_CHANGE_PASSWORD.SUCCESS:
      return Object.assign({}, state, {
        init: false,
        isFetched: true,
        isFailure: false,
        failure: true,
        value: action.payload,
      });
    case types.TALENT_CHANGE_PASSWORD.FAILURE:
      return Object.assign({}, state, {
        init: true,
        isFetched: false,
        isFailure: true,
        errorMessage: action.payload,
        value: null
      });
    default:
      return state;
  }
}
