import { Link } from "react-router-dom";
import styled from "styled-components";

const PageNotFound: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <FourOFour className="text-white">404</FourOFour>
      <div className="text-5xl text-center text-white">
        Nie znaleziono strony, wróć na <Link to="/" className="text-green-700">stronę główną</Link>
      </div>
    </div>
  );
};

export default PageNotFound;

const FourOFour = styled.div`
  font-size: 20vw;
  line-height: 21vw;
  font-weight: 900;
  font-family: sans-serif;
`;
