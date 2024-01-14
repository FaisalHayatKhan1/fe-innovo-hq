import { appWithTranslation } from "next-i18next";
import cookie from "cookie";
import "../utils/highlight";
import "react-quill/dist/quill.snow.css";
import Head from "next/head";
import App from "next/app";
import "../styles/globals.scss";
import "../styles/globals.css";
import "../styles/common.scss";
import { Provider as ReduxProvider } from "react-redux";
import store from "@root/redux/store";
import { getSettings } from "@root/utils/settings";
import { AuthProvider } from "@root/contexts/AuthContext";
import { ThemeProvider } from "next-themes";
import { SnackbarProvider } from "notistack";

function MyApp(props: any) {
  const { Component, pageProps, settings } = props;

  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ReduxProvider store={store}>
        <ThemeProvider enableSystem attribute="class">
          <SnackbarProvider
            maxSnack={1}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            autoHideDuration={2000}
          >
            <AuthProvider>
              {getLayout(<Component {...pageProps} />)}
            </AuthProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </ReduxProvider>
    </>
  );
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context: any) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(
    context.ctx.req ? context.ctx.req.headers.cookie || "" : document.cookie
  );

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};

export default appWithTranslation(MyApp);
