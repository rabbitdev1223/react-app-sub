import { TemplateAdminSidebar } from 'components/shiptalent/template';
import NewProfile from "containers/admin/NewProfiles/NewProfile.jsx";
import NewProfiles from "containers/admin/NewProfiles/NewProfiles.jsx";
import CastingRequests from "containers/admin/CastingRequests/CastingRequests.jsx";
import NewCasting from "containers/admin/CastingRequests/NewCasting.jsx";
import CastingRequest from "containers/admin/CastingRequests/CastingRequest.jsx";
import CastingRequestDetail from "containers/admin/CastingRequests/CastingRequestDetail.jsx";
import EditProfile from "containers/admin/EditProfiles/EditProfile.jsx";
import EditProfiles from "containers/admin/EditProfiles/EditProfiles.jsx";
import HeadLine from "containers/admin/EditProfiles/HeadLine/HeadLine.jsx";
import EditResume from "containers/admin/EditProfiles/Resume/EditResume";
import ProfilePictures from "containers/admin/EditProfiles/Pictures/ProfilePictures";
import EditProfilePicture from "containers/admin/EditProfiles/Pictures/ProfileEditPicture";
import ProfileVideos from "containers/admin/EditProfiles/Videos/ProfileVideos";
import EditGreetingVideos from "containers/admin/EditProfiles/Videos/EditGreetingVideos/EditGreetingVideos";
import EditGreetingVideo from "containers/admin/EditProfiles/Videos/EditGreetingVideos/EditGreetingVideo";
import EditPositionVideos from "containers/admin/EditProfiles/Videos/EditPositionVideos/EditPositionVideos";
import EditPositionVideo from "containers/admin/EditProfiles/Videos/EditPositionVideos/EditPositionVideo";
import ProfileCastingRequests from "containers/admin/EditProfiles/CastingRequests/ProfileCastingRequests";
import LiveInterviewVideo from 'containers/admin/EditProfiles/Videos/InterviewVideos/LiveInterviewVideo';
import ProfileNotes  from 'containers/admin/EditProfiles/ProfileNotes/ProfileNotes';
import LogsAndLockouts from 'containers/admin/EditProfiles/LogsAndLockouts/LogsAndLockouts';
import SearchViewFavorites from 'containers/admin/EditProfiles/SearchViewFavorites/SearchViewFavorites';
import Shares from 'containers/admin/EditProfiles/Shares/Shares';
import Blocks from 'containers/admin/EditProfiles/Blocks/Blocks';
import Ratings from 'containers/admin/EditProfiles/Ratings/Ratings';
import CastingRequestRating from 'containers/admin/EditProfiles/Ratings/CastingRequestRating';
import Credentials from 'containers/admin/EditProfiles/Credentials/Credentials';
import Medicals from 'containers/admin/EditProfiles/Medicals/Medicals';
import PersonalInformation from 'containers/admin/EditProfiles/PersonalInformation/PersonalInformation';
import Immigration from 'containers/admin/EditProfiles/Immigration/Immigration';
import Languages from 'containers/admin/EditProfiles/Languages/Languages';
import Calendar from 'containers/admin/EditProfiles/Calendar/Calendar';
import Finances from 'containers/admin/EditProfiles/Finances/Finances';
import DashboardPage from "containers/admin/Dashboard/Dashboard.jsx";
import ProfileSearch from "containers/admin/ProfileSearch/ProfileSearch.jsx";
import ProfileSearchResults from "containers/admin/ProfileSearch/ProfileSearchResults";
import MetricTools from "containers/admin/MetricTools/MetricTools.jsx";
import TalentMetrics from "containers/admin/MetricTools/TalentMetrics/TalentMetrics.jsx";
import ChooseClient from "containers/admin/MetricTools/ChooseClient.jsx";
import DanceCombo from "containers/admin/MetricTools/DanceCombo.jsx";
import AddEdit from "containers/admin/MetricTools/AddEdit.jsx";
import AddVideo from "containers/admin/MetricTools/AddVideo.jsx";
import ClientLook from "containers/admin/MetricTools/ClientLook.jsx";
import ClientMainten from "containers/admin/MetricTools/ClientMainten.jsx";
import AddClient from "containers/admin/MetricTools/AddClient.jsx";
import NotificationsPage from "containers/admin/Notifications/Notifications.jsx";
import MedicalDisclosure from "containers/admin/MedicalDisclosure/MedicalDisclosure.jsx";

const adminPageRoutes = [
  {
    path: "/admin",
    component: DashboardPage,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/new-profiles/new-profile",
    layout: TemplateAdminSidebar,
    component: NewProfile,
    exact: true
  },
  {
    path: "/admin/edit-profiles/edit-profile",
    component: EditProfile,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/new-casting",
    component: NewCasting,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/casting-request",
    component: CastingRequest,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/casting-detail",
    component: CastingRequestDetail,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/talent-metrics",
    component: TalentMetrics,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/choose-client",
    component: ChooseClient,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/dance-combo",
    component: DanceCombo,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/add-edit",
    component: AddEdit,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/add-video",
    component: AddVideo,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/client-look",
    component: ClientLook,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/client-mainten",
    component: ClientMainten,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/add-client",
    component: AddClient,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/head-line",
    component: HeadLine,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/resume",
    component: EditResume,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/profile-pictures",
    component: ProfilePictures,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/profile-pictures/edit-picture",
    component: EditProfilePicture,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/profile-videos",
    component: ProfileVideos,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/profile-videos/greetings",
    component: EditGreetingVideos,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/profile-videos/edit-greeting-video",
    component: EditGreetingVideo,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/profile-videos/interview-videos",
    component: LiveInterviewVideo,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/profile-videos/edit-position-videos",
    component: EditPositionVideos,
    layout: TemplateAdminSidebar,
    exact: true
  },  
  {
    path: "/admin/edit-profiles/profile-videos/edit-position-video",
    component: EditPositionVideo,
    layout: TemplateAdminSidebar,
    exact: true
  },  
  {
    path: "/admin/edit-profiles/profile-casting-request",
    component: ProfileCastingRequests,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/profile-notes",
    component: ProfileNotes,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/profile-logs-locks",
    component: LogsAndLockouts,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/profile-search-view-favorits",
    component: SearchViewFavorites,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/profile-shares",
    component: Shares,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/profile-blocks",
    component: Blocks,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/profile-ratings",
    component: Ratings,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/profile-credentials",
    component: Credentials,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/profile-ratings/casting-request",
    component: CastingRequestRating,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/medicals",
    component: Medicals,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/personal-information",
    component: PersonalInformation,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/immigration",
    component: Immigration,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/languages",
    component: Languages,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/calendar",
    component: Calendar,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles/finances",
    component: Finances,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/profile-search-results",
    component: ProfileSearchResults,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/dashboard",
    component: DashboardPage,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/profile-search",
    component: ProfileSearch,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/new-profiles",
    component: NewProfiles,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/edit-profiles",
    component: EditProfiles,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/casting-requests",
    component: CastingRequests,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/metrics-tools",
    component: MetricTools,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/dance-combo-lockouts",
    component: NotificationsPage,
    layout: TemplateAdminSidebar,
    exact: true
  },
  {
    path: "/admin/medicial-disclosure",
    component: MedicalDisclosure,
    layout: TemplateAdminSidebar,
    exact: true
  }
];

export default adminPageRoutes;