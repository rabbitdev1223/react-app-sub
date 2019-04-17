import React, {Component} from 'react';
import { Row, Col, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles} from '@material-ui/core/styles';
import Panel from 'components/general/panel';
import defaultValues from 'constants/defaultValues';
import './myLanguages.css';
import { styles } from 'styles';


class TalentLanguageForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      languages: [],
      checkedLanguages: [],
      isChanged: false,
      showConfirmChanges: false
    }
  }

  getInfoFromProps(props) {
    const { talentInfo } = props
    let languages = []
    let checkedLanguages = []

    if (talentInfo && talentInfo.talent_languages) {
      // Get contact info
      languages = talentInfo.talent_languages

      for (let i = 0; i < defaultValues.LANGUAGES.length; i ++) {
        let language = this.getLanguageByName(defaultValues.LANGUAGES[i], languages)
        checkedLanguages.push({
          language: defaultValues.LANGUAGES[i],
          checked: language ? true : false,
          fluency: language ? language.fluency : 'Basic'
        })
      }
    }

    return {
      languages,
      checkedLanguages
    }
  }

  componentWillMount() {
    this.setState({
      ...this.getInfoFromProps(this.props),
      isChanged: false
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log('==== willReceiveProps: ', nextProps.talentInfo);
    if (!this.state.isChanged) this.setState({...this.getInfoFromProps(nextProps)})
  }

  handleFluencyChange = (event) => {
    const { checkedLanguages } = this.state;
    let key = this.getKeyOfCheckedLanguageByName(event.target.name)
    checkedLanguages[key].fluency = event.target.value

    this.setState({
      checkedLanguages,
      isChanged: true
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.isChanged)
      }
    })
  }

  handleChange = name => event => {
    const { checkedLanguages } = this.state;
    let key = this.getKeyOfCheckedLanguageByName(name)
    checkedLanguages[key].checked = event.target.checked

    this.setState({
      checkedLanguages,
      isChanged: true
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.isChanged)
      }
    })
  }


  handleCancel = () => {
    this.setState({
      ...this.getInfoFromProps(this.props),
      isChanged: false
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.isChanged)
      }
    })
  }

  handleSave = () => {
    const { talentInfo } = this.props
    const {
      checkedLanguages
    } = this.state

    let talent_languages = []
    for (let i = 0; i < checkedLanguages.length; i ++) {
      let checkedLanguage = checkedLanguages[i]
      if (checkedLanguage.checked) {
        talent_languages.push({
          talent: talentInfo.id,
          language: checkedLanguage.language,
          fluency: checkedLanguage.fluency
        })
      }
    }

    let data = {
      talent_languages: talent_languages
    }
    this.props.onSave(data, this.handleSaveResponse)
  };

  handleSaveResponse = (response, isFailed) => {
    this.setState({
      isChanged: false
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.isChanged)
      }
    })
  };

  isCheckedLanguage = name => {
    const { checkedLanguages } = this.state
    let key = this.getKeyOfCheckedLanguageByName(name)
    return key === null ? false : checkedLanguages[key].checked
  }

  getKeyOfCheckedLanguageByName = name => {
    const { checkedLanguages } = this.state
    let res = null

    for (let i = 0; i < checkedLanguages.length; i++) {
      if (checkedLanguages[i].language === name) {
        res = i
      }
    }

    return res
  }

  getCheckedLanguageByName = (name) => {
    const { checkedLanguages } = this.state
    let res = null

    for (let i = 0; i < checkedLanguages.length; i ++) {
      if (checkedLanguages[i].language === name) {
        res = checkedLanguages[i]
      }
    }

    return res
  }

  getLanguageByName = (name, languageList) => {
    const { languages } = this.state
    let res = null
    let searchLanguages = languageList ? languageList : languages

    for (let i = 0; i < searchLanguages.length; i ++) {
      if (searchLanguages[i].language === name) {
        res = searchLanguages[i]
      }
    }

    return res
  }

  checkChanges = (event) => {
    const { isChanged } = this.state
    if (isChanged) {
      event.preventDefault()
      this.setState({
        showConfirmChanges: true
      })
    }
  }

  renderFluencyView(name) {
    let checkedLanguage = this.getCheckedLanguageByName(name)
    let fluency = checkedLanguage ? checkedLanguage.fluency : ''
    let disabled = checkedLanguage ? !checkedLanguage.checked : true

    return (
      <RadioGroup
        aria-label={`${name}_fluency`}
        name={name}
        className="profile-language-fluency-group"
        value={fluency}
        onChange={this.handleFluencyChange}>
        {defaultValues.FLUENCY_TYPES.map((fluency, index) => {
          return (
            <FormControlLabel
              value={fluency}
              control={<Radio color="primary" />}
              label={fluency}
              disabled={disabled}
              key={index}
            />
          )
        })}

      </RadioGroup>
    )
  }

  renderContents() {
    const { contentTitle, classes } = this.props

    return (
      <Panel title={contentTitle}>
        <Grid container spacing={24} justify="flex-start" alignItems="flex-start"> 
          <Grid item lg={1} md={1} sm={12} xs={12} />
          <Grid item lg={10} md={10} sm={12} xs={12} >
            <Grid container spacing={24} justify="flex-start" alignItems="flex-start">
              <Grid item xs={12}>
                <Typography className={classes.descriptionText}>
                  Speeking more than one language is a big deal at sea.
                  Tell use the languages you speak and your fluency in each.
                  Be honest and realistic. The cruise line will test you.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={16} justify="flex-start" alignItems="flex-start">
                  {defaultValues.LANGUAGES.map((language, index) => {
                    return (
                      <Grid item lg={6} md={6} sm={12} xs={12} key={`grid-${index}`}>
                        <Grid container spacing={16} justify="flex-start" alignItems="flex-start">
                          <Grid item xs={12}>
                            <FormControlLabel
                              key={`from-control-label-${index}`}
                              control={
                                <Checkbox
                                  checked={this.isCheckedLanguage(language)}
                                  onChange={this.handleChange(language)}
                                  value={language}
                                  color="primary"
                                />
                              }
                              label={language}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            { this.renderFluencyView(language) }
                          </Grid>
                        </Grid>
                      </Grid>
                    )
                  })}
                </Grid>
              </Grid>
              <Grid item xs={12} className={"profile-save-button-group-col"}>
                <Button 
                  size="large"
                  className={classes.button}
                  onClick={this.handleCancel} 
                >
                  {'Cancel'}
                </Button>
                <Button
                  size="large" color="primary"
                  className={classes.button}
                  onClick={this.handleSave}
                >
                  {'Save'}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={1} md={1} sm={12} xs={12} />
        </Grid>
      </Panel>
    )
  }

  render() {
    return (
      <div>
        {this.state.notification && <Alert color="info">{this.state.notification}</Alert>}
        {this.renderContents()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  // const {talentInfo} = state
  return {
    // talentInfo: talentInfo.value
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TalentLanguageForm));
