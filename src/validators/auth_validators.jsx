import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  identifier: Yup.string().min(3).required().email(),
  password: Yup.string().required(),
});
