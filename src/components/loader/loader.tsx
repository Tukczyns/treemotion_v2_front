import styled, { css, keyframes } from "styled-components";

const Loader: React.FC = () => {
  return (
    <SpinnerContainer className="fixed left-0 top-0 z-50 h-screen w-full bg-gray-900 flex flex-col items-center justify-center">
      <Spinnner>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Spinnner>
      <p className="text-white font-bold text-lg mt-2">loading...</p>
    </SpinnerContainer>
  );
};

export default Loader;

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  0%{
    opacity:  1;
  }
  99%{
    opacity: 0;
    visibility: hidden;
  }
  100%{
    opacity: 0;
    visibility: hidden;
    display: none;
  }
`;

const SpinnerContainer = styled.div``;

const animation = keyframes`
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
`;

const Spinnner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  animation: ${fadeIn} 1s linear forwards;

  & div {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    animation: ${animation} 1.2s linear infinite;
  }
  & div:nth-child(1) {
    top: 8px;
    left: 8px;
    animation-delay: 0s;
  }
  & div:nth-child(2) {
    top: 8px;
    left: 32px;
    animation-delay: -0.4s;
  }
  & div:nth-child(3) {
    top: 8px;
    left: 56px;
    animation-delay: -0.8s;
  }
  & div:nth-child(4) {
    top: 32px;
    left: 8px;
    animation-delay: -0.4s;
  }
  & div:nth-child(5) {
    top: 32px;
    left: 32px;
    animation-delay: -0.8s;
  }
  & div:nth-child(6) {
    top: 32px;
    left: 56px;
    animation-delay: -1.2s;
  }
  & div:nth-child(7) {
    top: 56px;
    left: 8px;
    animation-delay: -0.8s;
  }
  & div:nth-child(8) {
    top: 56px;
    left: 32px;
    animation-delay: -1.2s;
  }
  & div:nth-child(9) {
    top: 56px;
    left: 56px;
    animation-delay: -1.6s;
  }
`;
