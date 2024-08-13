"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { addItemToCart } from "../../redux/cartSlice";
import { CartItem } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  link: string;
}
interface SData {
  data: Item[];
}
const index = ({ data }: { data: SData }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item: Item) => {
    dispatch(addItemToCart(item));
    // Retrieve the existing items from localStorage
    const existingItemsJson = localStorage.getItem("ServiceItems");
    const existingItems: Item[] = existingItemsJson
      ? JSON.parse(existingItemsJson)
      : [];
    // Add the new item to the array
    existingItems.push(item);
    // Save the updated array back to localStorage
    localStorage.setItem("ServiceItems", JSON.stringify(existingItems));
    console.log(item);
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-20">
        <div
          className="grid grid-cols-1 pt-1 mx-64 max-[1230px]:mx-14 max-md:mx-3 gap-5"
          id="Home Cleaning"
        >
          <h1 className="font-bold text-3xl text-center mb-5">Home Cleaning</h1>
          {data &&
            data.map((item, index) => (
              <div
                className="flex items-center justify-between p-5 px-11 max-[1230px]:px-7 max-md:px-3 border-2"
                key={index}
              >
                <div className="w-1/2">
                  <h1 className="font-bold text-xl">{item.name}</h1>
                  <p className="px">{item.description}</p>
                  <div className="font-semibold text-lg">₹ {item.price}</div>
                </div>
                <div className="relative">
                  <Image
                    src={item.link}
                    alt={item.name}
                    width={300}
                    height={300}
                  />
                  <div className="absolute right-[110px] max-[670px]:right-24 bottom-[-15px]">
                    <button
                      type="button"
                      className="text-[#3d5ef6] px-7 py-2 bg-white rounded-md border-[1px] border-[#3d5ef6]"
                      onClick={() => {
                        handleAddToCart(item);
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default index;
