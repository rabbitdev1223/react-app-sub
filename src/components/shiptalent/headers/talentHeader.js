import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from 'material-ui/Divider';
import ImageLoader from 'react-loading-image';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as talentActions from '../../../actions/talentActions';
import './header.css'
import { styles } from '../../../styles'


class Header extends Component {
  // static propTypes = {
  //   member: PropTypes.shape({
  //     firstName: PropTypes.string,
  //     email: PropTypes.string,
  //   }),
  //   logout: PropTypes.func.isRequired,
  //   history: PropTypes.shape({
  //     push: PropTypes.func.isRequired,
  //   }).isRequired,
  // }

  static defaultProps = {
    member: {},
    auth: {}
  }
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      anchorEl: null,
    };
  }

  componentDidMount() {
    let __this = this;
    setTimeout(function(){
      __this.props.talentActions.getCurrentTalentInfo();
    }, 100);
  }

  hanldeClickLogout = () => {
    this.props.logout(this.props.auth.access.token);
    this.handleClose()
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  getUserAvatarFromProps() {
    const { talentInfo } = this.props

    if (talentInfo && talentInfo.talent_pictures.length > 0) {
      for (let i = 0; i < talentInfo.talent_pictures.length; i ++) {
        if (talentInfo.talent_pictures[i].url) {
          return talentInfo.talent_pictures[i].url
        }
      }
    }

    return null
  }

  render() {
    const { auth, talentInfo, classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const loggedIn = (auth && auth.access && auth.access.email);
    let username = "";
    let userAvatar = null;

    if (loggedIn) {
      if (talentInfo){
        username = talentInfo.user.first_name;
        if (username !== "")
          username = username.charAt(0).toUpperCase() + username.slice(1);
        userAvatar = this.getUserAvatarFromProps()
      }
    }
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/home" className="navbar-brand" style={{ color: '#FFF' }}>
              <img className="brand-image"
                   alt="Logo"
                   src={require('images/logo.png')} />
            </Link>

            { loggedIn && (
                <div className={classes.grow}>
                  <Link to="/home">
                    <MenuItem className={classes.topbarMenuItem}>
                      <Typography className={classes.menuItemText}>{"Home"}</Typography>
                    </MenuItem>
                  </Link>
                  <Link to="/my-profile">
                    <MenuItem className={classes.topbarMenuItem}>
                      <Typography className={classes.menuItemText}>{"My Profile"}</Typography>
                    </MenuItem>
                  </Link>
              </div>
            )}

            {loggedIn ? (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                  color="inherit">
                  { userAvatar  ? (
                    <ImageLoader
                      className={classes.avatarImage}
                      src={userAvatar}
                      loading={() => <AccountCircle />}
                      error={() => <AccountCircle />} />
                    ) : (
                      <AccountCircle />
                    )
                  }
                  <Typography className={classes.avatarMenuItemText}> {username} </Typography>
                  <ExpandMore />
                </IconButton>

                <Menu id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={this.handleClose}>
                  <Link to="/profile">
                    <MenuItem onClick={this.handleClose}>
                      {"View My Profile"}
                    </MenuItem>
                  </Link>
                  <Link to="/edit-profile">
                    <MenuItem onClick={this.handleClose}>
                      {"Build/Edit My Profile"}
                    </MenuItem>
                  </Link>

                  <Link to="/profile-wizard/welcome">
                    <MenuItem onClick={this.handleClose}>
                      {"Profile Wizard"}
                    </MenuItem>
                  </Link>

                  <Divider />
                  <Link to="/login">
                    <MenuItem onClick={this.hanldeClickLogout}>
                      {"Logout"}
                    </MenuItem>
                  </Link>
                </Menu>
              </div>
            ) : (
              <div>
                <Button color="inherit"
                        onClick={this.handleClick}>
                  {'Login'}
                </Button>
                <Menu id="menu-appbar1"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={this.handleClose}>
                  <Link to="/login">
                    <MenuItem onClick={this.handleClose}>{"Login"}</MenuItem>
                  </Link>
                  <Link to="/sign-up">
                    <MenuItem onClick={this.handleClose}>{"Sign Up"}</MenuItem>
                  </Link>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { auth, talentInfo } = state;
  return {
    auth: auth,
    talentInfo: talentInfo.value
  }
}
function mapDispatchToProps(dispatch) {
  return {
    talentActions: bindActionCreators(talentActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));
