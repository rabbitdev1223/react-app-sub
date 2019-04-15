import React from "react";
import classNames from 'classnames';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import styles from 'styles';
import defaultValues from 'constants/defaultValues';


class Contract extends React.Component {
  render() {
    const { contract, classes } = this.props;
    return (
      <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
        <Grid item xs={2}>
          <Typography className={classNames(classes.adminGeneralTitle, classes.bold, classes.inlineText)}>
            {`Client: `}
          </Typography>
          <Typography className={classNames(classes.adminGeneralText, classes.inlineText)}>
            {contract ? contract.casting_request.name : ''}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classNames(classes.adminGeneralTitle, classes.bold, classes.inlineText)}>
            {`Contract Dates: `}
          </Typography>
          <Typography className={classNames(classes.adminGeneralText, classes.inlineText)}>
            {contract ? `${moment(contract.casting_request.employment_start_date).format(defaultValues.CASTING_REQUEST_DESCRIPTION_DATE_FORMAT)}-${moment(contract.casting_request.employment_end_date).format(defaultValues.CASTING_REQUEST_DESCRIPTION_DATE_FORMAT)}`: ''}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classNames(classes.adminGeneralTitle, classes.bold, classes.inlineText)}>
            {`Gross Wage: `}
          </Typography>
          <Typography className={classNames(classes.adminGeneralText, classes.inlineText)}>
            {contract ? `$${contract.gross_wage}` : ''}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classNames(classes.adminGeneralTitle, classes.bold, classes.inlineText)}>
            {`Commission: `}
          </Typography>
          <Typography className={classNames(classes.adminGeneralText, classes.inlineText)}>
            {contract ? `$${contract.commission}` : ''}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classNames(classes.adminGeneralTitle, classes.bold, classes.inlineText)}>
            {`Balance: $`}
          </Typography>
          <Typography className={classNames(classes.adminGeneralText, classes.inlineText)}>
            {contract ? `$${contract.balance}` : ''}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Contract);
