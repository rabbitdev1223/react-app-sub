import React from "react";
import classNames from 'classnames';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from 'styles';
import Table from "components/admin/Table/Table";
import defaultValues from "constants/defaultValues";
import AdminAPI from "apis/adminAPIs";

class Invoices extends React.Component  {
  state = {
    invoices: []
  };

  getInfoFromProps = (props) => {
    const { contractId } = props;
    
    if (contractId) {
      AdminAPI.searchInvoice({casting_request_talent_id: contractId}, this.handleResponsInvoices);
    }
  };

  handleResponsInvoices = (response, isFailed) => {
    if (isFailed) {}
    else this.setState({invoices: response});
  };
  
  componentWillMount = () => this.setState({...this.getInfoFromProps(this.props)});

  componentWillReceiveProps = (nextProps) => this.setState({...this.getInfoFromProps(nextProps)});


  render() {
    const { classes } = this.props;
    const { invoices } = this.state;

    return invoices.length ? (
      <Table tableHead={defaultValues.ADMIN_CONTRACT_TABLE_HEADER} tableData={invoices} />
    ) : (
      <Typography className={classNames(classes.adminNoItemText)}>
        {`No invoices`}
      </Typography>
    );
  }
}

export default withStyles(styles)(Invoices);
