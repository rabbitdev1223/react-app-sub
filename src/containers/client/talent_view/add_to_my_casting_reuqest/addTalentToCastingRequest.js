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


class AddTalentToCastingRequest extends Component {

  state = {
    talendId: null,
    castingRequests: []
  }

  getInfoFromProps = (props) => {
    return {
      castingRequests: props.clientInfo ? props.clientInfo.casting_requests : []
    }
  }

  componentWillMount() {
    this.setState({ ...this.getInfoFromProps(this.props) });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.getInfoFromProps(nextProps) });
  }

  filterCastingRequestsByStatus = (conditions) => {
    return this.state.castingRequests.filter((castingRequest) => {
      return conditions.indexOf(castingRequest.status) > -1
    });
  };

  render() {

    return (
      <ClientForm
        formTitle='To which Casting Request would you like to add this talent?'
        backLink={'/client/casting_request/list_view'}
        backButtonTitle='Go to My Casting Request'
        nextLink={'/client/home'}
        nextButtonTitle="Back to My Home Page"
      >

        <CastingRequestTable
          title="My Submitted Casting Requests"
          castingRequests={this.filterCastingRequestsByStatus(['Requested', 'In Progress'])}
          key="submit-cr-t"
        />

        <CastingRequestTable
          title="My Saved Casting Requests"
          castingRequests={this.filterCastingRequestsByStatus(['Draft'])}
          hideRequestDate={true}
          key="saved-cr-t"
        />

      </ClientForm>
    )
  }
}

function mapStateToProps(state) {
  const { clientInfo } = state;

  return {
    clientInfo: clientInfo.value
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clientActions: bindActionCreators(clientActions, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddTalentToCastingRequest));