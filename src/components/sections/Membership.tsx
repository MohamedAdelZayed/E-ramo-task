"use client"

import { useState, useRef, useEffect } from "react";
import {
  FaUsers,
  FaBuilding,
  FaDesktop,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaLightbulb,
  FaHome,
  FaUserPlus,
  FaEnvelope,
  FaCalendarAlt
} from "react-icons/fa";
import { HiPresentationChartLine } from "react-icons/hi2";

const spaceOptions = [
  { id: "shared", label: "Shared Space", icon: FaUsers },
  { id: "private", label: "Private Offices", icon: FaBuilding },
  { id: "meeting", label: "Meeting Rooms", icon: HiPresentationChartLine },
  { id: "dedicated", label: "Dedicated Desk", icon: FaDesktop },
];

const plans = [
  {
    id: 1,
    popular: false,
    subtitle: "For mid companies",
    title: "Entrepreneurs' Membership",
    description: "Enjoy 50 hours shared area access and 3 hours meeting room",
    price: "699.00",
    features: [
      { icon: FaUsers, label: "Shared Area Hours", value: "50" },
      { icon: FaHome, label: "Meeting Rooms Hours", value: "3" },
      { icon: FaUserPlus, label: "Number of Friends", value: "0" },
      { icon: FaEnvelope, label: "Number of Invitations", value: "0" },
      { icon: FaCalendarAlt, label: "Dedicated Desk Days", value: "0" },
    ],
  },
  {
    id: 2,
    popular: true,
    subtitle: "For mid companies",
    title: "Start Ups Membership",
    description: "Share Area with 5 hours Meeting Room Access",
    price: "1,399.00",
    features: [
      { icon: FaUsers, label: "Shared Area Hours", value: "100" },
      { icon: FaHome, label: "Meeting Rooms Hours", value: "5" },
      { icon: FaUserPlus, label: "Number of Friends", value: "0" },
      { icon: FaEnvelope, label: "Number of Invitations", value: "0" },
      { icon: FaCalendarAlt, label: "Dedicated Desk Days", value: "0" },
    ],
  },
  {
    id: 3,
    popular: false,
    subtitle: "For mid companies",
    title: "Small Size Companies (3 Desks)",
    description: "Enjoy 3 Desks with 130 hours with 10 hours meeting",
    price: "4,499.00",
    features: [
      { icon: FaUsers, label: "Shared Area Hours", value: "130" },
      { icon: FaHome, label: "Meeting Rooms Hours", value: "10" },
      { icon: FaUserPlus, label: "Number of Friends", value: "0" },
      { icon: FaEnvelope, label: "Number of Invitations", value: "0" },
      { icon: FaCalendarAlt, label: "Dedicated Desk Days", value: "0" },
    ],
  },
  {
    id: 4,
    popular: false,
    subtitle: "For mid companies",
    title: "Professional Bundle",
    description: "Enjoy 130 hours shared area and 10 hours meeting",
    price: "2,199.00",
    features: [
      { icon: FaUsers, label: "Shared Area Hours", value: "130" },
      { icon: FaHome, label: "Meeting Rooms Hours", value: "10" },
      { icon: FaUserPlus, label: "Number of Friends", value: "1" },
      { icon: FaEnvelope, label: "Number of Invitations", value: "5" },
      { icon: FaCalendarAlt, label: "Dedicated Desk Days", value: "0" },
    ],
  },
  {
    id: 5,
    popular: false,
    subtitle: "For mid companies",
    title: "Premium Bundle",
    description: "Enjoy 130 hours in area and 20 hours meeting room",
    price: "2,899.00",
    features: [
      { icon: FaUsers, label: "Shared Area Hours", value: "130" },
      { icon: FaHome, label: "Meeting Rooms Hours", value: "20" },
      { icon: FaUserPlus, label: "Number of Friends", value: "2" },
      { icon: FaEnvelope, label: "Number of Invitations", value: "5" },
      { icon: FaCalendarAlt, label: "Dedicated Desk Days", value: "0" },
    ],
  },
  {
    id: 6,
    popular: false,
    subtitle: "For mid companies",
    title: "National Day Bundle",
    description: "We celebrate with you.. monthly bundle with 20 hours",
    price: "195.00",
    features: [
      { icon: FaUsers, label: "Shared Area Hours", value: "20" },
      { icon: FaHome, label: "Meeting Rooms Hours", value: "0" },
      { icon: FaUserPlus, label: "Number of Friends", value: "0" },
      { icon: FaEnvelope, label: "Number of Invitations", value: "0" },
      { icon: FaCalendarAlt, label: "Dedicated Desk Days", value: "0" },
    ],
  },
];

