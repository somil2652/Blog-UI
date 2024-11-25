import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  FormItem,
  Input,
  InputPassword,
  Typography,
  Space,
} from "../../component";
import { useNavigate } from "react-router-dom";
import { login, register } from "./service";
import { errorMessage, successMessage } from "../../component/Message";

const Login = () => {
  const [account, setAccount] = useState("login");

  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      console.log("event :", values);

      const res = await login(values);

      if (res.status === 200) {
        localStorage.setItem("authToken", res?.data.authToken);
        successMessage("Login Successful");

        navigate("/view");
      } else {
        throw new Error("Login Failed");
      }
    } catch (error) {
      errorMessage("Login Failed");
    }
  };

  const handleRegister = async (values) => {
    try {
      const res = await register(values);

      if (res.status === 200) {
        successMessage("Registered Successfull");
      } else {
        throw new Error("Register failed");
      }
    } catch (error) {
      errorMessage("Register Failed");
    }
  };

  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Blogger_logo.svg/2560px-Blogger_logo.svg.png"
        height={150}
        width={300}
        alt="img"
      />

      <Card
        title={account === "login" ? "Login" : "Register"}
        style={{
          fontFamily: "fantasy",
          fontStyle: "italic",
          width: 400,
          margin: "auto",
          marginTop: 50,
          borderRadius: 10,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f7f7f7",
        }}
      >
        <Form
          data-testid="login-form"
          onFinish={account === "login" ? handleLogin : handleRegister}
        >
          {account === "login" ? (
            <Space direction="vertical">
              <FormItem
                label="Email"
                name="email"
                data-testid="email"
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input />
              </FormItem>
              <FormItem
                label="Password"
                name="password"
                data-testid="pass"
                rules={[{ required: true, message: "Password is required" }]}
              >
                <InputPassword />
              </FormItem>
              <Button
                type="primary"
                htmlType="submit"
                data-testid="loginBtn"
                block
                name="Login"
              />
              <Typography style={{ margin: "10px 0" }} name="OR" />
              <Button
                data-testid="reg-btn"
                type="dashed"
                onClick={() => setAccount("register")}
                name=" Create new account"
              />
            </Space>
          ) : (
            <Space direction="vertical">
              <FormItem
                label="Name"
                name="name"
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input />
              </FormItem>
              <FormItem
                label="Email"
                name="email"
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input />
              </FormItem>
              <FormItem
                label="Phone"
                name="phone"
                rules={[{ required: true, message: "Phone is required" }]}
              >
                <Input />
              </FormItem>
              <FormItem
                label="Address"
                name="address"
                rules={[{ required: true, message: "Address is required" }]}
              >
                <Input />
              </FormItem>
              <FormItem
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Password is required" },
                  {
                    min: 8,
                    message: "Password must be at least 8 characters",
                  },
                ]}
                style={{ margin: 5 }}
              >
                <InputPassword />
              </FormItem>
              <Button
                data-testid="register-btn"
                type="primary"
                block
                htmlType="submit"
                name="Register"
              />
              <Typography style={{ margin: "10px 0" }} name="OR" />
              <Button
                data-testid="go-to-login"
                type="dashed"
                onClick={() => setAccount("login")}
                name="Already have an account"
              />
            </Space>
          )}
        </Form>
      </Card>
    </>
  );
};

export default Login;
