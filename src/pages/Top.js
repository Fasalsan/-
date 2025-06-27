import React, { useState } from "react";
import IMG_009 from "../assets/maxresdefault.jpg";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function Top() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        login(); // simulate login
        setShowModal(false);
        navigate("/admin");
    };

    return (
        <div className="w-full h-80 sm:h-60 md:h-80 lg:h-96">
            <div className="relative w-full h-full overflow-hidden">
                <img
                    src={IMG_009}
                    alt="Background"
                    className="w-full h-full object-cover"
                />

                {/* Admin Login Button */}
                <button
                    className="absolute top-4 right-4 bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded shadow-lg z-50 transition"
                    onClick={() => setShowModal(true)}
                >
                    Admin Login
                </button>

                {/* Overlay with marquee */}
                <div className="absolute inset-0 bg-black/30 flex items-end justify-center">
                    <div className="overflow-hidden bg-red-900 bg-opacity-30 w-full">
                        <div className="text-white text-2xl sm:text-4xl font-bold drop-shadow-lg whitespace-nowrap inline-block p-2 font-sans animate-marquee">
                            ទំនាក់ទំនង៖ 081632687
                            <span className="px-2">|</span>
                            0975026561
                            <span className="px-2">|</span>
                            085546050
                        </div>
                    </div>
                </div>
            </div>

            {/* Login Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4"
                    onClick={() => setShowModal(false)} // CLOSE on backdrop click
                >
                    {/* Stop propagation so clicks inside modal don't close it */}
                    <div
                        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm relative"
                        onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
                    >
                        <h2 className="text-xl font-semibold mb-4 text-center">Admin Login</h2>
                        <form onSubmit={handleLoginSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            />
                            <div className="flex justify-center items-center">
                                <button
                                    type="submit"
                                    className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded"
                                >
                                    Login
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Marquee animation */}
            <style>
                {`
                    @keyframes marquee {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-100%); }
                    }
                    .animate-marquee {
                        animation: marquee 30s linear infinite;
                    }
                `}
            </style>
        </div>
    );
}
