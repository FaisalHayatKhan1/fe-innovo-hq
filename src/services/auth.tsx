import { baseAPI } from "./baseApi";
import { ENDPOINTS } from "@root/config/endpoints";
export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: any) => ({
        url: ENDPOINTS?.login,
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (user: any) => ({
        url: ENDPOINTS?.register,
        method: "POST",
        body: user,
      }),
    }),
    resetPassword: builder.mutation({
      query: (user: any) => ({
        url: ENDPOINTS?.resetPassword,
        method: "PATCH",
        body: user,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (user: any) => ({
        url: ENDPOINTS?.forgotPassword,
        method: "PATCH",
        body: user,
      }),
    }),
    otpVerification: builder.mutation({
      query: (user: any) => ({
        url: ENDPOINTS?.otpVerification,
        method: "POST",
        body: user,
      }),
    }),
    resendOTP: builder.mutation({
      query: (user: any) => ({
        url: ENDPOINTS?.otpVerification,
        method: "POST",
        body: user,
      }),
    }),
    getCountry: builder.mutation({
      query: () => ({
        url: ENDPOINTS?.getCountry,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useResetPasswordMutation,
  useForgotPasswordMutation,
  useOtpVerificationMutation,
  useResendOTPMutation,
  useGetCountryMutation,
} = authAPI;
