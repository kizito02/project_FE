"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {

  return (
    <div className="w-[100%] h-screen flex justify-center items-center">
      <div className=" w-[85%] md:w-[500px] rounded-md min-h-[300px] border p-4">
        <p className="font-bold">Register for Delivery</p>
        <form className="mt-10">
          <div className="flex flex-col mb-4">
            <label className="text-[12px] font-semibold">Name</label>
            <input
              name="name"
              className="border h-[45px] w-[100%] rounded-md mt-1 px-2"
              placeholder="Enter Your Name"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-[12px] font-semibold">Email</label>
            <input
              name="email"
              className="border h-[45px] w-[100%] rounded-md mt-1 px-2"
              placeholder="Enter Your Email"
              type="email"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-[12px] font-semibold">Password</label>
            <input
              name="password"
              className="border h-[45px] w-[100%] rounded-md mt-1 px-2"
              placeholder="Enter Your Password"
              type="password"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-[12px] font-semibold">
              Address
            </label>
            <input
              name="confirmPassword"
              className="border h-[45px] w-[100%] rounded-md mt-1 px-2"
              placeholder="Address"
              type="password"
            />
          </div>

          <button
            type="submit"
            className="mt-5 bg-blue-950 text-white flex w-[100%] h-[50px] rounded-md justify-center items-center"
          >
            Register
          </button>
          <div className="flex w-full justify-center items-center mt-5">
            Already have an Account,{" "}
            <Link
              href="/auth/signin"
              className="text-blue-950 font-bold ml-1 underline"
            >
              Sign in Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;