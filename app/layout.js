'use client';
import './globals.css';
import Navbar from "./Components/Navbar";
import Asidebar from "./Components/Asidebar";
import WeatherCricketCard from './Components/Rightsidebar';
import { useState } from "react";
import Feed from "./Components/Feed";
import { usePathname } from "next/navigation";
import Head from 'next/head';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <html>
      <body>
        <div className="h-screen flex flex-col">
          {/* ✅ Fixed Navbar (No Overlap Issue) */}
          <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <Navbar setIsSidebarOpen={setIsSidebarOpen} value = {isSidebarOpen} />
          </div>

          {/* ✅ Sidebar & Content Wrapper */}
          <div className="flex flex-1 pt-[100px] md:pt-[50px]"> {/* ✅ Push content below Navbar */}
            {/* ✅ Left Sidebar (Toggle on Mobile) */}
            <div className={`fixed left-0 md:top-[0px] top-[37px] h-full z-40 bg-white shadow-md w-[50px] transition-transform duration-300 ease-in-out md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}>
              <Asidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            </div>

            {/* ✅ Main Content (Correctly Positioned Below Navbar) */}
            <div className={`flex-1 p-4 overflow-auto transition-all duration-300 ease-in-out md:ml-[180px] md:mr-[180px]`}>
              {pathname === "/" ? <Feed /> : children}
            </div>

            {/* ✅ Right Sidebar (Hidden on Mobile) */}
            <div className="fixed right-0 top-[75px] h-full z-40 bg-white shadow-md w-[200px] hidden md:block">
               <WeatherCricketCard/>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
