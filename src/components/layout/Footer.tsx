import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaApple
} from 'react-icons/fa';
import { HiOutlineMap } from "react-icons/hi";


const Footer = () => {

  const categories: any[] = [
    { image: "/images/space.svg", label: "Shared Area", active: true },
    { image: "/images/officies.svg", label: "Private Office", active: false },
    { image: "/images/meeting.svg", label: "Meeting Room", active: false },
    { image: "/images/desk.svg", label: "Dedicated Desk", active: false },
    { icon: <HiOutlineMap size={20} className="text-[#2D4A27]" />, label: "Sitemap", active: false, isIcon: true },
  ];


  return (
    <footer className="bg-[#F9F9F9] pt-16 pb-4 border-t border-gray-100">
      <div className="max-w-315 mx-auto px-4 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* العمود الأول: Logo & Social */}
          <div className="space-y-6">
            <div className="relative w-37.5 h-17.5 mx-auto lg:mx-0">
              <Image
                src="/images/logo.png"
                alt="Chair Location"
                fill
                className="object-contain"
              />
            </div>

            <div className="grid grid-cols-3 gap-y-3 justify-center items-center text-center lg:text-start w-full">
              <a
                target="_blank"
                href="http://facebook.com/chairlocationcom"
                className="text-[#717A76] transition hover:text-[#2D4A27] hover:scale-125"
              >
                <FaFacebookF className="text-xl mx-auto lg:mx-0" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/chair-location"
                className="text-[#717A76] transition hover:text-[#2D4A27] hover:scale-125"
              >
                <FaLinkedinIn className="text-xl mx-auto lg:mx-0" />
              </a>
              <a
                target="_blank"
                href="http://instagram.com/chairlocation.sa"
                className="text-[#717A76] transition hover:text-[#2D4A27] hover:scale-125"
              >
                <FaInstagram className="text-xl mx-auto lg:mx-0" />
              </a>
              <a
                target="_blank"
                href="https://tiktok.com/@chairlocation"
                className="text-[#717A76] transition hover:text-[#2D4A27] hover:scale-125"
              >
                <FaTiktok className="text-xl mx-auto lg:mx-0" />
              </a>
            </div>
          </div>

          {/* العمود الثاني: Main Pages */}
          <div>
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-6">Main Pages</h3>
            <ul className="space-y-4 text-sm text-[#4D4D4D]">
              <li><Link href="#" className="hover:text-[#2D4A27]">Home</Link></li>
              <li><Link href="#" className="hover:text-[#2D4A27]">About</Link></li>
              <li><Link href="#" className="hover:text-[#2D4A27]">Products</Link></li>
              <li><Link href="#" className="hover:text-[#2D4A27]">How It Works</Link></li>
              <li><Link href="#" className="hover:text-[#2D4A27]">Membership</Link></li>
              <li><Link href="#" className="hover:text-[#2D4A27]">Contact Us</Link></li>
            </ul>
          </div>

          {/* العمود الثالث: Products */}
          <div>
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-6">Products</h3>

            <ul className="space-y-4 text-sm text-[#4D4D4D]">
              {categories.map((category, index) => (
                <li key={index} className="flex items-center gap-2 group">
                  {category.isIcon ? (
                    <span className="group-hover:scale-110 transition-transform">
                      {category.icon}
                    </span>
                  ) : (
                    <Image
                      src={category.image}
                      alt={category.label}
                      width={18}
                      height={18}
                      className="grayscale group-hover:grayscale-0 transition-all"
                    />
                  )}
                  <Link
                    href="#"
                    className={`transition-colors ${category.active ? 'text-[#2D4A27] font-semibold' : 'hover:text-[#2D4A27]'}`}
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الرابع: Download App */}
          <div>
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-6 text-nowrap">Download Chair Location App</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center bg-[#E5E7EB] gap-3 px-4 py-2 rounded-lg border border-gray-900 hover:shadow-md transition-shadow">
                <Image src="/images/googlePlay.svg" alt="Google Play" width={24} height={24} className="w-6 h-6" />
                <div className="text-left">
                  <span className="block text-[10px] leading-none text-gray-600">Download on</span>
                  <span className="block text-sm font-bold text-black">Google Play</span>
                </div>
              </a>
              <a href="#" className="flex items-center bg-[#E5E7EB] gap-3 px-4 py-2 rounded-lg border border-gray-900 hover:shadow-md transition-shadow">
                <FaApple className="w-6 h-6 text-black" />
                <div className="text-left">
                  <span className="block text-[10px] leading-none text-gray-600">Download on</span>
                  <span className="block text-sm font-bold text-black">App Store</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col lg:flex-row items-start md:items-center lg:justify-between gap-1">
          <ul className="text-[11px] capitalize grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-2 lg:gap-1.25 text-left lg:text-center whitespace-nowrap text-black font-semibold">
            <li><a className="font-bold hover:underline" href="/en/privacy-policy">Privacy & Policy</a></li>
            <li><a className="font-bold hover:underline" href="/en/terms-conditions">Terms & Conditions</a></li>
            <li><a className="hover:underline" href="/en/coworking-spaces">Coworking Spaces</a></li>
            <li><a className="hover:underline" href="/en/offices-for-rent">Offices for rent</a></li>
            <li><a className="hover:underline" href="/en/shared-area">Shared Area</a></li>
            <li><a className="hover:underline" href="/en/dedicated-desk">Dedicated Desk</a></li>
          </ul>
          <div className="flex flex-col md:flex-row gap-1 text-[11px] whitespace-nowrap text-[#808080]">
            <p>© 2026 All Copyrights Chair Location |</p>
            <p>
              Developed by
              <a href="https://e-ramo.net/" target="_blank" className="text-[14px] hover:underline ml-1 text-black font-bold">
                e-RAMO For Digital Solutions
              </a>
            </p>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;