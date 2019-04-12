import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import ImageLoader from 'react-loading-image';
import ImageLightbox from 'react-image-lightbox';
import * as adminActions from 'actions/adminActions';
import { adminStyles } from 'styles';


class MedicalUploads extends React.Component  {
  state = {
    medicalUploads: [],
    showMedical: false,
    selectedMedicalId: null
  };

  getInfoFromProps = (props) => {
    return {
      medicalUploads: (props.profile && props.profile.talent_medical_uploads) ? props.profile.talent_medical_uploads : [],
      showMedical: false,
      selectedMedicalId: null
    }
  };

  componentWillMount = () => this.setState({...this.getInfoFromProps(this.props)});

  componentWillReceiveProps = (nextProps) => {
    this.setState({...this.getInfoFromProps(nextProps)});
  }

  handleClickUploadMedical = () => {

  }

  hanldeClickShowImage = (medicalId) => {
    this.setState({
      showMedical: true,
      selectedMedicalId: medicalId
    })
  };

  render() {
    const { classes } = this.props;
    const { medicalUploads, showMedical, selectedMedicalId } = this.state;

    return (
      <Grid container spacing={8} justify="flex-start" alignItems="flex-start">
        <Grid item xs={12}>
          <Button variant="contained" size="small" className={classNames(classes.button, classes.adminAddNoteButton)}
            onClick={this.handleClickUploadMedical}
          >
            <Typography className={classes.adminAddNoteButtonTitle}>
              Upload New Medical
            </Typography>
          </Button>
          <Typography className={classNames(classes.adminNoteTitle, )}>
            PRE-EMPLOYMENT MEDICAL UPLOADS (pdf)
          </Typography>
        </Grid>
        <Grid item xs={12}>
        {(medicalUploads.length > 0) ? (
          <div className={classNames(classes.adminMedicalUploadsContainer,)}>
            { medicalUploads.map((medicalUpload, index) => {
              <div onClick={this.hanldeClickShowImage} key={index}>
                <ImageLoader
                  className="profile-resume-image"
                  src={medicalUpload.preview_path}
                  loading={() => <CircularProgress className={classes.talentProfileVideoGreetingImage}/>}
                  error={() => <div>Error</div>} />
              </div>
            })}
            { (medicalUploads.length) && (
              <div>
                More
              </div>
            )}
          </div>
        ) : (
          <div className={classNames(classes.adminMedicalUploadsContainerEmpty, )}>
            <div className={classNames(classes.adminMedicalUploadsContainer, )}>
              <Typography className={classNames(classes.italicText, )}>
                No medical files
              </Typography>
            </div>
          </div>
        )}
        </Grid>
        {(showMedical && selectedMedicalId) &&(
          <ImageLightbox
            mainSrc={medicalUploads[selectedMedicalId].preview_path}
            onCloseRequest={() => this.setState({ showMedical: false, selectedMedicalId: null })}
          />
        )}
      </Grid>
    );
  }
}


const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    adminActions: bindActionCreators(adminActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(adminStyles)(MedicalUploads));
