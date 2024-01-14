import * as Yup from "yup";
interface DEFVALUE {
  password: string;
  confirmPassword: string;
}
export const DefaultValuesResetPassword: DEFVALUE = {
  password: "",
  confirmPassword: "",
};
const passwordValidationReg =
  /^.*(?=.{8,})((?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .matches(
      passwordValidationReg,
      "Password must contain at least 8 characters, one uppercase, one number and one special character"
    )
    .min(8, "Password should be of minimum 6 characters length")
    .max(15),

  confirmPassword: Yup.string()
    .required("Please enter your confirm password")
    .oneOf(
      [Yup.ref("password")],
      `Password does't match, Please try again with same password`
    ),
});
