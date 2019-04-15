import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Panel from "components/general/panel";
import AdminForm from 'components/shiptalent/forms/adminForm';
import * as adminActions from 'actions/adminActions';
import { adminStyles } from 'styles';
import AdminAPI from "apis/adminAPIs";
import Finance from "./Finance";


class Finances extends React.Component  {
  state = {
    castingRequestTalents: []
  };

  getInfoFromProps = (props) => {
    const { profile } = props;
    
    if (profile) {
      AdminAPI.searchCastingRequestTalent({talent_id: profile.id}, this.handleResponsCastingRequestTalent);
    }
  };

  handleResponsCastingRequestTalent = (response, isFailed) => {
    if (isFailed) {}
    else this.setState({castingRequestTalents: response});
  };
  
  componentWillMount = () => this.setState({...this.getInfoFromProps(this.props)});

  componentWillReceiveProps = (nextProps) => this.setState({...this.getInfoFromProps(nextProps)});

  renderContent() {
    const { castingRequestTalents } = this.state;

    return (
      <Panel>
        <Grid container spacing={32} justify="flex-start" alignItems="flex-start">
          {castingRequestTalents.map((crt, index) => {
            return (
              <Grid item lg={12} md={12} xs={12} key={index}>  
                <Finance castingRequestTalent={crt} key={`finance-${index}`}/> 
              </Grid>
            );
          })}
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(adminStyles)(Finances));
