import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const imageRef = useRef();

  const navigate = useNavigate();

  const registerUser = async () => {
    axios
      .post(
        "http://localhost:3001/api/register",
        {
          email: email,
          password: password,
          name: name,
          imageUrl: imageUrl,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleImageChange = (e) => {
    const data = new FileReader();
    data.addEventListener("load", () => {
      setImageUrl(data.result);
    });
    data.readAsDataURL(e.target.files[0]);
  };

  const handlePlaceHolderClick = () => {
    imageRef?.current.click();
  };

  return (
    <div className="h-screen bg-gray-100 w-full lg:overflow-hidden flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            className="h-12 w-12"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          ></img>
          <h1 className=" text-center text-2xl mb-5">PaperSync Registration</h1>
        </div>
        <div className="bg-white shadow-md w-full  rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <div className="w-full flex items-center justify-center cursor-pointer">
              <input
                ref={imageRef}
                className="hidden"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              ></input>
              <div
                className="h-16 w-16 rounded-full bg-gray-400 overflow-hidden border-[1px] border-blue-400 "
                onClick={handlePlaceHolderClick}
              >
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt="User Uploaded"
                    className="h-full w-full object-cover object-center"
                  />
                )}
              </div>
            </div>
            <label className="text-sm text-gray-600 pb-1 block">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <label className="text-sm text-gray-600 pb-1 block">E-mail</label>

            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <label className=" text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />

            <button
              type="button"
              onClick={registerUser}
              className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md text-center inline-block"
            >
              <span className="inline-block mr-2">Register</span>
            </button>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-2 gap-1">
              <button
                type="button"
                className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
              >
                Google
              </button>
              <button
                type="button"
                className="transition duration-200 border bg-black text-white border-gray-200 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
              >
                Github
              </button>
            </div>
          </div>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <button
                  onClick={() => navigate("/login")}
                  className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                >
                  <span className="inline-block ml-1">Sign In</span>
                </button>
              </div>
              <div className="text-center sm:text-right whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <span className="inline-block ml-1">Help</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-2 gap-1">
            <div className="text-center sm:text-left whitespace-nowrap"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
