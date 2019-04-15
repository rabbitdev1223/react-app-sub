import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import { fade } from '@material-ui/core/styles/colorManipulator';

const drawerWidth = 240;

const fontFamily = '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
//'"Gotham SSm", "Helvetica", "Arial", sans-serif';

export const adminStyles = theme => ({
  '@global': {
    body: {
      display: 'flex',
      backgroundColor: '#ffffff', //'#e4e5e6'
      position: 'absolute',
      width: '100% !important',
      height: '100% !important',
      display: 'flex'
    }
  },
  root: {
    display: 'flex',
    backgroundColor: '#ffffff', //'#e4e5e6'
    position: 'absolute',
    width: '100% !important',
    height: '100% !important',
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  h4NoMargin: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '2.125rem',
    ffontFamily: fontFamily,
    fontWeight: 400,
    lineHeight: 1.17,
    letterSpacing: '0.00735em',
    marginBlockStart: '0em',
    marginBlockEnd: '0em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
  },
  h4SmallMargin: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '2.125rem',
    ffontFamily: fontFamily,
    fontWeight: 400,
    lineHeight: 1.17,
    letterSpacing: '0.00735em',
    marginBlockStart: '0.5em',
    marginBlockEnd: '0.5em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
  },
  h4: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '2.125rem',
    ffontFamily: fontFamily,
    fontWeight: 400,
    lineHeight: 1.17,
    letterSpacing: '0.00735em',
    marginBlockStart: '1.33em',
    marginBlockEnd: '1.33em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
  },
  h5: {
    display: 'block',
    fontSize: '0.83em',
    marginBlockStart: '1.67em',
    marginBlockEnd: '1.67em',
    marginInlineEtart: '0px',
    marginInlineEnd: '0px',
    fontWeight: 'bold',
  },
  underlineText: {
    textDecoration: 'underline',
  },
  italicText: {
    fontStyle: 'italic',
  },
  inlineText: {
    display: 'inline'
  },
  centerText: {
    textAlign: 'center',
  },
  leftText: {
    textAlign: 'left',
  },
  rightText: {
    textAlign: 'right',
  },
  fullWidth: {
    width: '100%'
  },
  bold: {
    fontWeight: '600!important',
  },
  red: {
    color: theme.palette.red.main
  },
  white: {
    color: theme.palette.white.main
  },
  blue: {
    color: theme.palette.blue.main
  },
  green: {
    color: theme.palette.green.main
  },
  yellow: {
    color: theme.palette.yellow.main
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
  borderBox: {
    border: '1px solid black',
    padding: '5px 15px'
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: theme.palette.primary.main,
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
    backgroundColor: theme.palette.primary.main,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIconContainer: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    cursor: 'pointer'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  avatarImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  avatarMenuItemText: {
    color: theme.palette.white.main,
    fontSize: '1rem',
    fontWeight: 400,
    paddingLeft: '7px'
  },
  drawerBandImage: {
    paddingTop: '0.3rem',
    width: '100px',
    textAlign: 'left',
    marginLeft: '10px',
    marginRight: 'auto'
  },
  drawerBandText: {
    textAlign: 'left',
    marginLeft: '10px',
    marginRight: 'auto',
    fontSize: '1.35rem',
    fontWeight: 900,
    color: theme.palette.white.light
  },
  drawerBackground: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: '1',
    display: 'block',
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundImage: 'url(/static/media/sidebar-2.310509c9.jpg)',
    backgroundPosition: 'center center',
    '&:after': {
      width: '100%',
      height: '100%',
      zIndex: '3',
      content: "",
      display: 'block',
      opacity: '.8',
      position: 'absolute',
      background: '#000'
    }
  },
  drawerListIcon: {
    color: theme.palette.white.light
  },
  drawerListText: {
    color: theme.palette.white.light
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  descriptionText: {
    color: '#2a3134',
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: fontFamily,
    lineHeight: '1.46429em',
  },
  footerLayout: {
    backgroundColor: '#007bff',
    bottom: 0,
    width: '100%',
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 16
  },
  footerBackground: {
    width: '100%',
    borderRadius: 0,
    marginBottom: 0,
    paddingTop: 0,
    paddingBottom: 0
  },
  footerMenuItemText: {
    color: theme.palette.white.main,
    fontWeight: 'bold',
    textTransform: 'none',
    display: 'inline-block'
  },
  footerItemSeparator: {
    color: theme.palette.white.main,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
    textTransform: 'none',
    display: 'inline-block'
  },
  footerDescriptionText: {
    color: '#212529',
    textTransform: 'none',
    paddingBottom: '10px'
  },
  dashboardItemPanel: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: '.25rem',
  },
  dashboardGeneralCard: {
    backgroundClip: 'border-box',
    border: '1px solid #c8ced3',
    borderRadius: '.25rem',
  },
  dashboardGeneralCardHeader: {
    padding: '.75rem 1.25rem',
    marginBottom: 0,
    backgroundColor: '#f0f3f5',
    borderBottom: '1px solid #c8ced3'
  },
  metricToolsItemPanel: {
    backgroundColor: '#20a8d8!important',
    padding: 20,
    border: '1px solid #187da0', //#2eadd3', //
    marginTop: 5,
    marginBottom: 5,
    minHeight: 120,
    maxHeight: 120,
    borderRadius: '.25rem',
  },
  metricToolsItemPanelTitle: {
    fontSize: '1.15rem',
    fontWeight: '600',
    fontFamily: fontFamily,
    textTransform: 'none'
  },
  metricToolsItemPanelSubTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    fontFamily: fontFamily,
    textTransform: 'none'
  },
  dashboardButton: {
    backgroundColor: theme.palette.primary.main,
    fontFamily: fontFamily,
    width: '300px',
    fontSize: '25px'
  },
  adminFormTalentNameButton: {
    minWidth: '300px',
    maxWidth: '300px',
    minHeight: '105px',
    padding: '8px',
    display: 'block',
    borderRadius: '5px'
  },
  adminFormTalentNameButtonTitle: {
    fontSize: '1.35rem',
    fontWeight: 600,
    paddingTop: '5px',
    paddingBottom: '5px',
    textTransform: 'none',
    whiteSpace: 'nowrap',
    color: theme.palette.white.main,
  },
  adminFormTalentGenderButton: {
    display: 'inline-flex',
    marginLeft: 5,
    padding: '3px 15px',
    minWidth: 87,
    backgroundColor: '#e0e0e0',
    border: `1px solid ${theme.palette.black.main}`,
    borderRadius: 4,
    boxShadow: `0 0px 0px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`,
    justifyContent: 'center',
  },
  adminFormTalentGenderButtonTitle: {
    fontSize: '1rem',
    fontWeight: 400,
    textTransform: 'none',
    color: theme.palette.black.main,
    textAlign: 'center'
  },
  adminFormTalentGenderButtonSelected: {
    display: 'inline-flex',
    marginLeft: 5,
    padding: '3px 15px',
    minWidth: 87,
    backgroundColor: theme.palette.green.main,
    border: `1px solid ${theme.palette.black.main}`,
    borderRadius: 4,
    boxShadow: `0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`,
    justifyContent: 'center'
  },
  adminTalentTitlePropertiesWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  adminTalentTitleSubPropertiesWrapper: {
    minWidth: 87,
    maxWidth: 87,
    textAlign: 'left',
    paddingLeft: 2,
    paddingRight: 2,
    marginLeft: 5
  },
  adminFormTalentSubPropertyButton: {
    display: 'inline-flex',
    marginLeft: 2,
    padding: '1px 5px',
    backgroundColor: '#e0e0e0',
    border: `1px solid ${theme.palette.black.main}`,
    borderRadius: '50%',
    boxShadow: `0 0px 0px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`,
    justifyContent: 'center',
  },
  adminFormTalentSubPropertyButtonSelected: {
    display: 'inline-flex',
    marginLeft: 2,
    padding: '1px 5px',
    backgroundColor: theme.palette.green.main,
    border: `1px solid ${theme.palette.black.main}`,
    borderRadius: '50%',
    boxShadow: `0 0px 0px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`,
    justifyContent: 'center',
  },
  adminFormTalentSubPropertyButtonTitle: {
    fontSize: '0.5rem',
    fontWeight: 400,
    textTransform: 'none',
    color: theme.palette.black.main,
    textAlign: 'center'
  },
  adminFormTalentPropertyButtonItem: {
    padding: '5px',
    display: 'block!important',
    textAlign: 'center'
  },
  adminHomeContainer: {
    marginLeft: '-15px',
    marginRight: '-15px',
    marginBottom: '-16px'
  },
  adminHomeButtonsContainer: {
    width: '100%',
    borderRadius: '0rem',
    marginBottom: '0rem',
    marginTop: '0rem',
    paddingTop: '22px',
    backgroundColor: 'transparent!important',
    position: 'absolute'
  },
  adminHomeButton: {
    minWidth: '300px',
    maxWidth: '300px',
    minHeight: '105px',
    padding: '8px',
    display: 'block',
    borderRadius: '5px'
  },
  adminHomeButtonTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    paddingTop: '5px',
    paddingBottom: '5px',
    textTransform: 'none',
    whiteSpace: 'nowrap',
    color: theme.palette.white.main,
  },
  adminHomeButtonSubTitle: {
    fontWeight: 400,
    color: theme.palette.white.light,
    textTransform: 'none'
  },
  adminTalentTableCheckboxGridItem: {
    marginTop: 'auto',
    marginBottom: 'auto',
    textAlign: 'right'
  },
  adminTalentSearchGenderButtonItem: {
    padding: '5px',
    display: 'block!important'
  },
  adminTalentSearchGenderButton: {
    display: 'inline-flex',
    borderRadius: '9px',
    border: `1px solid ${theme.palette.black.main}`,
    boxShadow: `0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`
  },
  adminTalentSearchGenderButtonTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    textTransform: 'none',
    color: theme.palette.black.main,
  },
  adminTalentSearchGenderButtonSelected: {
    display: 'inline-flex',
    borderRadius: '9px',
    color: theme.palette.white.main,
    backgroundColor: theme.palette.black.light,
    border: `1px solid ${theme.palette.black.main}`,
    '&:hover': {
      backgroundColor: theme.palette.black.thin
    },
    boxShadow: `0 0px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`
  },
  adminTalentSearchGenderButtonSelectedTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    textTransform: 'none',
    color: theme.palette.black.main,
  },
  adminTalentSearchSubPositionButton: {
    display: 'inline-flex',
    borderRadius: '9px',
    border: `1px solid ${theme.palette.black.main}`,
    padding: 0,
    boxShadow: `0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`
  },
  adminTalentSearchSubPositionButtonTitle: {
    fontSize: '0.75rem',
    fontWeight: 400,
    textTransform: 'none',
    color: theme.palette.black.main,
  },
  adminTalentSearchSubPositionButtonSelected: {
    display: '\'inline-flex',
    borderRadius: '9px',
    color: theme.palette.white.main,
    backgroundColor: theme.palette.black.light,
    border: `1px solid ${theme.palette.black.main}`,
    padding: 0,
    '&:hover': {
      backgroundColor: theme.palette.black.thin
    },
    boxShadow: `0 0px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`
  },
  adminTalentSearchSubPositionButtonSelectedTitle: {
    fontSize: '0.75rem',
    fontWeight: 400,
    textTransform: 'none',
    color: theme.palette.black.main,
  },
  adminTalentSearchResultPicture: {
    width: '70px',
    height: '72px',
    objectFit: 'cover',
  },
  adminTalentControlButtonContainer: {
    padding: '0px',
    maxWidth: '30px',
    margin: '0px'
  },
  adminTalentControlNewText: {
    padding: '0px',
    fontSize: '14px',
    fontWeight: 600,
  },
  adminCallbackTalentControlContainerDiv: {
    width: '64px',
    clear: 'both',
    display: 'inline-block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    verticalAlign: 'bottom',
    textAlign: 'right',
    marginBottom: '10px',
    marginRight: '5px',
  },
  adminRatingTalentControlContainerDiv: {
    width: '64px',
    clear: 'both',
    display: 'inline-block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    verticalAlign: 'top',
    textAlign: 'right',
    marginTop: '23px',
    marginRight: '5px',
  },
  adminTalentControlContainerDiv: {
    width: '64px',
    clear: 'both',
    display: 'inline-block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    verticalAlign: 'top',
    textAlign: 'right',
    marginTop: '10px',
    marginRight: '5px',
  },
  adminTalentContainerDiv: {
    clear: 'both',
    display: 'inline-block',
    overflow: 'hidden',
    // white-space: nowrap;
    width: '90%'
  },
  adminTalentControlEditIcon: {
    padding: '0px',
    minWidth: '10px',
    minHeight: '10px',
    width: '20px',
    height: '20px',
    fontSize: '20px',
    fontWeight: 600,
  },
  adminTalentControlDeleteButton: {
    padding: '0px',
    minWidth: '10px',
    minHeight: '10px',
    width: '20px',
    height: '20px',
    fontWeight: 600,
  },
  adminTalentControlDeleteIcon: {
    color: theme.palette.grey.thin,
    fontSize: '20px',
    fontWeight: 600,
  },
  adminTalentControlBlockProfileExpirationText: {
    padding: '0px',
    fontSize: '0.8rem',
    fontWeight: 100,
  },
  adminTalentControlRatingButton: {
    padding: '3px 10px 3px 10px',
    minWidth: '10px',
    minHeight: '10px',
    width: '50px',
    fontWeight: 400,
  },
  adminTalentControlRatingButtonText: {
    color: theme.palette.white.main,
    fontSize: '0.8rem',
    fontWeight: 400,
    textTransform: 'none',
  },
  adminRatingAvatarImageContainer: {
    width: 300,
    height: '100%',
    objectFit: 'cover'
  },
  pictureContainer: {
    border: 'solid 3px',
    color: '#000000',
    display: 'inline-block',
    textAlign: 'center',
    marginRight: '10px',
    verticalAlign: 'top'
  },
  adminFormSubTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    //ffontFamily: fontFamily,
    fontFamily: fontFamily,
    lineHeight: '1.46429em',
    marginTop: '0.5rem'
  },
  adminFromTalentIDContainer: {
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: fontFamily,
    lineHeight: '1.46429em',
    position: 'absolute',
    right: 15,
    top: 45,
  },
  adminFromTalentName: {
    fontSize: '1.35rem',
    fontWeight: 600,
    fontFamily: fontFamily,
    lineHeight: '1.46429em',
  },
  adminFromTalentHeadLine: {
    fontSize: '1.15rem',
    fontWeight: 600,
    fontFamily: fontFamily,
    lineHeight: '1.46429em',
  },
  adminFromTalentIDText: {
    fontSize: '1rem',
    fontWeight: 600,
    fontFamily: fontFamily,
    lineHeight: '1.46429em',
  },
  adminFromTalentMarkFavoriteText: {
    fontSize: '0.85rem',
    fontWeight: 400,
    fontFamily: fontFamily,
    lineHeight: '1.46429em',
  },
  adminRatingSubTitle: {
    width: '60%',
    margin: 'auto'
  },
  adminFormBackButton: {
    textTransform: 'none',
    borderRadius: '8px',
    backgroundColor: theme.palette.black.main,
    // border: '1px solid #EEEEEE',
    primaryColor: theme.palette.white.main,
    '&:hover': {
      backgroundColor: theme.palette.black.thin,
    },
  },
  adminFormNextButtonContainerGridItem: {
    textAlign: 'right',
  },
  adminFormNextButton: {
    textTransform: 'none',
    borderRadius: '8px',
    backgroundColor: theme.palette.black.main,
    primaryColor: theme.palette.white.main,
    // border: '1px solid #EEEEEE',
    '&:hover': {
      backgroundColor: theme.palette.black.thin,
    },
  },
  adminFormBackButtonText: {
    color: theme.palette.white.main,
  },
  adminFormNextButtonText: {
    color: theme.palette.white.main
  },
  adminSearchCitizenShip: {
    width: '100%'
  },
  adminSearchResultTalentHeadlineText: {
    fontWeight: 'bold'
  },
  adminTalentViewHeaderGridItem: {
    textAlign: 'center'
  },
  adminTalentViewHeaderTitleText: {
    border: '2px solid',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    padding: '5px 10px 5px 10px',
    display: 'inline-flex'
  },
  adminTalentViewButton: {
    display: 'block',
    borderRadius: '5px',
    border: '1px solid rgba(0, 0, 0, 1)',
    boxShadow: `0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`
  },
  adminTalentViewButtonText: {
    fontSize: '1.25rem',
    fontWeight: '600',
    fontFamily: fontFamily,
    textTransform: 'none',
  },
  adminTalentViewMoreInfoButtonGridItemWithoutFullWidth: {
    textAlign: 'center',
  },
  adminTalentViewMoreInfoButtonGridItem: {
    textAlign: 'center',
    paddingLeft: '15%!important',
    paddingRight: '15%!important',
    width: '100%'
  },
  adminTalentViewMoreInfoButton: {
    display: 'block',
    borderRadius: '5px',
  },
  adminTalentViewMoreInfoButtonText: {
    fontSize: '1rem',
    fontWeight: 600,
    paddingTop: '5px',
    paddingBottom: '5px',
    textTransform: 'none',
    color: theme.palette.white.main
  },
  adminTalentViewMoreInfoButtonStatusText: {
    color: theme.palette.white.thin,
    textTransform: 'none',
  },
  adminTalentViewVideoButtonGridItem: {
    textAlign: 'center',
    padding: '5px'
  },
  adminTalentViewVideoButton: {
    backgroundColor: theme.palette.black.main,
    display: 'block',
    borderRadius: '10px',
    border: `2px solid ${theme.palette.grey.thin}`,
    '&:hover': {
      backgroundColor: theme.palette.black.light
    },
  },
  adminTalentViewVideoButtonText: {
    fontSize: '1rem',
    fontWeight: 600,
    paddingTop: '5px',
    paddingBottom: '5px',
    textTransform: 'none',
    color: theme.palette.white.main
  },
  adminTalentViewVideoButtonStatusText: {
    color: theme.palette.white.thin,
    textTransform: 'none',
  },
  adminCastingRequestGridItem: {
    textAlign: 'right',
    paddingRight: '5px!important',
    verticalAlign: 'top',
    // paddingTop: '10px!important',
    marginBottom: 'auto',
    justifyContent: 'flex-end',
    display: 'flex'
  },
  adminCastingRequestListViewButton: {
    backgroundColor: theme.palette.black.main,
    display: 'block',
    borderRadius: '9px',
    border: `2px solid ${theme.palette.grey.thin}`,
    '&:hover': {
      backgroundColor: theme.palette.black.light
    },
  },
  adminTalentSearchButton: {
    backgroundColor: theme.palette.black.main,
    display: 'block',
    borderRadius: '9px',
    border: `2px solid ${theme.palette.grey.thin}`,
    '&:hover': {
      backgroundColor: theme.palette.black.light
    },
    // width: '100px'
  },
  adminCastingRequestListViewButtonText: {
    fontSize: '0.95rem',
    fontWeight: 400,
    paddingTop: '1px',
    paddingBottom: '1px',
    textTransform: 'none',
    color: theme.palette.white.main
  },
  adminSharedProfileTeamMemberText: {
    background: 'black',
    color: 'white',
    textAlign: 'center',
    paddingLeft: '20px',
    paddingRight: '20px!important',
    paddingTop: '5px',
    paddingBottom: '5px',
    borderRadius: '8px'
  },
  submitCastingRequestButton: {
    borderRadius: '5px',
  },
  submitCastingRequestButtonText: {
    fontSize: '1.25rem',
    fontWeight: 600,
    paddingTop: '5px',
    paddingBottom: '5px',
    textTransform: 'none',
    color: theme.palette.white.main
  },
  adminImmigrationForm: {
    marginLeft: 100,
    marginRight: 100
  },
  adminVideoPlayer: {
    margin: 'auto'
  },
  adminEmptyVideoPlayer: {
    margin: 'auto',
    border: '2px dashed',
    width: '100%',
    height: '100%'
  },
  adminSearchCriteriaPositionButton: {
    display: 'inline-flex',
    borderRadius: '9px',
    color: theme.palette.white.main,
    backgroundColor: theme.palette.black.light,
    border: `1px solid ${theme.palette.black.main}`,
    '&:hover': {
      backgroundColor: theme.palette.black.thin
    },
    boxShadow: `0 0px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`,
    marginRight: '5px',
    marginTop: '5px'
  },
  adminSearchCriteriaPositionButtonText: {
    fontSize: '1rem',
    fontWeight: 600,
    textTransform: 'none',
    color: theme.palette.black.main,
  },
  adminGeneralTitle: {
    fontSize: '1.2rem',
    fontWeight: 400,
    textTransform: 'none',
  },
  adminGeneralText: {
    fontSize: '1rem',
    fontWeight: 400,
    textTransform: 'none',
  },
  adminNewProfilesApprovalImage: {
    width: '100%',
    boxShadow: `0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`
  },
  adminTalentStatusButton: {
    minHeight: 70,
    maxHeight: 70,
    borderRadius: 9,
    border: '1px solid',
    boxShadow: `0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`
  },
  adminTalentStatusApproved: {
    backgroundColor: theme.palette.red.main,
    '&:hover': {
      backgroundColor: theme.palette.red.dark
    },
  },
  adminTalentStatusButtonText: {
    fontSize: '1.15rem',
    fontWeight: 600,
    textTransform: 'none',
  },
  // Status colors
  adminStatusTalentAvailable: {
    color: `${theme.palette.green.main}!important`,
    padding: '5px 12px'
  },
  adminStatusTalentNotAvailable: {
    color: `${theme.palette.red.main}!important`,
    padding: '5px 12px'
  },
  adminStatusTalentActiveCastingRequest: {
    color: `${theme.palette.yellow.main}!important`,
    padding: '5px 12px'
  },
  adminStatusTalentContracted: {
    color: `${theme.palette.green.main}!important`,
    padding: '5px 12px'
  },
  adminStatusTalentDeployed: {
    color: `${theme.palette.red.main}!important`,
    padding: '5px 12px'
  },
  adminStatusApproveAwaitingApproval: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    border: '1px solid',
    backgroundColor: theme.palette.red.main
  },
  adminStatusApproveNotApproved: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    border: '1px solid',
    backgroundColor: '#e0e0e0'
  },
  adminStatusApproveApproved: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    border: '1px solid',
    backgroundColor: theme.palette.green.main
  },
  adminTalentVideoButton: {
    display: 'block',
    borderRadius: '5px'
  },
  adminTalentVideoButtonTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    paddingTop: '5px',
    paddingBottom: '5px',
    color: theme.palette.white.main,
  },
  adminTalentVideoButtonSubTitle: {
    fontWeight: 400,
    color: theme.palette.white.thin,
    textTransform: 'none',
    textAlign: 'left'
  },
  adminStatusCastingRequestContractCompleted: {
    color: `${theme.palette.green.main}!important`,
    padding: '5px 12px'
  },
  adminStatusCastingRequestContractNotCompleted: {
    color: `${theme.palette.black.main}!important`,
    padding: '5px 12px'
  },
  adminStatusCastingRequestTalentPending: {
    backgroundColor: `#e0e0e0!important`,
  },
  adminStatusCastingRequestTalentAdvised: {
    backgroundColor: `${theme.palette.orange.main}!important`,
  },
  adminStatusCastingRequestTalentAccepted: {
    backgroundColor: `${theme.palette.yellow.main}!important`,
  },
  adminStatusCastingRequestTalentContracted: {
    backgroundColor: `${theme.palette.green.main}!important`,
  },
  adminStatusCastingRequestTalentDeclined: {
    backgroundColor: `${theme.palette.red.main}!important`,
  },
  ///////
  adminNewProfileApprovedButton: {
    width: 200,
    height: 47,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#4dd0e1',
    '&:hover': {
      backgroundColor: '#0097a7'
    },
    boxShadow: `0 0px 0px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`
  },
  adminConfirmButton: {
    textTransform: 'none',
  },
  adminEditProfileDescriptionContainer: {
    backgroundColor: '#000000',
    padding: '20px',
    boxShadow: `0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`
  },
  adminEditProfileDescriptionText: {
    color: theme.palette.white.main,
    fontSize: '1rem'
  },
  adminEditProfileDescriptionTextWithTooltip: {
    color: theme.palette.yellow.main,
    textDecoration: 'underline',
    fontWeight: 600,
    cursor: 'pointer'
  },
  adminEditProfileDescriptionTextTooltipContainer: {
    maxWidth: '500px',
  },
  adminSaveButton: {
    marginLeft: 20,
    marginRight: 7,
    textTransform: 'none',
    boxShadow: `0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`
  },
  adminGeneralDescriptionText: {
    color: theme.palette.black.main,
    fontSize: '1rem'
  },
  adminResumeApproveSelection: {
    color: theme.palette.green.main,
    '&$checked': {
      color: theme.palette.green.light,
    },
  },
  adminResumeApproveSelectionChecked: {},
  adminPorfilePictureContainer: {
    width: 150,
    height: 180,
    objectFit: 'cover'
  },
  adminCastingRequestButton: {
    display: 'block',
    borderRadius: '5px',
    border: '1px solid rgba(0, 0, 0, 1)',
    boxShadow: `0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`
  },
  adminAddNoteButton: {
    borderRadius: '5px',
    border: '1px solid rgba(0, 0, 0, 1)',
    boxShadow: `0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)`,
    textTransform: 'none',
  },
  adminAddNoteButtonTitle: {
    fontSize: '0.85rem',
    fontWeight: 400
  },
  adminCastingRequestGroupButton: {
    display: 'block',
    borderRadius: '5px',
    border: '1px solid rgba(0, 0, 0, 1)',
    boxShadow: `0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`,
    height: 100
  },
  adminCastingRequestGroupButtonTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    fontFamily: fontFamily,
    textTransform: 'none',
  },
  adminCastingRequestGroupButtonSubTitle: {
    fontSize: '1rem',
    fontWeight: '400',
    fontFamily: fontFamily,
    textTransform: 'none',
  },
  adminTalentMetricTalentPciture: {
    width: '70px',
    height: '72px',
    objectFit: 'cover',
  },
  adminTalentMatricTableNoItemText: {
    color: 'grey', 
    fontStyle: 'italic'
  },
  adminMedicalUploadsContainer: {
    height: 80,
    display: 'tableCell',
    verticalAlign: 'middle'
  },
  adminMedicalUploadsContainerEmpty: {
    height: 80,
    border: '1px solid black'
  },
  adminNoteTitle: {
    fontSize: '1.15rem',
    fontWeight: 600,
    paddingRight: 15,
    display: 'inline'
  },
  adminVisaExpirationText: {
    paddingLeft: 34
  },
  adminDateYearButtonTitle: {
    fontSize: '1.15rem',
    fontWeight: 600
  },
  adminDateYearButton: {
    marginRight: 10
  },
  adminNoItemText: {
    fontSize: '0.85rem',
    color: theme.palette.grey.main,
    fontStyle: 'italic',
    fontWeight: 100
  }
});

