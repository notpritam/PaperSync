import React, { useEffect, useState } from "react";
import { uselogin } from "../../util/auth";
import axios from "axios";
import useUser from "../../util/store";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = useUser((state) => state.logIn);

  const checkUser = async () => {
    axios
      .post(
        "http://localhost:3001/api/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // "x-access-token": token,
          },
        }
      )
      .then((response) => {
        logIn({
          user: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    // checkUser();
  }, []);

  return (
    <div class="h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            className="h-12 w-12"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          ></img>
          <h1 class=" text-center text-2xl mb-5">Docs</h1>
        </div>
        <div class="bg-white shadow-md w-full rounded-lg divide-y divide-gray-200">
          <div class="px-5 py-7">
            <label class="text-sm text-gray-600 pb-1 block">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <label class=" text-sm text-gray-600 pb-1 block">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <button
              type="button"
              onClick={checkUser}
              class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md text-center inline-block"
            >
              <span class="inline-block mr-2">Login</span>
            </button>
          </div>
          <div class="p-5">
            <div class="grid grid-cols-2 gap-1">
              <button
                type="button"
                class="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
              >
                Google
              </button>
              <button
                type="button"
                class="transition duration-200 border bg-black text-white border-gray-200 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
              >
                Github
              </button>
            </div>
          </div>
          <div class="py-5">
            <div class="grid grid-cols-2 gap-1">
              <div class="text-center sm:text-left whitespace-nowrap">
                <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="inline-block ml-1">Forgot Password</span>
                </button>
              </div>
              <div class="text-center sm:text-right whitespace-nowrap">
                <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4 inline-block align-text-bottom	"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span class="inline-block ml-1">Help</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="py-5">
          <div class="grid grid-cols-2 gap-1">
            <div class="text-center sm:text-left whitespace-nowrap"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
