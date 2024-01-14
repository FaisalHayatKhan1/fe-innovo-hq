import jwtDecode from "jwt-decode";
import { verify, sign } from "jsonwebtoken";
//

// ----------------------------------------------------------------------

const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }
  const decoded: any = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

//  const handleTokenExpired = (exp) => {
//   let expiredTimer;

//   window.clearTimeout(expiredTimer);
//   const currentTime = Date.now();
//   const timeLeft = exp * 1000 - currentTime;
//   console.log(timeLeft);
//   expiredTimer = window.setTimeout(() => {
//     console.log('expired');
//     // You can do what ever you want here, like show a notification
//   }, timeLeft);
// };

const getSession = () => {
  const sessionJSON = window.localStorage.getItem("session");
  if (sessionJSON) return JSON.parse(sessionJSON);
  return {};
};

const setSession = (userData: any) => {
  if (userData) {
    localStorage.setItem("session", JSON.stringify(userData));
    localStorage.setItem("accessToken", JSON.stringify(userData.authToken));
    // axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    // This function below will handle when token is expired
    // const { exp } = jwtDecode(authToken);
    // handleTokenExpired(exp);
  } else {
    localStorage.removeItem("session");
    // delete axios.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession, verify, sign, getSession };