export const themeAdmin = createMuiTheme ({
  palette: {
    primary: {
      main: '#212121',
      light: '#424242'
    },
    secondary: {
      main: '#28a745'//'#C00'
    },
    green: {
      main: '#28a745',
      light: green[500]
    },
    teal: {
      main: '#20c997'
    },
    white: {
      main: '#FFFFFF',
      light: '#f8f9fa',
      dark: grey[300],
      thin: '#d6d7d8',
      contrastText: '#fff'
    },
    black: {
      main: grey[900],
      dark: '#343a40',
      thin: grey[700],
      light: grey[600],
    },
    grey: {
      main: grey[900],
      dark: '#343a40',
      light: grey[400],
      thin: grey[200],
    },
    darkGrey: {
      main: grey[800]
    },
    lightGrey: {
      main: grey[400]
    },
    red: {
      main: '#dd2c00', //red[700],
      thin: red[100],
      light: '#ff6e40', //red[500],
      dark: '#ff3d00', //red[900]
    },
    blue: {
      main: blue[700],
      light: blue[400],
      dark: blue[900]
    },
    yellow: {
      main: yellow[500],
      light: yellow[300],
      dark: yellow[600],
    },
    orange: {
      main: orange[500],
      light: orange[300],
      dark: orange[700]
    }
  },
  typography: {
    ffontFamily: fontFamily,
    textTransform: "none",
    useNextVariants: true
  },
  button: {
    primaryColor: '#FFFFFF',
    primaryFontSize: '1.5rem'
  },

  overrides: {
    // Name of the component ⚛️ / style sheet
    // MuiButton: {
    //   root: {
    //     backgroundColor: '#007bff!important',
    //   },
    //   text: {
    //     // Some CSS
    //     // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //     borderRadius: 3,
    //     border: 0,
    //     color: 'white',
    //     height: 48,
    //     padding: '0 30px',
    //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    //   },
    // },
    MuiListItemText: {
      primary: {
        color: '#f8f9fa'
      }
    },
  },
});
