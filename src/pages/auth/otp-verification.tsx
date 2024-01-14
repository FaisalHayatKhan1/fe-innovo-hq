import React from "react";
import GuestGuard from "@root/guards/GuestGuard";
import Page from "../../components/Page";
import Layout from "@root/layouts";
import { OTPVerificationSection } from "@root/sections/auth";

export default function OTPVerification() {


  return (
    <GuestGuard>
      <Page title="OTPVerification">
        <OTPVerificationSection />
      </Page>
    </GuestGuard>
  );
}

OTPVerification.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="auth" title="OTPVerification">
      {page}
    </Layout>
  );
};

