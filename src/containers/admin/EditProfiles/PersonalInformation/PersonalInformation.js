import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Panel from "components/general/panel";
import AdminForm from 'components/shiptalent/forms/adminForm';
import * as adminActions from 'actions/adminActions';
import defaultValues from 'constants/defaultValues';
import { adminStyles } from 'styles';
import UserNote from "../UserNote/UserNote";


class PersonalInformation extends React.Component  {
  state = {
    profileId: 0,
    userIds: [],
    noteTypes: [defaultValues.USER_NOTE_TYPE.PERSONAL_INFO]
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

  handleClickCall = () => {

  }

  handleClickEmail = () => {

  }

  renderInfo = (title, value, isBoldTitle) => {
    const { classes } = this.props;
    let style = isBoldTitle ? classNames(classes.adminGeneralTitle, classes.inlineText, classes.bold) : classNames(classes.adminGeneralTitle, classes.inlineText)
    return (
      <Grid item xs={12}>
        <Typography className={style}>
          {`${title}: `}
        </Typography>
        <Typography className={classNames(classes.adminGeneralText, classes.inlineText)}>
          {value}
        </Typography>
      </Grid>
    );
  }

  renderOnlyInfoValue = (value) => {
    const { classes } = this.props;
    return (
      <Grid item xs={12}>
        <Typography className={classNames(classes.adminGeneralText,)}>
          {value}
        </Typography>
      </Grid>
    );
  }

  renderContent() {
    const { profile, classes } = this.props;
    const { userIds, noteTypes } = this.state;

    return (
      <Panel>
        <Grid container spacing={24} justify="center" alignItems="center">
          <Grid item lg={8} md={4} xs={12} />
          <Grid item lg={2} md={4} xs={6} className={classNames(classes.centerText)}>
            <Button variant="contained" className={classNames(classes.button, classes.adminAddNoteButton)}
              onClick={this.handleClickCall} fullWidth
            >
              <Typography className={classes.adminAddNoteButtonTitle}>
                Call
              </Typography>
            </Button>
          </Grid>
          <Grid item lg={2} md={4} xs={6} className={classNames(classes.centerText)}>
            <Button variant="contained" className={classNames(classes.button, classes.adminAddNoteButton)}
              onClick={this.handleClickEmail} fullWidth
            >
              <Typography className={classes.adminAddNoteButtonTitle}>
                Email
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>

        <Grid container spacing={24} justify="flex-start" alignItems="flex-start">
          <Grid item lg={6} md={12} xs={12}>
            <Grid container spacing={16} justify="flex-start" alignItems="flex-start">
              <Grid item xs={12}>
                <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                  <Grid item xs={12}>
                    <Typography className={classNames(classes.adminGeneralTitle, classes.bold)}>
                      NAME, NATIONALITY & DOB
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classNames(classes.borderBox)}>
                      {profile && (
                        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                          {this.renderInfo('First Name', profile.user.first_name, true)}
                          {this.renderInfo('Last Name', profile.user.last_name, true)}
                          {this.renderInfo('Nationality', profile.nationality, true)}
                          {this.renderInfo('Date of Birth', profile.birthday, true)}
                        </Grid>
                      )}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid item xs={12}>
                <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                  <Grid item xs={12}>
                    <Typography className={classNames(classes.adminGeneralTitle, classes.bold)}>
                      ADDRESS
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classNames(classes.borderBox)}>
                      {profile && (
                        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                          {this.renderOnlyInfoValue(profile.mailing_addresse3)}
                          {this.renderOnlyInfoValue(profile.mailing_addresse4)}
                          {this.renderOnlyInfoValue(profile.mailing_addresse5)}
                          {this.renderOnlyInfoValue(profile.mailing_addresse6)}
                        </Grid>
                      )}
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                  <Grid item xs={12}>
                    <Typography className={classNames(classes.adminGeneralTitle, classes.bold)}>
                      PHONE
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classNames(classes.borderBox)}>
                      {profile && (
                        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                          {this.renderInfo('Mobile', profile.emergency_phone, false)}
                        </Grid>
                      )}
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                  <Grid item xs={12}>
                    <Typography className={classNames(classes.adminGeneralTitle, classes.bold)}>
                      EMAIL
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classNames(classes.borderBox)}>
                      {profile && (
                        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                          {this.renderOnlyInfoValue(profile.emergency_email)}
                        </Grid>
                      )}
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                  <Grid item xs={12}>
                    <Typography className={classNames(classes.adminGeneralTitle, classes.bold, classes.red)}>
                      EMERGENCY CONTACT
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classNames(classes.borderBox)}>
                      {profile && (
                        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                          {this.renderInfo('Name', `${profile.emergency_first_name} ${profile.emergency_first_name}`, false)}
                          {this.renderInfo('Relationship', defaultValues.EMERGENCY_CONTACT_TYPES[profile.emergency_relationship], false)}
                          {this.renderInfo('Phone', profile.emergency_phone, false)}
                        </Grid>
                      )}
                    </div>
                  </Grid>
                </Grid>
              </Grid>

            </Grid>
          </Grid>

          <Grid item lg={6} md={12} xs={12}>
            <Grid container spacing={16} justify="flex-start" alignItems="flex-start">
              <Grid item xs={12}>
                <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                  <Grid item xs={12}>
                    <Typography className={classNames(classes.adminGeneralTitle, classes.bold)}>
                      PHYSICAL
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classNames(classes.borderBox)}>
                      {profile && (
                        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                          {this.renderInfo('Height', `${profile.height}cm`, false)}
                          {this.renderInfo('Weight', `${profile.weight}kg`, false)}
                          {this.renderInfo('Age', `${profile.age_range}`, false)}
                        </Grid>
                      )}
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                  <Grid item xs={12}>
                    <Typography className={classNames(classes.adminGeneralTitle, classes.bold)}>
                      SELF DECLARATIONS
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classNames(classes.borderBox)}>
                      {profile && (
                        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                          {this.renderInfo('CPR', 'No', false)}
                          {this.renderInfo('Previous Ship', 'No', false)}
                          {this.renderInfo('Medical Conditions', 'None', false)}
                        </Grid>
                      )}
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <UserNote 
                  userIds={userIds} 
                  noteTypes={noteTypes} 
                  objectId={profile && profile.user.id}
                  enableAdd={true}
                  title={'NOTES'}
                />
              </Grid>
            </Grid>
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
        formSubTitle="PERSONAL INFORMATION"
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(adminStyles)(PersonalInformation));
