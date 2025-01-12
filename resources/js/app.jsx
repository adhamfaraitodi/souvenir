import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
);

ReactDOM.createRoot(document.getElementById("app")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
