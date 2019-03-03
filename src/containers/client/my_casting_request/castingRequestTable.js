import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Panel from 'components/general/panel';
import moment from 'moment';
import defaultValues from 'constants/defaultValues';
import styles from 'styles';


const castingRequestTableDesign = {
  view: {lg: 1, md: 1, sm: 1, xs: 6},
  name: {lg: 3, md: 3, sm: 5, xs: 12},
  venue: {lg: 2, md: 2, sm: 6, xs: 12},
  dates: {lg: 3, md: 3, sm: 6, xs: 12},
  status: {lg: 1, md: 1, sm: 2, xs: 12},
  statusDraft: {lg: 3, md: 3, sm: 4, xs: 12},
  requestDate: {lg: 2, md: 2, sm: 4, xs: 12},
};


class CastingRequestTable extends Component {

  renderViewButton = (castingRequest) => {
    const { classes } = this.props;

    return (
      <Grid item {...castingRequestTableDesign['view']} className={ classes.clientCastingRequestGridItem }>
        <Link to={{ pathname: "/client/casting_request/view", state: { castingRequest } }} >
          <Button className={classes.clientCastingRequestListViewButton}>
            <Typography className={classes.clientCastingRequestListViewButtonText}>
              {'view'}
            </Typography>
          </Button>
        </Link>
      </Grid>
    );
  };

  renderValue = (text, fieldName, className = null) => {
    const { classes } = this.props;

    return (
      <Grid item {...castingRequestTableDesign[fieldName]} key={`${fieldName}`}>
        <Typography className={className ? className : classNames(classes.descriptionText, classes.fontLightWeight)}>
          {text}
        </Typography>
      </Grid>
    );
  };

  renderGeneralHeader = () => {
    const { hideRequestDate, classes } = this.props;
    let items = [];
    items.push(this.renderValue('', 'view', classNames(classes.financeTableTitle, classes.underlineText)));
    items.push(this.renderValue('Casting Request Name', 'name', classNames(classes.financeTableTitle, classes.underlineText)));
    items.push(this.renderValue('Venue', 'venue', classNames(classes.financeTableTitle, classes.underlineText)));
    items.push(this.renderValue('Dates', 'dates', classNames(classes.financeTableTitle, classes.underlineText)));

    items.push(
      this.renderValue(
        'Status',
        hideRequestDate ? 'statusDraft' : 'status',
        classNames(classes.financeTableTitle, classes.underlineText)
      )
    );

    if(!hideRequestDate) {
      items.push(
        this.renderValue(
          'Request Date', 'requestDate',
          classNames(classes.financeTableTitle, classes.underlineText)
        )
      )
    }

    return items;
  };

  renderCastingRequest = (castingRequest) => {
    const {
      name, client, employment_start_date, employment_end_date,
      status, status_updated_date, created
    } = castingRequest;
    const { hideRequestDate, classes } = this.props;
    const dateFormat = defaultValues.CASTING_REQUEST_DESCRIPTION_DATE_FORMAT;

    let items = [];
    items.push (this.renderViewButton(castingRequest));
    items.push (this.renderValue(`${name}`, 'name'));
    items.push (this.renderValue(`${client.user.first_name} ${client.user.last_name}`, 'venue'));
    items.push (this.renderValue(
      `From: ${moment(employment_start_date).format(dateFormat)} 
       To: ${moment(employment_end_date).format(dateFormat)}`,
      'dates')
    );

    let classNames = classNames(classes.descriptionText, classes.bold);
    let statusText = status
    let fieldName = 'status'
    if(status === 'Draft') {
      classNames.push(classes.red);
      statusText = 'Not Yet Submitted';
      fieldName = 'statusDraft'
    } else if (status === 'Requested') {
      classNames.push(classes.blue)
    } else if (status === 'In Progress') {
      classNames.push(classes.green);
    }
    items.push (
      this.renderValue(
        statusText,
        hideRequestDate ? 'statusDraft' : 'status',
        classNames)
    );

    if (!hideRequestDate) {
      items.push (this.renderValue(moment(status_updated_date).format(dateFormat), 'requestDate'));
    }

    return items;
  };

  renderCastingRequests = (castingRequests) => {
    let items = [];

    if (castingRequests.length > 0) {
      items = castingRequests.map(castingRequest => {
        return this.renderCastingRequest(castingRequest);
      });
    }

    return items;
  };
  
  render() {
    const { title, castingRequests } = this.props;

    return (
      <Panel title={title} bold={true} key={`cr-t-p-${title.replace(/\s/g, '')}`} >
        <Grid container spacing={16} justify="flex-start" alignItems="flex-start" key={`cr-t-p-g-${title.replace(/\s/g, '')}`}>
          { this.renderGeneralHeader() }
          { this.renderCastingRequests(castingRequests) }
        </Grid>
      </Panel>
    )
  }
}

export default (withStyles(styles)(CastingRequestTable));
