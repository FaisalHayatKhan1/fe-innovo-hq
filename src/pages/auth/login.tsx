
// guards
import GuestGuard from "@root/guards/GuestGuard";
// components
import Page from "../../components/Page";
import Layout from "@root/layouts";
import { LoginSection } from "@root/sections/auth";

// ----------------------------------------------------------------------

Login.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="auth" title="Login">
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <GuestGuard>
      <Page title="Login">
        <LoginSection />
      </Page>
    </GuestGuard>
  );
}

