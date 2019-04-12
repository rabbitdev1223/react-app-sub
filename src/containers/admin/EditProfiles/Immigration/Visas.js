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


class Visas extends React.Component  {
  state = {};

  getInfoFromProps = (props) => {
    return {}
  };

  componentWillMount = () => this.setState({...this.getInfoFromProps(this.props)});

  componentWillReceiveProps = (nextProps) => {
    this.setState({...this.getInfoFromProps(nextProps)});
  }

  renderVisa = (title, key) => {
    let checked = false;
    let expirationDate = '';
    const { profile, classes } = this.props;
    if (profile && profile.talent_visas) {
      let visa = profile.talent_visas.find(visa => visa.name === title);
      if (visa) {
        checked = true;
        expirationDate = visa.expiration_date
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
              readOnly
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
        <Typography className={classNames(classes.adminGeneralText, classes.adminVisaExpirationText )}>
          {`Expiration Date: ${expirationDate}`}
        </Typography>
      </div>
      
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
        <Grid item xs={12}>
          <Typography className={classNames(classes.adminGeneralTitle, classes.bold)}>
            VISAS
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classNames(classes.borderBox)}>
            <FormControl component="fieldset" className={classes.formControl}>
              {defaultValues.VISA_TYPES.map((visaType, index) => {
                return this.renderVisa(visaType, index)
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(adminStyles)(Visas));
