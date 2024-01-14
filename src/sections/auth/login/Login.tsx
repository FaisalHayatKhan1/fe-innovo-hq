import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import FormProvider from "@root/components/hook-form/FormProvider";
import { EyeOff, Eye } from "lucide-react";
import { Button } from "@root/components/ui/button";
import { PATH_AUTH } from "@root/routes/paths";
import LoadingComponent from "@root/components/Loading";
// form
import { LoginFormSchema, defaultValues } from ".";
import { useLoginMutation } from "@root/services/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RHFTextField } from "@root/components/hook-form";
import ErrorMessage from "@root/components/ErrorMessage";
import useAuth from "@root/hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginTrigger, { isLoading }] = useLoginMutation();
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const { login } = useAuth();

  const methods: any = useForm({
    resolver: yupResolver(LoginFormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    reset,
  } = methods;

  const onSubmit = async (credentials: any) => {
    const res: any = await loginTrigger(credentials);
    const { data, error } = res;
    if (error) {
      setErrorMessage("Email or Password is Incorrect");
    } else {
      login({ authToken: data?.access_token });
      reset();
    }

  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <LoadingComponent primaryLoading />}

      <div className="h-full">
        <div className=" space-y-5">
          <h2 className="text-f42 font-medium">Sign In </h2>
          <div className="text-f16 ">
            New user?
            <span className="text-navyBlue px-2 font-medium">
              <Link href={PATH_AUTH?.register}>Create an acount</Link>
            </span>
          </div>
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
          <ErrorMessage
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
          <div className=" flex justify-between items-center">
            <Link
              className="text-[#9C9CA4] text-f14 font-normal"
              href={PATH_AUTH?.forgotPassword}
            >
              Forgot password?
            </Link>
            <Button type="submit">Sign In</Button>
          </div>
          <div className=" max-w-sm">
            <h1 className=" text-f12 text-[#9C9CA4]">
              Protected by reCAPTCHA and subject to the Google .
              <span className="text-navyBlue px-1 font-medium">
                <Link href={"#"}>Privacy Policy</Link>
              </span>
              and
              <span className="text-navyBlue px-1 font-medium">
                <Link href={"#"}>Terms of Service</Link>
              </span>
              .
            </h1>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default Login;
