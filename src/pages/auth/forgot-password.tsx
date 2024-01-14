// guards
import GuestGuard from "@root/guards/GuestGuard";
// components
import Page from "../../components/Page";
import Layout from "@root/layouts";
import { ForgotPasswordSection } from "@root/sections/auth";

// ----------------------------------------------------------------------

ForgotPassword.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="auth" title="ForgotPassword">
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function ForgotPassword() {
  return (
    <GuestGuard>
      <Page title="ForgotPassword">
        <ForgotPasswordSection />
      </Page>
    </GuestGuard>
  );
}

