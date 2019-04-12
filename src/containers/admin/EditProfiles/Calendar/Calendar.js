import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import moment from "moment";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Panel from "components/general/panel";
import AdminForm from 'components/shiptalent/forms/adminForm';
import * as adminActions from 'actions/adminActions';
import { adminStyles } from 'styles';
import AvailabilityYear from "./AvailabilityYear";


class Calendar extends React.Component  {
  state = {
    selectedYear: moment().year()
  };

  getInfoFromProps = (props) => {
  };

  componentWillMount = () => this.setState({...this.getInfoFromProps(this.props)});

  componentWillReceiveProps = (nextProps) => this.setState({...this.getInfoFromProps(nextProps)});

  handleClickYearButton = (year) => this.setState({selectedYear: year});

  renderYearButtons = () => {
    const { classes } = this.props;
    const { selectedYear } = this.state;
    let currentYear = moment().year();
    let buttons = [];
    for (let i = 0; i <= 10; i++) {
      let isThisYear = (selectedYear === (currentYear + i));
      buttons.push(
        <Button variant={isThisYear ? "contained" : "outlined"}
          className={classNames(classes.button, classes.inlineText, classes.adminDateYearButton)}
          color={isThisYear ? "secondary" : "default"}
          onClick={() => this.handleClickYearButton(currentYear + i)}
          key={`button${i}`}
        >
          <Typography className={classes.adminDateYearButtonTitle}>
            {currentYear + i}
          </Typography>
        </Button>
      )
    }

    return buttons;
  }

  renderContent() {
    const { profile } = this.props;
    const { selectedYear } = this.state;

    return (
      <Panel>
        <Grid container spacing={24} justify="center" alignItems="center">
          <Grid item xs={12}>
            {this.renderYearButtons()}
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <AvailabilityYear profile={profile} year={selectedYear} />
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(adminStyles)(Calendar));
