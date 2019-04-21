function createNotifyMessage(progress, success, failed) {
  return { progress, success, failed};
}

export const NOTIFY_MESSAGES = {
  // talent notify messages
  SAVE_TALENT_INFO: createNotifyMessage(
    'Saving talent info...',
    'Talent info was saved successfully.',
    'Failed to save talent info. Please try later.'
  ),
  CHANGE_TALENT_PASSWORD: createNotifyMessage(
    'Changing password...',
    'Password was changed successfully.',
    'Failed to change password. Please try later.'
  ),
  ADD_TALENT_POSITION_AND_SKILLS: createNotifyMessage(
    'Adding position and skills of talent...',
    'Position and skills of talent was added successfully.',
    'Failed to add position and skills of talent. Please try later.'
  ),
  SAVE_LANGUAGE: createNotifyMessage(
    'Saving languages...',
    'Languages was added successfully.',
    'Failed to save languages. Please try later.'
  ),
  SAVE_MEDICAL: createNotifyMessage(
    'Saving medicals...',
    'Medicals was added successfully.',
    'Failed to save medicals. Please try later.'
  ),
  SAVE_AVAILABLE: createNotifyMessage(
    'Saving availabilities...',
    'Availabilities was added successfully.',
    'Failed to save availabilities. Please try later.'
  ),
  DELETE_PICTURE: createNotifyMessage(
    'Deleting pictures...',
    'Pictures was deleted successfully.',
    'Failed to delete pictures. Please try later.'
  ),
  DELETE_RESUME: createNotifyMessage(
    'Deleting resume...',
    'Resume was deleted successfully.',
    'Failed to delete resume. Please try later.'
  ),
  DELETE_VIDEO_GREETING: createNotifyMessage(
    'Deleting greeting video...',
    'Greeting video was deleted successfully.',
    'Failed to delete geeting video. Please try later.'
  ),
  DELETE_VIDEO_SUB_SKILL: createNotifyMessage(
    'Deleting video of the sub skill...',
    'Video of the sub skill was deleted successfully.',
    'Failed to delete video of the sub skill. Please try later.'
  ),

  // client notify messages
  CREATE_CASTING_REQUEST: createNotifyMessage(
    'Creating a casting request...',
    'A casting request was created successfully.',
    'Failed to create a casting request. Please try later.'
  ),
  SAVE_CASTING_REQUEST: createNotifyMessage(
    'Saving this casting request...',
    'This casting request was saved successfully.',
    'Failed to save this casting request. Please try later.'
  ),
  SAVE_CASTING_REQUEST_TALENT: createNotifyMessage(
    'Saving a casting request for talent...',
    'Casting request of talent was saved successfully.',
    'Failed to save this casting request for talent. Please try later.'
  ),
  CREATE_ALL_CASTING_REQUEST_TALENTS: createNotifyMessage(
    'Saving a casting request for talents...',
    'Casting request of talent swas saved successfully.',
    'Failed to save this casting request for talents. Please try later.'
  ),
  DELETE_CASTING_REQUEST_TALENT: createNotifyMessage(
    'Deleting a casting request for talent...',
    'Casting request of talent was deleted successfully.',
    'Failed to delete this casting request for talents. Please try later.'
  ),
  BLOCK_TALENT: createNotifyMessage(
    'Blocking this talent...',
    'This talent was blocked successfully.',
    'Failed to block this talent. Please try later.'
  ),
  UNBLOCK_TALENT: createNotifyMessage(
    'Unblocking this talent...',
    'This talent was unblocked successfully.',
    'Failed to unblock this talent. Please try later.'
  ),
  SAVE_BLOCKED_PROFILE: createNotifyMessage(
    'Saving blocked profile...',
    'Blocked profile was saved successfully.',
    'Failed to save blocked profile. Please try later.'
  ),
  ADD_CALLBACK: createNotifyMessage(
    'Adding callback...',
    'Callback was added successfully.',
    'Failed to add callback. Please try later.'
  ),
  REMOVE_CALLBACK: createNotifyMessage(
    'Removing callback...',
    'Callback was removed successfully.',
    'Failed to remove callback. Please try later.'
  ),
  ADD_FAVORITE: createNotifyMessage(
    'Adding to favorite...',
    'Talent was added to favorite successfully.',
    'Failed to add to favorite. Please try later.'
  ),
  REMOVE_FAVORITE: createNotifyMessage(
    'Removing from favorite...',
    'Talent was removed from favorite successfully.',
    'Failed to remove from favorite. Please try later.'
  ),
  ADD_RATING: createNotifyMessage(
    'Adding rating of talent...',
    'Rating of talent was added successfully.',
    'Failed to add rating. Please try later.'
  ),
  ADD_TEAM_MEMBER: createNotifyMessage(
    'Adding team member...',
    'You added and invited new team members successfully.',
    'Failed to add team member. Please try later.'
  ),
  REMOVE_TEAM_MEMBER: createNotifyMessage(
    'Removing team member...',
    'Team member was removed successfully.',
    'Failed to remove team member. Please try later.'
  ),
  ADD_SHARED_PROFILES: createNotifyMessage(
    'Sharing profiles...',
    'Profiles was shared successfully.',
    'Failed to share profiles. Please try later.'
  ),
  REMOVE_SHARED_PROFILES: createNotifyMessage(
    'Removing shared profiles...',
    'Shared profiles was removed successfully.',
    'Failed to remove shared profiles. Please try later.'
  ),
  ADD_CLIENT_FEEDBACK: createNotifyMessage(
    'Adding client feedback...',
    'Client feedback was added successfully.',
    'Failed to add client feedback. Please try later.'
  ),
  ADD_REQUEST_MORE_INFO: createNotifyMessage(
    'Requesting more info...',
    'You requested more info successfully.',
    'Failed to request more info. Please try later.'
  ),

  // admin notify messages
  SAVE_PROFILE: createNotifyMessage(
    'Saving profile info...',
    'Profile was saved successfully.',
    'Failed to save profile info. Please try later.'
  ),
  SAVE_PROFILE_RESUME: createNotifyMessage(
    'Saving resume of profile...',
    'Resume of profile was saved successfully.',
    'Failed to save resume of profile. Please try later.'
  ),
  DELETE_PROFILE_RESUME: createNotifyMessage(
    'Deleting resume of profile...',
    'Resume of profile was deleted successfully.',
    'Failed to delete resume of profile. Please try later.'
  ),
  SAVE_PROFILE_PICTURE: createNotifyMessage(
    'Saving picture of profile...',
    'Picture of profile was saved successfully.',
    'Failed to save picture of profile. Please try later.'
  ),
  DELETE_PROFILE_PICTURE: createNotifyMessage(
    'Deleting picture of profile...',
    'Picture of profile was deleted successfully.',
    'Failed to delete picture of profile. Please try later.'
  ),
  SET_CASTING_REQUEST_STATUS: createNotifyMessage(
    'Setting status of casting request...',
    'Status of casting request was set successfully.',
    'Failed to set status of casting request. Please try later.'
  ),
  APPROVE_VIDEO_GREETING: createNotifyMessage(
    'Approving greeting video...',
    'Greeting video was approved successfully.',
    'Failed to approve geeting video. Please try later.'
  ),
  APPROVE_SUB_SKILL_VIDEO: createNotifyMessage(
    'Approving video of sub skill...',
    'Video of sub skill was approved successfully.',
    'Failed to approve video of sub skill. Please try later.'
  ),
  DELETE_SUB_SKILL_VIDEO: createNotifyMessage(
    'Deleting video of sub skill...',
    'Video of sub skill was deleted successfully.',
    'Failed to delete video of sub skill. Please try later.'
  ),
  ADD_NOTE: createNotifyMessage(
    'Adding note...',
    'Note was added successfully.',
    'Failed to add note. Please try later.'
  ),
};
