import axios from "axios";
import { Form, Formik } from "formik";
import { useHistory } from "react-router";
import { LoginSchema } from "../../../validators/auth_validators";
import FormInput from "../../utils/inputs/form_input";
import ButtonPrimary from "../../utils/buttons/buttons";
import {
  FacebookButton,
  GoogleButton,
} from "../../utils/buttons/social_buttons";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../utils/inputs/checkbox";

interface FormValues {
  identifier: string;
  password: string;
}

interface IProps {
  setIsLogged: (arg: boolean) => void;
}

const Register: React.FC<IProps> = ({ setIsLogged }) => {
  const navigate = useNavigate();

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
              setTimeout(() => navigate("/panel"), 1000);
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col w-3/4 2xl:w-1/2 mx-auto max-w-full">
            <FormInput
              id="identifier"
              name="identifier"
              type="email"
              placeholder="Adres e-mail"
              error={errors.identifier}
              touched={touched.identifier}
            />
            <FormInput
              id="password"
              name="password"
              type="password"
              placeholder="Hasło"
              error={errors.password}
              touched={touched.password}
            />
            <div className="mt-7">
              <Checkbox name="remember" text="Zapamiętaj mnie" />
            </div>
            <div className="h-7"></div>
            <ButtonPrimary type="submit" text="Zaloguj" />
            <p className="text-sm text-center py-2">lub</p>
            <div className="grid grid-cols-2 gap-6">
              <FacebookButton action={() => {}} />
              <GoogleButton action={() => {}} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
