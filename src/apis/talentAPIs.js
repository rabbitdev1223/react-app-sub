import { getUserID } from "service/storage";
import {
  processRequestWithToken,
  notifyProgress, 
  hanldeResponseWithNotification
} from "./apiUtils";

class TalentAPI {
  static saveTalentInfo(user_id, data, handleResponse) {
    notifyProgress('Saving talent info...');
    processRequestWithToken(`talent/${user_id}/`, 'put', data, (response, isFailed) => hanldeResponseWithNotification(response, isFailed, 'Failed to save talent info. Please try later.', 'Talent info was saved successfully', handleResponse));
  }

  static saveTalentInfoWithToken(data, handleResponse) {
    notifyProgress('Saving talent info...');
    processRequestWithToken(`talent/${getUserID()}/`, 'put', data, (response, isFailed) => hanldeResponseWithNotification(response, isFailed, 'Failed to save talent info. Please try later.', 'Talent info was saved successfully', handleResponse, true));
  }

  static changeTalentPassword(data, handleResponse) {
    notifyProgress('Changing password...');
    processRequestWithToken(`talent/${getUserID()}/changePassword/`, 'put', data, (response, isFailed) => hanldeResponseWithNotification(response, isFailed, 'Failed to change password. Please try later.', 'Password was changed successfully', handleResponse));
  }

  static addTalentPositionAndSkills(data, handleResponse) {
    notifyProgress('Adding position and skills of talent...');
    processRequestWithToken(`talent/${getUserID()}/`, 'post', data, (response, isFailed) => hanldeResponseWithNotification(response, isFailed, 'Failed to add position and skills of talent. Please try later.', 'Position and skills of talent was added successfully', handleResponse, true));
  }

  static saveLanguages(user_id, data, handleResponse) {
    notifyProgress('Saving languages...');
    processRequestWithToken(`talent_language/${user_id}/all`, 'post', data, (response, isFailed) => hanldeResponseWithNotification(response, isFailed, 'Failed to save languages. Please try later.', 'Languages was added successfully', handleResponse, true));
  }

  static saveLanguagesWithToken(data, handleResponse) {
    notifyProgress('Saving languages...');
    processRequestWithToken(`talent_language/${getUserID()}/all`, 'post', data, (response, isFailed) => 
      hanldeResponseWithNotification(response, isFailed, 'Failed to save languages. Please try later.', 'Languages was added successfully', handleResponse, true));
  }

	static saveMedicals(user_id, data, handleResponse) {
    notifyProgress('Saving medicals...');
    processRequestWithToken(`talent_medical/${user_id}/all`, 'post', data, (response, isFailed) => hanldeResponseWithNotification(response, isFailed, 'Failed to save medicals. Please try later.', 'Medicals was added successfully', handleResponse, true));
  }

  static saveMedicalsWithToken(data, handleResponse) {
    notifyProgress('Saving medicals...');
    processRequestWithToken(`talent_medical/${getUserID()}/all`, 'post', data, (response, isFailed) => hanldeResponseWithNotification(response, isFailed, 'Failed to save medicals. Please try later.', 'Medicals was added successfully', handleResponse, true));
  }

  static saveAvailability(user_id, data, handleResponse) {
    notifyProgress('Saving availabilities...');
    processRequestWithToken(`talent_availability/${user_id}/all`, 'post', data, (response, isFailed) => hanldeResponseWithNotification(response, isFailed, 'Failed to save availabilities. Please try later.', 'Availabilities was added successfully', handleResponse, true));
  }

  static saveAvailabilityWithToken(data, handleResponse) {
    notifyProgress('Saving availabilities...');
    processRequestWithToken(`talent_availability/${getUserID()}/all`, 'post', data, (response, isFailed) => hanldeResponseWithNotification(response, isFailed, 'Failed to save availabilities. Please try later.', 'Availabilities was added successfully', handleResponse, true));
  }

  static deletePicture(picture_id, handleResponse) {
    notifyProgress('Deleting pictures...');
    processRequestWithToken(`talent_picture/${picture_id}/`, 'delete', null, (response, isFailed) => hanldeResponseWithNotification(response, isFailed, 'Failed to delete pictures. Please try later.', 'Pictures was deleted successfully', handleResponse, true));
  }

  static deleteResume(resume_id, handleResponse) {
    notifyProgress('Deleting resume...');
    processRequestWithToken(`talent_resume/${resume_id}/`, 'delete', null, (response, isFailed) => hanldeResponseWithNotification(response, isFailed, 'Failed to delete resume. Please try later.', 'Resume was deleted successfully', handleResponse, true));
  }

  static deleteVideoGreeting(video_greeting_id, handleResponse) {
    notifyProgress('Deleting greeting video...');
    processRequestWithToken(`talent_video_greetings/${video_greeting_id}/`, 'delete', null, (response, isFailed) => hanldeResponseWithNotification(response, isFailed, 'Failed to delete geeting video. Please try later.', 'Greeting video was deleted successfully', handleResponse, true));
  }

  static deleteVideoSubSkill(video_sub_skill_id, handleResponse) {
    notifyProgress('Deleting video of the sub skill...');
    processRequestWithToken(`talent_video_sub_skills/${video_sub_skill_id}/`, 'delete', null, (response, isFailed) => hanldeResponseWithNotification(response, isFailed, 'Failed to delete video of the sub skill. Please try later.', 'Video of the sub skill was deleted successfully', handleResponse, true));
  }
}
export default TalentAPI
