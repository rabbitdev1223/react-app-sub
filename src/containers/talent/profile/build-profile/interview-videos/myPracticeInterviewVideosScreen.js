import React, {Component} from 'react';
import { Row, Col, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { withStyles } from '@material-ui/core/styles';
import Panel from 'components/general/panel'
import VideoListView from 'components/shiptalent/tables/videoListView';
import '../contact-info/myContactInfo.css';
import { styles } from 'styles';


class MyPracticeInterviewVideos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      interviewVideoUrls: []
    }
  }

  getFromPops = (props) => {
    const { talentInfo } = this.props
    let interviewVideoUrls = []
    if (talentInfo && talentInfo.talent_videos) {
			for (let i = 0; i < talentInfo.talent_videos.length; i ++) {
				let video = talentInfo.talent_videos[i]
				if (video.active && video.uploaded) {
					if (video.position_type === 'Practice') {
						interviewVideoUrls.push(video)
					}
				}
			}
    }

    return {
      interviewVideoUrls
    }
  }

  componentWillMount() {
    this.setState({
      ...this.getFromPops(this.props)
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.getFromPops(nextProps)
    })
  }

  renderVideosView() {
    const { interviewVideoUrls } = this.state

    return (
      <Panel title={`My Practice Interview Videos`} >
        <VideoListView videoUrls={interviewVideoUrls} />
      </Panel>
    )
  }

  render() {
    return (
      <div className="general-view-container">

        {this.state.notification && <Alert color="info">{this.state.notification}</Alert>}

        {this.renderVideosView()}

        <Row >
          <Col xs="12" md="8" className="pt-4 pt-md-4"> </Col>
          <Col xs="12" md="4" className="pt-3 pt-md-3 profile-save-button-group-col">
            <Link to="/videos-info">
              <RaisedButton label="Back to My Videos" primary={true}/>
            </Link>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { talentInfo } = state;
  return {
    talentInfo: talentInfo.value
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MyPracticeInterviewVideos));
