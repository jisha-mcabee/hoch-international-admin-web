
"use client"
import NursingEducation from "@/app/components/NursingEducation";
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
          <h1 className="text-xl font-semibold">Free Njursing Education</h1>
          <div className="flex  items-center w-64 gap-4 h-10 bg-slate-200 rounded-lg border-slate-300 border-[1px] px-2 ">
            <FaSearch/>
            <input
              type="search"
              placeholder="Search"
              className=" outline-none placeholder:text-black bg-slate-200"
            />
          </div>
        </div>
        <div className="pt-11 w-full  ">
          <table className=" w-full">
            <thead className="w-full">
              <tr className="bg-[#DADBDB] ">
                <th className="text-left ps-3 py-2">Name </th>
                <th className="text-left px-6"> Mobile Number</th>
                <th className="text-left">Email</th>
                <th className="text-left px-4">Address</th>
                <th className="text-left">Qualification</th>

                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="ps-3 font-medium pt-6 ">careers Abroadgv</td>
                <td className="font-light pt-6 px-6">
                  9539195380
                </td>
                <td className="pt-6 pe-6"> 
                 sebastian@gmail.com
                </td>
                <td className="pt-6 px-4"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                modi quasi repudiandae tenetur
                </td>
                <td>
                    BSC Nursing
                </td>
                <td onClick={viewpopup} className=" px-8 text-violet-800 font-semibold  hover:underline cursor-pointer ">
                view
              </td>
              </tr>
              <tr>
                <td className="ps-3 font-medium pt-6">careers Abroadgv</td>
                <td className="font-light pt-6 px-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  modi quasi repudiandae tenetur
                </td>
                <td className="pt-6">
                  <img className="w-16" src="/login-bg.jpg" alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {
        userDetails && <NursingEducation  viewpopup = {viewpopup}/>
      }
    </div>
  );
}

export default page;
