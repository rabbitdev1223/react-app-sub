import React, {Component} from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CastingRequestTalent from './CastingRequestTalent';
import { adminStyles } from 'styles';


class CastingRequestTable extends Component {
  
  render() {
    const {profile, castingRequests, path } = this.props;
    return (
      (profile && castingRequests) ? (
        <Grid container spacing={24} justify="center" alignItems="center">
        { castingRequests.map((castingRequestTalent, index) => {
            return (
              <Grid item xs={12} key={index}>
                <CastingRequestTalent castingRequestTalent={castingRequestTalent} path={path} showStatus={true} />
              </Grid>
            );
          })
        }
        </Grid>
      ) : (
        <div>None</div>
      )        
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { };
};

const mapStateToProps = state => {
  const { talentInfo } = state;
  return {
    profile: talentInfo.value
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(adminStyles)(CastingRequestTable));