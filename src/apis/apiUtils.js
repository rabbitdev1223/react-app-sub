import apiConfig from 'constants/api';
import { getToken } from "service/storage";
import * as globalNotificationActions from 'actions/globalNotificationActions';
import * as talentAction from "actions/talentActions";
import { store } from 'App';

const processResponse = (response, handleResponse) => {
  console.log('=== response: ', response);
  if(response.error) {
    console.log('error: ', response.error);
    handleResponse(response.error, true);
  }
  else {
    if (response){
      console.log('success: ', response);
      handleResponse(response, false)
    } else {
      console.log('error: ', response);
      handleResponse(response.error, true);
    }
  }
};

export const processRequest = (url, method, data, handleResponse) => {
  console.log('==== processRequest: ', url, data);
  let params = {
    method: method,
    headers: {
      "Content-Type": "application/json"
    }
  }

  if (data) {
    params = {
      ...params,
      body: JSON.stringify(data)
    }
  }

  fetch(`${apiConfig.url}/${url}`, params)
    .then(response => response.json())
    .then(response => {
      this.processResponse(response, handleResponse)
    })
    .catch(error => {
      console.log('error: ', error);
      handleResponse(error, true)
    })
};

export const processRequestWithToken = (url, method, data, handleResponse) => {
  console.log('==== processRequest: ', url, data);
  let parameters = {
    method: method,
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    }
  };

  if (method !== 'get' && data !== '' && data !== null) {
    parameters = {...parameters, body: JSON.stringify(data)};
  }

  console.log('==== parameters: ', parameters)

  fetch(`${apiConfig.url}/${url}`, parameters)
    .then(response => {console.log('=== response: ', response); return response.json()})
    .then(response => {
      processResponse(response, handleResponse)
    })
    .catch(error => {
      console.log('error: ', error)
      handleResponse(error, true)
    })
};

const notifyStatus = (type, message) => store.dispatch(globalNotificationActions.notify(true, type, message));

export const notifyProgress = (message) => notifyStatus('progress', message);

export const notifyError = (message) => notifyStatus('error', message);

export const notifySuccess = (message) => notifyStatus('success', message);

export const notifyInfo = (message) => notifyStatus('info', message);

export const hanldeResponseWithNotification = (response, isFailed, failMessage, successMessage, handleResponse, needRefreshTalentInfo) => {
  if(isFailed) notifyError(failMessage);
  else notifySuccess(successMessage);
  if (needRefreshTalentInfo) refreshTalentInfo();
  handleResponse(response, isFailed);
}

export const refreshTalentInfo = () => store.dispatch(talentAction.getCurrentTalentInfo());