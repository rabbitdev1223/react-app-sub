import React, {Component} from 'react';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Spacer from 'components/general/spacer';
import Panel from 'components/general/panel'
import './myMedical.css';
import 'containers/talent/profile/build-profile/contact-info/myContactInfo.css';
import defaultValues from 'constants/defaultValues';
import { getMedicalConditionValueByName } from 'utils/appUtils';
import { styles } from 'styles';


class TalentMedicalForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      medicals: [],
      isNoConditions: true,
      isChanged: false
    }
  }

  getInfoFromProps(props) {
    const { talentInfo } = props
    let medicals = []
    let isNoConditions = true

    if (talentInfo && talentInfo.talent_medicals) {
      for (let i = 0; i < defaultValues.MEDICALS.length; i ++) {
        medicals.push({
          talent: talentInfo.id, 
          condition_title: defaultValues.MEDICALS[i],
          condition_value: getMedicalConditionValueByName(talentInfo.talent_medicals, defaultValues.MEDICALS[i])
        })
      }
      isNoConditions = this.checkNoConditions(medicals)
    }

    return {
      medicals,
      isNoConditions
    }
  }

  componentWillMount() {
    
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.getInfoFromProps(nextProps),
      isChanged: false
    })
  }

  checkNoConditions = (medicals) => {
    for (let i = 0; i < (defaultValues.MEDICALS.length - 3); i ++) {
      if (getMedicalConditionValueByName(medicals, defaultValues.MEDICALS[i])) return false
    }
    return true
  }

  handleChange = name => event => {
    const { medicals } = this.state
    let newMedicals = medicals
    let key = this.getKeyOfCheckedMedicalByName(name, newMedicals)
    console.log('=== key: ', key, newMedicals, name)
    if (key) {
      newMedicals[key].condition_value = event.target.checked
    } else {
      newMedicals.push({
        condition_title: name,
        condition_value: event.target.checked
      })
    }

    this.setState({
      medicals: newMedicals,
      isNoConditions: this.checkNoConditions(newMedicals),
      isChanged: true
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(false)
      }
    })
  };

  handleCancel = () => {
    this.setState({
      ...this.getInfoFromProps(this.props),
      isChanged: false
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(false)
      }
    })
  };

  handleSave = () => {
    const {
      medicals,
    } = this.state

    let data = {
      talent_medicals: medicals
    }

    this.props.onSave(data, this.handleSaveResponse)
  };

  handleSaveResponse = (response, isFailed) => {
    this.setState({
      isChanged: false
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(false)
      }
    })
  };

  isCheckedMedical = name => {
    const { medicals } = this.state
    let key = this.getKeyOfCheckedMedicalByName(name)
    return key ? medicals[key].condition_value : false
  };

  getKeyOfCheckedMedicalByName = (name) => {
    const { medicals } = this.state
    let res = null

    for (let i = 0; i < medicals.length; i ++) {
      if (medicals[i].condition_title === name) {
        res = i
      }
    }

    return res
  };

  getCheckedMedicalByName = (name) => {
    const { medicals } = this.state
    let res = null

    for (let i = 0; i < medicals.length; i ++) {
      if (medicals[i].condition_title === name) {
        res = medicals[i]
      }
    }

    return res
  }

  getMedicalByName = (name, medicalList) => {
    const { medicals } = this.state
    let res = null
    let searchMedical = medicalList ? medicalList : medicals

    for (let i = 0; i < searchMedical.length; i ++) {
      if (searchMedical[i].condition_title === name) {
        res = searchMedical[i]
      }
    }

    return res
  }

  renderMedicalItem = (name) => {
    return (
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox checked={this.isCheckedMedical(name)} onChange={this.handleChange(name)} value={name} color="primary" />}
          label={name}
        />
      </Grid>
    )
  }

  renderNoMedicalConditionItem = (name) => {
    return (
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox checked={this.state.isNoConditions} onChange={this.handleChange(name)} value={name} color="primary" disabled={true}/>}
          label={name}
        />
      </Grid>
    )
  }

  renderContents() {
    const { classes } = this.props
    return (
      <Grid item lg={10} md={10} sm={12} xs={12} >
        <Grid container spacing={8} justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography className={classes.descriptionText}>
              All crew members aboard a cruise ship have dedicated safety responsibilities.
            </Typography>
            <Typography className={classes.descriptionText}>
              Therefore, in the interest of guest safety, it is important to identify any pre-existing medical conditions to ensure
              that crew members can assist guests in an emergency without limitation.
            </Typography>
            <Typography className={classes.descriptionText}>
              Below is a list of medical conditions that must be self-reported by every prospective crew member.
            </Typography>
            <Typography className={classes.descriptionText}>
              It is important that you be honest and transparent with your self-reporting.  Should it be determined that you had a pre-existing medical condition and did not report it, you could be dismissed immediately.  No one wants that, right?
            </Typography>
            <Typography className={classes.descriptionText}>
              Check all that apply…
            </Typography>
          </Grid>
          <Grid item xs={12}><Spacer size={5} /></Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container spacing={8} justify="center" alignItems="flex-start">
              { this.renderMedicalItem('Pregnancy') }
              { this.renderMedicalItem('Epilepsy') }
              { this.renderMedicalItem('Insulin dependent diabetes') }
              { this.renderMedicalItem('Anxiety, mental or mood disorders') }
              { this.renderMedicalItem('Alcohol or drug addiction problems') }
              { this.renderMedicalItem('Eating disorders') }
              { this.renderMedicalItem('Body Mass Index greater than 30 or less than 18') }
              { this.renderMedicalItem('Diseases of the heart or arteries') }
              { this.renderMedicalItem('Hypertension') }
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container spacing={8} justify="center" alignItems="flex-start">
              { this.renderMedicalItem('Irregular heart rhythm') }
              { this.renderMedicalItem('Use of a pacemaker') }
              { this.renderMedicalItem('Diseases of the lungs') }
              { this.renderMedicalItem('Unexplained loss of consciousness') }
              { this.renderMedicalItem('Severe head injury or major brain surgery') }
              { this.renderMedicalItem('Severe deafness') }
              { this.renderMedicalItem('Joint replacements') }
              { this.renderMedicalItem('Limb prostheses') }
              { this.renderMedicalItem('Organ transplants') }
            </Grid>
          </Grid>
          <Grid item xs={12}>
            { this.renderMedicalItem('Coronary bypass surgery or angioplasty') }
            { this.renderMedicalItem('Other conditions which can lead to sudden incapacity') }
            { this.renderMedicalItem('Conditions which limit mobility and stamina both under normal and emergency conditions') }
            { this.renderMedicalItem('Medication with side effects which reduce performance or alertness') }
          </Grid>
          <Grid item xs={12}><Divider /></Grid>
          <Grid item xs={12}>
            { this.renderNoMedicalConditionItem('I have no pre-existing medical conditions to report.') }
            { this.renderMedicalItem('I am certified in CPR.') }
            { this.renderMedicalItem('I have successfully completed a cruise line pre-employment physical in the past.') }
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={12} className={"profile-save-button-group-col"}>
            <Button size="large" className={classes.button} onClick={this.handleCancel}>
              {'Cancel'}
            </Button>
            <Button size="large" color="primary" className={classes.button} onClick={this.handleSave}>
              {'Save'}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  render() {
    const { contentTitle } = this.props
    return (
      <Panel title={contentTitle}>
        <Grid container spacing={24} justify="center" alignItems="center"> 
          <Grid item lg={1} md={1} sm={12} xs={12} />
            {this.renderContents()}
          <Grid item lg={1} md={1} sm={12} xs={12} />
        </Grid>
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TalentMedicalForm));
