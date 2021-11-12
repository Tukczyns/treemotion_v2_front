import Achievement from "../../../components/achievement/achievement";
import Challenge, { EChallenge } from "../../../components/challenge/challenge";
import PageTitleBar from "../../../components/page_title_bar/page_title_bar";
import ButtonPrimary from "../../../components/utils/buttons/buttons";
import PanelSectionName from "../../../components/utils/panel_section_name/panel_section_name";

const ChallengesAndAchievements: React.FC = () => {
  return (
    <div className="w-full h-full">
      <PageTitleBar title="Wyzwania i osiągnięcia" />
      <div className="mt-5">
        <PanelSectionName text="Osiągnięcia" />
        <div className="grid grid-cols-3 gap-4 mt-4">
          <Achievement completed={true} />
          <Achievement completed={true} />
          <Achievement completed={true} />
          <Achievement completed={true} />
          <Achievement completed={false} />
          <ButtonPrimary text="Zobacz więcej" type="button" rank="secondary" />
        </div>
      </div>
      <div className="mt-5">
        <PanelSectionName text="Wyzwania" />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Challenge type={EChallenge.DAILY} finished={false} />
          <Challenge type={EChallenge.DISTANCE} finished={false} />
          <Challenge type={EChallenge.TIME} finished={false} />
          <Challenge type={EChallenge.TIME} finished={false} />
          <Challenge type={EChallenge.TIME} finished={false} />
          <ButtonPrimary text="Zobacz więcej" type="button" rank="secondary" />
        </div>
      </div>
    </div>
  );
};

export default ChallengesAndAchievements;
