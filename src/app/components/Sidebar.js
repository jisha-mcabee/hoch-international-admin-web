
"use client"
import React, { useState } from "react";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdEvent } from 'react-icons/md';
import { FaFileAlt,FaBook,FaGlobe,FaUser } from 'react-icons/fa';



import Link from "next/link"; // Import Next.js Link component
import LogoutPopup from "./LogoutPopup";

function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  const [activeSubMenu, setActiveSubMenu] = useState("Nursing Education");
  const [isLogOutOpen,setisLogOutOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <RiDashboardHorizontalFill />, to: "/admin/dashboard", subMenu: [] },
  
  
    { name: "Add Events", icon: <MdEvent />, to: "/admin/addEvent", subMenu: [] },
    { name: "User Details", icon: <FaFileAlt />, to: "", subMenu: [
      {name: "Nursing Education", icon: <FaBook />, to: "/admin/nursingEducation", },
      {name: "Denmark Migration", icon: <FaGlobe />, to: "/admin/denmarkMigration", },
      {name: "Contact us", icon: <FaUser />, to: "/admin/UserDetails", }


    ] },
  ];

  const handleMenuClick = (item) => {
    setActive((prev) => (prev === item.name ? "" : item.name));
    if (item.subMenu.length > 0 && active !== item.name) {
      setActiveSubMenu(""); // Reset submenu when switching main menu
    }
  };

  const handleSubMenuClick = (subItem) => {
    setActiveSubMenu(subItem.name);
  };

  return (
    <div className="h-full px-4 mt-8">
      <div className="h-[75%]">
      <img src="/logo.svg" className="w-20 mx-auto pb-4" alt="" />
      {menuItems.map((item) => (
        <div  key={item.name}>
          <Link
            href={item.to || "#"} // Add navigation to main menu
            className={`text-black rounded-lg p-2 flex items-center justify-between gap-4 cursor-pointer ${
              active === item.name
                ? "border-2 border-[#DADBDB] text-black bg-white"
                : "border border-transparent text-[#999D9E]"
            }`}
            onClick={() => handleMenuClick(item)}
          >
            <div className="flex items-center gap-4">
              <div
                className={`${
                  active === item.name ? "text-black" : "text-[#999D9E]"
                }`}
              >
                {item.icon}
              </div>
              {item.name}
            </div>
            {item.subMenu.length > 0 && (
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  active === item.name ? "rotate-180" : ""
                }`}
              />
            )}
          </Link>
          {item.subMenu.length > 0 && (
            <div
              className={`ml-6 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                active === item.name ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {item.subMenu.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.to || "#"} // Add navigation to submenu
                  className={`rounded-lg p-2 flex items-center gap-4 cursor-pointer ${
                    activeSubMenu === subItem.name
                      ? "text-black bg-white"
                      : "border border-transparent text-black"
                  }`}
                  onClick={() => handleSubMenuClick(subItem)}
                >
                  <div
                    className={`${
                      activeSubMenu === subItem.name
                        ? "text-black"
                        : "text-[#999D9E]"
                    }`}
                  >
                    {subItem.icon}
                  </div>
                  {subItem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      </div>
      <div className=" ps-2 pt-5 border-t-2 text-black hover:text-gray-500 border-gray-300">
       <button className="flex text-lg items-center ps-2 cursor-pointer" onClick={() => {
        setisLogOutOpen(true)
       }}>
        <IoLogOut className="text-2xl"/>Logout
       </button>

      </div>
      {isLogOutOpen && <LogoutPopup setisLogOutOpen={setisLogOutOpen} /> }
      
    </div>

  );
}

export default Sidebar;
