import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import UnitConverter from 'convert-units'
import BmiCalculator from 'bmi-calc'
import Panel from 'components/general/panel'
import defaultValue from 'constants/defaultValues';
import '../contact-info/myContactInfo.css';
import { styles } from 'styles';


class TalentMetricForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height: "",
      weight: "",
      bmi: "",
      age_range:"",
      HEIGHTS: defaultValue.HEIGHTS,
      WEIGHTS: defaultValue.WEIGHTS,
      AGES: defaultValue.AGES,
      isChanged: false
    };
  }

  getInfoFromProps(props) {
    const { talentInfo } = props

    let metricsInfo = {
      height: "",
      weight: "",
      bmi: "",
      age_range:"",
    }

    if (talentInfo && talentInfo.user) {
      metricsInfo = {
        height: talentInfo.height,
        weight: talentInfo.weight,
        bmi: talentInfo.bmi.toString(),
        age_range: talentInfo.age_range,
      }
    }

    return {
      ...metricsInfo
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

  handleChange = name => event => {
    this.setState(
      {
        [name]: event.target.value,
        isChanged: true
      },
      () => {
        if (name === 'height' || name === 'weight') {
          const {height, weight} = this.state
          console.log('height, weight: ', height, weight)
          let bmiRessult = BmiCalculator(UnitConverter(parseInt(weight, 10)).from('lb').to('kg'),
            parseInt(height, 10)/100, false)
          let bmi = Math.round(bmiRessult.value * 10) / 10

          this.setState({
            bmi: isNaN(bmi) ? 'None' : bmi // + ' ' + bmiRessult.name
          })
        }

        if (this.props.onChange) {
          this.props.onChange(this.state.isChanged)
        }
      }
    );
  };

  handleCancel = () => {
    this.setState({
      ...this.getInfoFromProps(this.props),
      isChanged: false
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.isChanged)
      }
    })
  };

  handleSave = () => {
    const {
      height,
      weight,
      bmi,
      age_range,
    } = this.state

    let data = {
      height: height,
      weight: weight,
      bmi: bmi,
      age_range: age_range,
    }

    this.props.onSave(data, this.handleSaveResponse)
  }

  handleSaveResponse = (response, isFailed) => {
    console.log('==== response: ', response, isFailed)
    this.setState({
      isChanged: false
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.isChanged)
      }
    })
  };

  renderContents () {
    const { height, weight, bmi, age_range, HEIGHTS, WEIGHTS, AGES } = this.state
    const { classes, contentTitle } = this.props

    return (
      <Panel title={contentTitle}>
        <Grid container spacing={24} justify="center" alignItems="center">
          <Grid item xs={12} className={classes.centerText}/>
          <Grid item lg={3} md={4} sm={6} xs={6} className={classes.centerText}>
            <h5>Height</h5>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={6} className={classes.centerText}>
            <h5>Weight</h5>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={6} className={classes.centerText}>
            <h5>BMI</h5>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={6} className={classes.centerText}>
            <h5>Age Range</h5>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={6} className={classes.centerText}>
            <FormControl >
                  <FormLabel htmlFor="uncontrolled-native">&nbsp;USA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; EUROPE</FormLabel>
                  <Select
                    value={height}
                    onChange={this.handleChange('height')}
                    defaultValue={HEIGHTS[0]}
                    input={<Input name="height"
                                  id="uncontrolled-native" />}>
                    {
                      HEIGHTS.map((height, index) => {
                        let heightInFeet = 0
                        let heightIntegerInFeet = 0
                        let heightDecimalInInch = 0
                        let prefix = ''
                        let tmp_height = height
                        if (index === (HEIGHTS.length - 1)) {
                          tmp_height = HEIGHTS[HEIGHTS.length - 2]
                          prefix = '>'
                        }

                        heightInFeet = UnitConverter(parseInt(tmp_height, 10))
                          .from('cm').to('ft-us')
                        heightIntegerInFeet = Math.floor(heightInFeet)
                        heightDecimalInInch = Math.round(UnitConverter(heightInFeet - heightIntegerInFeet).from('ft-us').to('in'))
                        return (
                          <MenuItem key={index} value={height} >
                            &nbsp;{prefix}{heightIntegerInFeet}'{heightDecimalInInch}"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{prefix}{tmp_height}cm
                          </MenuItem>
                        )
                      })
                    }
                  </Select>
                </FormControl>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={6} className={classes.centerText}>
            <FormControl>
                  <FormLabel htmlFor="uncontrolled-native">&nbsp;USA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; EUROPE</FormLabel>
                  <Select
                    value={weight}
                    onChange={this.handleChange('weight')}
                    defaultValue={WEIGHTS[0]}
                    input={<Input name="weight" id="uncontrolled-native" />}>
                    {
                      WEIGHTS.map((weight, index) => {
                        let weightInLb = 0
                        let prefix = ''
                        let tmp_weight = weight
                        if (index === (WEIGHTS.length - 1)) {
                          tmp_weight = WEIGHTS[WEIGHTS.length - 2]
                          prefix = '>'
                        }
                        weightInLb = Math.round(UnitConverter(tmp_weight).from('lb').to('kg') * 10) / 10
                        return (
                          <MenuItem key={index}
                                    value={weight} >
                            &nbsp;{prefix}{tmp_weight} lbs. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{prefix}{weightInLb} kg
                          </MenuItem>
                        )
                      })
                    }
                  </Select>
                </FormControl>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={6} className={classes.centerText}>
            <Typography align='center' variant="title" gutterBottom>
              {bmi}
            </Typography>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={6} className={classes.centerText}>
            <FormControl>
                <Select
                  value={age_range}
                  onChange={this.handleChange('age_range')}
                  defaultValue={AGES[0]}
                  input={<Input name="age_range" id="uncontrolled-native"/>}
                >
                  {
                    Object.keys(AGES).map((key) => {
                      return (
                        <MenuItem key={key} value={AGES[key]}>{AGES[key]}</MenuItem>
                      )
                    })
                  }
                </Select>
              </FormControl>
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
      </Panel>
    )
  }

  render() {
    return (
      <div>
        {this.renderContents()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}
function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TalentMetricForm));
