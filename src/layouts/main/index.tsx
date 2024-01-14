// next
// components
import LeftNavbar from "./left-navbar/LeftNavbar";
import React from "react";
import TopNavbar from "./top-navbar/TopNavbar";
import { useRouter } from "next/router";
import ErrorPage from "@root/components/ui/404Page";
// ----------------------------------------------------------------------

export default function MainLayout({ children }: any) {
  const router = useRouter();
  const slug = router.query.slug || [];
  const id = slug[0];
  // const { id } = router.query;
  // console.log(id, "check id");

  return (
    <>
      {/* {id ? ( */}
      <div className="h-screen">
        <div className="flex">
          <LeftNavbar id={id} />
          <div className="w-full">
            <div className="bg-white dark:bg-grayScale-secondary h-[10vh]">
              <TopNavbar />
            </div>
            <div className="h-[90vh] overflow-auto">
              <div className="w-full"> {children}</div>
            </div>
          </div>
        </div>
      </div>
      {/* ) : (
        <ErrorPage />
      )} */}
    </>
  );
}
