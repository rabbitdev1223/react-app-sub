import { RSAA } from 'redux-api-middleware';
import apiConfig from 'constants/api';
import * as types from './actionTypes'
import { getToken } from "service/storage";


export const getCurrentAdminInfo = () => {
  let token = getToken();

  if (token) {
    return {
      [RSAA]: {
        endpoint: `${apiConfig.url}/agency/currentAdminInfo/`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        types: [
          types.ADMIN_INFO.REQUEST,
          types.ADMIN_INFO.SUCCESS,
          types.ADMIN_INFO.FAILURE
        ]
      }}
  } else {
    return {
      [RSAA]: {
        endpoint: `${apiConfig.url}/agency/currentAdminInfo/`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        types: [
          types.ADMIN_INFO.REQUEST,
          types.ADMIN_INFO.SUCCESS,
          types.ADMIN_INFO.FAILURE
        ]
      }}
  }
};

export const getClientInfo = (id) => {
  if (id === null) {
    console.trace('client id is null');
    return;
  }
  return {
    [RSAA]: {
      endpoint: `${apiConfig.url}/client/${id}/`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        types.CLIENT_INFO.REQUEST,
        types.CLIENT_INFO.SUCCESS,
        types.CLIENT_INFO.FAILURE
      ]
    }}
};

export const searchNotes = (data) => {
  let token = getToken();
  return {
    [RSAA]: {
      endpoint: `${apiConfig.url}/agency/user_note/search`,
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      types: [
        types.SEARCH_NOTES.REQUEST, types.SEARCH_NOTES.SUCCESS, types.SEARCH_NOTES.FAILURE
      ]
    }
  }
};
