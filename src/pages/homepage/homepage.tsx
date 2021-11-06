import React, { useEffect, useState } from "react";
import Login from "../../components/auth/login/login";
import Nav from "../../components/nav/nav";
import HomepageContent from "./homepage_content/homepage_content";

const Homepage: React.FC = () => {
  const [split, setSplit] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <React.Fragment>
      <Nav fade={isLogged} />
      <section className="min-h-screen overflow-hidden">
        <div className={`flex justify-between relative`}>
          <div
            className={`duration-1000 ${
              split ? "w-0 lg:w-1/2" : "w-full"
            } overflow-hidden  transform ${isLogged && " -translate-x-full"}`}
          >
            <HomepageContent setSplit={setSplit} />
          </div>
          <div
            className={`duration-1000 ${
              split ? "w-full lg:w-1/2" : "w-0"
            } overflow-hidden bg-gray-900 transform ${
              isLogged && " translate-x-full"
            }`}
          >
            <div className="w-full h-screen flex items-center justify-center min-w-max">
              <Login setIsLogged={setIsLogged} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Homepage;
