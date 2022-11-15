import AsyncStorage from "@react-native-async-storage/async-storage";
import trackerApi from '../api/tracker';
import createDataContext from '../context/CreateDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
  } else {

  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signup = (dispatch) => async ({ email, password }, callback) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });

  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Email & Password already exist try new one!",
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "User or credentials doen not exist",
    });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });

};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
