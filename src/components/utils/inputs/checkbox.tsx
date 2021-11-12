import { Field } from "formik";
import styled from "styled-components";
import { BsCheck } from "react-icons/bs";

interface IProps {
  name: string;
  text: string;
}

const Checkbox: React.FC<IProps> = ({ name, text }) => {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <CheckboxStyled type="checkbox" id={name} name={name} />
        <label htmlFor={name} className="text-green-700">
          <BsCheck className="text-5xl" />
        </label>
      </div>
      <p className="ml-3 text-white font-semibold">{text}</p>
    </div>
  );
};

export default Checkbox;

const CheckboxStyled = styled(Field)`
  display: none;
  & + label {
    display: block;
    color: rgb(255, 255, 255, 0);
    width: 1.8rem;
    height: 1.8rem;
    transition: all 0.2s;
    border: 2px solid rgb(4, 120, 87);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:checked + label {
    background: rgb(4, 120, 87);
    color: rgb(255, 255, 255, 1);
  }
`;
