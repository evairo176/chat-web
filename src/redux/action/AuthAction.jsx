import { createCookie } from "../../config/cookie";
import { authAction } from "../slices/AuthSlices";
import deCodeToken from "jwt-decode";

const tokenDecode = (token) => {
  const tokenDecoded = deCodeToken(token);
  const expTime = new Date(tokenDecoded.exp * 1000);
  //   console.log(new Date());
  //   console.log(expTime);

  if (new Date() > expTime) {
    return null;
  }
  return tokenDecoded;
};

const setRegister = (dataUser) => {
  const data = {
    token: "",
    authenticate: false,
    myInfo: "",
  };

  if (tokenDecode(dataUser.token)) {
    data.token = dataUser.token;
    data.authenticate = true;
    data.myInfo = tokenDecode(dataUser.token);
    localStorage.setItem("authToken", data.token);
    createCookie("authToken", data.token, 7);
  } else {
    data.token = "";
    data.authenticate = false;
    data.myInfo = "";
  }

  return authAction({ type: "SET_REGISTER", value: data });
};

export { setRegister, tokenDecode };
