import React,{ createContext,useContext,useState} from "react";

const WishlistContext = createContext();

export const useWishlist = ()=> useContext(WishlistContext);

export const WishlistProvider = ({children}) =>{
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (product) =>{
        setWishlist((prev)=>{
            const exists = prev.find((item)=> item.name ===product.name);
            return exists ? prev : [...prev, product];
        });
    }

    const removeWishlist = (productName) =>{
        setWishlist((prev)=> prev.filter((item)=> item.name !== productName));
    };

    return(
        <WishlistContext.Provider value={{wishlist,addToWishlist,removeWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}