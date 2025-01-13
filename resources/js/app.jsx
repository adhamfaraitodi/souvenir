import "./bootstrap";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import User from "./pages/User";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import { RecoilRoot } from "recoil";
import Order from "./pages/Admin/Order";
import LandingPage from "./pages/Admin/LandingPage";
import Dashboard from "./pages/Admin/Dashboard";
import UserOrder from "./pages/User/Order";
import UserLandingPage from "./pages/User/LandingPage";
import UserDashboard from "./pages/User/Dashboard";

const App = () => {
    const [auth, setAuth] = useState("admin");
    const defaultPage = () => {
        if (auth === "admin") return <Navigate to="/admin" />;
        if (auth === "user") return <Navigate to="/user" />;
        if (!auth) return <Navigate to="/login" />;
    };

    useEffect(() => {
        defaultPage();
    }, []);

    return (
        <Routes>
            <Route path="/admin" element={<Admin />}>
                <Route index element={<Dashboard />} />
                <Route path="order" element={<Order />} />
                <Route path="landing-page" element={<LandingPage />} />
            </Route>
            <Route path="/" element={<User />}>
                <Route index element={<UserDashboard />} />
                <Route path="order" element={<UserOrder />} />
                <Route path="landing-page" element={<UserLandingPage />} />
            </Route>
            <Route
                path="/login"
                element={!auth ? <Login /> : <Navigate to="/" />}
            />
        </Routes>
    );
};
ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <RecoilRoot>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </RecoilRoot>
    </React.StrictMode>
);
