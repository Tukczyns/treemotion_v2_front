import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../components/loader/loader";
import Profile from "../../components/profile/profile";
import SideNav from "../../components/sidenav/sidenav";

const Home: React.FC = () => {
  const [menuOpen, toggleMenu] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="h-screen w-full">
      {loading && <Loader />}
      <div className="w-full h-full flex justify-between">
        <SideNav menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <div
          className={`flex-1 flex h-full bg-gray-900 p-3 transform duration-300 ${
            menuOpen && ""
          }`}
        >
          <div className="w-2/3 h-full bg-gray-800 shadow-xl p-16">
            <Outlet />
          </div>
          <div className="h-full w-1/3">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
