import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import FormProvider from "@root/components/hook-form/FormProvider";
import { EyeOff, Eye } from "lucide-react";
import { Button } from "@root/components/ui/button";
import { RHFCheckbox } from "@root/components/hook-form";
// form
import { DefaultValuesResetPassword, ResetPasswordSchema } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RHFTextField } from "@root/components/hook-form";
import { useRouter } from "next/router";
import { useResetPasswordMutation } from "@root/services/auth";
import { PATH_AUTH } from "@root/routes/paths";
import LoadingComponent from "@root/components/Loading";
import ErrorMessage from "@root/components/ErrorMessage";


const ResetPassword = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [queryParam, setQueryParam] = useState<any>(null);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const [resetPasswordTrigger, { isLoading }] = useResetPasswordMutation();
  
  useEffect(() => {
    const { email, id } = router.query;
    setQueryParam({ email, id });
  }, [router.query]);

  const methods: any = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: DefaultValuesResetPassword,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    reset,
  } = methods;

  const onSubmit = async (credentials: any) => {
    const payload = {
      email: queryParam?.email,
      password: credentials?.password,
      otp: queryParam?.id,
    };
    const res: any = await resetPasswordTrigger(payload);
    const { data, error } = res;
    if (error) {
      setErrorMessage("OTP is Incorrect");
    } else {
      router?.push(PATH_AUTH?.login);
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="h-full">
        {isLoading && <LoadingComponent primaryLoading />}

        <div className=" space-y-5">
          <h2 className="text-f42 font-medium">New Password</h2>
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
          <RHFTextField
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

export default ResetPassword;
