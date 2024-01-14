import * as Yup from "yup";
interface DEFVALUE {
  name: string;
  email: string;
  password: string;
  country: string;
  termAndCondition: boolean;
}
export const DefaultValuesReg: DEFVALUE = {
  name: "",
  email: "",
  password: "",
  country: "",
  termAndCondition: false,
};
const passwordValidationReg =
  /^.*(?=.{8,})((?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const RegisterFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  country: Yup.string().required("country is Required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      passwordValidationReg,
      "Password must contain at least 8 characters, one uppercase, one number and one special character"
    )
    .min(8, "Password should be of minimum 6 characters length")
    .max(15),

  // confirmPassword: Yup.string()
  //   .required("Please enter your confirm password")
  //   .oneOf(
  //     [Yup.ref("password")],
  //     `Password does't match, Please try again with same password`
  //   ),
});
