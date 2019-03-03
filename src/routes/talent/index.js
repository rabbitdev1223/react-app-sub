import { TemplateTopbar } from 'components/shiptalent/template';

// Profile wizard routes
import WelcomeBuildProfileWizard from "containers/talent/profile/profile-wizard/welcomeBuildProfileWizard";
import SelectMaleWizard from "containers/talent/profile/profile-wizard/selectMaleWizard";
import SelectPositionTypeWizard from "containers/talent/profile/profile-wizard/selectPositionTypeWizard";
import SelectPositionSubTypeWizard from "containers/talent/profile/profile-wizard/selectPositionSubTypeWizard";
import SelectMultiPositionSubTypeWizard from "containers/talent/profile/profile-wizard/selectMultiPositionSubTypeWizard";
import SelectSkillWizard from "containers/talent/profile/profile-wizard/selectSkillWizard";
import SelectSubSkillWizard from "containers/talent/profile/profile-wizard/selectSubSkillWizard";
import SelectMultiSubSkillWizard from "containers/talent/profile/profile-wizard/selectMultiSubSkillWizard";
import LastWizard from "containers/talent/profile/profile-wizard/lastWizard";
import SelectContactInfoWizard from "containers/talent/profile/profile-wizard/selectContactInfoWizard";
import SelectNationalityWizard from "containers/talent/profile/profile-wizard/selectNationalityWizard";
import SelectLanguageWizard from "containers/talent/profile/profile-wizard/selectLanguageWizard";
import SelectMetricWizard from "containers/talent/profile/profile-wizard/selectMetricWizard";
import SelectMedicalWizard from "containers/talent/profile/profile-wizard/selectMedicalWizard";
import SelectBioWizard from "containers/talent/profile/profile-wizard/selectBioWizard";
import SelectResumeWizard from "containers/talent/profile/profile-wizard/selectResumeWizard";
import SelectPictureWizard from "containers/talent/profile/profile-wizard/selectPictureWizard";
import SelectVideoWizard from "containers/talent/profile/profile-wizard/selectVideoWizard";
import SelectMultiAnswerWizard from "containers/talent/profile/profile-wizard/selectMultiAnswerWizard";
import SelectSingleAnswerWizard from "containers/talent/profile/profile-wizard/selectSingleAnswerWizard";

// Videos routes
import MyVideos from "containers/talent/profile/build-profile/videos/myVideosScreen";
import MyVideoGreetings from "containers/talent/profile/build-profile/videos/greetings/myVideoGreetingsScreen";
import MyVideoGreetingsIntroduction from "containers/talent/profile/build-profile/videos/greetings/introductionScreen";
import MyPositionVideos from "containers/talent/profile/build-profile/videos/positions/myPositionVideosScreen";
import MySubSkillVideos from "containers/talent/profile/build-profile/videos/positions/mySubSkillVideosScreen";

// Video interview routes
import InterviewStart from "containers/talent/video-interview/start";
import InterviewInstruction from "containers/talent/video-interview/instruction";
import InterviewInstructionLive from "containers/talent/video-interview/instruction-live";
import InterviewDeviceAllow from "containers/talent/video-interview/allow";
import VideoPreview from "containers/talent/video-interview/preview";
import VideoPractice from "containers/talent/video-interview/practice";
import LiveInterview from "containers/talent/video-interview/live";
import MyPracticeInterviewVideos from "containers/talent/profile/build-profile/interview-videos/myPracticeInterviewVideosScreen";
import MyLiveInterviewVideos from "containers/talent/profile/build-profile/interview-videos/myLiveInterviewVideosScreen";

// Profile routes
import MyProfile from "containers/talent/profile/myProfile";
import ViewProfile from "containers/talent/profile/view-profile/viewProfile";
import MyContactInfo from "containers/talent/profile/build-profile/contact-info/myContactInfoScreen";
import MyNationality from "containers/talent/profile/build-profile/nationality/myNationalityScreen";
import MyPictures from "containers/talent/profile/build-profile/pictures/myPicturesScreen";
import MyResume from "containers/talent/profile/build-profile/resume/myResumeScreen";
import MyBio from "containers/talent/profile/build-profile/bio/myBioScreen";
import MyMetrics from "containers/talent/profile/build-profile/metric/myMetricScreen";
import MyLanguage from "containers/talent/profile/build-profile/language/myLanguagesScreen";
import MyMedical from "containers/talent/profile/build-profile/medical/myMedicalScreen";
import EditProfile from "containers/talent/profile/build-profile/general/editProfile";
import MyAvailability from "containers/talent/availability/myAvailabilityScreen";
import MyAccount from "containers/talent/account/myAccountScreen";
import MyFinance from "containers/talent/account/finance/myFinanceScreen";

