
"use client"
import ViewUserDetails from "@/app/components/ViewUserDetails";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function page() {

    const [userDetails,setUserDetails] = useState(false);

    const viewpopup = ()=>{
        setUserDetails(!userDetails);
    }

    


  return (
    <div className="py-7 px-4 h-full  ">
      <div className=" h-full bg-zinc-100 border-[2px] border-[#DADBDB]  px-16 py-4 rounded-xl ">
        <div className="flex justify-between border-[#DADBDB] border-b-[3px] pb-3 pt-2  ">
          <h1 className="text-xl font-semibold">Dashboard</h1>
  
      </div>
      </div>

    </div>
  );
}

export default page;
