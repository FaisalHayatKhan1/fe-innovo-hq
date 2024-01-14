import { useState, useEffect } from "react";
// next
import { useRouter } from "next/router";
// hooks
import useAuth from "../hooks/useAuth";
// components
import Layout from "@root/layouts";
import LoadingComponent from "@root/components/Loading";
import { LoginSection } from "@root/sections/auth";
// ----------------------------------------------------------------------

export default function AuthGuard({ children }: any) {
  const { isAuthenticated, isInitialized } = useAuth();

  const { pathname, push } = useRouter();

  const [requestedLocation, setRequestedLocation] = useState<any>(null);

  useEffect(() => {
    if (requestedLocation && pathname !== requestedLocation) {
      setRequestedLocation(null);
      push(requestedLocation);
    }
  }, [pathname, push, requestedLocation]);

  if (!isInitialized) {
    return (
      <div>
        <LoadingComponent primaryLoading />
      </div>
    );
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return (
      <Layout variant="auth" title="login">
        <LoginSection />
      </Layout>
    );
  }

  return <>{children}</>;
}
