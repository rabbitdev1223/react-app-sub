import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NavigateButtonGroup from 'components/shiptalent/buttonGroups/navigateButtonGroup';
import styles from 'styles';

class ProfileWizardForm extends Component {

  handleClickBackButton = () => {
    const { handleClickBackButton } = this.props;
    if(handleClickBackButton) {
      handleClickBackButton()
    }
  };

  handleClickNextButton = () => {
    const { handleClickNextButton } = this.props;
    if(handleClickNextButton) {
      handleClickNextButton()
    }
  };

  render() {
    const {
      formTitle, formSubTitle, children,
      backLink, backButtonTitle, handleClickBackButton,
      nextLink, nextButtonTitle, handleClickNextButton,
      classes
    } = this.props;

    return (
      <div className="contact-info-view-container">
        <Grid container spacing={24}>
          <Grid item xs={12} />
          <Grid item xs={12} >
            <Typography align="center" component="h4" variant="h4">
              {formTitle}
            </Typography>
            <Typography align="center" className={classes.clientFormSubTitle}>
              {formSubTitle}
            </Typography>
          </Grid>

          <Grid item xs={12} >
            {children}
          </Grid>

          <Grid item xs={12} >
            <NavigateButtonGroup
              backLink={backLink}
              backButtonTitle={backButtonTitle}
              backButtonClass={classes.talentFormBackButton}
              handleClickBackButton={handleClickBackButton}
              nextLink={nextLink}
              nextButtonTitle={nextButtonTitle}
              nextButtonClass={classes.talentFormNextButton}
              handleClickNextButton={handleClickNextButton}
            />
          </Grid>
        </Grid>

      </div>
    )
  }
}

export default (withStyles(styles)(ProfileWizardForm));
