import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import HomePage from "./pages/HomePage";
import DocsPage from "./pages/DocsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/doc" element={<DocsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