// Introduction routes
import LandscapeOrientationIntro from 'containers/talent/introduction/general/landscapeOrientationIntroScreen'
import VocalistIntroMain from 'containers/talent/introduction/positions/vocalist/vocalistIntroMainScreen'
import VocalistIntro from 'containers/talent/introduction/positions/vocalist/vocalistIntroScreen'
import VocalistWhoMovesIntro from 'containers/talent/introduction/positions/vocalist/vocalistWhoMovesIntroScreen'
import VocalistWhoDancesIntro from 'containers/talent/introduction/positions/vocalist/vocalistWhoDancesIntroScreen'
import VocalistWhoActsIntro from 'containers/talent/introduction/positions/vocalist/vocalistWhoActsIntroScreen'
import VocalistDancerWhoSingsIntro from 'containers/talent/introduction/positions/vocalist/vocalistDancerWhoSingsIntroScreen'
import VocalistActorWhoSingsIntro from 'containers/talent/introduction/positions/vocalist/vocalistActorWhoSingsIntroScreen'
import DancerIntroMain from 'containers/talent/introduction/positions/dancer/dancerIntroMainScreen'
import DancerIntro from 'containers/talent/introduction/positions/dancer/dancerIntroScreen'
import DancerWhoSingsIntro from 'containers/talent/introduction/positions/dancer/dancerWhoSingsIntroScreen'
import DancerWhoActsIntro from 'containers/talent/introduction/positions/dancer/dancerWhoActsIntroScreen'
import DancerDanceCombinationIntro from 'containers/talent/introduction/positions/dancer/dancerDanceCombinationIntroScreen'
import DancerMovementCombinationIntro from 'containers/talent/introduction/positions/dancer/dancerMovementCombinationIntroScreen'
import ActorIntroMain from 'containers/talent/introduction/positions/actor/actorIntroMainScreen'
import ActorIntro from 'containers/talent/introduction/positions/actor/actorIntroScreen'
import ActorWhoSingsIntro from 'containers/talent/introduction/positions/actor/actorWhoSingsIntroScreen'
import ActorWhoSingsMoreIntro from 'containers/talent/introduction/positions/actor/actorWhoSingsMoreIntroScreen'
import ActorWhoMovesIntro from 'containers/talent/introduction/positions/actor/actorWhoMovesIntroScreen'
import ActorWhoDancesIntro from 'containers/talent/introduction/positions/actor/actorWhoDancesIntroScreen'
import ActorVocalistWhoActsIntro from 'containers/talent/introduction/positions/actor/actorVocalistWhoActsIntroScreen'
import ActorDancerWhoActsIntro from 'containers/talent/introduction/positions/actor/actorDancerWhoActsIntroScreen'
import AerialistIntroMain from 'containers/talent/introduction/positions/aerialist/aerialistIntroMainScreen'
import AerialistIntro from 'containers/talent/introduction/positions/aerialist/aerialistIntroScreen'
import AerialistWhoSingsIntro from 'containers/talent/introduction/positions/aerialist/aerialistWhoSingsIntroScreen'
import AerialistWhoSingsMoreIntro from 'containers/talent/introduction/positions/aerialist/aerialistWhoSingsMoreIntroScreen'
import AerialistWhoMovesIntro from 'containers/talent/introduction/positions/aerialist/aerialistWhoMovesIntroScreen'
import AerialistWhoDancesIntro from 'containers/talent/introduction/positions/aerialist/aerialistWhoDancesIntroScreen'
import AerialistWhoActsIntro from 'containers/talent/introduction/positions/aerialist/aerialistWhoActsIntroScreen'
import MusicianIntroMain from 'containers/talent/introduction/positions/musician/musicianIntroMainScreen'
import TechnicianIntroMain from 'containers/talent/introduction/positions/technician/technicianIntroMainScreen'
import CruiseStaffIntroMain from 'containers/talent/introduction/positions/cruise-staff/cruiseStaffIntroMainScreen'
import YouthStaffIntroMain from 'containers/talent/introduction/positions/youth-staff/youthStaffIntroMainScreen'
import MyAuditions from 'containers/talent/audition/myAuditionsScreen'
import TalentChangePassword from 'containers/talent/account/change-password/changePasswordScreen';


export const talentComponents = {

};

