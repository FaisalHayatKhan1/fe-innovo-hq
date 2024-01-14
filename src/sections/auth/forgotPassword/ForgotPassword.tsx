import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import FormProvider from "@root/components/hook-form/FormProvider";
import { Button } from "@root/components/ui/button";

// form
import { ForgotPasswordFormSchema, defaultValues } from ".";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RHFTextField } from "@root/components/hook-form";
import { PATH_AUTH } from "@root/routes/paths";
import { useForgotPasswordMutation } from "@root/services/auth";
import ErrorMessage from "@root/components/ErrorMessage";
import LoadingComponent from "@root/components/Loading";
import { useRouter } from "next/router";
const ForgotPasswod = () => {
  const { push } = useRouter();
  const [forgotPasswordTrigger, { isLoading }] = useForgotPasswordMutation();
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const methods: any = useForm({
    resolver: yupResolver(ForgotPasswordFormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    reset,
  } = methods;

  const onSubmit = async (credentials: any) => {
    const res: any = await forgotPasswordTrigger(credentials);
    const { data, error } = res;
    if (error) {
      setErrorMessage(error?.data?.error ?? "User Not Found");
    } else {
      push({
        pathname: PATH_AUTH?.otpVerification,
        query: { email: credentials?.email },
      });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="h-full">
        {isLoading && <LoadingComponent primaryLoading />}
        <div className=" space-y-5">
          <h2 className="text-f42 font-medium">Forgot Password</h2>
          <div className="text-f16 ">
            Already have an account?
            <span className="text-navyBlue px-2 font-medium">
              <Link href={PATH_AUTH?.login}>Login</Link>
            </span>
          </div>
          <RHFTextField
            label="Email Address"
            type="email"
            name="email"
            placeholder="Username or Email"
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

export default ForgotPasswod;
