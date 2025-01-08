import React, { useEffect, createContext, useState, useCallback } from "react";
import { Products } from "../assets-urban-gallery/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "$";
    const delivery_fee = 10;
    const [cartItem, setCartItem] = useState({});
    const [cartCount, setCartCount] = useState(0);
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);


   
  
       // Fetch the wishlist from localStorage on component mount
       useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(storedWishlist); // Update wishlist with stored items
    }, []);
  
    // Sync wishlist with localStorage whenever it changes
    useEffect(() => {
        if (wishlist.length > 0) {
            localStorage.setItem("wishlist", JSON.stringify(wishlist)); // Persist to localStorage
        }
    }, [wishlist]); // Runs whenever wishlist changes
  
    const addToWishlist = (item) => {
        if (!wishlist.some((wishItem) => wishItem.id === item.id)) {
            setWishlist([...wishlist, item]); // Add item to wishlist
            console.log('item.sizes',item.sizes);
            
            
        } else {
            toast.info("This item is already in your wishlist!"); // Optionally notify the user
        }
    };

    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter((item) => item.id !== id)); // Remove item from wishlist
    };

    
    // Sync local storage on app load
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cartItem")) || {};
        setCartItem(storedCart);
    }, []);

    const addToCart = (productsId, size) => {
        if (!size) {
            toast.error("Please select a size before adding to cart!");
            return; 
        }
    
        const cartData = JSON.parse(JSON.stringify(cartItem)); // Clone state
        const product = wishlist.find((item) => item.id === productsId); // Use productsId here
    
        if (cartData[productsId]) {
            if (cartData[productsId][size]) {
                cartData[productsId][size] += 1;
            } else {
                cartData[productsId][size] = 1;
            }
        } else {
            cartData[productsId] = { [size]: 1 };
        }
    
        if (product) {
            setCart([...cart, { ...product, size }]);
            removeFromWishlist(productsId); // Use productsId here
        }
    
        setCartItem(cartData); // Proper placement within the function
        localStorage.setItem("cartItem", JSON.stringify(cartData));
    };
    
    const updateQuantity = (itemId, size, quantity) => {
        const cartData = JSON.parse(JSON.stringify(cartItem));
        if (quantity > 0) {
            cartData[itemId][size] = quantity;
        } else {
            delete cartData[itemId][size]; // Remove size
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId]; // Remove product if no sizes
            }
        }

        setCartItem(cartData);
        localStorage.setItem("cartItem", JSON.stringify(cartData));
    };

    const getCartCount = useCallback(() => {
        let totalCount = 0;
        for (const itemId in cartItem) {
            for (const size in cartItem[itemId]) {
                totalCount += cartItem[itemId][size];
            }
        }
        setCartCount(totalCount);
    },[cartItem]);

    useEffect(() => {
        getCartCount();
        }, [getCartCount]);

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItem) {
            const product = Products.find((p) => p._id === itemId);
            if (!product) continue;

            for (const size in cartItem[itemId]) {
                totalAmount += product.price * cartItem[itemId][size];
            }
        }
        return totalAmount;
    };

    const value = {
        Products,
        currency,
        delivery_fee,
        cartItem,
        cartCount,
        addToCart,
        updateQuantity,
        getCartAmount,
        search,
        setSearch,
        setShowSearch,
        showSearch,
        wishlist,
        addToWishlist,
        removeFromWishlist,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
        ) 
};

export default ShopContextProvider;
