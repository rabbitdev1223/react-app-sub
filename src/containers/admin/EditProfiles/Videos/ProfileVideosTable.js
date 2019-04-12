import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GreetingVideoItem from './GreetingVideoItem';
import PositionVideoItem from './PositionVideoItem';
import { getSubSkillVideosByPositionType, getLiveVideosByPositionName, getCurrentTalentPositionName } from 'utils/appUtils';
import { adminStyles } from 'styles';


class ProfileVideosTable extends Component {
  render() {
    const { profile, greetingsVideos, interviewVideos, subSkillVideos, allPositionTypes, allSkills } = this.props;

    return (
        <Grid container spacing={32} justify="center" alignItems="center">
          <Grid item lg={4} md={6} xs={12}>
            <GreetingVideoItem 
              greetingVideos={greetingsVideos} 
              interviewVideos={getLiveVideosByPositionName(interviewVideos, getCurrentTalentPositionName(profile))}
            />
          </Grid>
          {profile && allPositionTypes && allPositionTypes.map(positionType => {
            if (positionType.video_audition_button_title) {
              return (
                <Grid item lg={4} md={6} xs={12}>
                  <PositionVideoItem
                    positionType={positionType}
                    allSkills={allSkills}
                    videos={getSubSkillVideosByPositionType(subSkillVideos, allSkills, positionType)}
                  />
                </Grid>
              );
            }
          })}
        </Grid>
    );
  }
}

export default withStyles(adminStyles)(ProfileVideosTable);