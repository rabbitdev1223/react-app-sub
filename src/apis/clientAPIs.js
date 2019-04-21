import {
  processRequestWithToken,
  processRequestWithNotification,
} from "./apiUtils";
import { NOTIFY_MESSAGES } from "constants/notifications";


class ClientAPI {
 
  static createCastingRequest(data, handleResponse) {
    processRequestWithNotification(`client/casting_request/create`, 'post', data, handleResponse, NOTIFY_MESSAGES.CREATE_CASTING_REQUEST, true);
  }

  static saveCastingRequest(crID, data, handleResponse) {
    processRequestWithNotification(`client/casting_request/${crID}/`, 'put', data, handleResponse, NOTIFY_MESSAGES.SAVE_CASTING_REQUEST, true);
  }

  static getCastingRequestDetail(crID, handleResponse) {
   processRequestWithToken(`client/casting_request/${crID}/`, 'get', null, handleResponse)
  }

  static getCastingRequestTalent(crtID, handleResponse) {
   processRequestWithToken(`client/casting_request_talent/${crtID}/`, 'get', null, handleResponse)
  }

  static getAllCompletedCastingRequestTalent(handleResponse) {
   processRequestWithToken(`client/casting_request_talent/completed_all`, 'get', null, handleResponse)
  }

  static saveCastingRequestTalent(crtID, data, handleResponse) {
    processRequestWithNotification(`client/casting_request_talent/${crtID}/`, 'put', data, handleResponse, NOTIFY_MESSAGES.SAVE_CASTING_REQUEST_TALENT, true);
 }

  static createAllCastingRequestTalents(data, handleResponse) {
    processRequestWithNotification(`client/casting_request_talent/create/`, 'post', data, handleResponse, NOTIFY_MESSAGES.CREATE_ALL_CASTING_REQUEST_TALENTS, true);
  }

  static deleteCastingRequestTalent(crtID, handleResponse) {
    processRequestWithNotification(`client/casting_request_talent/${crtID}/`, 'delete', null, handleResponse, NOTIFY_MESSAGES.DELETE_CASTING_REQUEST_TALENT, true);
  }

  static getAllBlockedProfiles(handleResponse) {
    processRequestWithToken(`client/blocked_profile/all`, 'get', null, handleResponse)
  }

  static blockTalent(data, handleResponse) {
    processRequestWithNotification(`client/blocked_profile/create`, 'post', data, handleResponse, NOTIFY_MESSAGES.BLOCK_TALENT, true);
  }

  static unblockProfile(bpID, handleResponse) {
    processRequestWithNotification(`client/blocked_profile/${bpID}/`, 'delete', null, handleResponse, NOTIFY_MESSAGES.UNBLOCK_TALENT, true);
  }

  static saveBlockedProfile(bpID, data, handleResponse) {
    processRequestWithNotification(`client/blocked_profile/${bpID}/`, 'put', data, handleResponse, NOTIFY_MESSAGES.SAVE_BLOCKED_PROFILE, true);
  }

  static getAllCallBacks(handleResponse) {
    processRequestWithToken(`client/call_back/all`, 'get', null, handleResponse)
  }

  static addCallBacks(data, handleResponse) {
    processRequestWithNotification(`client/call_back/create`, 'post', data, handleResponse, NOTIFY_MESSAGES.ADD_CALLBACK, true);
  }

  static removeCallBack(callbackId, handleResponse) {
    processRequestWithNotification(`client/call_back/${callbackId}/`, 'delete', null, handleResponse, NOTIFY_MESSAGES.REMOVE_CALLBACK, true);
  }

  static getAllFavorites(handleResponse) {
   processRequestWithToken(`client/favorite/all`, 'get', null, handleResponse)
  }

  static addFavorite(data, handleResponse) {
    processRequestWithNotification(`client/favorite/create`, 'post', data, handleResponse, NOTIFY_MESSAGES.ADD_FAVORITE, true);
  }

  static removeFavorite(favoriteId, handleResponse) {
    processRequestWithNotification(`client/favorite/${favoriteId}/`, 'delete', null, handleResponse, NOTIFY_MESSAGES.REMOVE_FAVORITE, true);
  }

  static addRating(data, handleResponse) {
    processRequestWithNotification(`talent_rating/create`, 'post', data, handleResponse, NOTIFY_MESSAGES.ADD_RATING, true);
  }

  static getAllTeamMembers(handleResponse) {
    processRequestWithToken(`client/team_member/all`, 'get', null, handleResponse)
  }

  static addTeamMembers(data, handleResponse) {
    processRequestWithNotification(`client/team_member/bulk`, 'post', data, handleResponse, NOTIFY_MESSAGES.ADD_TEAM_MEMBER, true);
  }

  static removeTeamMember(teamMemberId, handleResponse) {
    processRequestWithNotification(`client/team_member/${teamMemberId}/`, 'delete', null, handleResponse, NOTIFY_MESSAGES.REMOVE_TEAM_MEMBER, true);
  }

  static getAllSharedProfiles(handleResponse) {
    processRequestWithToken(`client/shared_profile/all`, 'get', null, handleResponse)
  }

  static getAllSharedTalents(pageNumber, handleResponse) {
    processRequestWithToken(`client/shared_profile/shared_talent/all?page=${pageNumber}`, 'get', null, handleResponse);
  }

  static getAllTalentSharedWith(pageNumber, handleResponse) {
    processRequestWithToken(`client/shared_profile/talent_shared_with/all?page=${pageNumber}`, 'get', null, handleResponse);
  }

  static getAllTalentSharedByTeamMember(pageNumber, handleResponse) {
   processRequestWithToken(`client/shared_profile/shared_talent_by_team_member/all?page=${pageNumber}`, 'get', null, handleResponse);
  }

  static addSharedProfiles(data, handleResponse) {
    processRequestWithNotification(`client/shared_profile/bulk`, 'post', data, handleResponse, NOTIFY_MESSAGES.ADD_SHARED_PROFILES, true);
  }

  static removeSharedProfile(sharedProfileID, handleResponse) {
    processRequestWithNotification(`client/shared_profile/${sharedProfileID}/`, 'delete', null, handleResponse, NOTIFY_MESSAGES.REMOVE_SHARED_PROFILES, true);
  }

  static addClientFeedback(data, handleResponse) {
    processRequestWithNotification(`client/feedback/create`, 'post', data, handleResponse, NOTIFY_MESSAGES.ADD_CLIENT_FEEDBACK, true);
  }

  static addRequestMoreInfo(data, handleResponse) {
    processRequestWithNotification(`client/request/create`, 'post', data, handleResponse, NOTIFY_MESSAGES.ADD_REQUEST_MORE_INFO, true);
  }

}
export default ClientAPI
