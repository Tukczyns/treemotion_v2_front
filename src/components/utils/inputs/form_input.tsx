import { Field } from "formik";
import React from "react";
import styled from "styled-components";

interface IProps {
  id: string;
  name: string;
  placeholder: string;
  type: string;
  touched: boolean | undefined;
  error: string | undefined;
}

const FormInput: React.FC<IProps> = ({
  id,
  name,
  placeholder,
  type,
  touched,
  error,
}) => {
  return (
    <React.Fragment>
      <div className="relative mt-6 w-full">
        <CustomField
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
          hasError={error && touched}
        />
        <label htmlFor={id}>{placeholder}</label>
        <span></span>
      </div>
      {error && touched ? <p>{error}</p> : null}
    </React.Fragment>
  );
};

export default FormInput;

const CustomField = styled(Field)<{ hasError: boolean }>`
  background: #e2e2e2;
  padding: 12px 10px;
  font-size: 18px;
  outline: none;
  width: 100%;
  background: rgb(55, 65, 81);

  &::placeholder {
    opacity: 0;
    visibility: hidden;
  }

  & + label {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    transition: all 0.2s;
  }

  & ~ span {
    width: 0%;
    height: 2px;
    display: block;
    background: ${(props) =>
      props.hasError ? "red" : "linear-gradient(to right, #008000, #00cc00)"};
    transition: width 0.2s;
  }

  &:not(:placeholder-shown) ~ span,
  &:focus ~ span {
    width: 100%;
  }

  &:not(:placeholder-shown),
  &:focus {
    background: rgb(17, 24, 39);

    & + label {
      top: 0;
      font-size: 14px;
    }
  }
`;
