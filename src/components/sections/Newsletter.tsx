import Image from 'next/image';
import { LuSendHorizontal } from "react-icons/lu";

const Newsletter = () => {
  return (
    <section className=" py-16 px-4 overflow-hidden relative">
      
      <div className="max-w-328.75 mx-auto px-3 md:px-12 relative text-center ">
                
        <span className="w-7.5 h-7.5 md:w-11.25 md:h-11.25 bg-[#E7CAAA] rounded-lg flex items-center justify-center absolute right-3 md:right-24 md:top-5 -top-10 lg:top-14 animate-spin-slow z-0">
          <Image 
            alt="decoration" 
            src="/images/decore.svg" 
            width={30} 
            height={30} 
            className="w-auto h-auto"
          />
        </span>

        <span className="w-7.5 h-7.5 md:w-11.25 md:h-11.25 bg-[#E7CAAA] rounded-lg flex items-center justify-center absolute left-3 md:left-24 md:top-5 -top-10 lg:top-14 animate-spin-slow z-0">
          <Image 
            alt="decoration" 
            src="/images/decore.svg" 
            width={30} 
            height={30} 
            className="w-auto h-auto"
          />
        </span>

        {/* --- محتوى القسم الرئيسي --- */}
        <div className="mb-8 relative z-10">
          <h1 className="text-2xl font-semibold text-center mb-2">Subscribe To Our Newsletter</h1>
          <p className="text-[#717A76] max-w-121.25 text-center mx-auto">
            Every couple of weeks we send out an update and a few things that have inspired us.
          </p>
        </div>

        {/* حقل الإدخال والزر */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-2xl mx-auto relative z-10">
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Write Your Mail Here..."
              className="w-full bg-white border border-gray-200 rounded-lg px-6 py-2.5 outline-none focus:ring-1 focus:ring-[#2D4A27] text-gray-700 placeholder-gray-400 shadow-sm"
            />
          </div>
          
          <button
            className="bg-[#345125] text-white px-8 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 whitespace-nowrap hover:bg-[#253a1b] transition-all cursor-pointer shadow-md group w-full md:w-auto"
          >
            Subscribe
            <LuSendHorizontal className="text-xl group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </section>
  );
};

export default Newsletter;