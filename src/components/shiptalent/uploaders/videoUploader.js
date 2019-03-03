import React, {Component} from 'react';
import { Row, Col} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dropzone from 'react-dropzone';
import ImageLoader from 'react-loading-image';
import Request from 'superagent';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ClearRounded from '@material-ui/icons/ClearRounded';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import VideoViewModal from 'components/shiptalent/modals/videoModal';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from 'components/shiptalent/snackbars/alert';
import TalentAPI from 'apis/talentAPIs';
import * as talentActions from 'actions/talentActions';
import 'react-image-lightbox/style.css';
import styles from 'styles'


const theme = createMuiTheme ({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#C00'
    }
  }
})

class VideoUploader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      video: {},
      options: null,
      file: null,
      openVideoModal: false,
      progressPercent: 0.0,
      progressing: false,
    }
    this.onFinish = this.onFinish.bind(this)
  }

  getInfoFromProps(props) {
    const { talentInfo, videoData, optionsData } = props

    let video = {}
    let options = null
    let progressPercent = 0.0
    let progressing = false

    if (videoData) {
      // Get nationality info
      video = videoData
    }

    if (optionsData) {
      options = optionsData
    }

    return {
      video,
      options,
      progressPercent,
      progressing,
      notification: false
    }
  }

  componentWillMount() {
    this.setState({
      ...this.getInfoFromProps(this.props)
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.getInfoFromProps(nextProps)
    })
  }

  handleUploadVideo = (files) => {
    // Upload pdf files
    let file = files[0]
    const { preCheckFunc, signApi, completeApi, optionsData } = this.props
    if (preCheckFunc) {
      if (!preCheckFunc(optionsData)) {
        this.setState({notification: "Please select a language to upload the video."})
        return
      }
    }
    // Start to sign and upload file to s3
    this.setState({
      progressing: true
    }, () => {
      this.signAndUploadToS3(signApi, completeApi, file)
    })
  }

  signAndUploadToS3 = (signAPI, completeAPI, file) => {
    const { options } = this.state

    let params = {
      objectName: file.name,
      contentType: file.type
    }
    if (options) {
      params = {
        ...params,
        ...options
      }
    }

    fetch(signAPI, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(response => response.json())
      .then(response => {
        if(response.error) {
          console.log('error: ', response.error)
          this.onError(file)
        } else {
          if (response.signedUrl){
            console.log('success: ', response, response.signedUrl)
            this.uploadToS3(
              response.signedUrl,
              completeAPI,
              response.fileID,
              file)
          } else {
            console.log('error: ', response)
            this.onError(file)
          }
        }
      })
      .catch(error => {
        console.log('error: ', error)
        this.onError(file)
      })
  }

  uploadToS3 = (s3PutUrl, completeAPI, fileID, file) => {
    Request.put(s3PutUrl)
      .set("Content-Type", file.type)
      .set("x-amz-acl", 'public-read')
      .send(file)
      .on('progress', function(e) {
        this.onProgress(e.percent);
      }.bind(this))
      .end((err, res) => {
        if (err) {
          this.onError(fileID, file)
        } else {
          this.onFinish(completeAPI, fileID, file)
        }
      })
  };

  onProgress = (percent) => {
    this.setState({ progressPercent: percent })
  }

  doneUploadingProgress = () => {
    this.setState({
      progressing: false,
      progressPercent: 0
    })
  };

  onError = (file) => {
    console.log('==== Error: ', file)
    this.doneUploadingProgress()
  };

  onFinish = (completeAPI, fileID, file) => {
    const { onFinishUploadingCallbackFunc } = this.props
    let params = {
      fileID: fileID,
      fileSize: file.size,
      fileType: file.type,
    }
    console.log('=== onFinish: params: ', params)

    fetch(completeAPI, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(response => response.json())
      .then(response => {
        if(response.error) {
          console.log('error: ', response.error)
          this.onError(file, response.error)
        }
        else {
          // Update resume from server
          // this.uploadToS3ToServerToGetPreviewImage(generatePreviewAPI, fileID, file)
          console.log('==== uploading done')
          this.doneUploadingProgress()
          onFinishUploadingCallbackFunc()
        }
      })
      .catch(error => {
        console.log('error: ', error)
        this.onError(file, error)
      })
  }

  deleteVideo = () => {
    const { video } = this.state
    const { deleteApiFunc } = this.props
    if (deleteApiFunc) {
      deleteApiFunc(video.id, this.handleDeleteResponse)
    } else {
      console.log('==== DeleteAPI callback function do not exist in props.')
    }
  };

  handleDeleteResponse = (response, fail) => {
    // this.props.talentActions.getCurrentTalentInfo()
    console.log('==== deleted video: response: ', response, fail)
  };

  showVideo = () => {
    const { video } = this.state
    const haveVideo = video && video.url && video.uploaded && video.active
    if (haveVideo) {
      this.setState({ openVideoModal: true })
    }
  };

  closeVideo = () => {
    this.setState({ openVideoModal: false })
  };

  onInputChange = e => {
    const { currentTarget: { files } } = e;
    if (files[0]) {
      this.setState({ file: files[0] });
    }
  };

  renderContents() {
    const { title, noVideoTitle, subTitle, showCheckbox, classes } = this.props
    const { video, openVideoModal, progressing, progressPercent } = this.state
    const haveVideo = video && video.url && video.uploaded && video.active

    return (
      <div>
        <Row className="profile-picture-image-container">
          <Col xs="12" md="12" className="pt-3 pt-md-3 profile-picture-image-col">
            {
              progressing ? (
                <CircularProgress className={classes.talentProfileVideoGreetingImage}/>
              ) : (
                <div>
                  <div onClick={() => this.showVideo(video.url)}>
                    <ImageLoader
                      className={classes.talentProfileVideoGreetingImage}
                      src={
                        haveVideo ?
                        require('images/cinema-100-material.png') :
                        require('images/missing-video.png')
                      }
                      loading={() => <div className={classes.talentProfileVideoGreetingImage}>Loading...</div>}
                      error={() => <div>Error</div>}
                    />
                  </div>
                  <div>
                    {haveVideo && (
                      <Button
                        variant="contained"
                        color="secondary"
                        aria-label="Edit"
                        className={classes.talentProfileFileDeleteButton}
                        onClick={this.deleteVideo}
                      >
                        <ClearRounded style={{fontSize: '20px'}}/>
                      </Button>
                    )}

                  </div>
                  <VideoViewModal
                    open={openVideoModal}
                    onClose={this.closeVideo}
                    url={video.url}
                  />
              </div>
            )}
          </Col>
        </Row>
        <Row className="profile-picture-image-container">
          <Col xs="12" md="12" className="pt-3 pt-md-3 profile-picture-image-col">
            <div className="profile-picture-image-title">
              {haveVideo ? title : noVideoTitle}
            </div>
          </Col>
          <Col xs="12" md="12" className="pt-0 pt-md-0 profile-picture-image-col">
            <div className="profile-picture-image-title">
              {subTitle}
            </div>
          </Col>
        </Row>
        <Row className="profile-picture-image-container">
          <Col xs="12" md="12" className="pt-3 pt-md-3 profile-picture-image-col">
            { progressPercent > 0 ? (
              <div>
                <LinearProgress
                  variant="determinate"
                  className={classes.uploadProgressBar}
                  value={progressPercent}
                />
                <Typography
                gutterBottom
                variant='Subheading'
                className={classes.talentProfileVideoUploadingText}
                >
                  {`Uploading (${progressPercent.toFixed(0)} %) ... `}
                </Typography>
              </div>
            ) : (
              <Dropzone
                className="profile-picture-dropzone"
                onDrop={ (files) => this.handleUploadVideo(files) }
                size={ 150 }
                accept="video/mp4, video/mov, video/wmv, video/avi">
                <div className="profile-picture-dropzone-description">
                  {`To upload or change Drop video file here`}
                </div>
                <div className="profile-picture-dropzone-select-file-button">
                  {`OR SELECT FILE`}
                </div>
                <div className="profile-picture-dropzone-description">
                  {`Supported File Types: MP4, MOV, WMV, AVI`}
                </div>
              </Dropzone>
            )}
          </Col>

          {
            showCheckbox && (
              <Col xs="12" md="12" className="pt-3 pt-md-3 profile-picture-image-col">
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled
                      checked={!haveVideo}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label={"No additional languages"}
                />
              </Col>
            )
          }

        </Row>
      </div>
    )
  }

  renderNotification = () => {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={!!this.state.notification}
        autoHideDuration={6000}
        onClose={() => this.setState({notification: false})}
      >
        <Alert
          onClose={() => this.setState({notification: false})}
          variant="error"
          message={this.state.notification}
        />
      </Snackbar>
    )
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {this.renderNotification()}
        {this.renderContents()}
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps(state) {
  const { auth, talentInfo } = state;
  return {
    auth,
    talentInfo: talentInfo.value
  }
}

function mapDispatchToProps(dispatch) {
  return {
    talentActions: bindActionCreators(talentActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VideoUploader));
