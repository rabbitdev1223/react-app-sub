import apiConfig from 'constants/api';
import { getToken } from "service/storage";
import * as globalNotificationActions from 'actions/globalNotificationActions';
import * as talentAction from "actions/talentActions";
import * as clientAction from "actions/clientActions";
import * as adminAction from "actions/adminActions";
import { store } from 'App';
import { getAuth } from 'service/storage';

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
      "Accept": "application/json",
      "Authorization": `Bearer ${getToken()}`
    }
  };

  if (method !== 'get' && data !== '' && data !== null) {
    parameters = {...parameters, body: JSON.stringify(data)};
    parameters.headers = {...parameters.headers, "Content-Type": "application/json"};
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

const handleResponseNotification = (isFailed, failedMessage, successMessage) => {
  if(isFailed) notifyError(failedMessage);
  else notifySuccess(successMessage);
}

export const hanldeResponseWithTalentNotification = (response, isFailed, failMessage, successMessage, handleResponse, needRefreshTalentInfo) => {
  handleResponseNotification(isFailed, failMessage, successMessage);
  if (needRefreshTalentInfo) refreshTalentInfo();
  handleResponse(response, isFailed);
}

export const hanldeResponseWithClientNotification = (response, isFailed, failMessage, successMessage, handleResponse, needRefreshClientInfo) => {
  handleResponseNotification(isFailed, failMessage, successMessage);
  if (needRefreshClientInfo) refreshClientInfo();
  handleResponse(response, isFailed);
}

export const hanldeResponseWithAdminNotification = (response, isFailed, failMessage, successMessage, handleResponse, needRefreshClientInfo) => {
  handleResponseNotification(isFailed, failMessage, successMessage);
  if (needRefreshClientInfo) refreshAdminInfo();
  handleResponse(response, isFailed);
}

export const refreshTalentInfo = () => store.dispatch(talentAction.getCurrentTalentInfo());
export const refreshClientInfo = () => store.dispatch(clientAction.getCurrentClientInfo());
export const refreshAdminInfo = () => store.dispatch(adminAction.getCurrentAdminInfo());

export const processRequestWithNotification = (url, method, data, handleResponse, messages, needRefreshUserInfo) => {
  notifyProgress(messages.progress);
  processRequestWithToken(
    url, 
    method, 
    data, 
    (response, isFailed) => {
      
      let handleResponseWithNotification = null;
      const auth = getAuth();
      
      if (auth && auth.access) {
        let userType = auth.access.type;

        if (userType === 'talent') handleResponseWithNotification = hanldeResponseWithTalentNotification;
        else if (userType === 'client') handleResponseWithNotification = hanldeResponseWithClientNotification;
        else if (userType === 'agency') handleResponseWithNotification = hanldeResponseWithAdminNotification;

        if (handleResponseWithNotification) 
          handleResponseWithNotification(response, isFailed, messages.failed, messages.success, handleResponse, needRefreshUserInfo);
        else 
          console.log('no response handler.');
      } else 
        console.log('no auth store.');
    }
  );
}