import Layout from "../layouts";
import Page from "@root/components/Page";
import { useTranslation } from "next-i18next";
import { MainDashboard } from "@root/sections/app";
import AuthGuard from "@root/guards/AuthGuard";
HomePage.getLayout = function getLayout(page: any) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  const { t } = useTranslation(["common", "footer"]);
  return (
    <AuthGuard>
      <Page title="Home Page">
        <MainDashboard />
      </Page>
    </AuthGuard>
  );
}

