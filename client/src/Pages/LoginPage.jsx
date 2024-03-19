import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../Components/Auth";
import AuthHeader from "../Components/AuthHeader";
import AuthForm from "../Components/AuthForm";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const LoginPage = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) 
        return;
      await axios.post("/user/login", { email, password });
      navigate("/home");
      
    } catch (err) {
      if(err.response.status === 404){
        toast({
          title : "Email Not Registered!",
          description : "You must have to sign up before logging",
          status : "info",
        })
      }
      else if(err.response.status === 422){
        toast({
          title : "Wrong Password!",
          status : "error",
        })
      }
      console.log(err.response.status);
    }
  };
  return (
    <div>
      {/* header */}
      <AuthHeader text="Sign up" />

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* left side */}
        <Auth />

        {/* right side */}
        <div
          className="flex justify-center items-center w-full lg:bg-[#f1f3f8] lg:relative lg:bottom-[86px] 
        lg:z-10 lg:py-20 lg:h-[100vh]"
        >
          <div className="flex flex-col justify-center mt-7 w-full max-w-[320px] mx-auto items-center">
            <h1 className="text-[22px] font-black text-[#1d254f] text-center">
              Choose a method to log in
            </h1>
            <span className="text-center font-medium text-md text-gray-500 mb-5">
              Don't have an account?{" "}
              <Link className="text-blue underline" to={"/register"}>
                Sign Up
              </Link>
            </span>
            <form onSubmit={loginUser}>
              <AuthForm
                text={"Login"}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
