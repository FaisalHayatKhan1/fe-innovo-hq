
// guards
import GuestGuard from "@root/guards/GuestGuard";
// components
import Page from "../../components/Page";
import Layout from "@root/layouts";
import { RegisterSection } from "@root/sections/auth";

// ----------------------------------------------------------------------

Register.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="auth" title="Register">
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <GuestGuard>
      <Page title="Register">
        <RegisterSection />
      </Page>
    </GuestGuard>
  );
}
