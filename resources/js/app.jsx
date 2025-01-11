import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import Home from "./Home";

const App = () => (
    <h1 className="text-4xl font-bold text-blue-500">
        <Home />
    </h1>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
