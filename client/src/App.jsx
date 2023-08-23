import { useState } from "react";
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

function App() {
  const user = useUser((state) => state?.user);
  console.log(user, "this is user");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            index
            element={!user._id ? <Navigate to="/login" /> : <HomePage />}
          ></Route>
          <Route exact index path="/login" element={<LoginPage />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route
            path="/documents/:id"
            element={!user._id ? <Navigate to="/login" /> : <DocsPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
