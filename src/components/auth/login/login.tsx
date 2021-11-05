import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useHistory } from "react-router";
import styled from "styled-components";
import { LoginSchema } from "../../../validators/auth_validators";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface FormValues {
  identifier: string;
  password: string;
}

interface IProps {
  setIsLogged: (arg: boolean) => void;
}

const Login: React.FC<IProps> = ({ setIsLogged }) => {
  const history = useHistory();

  const initialValues: FormValues = { identifier: "", password: "" };
  return (
    <div className="w-full text-white" style={{ minWidth: "60rem" }}>
      <h3 className="text-3xl text-center">Zaloguj się</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        validateOnBlur={true}
        onSubmit={async (values) => {
          console.log("Submit");
          try {
            const { data, status } = await axios.post("/auth/local", {
              identifier: values.identifier,
              password: values.password,
            });
            if (status === 200) {
              console.log(data);
              setIsLogged(true);
              setTimeout(() => history.push("/home"), 1000);
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col w-3/4 2xl:w-1/2 mx-auto max-w-full">
            <div className="relative mt-6 w-full">
              <CustomField
                id="identifier"
                name="identifier"
                placeholder="Adres email"
                hasError={
                  errors.identifier && touched.identifier ? true : false
                }
              />
              <label htmlFor="identifier">Adres email</label>
              <span></span>
            </div>
            {errors.identifier && touched.identifier ? (
              <p>{errors.identifier}</p>
            ) : null}
            <div className="relative mt-6 w-full">
              <CustomField
                id="password"
                name="password"
                placeholder="Hasło"
                type="password"
                hasError={errors.password && touched.password}
              />
              <label htmlFor="password">Hasło</label>
              <span></span>
            </div>
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : null}
            <button
              className="bg-green-600 hover:bg-green-700 text-white uppercase font-bold text-lg px-10 py-2 mt-6 duration-200"
              type="submit"
            >
              Zaloguj
            </button>
            <p className="text-sm text-center py-2">lub</p>
            <div className="grid grid-cols-2 gap-6">
              <button className="w-full bg-facebook pt-2 pb-2 text-center text-white shadow-2xl hover:bg-opacity-75 duration-200 min-w-max flex items-center">
                <FaFacebookF className="text-2xl ml-1" />
                <span className="ml-2 font-medium">Dołącz z Facebookiem</span>
              </button>
              <button className="w-full bg-white pt-2 pb-2 text-center shadow-2xl hover:bg-gray-100 duration-200 min-w-max text-black flex items-center">
                <FcGoogle className="text-2xl ml-1" />
                <span className="ml-2 font-medium text-gray-500">
                  Dołącz z Google
                </span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;

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
