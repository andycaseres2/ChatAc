import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../Context/LoginContext";
import { supabase } from "../utils/supabase";
import github from "../images/github.webp";
import twitter from "../images/twitter.webp";
import google from "../images/google.webp";

export const Login = () => {
  const navigate = useNavigate();
  const { loginGithub, signInWithTwitter, signInWithGoogle } = useLogin();

  useEffect(() => {
    if (supabase.auth.user) {
      navigate("/");
    }
    console.log("sin usuario");
  }, [navigate]);

  return (
    <div className="bg-[#a7bcff] h-screen flex items-center justify-center">
      <div className="bg-white py-8 px-14 rounded-md flex flex-col gap-2 items-center w-[500px]">
        <span className="text-3xl font-bold text-gray-600">ChatAc</span>
        <span className="text-md text-gray-500 font-bold">Login</span>

        <div>
          <form className="flex flex-col gap-4 w-full">
            <input
              className="p-4 border-b border-gray-400 focus:outline-none"
              type="email"
              placeholder="Email"
            />
            <input
              className="p-4 border-b border-gray-400 focus:outline-none"
              type="password"
              placeholder="Password"
            />
            <button className="border border-gray-800 p-2 text-black font-bold text-md rounded-lg hover:scale-105 hover:duration-700 duration-700">
              Sing in
            </button>
          </form>
        </div>
        <div className="w-full flex gap-4 justify-center py-4">
          <button
            className="border border-gray-800 p-2 text-white rounded-lg hover:scale-105 hover:duration-700 duration-700"
            onClick={loginGithub}
          >
            <div className="flex w-max gap-2 items-center">
              <img className="w-12" src={github} alt="" />
              <span className="font-bold text-black">Github</span>
            </div>
          </button>
          <button
            className="border border-gray-800 p-2 text-white rounded-lg hover:scale-105 hover:duration-700 duration-700"
            onClick={signInWithTwitter}
          >
            <div className="flex w-max gap-2 items-center">
              <img className="w-7" src={twitter} alt="" />
              <span className="font-bold text-black">Twitter</span>
            </div>
          </button>
          <button
            className="border border-gray-800 p-2 text-white rounded-lg hover:scale-105 hover:duration-700 duration-700"
            onClick={signInWithGoogle}
          >
            <div className="flex w-max gap-2 items-center">
              <img className="w-8" src={google} alt="" />
              <span className="font-bold text-black">Github</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
