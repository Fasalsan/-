import React from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {

  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="p-4 max-w-lg mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
