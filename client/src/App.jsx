import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DocsPage from "./pages/DocsPage";
import { useUser } from "./util/store";
import LoginPage from "./pages/auth/LoginPage";
import Register from "./pages/auth/Register";
import axios from "axios";
import Modal from "./components/modals/Modal";
import ErrorPage from "./pages/ErrorPage";
import Drawer from "./components/drawers/Drawers";
import { Bounce, toast } from "react-toastify";

function App() {
  const token = useUser((state) => state?.token);

  const setToken = useUser((state) => state?.setToken);

  const authenticate = async () => {
    axios
      .get("http://localhost:3001/api/authenticate", {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      })
      .then(() => {})
      .catch(function (error) {
        setToken({ token: null });
        toast.error(error.message, {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
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
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
        <Modal />
        <Drawer />
      </BrowserRouter>
    </>
  );
}

export default App;
