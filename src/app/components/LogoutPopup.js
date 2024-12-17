"use client"
import React from "react";
import Link from "next/link";

function LogoutPopup({setisLogOutOpen}) {
    


  return (
    <div className="h-full w-full backdrop-blur-[2px] absolute left-0 top-0 flex justify-center items-center">
      <div className="w-[400px] py-7 bg-white shadow-xl rounded-2xl p-2 relative">
        <div className="flex justify-center items-center flex-col gap-y-2">
            
            <h1 className="text-black text-lg font-medium py-3" >Logout Confirmation</h1>

            <p className="text-black text-sm font-light">Are you sure you want to do logout?</p>

            <div className="flex gap-6 py-4">
              <Link href={"/login"}>                <button  className="text-white bg-blue-400 font-medium px-4 py-2  border-blue-500 border-[1px] hover:bg-blue-300">Confirm</button>
              </Link>
                <button onClick={() => {
                    setisLogOutOpen(false)
                }}  className="bg-white text-blue-400 font-medium px-4 py-2 border-blue-500 border-[1px] hover:bg-blue-300">Cancel</button>

            

        
            </div>
        
        </div>
      </div>
    </div>
  );
}

export default LogoutPopup;
