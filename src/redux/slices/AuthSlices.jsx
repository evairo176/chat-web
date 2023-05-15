import { createSlice } from "@reduxjs/toolkit";

const AuthSlices = createSlice({
  name: "auth",
  initialState: {
    authenticate: false,
    myInfo: "",
    token: "",
  },
  reducers: {
    authAction: (state, action) => {
      switch (action.payload.type) {
        case "SET_REGISTER":
          //   console.log(action.payload.value);
          return {
            ...state,
            authenticate: action.payload.value.authenticate,
            myInfo: action.payload.value.myInfo,
            token: action.payload.value.token,
          };
        default:
          return {
            state,
          };
      }
    },
  },
});

export const { authAction } = AuthSlices.actions;
export default AuthSlices.reducer;
