import React, { useState } from "react";
import {
  CheckBoxReg,
  Form,
  InputForm,
  LogPContainer,
  LoginCountainer,
  LoginFormCountainer,
  LoginWrapper,
  PassContainer,
  RegisterFormCountainer,
  SeeIconBtn,
} from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../../components/UI/Button/button";
import { colors } from "../../assets/styles/colors";
import { IconContext } from "react-icons";

const Login = () => {
  const [logTab, setLogTab] = useState(true);
  const [errorLogin, setErrorLogin] = useState(false);
  const [seePass, SetSeePass] = useState(false);
  const [seeConfPass, SetSeeConfPass] = useState(false);
  const formikRegister = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
      adult: false,
    },
    validationSchema: Yup.object({
      fName: Yup.string()
        .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed")
        .required("Required"),
      lName: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      userName: Yup.string()
        .max(7, "Must be 7 characters or less")
        .required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .matches(
          /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
          "Password must contain at least one special character"
        )
        .matches(
          /[A-Z]+/,
          "Password must contain at least one uppercase letter"
        )
        .matches(/[1-9]/, "Password must contain at least one number")
        .required("Required"),
      confirmPassword: Yup.string()
        .label("confirm password")
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      adult: Yup.boolean().oneOf(
        [true],
        "You must be at least 18 years of age"
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const loginUser = (e) => {
    e.preventDefault();
    const imputUser = e.target[0].value;
    const imputPass = e.target[1].value;
    if (imputUser === "admin" && imputPass === "admin") {
      setErrorLogin(false);
      console.log(imputUser, `-`, imputPass, "ad");
    } else {
      setErrorLogin(true);
      console.log(imputUser, `-`, imputPass, "f");
      console.log(imputUser);
    }
  };

  return (
    <LoginWrapper>
      <LoginCountainer>
        {logTab ? (
          <LoginFormCountainer>
            <h1>Login to your account</h1>
            <Form onSubmit={loginUser}>
              <InputForm type="text" placeholder="User or Email" />

              <PassContainer>
                <InputForm
                  type={seePass ? "text" : "password"}
                  placeholder="Password"
                />
                <SeeIconBtn type="button" onClick={() => SetSeePass(!seePass)}>
                  <IconContext.Provider value={{ size: "25px", color:colors.grey}}>
                    {seePass ? <FaEyeSlash /> : <FaEye />}
                  </IconContext.Provider>
                </SeeIconBtn>
              </PassContainer>

              {errorLogin ? <p>Wrong user or password</p> : null}

              <Button
                text={"Login"}
                type={"submit"}
                color={colors.red}
                txtColor={colors.white}
                width={"40%"}
                height={"50px"}
                className={"formBtn"}
              />
            </Form>
            <LogPContainer>
              <p onClick={() => console.log("forgot password")}>Forgot Password?</p>
              <p onClick={() => setLogTab(!logTab)}>Create Account</p>
            </LogPContainer>
          </LoginFormCountainer>
        ) : (
          <RegisterFormCountainer>
            <h1>Register</h1>
            <Form onSubmit={formikRegister.handleSubmit}>
              <InputForm
                type="text"
                placeholder="First Name"
                $borderColor={
                  formikRegister.touched.fName && formikRegister.errors.fName
                    ? true
                    : false
                }
                {...formikRegister.getFieldProps("fName")}
              />
              {formikRegister.touched.fName && formikRegister.errors.fName ? (
                <p>{formikRegister.errors.fName}</p>
              ) : null}

              <InputForm
                type="text"
                placeholder="Last Name"
                $borderColor={
                  formikRegister.touched.lName && formikRegister.errors.lName
                    ? true
                    : false
                }
                {...formikRegister.getFieldProps("lName")}
              />
              {formikRegister.touched.lName && formikRegister.errors.lName ? (
                <p>{formikRegister.errors.lName}</p>
              ) : null}

              <InputForm
                type="email"
                placeholder="Email"
                $borderColor={
                  formikRegister.touched.email && formikRegister.errors.email
                    ? true
                    : false
                }
                {...formikRegister.getFieldProps("email")}
              />
              {formikRegister.touched.email && formikRegister.errors.email ? (
                <p>{formikRegister.errors.email}</p>
              ) : null}

              <InputForm
                type="text"
                placeholder="User Name"
                $borderColor={
                  formikRegister.touched.userName &&
                  formikRegister.errors.userName
                    ? true
                    : false
                }
                {...formikRegister.getFieldProps("userName")}
              />
              {formikRegister.touched.userName &&
              formikRegister.errors.userName ? (
                <p>{formikRegister.errors.userName}</p>
              ) : null}

              <PassContainer>
                <InputForm
                  type={seePass ? "text" : "password"}
                  placeholder="Password"
                  $borderColor={
                    formikRegister.touched.password &&
                    formikRegister.errors.password
                      ? true
                      : false
                  }
                  {...formikRegister.getFieldProps("password")}
                />
                <SeeIconBtn type="button" onClick={() => SetSeePass(!seePass)}>
                  <IconContext.Provider value={{ size: "25px", color:colors.grey }}>
                    {seePass ? <FaEyeSlash /> : <FaEye />}
                  </IconContext.Provider>
                </SeeIconBtn>
              </PassContainer>
              {formikRegister.touched.password &&
              formikRegister.errors.password ? (
                <p>{formikRegister.errors.password}</p>
              ) : null}

              <PassContainer>
                <InputForm
                  type={seeConfPass ? "text" : "password"}
                  placeholder="Confirm Password"
                  $borderColor={
                    formikRegister.touched.confirmPassword &&
                    formikRegister.errors.confirmPassword
                      ? true
                      : false
                  }
                  {...formikRegister.getFieldProps("confirmPassword")}
                />
                <SeeIconBtn
                  type="button"
                  onClick={() => SetSeeConfPass(!seeConfPass)}
                >
                  <IconContext.Provider value={{ size: "25px", color:colors.grey }}>
                    {seeConfPass ? <FaEyeSlash /> : <FaEye />}
                  </IconContext.Provider>
                </SeeIconBtn>
              </PassContainer>
              {formikRegister.touched.confirmPassword &&
              formikRegister.errors.confirmPassword ? (
                <p>{formikRegister.errors.confirmPassword}</p>
              ) : null}

              <CheckBoxReg>
                <label>I`m 18 years or older</label>
                <input
                  type="checkbox"
                  {...formikRegister.getFieldProps("adult")}
                />
              </CheckBoxReg>
              {formikRegister.touched.adult && formikRegister.errors.adult ? (
                <p>{formikRegister.errors.adult}</p>
              ) : null}

              <Button
                text={"Register"}
                type={"submit"}
                color={colors.red}
                txtColor={colors.white}
                width={"40%"}
                height={"50px"}
                className="formBtn"
              />
            </Form>
            <p style={{ cursor: "pointer" }} onClick={() => setLogTab(!logTab)}>
              Already have an account?
            </p>
          </RegisterFormCountainer>
        )}
      </LoginCountainer>
    </LoginWrapper>
  );
};

export default Login;
