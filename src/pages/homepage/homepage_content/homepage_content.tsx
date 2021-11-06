import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import ButtonPrimary from "../../../components/utils/buttons/buttons";
import forest from "../../../images/forest_background.jpg";
import trees from "../../../images/trees_placeholder.png";

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

const HomepageContent: React.FC<{ setSplit: (arg: boolean) => void }> = ({
  setSplit,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (index < names.length - 1) setIndex(index + 1);
      console.log("INdex change");
    }, 150);
  }, [index]);

  return (
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
        <div className="mt-7">
          <ButtonPrimary
            text="Rozpocznij"
            type="button"
            action={setSplit}
            rank="primary"
          />
        </div>
      </div>
    </HomepageBackground>
  );
};

export default HomepageContent;

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
