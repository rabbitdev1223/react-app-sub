import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Panel from "components/general/panel";
import AdminForm from 'components/shiptalent/forms/adminForm';
import UserNote from "../UserNote/UserNote";
import MedicalUploads from "./MedicalUploads";
import SelfReportedConditions from "./SelfReportedConditions";
import * as adminActions from 'actions/adminActions';
import { adminStyles } from 'styles';
import defaultValues from "constants/defaultValues";


class Medicals extends React.Component  {

  state = {
    profileId: 0,
    userIds: [],
    medicalConditionNoteTypes: [defaultValues.USER_NOTE_TYPE.MEDICAL_CONDITION],
    medicalUploadsNoteTypes: [defaultValues.USER_NOTE_TYPE.MEDICAL],
  };

  getInfoFromProps = (props) => {
    const { profile } = props;
    const { medicalConditionNoteTypes } = this.state;
    let profileId = profile && profile.user.id;
    let userIds = [];

    if (profile) userIds.push(profile.user.id);
    if (userIds.length > 0) {
      let searchCondition = {
        receivers: userIds,
        note_types: medicalConditionNoteTypes,
      };
      this.props.adminActions.searchNotes(searchCondition);
    }

    return { profileId, userIds };
  };

  handleGetAllCastingRequestResponse = (response, isFailed) => {
    if(isFailed) {
      this.setState({isLoading: false});
    } else {
      // Filter completed castingRequestTalents
      
    }
  };

  componentWillMount = () => {
    this.setState({...this.getInfoFromProps(this.props), isLoading: true}, () => {
      // const { profile } = this.props;
      // if (profile) {
        // let data = { talent_id: profile.id };
        // AdminAPI.searchCastingRequestTalent(data, this.handleGetAllCastingRequestResponse);
      // }
    });
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({...this.getInfoFromProps(nextProps)});
  };

  renderContent() {
    const { userIds, medicalConditionNoteTypes, medicalUploadsNoteTypes } = this.state;
    const { profile } = this.props;

    return (
      <Panel>
        <Grid container spacing={24}>
          <Grid item lg={6} md={12} xs={12}>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <UserNote 
                  userIds={userIds} 
                  noteTypes={medicalConditionNoteTypes} 
                  objectId={profile && profile.user.id}
                  enableAdd={true}
                  title={"OTHER MEDICAL ONDITIONS"}
                />
              </Grid>
              <Grid item xs={12}>
                <MedicalUploads profile={profile} />
              </Grid>
              <Grid item xs={12}>
                <UserNote 
                  userIds={userIds} 
                  noteTypes={medicalUploadsNoteTypes} 
                  objectId={profile && profile.user.id}
                  enableAdd={true}
                  title={"NOTES"}
                />
              </Grid>  
            </Grid>
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <SelfReportedConditions profile={profile} />
          </Grid>
        </Grid>
      </Panel>
    );
  }

  render() {
    const { profile } = this.props;
    return (
      <AdminForm
        talent={profile}
        showName
        formSubTitle="MEDICAL INFOMATION"
        nextLink={{pathname: "/admin/edit-profiles/edit-profile", state: {profileId: profile ? profile.id : null}}}
        nextButtonTitle="Back to Profile"
      >
        {this.renderContent()}
      </AdminForm>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    adminActions: bindActionCreators(adminActions, dispatch)
  };
};

const mapStateToProps = state => {
  const { talentInfo } = state;
  return {
    profile: talentInfo.value,
    loading: talentInfo.isFetching
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(adminStyles)(Medicals));
