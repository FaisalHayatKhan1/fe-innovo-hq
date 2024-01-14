import Link from "next/link";
import { otpScreenIcon } from "@root/assets";
import React, { useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Image from "next/image";
import { PATH_AUTH } from "@root/routes/paths";
import { useRouter } from "next/router";
import {
  useOtpVerificationMutation,
  useResendOTPMutation,
} from "@root/services/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "@root/components/ErrorMessage";
import LoadingComponent from "@root/components/Loading";
const OTPVerification = () => {
  // const { control, handleSubmit, setValue } = useForm();
  const otpFields = [
    "field1",
    "field2",
    "field3",
    "field4",
    "field5",
    "field6",
  ];
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otpVerificationTrigger, { isLoading }] = useOtpVerificationMutation();
  const [resendOTPTrigger, { isLoading: resendLoading }] =
    useResendOTPMutation();
  const [email, setEmail] = React.useState<string>("");
  const [verifyUser, setVerifyUser] = React.useState<boolean>(false);
  const router = useRouter();
  const [message, setMessage] = React.useState<string | null>(null);
  const [messageType, setMessageType] = React.useState("error");

  useEffect(() => {
    const { email, verifyUser } = router.query;
    setEmail(String(email));
    setVerifyUser(verifyUser ? Boolean(verifyUser) : false);
  }, [router.query]);

  const methods: any = useForm({
    // resolver: yupResolver(LoginFormSchema),
    defaultValues: {
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
      field6: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    reset,
    control,
    setValue,
    getValue,
  } = methods;

  const handleInputChange = (index: number, value: string) => {
    const sanitizedValue = value.slice(0, 1);

    setValue(otpFields[index], sanitizedValue); // Update the form value

    // Focus on the next input field if value is filled
    if (sanitizedValue.length === 1 && index < otpFields.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    // Check if all fields are filled
    const allFieldsFilled = otpFields.every(
      (field) => methods.getValues()[field].length === 1
    );
    if (allFieldsFilled) {
      handleSubmit(onSubmit)();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = event.clipboardData.getData("text");
    const digits = pastedData.split("").filter((char) => /\d/.test(char));

    if (digits.length === otpFields.length) {
      otpFields.forEach((field, index) => {
        setValue(field, digits[index]);
        if (index < otpFields.length - 1) {
          inputRefs.current[index + 1]?.focus();
        }
      });
    }
  };

  const onSubmit = async (otpData: any) => {
    const otpCode = `${otpData.field1}${otpData.field2}${otpData.field3}${otpData.field4}${otpData.field5}${otpData.field6}`;
    const payload = {
      email: email,
      otp: otpCode,
    };
    const res: any = await otpVerificationTrigger(payload);
    const { data, error } = res;
    if (error) {
      setMessage("OTP is Incorrect");
      setMessageType("error");
    } else {
      verifyUser
        ? router?.push(PATH_AUTH?.login)
        : router?.push({
            pathname: PATH_AUTH?.resetPassword,
            query: { email: email, id: otpCode },
          });
    }
  };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);
  const resendOTPHandler = async () => {
    const res: any = await resendOTPTrigger(email);
    const { data, error } = res;
    if (error) {
      setMessage("Failed To Resent");
      setMessageType("error");
    } else {
      setMessage("OTP Sent Successfully");
      setMessageType("success");
    }
  };
  return (
    <form
      method={methods}
      onSubmit={handleSubmit(onSubmit)}
      className="flex space-x-2"
    >
      <div className=" space-y-5">
        {(isLoading || resendLoading) && <LoadingComponent primaryLoading />}
        <Image src={otpScreenIcon} alt="" />
        <h2 className="text-f42 font-medium">
          {verifyUser ? "Verify Your Account" : "Update Your Password"}
        </h2>
        <div className="text-f16 ">
          Enter the code we sent to the phone number ending in -30
        </div>
        <div className="flex items-center space-x-6">
          {otpFields.map((field, index) => (
            <Controller
              key={field}
              control={control}
              name={field}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  maxLength={1}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange(index, e.target.value);
                  }}
                  onPaste={handlePaste}
                  className="w-[60px] h-[65px] text-center border appearance-none focus:border-primary border-gray-200 bg-transparent rounded-[10px] focus-visible:outline-none text-f18 font-normal"
                />
              )}
            />
          ))}
        </div>
        <div>
          <ErrorMessage
            type={messageType}
            errorMessage={message}
            setErrorMessage={setMessage}
          />
        </div>
        <div className=" flex justify-between items-center">
          <Link
            className="text-[#9C9CA4] text-f14 font-normal"
            href={PATH_AUTH?.login}
          >
            Back
          </Link>
          <div
            className="text-navyBlue text-f14 font-normal cursor-pointer"
            onClick={resendOTPHandler}
          >
            Don’t receive your code
          </div>
        </div>
        <hr />
        <div>
          <Link className="text-navyBlue text-f14 font-normal" href={"#"}>
            Get your code with another way{" "}
          </Link>
        </div>
      </div>
    </form>
  );
};

export default OTPVerification;
