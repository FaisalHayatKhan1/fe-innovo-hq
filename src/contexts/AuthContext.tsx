import { useAppDispatch } from "@root/redux/store";
import { createContext, ReactNode, useEffect, useReducer } from "react";
// utils
import { getSession, isValidToken, setSession } from "../utils/jwt";
import { setAuthTokens } from "@root/redux/slices/auth/slice";
import { removeLocalStorage } from "@root/utils/localStorage";

// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state: any, action: any) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state: any, action: any) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state: any) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state: any, action: any) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

const reducer = (state: any, action: any) =>
  handlers[action.type as keyof typeof handlers]
    ? handlers[action.type as keyof typeof handlers](state, action)
    : state;

const AuthContext = createContext({
  ...initialState,
  method: "jwt",
  login: (res: any) => Promise.resolve(),
  logout: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const appDispatch = useAppDispatch();

  useEffect(() => {
    const initialize = () => {
      try {
        const {
          authToken,
          refreshToken,
          user,
        }: { authToken: string; refreshToken: string; user: any } =
          getSession();

        if (authToken && isValidToken(authToken)) {
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: true,
              user,
            },
          });
          // Set auth tokens is redux for api headers
          const authData: any = { authToken, refreshToken };
          dispatch(setAuthTokens(authData));
        } else {
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: "INITIALIZE",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, [appDispatch]);

  const login = (response: any) => {
    const { authToken, refreshToken, user } = response;

    setSession({ authToken, refreshToken, user });

    dispatch({
      type: "LOGIN",
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: "LOGOUT" });
    removeLocalStorage("accessToken");
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
