"use client";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { RootState } from "../redux/store";
import {
  removeItemFromCart,
  clearCart,
  addItemToCart,
} from "../redux/cartSlice";
const page = () => {
  interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    link: string;
  }
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    // Retrieve data from localStorage when component mounts
    const localStorageItems = localStorage.getItem("ServiceItems");
    if (localStorageItems) {
      const items = JSON.parse(localStorageItems);
      // Initialize Redux store with items from localStorage
      items.forEach((item: Item) => {
        dispatch(addItemToCart(item));
      });
    }
  }, [dispatch]);
  useEffect(() => {
    // Update localStorage whenever cartItems changes
    localStorage.setItem("ServiceItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.price.toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="mt-4">
          <button
            onClick={handleClearCart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default page;
