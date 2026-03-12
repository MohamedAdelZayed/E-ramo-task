"use client";
import Image from 'next/image';
import { useState } from 'react';

const SharedCoworking = () => {

  const [activeTab, setActiveTab] = useState("Shared Space");

  const categories = [
    { image: "/images/space.svg", label: "Shared Space", active: true },
    { image: "/images/officies.svg", label: "Private Offices", active: false },
    { image: "/images/meeting.svg", label: "Meeting Rooms", active: false },
    { image: "/images/desk.svg", label: "Dedicated Desk", active: false },
  ];

  return (
    <section className=" py-12 px-4">

      <div className="max-w-315 mx-auto px-3 md:px-12 relative">

        <div className="relative bg-[#FDF8F2]  sm:p-5 md:p12 rounded-4xl w-full mt-16 font-sans shadow-sm">

          {/* Floating Header */}

          <div className="absolute left-1/2 -translate-x-1/2 -top-16 md:-top-10 z-20 w-[95%] md:w-auto">
            <div className="bg-[#365327] grid grid-cols-4 md:flex items-center justify-center gap-1 md:gap-2 p-1.5 md:p-2 rounded-2xl md:rounded-4xl shadow-xl border border-white/5">

              {categories.map((tab, index) => {
                const isActive = activeTab === tab.label;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveTab(tab.label)}
                    className={`flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 py-2 md:py-3 px-1 md:px-5 rounded-xl md:rounded-4xl transition-all duration-300
          
          ${isActive
                        ? "bg-white text-[#1A2921] shadow-md"
                        : "text-white/80 hover:bg-white/10"
                      }`}
                  >
                    {/* Icon Container */}
                    <div
                      className={`relative shrink-0 w-4 h-4 md:w-5 md:h-5 ${isActive ? "brightness-0" : "brightness-0 invert opacity-80"
                        }`}
                    >
                      <Image
                        src={tab.image}
                        alt={tab.label}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>

                    <span className="text-[9px] min-[375px]:text-[10px] md:text-sm text-center font-bold leading-tight md:leading-none md:whitespace-nowrap">
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default SharedCoworking;