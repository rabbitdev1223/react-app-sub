import { getUserID } from "service/storage";
import {
  processRequestWithNotification,
} from "./apiUtils";
import { NOTIFY_MESSAGES } from "constants/notifications";


class TalentAPI {
  static saveTalentInfo(user_id, data, handleResponse) {
    processRequestWithNotification(`talent/${user_id}/`, 'put', data, handleResponse, NOTIFY_MESSAGES.SAVE_TALENT_INFO, true);
  }

  static saveTalentInfoWithToken(data, handleResponse) {
    processRequestWithNotification(`talent/${getUserID()}/`, 'put', data, handleResponse, NOTIFY_MESSAGES.SAVE_TALENT_INFO, true);
  }

  static changeTalentPassword(data, handleResponse) {
    processRequestWithNotification(`talent/${getUserID()}/changePassword/`, 'put', data, handleResponse, NOTIFY_MESSAGES.CHANGE_TALENT_PASSWORD, true);
  }

  static addTalentPositionAndSkills(data, handleResponse) {
    processRequestWithNotification(`talent/${getUserID()}/changePassword/`, 'put', data, handleResponse, NOTIFY_MESSAGES.ADD_TALENT_POSITION_AND_SKILLS, true);
  }

  static saveLanguages(user_id, data, handleResponse) {
    processRequestWithNotification(`talent_language/${user_id}/all`, 'post', data, handleResponse, NOTIFY_MESSAGES.SAVE_LANGUAGE, true);
  }

  static saveLanguagesWithToken(data, handleResponse) {
    processRequestWithNotification(`talent_language/${getUserID()}/all`, 'post', data, handleResponse, NOTIFY_MESSAGES.SAVE_LANGUAGE, true);
  }

	static saveMedicals(user_id, data, handleResponse) {
    processRequestWithNotification(`talent_medical/${user_id}/all`, 'post', data, handleResponse, NOTIFY_MESSAGES.SAVE_MEDICAL, true);
  }

  static saveMedicalsWithToken(data, handleResponse) {
    processRequestWithNotification(`talent_medical/${getUserID()}/all`, 'post', data, handleResponse, NOTIFY_MESSAGES.SAVE_MEDICAL, true);
  }

  static saveAvailability(user_id, data, handleResponse) {
    processRequestWithNotification(`talent_medical/${user_id}/all`, 'post', data, handleResponse, NOTIFY_MESSAGES.SAVE_AVAILABLE, true);
  }

  static saveAvailabilityWithToken(data, handleResponse) {
    processRequestWithNotification(`talent_availability/${getUserID()}/all`, 'post', data, handleResponse, NOTIFY_MESSAGES.SAVE_AVAILABLE, true);
  }

  static deletePicture(picture_id, handleResponse) {
    processRequestWithNotification(`talent_picture/${picture_id}/`, 'delete', null, handleResponse, NOTIFY_MESSAGES.DELETE_PICTURE, true);
  }

  static deleteResume(resume_id, handleResponse) {
    processRequestWithNotification(`talent_resume/${resume_id}/`, 'delete', null, handleResponse, NOTIFY_MESSAGES.DELETE_RESUME, true);
  }

  static deleteVideoGreeting(video_greeting_id, handleResponse) {
    processRequestWithNotification(`talent_video_greetings/${video_greeting_id}/`, 'delete', null, handleResponse, NOTIFY_MESSAGES.DELETE_VIDEO_GREETING, true);
  }

  static deleteVideoSubSkill(video_sub_skill_id, handleResponse) {
    processRequestWithNotification(`talent_video_sub_skills/${video_sub_skill_id}/`, 'delete', null, handleResponse, NOTIFY_MESSAGES.DELETE_VIDEO_SUB_SKILL, true);
  }
}

export default TalentAPI
