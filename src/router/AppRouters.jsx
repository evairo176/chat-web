import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "../components/pages";
import { Toaster } from "react-hot-toast";

function AppRouters() {
  return (
    <Fragment>
      <Toaster
        containerStyle={{
          top: 20,
          right: 0,
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Fragment>
  );
}

export default AppRouters;
