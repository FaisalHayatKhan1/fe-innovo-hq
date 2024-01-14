import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import FormProvider from "@root/components/hook-form/FormProvider";
import { EyeOff, Eye } from "lucide-react";
import { Button } from "@root/components/ui/button";
import {
  RHFCheckbox,
  RHFTextField,
  RHFSelect,
} from "@root/components/hook-form";
// form
import { DefaultValuesReg, RegisterFormSchema } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { PATH_AUTH } from "@root/routes/paths";
import {
  useGetCountryMutation,
  useRegisterMutation,
} from "@root/services/auth";
import LoadingComponent from "@root/components/Loading";
import ErrorMessage from "@root/components/ErrorMessage";
import { useRouter } from "next/router";
const Register = () => {
  const { push } = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [getCountryTrigger, { isLoading }] = useGetCountryMutation();
  const [registerTrigger, { isLoading: registerLoading }] =
    useRegisterMutation();
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [countryData, setCountryData] = React.useState([]);
  React.useEffect(() => {
    const getCountryHandler = async () => {
      const res: any = await getCountryTrigger("ss");
      const { data, error } = res;

      if (error) {
        setErrorMessage("Email or Password is Incorrect");
      } else {
        setCountryData(
          data?.map((item: any) => ({ ...item, value: item?._id }))
        );
      }
    };
    getCountryHandler();
  }, []);

  const methods: any = useForm({
    resolver: yupResolver(RegisterFormSchema),
    defaultValues: DefaultValuesReg,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    reset,
  } = methods;

  const onSubmit = async (credentials: any) => {
    const { country, password, email, name } = credentials;

    const res: any = await registerTrigger({
      country_id: country,
      password,
      email,
      name,
      user_type: "customer",
    });
    const { data, error } = res;
    if (error) {
      setErrorMessage("Something Went Wrong");
    } else {
      push({
        pathname: PATH_AUTH?.otpVerification,
        query: { email: email, verifyUser: true },
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="h-full max-w-sm">
        {(isLoading || registerLoading) && <LoadingComponent primaryLoading />}

        <div className=" space-y-5">
          <h2 className="text-f42 font-medium">Create An Account </h2>
          <div className="text-f16 ">
            Already have an account?
            <span className="text-navyBlue px-2 font-medium">
              <Link href={PATH_AUTH?.login}>Login</Link>
            </span>
          </div>
          <RHFTextField
            label="Name"
            type="text"
            name="name"
            placeholder="Enter your Name"
          />
          <RHFTextField
            label="Email Address"
            type="email"
            name="email"
            placeholder="Username or Email"
          />
          <RHFTextField
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            // textInputCss={`${!showPassword ? "text-f30 py-[2px]" : ""}`}
            placeholder="Input Your Password"
            endEndadornment={
              <div
                className="cursor-pointer"
                onClick={() => setShowPassword((show) => !show)}
              >
                {showPassword ? (
                  <Eye
                    className="text-customGray"
                    size={"20px"}
                    strokeWidth={2}
                  />
                ) : (
                  <EyeOff
                    className="text-customGray"
                    size={"20px"}
                    strokeWidth={2}
                  />
                )}
              </div>
            }
          />
          {/* <RHFTextField
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            // textInputCss={`${!showPassword ? "text-f30 py-[2px]" : ""}`}
            placeholder="Input Your Password"
            endEndadornment={
              <div
                className="cursor-pointer"
                onClick={() => setShowPassword((show) => !show)}
              >
                {showPassword ? (
                  <Eye
                    className="text-customGray"
                    size={"20px"}
                    strokeWidth={2}
                  />
                ) : (
                  <EyeOff
                    className="text-customGray"
                    size={"20px"}
                    strokeWidth={2}
                  />
                )}
              </div>
            }
          /> */}
          <RHFSelect
            name="country"
            label="Select Country"
            placeholder="Country"
            dropDownData={countryData}
          />
          <ErrorMessage
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
          <div className="">
            <Button disabled={!isValid} className="w-full" type="submit">
              Create
            </Button>
          </div>
          <div className="max-w-sm">
            <RHFCheckbox
              name="termAndCondition"
              checkBoxLabel={
                <h1 className=" text-f12 text-[#9C9CA4]">
                  By clicking Create account, I agree that I have read and
                  accepted the and .
                  <span className="text-navyBlue px-1 font-medium">
                    <Link href={"#"}>Terms of Use</Link>
                  </span>
                  and
                  <span className="text-navyBlue px-1 font-medium">
                    <Link href={"#"}>Privacy Policy</Link>
                  </span>
                  .
                </h1>
              }
            />
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default Register;
