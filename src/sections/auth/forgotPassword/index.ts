import * as Yup from "yup";

interface DEFVALUE {
  email: string;
}

export const defaultValues: DEFVALUE = {
  email: "",
};

export const ForgotPasswordFormSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid Email"),
});

