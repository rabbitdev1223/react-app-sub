import React from "react";
import { connect } from 'react-redux';
import classNames from 'classnames';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import defaultValues from 'constants/defaultValues';
import { adminStyles } from 'styles';


class PofileLanguages extends React.Component  {
  state = {};

  getInfoFromProps = (props) => {
    return {}
  };

  componentWillMount = () => this.setState({...this.getInfoFromProps(this.props)});

  componentWillReceiveProps = (nextProps) => {
    this.setState({...this.getInfoFromProps(nextProps)});
  }

  renderLanguage = (title, key) => {
    let checked = false;
    const { profile, classes } = this.props;
    let talentLanguage = null;
    if (profile && profile.talent_languages) {
      talentLanguage = profile.talent_languages.find(talentLanguage => talentLanguage.language === title);
      if (talentLanguage) {
        checked = true;
      }
    }

    return (
      <div>
        <FormControlLabel
          control={
            <Radio
              checked={checked}
              value={title}
              color="secondary"
              name="radio-button-demo"
              aria-label={title}
            />}
          label={
            <div>
              <Typography className={classNames(classes.adminGeneralText, )}>
                {title}
              </Typography>
            </div>
          }
          key={key}
        />
        <div className={classNames(classes.adminVisaExpirationText, )}>
          <FormControl component="fieldset" className={classes.formControl}>
            {defaultValues.FLUENCY_TYPES.map((fluency, index) => {
              return this.renderFluency(fluency, talentLanguage, index);
            })}
          </FormControl>
        </div>
        
      </div>
      
    );
  };

  renderFluency = (title, talentLanguage, key) => {
    let checked = false;
    const { classes } = this.props;
    if (talentLanguage && (talentLanguage.fluency === title)) checked = true;

    return (
      <FormControlLabel
        control={
          <Radio
            checked={checked}
            value={title}
            color="secondary"
            name="radio-button-demo"
            aria-label={title}
            readOnly
          />}
        label={
            <Typography className={classNames(classes.adminGeneralText, )}>
              {title}
            </Typography>
        }
        key={`${title}-${key}`}
      />
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
        <Grid item xs={12}>
          <Typography className={classNames(classes.adminGeneralTitle, classes.bold)}>
            Languages
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classNames(classes.borderBox)}>
            <FormControl component="fieldset" className={classes.formControl}>
              {defaultValues.LANGUAGES.map((language, index) => {
                return this.renderLanguage(language, index)
              })}
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(adminStyles)(PofileLanguages));
