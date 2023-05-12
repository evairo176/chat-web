import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "../components/pages";

function AppRouters() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Fragment>
  );
}

export default AppRouters;
