import React from 'react';
import Image from 'next/image'; // استيراد مكون Image
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineGlobeAlt } from 'react-icons/hi';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from 'react-icons/fa';

const ContactUsSection = () => {
  return (
    <section className="bg-white py-12 px-4">

      <div className="max-w-328.75 mx-auto px-3 md:px-12 relative">

        <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 border-b border-gray-200 pb-5">

          {/* الجانب الأيسر: معلومات التواصل */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-black mb-1">Contact Us</h2>
            <p className="text-sm text-gray-500 mb-10">We Are Here For Your Help</p>

            <div className="space-y-6">
              {/* العنوان */}
              <div className="flex items-start gap-4 text-gray-600">
                <HiOutlineLocationMarker className="text-2xl text-[#2D4A27] shrink-0" />
                <span className="text-sm md:text-base leading-relaxed">
                  Address: Saad Al-Junaidel Street, Jarir Building, Sari Branch, Jeddah
                </span>
              </div>

              {/* الهاتف */}
              <div className="flex items-center gap-4 text-gray-600">
                <HiOutlinePhone className="text-2xl text-[#2D4A27] shrink-0" />
                <span className="text-sm md:text-base">+9660540581086</span>
              </div>

              {/* الإيميل */}
              <div className="flex items-center gap-4 text-gray-600">
                <HiOutlineMail className="text-2xl text-[#2D4A27] shrink-0" />
                <span className="text-sm md:text-base">info@chairlocation.com</span>
              </div>

              {/* الموقع */}
              <div className="flex items-center gap-4 text-gray-600">
                <HiOutlineGlobeAlt className="text-2xl text-[#2D4A27] shrink-0" />
                <span className="text-sm md:text-base">www.chairlocation.com</span>
              </div>
            </div>

            {/* أيقونات التواصل الاجتماعي */}
            <div className="mt-12">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Follow us</h3>
              <div className="flex gap-5">
                <a href="#" className="text-gray-400 hover:text-[#2D4A27] transition-all transform hover:scale-110">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#2D4A27] transition-all transform hover:scale-110">
                  <FaLinkedinIn size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#2D4A27] transition-all transform hover:scale-110">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#2D4A27] transition-all transform hover:scale-110">
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* الجانب الأيمن: الفورم */}
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-[#EEEEEE] border-none rounded-lg p-4 outline-none focus:ring-1 focus:ring-[#2D4A27] text-gray-700 placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#EEEEEE] border-none rounded-lg p-4 outline-none focus:ring-1 focus:ring-[#2D4A27] text-gray-700 placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-[#EEEEEE] border-none rounded-lg p-4 outline-none focus:ring-1 focus:ring-[#2D4A27] text-gray-700 placeholder-gray-400"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full bg-[#EEEEEE] border-none rounded-lg p-4 outline-none focus:ring-1 focus:ring-[#2D4A27] text-gray-700 placeholder-gray-400 resize-none"
            ></textarea>

            <div className="bg-[#f9f9f9] border border-gray-200 rounded p-3 flex items-center justify-between max-w-75">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-gray-300 bg-white rounded shrink-0 cursor-pointer"></div>
                <span className="text-[13px] text-gray-600 font-medium">Je ne suis pas un robot</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-7 h-7">
                  <Image
                    src="/images/recaptchaLogo.png"
                    alt="reCAPTCHA"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] text-gray-400">reCAPTCHA</span>
              </div>
            </div>

            {/* زر الإرسال */}
            <div className="flex justify-end pt-2">
              <button className="bg-[#A7B59F] text-white px-14 py-3 rounded-lg font-bold hover:bg-[#2D4A27] transition-all duration-300 active:scale-95 shadow-sm cursor-pointer">
                Send
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;