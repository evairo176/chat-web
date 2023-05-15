import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RegisterSchema } from "../../../utils/FormikSchema";
import { RegisterAction } from "../../../redux/controller/Register";
import ButtonSubmit from "../../atoms/ButtonSubmit";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadImage, setLoadImage] = useState("");
  const storeData = useSelector((store) => store?.global);
  const { isLoading } = storeData;

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: "",
    },
    onSubmit: async (values) => {
      dispatch(await RegisterAction(values, navigate));
    },
    validationSchema: RegisterSchema,
  });

  const fileHandle = async (e) => {
    // console.log(e.target.id);
    if (e.target.files.length !== 0) {
      await formik.setFieldValue("image", e.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        setLoadImage(reader.result);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h3>Register {isLoading ? "jalan" : "kosong"}</h3>
        </div>
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                id="username"
                value={formik.values.username}
                onChange={formik.handleChange("username")}
                onBlur={formik.handleBlur("username")}
              />
              {formik.errors.username && formik.touched.username ? (
                <div style={{ fontSize: "11px", color: "red" }}>
                  {formik.errors.username}
                </div>
              ) : (
                ""
              )}
            </div>

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
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                id="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange("confirmPassword")}
                onBlur={formik.handleBlur("confirmPassword")}
              />
              {formik.errors.confirmPassword &&
              formik.touched.confirmPassword ? (
                <div style={{ fontSize: "11px", color: "red" }}>
                  {formik.errors.confirmPassword}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <div className="file-image">
                <div className="image">
                  {loadImage ? <img src={loadImage && loadImage} alt="" /> : ""}
                </div>
                <div className="file">
                  <label htmlFor="image">Select Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    name="image"
                    // value={formik.values.image}
                    onChange={(e) => fileHandle(e)}
                    onBlur={formik.handleBlur("image")}
                  />
                </div>
              </div>
            </div>
            {formik.errors.image && formik.touched.image ? (
              <div style={{ fontSize: "11px", color: "red" }}>
                {formik.errors.image}
              </div>
            ) : (
              ""
            )}
            <div className="form-group">
              <ButtonSubmit
                type="submit"
                isLoading={isLoading}
                title="register"
              />
            </div>

            <div className="form-group">
              <span>
                <Link to="/login"> Login Your Account </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
