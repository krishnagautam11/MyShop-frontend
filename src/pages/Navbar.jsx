import { Link, useNavigate } from 'react-router-dom';
import { useWishlist } from './WishlistContext';

export const Navbar = ({ userLoggedIn, setUserLoggedIn }) => {
    const { wishlist } = useWishlist();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUserLoggedIn(false); // Triggers re-render
        navigate("/"); // Redirect to home
    };

    return (
        <nav className="py-5 bg-emerald-900 p-4 text-white flex justify-between">
            <Link to="/" className="text-xl font-bold">MyShop</Link>
            <div className="flex space-x-5 mr-6 items-center">
                <Link to="/" className="hover:border-b-2 hover:border-red-500">Home</Link>
                <Link to="/cart" className="hover:border-b-2 hover:border-red-500">Cart</Link>

                {userLoggedIn ? (
                    <>
                        <span className="text-yellow-300">Hi, User</span>
                        <Link to="/wishlist" className="hover:text-red-500">
                            Wishlist ({wishlist.length})
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="hover:border-b-2 hover:border-red-500">
                            Login / Register
                        </Link>
                        <Link to="/wishlist" className="hover:text-red-500">
                            Wishlist ({wishlist.length})
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};
