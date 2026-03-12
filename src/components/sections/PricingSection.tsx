
"use client"

import { useState } from 'react';
import { HiLightningBolt } from 'react-icons/hi';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-white py-16 px-4 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-[#e9fbf3] text-[#22c55e] px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2 border border-[#d1fae5]">
            <span className="text-xs text-green-600 "> <HiLightningBolt className="w-4 h-4"/>  </span> pricing
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl  font-bold  leading-tight mb-6 bg-linear-to-r from-gray-900 via-[#365327] to-[#a6c1b3] bg-clip-text text-transparent">
            Choose Your Perfect Plan with Transparent Pricing
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Enjoy flexible plans tailored to your needs, whether you require shared workspace, meeting rooms, private offices, or dedicated desks. Pick the plan that suits you and start your journey today!
        </p>

        {/* Switcher Toggle */}
        <div className="flex justify-center">
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-2 flex items-center gap-6">
            <span className={`text-sm font-semibold transition-colors ${!isAnnual ? 'text-[#10b981]' : 'text-gray-400'}`}>
              Monthly
            </span>
            
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 cursor-pointer bg-gray-200 rounded-full transition-colors focus:outline-none"
            >
              <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`}>
                 <span className="text-[10px] text-gray-400">
                    <HiLightningBolt className="w-4 h-4"/>
                 </span>
              </div>
            </button>

            <span className={`text-sm font-semibold transition-colors ${isAnnual ? 'text-[#10b981]' : 'text-gray-400'}`}>
              Annually
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;