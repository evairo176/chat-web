import axios from "axios";
import { setRegister } from "../action/AuthAction";
import { setLoading, setMessage } from "../action/GlobalAction";

const LoginController = (data, navigate) => (dispatch) => {
  dispatch(setLoading(true));
  const promise = axios
    .post(`http://localhost:2000/api/auth/login`, data)
    .then((response) => {
      //   console.log(response);
      if (response.data.token) {
        dispatch(setRegister(response?.data));
      }

      dispatch(setLoading(false));
      return response;
    })
    .catch((error) => {
      console.log(error);
      dispatch(setLoading(false));
      return error;
    });

  setMessage(promise);
};

export { LoginController };
