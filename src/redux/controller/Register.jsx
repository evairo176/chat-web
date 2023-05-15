import axios from "axios";
import { setRegister } from "../action/AuthAction";
import { setLoading, setMessage } from "../action/GlobalAction";

const RegisterAction = (data, navigate) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  dispatch(setLoading(true));
  const promise = axios
    .post(`http://localhost:2000/api/auth/register`, data, config)
    .then((response) => {
      dispatch(setRegister(response?.data));
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

export { RegisterAction };
