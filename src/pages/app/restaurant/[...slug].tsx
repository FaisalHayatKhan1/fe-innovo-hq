// pages/restaurant-dashboard/[...slug].tsx

import Page from "@root/components/Page";
import AuthGuard from "@root/guards/AuthGuard";
import Layout from "@root/layouts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProductSection, BookingSection } from "@root/sections/app";
import { useAppDispatch } from "@root/redux/store";
import { RestaurnatDashboardSection } from "@root/sections/app";
import { setRestaurantId } from "@root/redux/slices/restaurant/slice";
import ErrorPage from "@root/components/ui/404Page";

const RenderComponentLayout = ({ children }: any) => {
  return (
    <Layout variant="main" title="restaurant">
      <AuthGuard>
        <Page title="">{children}</Page>
      </AuthGuard>
    </Layout>
  );
};

const RenderComponent = () => {
  const appDispatch = useAppDispatch();
  const router = useRouter();

  const slug = router.query.slug || [];
  const id: any = slug[0];
  const subRoute: any = slug[1];

  useEffect(() => {
    const RestaurantIdHandler = () => {
      appDispatch(setRestaurantId(id));
    };
    RestaurantIdHandler();
  }, [id]);

  if (subRoute) {
    switch (subRoute) {
      case "products":
        return (
          <RenderComponentLayout>
            <ProductSection />
          </RenderComponentLayout>
        );
      case "bookings":
        return (
          <RenderComponentLayout>
            <BookingSection />
          </RenderComponentLayout>
        );
      case "price":
        return <div>price page</div>;
      default:
        return <ErrorPage />;
    }
  } else {
    return (
      <RenderComponentLayout>
        <RestaurnatDashboardSection />
      </RenderComponentLayout>
    );
  }
};

export default RenderComponent;
