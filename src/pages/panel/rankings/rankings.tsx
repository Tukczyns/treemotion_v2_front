import InfoWithPopup from "../../../components/info_with_popup/info_with_popup";
import PageTitleBar from "../../../components/page_title_bar/page_title_bar";
import RankingTile, { ERanking } from "../../../components/ranking/ranking_tile";
import ButtonPrimary from "../../../components/utils/buttons/buttons";
import PanelSectionName from "../../../components/utils/panel_section_name/panel_section_name";

const Rankings: React.FC = () => {
  return (
    <div>
      <PageTitleBar title="Rankingi" />
      <div className="mt-5">
        <div className="flex items-center justify-start">
          <PanelSectionName text="Miasta" />
          <div className="flex-shrink-0">
            <InfoWithPopup />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <RankingTile type={ERanking.CITY} place={1} title={'Warszawa'} total={'1500km'} users={2137} highlight={false} />
          <RankingTile type={ERanking.CITY} place={2} title={'Gliwice'} total={'1320km'} users={2115} highlight={true} />
          <RankingTile type={ERanking.CITY} place={3} title={'Kraków'} total={'1150km'} users={420} highlight={false} />
        </div>
        <div className="mt-4">
          <ButtonPrimary text="Zobacz więcej" type="button" rank="primary" />
        </div>
      </div>
      <div className="mt-5">
        <PanelSectionName text="Użytkownicy" />
        <div className="grid grid-cols-4 gap-4 mt-4">
          <RankingTile type={ERanking.USER} place={1} title={'Pussy hunter'} total={'420km'} highlight={false} />
          <RankingTile type={ERanking.USER} place={2} title={'Masakrator'} total={'321km'} highlight={false} />
          <RankingTile type={ERanking.USER} place={3} title={'James Błond'} total={'234km'} highlight={false} />
          <RankingTile type={ERanking.USER} place={41} title={'Tukczyns'} total={'115km'} highlight={true} />
        </div>
        <div className="mt-4">
          <ButtonPrimary text="Zobacz więcej" type="button" rank="primary" />
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-start">
          <PanelSectionName text="Grupy" />
          <div className="flex-shrink-0">
            <InfoWithPopup />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <RankingTile type={ERanking.GROUP} place={1} title={'Warszawski koks'} total={'2137'} users={2137} highlight={false} />
          <RankingTile type={ERanking.GROUP} place={2} title={'Rozkurwiacze'} total={'2115'} users={2115} highlight={false} />
          <RankingTile type={ERanking.GROUP} place={3} title={'Biegacze'} total={'420'} users={420} highlight={false} />
        </div>
        <div className="mt-4">
          <ButtonPrimary text="Zobacz więcej" type="button" rank="primary" />
        </div>
      </div>
    </div>
  );
};

export default Rankings;
