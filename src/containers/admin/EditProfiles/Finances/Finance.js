import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { adminStyles } from "styles";
import Contract from "./Contract";
import Invoices from "./Invoices";


class Finance extends React.Component  {
  render() {
    const { castingRequestTalent } = this.props;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Contract contract={castingRequestTalent} />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Invoices contractId={castingRequestTalent ? castingRequestTalent.id : null} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(adminStyles)(Finance);
