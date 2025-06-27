// src/components/Card.jsx

import React from "react";

export default function Card({ image, name, price, onView, className = "" }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow hover:shadow-lg transition p-2 border border-gray-200 ${className}`}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-80 object-cover rounded-xl mb-4 transition-transform transform hover:scale-105"
      />
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-extrabold text-black-800 truncate">{name}</h3>
        <p className="text-red-600 font-bold text-xl mb-4 ">
        តម្លៃ : {price}$
        </p>
      </div>
      <button
        onClick={onView}
        className="w-full py-2 bg-red-900 text-white rounded-xl hover:bg-red-700 transition"
      >
        មើលលម្អិត
      </button>
    </div>
  );
}
