import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Panel from "components/general/panel";
import AdminForm from 'components/shiptalent/forms/adminForm';
import * as adminActions from 'actions/adminActions';
import defaultValues from 'constants/defaultValues';
import { adminStyles } from 'styles';
import UserNote from "../UserNote/UserNote";
import ProfileLanguages from "./ProfileLanguages";


class Languages extends React.Component  {
  state = {
    profileId: 0,
    userIds: [],
    noteTypes: [defaultValues.USER_NOTE_TYPE.LANGUAGE],
  };

  getInfoFromProps = (props) => {
    const { profile } = props;
    const { noteTypes } = this.state;
    let profileId = profile && profile.user.id;
    let userIds = [];

    if (profile) userIds.push(profile.user.id);
    if (userIds.length > 0) {
      let searchCondition = {
        receivers: userIds,
        note_types: noteTypes,
      };
      this.props.adminActions.searchNotes(searchCondition);
    }

    return { profileId, userIds };
  };

  componentWillMount = () => this.setState({...this.getInfoFromProps(this.props)});

  componentWillReceiveProps = (nextProps) => this.setState({...this.getInfoFromProps(nextProps)});

  handleChangeVerified = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  renderContent() {
    const { profile } = this.props;
    const { userIds, noteTypes } = this.state;

    return (
      <Panel>
        <Grid container spacing={24} justify="flex-start" alignItems="flex-start">
          <Grid item lg={6} md={12} xs={12}>
            {profile && (
              <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                <ProfileLanguages profile={profile} />
              </Grid>
            )}
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <UserNote 
              userIds={userIds} 
              noteTypes={noteTypes} 
              objectId={profile && profile.user.id}
              enableAdd={true}
              title={'NOTES'}
            />
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
        formSubTitle="PROFILE NOTES"
        nextLink={{pathname: "/admin/edit-profiles/edit-profile", state: {profileId: profile ? profile.id : null}}}
        nextButtonTitle="Back to Profile"
        call={true}
        email={true}
      >
        {this.renderContent()}
      </AdminForm>
    );
  }
}


const mapStateToProps = state => {
  const { talentInfo } = state;
  return {
    profile: talentInfo.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    adminActions: bindActionCreators(adminActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(adminStyles)(Languages));
