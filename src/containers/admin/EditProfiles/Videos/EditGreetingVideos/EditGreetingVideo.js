import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import Panel from 'components/general/panel';
import ConfirmApproveDialog from 'components/shiptalent/dialogs/ConfirmApproveDialog';
import ConfirmRejectDialog from 'components/shiptalent/dialogs/ConfirmRejectDialog';
import VideoPlayer from 'components/shiptalent/videos/videoPlayer';
import AdminForm from 'components/shiptalent/forms/adminForm';
import ApproveAction from '../../ApproveAction';
import VideoDetail from '../VideoDetail';
import AdminAPI from 'apis/adminAPIs';
import * as talentActions from 'actions/talentActions';
import { adminStyles } from 'styles';


class EditGreetingVideo extends Component  {

  state = {
    video: null,
    selectedValue: '',
    openConfirmApproveDialog: false,
    openConfirmRejectDialog: false,
    comment: ''
  };

  getInfoFromProps = (props) => {
    const { location } = props;
    let video = (location && location.state && location.state.video) ? location.state.video : null;
    let selectedValue = (video && video.approved) ? 'approved' : '';
    return { video, selectedValue, comment: '' };
  };

  getInfoFromNextProps = (props) => {
    const { profile, location } = props;
    let video = (location && location.state && location.state.video) ? location.state.video : null;
    let selectedValue = '';
    let updatedVideo = null;
    if (video && profile) {  
      updatedVideo = profile.talent_video_greetings.find(v => v.id === video.id);
      selectedValue = (updatedVideo && updatedVideo.approved) ? 'approved' : '';
    }
    return { video: updatedVideo, selectedValue, comment: '' };
  };

  componentWillMount = () => {
    this.setState({...this.getInfoFromProps(this.props)});
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({...this.getInfoFromNextProps(nextProps)});
  };

  handleChange = event => {
    if (event.target.value === 'approved') {
      this.handleClickApprove();
    } else if (event.target.value === 'reject') {
      this.handleClickReject();
    }
  };

  handleClickApprove = () => {
    this.setState({openConfirmApproveDialog: true, comment: ''});
  }

  handleClickApproveOk = () => {
    this.setState({openConfirmApproveDialog: false}, () => {
      const { video } = this.state;
      const { profile } = this.props;
      let data = {
        talent: profile.id,
        approved: true,
        approved_date: moment().format(),
        approved_by: this.props.auth.access.username
      };
      AdminAPI.saveGreetingVideo(video.id, data, this.handleApproveResponse);
    });
  }

  handleClickApproveCancel = () => {
    this.setState({openConfirmApproveDialog: false});
  }

  handleApproveResponse = (response, isFailed) => {
    if (!isFailed) {
      this.setState({video: response, selectedValue: 'approved'}, () => {
        this.props.talentActions.getTalentInfo(this.props.profile.id);
      });
    }
  };

  handleClickReject = () => {
    this.setState({openConfirmRejectDialog: true, comment: ''});
  }

  handleClickRejectOk = (comment) => {
    this.setState({openConfirmRejectDialog: false, comment}, () => {
      const { video } = this.state;
      const { profile } = this.props;
      let data = {
        talent: profile.id,
        comment
      };
      AdminAPI.deleteGreetingVideo(video.id, data, this.handleRejectResponse);
    });
  }

  handleClickRejectCancel = () => {
    this.setState({openConfirmRejectDialog: false});
  }

  handleRejectResponse = (response, isFailed) => {
    // if (!isFailed) 
    this.setState({selectedValue: 'reject'});
    this.props.talentActions.getTalentInfo(this.props.profile.id);
  };

  renderContent() {
    const { video, selectedValue, openConfirmApproveDialog, openConfirmRejectDialog } = this.state;

    return (
      <Panel>
        <Grid container spacing={24}>
          <Grid item xs />
          <Grid item md={7} xs={12}>
            <VideoDetail video={video} />
          </Grid>
          <Grid item md={3} xs={12}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <ApproveAction selectedValue={selectedValue} onChange={this.handleChange} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs />

          <Grid item xs={12} >
            <Grid container spacing={8} justify="center" alignItems="center">
              <Grid item xs />
              <Grid item xs>
                <VideoPlayer url={video ? video.url : ''} />
              </Grid>
              <Grid item xs />
            </Grid>
          </Grid>
        </Grid>

        <ConfirmApproveDialog
          open={openConfirmApproveDialog}
          onCancel={this.handleClickApproveCancel}
          onOK={this.handleClickApproveOk}
          title={'Are you sure to approve this video?'}
          description={'Clients will be able to show this video of talent.'}
        />
        <ConfirmRejectDialog
          open={openConfirmRejectDialog}
          onCancel={this.handleClickRejectCancel}
          onOK={this.handleClickRejectOk}
          title={'Are you sure to reject this video?'}
          description={'This video will be deleted. Please add comments and resason why video was rejected.'}
        />
      </Panel>
    );
  }

  render() {
    const { video } = this.state;
    const { profile } = this.props;
    return (
      <AdminForm
        talent={profile}
        showName
        formSubTitle={video ? `VIDEO GREETING (${video.language})` : ''}
        nextLink={{pathname: "/admin/edit-profiles/profile-videos/greetings"}}
        nextButtonTitle="Back to Video Greetings"
      >
        {this.renderContent()}
      </AdminForm>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    talentActions: bindActionCreators(talentActions, dispatch),
  };
};

const mapStateToProps = state => {
  const { auth, talentInfo } = state;
  return {
    auth,
    profile: talentInfo.value
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(adminStyles)(EditGreetingVideo));