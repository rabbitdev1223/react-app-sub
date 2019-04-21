import {
  processRequestWithToken,
  processRequestWithNotification,
} from "./apiUtils";
import { NOTIFY_MESSAGES } from "constants/notifications";

class AdminAPI {

  static getProfile(profileId, handleResponse) {
    processRequestWithToken(`talent/${profileId}`, 'get', null, handleResponse);
  }

  static saveProfile(userId, data, handleResponse) {
    processRequestWithNotification(`talent/${userId}`, 'put', data, handleResponse, NOTIFY_MESSAGES.SAVE_PROFILE, false);
  }

  static saveProfileResume(resumeId, data, handleResponse) {
    processRequestWithNotification(`talent_resume/${resumeId}`, 'put', data, handleResponse, NOTIFY_MESSAGES.SAVE_PROFILE_RESUME, false);
  }

  static deleteProfileResume(resumeId, data, handleResponse) {
    processRequestWithNotification(`talent_resume/${resumeId}`, 'delete', data, handleResponse, NOTIFY_MESSAGES.DELETE_PROFILE_RESUME, false);
  }

  static saveProfilePicture(pictureId, data, handleResponse) {
    processRequestWithNotification(`talent_picture/${pictureId}`, 'put', data, handleResponse, NOTIFY_MESSAGES.SAVE_PROFILE_PICTURE, false);
  }

  static deleteProfilePicture(pictureId, data, handleResponse) {
    processRequestWithNotification(`talent_picture/${pictureId}`, 'delete', data, handleResponse, NOTIFY_MESSAGES.DELETE_PROFILE_PICTURE, false);
  }

  static getAllCastingRequests(handleResponse) {
    processRequestWithToken(`agency/casting_request/all`, 'get', null, handleResponse);
  }
  
  static searchCastingRequestTalent(data, handleResponse) {
    processRequestWithToken(`agency/casting_request_talent/search`, 'post', data, handleResponse);
  }

  static searchCastingRequest(data, handleResponse) {
    processRequestWithToken(`agency/casting_request/search`, 'post', data, handleResponse);
  }

  static getCastingRequest(castingRequestId, handleResponse) {
    processRequestWithToken(`agency/casting_request/${castingRequestId}`, 'get', null, handleResponse);
  }

  static setCastingRequestStatus(castingRequestId, data, handleResponse) {
    processRequestWithNotification(`agency/casting_request/set_status/${castingRequestId}`, 'put', data, handleResponse, NOTIFY_MESSAGES.SET_CASTING_REQUEST_STATUS, false);
  }

  static saveGreetingVideo(videoId, data, handleResponse) {
    processRequestWithNotification(`talent_video_greetings/${videoId}`, 'put', data, handleResponse, NOTIFY_MESSAGES.APPROVE_VIDEO_GREETING, false);
  }

  static deleteGreetingVideo(videoId, data, handleResponse) {
    processRequestWithNotification(`talent_video_greetings/${videoId}`, 'delete', data, handleResponse, NOTIFY_MESSAGES.DELETE_VIDEO_GREETING, false);
  }

  static saveSubSkillVideo(videoId, data, handleResponse) {
    processRequestWithNotification(`talent_video_sub_skills/${videoId}`, 'put', data, handleResponse, NOTIFY_MESSAGES.APPROVE_SUB_SKILL_VIDEO, false);
  }

  static deleteSubSkillVideo(videoId, data, handleResponse) {
    processRequestWithNotification(`talent_video_sub_skills/${videoId}`, 'delete', data, handleResponse, NOTIFY_MESSAGES.DELETE_SUB_SKILL_VIDEO, false);
  }

  static addNote(data, handleResponse) {
    processRequestWithNotification(`agency/user_note/create`, 'post', data, handleResponse, NOTIFY_MESSAGES.ADD_NOTE, false);
  }

  static searchNotes(data, handleResponse) {
    processRequestWithToken(`agency/user_note/search`, 'post', data, handleResponse);
  }

  static getAgencyOverview(handleResponse) {
    processRequestWithToken(`agency/overview/overview`, 'get', null, handleResponse);
  }

  static searchInvoice(data, handleResponse) {
    processRequestWithToken(`agency/invoice/search`, 'post', data, handleResponse);
  }
}
export default AdminAPI
