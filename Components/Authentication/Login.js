import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { getSession,signIn, useSession, signOut } from "next-auth/react"

import {
  InfoCircleOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import css from "../../styles/login.module.css"
import { Input, Tooltip, Button, notification, message } from "antd";
import Signup from "./Signup";

import imgG from "../../public/Images/google.svg"
import Image from "next/image";
import { useRouter } from 'next/router'
import { ApiEndPoint } from "@/public/ApiEndPoint";
// import { login_url } from "./Url";
const Login_com = () => {
  const [username, setUsername] = useState("");
  const [Loading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [usernameCheck, setUsernameCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);

  const [api, contextHolder] = notification.useNotification();
  const [messageApi, contexttHolder] = message.useMessage();
  const[loginSignup ,setLoginSignup]=useState(false)
  const info = () => {
    messageApi.info("Login Successfully...!");
  };
  const login_Status=useSession()
  const router = useRouter()
  const openNotification = (placement, title, text, type) => {
    api[type]({
      message: text,
      description: title,
      placement,
    });
  };
  const loginStatus=async (data)=>{
    const status =  await signIn('credentials', {
      redirect: false,
      name:data.name,
      email:data.email,
      password: data.password,
      callbackUrl: "/"
  })
  if(status.ok) router.replace(status.url)
  }
  const Loginhandler = async() => {
  // // if(status.ok) router.push(status.url)
    const options = {
      method: "POST",
      url: "",
      params: {
        username: username,
        password: password,
      },
      headers: {
        "content-type": "application/json",
      },
      data: [
        {
          username: username,
          password: password,
        },
      ],
    };

    if (username != "" && password != "") {
    setIsLoading(true);

      const data = {
        email: username,
        password: password,
      };
      axios.post(`${ApiEndPoint}api/login/`, data)
        .then(function (response) {
          if (response.data == "Invalid credentials") {
            openNotification(
              "bottomRight",
              "Invalid credentials !",
              "Username or password not valid",
              "error"
            );
            setUsernameCheck(false);
            setPasswordCheck(false);
          } else if (response.status = 202) {
const data={
  name:response.data.username,
  email:response.data.email,
  password: password,
}
            loginStatus(
data
            )
          setIsLoading(false);

    
            // info();
            // Router.push("/");

            // setLoginSignup(!loginSignup);
    

            // navigate("/Search_fragrance");
            // window.location.reload(false);
          } else {
          }
        })
        .catch(function (error) {
          setIsLoading(false);
          console.error(error);
          openNotification("bottomRight", error.message, "Error", "error");
        });
    } else {
      if (username == "") {
        setUsernameCheck(true);
        setPasswordCheck(false);
      } else if (password == "") {
        setPasswordCheck(true);
        setUsernameCheck(false);
      } else {
        setUsernameCheck(false);
        setPasswordCheck(false);
      }
    }
  };
  const signupLogin =()=>{
setLoginSignup(!loginSignup);
  }

   // Google Handler function
   async function handleGoogleSignin(){
    
    signIn('google', { callbackUrl : "http://localhost:3000"})

}
  return (
    <>
      {loginSignup ? (
        <Signup eventlick={signupLogin} />
      ) : (
        <div className={css.login_page}>
          {contextHolder}
          {contexttHolder}
          <div className={css.login_con}>
            <h1>Login</h1>
            <div className={css.Input_field_signup}>
              <label>Username</label>
              <Input
                placeholder="Enter your username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                status={usernameCheck ? "error" : ""}
                prefix={<UserOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Type your Username">
                    <InfoCircleOutlined
                      style={{
                        color: "rgba(0,0,0,.45)",
                      }}
                    />
                  </Tooltip>
                }
              />
            </div>
            <div className={css.Input_field_signup}>
              <label>Password</label>

              <Input.Password
                placeholder="Enter password"
                status={passwordCheck ? "error" : null}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </div>
            <Button type="primary" onClick={Loginhandler} loading={Loading}>
              Login
            </Button>
            <div className={css.LoginGoogle}>
              <button
                type="button"
                onClick={handleGoogleSignin}
                className={css.button_custom}
              >
                <Image src={imgG} alt="google image" width="20" height={20} /> Sign In with Google
              </button>
            </div>
            <div className={css.login_btn}>
              <span>
                Don't have an account?{" "}
                <Link
                  href="/Singup"
                  style={{
                    cursor: "pointer",
                    display: "inline-block",
                    color: "blue",
                  }}
                >
                Signup Here
                </Link>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login_com;
