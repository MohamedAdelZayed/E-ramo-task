"use client";

import Image from "next/image";
import { FaSearch, FaArrowUp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/css/effect-fade";


/* === Categories Tabs Data === */
const categories = [
  { image: "/images/space.svg", label: "Shared Space", active: true },
  { image: "/images/officies.svg", label: "Private Offices", active: false },
  { image: "/images/meeting.svg", label: "Meeting Rooms", active: false },
  { image: "/images/desk.svg", label: "Dedicated Desk", active: false },
];

/* === Hero Slider Data === */
const slides = [
  {
    title: "Co Working Spaces Fits You",
    subtitle: "Coworking & Flexible Office Marketplace | Search & Book Today",
    image: "/images/hero.png",
  },
  {
    title: "Modern Offices That Fit You",
    subtitle: "Coworking & Flexible Office Marketplace | Search & Book Today",
    image: "/images/hero.png",
  },
];

const HeroSection = () => {

  /* Active Category Tab */
  const [activeTab, setActiveTab] = useState("Shared Space");

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // دالة الصعود للأعلى 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative pb-2 overflow-visible mt-1">

      {/* === Ramadan Decorations === */}

      {/* Left Decoration */}
      <div className="fixed -top-0.5 left-0 z-9999 pointer-events-none w-20 sm:w-28 md:w-36 lg:w-44 xl:w-52">
        <div className="animate-swing-left will-change-transform">
          <Image
            src="/images/ramadan.png"
            alt="Ramadan decoration left"
            width={400}
            height={400}
            priority
            className="w-full h-auto scale-x-[-1] object-contain"
          />
        </div>
      </div>

      {/* Right Decoration */}
      <div className="fixed -top-0.5 -right-1 z-9999 pointer-events-none w-20 sm:w-28 md:w-36 lg:w-44 xl:w-52">
        <div className="animate-swing-right will-change-transform">
          <Image
            src="/images/ramadan.png"
            alt="Ramadan decoration right"
            width={400}
            height={400}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* === زر السكرول (Scroll To Top Button) === */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-9999 cursor-pointer p-3 rounded-xl bg-[#2D4F2E] text-white shadow-lg transition-all duration-300 hover:bg-[#3d693e] active:scale-95 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5" />
      </button>


      <div className="max-w-315 mx-auto px-3 md:px-12 relative">

        {/* === Hero Slider === */}
        <div className="relative h-70 md:h-125 rounded-2xl overflow-hidden shadow-xl">

          <Swiper
            modules={[Autoplay]}
            speed={1300}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            className="h-full w-full"
          >


            {slides.map((slide, idx) => (
              <SwiperSlide key={idx} className="relative h-full w-full">

                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover rounded-[2.5rem]"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-[#3F3533]/90 via-[#3F3533]/50 to-transparent" />

                {/* Text Content */}
                <div className="absolute inset-0 flex items-center justify-start flex-col pt-12 sm:pt-20 px-4">

                  <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-[#F8E9D9] text-center leading-tight max-w-[90%] md:max-w-4xl">
                    {slide.title}

                    <p className="text-[12px] md:text-base lg:text-lg xl:text-xl font-semibold text-[#F8E9D9]/90 text-center w-[85%] md:w-[80%] mx-auto mt-1 leading-relaxed">
                      Coworking & Flexible Office Marketplace | Search & Book Today
                    </p>

                  </h1>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* === Floating Search Box === */}
        <div className="max-w-5xl mx-auto -mt-7 md:-mt-21 relative z-40 px-1.5 sm:px-4">

          <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 md:p-8 border border-gray-100">

            {/* === Category Tabs === */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">

              {categories.map((cat) => {

                const isActive = activeTab === cat.label;

                return (
                  <button
                    key={cat.label}
                    onClick={() => setActiveTab(cat.label)}
                    className={`flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 cursor-pointer py-2.5 px-2 rounded-2xl transition-all duration-300 border ${isActive
                        ? "bg-[#2D4F2E] text-white border-[#2D4F2E] shadow-md"
                        : "bg-[#F3F7F3] text-gray-500 border-transparent hover:bg-gray-100"
                      }`}
                  >

                    {/* Category Icon */}
                    <div
                      className={`relative w-5 h-5 md:w-6 md:h-6 ${isActive ? "brightness-0 invert" : ""
                        }`}
                    >
                      <Image
                        src={cat.image}
                        alt={cat.label}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Category Label */}
                    <span className="text-[11px] sm:text-xs md:text-base font-bold whitespace-nowrap">
                      {cat.label}
                    </span>

                  </button>
                );
              })}

            </div>

            {/* === Search Bar === */}
            <div className="flex items-center bg-[#F3F7F3] rounded-[20px] md:rounded-[30px] p-1.5 md:p-2 border border-gray-100 shadow-inner">

              {/* Search Input */}
              <div className="flex items-center flex-1 px-4 md:px-5">
                <FaSearch className="hidden md:block h-5 w-5 text-gray-400 mr-4 shrink-0" />

                <input
                  type="text"
                  placeholder="Search Here..."
                  className="w-full bg-transparent text-gray-700 placeholder:text-gray-400 outline-none text-sm md:text-lg font-medium"
                />
              </div>

              {/* Search Button */}
              <button className="bg-[#2D4F2E] text-white flex items-center justify-center transition-all active:scale-95 shadow-md w-10 h-10 rounded-xl md:w-auto md:h-auto md:px-12 md:py-3 md:rounded-[25px]">

                <FaSearch className="block md:hidden h-4 w-4" />

                <span className="hidden md:flex items-center gap-2 font-bold text-lg">
                  Search
                </span>

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;