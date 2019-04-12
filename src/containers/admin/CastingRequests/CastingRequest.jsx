import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from "moment";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Panel from "components/general/panel";
import AdminForm from 'components/shiptalent/forms/adminForm';
import AlertDialog from 'components/shiptalent/dialogs/AlertDialog';
import CastingRequestTalentTable from './CastingRequestTalentTable'; 
import Spacer from 'components/general/spacer';
import UserNote from 'containers/admin/EditProfiles/UserNote/UserNote';
import AdminAPI from 'apis/adminAPIs';
import * as adminActions from 'actions/adminActions';
import defaultValues from 'constants/defaultValues';
import { adminStyles } from 'styles';

const confirmDescription = {
  isContracted: 'Status of this casting request will be as In Progress. Are your sure?',
  isRequestCompleted: 'Status of this casting request will be as Archive. Are your sure?'
}

class CastingRequest extends React.Component  {

  state = {
    castingRequest: null,
    note: '',
    isLoading: false,
    isSettingStatus: false,
    isContracted: false,
    isRequestCompleted: false,
    showActionConfirmDialog: false,
    selectedActionName: null,
    userIds: [],
    noteTypes: [defaultValues.USER_NOTE_TYPE.CASTING_REQUEST],
  };

  getInfoFromCastingRequest = (castingRequest) => {
    let isContracted = false;
    let isRequestCompleted = false;
    const { DRAFT, REQUESTED, REVIEWING, DECLINED, CANCELED, COMPLETED} = defaultValues.CASTING_REQUEST_STATUS;
    if (castingRequest) {
      isContracted = (castingRequest.status !== DRAFT) && (castingRequest.status !== REQUESTED) && (castingRequest.status !== REVIEWING)
      isRequestCompleted = (castingRequest.status === DECLINED) || (castingRequest.status === CANCELED) || (castingRequest.status === COMPLETED)
    }
    return { isContracted, isRequestCompleted };
  };

  getInfoFromProps = (props) => {
    const { location } = props;
    let castingRequest = (location && location.state && location.state.castingRequest) ? location.state.castingRequest : null;
    
    return { castingRequest, ...this.getInfoFromCastingRequest(castingRequest) };
  };

  handleGetCastingRequestResponse = (response, isFailed) => {
    if(isFailed) {
      this.setState({sLoading: false});
    } else {
      this.setState({castingRequest: response, isLoading: false}, () => {
        const { noteTypes, castingRequest } = this.state;
        let userIds = [];

        if (castingRequest && castingRequest.casting_request_talents) {
          userIds = castingRequest.casting_request_talents.map(crt => {
            return crt.talent.user.id;
          })
        }

        if (userIds.length > 0) {
          let searchCondition = {
            receivers: userIds,
            note_types: noteTypes,
          };
          if (castingRequest) searchCondition = {...searchCondition, object_id: castingRequest.id}
          this.props.adminActions.searchNotes(searchCondition);
        }
        this.setState({userIds});
      });
    }
  };

  componentWillMount = () => {
    this.setState({...this.getInfoFromProps(this.props), isLoading: true}, () => {
      const { castingRequest } = this.state;
      if (castingRequest) AdminAPI.getCastingRequest(castingRequest.id, this.handleGetCastingRequestResponse);
    });
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({...this.getInfoFromProps(nextProps)});
  };

  handleClickOK = () => {
    const { selectedActionName } = this.state;
    if (selectedActionName === 'isContracted') {
      this.handleSetContracted();
    } else if (selectedActionName === 'isRequestCompleted') {
      this.handleSetRequestCompleted();
    }
    this.setState({isSettingStatus: true, showActionConfirmDialog: false, selectedActionName: null});
  };

  handleClickCancel = () => {
    this.setState({showActionConfirmDialog: false, selectedActionName: null});
  };

  handleClickCastingRequestActions = name => event => {
    this.setState({showActionConfirmDialog: true, selectedActionName: name});
  };

  handleSetContracted = () => {
    const { castingRequest } = this.state;
    let data = {
      status: defaultValues.CASTING_REQUEST_STATUS.IN_PROGRESS,
      status_updated_date: moment().format()
    };
    AdminAPI.setCastingRequestStatus(castingRequest.id, data, this.handleSetContractedResponse);
  };

