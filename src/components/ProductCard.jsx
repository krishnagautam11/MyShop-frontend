import React from "react";
import { FaHeart, FaStar } from 'react-icons/fa';
import { useWishlist } from "../pages/WishlistContext";
import { useCart } from "../pages/CartContext";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ image, name, price, showAddToCart = true }) => {
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();
  const { wishlist, addToWishlist, removeWishlist } = useWishlist();

  const isInCart = cart.some((item) => item.name === name);
  const isInWishlist = wishlist.some((item) => item.name === name);

  const handleAddToCart = () => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      alert("Please log in to add items to the cart.");
      navigate("/login"); // Redirect to login page
    } else {
      if (!isInCart) {
        addToCart({ image, name, price });
      }
      navigate("/cart"); // Redirect to the cart page after adding
    }
  };

  const toggleWishlist = () => {
    if (isInWishlist) {
      removeWishlist(name);
    } else {
      addToWishlist({ image, name, price });
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center bg-white rounded-xl shadow-md mt-5 mb-5 overflow-hidden hover:shadow-lg hover:scale-105 hover:transform-gpu transition-all">
      <button onClick={toggleWishlist} className="absolute top-8 left-60 text-2xl hover:text-red-500 transition">
        <FaHeart className={isInWishlist ? 'fill-red-600' : 'fill-gray-400'} />
      </button>

      <img className="mt-4 w-40 h-48 object-fit overflow-hidden rounded-md mb-2" src={image} alt={name} />

      <div className="p-4">
        <h3 className="flex justify-center w-100 text-lg font-semibold mb-1">{name}</h3>
        <p className="flex justify-center text-gray-700 mb-2">{price} Rs</p>
        <div className="flex justify-center items-center text-yellow-400 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < 4 ? '' : 'text-gray-300'} />
          ))}
        </div>
        {showAddToCart && (
          <div className="flex justify-center">
            <button onClick={handleAddToCart} className="bg-black text-white p-2.5 rounded-full hover:shadow-lg hover:bg-gray-600 transition w-32">
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
