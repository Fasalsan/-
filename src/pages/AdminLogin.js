import React from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        // Replace this with your real authentication logic
        login();
        navigate("/admin");
    };

    return (
        <div className="p-4 max-w-sm mx-auto mt-20 border rounded shadow">
            <h2 className="text-xl font-bold mb-4">Form Admin Login</h2>
            <input
                type="text"
                placeholder="Username"
                className="border p-2 mb-4 w-full"
            />
            <input
                type="password"
                placeholder="Password"
                className="border p-2 mb-4 w-full"
            />
            <button
                onClick={handleLogin}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
                Login as Admin
            </button>
        </div>
    );
}
