import PageTitleBar from "../../../components/page_title_bar/page_title_bar";

import {
  MapContainer,
  TileLayer,
  Polyline,
} from "react-leaflet";
import { FiClock } from "react-icons/fi";
import { BsSpeedometer2 } from "react-icons/bs";
import { FaRoute } from "react-icons/fa";
import { AiOutlineFire } from "react-icons/ai";
import { RiMedalLine } from "react-icons/ri";
import ResultTile, { ETile } from "../../../components/result_tile/result_tile";
import Friend from "../../../components/friend/friend";

const polyline = [
  [50.146035, 18.690144],
  [50.147128, 18.689533],
  [50.147657, 18.689073],
  [50.147206, 18.68822],
  [50.146052, 18.68994],
  [50.145993, 18.690176],
];
const limeOptions = { color: "#ffaa33" };

const WorkoutDetail: React.FC = () => {
  return (
    <div className="w-full h-full">
      <PageTitleBar title="Trening 28.10.2021r." />
      <div className="w-100 h-112 mt-5 relative">
        <MapContainer
          center={[50.147657, 18.689073]}
          zoom={17}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
          />
          <Polyline
            pathOptions={limeOptions}
            positions={polyline as [number, number][]}
          />
        </MapContainer>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-3 mt-10 gap-4">
          <ResultTile
            type={ETile.DISTANCE}
            icon={<FaRoute />}
            value={"15.23km"}
            title={"distance"}
          />
          <ResultTile
            type={ETile.AVG_SPEED}
            icon={<BsSpeedometer2 />}
            value={"10.42km/h"}
            title={"Śr. prędkość"}
          />
          <ResultTile
            type={ETile.TIME}
            icon={<FiClock />}
            value={"1h 2min"}
            title={"Czas"}
          />
          <ResultTile
            type={ETile.KCAL}
            icon={<AiOutlineFire />}
            value={"532"}
            title={"Kalorie"}
          />
          <ResultTile
            type={ETile.MAX}
            icon={<BsSpeedometer2 />}
            value={"15km/h"}
            title={"Max. prędkość"}
          />
          <ResultTile
            type={ETile.MIN}
            icon={<RiMedalLine />}
            value={"175"}
            title={"Doświadczenie"}
          />
        </div>
        <div className="grid grid-cols-3 text-gray-400 mt-4 gap-x-4 gap-y-1">
          <div className="pl-4">Prywatne</div>
          <div className="pl-4">Opis</div>
          <div className="pl-4">Partner</div>
          <div className="text-white text-lg pl-4">Nie</div>
          <div className="text-white text-lg pl-4">Pierwszy trening</div>
          <div className="text-white text-lg pl-4">
            <Friend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetail;
