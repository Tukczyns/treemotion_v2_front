import React from "react";

interface IProps {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  rank?: "primary" | "secondary";
  action?: (arg?: any) => void;
}

const ButtonPrimary: React.FC<IProps> = ({
  text,
  type,
  rank = "primary",
  action,
}) => {
  return (
    <React.Fragment>
      {rank === "primary" && (
        <button
          onClick={action}
          type={type}
          className="text-white px-10 pt-2 pb-2.5 bg-green-700 hover:bg-green-800 duration-200 text-lg font-bold shadow-xl rounded-md"
        >
          {text}
        </button>
      )}
      {rank === "secondary" && (
        <button
          onClick={action}
          type={type}
          className="text-white bg-gray-800 hover:bg-gray-700 duration-200 px-10 pt-2 pb-2.5 text-lg font-bold shadow-xl rounded-md"
        >
          {text}
        </button>
      )}
    </React.Fragment>
  );
};

export default ButtonPrimary;