const Membership = () => {
  const [selectedOption, setSelectedOption] = useState("shared");
  const [scrollDirection, setScrollDirection] = useState<"left" | "right">("right");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollAmount = 340;

      if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - 10) {
        setScrollDirection("left");
      } else if (direction === "left" && scrollLeft <= 10) {
        setScrollDirection("right");
      } else {
        scrollRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll(scrollDirection);
    }, 4000);
    return () => clearInterval(interval);
  }, [scrollDirection]);

  return (
    <section id="membership" className="bg-gray-50 py-16 md:py-24">
      <div className="w-full max-w-325 mx-auto px-4 md:px-8">

        <div className="flex flex-col lg:flex-row gap-4 md:gap-8">

          {/* Left Sidebar */}
          <div className="w-full lg:w-75 shrink-0">

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">


              {/* Title */}
              <div className="flex items-start gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#3D522B] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaCheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900">
                  Select From The Upcoming Options
                </h3>
              </div>


              {/* The Grid: 2 columns on mobile/tablet, 1 column on lg screens */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {spaceOptions.map((option) => {
                  const Icon = option.icon;
                  const isSelected = selectedOption === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => setSelectedOption(option.id)}
                      className={`flex items-center cursor-pointer gap-3 px-4 py-3.5 rounded-xl text-left transition-all ${isSelected
                          ? "bg-gradient-to-r from-[#98af8d] to-[#365327] text-white shadow-md"
                          : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-semibold">{option.label}</span>
                    </button>
                  );
                })}
              </div>






              <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <FaLightbulb className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-bold text-gray-900">Pro Tip</span>
                </div>
                <p className="text-xs text-blue-700 leading-relaxed font-medium">
                  Annual plans offer better value with up to 20% savings compared to monthly billing
                </p>
              </div>



            </div>

          </div>

          {/* Plans Carousel */}
          <div className="flex-1 relative min-w-0 group">

            <button
              onClick={() => { setScrollDirection("left"); scroll("left"); }}
              className="absolute bg-[#365327]/50 backdrop-blur-sm hover:bg-white  left-0 top-1/2 -translate-y-1/2 -translate-x-3 cursor-pointer z-30 w-10 h-10 rounded-full shadow-lg border border-gray-100 flex items-center justify-center transition-all opacity-100"
            >
              <FaChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <button
              onClick={() => { setScrollDirection("right"); scroll("right"); }}
              className="absolute bg-[#365327]/50 backdrop-blur-sm hover:bg-white  right-0 top-1/2 -translate-y-1/2 translate-x-3 cursor-pointer z-30 w-10 h-10 rounded-full shadow-lg border border-gray-100 flex items-center justify-center transition-all opacity-100"
            >
              <FaChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide py-10 px-2 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative shrink-0 w-75 rounded-2xl border p-6 flex flex-col snap-start transition-all duration-300 ${plan.popular
                      ? "border-[#345125] bg-[#345125] text-white shadow-xl scale-[1.05] z-10"
                      : "border-gray-100 bg-white text-gray-900 shadow-sm"
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 w-full flex justify-center">
                      <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-amber-400 text-amber-950 text-[10px] font-bold whitespace-nowrap shadow-xl border border-white">
                        🔥 Popular Plan (Best Sales)
                      </span>
                    </div>
                  )}

                  <div className="flex justify-center mb-4 mt-2">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${plan.popular ? "bg-white/10" : "bg-gray-100"}`}>
                      <FaDesktop className={`w-7 h-7 ${plan.popular ? "text-white" : "text-[#3D522B]"}`} />
                    </div>
                  </div>

                  <p className={`text-center text-xs mb-1 ${plan.popular ? "text-white/70" : "text-gray-500"}`}>{plan.subtitle}</p>
                  <h4 className={`text-center text-lg font-bold mb-3 leading-tight ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.title}</h4>
                  <p className={`text-center text-xs mb-6 leading-relaxed ${plan.popular ? "text-white/70" : "text-gray-500"}`}>{plan.description}</p>

                  <div className="text-center mb-6">
                    <span className={`text-3xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                    <span className={`text-sm ml-2 ${plan.popular ? "text-white/70" : "text-gray-500"}`}>SAR</span>
                  </div>

                  <div className="mb-6">
                    <h5 className={`text-sm font-bold mb-3 ${plan.popular ? "text-white" : "text-gray-900"}`}>What&apos;s included</h5>
                    <div className="flex flex-col gap-2.5">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <feature.icon className={`w-4 h-4 shrink-0 ${plan.popular ? "text-amber-400" : "text-[#3D522B]"}`} />
                          <span className={`text-xs ${plan.popular ? "text-white/80" : "text-gray-600"}`}>{feature.label} / {feature.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className={`mt-auto w-full py-3 cursor-pointer rounded-xl text-sm font-bold transition-all active:scale-95  border hover:bg-white hover:text-[#345125] hover:border-[#345125] ${plan.popular ? "bg-white text-[#345125] hover:bg-gray-50" : "bg-[#3D522B] text-white"}`}>
                    Buy MemberShip
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>



      </div>


      <div className="mt-15 flex flex-wrap items-center justify-center gap-8 opacity-60">
        {/* Secure Payments */}
        <div className="flex items-center gap-2 group cursor-default">
          <FaCheckCircle className="w-5 h-5 text-green-600 group-hover:animate-pulse" />
          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
            Secure Payments
          </span>
        </div>

        {/* Instant Activation */}
        <div className="flex items-center gap-2 group cursor-default">
          <FaCheckCircle className="w-5 h-5 text-blue-600 group-hover:animate-pulse" />
          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
            Instant Activation
          </span>
        </div>

        {/* Flexible Cancellation */}
        <div className="flex items-center gap-2 group cursor-default">
          <FaCheckCircle className="w-5 h-5 text-purple-600 group-hover:animate-pulse" />
          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
            Flexible Cancellation
          </span>
        </div>
      </div>

    </section>
  );
};

export default Membership;