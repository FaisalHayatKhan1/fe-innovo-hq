import GuestGuard from "@root/guards/GuestGuard";
import Page from "../../components/Page";
import Layout from "@root/layouts";
import { ResetPasswordSection } from "@root/sections/auth";

export default function ResetPassword() {


  return (
    <GuestGuard>
      <Page title="ResetPassword">
        <ResetPasswordSection />
      </Page>
    </GuestGuard>
  );
}

ResetPassword.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="auth" title="ResetPassword">
      {page}
    </Layout>
  );
};

