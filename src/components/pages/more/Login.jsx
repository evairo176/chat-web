import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "../../../utils/FormikSchema";
import { LoginController } from "../../../redux/controller/Login";
import { useFormik } from "formik";
import ButtonSubmit from "../../atoms/ButtonSubmit";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeData = useSelector((store) => store?.global);
  const { isLoading } = storeData;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      //   console.log(values);
      dispatch(await LoginController(values, navigate));
    },
    validationSchema: LoginSchema,
  });
  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h3>Login</h3>
        </div>

        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
              />
              {formik.errors.email && formik.touched.email ? (
                <div style={{ fontSize: "11px", color: "red" }}>
                  {formik.errors.email}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
              />
              {formik.errors.password && formik.touched.password ? (
                <div style={{ fontSize: "11px", color: "red" }}>
                  {formik.errors.password}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <ButtonSubmit type="submit" isLoading={isLoading} title="Login" />
            </div>

            <div className="form-group">
              <span>
                <Link to="/register"> Don't have any Account </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
