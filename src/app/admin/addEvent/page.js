
"use client"
import AddEventPopUp from "@/app/components/AddEventPopUp";
import ViewEventDetails from "@/app/components/ViewEventDetails";
import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";





function page() {

  const [addEvent,setAddEvent] = useState(false);
  const [viewPopUpDetails,setViewPopUpDetails] = useState(false);

const togglepopup =()=>{
  setAddEvent(!addEvent)
}
const viewpopup = () => {
  setViewPopUpDetails(!viewPopUpDetails)
}



  return (
    <div className="py-7 px-4 h-full  ">
      <div className=" h-full bg-zinc-100 border-[2px] border-[#DADBDB]  px-16 py-4 rounded-xl ">
        <div className="flex justify-between border-[#DADBDB] border-b-[3px] pb-3 pt-2  ">
          <h1 className="text-xl font-semibold">Add Events</h1>
          <button onClick={togglepopup} className="text-3xl hover:scale-105">
            <FaCirclePlus className="hover:text-gray-700 "/>
          </button>
        </div>
        <div className="pt-11 w-full  ">
          <table className=" w-full">
           
              <thead className="w-full">
              <tr className="bg-[#DADBDB] ">
                <th  className="text-left ps-3 py-2">Heading</th>
                <th className="text-left px-6"> Description</th>
                <th className="text-left">Image</th>
                <th></th>
              </tr>
              </thead>
            
      <tbody>
      <tr > 
              <td className="ps-3 font-medium pt-6 ">careers Abroadgv</td>
              <td className="font-light pt-6 px-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                modi quasi repudiandae dhqwuida
                
              </td>
              <td className="pt-6">
                <img className="w-16" src="/login-bg.jpg" alt="" />
              </td>
              <td onClick={viewpopup} className=" px-4 text-violet-800 font-semibold  hover:underline cursor-pointer ">
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
      addEvent && <AddEventPopUp togglepopup={togglepopup} />
      }
      {
       viewPopUpDetails && <ViewEventDetails viewpopup={viewpopup}/>
      }
      
    </div>
  );
}

export default page;
