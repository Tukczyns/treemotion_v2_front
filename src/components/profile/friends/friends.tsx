import Friend from "../../friend/friend";
import PanelSectionName from "../../utils/panel_section_name/panel_section_name";

const Friends: React.FC = () => {
  return (
    <div className="mt-6">
      <PanelSectionName text="Znajomi" />
      <div className="mt-4">
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    </div>
  );
};

export default Friends;
