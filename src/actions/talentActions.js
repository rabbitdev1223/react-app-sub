import { RSAA } from 'redux-api-middleware';
import apiConfig from '../constants/api';
import * as types from './actionTypes'
import { getToken, getUserID } from "../service/storage";
import { processRequest } from "../service/api";

export const getSignedUrl = (url, params) => ({
  [RSAA]: {
      endpoint: `${apiConfig.url}/talent_picture/picture_policy/`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
      types: [
        types.TALENT_UPLOAD_PICTURE.REQUEST,
        types.TALENT_UPLOAD_PICTURE.SUCCESS,
        types.TALENT_UPLOAD_PICTURE.FAILURE
      ]
    }
});


export const getCurrentTalentInfo = () => {
  let token = getToken();
  let headers = { 'Content-Type': 'application/json' };

  if (token) headers = {...headers, 'Authorization': `Bearer ${token}`};

  return {
    [RSAA]: {
      endpoint: `${apiConfig.url}/talent/currentTalentInfo/`,
      method: 'GET',
      headers: headers,
      types: [
        types.TALENT_INFO.REQUEST,
        types.TALENT_INFO.SUCCESS,
        types.TALENT_INFO.FAILURE
      ]
    }
  }
};

export const getTalentInfo = (id) => {
  let token = getToken();
  let headers = { 'Content-Type': 'application/json' };

  if (token) headers = {...headers, 'Authorization': `Bearer ${token}`};

  return {
    [RSAA]: {
    endpoint: `${apiConfig.url}/talent/${id}/`,
      method: 'GET',
      headers: headers,
    types: [
      types.TALENT_INFO.REQUEST,
      types.TALENT_INFO.SUCCESS,
      types.TALENT_INFO.FAILURE
    ]
  }}
};

export const getTalentPositionTypes = (id) => ({
  [RSAA]: {
      endpoint: `${apiConfig.url}/talent_position_type/${id}/`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      types: [
        types.TALENT_POSITION_TYPES.REQUEST, 
        types.TALENT_POSITION_TYPES.SUCCESS, 
        types.TALENT_POSITION_TYPES.FAILURE
      ]
    }
})

export const getAllPositionTypes = () => ({
  [RSAA]: {
      endpoint: `${apiConfig.url}/position_type/all`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      types: [
        types.ALL_POSITION_TYPES.REQUEST, 
        types.ALL_POSITION_TYPES.SUCCESS, 
        types.ALL_POSITION_TYPES.FAILURE
      ]
    }
})

export const getAllSkills = () => ({
  [RSAA]: {
      endpoint: `${apiConfig.url}/skill/all`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      types: [
        types.ALL_SKILLS.REQUEST, 
        types.ALL_SKILLS.SUCCESS, 
        types.ALL_SKILLS.FAILURE
      ]
    }
})

export const getWizardQuestionScenario = () => ({
  [RSAA]: {
    endpoint: `${apiConfig.url}/position_wizard_question_scenario/all`,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [
      types.WIZARD_QUESTION_SCENARIO.REQUEST,
      types.WIZARD_QUESTION_SCENARIO.SUCCESS,
      types.WIZARD_QUESTION_SCENARIO.FAILURE
    ]
  }
})

export const changePassword = (oldPassword, newPassword, confirmNewPassword) => {
  let token = getToken();

  if (token) {
    return {
      [RSAA]: {
        endpoint: `${apiConfig.url}/talent/changePassword/`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({oldPassword, newPassword, confirmNewPassword}),
        types: [
          types.TALENT_CHANGE_PASSWORD.REQUEST,
          types.TALENT_CHANGE_PASSWORD.SUCCESS,
          types.TALENT_CHANGE_PASSWORD.FAILURE
        ]
      }}
  }
};
