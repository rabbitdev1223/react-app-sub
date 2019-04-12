import React from 'react';
import Webcam from 'react-webcam';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  Alert,
  Row,
  Col
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RecordRTC from 'recordrtc';
import DetectRTC from "detectrtc";

import * as videoActions from 'actions/videoActions';
import * as deviceActions from 'actions/deviceSettings';
import AudioMeter from "components/general/audio-meter/index";

import './styles.css';
import RecordCtl from "components/general/record-ctl/index";
import apiConfig from 'constants/api';
import { captureUserMedia } from 'utils/appUtils';

const styles={
  floatingLabelStyle: {
    color: "#258df2",
  },
}
let VideoResolutions = [
  {width: 4096, height:2160},
  {width: 3840, height:2160},
  {width: 2560, height:1440},
  {width: 1920, height:1200},
  {width: 1920, height:1080},
  {width: 1280, height:1000},
  {width: 1280, height:900},
  {width: 1280, height:800},
  {width: 1280, height:768},
  {width: 1280, height:720},
  {width: 1024, height:576},
  {width: 768, height:576},
  {width: 640, height:480},
  {width: 640, height:360},
  {width: 320, height:240},
  {width: 320, height:180},
  {width: 160, height:120}
];

// let MAX_RESOLUTION = {width: 1280, height: 768};
const theme = createMuiTheme ({
  palette: {
    primary: {
      main: '#40c741',
    },
    secondary: {
      main: '#C00'
    }
  }
})
const title = {
  "cruise": "Cruise Staff",
  "audio": "Audio Technician",
  "light-technician": "Lighting Technician",
  "vocalist": "Vocalist",
  "dancer": "Dancer",
  "actor": "Actor",
  "aerialist": "Aerialist",
  "solo-musician": "Solo Musician",
  "music-group-leader": "Musical Group Leader",
  "video-technician": "Video Technician",
  "youth-staff": "Youth Staff"
}
class LiveInterview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      config: true,
      currentQuestion: 0,
      isStopped: false,
      isPlaying: false,
      alertOpen: false,
      errors: [],
      waitingTime: [30, 120],
      remainingTime: [30, 120],
      timePos: 0,

      src: null,
      recordVideo: null,
      uploadSuccess: null,
      uploading: false,
      settings: [],

      position_type: '',
      positioin_sub_type: '',
      question: ''
    };

  }

  componentWillMount() {
    let __this = this, detectError = [];
    let { deviceSettings, talentInfo } = this.props;
    console.log('===== props: ', this.props);
    DetectRTC.load(function() {
      // console.log(DetectRTC);

      if (!DetectRTC.hasWebcam)
      {
        __this.setState({ config: false, alertOpen: true })
        detectError.push("Video Camera isn't connected. Check your camera.");
      }else if (!DetectRTC.isWebsiteHasWebcamPermissions)
      {
        __this.setState({ config: false, alertOpen: true })
        detectError.push("Your website doesn't have camera permission.");
      }
      if (!DetectRTC.hasMicrophone)
      {
        __this.setState({ config: false, alertOpen: true });
        detectError.push("Microphone isn't connected. Check your microphone.");
      }
      else if (!DetectRTC.isWebsiteHasMicrophonePermissions)
      {
        __this.setState({ config: false, alertOpen: true })
        detectError.push("Your website doesn't have microphone permission.");
      }
      __this.setState({ errors: detectError });
      __this.setState({
          resolution: deviceSettings.resolution,
          frameRate: deviceSettings.frameRate,
          bitRate: deviceSettings.bitRate
        }, function(){
          __this.requestUserMedia();
        })
    });
    
    if (talentInfo) {
      const { talent_position_types, talent_position_sub_types } = talentInfo;
      let positionType = null;
      let subPositionType = null;
      
      if (talent_position_types && talent_position_types.length > 0)
        positionType = talent_position_types[0];
      if (talent_position_sub_types && talent_position_sub_types.length > 0)
        subPositionType = talent_position_sub_types[0].position_sub_type;
        
      this.setState({
        position_type: positionType ? positionType.position_type : '',
        position_sub_type: subPositionType ? subPositionType.name : ''
      }, () => {
        this.props.videoActions.getVideoQuestionsActions(positionType.position_type, 'live');
        this.props.videoActions.getVideoSettingsActions();
      })
    }
  }

  componentDidMount() {
    // this.setState({
    //   waitingTime: [30, 120],
    //   remainingTime: [30, 120],
    //   timePos: 0
    // }, () => {
    //   this.countDown();
    // })
  }

  componentWillReceiveProps(nextProps) {
    let { videoSettings, talentInfo } = nextProps;
    let wait = [], remain = [];
    const __this = this
    if (videoSettings['value']) {
        if (videoSettings['value']['video_interview_prep_countdown'])
          wait[0] = remain[0] = videoSettings['value']['video_interview_prep_countdown'];
        else
          wait[0] = remain[0] = 0;
        if (videoSettings['value']['video_interview_response_time'])
          wait[1] = remain[1] = videoSettings['value']['video_interview_response_time'];
        else
          wait[1] = remain[1] = 0;

        this.setState(
          {
            waitingTime: wait,
            remainingTime: remain,
          }, () => {
          const { remainingTime, timePos } = __this.state;
          __this.countDown(remainingTime, timePos);
        });
      }

    if (talentInfo && talentInfo.talent_position_sub_type) {
      this.setState({
        position_type: talentInfo.talent_position_sub_type.talent_position_type,
        position_sub_type: talentInfo.talent_position_sub_type.name
      })
    }

  }

  countDown = () => {
    const { isStopped } = this.state;
    const __this = this;
    if (!isStopped)
    {
      this.timer = setTimeout(function () {
        const { remainingTime, timePos } = __this.state;
        let isStopped1 = __this.state.isStopped;
        console.log('===== Live: coutnDown: timePos: ', timePos)
        if (!isStopped1)
        {
          console.log('==== Live: countDown: remainingTime: ', remainingTime)
          if (remainingTime[timePos] === 0) {
            if (timePos === 0) {
              const newRemaining = [];
              newRemaining[0] = remainingTime[0];
              newRemaining[1] = remainingTime[1] - 1;
              __this.videoRecordStart();
              __this.setState({
                timePos: 1,
                isStopped: false,
                isPlaying: true,
                remainingTime: newRemaining
              });
            } else {
              __this.setState({ isStopped: true });
              __this.videoRecordStop();
            }
          } else {
            const newRemaining = [];
            newRemaining[0] = remainingTime[0];
            newRemaining[1] = remainingTime[1];
            newRemaining[timePos]= remainingTime[timePos] - 1;
            __this.setState({
              remainingTime: newRemaining
            });
          }
          if (__this.timer && __this.timer !== -1) {
            clearTimeout(__this.timer);
            __this.timer = -1;
          }
          __this.countDown()
        }
      }, 1000)
    }
  }

  requestUserMedia() {
    const { resolution, frameRate } = this.state;
    let options = {mandatory: {}};
    if (resolution !== -1 ){
      options['mandatory']['minWidth'] = VideoResolutions[resolution]['width'];
      options['mandatory']['minHeight'] = VideoResolutions[resolution]['height'];
    }
    else {
      if (!options['video']) {
        options['video'] = {};
      }
      options['video']['width'] = { ideal: VideoResolutions[0]['width'] };
      options['video']['height'] = { ideal: VideoResolutions[0]['height'] };
    }
    if (frameRate !== 0){
      options['mandatory']['minFrameRate'] = frameRate;
    }
    captureUserMedia(options, (stream) => {
      try {
        this.setState({ src: stream });
      }
      catch(error) {
        this.setState({ src: window.URL.createObjectURL(stream) });
      }
    });
  }

  onStopRecord = () => {
    const { remainingTime } = this.state;
    remainingTime[0] = remainingTime[1] = 0;
    this.setState({isStopped: true, isPlaying: false});
    this.videoRecordStop();
  };

  onStartRecord = () => {
    const { remainingTime } = this.state;

    remainingTime[0] = 0;
    this.setState({
        isStopped: false,
        isPlaying: true,
        timePos: 1,
        remainingTime: remainingTime
      },
      () => {
        if (this.timer && this.timer !== -1) {
          clearTimeout(this.timer);
          this.timer = -1;
        }
        this.countDown();
        this.videoRecordStart();
      }
    );
  };

  videoRecordStart = () => {
    let mimeType = "video/webm;codecs=h264";
    let __this = this;

    if(this.isMimeTypeSupported('video/mpeg')) {
      mimeType = 'video/mpeg';
    }

    const { resolution, frameRate, bitRate } = this.state;
    let options = {mandatory: {}};
    let rtcOptions = {
      checkForInactiveTracks: false,
      disableLogs: false,
      getNativeBlob: false,
      ignoreMutedMedia: false,
      mimeType: mimeType,
      type: "video"
    };

    if (resolution !== -1 ){
      options['mandatory']['minWidth'] = VideoResolutions[resolution]['width'];
      options['mandatory']['minHeight'] = VideoResolutions[resolution]['height'];
    } else {
      if (!options['video']) {
        options['video'] = {};
      }
      options['video']['width'] = { ideal: VideoResolutions[0]['width'] };
      options['video']['height'] = { ideal: VideoResolutions[0]['height'] };
    }

    if (frameRate !== 0){
      options['mandatory']['minFrameRate'] = frameRate;
    }

    if (bitRate !== 0)
      rtcOptions['videoBitsPerSecond'] = bitRate;
      captureUserMedia(options, (stream) => {
        __this.setState({recordVideo: RecordRTC(stream, rtcOptions)}, function() {
        __this.state.recordVideo.startRecording();
      })
    });
  }

  videoRecordStop = () => {
    let __this = this;
    if (this.state.recordVideo)
    {
      this.state.recordVideo.stopRecording(() => {
        let name = "video_interview_" +  Math.floor(Math.random()*90000) + 10000 + ".mp4";
        let file = new File([this.state.recordVideo.blob], name, {type: "video/mp4", lastModified: Date.now()});
        __this.handleUploadInterviewVideos(file);
      });
    }
  }

  isMimeTypeSupported = (mimeType) => {
    if(DetectRTC.browser.name === 'Edge' ||
      DetectRTC.browser.name === 'Safari' ||
      typeof MediaRecorder === 'undefined') {
        return false;
    }
    if(typeof MediaRecorder.isTypeSupported !== 'function') {
        return true;
    }

    return MediaRecorder.isTypeSupported(mimeType);
  }

  onNextQuestion = () => {
    const { remainingTime, waitingTime } = this.state;
    const __this = this
    remainingTime[0] = waitingTime[0];
    remainingTime[1] = waitingTime[1];
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      isStopped: false,
      isPlaying: false,
      timePos: 0
    }, function() {
      if (__this.timer && __this.timer !== -1) {
        clearTimeout(__this.timer);
        __this.timer = -1;
      }
      __this.countDown();
    });
  };

  onBack = () => {
    const { remainingTime, waitingTime } = this.state;
    const __this = this
    remainingTime[0] = waitingTime[0];
    remainingTime[1] = waitingTime[1];
    this.setState({
      currentQuestion: 0,
      isStopped: false,
      isPlaying: false,
      timePos: 0
    }, () => {
      if (__this.timer && __this.timer !== -1) {
        clearTimeout(__this.timer);
        __this.timer = -1;
      }
      __this.countDown();
    });
  };

  handleAlertClose = () => {
    this.setState({alertOpen: false});
  }

  handleAlertRefresh = () => {
    window.location.reload();
  }

  handleUploadInterviewVideos = (file) => {
    // Upload video files
    const {user_id} = this.props.auth.access;
    const signAPI = `${apiConfig.url}/talent_video/upload/${user_id}/interview/policy/`
    const completeAPI = `${apiConfig.url}/talent_video/upload/${user_id}/interview/complete/`
    this.setState({ uploading: true });
    this.uploadToS3(signAPI, completeAPI, file)
  }

  uploadToS3 = (signAPI, completeAPI, file) => {
    const { videoQuestions } = this.props
    const { currentQuestion, position_type, position_sub_type } = this.state
    
    if (videoQuestions.length === 0) {
      this.onError(file);
      return;
    }

    const params = {
      objectName: file.name,
      contentType: file.type,
      position_type: position_type,
      position_sub_type: position_sub_type,
      question: videoQuestions[currentQuestion] ? videoQuestions[currentQuestion]['content'] : ''
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
        this.onError(file)
      }
      else {
        if (response.signedUrl){
          this.uploadFile(response.signedUrl, completeAPI, response.fileID, file)
        } else {
          this.onError(file)
        }
      }
    })
    .catch(error => {
      this.onError(file)
    })
  }

  onError = (file) => {
    this.setState({uploading: false});
  }

  onFinish = (completeAPI, fileID, file, response) => {
    let __this = this;
    let params = {
      fileID: fileID,
      fileSize: file.size,
      fileType: file.type,
    }
    let url_parse = response.url.split("?");
    let s3_url = url_parse[0];
    __this.setState({ uploading: false, src: s3_url });
    fetch(completeAPI, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(response => response.json())
    .then(response => {
      if(response.error) {
        // console.log('error: ', response.error)
      }
      else {

      }
    })
    .catch(error => {
      this.setState({uploading: false});
      // console.log('error: ', error)
    })
  }

  uploadFile = (s3PutUrl, completeAPI, fileID, file) => {
    // Get signedUrl
    // var that = this;
    fetch(s3PutUrl, {
      method: 'put',
      // contentType: file.type,
      headers: {
        'x-amz-acl': 'public-read',
        'Content-Type': file.type,
      },
      body: file
    })
    .then(response => {
      if(response.error) {
        // console.log('=== uploadFile: error: ', response.error)
        this.onError(fileID, file)
      }
      else {
        // console.log('== uploadFile: success: ', response)
        this.onFinish(completeAPI, fileID, file, response)
      }
    })
    .catch(error => {
      // console.log('== uploadFile: error: ', error)
      this.onError(fileID, file)
    })
  }

  showSpinner = (b) => {
    return b ? (<div className="spinner">
                  <div className="loading_text">
                    <div className="loading"></div>
                    Uploading - Please Wait
                  </div>
                </div>) : null;
  }


  renderStarAndStopRecordButton () {
    const { isPlayBackOpen, isPlaying, isStopped } = this.state

    if (isPlayBackOpen) {
      return (<div />)
    } else {
      return (
        <div className="col-md-12 playbackbtn-wrapper">
          <MuiThemeProvider theme={theme}>

          { (!isPlaying && !isStopped && (
              <Button
                variant="contained"
                color="primary" className='btn-start-start'
                fullWidth={true}
                onClick={this.onStartRecord}>
               {'Start Recording'}
              </Button>
            ))
          }
          {
            ((isPlaying && !isStopped) && (
              <Button
                variant="contained"
                color="secondary" className='btn-start-stop'
                fullWidth={true}
                onClick={this.onStopRecord}>
               {'Stop Recording'}
              </Button>
            ))
          }
          </MuiThemeProvider>
        </div>
      )
    }
  }

  render () {
    const { pageId } = this.props.match.params;
    const {
      config,
      errors,
      currentQuestion,
      isStopped,
      isPlaying,
      waitingTime,
      remainingTime,
      timePos,
      uploading,
    } = this.state;
    const { videoQuestions, isLoading } = this.props;
    let question = "";
    const actions = [
      <FlatButton
        label="Refresh"
        primary={true}
        onClick={this.handleAlertRefresh}
      />,
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleAlertClose}
      />,
    ];

    if (videoQuestions && videoQuestions && videoQuestions.length > 0)
      question = videoQuestions[currentQuestion]['content'];

    return config ? (<div className="video-practice">
        {this.showSpinner(uploading)}
        <div className="video-interview-live-header ">
          <h3 className="text-center">
            <p>My Video Interview ({title[pageId] && title[pageId]}) </p>
            <p>Live!</p>
          </h3>
        </div>

        {videoQuestions && (videoQuestions.length > 0) && !isLoading &&
          <React.Fragment>
          <Row>
            <Col xs="12" md="1" className="pt-6 pt-md-0"/>
            <Col xs="12" md="4" className="pt-6 pt-md-0">
              <div className="video-interview-header">
                <h5>
                  <span className="pull-left"><b>Question {currentQuestion + 1} of 5</b></span>
                </h5>
              </div>
              <p className="question-text">{question}</p>
            </Col>
            <Col xs="12" md="1" className="pt-6 pt-md-0"/>
            <Col xs="12" md="5" className="pt-6 pt-md-0">
              <div>
                <Row className="question-time-title-row">
                  <div className="question-time">
                      Question Time: 2 minutes
                  </div>
                </Row>
                <Row className="video-status">
                  <Col className="col-sm-9 question-time-title-parent-col">
                    <Row>
                      <Col className="col-sm-4 question-time-col">
                        {
                          remainingTime[0] > 0 ? (
                            <div>
                              <p>Prep Countdown: </p>
                              <p><b>{remainingTime[0]} second(s)</b></p>
                            </div>
                          ) : (
                            <div>
                              <p>Response Time: </p>
                              <p><b>{remainingTime[1]} second(s)</b></p>
                            </div>
                          )
                        }
                      </Col>
                      <Col className="col-sm-8 question-time-col">
                        <div className="video-progress">
                          <RecordCtl
                            remaining={remainingTime[timePos]}
                            total={waitingTime[timePos]}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-sm-3 question-time-title-parent-button-col">
                    {this.renderStarAndStopRecordButton()}
                  </Col>
                </Row>
                <Row className="video-webcam">
                  <Col className="col-sm-12 video-webcam-col">
                    <Webcam height="100%" width="100%"/>
                    <div className="audio-box">
                      <AudioMeter width={'90%'}/>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </React.Fragment>
        }
        <div className="col-md-12 livebuttons-wrapper">
          {isStopped &&
            (<React.Fragment>
              {currentQuestion < 3 &&
                <RaisedButton
                  label="Next Question"
                  className="btn-video-buttons btn-vpb"
                  style={styles.raisedButton}
                  primary={true}
                  onClick={this.onNextQuestion}
                /> }
              {currentQuestion === 3 &&
                <RaisedButton
                  label="Final Question"
                  className="btn-video-buttons btn-vpb"
                  style={styles.raisedButton}
                  primary={true}
                  onClick={this.onNextQuestion}
                />}
              {currentQuestion === 4 &&
                <Link to="/edit-profile">
                  <RaisedButton
                    label="Back to My Cruise Staff Audition Videos"
                    className="btn-video-buttons btn-vpb"
                    primary={true}
                    style={styles.raisedButton}
                  />
                </Link>
              }
            </React.Fragment>)
          }
        </div>
        <div className="interview-status">
          { !isPlaying && !isStopped && (<span>Begin Your Response</span>) }
          { isStopped && currentQuestion < 4 && (<span>Response Completed.  Thank you.</span>)}
          { isStopped && currentQuestion === 4 && (<span>That’s it!  You’re all done. <br/>Thank you for your responses.</span>)}
        </div>
      </div>) : (<div className="video-black">
        <Dialog
          title="Error"
          actions={actions}
          modal={false}
          open={this.state.alertOpen}
          onRequestClose={this.handleAlertClose}
        >
          <Alert color="danger">Error</Alert>
          {
            errors.map((error, index) => {
              return (<p key={index}>{error}</p>);
            })
          }
        </Dialog>
      </div>)
  }
}

function mapStateToProps(state) {
  const { auth, videoQuestions, videoSettings, deviceSettings, talentInfo } = state;
  return {
    auth: auth,
    videoQuestions: videoQuestions.value,
    isLoading: !videoQuestions.isFetched,
    videoSettings: videoSettings,
    deviceSettings: deviceSettings,
    talentInfo: talentInfo.value
  }
}

function mapDispatchToProps(dispatch) {
  return {
    videoActions: bindActionCreators(videoActions, dispatch),
    deviceActions: bindActionCreators(deviceActions, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LiveInterview);
