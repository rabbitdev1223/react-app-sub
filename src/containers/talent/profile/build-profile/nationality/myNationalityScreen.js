import React, {Component} from 'react';
import TalentBuildProfileForm from 'components/shiptalent/forms/talentBuildProfileForm';
import TalentNationalityForm from './talentNationalityForm';
import TalentAPI from 'apis/talentAPIs'

class MyNationality extends Component {
  render() {
    return (
      <TalentBuildProfileForm
        ContentLayout={TalentNationalityForm}
        formTitle={"Nationality & Immigration Information"}
        nextLink={"/edit-profile"}
        nextButtonTitle={"Back to Build/Edit My Profile"}
        saveInfoAPI={TalentAPI.saveTalentInfoWithToken}
      />
    )
  }
}

export default MyNationality;
