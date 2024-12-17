import React from "react";
import Sidebar from "../components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      //   className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen h-screen flex gap-2  p-6">
          <div className="w-[20%] h-full bg-[#F7F7F7] rounded-xl">
            <Sidebar />
          </div>
          <div className="w-[80%] h-full bg-[#F7F7F7] rounded-xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
