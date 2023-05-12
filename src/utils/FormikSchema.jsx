import * as Yup from "yup";
const RegisterSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  image: Yup.mixed().required("File is required"),
});

export { RegisterSchema };
