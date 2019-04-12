import React from "react";
import { connect } from 'react-redux';
import moment from "moment";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import { adminStyles } from 'styles';
import MultiRangeCalendar from 'components/shiptalent/calendars/multiRangeCalendar';


class AvailabilityYear extends React.Component  {
  state = {
    availabilities: [],
  };

  getInfoFromProps = (props) => {
    const { profile } = props;
    let availabilities = [];
    if (profile) availabilities = profile.talent_availabilities;
    return {
      availabilities
    };
  };

  componentWillMount = () => this.setState({...this.getInfoFromProps(this.props)});

  componentWillReceiveProps = (nextProps) => {
    this.setState({...this.getInfoFromProps(nextProps)});
  }

  filterAvailabilitiesByYearAndMonth(availabilities, year, month) {
    let res = []

    for(let i = 0; i < availabilities.length; i ++) {
      let availability = availabilities[i];
      let start_year = moment(availability.start_date).format('YYYY');
      let start_month = moment(availability.start_date).format('M');
      if ((parseInt(start_year, 10) === year) && (parseInt(start_month, 10) === month) ) {
        res.push(availability);
      }
    }

    return res
  }

  render() {
    const { year } = this.props;
    const { availabilities } = this.state;
    let calendars = [];

    for(let i = 1; i <= 12; i ++) {
      let filteredAvailabilities = this.filterAvailabilitiesByYearAndMonth(availabilities, year, i);
      calendars.push(
        <Grid item xl={3} md={4} sm={6} xs={12} key={`multiRangeCalendar${i}`}>
          <MultiRangeCalendar
            ranges={filteredAvailabilities}
            year={year}
            month={i.toString()}
            moveRangeOnFirstSelection={false}
            className={'PreviewArea'}
            disabled={true}
          />
        </Grid>
      );
    }

    return (
      <Grid container spacing={24}>
        { calendars }
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(adminStyles)(AvailabilityYear));
