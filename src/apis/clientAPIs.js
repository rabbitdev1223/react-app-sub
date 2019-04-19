import apiConfig from 'constants/api';
import { getToken } from "service/storage";
import { getUserID } from "service/storage";
import {
  processRequestWithToken,
  notifyProgress, 
  hanldeResponseWithNotification
} from "./apiUtils";

class ClientAPI {
  // static processResponse(response, handleResponse) {
  //   console.log('=== response: ', response);
  //   if(response.error) {
  //     console.log('error: ', response.error);
  //     handleResponse(response.error, true);
  //   }
  //   else {
  //     if (response){
  //       console.log('success: ', response);
  //       handleResponse(response, false)
  //     } else {
  //       console.log('error: ', response);
  //       handleResponse(response.error, true);
  //     }
  //   }
  // }

  // static processRequest(url, method, data, handleResponse) {
  //   console.log('==== processRequest: ', url, data);
  //   let params = {
  //     method: method,
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   }
  //   if (data) {
  //     params = {
  //       ...params,
  //       body: JSON.stringify(data)
  //     }
  //   }

  //   fetch(`${apiConfig.url}/${url}`, params)
  //     .then(response => response.json())
  //     .then(response => {
  //       this.processResponse(response, handleResponse)
  //     })
  //     .catch(error => {
  //       console.log('error: ', error);
  //       handleResponse(error, true)
  //     })
  // }

  // static processRequestWithToken(url, method, data, handleResponse) {
  //   console.log('==== processRequest: ', url, data);
  //   let parameters = {
  //     method: method,
  //     headers: {
  //       'Accept': 'application/json',
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${getToken()}`
  //     }
  //   };

  //   if (method !== 'get' && data !== '' && data !== null) {
  //     parameters = {...parameters, body: JSON.stringify(data)};
  //   }

  //   console.log('==== parameters: ', parameters)

  //   fetch(`${apiConfig.url}/${url}`, parameters)
  //     .then(response => {console.log('=== response: ', response); return response.json()})
  //     .then(response => {
  //       this.processResponse(response, handleResponse)
  //     })
  //     .catch(error => {
  //       console.log('error: ', error)
  //       handleResponse(error, true)
  //     })
  // }

  static createCastingRequest(data, handleResponse) {
    processRequestWithToken(`client/casting_request/create`, 'post', data, handleResponse)
  }

  static saveCastingRequest(crID, data, handleResponse) {
    processRequestWithToken(`client/casting_request/${crID}/`, 'put', data, handleResponse)
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
   processRequestWithToken(`client/casting_request_talent/${crtID}/`, 'put', data, handleResponse)
  }

  static createAllCastingRequestTalents(data, handleResponse) {
   processRequestWithToken(`client/casting_request_talent/create/`, 'post', data, handleResponse)
  }

  static deleteCastingRequestTalent(crtID, handleResponse) {
   processRequestWithToken(`client/casting_request_talent/${crtID}/`, 'delete', null, handleResponse)
  }

  static getAllBlockedProfiles(handleResponse) {
   processRequestWithToken(`client/blocked_profile/all`, 'get', null, handleResponse)
  }

  static blockTalent(data, handleResponse) {
   processRequestWithToken(`client/blocked_profile/create`, 'post', data, handleResponse)
  }


  static unblockProfile(bpID, handleResponse) {
   processRequestWithToken(`client/blocked_profile/${bpID}/`, 'delete', null, handleResponse)
  }

  static saveBlockedProfile(bpID, data, handleResponse) {
   processRequestWithToken(`client/blocked_profile/${bpID}/`, 'put', data, handleResponse)
  }

  static getAllCallBacks(handleResponse) {
   processRequestWithToken(`client/call_back/all`, 'get', null, handleResponse)
  }

  static addCallBacks(data, handleResponse) {
   processRequestWithToken(`client/call_back/create`, 'post', data, handleResponse)
  }

  static removeCallBack(callbackId, handleResponse) {
   processRequestWithToken(`client/call_back/${callbackId}/`, 'delete', null, handleResponse)
  }

  static getAllFavorites(handleResponse) {
   processRequestWithToken(`client/favorite/all`, 'get', null, handleResponse)
  }

  static addFavorite(data, handleResponse) {
   processRequestWithToken(`client/favorite/create`, 'post', data, handleResponse)
  }

  static removeFavorite(favoriteId, handleResponse) {
   processRequestWithToken(`client/favorite/${favoriteId}/`, 'delete', null, handleResponse)
  }

  static addRating(data, handleResponse) {
   processRequestWithToken(`talent_rating/create`, 'post', data, handleResponse)
  }

  static getAllTeamMembers(handleResponse) {
   processRequestWithToken(`client/team_member/all`, 'get', null, handleResponse)
  }

  static addTeamMembers(data, handleResponse) {
   processRequestWithToken(`client/team_member/bulk`, 'post', data, handleResponse)
  }

  static removeTeamMember(teamMemberId, handleResponse) {
   processRequestWithToken(`client/team_member/${teamMemberId}/`, 'delete', null, handleResponse)
  }

  static getAllSharedProfiles(handleResponse) {
   processRequestWithToken(`client/shared_profile/all`, 'get', null, handleResponse)
  }

  static getAllSharedTalents(pageNumber, handleResponse) {
   processRequestWithToken(
      `client/shared_profile/shared_talent/all?page=${pageNumber}`,
      'get', null, handleResponse
    );
  }

  static getAllTalentSharedWith(pageNumber, handleResponse) {
   processRequestWithToken(
      `client/shared_profile/talent_shared_with/all?page=${pageNumber}`,
      'get', null, handleResponse
    );
  }

  static getAllTalentSharedByTeamMember(pageNumber, handleResponse) {
   processRequestWithToken(
      `client/shared_profile/shared_talent_by_team_member/all?page=${pageNumber}`,
      'get', null, handleResponse
    );
  }

  static addSharedProfiles(data, handleResponse) {
   processRequestWithToken(`client/shared_profile/bulk`, 'post', data, handleResponse)
  }

  static removeSharedProfile(sharedProfileID, handleResponse) {
   processRequestWithToken(`client/shared_profile/${sharedProfileID}/`, 'delete', null, handleResponse)
  }

  static addClientFeedback(data, handleResponse) {
   processRequestWithToken(`client/feedback/create`, 'post', data, handleResponse)
  }

  static addRequestMoreInfo(data, handleResponse) {
   processRequestWithToken(`client/request/create`, 'post', data, handleResponse)
  }

}
export default ClientAPI
