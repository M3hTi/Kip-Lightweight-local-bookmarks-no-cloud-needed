import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const fakeUser = {
  userName: "admin",
  password: "admin",
};

const initialState = {
  user: null,
  isAuthenticate: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticate: true };
    case "logout":
      return { ...state, user: null, isAuthenticate: false };
    default:
      throw new Error("Unknown Action!");
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { user, isAuthenticate } = state;

  function login(userName, pass) {
    if (userName === fakeUser.userName && pass === fakeUser.password) {
      dispatch({ type: "login", payload: fakeUser });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ login, logout, user, isAuthenticate }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
