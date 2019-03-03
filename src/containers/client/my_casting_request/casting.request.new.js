import React, {Component} from 'react'
import {connect} from "react-redux";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Alert } from 'reactstrap';
import {onCastingViewSearch} from 'actions/clientActions'
import {bindActionCreators} from "redux";
import ClientAPI from 'apis/clientAPIs';
import 'react-datepicker/dist/react-datepicker.css';


class CastingRequestNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      request_name: '',
      ship_name: '',
      employStartDate: moment(),
      employEndDate: moment(),
      joinDate: moment(),
      rehearsalPlace: '',
      rehearsalStartDate: moment(),
      rehearsalEndDate: moment(),
      performanceStartDate: moment(),
      performanceEndDate: moment(),
      visa_requirement: '',
      comment: '',
      error: false
    };
  }

  handleChangeEmployStartDate = (date) => {
    this.setState({
      employStartDate: date
    });
  };

  handleChangeEmployEndDate = (date) => {
    this.setState({
      employEndDate: date
    });
  };

  handleChangeJoinDate = (date) => {
    this.setState({
      joinDate: date
    })
  };

  handleChangeRehearsalStartDate = (date) => {
    this.setState({
      rehearsalStartDate: date
    })
  };

  handleChangeRehearsalEndDate = (date) => {
    this.setState({
      rehearsalEndDate: date
    })
  };

  handleChangePerformanceStartDate = (date) => {
    this.setState({
      performanceStartDate: date
    })
  };

  handleChangePerformanceEndDate = (date) => {
    this.setState({
      performanceEndDate: date
    })
  };

  onCancelCastingRequest = () => {
    window.location.href = "/client/request_selection"
  };

  onAddCastingRequest = () => {
    const {
      request_name, ship_name, employStartDate, employEndDate, joinDate, rehearsalPlace,
      rehearsalStartDate, rehearsalEndDate, performanceStartDate, performanceEndDate,
      visa_requirement, comment
    } = this.state;

    let data = {
      name: request_name,
      ship_name: ship_name,
      employment_start_date: employStartDate.format(),
      employment_end_date: employEndDate.format(),
      talent_join_date: joinDate.format(),
      rehearsal_start_date: rehearsalStartDate.format(),
      rehearsal_end_date: rehearsalEndDate.format(),
      performance_start_date: performanceStartDate.format(),
      performance_end_date: performanceEndDate.format(),
      visa_requirements: visa_requirement,
      comments: comment
    };
    ClientAPI.createCastingRequest(data, this.handleAddCastingRequest);
  };

  handleAddCastingRequest = (response, isFailed) => {
    console.log('==== response: ', response, isFailed);
    if(isFailed) {
      // console.log(response[Object.keys(response)[0]][0]);
      this.setState({ error: 'Failed to create a casting request. Please input every values.'});
    } else {
      this.props.history.push('/client/casting_request/confirm');
    }
  };

  onChangeReuqestName = (e) => {
    this.setState({
      request_name: e.target.value
    });
  };

  onChangeShipName = (e) => {
    this.setState({
      ship_name: e.target.value
    })
  };

  onChangeVisaRequirement = (e) => {
    this.setState({
      visa_requirement: e.target.value
    })
  };

  onChangeComment = (e) => {
    this.setState({
      comment: e.target.value
    })
  };

  onChangeRehearsalPlace = (e) => {
    this.setState({
      rehearsalPlace: e.target.value
    })
  };

  render() {
    const { error } = this.state;

    return (
      <div className="ml-5">
        <div className="title text-center mt-3" style={this.parentStyle}>New Casting Request</div>
        {!!error && <Alert color="danger">{error}</Alert>}
        <div className="mt-3">
          <div className="master-title">
            Create a name for this Casting Request:
          </div>
          <input className="form-control form-control-sm" style={this.textAreaStyle}
                 placeholder="Type Casting Request name here…" onChange={this.onChangeReuqestName}/>
        </div>

        <div className="mt-3">
          <div className="master-title">
            What Ship?
          </div>
          <input className="form-control form-control-sm" style={this.textAreaStyle}
                 placeholder="Type ship name here…" onChange={this.onChangeShipName}/>
        </div>

        <div className="mt-3">
          <div className="master-title">
            What are the dates of employment (including rehearsal and performance, if applicable)?
          </div>
          <div className="d-flex">
            <div className="text-muted mr-2">
              <small>From</small>
            </div>
            <DatePicker className="mr-4" selected={this.state.employStartDate}
                        onChange={this.handleChangeEmployStartDate}/>
            <div className="text-muted mr-2">
              <small>To</small>
            </div>
            <DatePicker selected={this.state.employEndDate} onChange={this.handleChangeEmployEndDate}/>
          </div>
        </div>

        <div className="mt-3">
          <div className="master-title">
            On what date will talent join the ship?
          </div>
          <DatePicker selected={this.state.joinDate} onChange={this.handleChangeJoinDate}/>
        </div>

        <div className="mt-3">
          <div className="master-title">
            What are the rehearsal dates (if applicable)?
          </div>
          <div className="d-flex">
            <div className="text-muted mr-2">
              <small>From</small>
            </div>
            <DatePicker className="mr-4" selected={this.state.rehearsalStartDate}
                        onChange={this.handleChangeRehearsalStartDate}/>
            <div className="text-muted mr-2">
              <small>To</small>
            </div>
            <DatePicker selected={this.state.rehearsalEndDate} onChange={this.handleChangeRehearsalEndDate}/>
          </div>
        </div>

        <div className="mt-3">
          <div className="master-title">
            Where will rehearsals be held?
          </div>
          <input className="form-control form-control-sm" style={this.textAreaStyle}
                 placeholder="Type rehearsal location name here…" onChange={this.onChangeRehearsalPlace}/>
        </div>

        <div className="mt-3">
          <div className="master-title">
            What are the performance dates (if applicable)?
          </div>
          <div className="d-flex">
            <div className="text-muted mr-2">
              <small>From</small>
            </div>
            <DatePicker className="mr-4" selected={this.state.performanceStartDate}
                        onChange={this.handleChangePerformanceStartDate}/>
            <div className="text-muted mr-2">
              <small>To</small>
            </div>
            <DatePicker selected={this.state.performanceEndDate} onChange={this.handleChangePerformanceEndDate}/>
          </div>
        </div>

        <div className="mt-3">
          <div className="master-title">
            Visa requirements (if any) for this Casting Request:
          </div>
          <textarea style={this.textAreaStyle} placeholder="Type visa requirements here…" rows="3"
                    onChange={this.onChangeVisaRequirement}></textarea>
        </div>

        <div className="mt-3">
          <div className="master-title">
            Comments
          </div>
          <textarea style={this.textAreaStyle} placeholder="Type comments here…" rows="5"
                    onChange={this.onChangeComment}></textarea>
        </div>

        <div className="mt-3 text-center">
          <button className="btn btn-success" style={this.btnStyle} onClick={this.onAddCastingRequest}>
            Add Casting Request
          </button>
        </div>

        <div className="mt-2 text-center pb-4">
          <button className="btn btn-dark" style={this.btnStyle} onClick={this.onCancelCastingRequest}>
            Cancel and Return
          </button>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {

  }
};


export default connect(null, mapDispatchToProps)(CastingRequestNew);