import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  redirect,
  Navigate,
} from "react-router-dom";
import Header from "./components/shared/Header";
import HomePage from "./pages/HomePage";
import DocsPage from "./pages/DocsPage";
import useUser from "./util/store";
import LoginPage from "./pages/auth/LoginPage";
import Register from "./pages/auth/Register";
import axios from "axios";

function App() {
  const token = useUser((state) => state?.token);
  console.log(token, "this is user");

  const setToken = useUser((state) => state?.setToken);

  const authenticate = async () => {
    axios
      .get("http://localhost:3001/api/authenticate", {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      })
      .then((response) => {
        // console.log("Authenticated");
      })
      .catch(function (error) {
        setToken({ token: null });
      });
  };

  useEffect(() => {
    if (token) {
      authenticate();
    }
  }, [token]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            index
            element={!token ? <Navigate to="/login" /> : <HomePage />}
          ></Route>
          <Route exact index path="/login" element={<LoginPage />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route
            path="/documents/:id"
            element={!token ? <Navigate to="/login" /> : <DocsPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
