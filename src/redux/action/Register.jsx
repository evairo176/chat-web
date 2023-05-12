import axios from "axios";

const RegisterAction = (data, navigate) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  try {
    axios
      .post(`http://localhost:2000/api/auth/register`, data, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

export { RegisterAction };
