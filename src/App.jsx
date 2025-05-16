import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./pages/Navbar";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Wishlist } from './pages/Wishlist';
import { WishlistProvider } from "./pages/WishlistContext";
import { CartProvider } from "./pages/CartContext";
import { CategoryPage } from './pages/CategoryPage';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      setUserLoggedIn(true);
    }
  }, []);

  return (
    <WishlistProvider>
      <CartProvider>
        <Router>
          <Navbar userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login setUserLoggedIn={setUserLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
