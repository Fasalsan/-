import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Card from "../components/Card";
import data from "../api/Product";
import Top from "./Top";

export default function ProductList() {
  const navigate = useNavigate();
  const location = useLocation();

  const initialCategory = location.state?.selectedCategory || "ទាំងអស់";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const topRef = useRef(null);

  const categories = ["ទាំងអស់", ...new Set(data.map((p) => p.category))];

  // Watch Top visibility for sticky tabs
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (topRef.current) observer.observe(topRef.current);
    return () => {
      if (topRef.current) observer.unobserve(topRef.current);
    };
  }, []);

  // Load products when category changes
  useEffect(() => {
    setLoading(true); // simulate loading
    const timeout = setTimeout(() => {
      const newProducts =
        activeCategory === "ទាំងអស់"
          ? data
          : data.filter((p) => p.category === activeCategory);

      setFilteredProducts(newProducts);
      setLoading(false);
      AOS.refresh(); // re-apply animation
    }, 200); // simulate short delay

    return () => clearTimeout(timeout);
  }, [activeCategory]);

  // AOS init
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top header */}
      <div ref={topRef}>
        <Top />
      </div>

      {/* Tabs with sticky behavior */}
      <div
        className={`w-full px-4 pt-2 pb-4 shadow-sm transition-all duration-300 ${
          isSticky ? "sticky top-0 z-10 bg-gray-100" : ""
        }`}
      >
        <h1 className="text-xl font-serif font-bold mb-2 text-gray-800">
          ប្រភេទពិលទាំងអស់
        </h1>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-sm font-medium border ${
                activeCategory === cat
                  ? "bg-red-900 text-white"
                  : "bg-white text-gray-700 hover:bg-red-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product List */}
      <div className="px-4 pb-8 min-h-[200px]">
        {loading ? (
          <p className="text-center text-gray-500 mt-8">កំពុងដំណើរការ...</p>
        ) : filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">មិនមានផលិតផលទេ</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  onView={() =>
                    navigate(`/product/${product.id}`, {
                      state: { selectedCategory: activeCategory },
                    })
                  }
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
