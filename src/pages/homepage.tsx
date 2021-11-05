import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Login from "../components/auth/login/login";
import forest from "../images/forest_background.jpg";
import trees from "../images/trees_placeholder.png";

const names = [
  "Drzewa",
  "Trees",
  "Bäume",
  "木",
  "Drzewa",
  "Trees",
  "Bäume",
  "木",
  "Drzewa",
  "Trees",
  "Bäume",
  "木",
  "Treemotion",
];

const Homepage: React.FC = () => {
  const [split, setSplit] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (index < names.length - 1) setIndex(index + 1);
      console.log("INdex change");
    }, 150);
  }, [index]);

  return (
    <section className="min-h-screen overflow-hidden">
      <div className={`flex justify-between relative`}>
        <div
          className={`duration-1000 ${
            split ? "w-0 lg:w-1/2" : "w-full"
          } overflow-hidden  transform ${isLogged && " -translate-x-full"}`}
        >
          <HomepageBackground
            className={`h-screen relative flex items-center justify-center w-full`}
          >
            <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-60 z-0"></div>
            <div className="relative z-10 text-white text-center max-w-full min-w-max">
              <img src={trees} alt="trees" className="mx-auto" />
              {index < names.length - 1 && (
                <h1 className="uppercase text-7xl mt-7 font-medium">
                  {names[index]}
                </h1>
              )}
              {index >= names.length - 1 && (
                <HeadingFadeIn className="uppercase text-7xl mt-7 font-medium">
                  Treemotion
                </HeadingFadeIn>
              )}
              <h2 className="lg:max-w-lg font-bold mt-7 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                placerat iaculis metus ac tincidunt. In lobortis dui eget mauris
                rhoncus, eu vestibulum mi ultrices.
              </h2>
              <button
                className="mt-7 px-10 pt-2 pb-2.5 bg-green-700 hover:bg-green-800 duration-200 text-lg font-bold shadow-xl"
                onClick={() => setSplit(!split)}
              >
                Rozpocznij
              </button>
            </div>
          </HomepageBackground>
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
  );
};

export default Homepage;

const HomepageBackground = styled.div`
  background-image: url(${forest});
`;

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const HeadingFadeIn = styled.div`
  animation: ${fadeIn} 2s linear;
`;