const talentRoutes = [
  {
    path: "/interview-start",
    layout: TemplateTopbar,
    component: InterviewStart,
    exact: true
  },
  {
    path: "/interview-instruction",
    layout: TemplateTopbar,
    component: InterviewInstruction,
    exact: true
  },
  {
    path: "/interview-instruction-live",
    layout: TemplateTopbar,
    component: InterviewInstructionLive,
    exact: true
  },
  {
    path: "/interview-device-allow",
    layout: TemplateTopbar,
    component: InterviewDeviceAllow,
    exact: true
  },
  {
    path: "/video-interview",
    layout: TemplateTopbar,
    component: VideoPreview,
    exact: true
  },
  {
    path: "/live-interview",
    layout: TemplateTopbar,
    component: LiveInterview,
    exact: true
  },
  {
    path: "/video-practice",
    layout: TemplateTopbar,
    component: VideoPractice,
    exact: true
  },
  {
    path: "/my-profile",
    layout: TemplateTopbar,
    component: MyProfile,
    exact: true
  },
  {
    path: "/profile-wizard/welcome",
    layout: TemplateTopbar,
    component: WelcomeBuildProfileWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-male",
    layout: TemplateTopbar,
    component: SelectMaleWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-position-type",
    layout: TemplateTopbar,
    component: SelectPositionTypeWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-position-sub-type",
    layout: TemplateTopbar,
    component: SelectPositionSubTypeWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-multi-position-sub-type",
    layout: TemplateTopbar,
    component: SelectMultiPositionSubTypeWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-skill",
    layout: TemplateTopbar,
    component: SelectSkillWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-sub-skill",
    layout: TemplateTopbar,
    component: SelectSubSkillWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-multi-sub-skill",
    layout: TemplateTopbar,
    component: SelectMultiSubSkillWizard,
    exact: true
  },
  {
    path: "/profile-wizard/lastWizard",
    layout: TemplateTopbar,
    component: LastWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-contact-info",
    layout: TemplateTopbar,
    component: SelectContactInfoWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-nationality",
    layout: TemplateTopbar,
    component: SelectNationalityWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-language",
    layout: TemplateTopbar,
    component: SelectLanguageWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-metric",
    layout: TemplateTopbar,
    component: SelectMetricWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-medical",
    layout: TemplateTopbar,
    component: SelectMedicalWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-bio",
    layout: TemplateTopbar,
    component: SelectBioWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-resume",
    layout: TemplateTopbar,
    component: SelectResumeWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-picture",
    layout: TemplateTopbar,
    component: SelectPictureWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-video",
    layout: TemplateTopbar,
    component: SelectVideoWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-multi-answer",
    layout: TemplateTopbar,
    component: SelectMultiAnswerWizard,
    exact: true
  },
  {
    path: "/profile-wizard/select-single-answer",
    layout: TemplateTopbar,
    component: SelectSingleAnswerWizard,
    exact: true
  },
  {
    path: "/profile",
    layout: TemplateTopbar,
    component: ViewProfile,
    exact: true
  },
  {
    path: "/edit-profile",
    layout: TemplateTopbar,
    component: EditProfile,
    exact: true
  },
  {
    path: "/contact-info",
    layout: TemplateTopbar,
    component: MyContactInfo,
    exact: true
  },
  {
    path: "/nationality-info",
    layout: TemplateTopbar,
    component: MyNationality,
    exact: true
  },
  {
    path: "/bio-info",
    layout: TemplateTopbar,
    component: MyBio,
    exact: true
  },
  {
    path: "/metrics-info",
    layout: TemplateTopbar,
    component: MyMetrics,
    exact: true
  },
  {
    path: "/language-info",
    layout: TemplateTopbar,
    component: MyLanguage,
    exact: true
  },
  {
    path: "/medical-info",
    layout: TemplateTopbar,
    component: MyMedical,
    exact: true
  },
  {
    path: "/videos-info",
    layout: TemplateTopbar,
    component: MyVideos,
    exact: true
  },
  {
    path: "/video-greetings",
    layout: TemplateTopbar,
    component: MyVideoGreetings,
    exact: true
  },
  {
    path: "/talent/video-greetings/introduction",
    layout: TemplateTopbar,
    component: MyVideoGreetingsIntroduction,
    exact: true
  },
  {
    path: "/video-positions",
    layout: TemplateTopbar,
    component: MyPositionVideos,
    exact: true
  },
  {
    path: "/video-sub-skill",
    layout: TemplateTopbar,
    component: MySubSkillVideos,
    exact: true
  },
  {
    path: "/pictures-info",
    layout: TemplateTopbar,
    component: MyPictures,
    exact: true
  },
  {
    path: "/resume-info",
    layout: TemplateTopbar,
    component: MyResume,
    exact: true
  },
  {
    path: "/practice-interview-videos",
    layout: TemplateTopbar,
    component: MyPracticeInterviewVideos,
    exact: true
  },
  {
    path: "/live-interview-videos",
    layout: TemplateTopbar,
    component: MyLiveInterviewVideos,
    exact: true
  },
  {
    path: "/availability-info",
    layout: TemplateTopbar,
    component: MyAvailability,
    exact: true
  },
  {
    path: "/finance-info",
    layout: TemplateTopbar,
    component: MyFinance,
    exact: true
  },
  {
    path: "/my-account",
    layout: TemplateTopbar,
    component: MyAccount,
    exact: true
  },
  {
    path: "/change-password",
    layout: TemplateTopbar,
    component: TalentChangePassword,
    exact: true
  },
  {
    path: "/talent/video-audition/vocalist-main-intro",
    layout: TemplateTopbar,
    component: VocalistIntroMain,
    exact: true
  },
  {
    path: "/talent/video-audition/vocalist-general-intro",
    layout: TemplateTopbar,
    component: VocalistIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/vocalist-moves-intro",
    layout: TemplateTopbar,
    component: VocalistWhoMovesIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/vocalist-dances-intro",
    layout: TemplateTopbar,
    component: VocalistWhoDancesIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/vocalist-acts-intro",
    layout: TemplateTopbar,
    component: VocalistWhoActsIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/vocalist-dancer-sings-intro",
    layout: TemplateTopbar,
    component: VocalistDancerWhoSingsIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/vocalist-dancer-actor-sings-intro",
    layout: TemplateTopbar,
    component: VocalistActorWhoSingsIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/dancer-main-intro",
    layout: TemplateTopbar,
    component: DancerIntroMain,
    exact: true
  },
  {
    path: "/talent/video-audition/dancer-intro",
    layout: TemplateTopbar,
    component: DancerIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/dancer-sings-intro",
    layout: TemplateTopbar,
    component: DancerWhoSingsIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/dancer-acts-intro",
    layout: TemplateTopbar,
    component: DancerWhoActsIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/dancer-movement-combination-intro",
    layout: TemplateTopbar,
    component: DancerMovementCombinationIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/actor-main-intro",
    layout: TemplateTopbar,
    component: ActorIntroMain,
    exact: true
  },
  {
    path: "/talent/video-audition/actor-intro",
    layout: TemplateTopbar,
    component: ActorIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/actor-sings-intro",
    layout: TemplateTopbar,
    component: ActorWhoSingsIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/actor-sings-more-intro",
    layout: TemplateTopbar,
    component: ActorWhoSingsMoreIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/actor-moves-intro",
    layout: TemplateTopbar,
    component: ActorWhoMovesIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/actor-dances-intro",
    layout: TemplateTopbar,
    component: ActorWhoDancesIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/actor-vocalist-acts-intro",
    layout: TemplateTopbar,
    component: ActorVocalistWhoActsIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/actor-dancer-acts-intro",
    layout: TemplateTopbar,
    component: ActorDancerWhoActsIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/aerialist-main-intro",
    layout: TemplateTopbar,
    component: AerialistIntroMain,
    exact: true
  },
  {
    path: "/talent/video-audition/aerialist-intro",
    layout: TemplateTopbar,
    component: AerialistIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/aerialist-sings-intro",
    layout: TemplateTopbar,
    component: AerialistWhoSingsIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/aerialist-sings-more-intro",
    layout: TemplateTopbar,
    component: AerialistWhoSingsMoreIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/aerialist-moves-intro",
    layout: TemplateTopbar,
    component: AerialistWhoMovesIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/aerialist-dances-intro",
    layout: TemplateTopbar,
    component: AerialistWhoDancesIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/aerialist-acts-intro",
    layout: TemplateTopbar,
    component: AerialistWhoActsIntro,
    exact: true
  },
  {
    path: "/talent/video-audition/musician-main-intro",
    layout: TemplateTopbar,
    component: MusicianIntroMain,
    exact: true
  },
  {
    path: "/talent/video-audition/technician-main-intro",
    layout: TemplateTopbar,
    component: TechnicianIntroMain,
    exact: true
  },
  {
    path: "/talent/video-audition/cruise-staff-main-intro",
    layout: TemplateTopbar,
    component: CruiseStaffIntroMain,
    exact: true
  },
  {
    path: "/talent/video-audition/youth-staff-main-intro",
    layout: TemplateTopbar,
    component: YouthStaffIntroMain,
    exact: true
  },
  {
    path: "/talent/video-audition/landscape-orientation",
    layout: TemplateTopbar,
    component: LandscapeOrientationIntro,
    exact: true
  },
  {
    path: "/talent-auditions",
    layout: TemplateTopbar,
    component: MyAuditions,
    exact: true
  },
];

export default talentRoutes;