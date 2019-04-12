import React from "react";
import { connect } from 'react-redux';
import classNames from 'classnames';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import { adminStyles } from 'styles';


class SelfReportedConditions extends React.Component  {
  state = {
    medicals: []
  };

  getInfoFromProps = (props) => {
    return {
      medicals: (props.profile && props.profile.talent_medicals) ? props.profile.talent_medicals : [],
    }
  };

  componentWillMount = () => this.setState({...this.getInfoFromProps(this.props)});

  componentWillReceiveProps = (nextProps) => {
    this.setState({...this.getInfoFromProps(nextProps)});
  }

  renderCondition = (title) => {

    return (
      <FormControlLabel
        control={
          <Radio
            checked={true}
            value={title}
            color="default"
            name="radio-button-demo"
            aria-label={title}
            readOnly
          />}
        label={title}
      />
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={8} justify="flex-start" alignItems="flex-start">
        <Grid item xs={12}>
          <Typography className={classNames(classes.adminGeneralTitle, classes.boldText)}>
            SELF-REPORTED CONDITIONS
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classNames(classes.borderBox)}>
            <FormControl component="fieldset" className={classes.formControl}>
              {this.renderCondition("Pregnancy")}
              {this.renderCondition("Epilepsy")}
              {this.renderCondition("Anxiety, Mental or Mood Disorders")}
              {this.renderCondition("Alcohol or Drug Addiction Problems")}
              {this.renderCondition("Eating Disorders")}
              {this.renderCondition("BMI >30 or <18")}
              {this.renderCondition("Diseases of the Heart or Arteries")}
              {this.renderCondition("Hypertension")}
              {this.renderCondition("Coronary Bypass Surgery or Angioplasty")}
              {this.renderCondition("Irregular Heart Rhythm")}
              {this.renderCondition("Use of a Pacemaker")}
              {this.renderCondition("Diseases of the Lungs")}
              {this.renderCondition("Unexplained Loss of Consciousness")}
              {this.renderCondition("Severe Head Injury or Major Brain Surgery")}
              {this.renderCondition("Severe Deafness")}
              {this.renderCondition("Joint Replacements")}
              {this.renderCondition("Limb Prostheses")}
              {this.renderCondition("Organ Transplants")}
              {this.renderCondition("Other Conditions Which Can Lead to Sudden Incapacity")}
              {this.renderCondition("Mobility and Stamina Limiting Conditions")}
              {this.renderCondition("Medication that Reduces Performance or Alertness")}
            </FormControl>
          </div>
        </Grid>
      </Grid>
    );
  }
}


const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(adminStyles)(SelfReportedConditions));
