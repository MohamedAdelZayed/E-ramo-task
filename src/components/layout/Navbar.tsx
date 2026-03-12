"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { 
  LuHouse, LuInfo, LuLayoutGrid, LuSettings2, 
  LuUserCheck, LuNewspaper, LuPhoneCall, LuUserPlus, LuLogIn, LuGlobe, LuX, LuChevronDown
} from "react-icons/lu";

export default function Navbar() {

  /* Mobile menu state */
  const [isOpen, setIsOpen] = useState(false);

  /* Current page path */
  const pathname = usePathname();

  /* Navbar menu items */
  const menuItems = [
    { name: "Home", href: "/", icon: LuHouse },
    { name: "About", href: "/about", icon: LuInfo },
    { name: "Products", href: "/products", icon: LuLayoutGrid, hasDropdown: true },
    { name: "How It Works", href: "/how-it-works", icon: LuSettings2 },
    { name: "Membership", href: "/membership", icon: LuUserCheck },
    { name: "Blogs", href: "/blogs", icon: LuNewspaper },
    { name: "Contact Us", href: "/contact", icon: LuPhoneCall },
  ];

  return (

    <nav className="relative z-100 bg-white w-full">

      {/* Navbar */}
      <div className="max-w-315 mx-auto px-3.5 md:px-12 py-3 flex items-center justify-between">
        
        {/* Logo + Desktop menu */}
        <div className="flex items-center gap-10">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex items-center gap-4 text-[15px] font-semibold text-gray-700">

            {menuItems.map((item) => {

              const isActive = pathname === item.href;

              return (
                <li key={item.name} className="relative group py-1">

                  {/* Menu link */}
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 transition-colors ${
                      isActive ? "text-[#365327]" : "hover:text-[#365327]"
                    }`}
                  >
                    {item.name}

                    {/* Dropdown arrow */}
                    {item.hasDropdown && (
                      <LuChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown menu */}
                  {item.hasDropdown && (
                    <div className="absolute top-[110%] left-0 w-72 bg-white rounded-xl shadow-[0px_10px_30px_rgba(54,83,39,0.15)] 
                    opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-300 ease-out z-110 border border-gray-100 overflow-hidden">

                      <ul className="py-1 flex flex-col">

                        {[
                          "Coworking spaces in Jeddah",
                          "Meeting room in Jeddah",
                          "Offices for rent in Jeddah",
                          "Shared area in Jeddah",
                          "Dedicated Desk in Jeddah",
                          "Conference Rooms in Jeddah"
                        ].map((subItem, idx) => (

                          <li key={idx} className="px-2 py-0.5">

                            <Link
                              href="#"
                              className="flex items-center justify-between px-2 py-2.5 rounded-lg text-[13px] text-[#365327] 
                              hover:bg-[#728667] hover:text-white transition-all duration-200 group/sub"
                            >
                              <span className="font-medium">{subItem}</span>

                              <span className="opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-200">
                                →
                              </span>

                            </Link>

                          </li>

                        ))}

                      </ul>

                    </div>
                  )}

                  {/* Hover underline */}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-[#365327] transition-all duration-300 transform origin-left ${
                      isActive
                        ? "w-full scale-x-100"
                        : "w-full scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>

                </li>
              );
            })}

          </ul>

        </div>

        {/* Right buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">

          {/* Language button */}
          <button className="relative bg-white cursor-pointer text-[#365327] border border-[#365327] px-4 py-1.5 rounded-md group overflow-hidden">

            <span className="relative z-10 flex items-center gap-2 font-bold text-sm group-hover:text-white transition-colors duration-600">
              <LuGlobe /> العربية
            </span>

            <span className="absolute top-0 left-0 h-full w-[150%] bg-[#365327] skew-x-[-30deg] -translate-x-[115%] group-hover:-translate-x-[15%] transition-transform duration-500"></span>

          </button>
          
          {/* Create account */}
          <button className="relative bg-[#365327] cursor-pointer text-white border border-[#365327] px-5 py-1.5 rounded-md group overflow-hidden">

            <span className="relative z-10 font-bold text-sm group-hover:text-[#365327] transition-colors duration-600">
              Create Account
            </span>

            <span className="absolute top-0 left-0 h-full w-[150%] bg-white skew-x-[-30deg] -translate-x-[115%] group-hover:-translate-x-[15%] transition-transform duration-500"></span>

          </button>

          {/* Login */}
          <button className="relative bg-white text-[#365327] cursor-pointer border border-[#365327] px-6 py-1.5 rounded-md group overflow-hidden">

            <span className="relative z-10 font-bold text-sm group-hover:text-white transition-colors duration-600">
              Login
            </span>

            <span className="absolute top-0 left-0 h-full w-[150%] bg-[#365327] skew-x-[-30deg] -translate-x-[115%] group-hover:-translate-x-[15%] transition-transform duration-500"></span>

          </button>

        </div>

        {/* Mobile menu button */}
        <button
          className="xl:hidden text-[#365327] text-3xl"
          onClick={() => setIsOpen(true)}
        >

          <Image
            src="/images/menu.svg"
            alt="menu"
            width={40}
            height={40}
            className="w-6 cursor-pointer"
          />

        </button>

      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-1000 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-75 bg-white z-1001
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        rounded-l-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.12)]
        flex flex-col`}
      >

        {/* Sidebar header */}
        <div className="relative pt-8 px-6 pb-6 flex flex-col items-center">

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute left-5 top-5 cursor-pointer text-gray-400 text-[20px]"
          >
            <LuX />
          </button>

          {/* Logo */}
          <Image
            src="/images/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="mb-6"
          />

          {/* Language */}
          <button className="w-full h-10 flex items-center justify-center gap-2 border border-[#365327] text-[#365327] rounded-xl font-semibold text-[15px]">
            <LuGlobe className="text-[18px]" />
            العربية
          </button>

        </div>

        {/* Mobile menu items */}
        <ul className="flex flex-col gap-px px-4 flex-1 overflow-y-auto">

          {menuItems.map((item) => {

            const isActive = item.name === "Home";

            return (
              <li key={item.name}>

                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between h-11.5 px-4 rounded-lg transition
                  ${
                    isActive
                      ? "bg-[#DCE4D7] text-[#365327]"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}
                >

                  <div className="flex items-center gap-3.5">

                    <item.icon
                      className={`text-[20px] ${
                        isActive ? "text-[#365327]" : "text-gray-400"
                      }`}
                    />

                    <span className="text-[16px] font-semibold">
                      {item.name}
                    </span>

                  </div>

                  {item.hasDropdown && (
                    <LuChevronDown className="text-gray-400 text-[18px]" />
                  )}

                </Link>

              </li>
            );
          })}

          {/* Divider */}
          <div className="border-t border-gray-100 my-3" />

          {/* Create account */}
          <button className="flex items-center gap-3.5 h-11.5 px-4 rounded-lg text-gray-800 font-semibold hover:bg-gray-50">
            <LuUserPlus className="text-[20px] text-gray-400" />
            <span className="text-[16px]">Create Account</span>
          </button>

          {/* Login */}
          <button className="flex items-center gap-3.5 h-11.5 px-4 rounded-lg text-gray-800 font-semibold hover:bg-gray-50">
            <LuLogIn className="text-[20px] text-gray-400" />
            <span className="text-[16px]">Login</span>
          </button>

        </ul>

      </div>

    </nav>
  );
}