import React from "react";

interface IProps {
  text: string;
  type: string;
  rank: "primary" | "secondary";
}

const ButtonPrimary: React.FC<IProps> = ({ text, type, rank = "primary" }) => {
  return (
    <React.Fragment>
      {rank === "primary" && <button>{text}</button>}
      {rank === "secondary" && <button>{text}</button>}
    </React.Fragment>
  );
};

export default ButtonPrimary;
