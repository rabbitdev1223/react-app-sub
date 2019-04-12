import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import Panel from "components/general/panel";
import AdminForm from 'components/shiptalent/forms/adminForm';
import * as adminActions from 'actions/adminActions';
import defaultValues from 'constants/defaultValues';
import { adminStyles } from 'styles';
import UserNote from "../UserNote/UserNote";
import Visas from "./Visas";
import Spacer from "components/general/spacer";


class Immigration extends React.Component  {
  state = {
    profileId: 0,
    userIds: [],
    noteTypes: [defaultValues.USER_NOTE_TYPE.IMMIGRATION],
    verified: false
  };

  getInfoFromProps = (props) => {
    const { profile } = props;
    const { noteTypes } = this.state;
    let profileId = profile && profile.user.id;
    let userIds = [];
    let verified = false;

    if (profile) {
      userIds.push(profile.user.id);
      // verified = profile.agency_immigrate_verifed
    }
    if (userIds.length > 0) {
      let searchCondition = {
        receivers: userIds,
        note_types: noteTypes,
      };
      this.props.adminActions.searchNotes(searchCondition);
    }

    return { profileId, userIds, verified };
  };

  componentWillMount = () => this.setState({...this.getInfoFromProps(this.props)});

  componentWillReceiveProps = (nextProps) => this.setState({...this.getInfoFromProps(nextProps)});

  handleChangeVerified = name => event => {
    this.setState({ [name]: event.target.checked });
  };

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
    const { userIds, noteTypes, verified } = this.state;

    return (
      <Panel>
        <Grid container spacing={24} justify="flex-start" alignItems="flex-start">
          <Grid item lg={6} md={12} xs={12}>
            <Grid container spacing={16} justify="flex-start" alignItems="flex-start">
              <Grid item xs={12}>
                <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                  <Grid item xs={12}>
                    <Typography className={classNames(classes.adminGeneralTitle, classes.bold)}>
                      PASSPORT
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classNames(classes.borderBox)}>
                      {profile && (
                        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                          {this.renderInfo('Country', profile.country_of_current_residence, false)}
                          {this.renderInfo('Number', profile.passport_number, false)}
                          {this.renderInfo('Expiration Date', profile.passport_expiration_date, false)}
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
                      U.S. Permanent Resident Card?
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classNames(classes.borderBox)}>
                      {profile && (
                        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                          <Grid item xs={12}>
                            <FormControlLabel
                              control={
                                <Radio
                                  checked={profile.have_green_card}
                                  value={'GreenCard'}
                                  color="default"
                                  name="radio-button-demo"
                                  aria-label={'Yes'}
                                  readOnly
                                />}
                              label={'Yes'}
                            />
                            <FormControlLabel
                              control={
                                <Radio
                                  checked={!profile.have_green_card}
                                  value={'GreenCard'}
                                  color="default"
                                  name="radio-button-demo"
                                  aria-label={'No'}
                                  readOnly
                                />}
                              label={'No'}
                            />
                          </Grid>
                          {this.renderInfo('Expiration Date', profile.green_card_expiration_date, false)}
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

          <Grid item lg={6} md={12} xs={12}>
            <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
              <Grid item xs={12}>
                {profile && (
                  <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
                    <Visas profile={profile} />
                  </Grid>
                )}
              </Grid>
              <Grid item xs={12}>
                <Spacer size={30} />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={verified}
                      onChange={this.handleChangeVerified('verified')}
                      value="verified"
                    />
                  }
                  label={
                    <Typography className={classNames(classes.adminGeneralTitle, )}>
                      {`Data Verified`}
                    </Typography>
                  }
                />
                { verified && (
                  <div className={classNames(classes.adminVisaExpirationText, )}>
                    <Typography className={classNames(classes.adminGeneralTitle, )}>
                      {`By: Admin`}
                    </Typography>
                    <Typography className={classNames(classes.adminGeneralTitle, )}>
                      {`On: 02/15/2019`}
                    </Typography>
                  </div>
                )}
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(adminStyles)(Immigration));
