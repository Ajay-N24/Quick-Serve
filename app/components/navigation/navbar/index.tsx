"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.webp";
const index = () => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex w-full justify-between items-center px-24 max-md:px-10 py-1 bg-[#3d5ef6]">
      <Image src={logo} alt="logo" width={80} height={80} />
      <ul className="flex max-lg:hidden justify-between gap-11 text-white">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/">
          <li>About</li>
        </Link>
        <Link href="/">
          <li>Services</li>
        </Link>
        <Link href="/Cart">
          <li>My Cart</li>
        </Link>
        <Link href="/">
          <li>Login</li>
        </Link>
      </ul>

      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setIsOpen(!IsOpen)}
      >
        <svg
          width="34px"
          height="34px"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
        >
          <path
            d="M3 5H21"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 12H21"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 19H21"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div
        className={`absolute z-10 top-[76px] left-0 w-full bg-[#3d5ef6] ${
          IsOpen ? "block" : "hidden"
        } lg:hidden`}
      >
        <ul className="flex flex-col items-center font-semibold gap-6 my-5">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/">
            <li>About</li>
          </Link>
          <Link href="/">
            <li>Services</li>
          </Link>
          <Link href="/">
            <li>Login</li>
          </Link>
          <Link href="/">
            <li>Logout</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default index;
