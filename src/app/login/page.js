import React from "react";
import { FiLogIn } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import Link from "next/link";

function page() {
  return (
    <div className="login-card-bg w-screen h-screen flex justify-center items-center">
      <img className="w-20 absolute top-3 left-10" src="logo.svg" alt="" />

      <div className="login-card-bg w-[370px] h-[400px] rounded-3xl border-[1px] border-[#BDCBDB] drop-shadow-md">
        <div className="h-[25%] w-full flex justify-center items-center">
          <div className="text-black text-2xl rounded-2xl bg-white p-4 drop-shadow-md">
            <FiLogIn />
          </div>
        </div>

        <div className="h-[75%] w-full">
          <h1 className="text-black text-center font-semibold text-2xl">
            Sign In
          </h1>

          <p className="text-[#6D7486] px-10 text-center text-sm pt-2">
            Welcome to Hoch International – Your Gateway to Excellence!
          </p>

          <div className="flex bg-[#EFF2F6] items-center mx-10 h-8 rounded-lg px-2 gap-2 border-[1px] border-[#EEF1F5] mt-4">
            <MdEmail className="text-[#808897]" />{" "}
            <input
              placeholder="Email"
              className="bg-[#EFF2F6] outline-none placeholder:text-xs text-sm placeholder:text-[#808897]"
              type="email"
            />
          </div>
          <div className="flex bg-[#EFF2F6] items-center mx-10 h-8 rounded-lg px-2 gap-2 border-[1px] border-[#EEF1F5] mt-2   ">
            <IoIosLock className="text-[#808897]" />{" "}
            <input
              placeholder="password"
              className="bg-[#EFF2F6] outline-none placeholder:text-xs text-sm placeholder:text-[#808897]"
              type="password"
            />
          </div>
          <div className="flex justify-end px-10 pt-1 py-3">
            {/* <p className="text-black text-xs">Forget Password?</p> */}
          </div>

          <div className=" px-10 mt-3">
            <Link href={"/admin/dashboard"}>
              
              <button className="border-[#65666D] border-[2px] bg-black text-white w-full rounded-lg text-sm py-2">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
