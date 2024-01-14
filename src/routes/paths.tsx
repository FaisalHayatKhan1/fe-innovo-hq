// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  forgotPassword: path(ROOTS_AUTH, "/forgot-password"),
  register: path(ROOTS_AUTH, "/register"),
  otpVerification: path(ROOTS_AUTH, "/otp-verification"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
};

export const PATH_PAGE = {};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  restaurantDashboard: path(ROOTS_DASHBOARD, "/app/restaurant"),
  createRestaurant: path(ROOTS_DASHBOARD, "/app/new-restaurant"),
};
