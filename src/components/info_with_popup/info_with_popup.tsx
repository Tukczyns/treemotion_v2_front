import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const InfoWithPopup: React.FC = () => {
  const [showPopup, togglePopup] = useState(false);
  return (
    <div className="relative flex-shrink-0 ml-2">
      <div className="text-white font-black w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center text-xs cursor-pointer" onClick={() => togglePopup(!showPopup)}>
        i
      </div>
      {showPopup && <Popup>Każdy użytkownik może zdobyć dla miasta max. 50km dziennie</Popup>}
    </div>
  );
};

export default InfoWithPopup;

const fadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const Popup = styled.div`
  background: #4B5563;
  color: #fff;
  position: absolute;
  left: 130%;
  min-width: 250px;
  max-width: 300px;
  top: 50%;
  transform: translate(0, -50%);
  border-radius: 10px;
  padding: 10px 20px;
  animation: ${fadeIn} .3s both;
`;