  handleSetContractedResponse = (response, isFailed) => {
    if(isFailed) {
      this.setState({isSettingStatus: true});
    } else {
      this.setState({castingRequest: response, ...this.getInfoFromCastingRequest(response)});
    }
  };

  handleSetRequestCompleted = () => {
    const { castingRequest } = this.state;
    let data = {
      status: defaultValues.CASTING_REQUEST_STATUS.COMPLETED,
      status_updated_date: moment().format()
    };
    AdminAPI.setCastingRequestStatus(castingRequest.id, data, this.handleSetContractedResponse);
  };

  handleSetRequestCompletedResponse = (response, isFailed) => {
    console.log('==== handleSetRequestCompletedResponse: response: ', response);
    if(isFailed) {
      this.setState({isSettingStatus: false});
    } else {
      this.setState({castingRequest: response, ...this.getInfoFromCastingRequest(response)});
    }
  };

  renderContent() {
    const { classes } = this.props;
    const { castingRequest, isContracted, isRequestCompleted, showActionConfirmDialog, selectedActionName, noteTypes, userIds } = this.state;
    let status_updated_date = (castingRequest && castingRequest.status_updated_date) ? moment.tz(castingRequest.status_updated_date).format(defaultValues.ADMIN_EDIT_PROFILE_FORMAT) : '';
    

    return (
      <Panel>
        <Grid container spacing={32} justify="center" alignItems="center">
          <Grid item xs={12}><Spacer size={30} /></Grid>
          <Grid lg={1} md={1} xs={12} />
          <Grid lg={4} md={4} xs={12} >
            <CastingRequestTalentTable
              castinRequestTalents={castingRequest ? castingRequest.casting_request_talents : null} 
              castingRequest={castingRequest} 
            />
          </Grid>
          <Grid lg={1} md={1} xs={12} ><Spacer size={20} /></Grid>
          <Grid lg={5} md={5} xs={12} >
            <img 
              src={require('assets/img/casting_status_description.png')} 
              alt='casting_status_description'
              className={classes.adminNewProfilesApprovalImage}
            />
          </Grid>
          <Grid lg={1} md={1} xs={12} />

          <Grid item xs={12}><Spacer size={15} /></Grid>

          <Grid lg={1} md={1} xs={12} />
          <Grid item lg={10} md={10} xs={12}>
            <UserNote 
              userIds={userIds} 
              noteTypes={noteTypes} 
              objectId={castingRequest.id}
              enableAdd={true}
            /> 
          </Grid>
          <Grid lg={1} md={1} xs={12} />

          <Grid lg={1} md={1} xs={12} />
          <Grid item lg={10} md={10} xs={12}>
            <FormGroup column>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isContracted}
                    onChange={this.handleClickCastingRequestActions('isContracted')}
                    value="isContracted"
                    color="primary"
                    disabled={isContracted}
                  />
                }
                label={`Client Contacted to Confirm Receipt of Request ${isContracted ? status_updated_date : ''}`}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isRequestCompleted}
                    onChange={this.handleClickCastingRequestActions('isRequestCompleted')}
                    value="isRequestCompleted"
                    color="primary"
                    disabled={isRequestCompleted}
                  />
                }
                label={`Request Completed ${isRequestCompleted ? status_updated_date : ''}`}
              />
            </FormGroup>
          </Grid>
          <Grid lg={1} md={1} xs={12} />
          <Grid item xs={12}><Spacer size={30} /></Grid>
        </Grid>
        <AlertDialog open={showActionConfirmDialog} onOK={this.handleClickOK} onCancel={this.handleClickCancel} 
          title="Confirm" description={selectedActionName ? confirmDescription[selectedActionName] : ''}
        />

      </Panel>
    );
  }

  render() {
    const { castingRequest } = this.state;
    return (
      <AdminForm
        formTitle="CASTING REQUEST"
        formSubTitle={ castingRequest ? `${castingRequest.name} ${moment(castingRequest.created).format(defaultValues.ADMIN_CASTING_REQUEST_TITLE_FORMAT)}` : '' }
        backLink={"/admin/casting-requests"}
        backButtonTitle="Casting Requests"
        nextLink={"/admin"}
        nextButtonTitle="Agent Dashboard"
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
    profile: talentInfo.value
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(adminStyles)(CastingRequest));