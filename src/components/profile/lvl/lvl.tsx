import ButtonPrimary from "../../utils/buttons/buttons";
import PanelSectionName from "../../utils/panel_section_name/panel_section_name";

const Lvl: React.FC = () => {
  return (
    <div className="mt-9">
      <PanelSectionName text="Poziom profilu" />
      <div className="mt-3">
        <p className="text-2xl text-white font-bold">Zawodowiec</p>
        <div className="w-full h-4 bg-gray-800 rounded-lg mt-2 overflow-hidden">
          <div className="w-2/3 h-full bg-green-500" />
        </div>
        <div>
          <p className="mt-3 text-sm text-white font-bold">
            Następny poziom: <span className="text-green-500">1232/1500km</span>
          </p>
        </div>
      </div>
      <div className="flex mt-7">
        <ButtonPrimary text="Ranking" type="button" />
        <div className="ml-3">
          <ButtonPrimary text="Osiągnięcia" type="button" rank="secondary" />
        </div>
      </div>
    </div>
  );
};

export default Lvl;
