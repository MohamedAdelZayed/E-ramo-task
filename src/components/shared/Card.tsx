import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaRegHeart, FaUser, FaChevronRight } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";

interface ListingCardProps {
  item: {
    id: number;
    title: string;
    category: string;
    image: string;
    price: string;
    unit: string;
    capacity: string;
    status: string;
    desc: string;
    link: string;
    review?: string;
  };
}

const Card = ({ item }: ListingCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group h-full flex flex-col">
      
      {/* Image Container with Diagonal Badge & Dark Green Overlay */}
      <div className="relative h-55 w-full overflow-hidden group cursor-pointer">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#365327]/60 via-[#365327]/30 to-transparent transition-all duration-300 group-hover:bg-[#365327]/50 z-10">
          {/* أيقونة العين تظهر في المنتصف عند الهوفر */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 24 24" height="35" width="35" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.576 10.846 6.649 7 12 7s7.424 3.846 7.926 5c-.502 1.154-2.575 5-7.926 5z"></path>
            </svg>
          </div>
        </div>

        {/* Diagonal Status Badge */}
        <div className="absolute top-0 left-0 overflow-hidden w-32 h-32 pointer-events-none z-20">
          <div className={`absolute top-6 -left-10 w-40 py-1 text-center text-[10px] font-bold uppercase tracking-wider transform -rotate-45 shadow-sm
            ${item.status === 'Available' ? 'bg-[#A7BC9D]/90 text-[#1a1a1a]' : 'bg-[#AE5B5B]/90 text-white'}`}>
            {item.status}
          </div>
        </div>

        {/* Top Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 z-30">
          <button className="p-2.5 cursor-pointer bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:bg-[#597e46] hover:text-white transition-all shadow-sm">
            <FiShare2 className="w-4 h-4" />
          </button>
          <button className="p-2.5 cursor-pointer bg-white/90 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-all shadow-sm">
            <FaRegHeart className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="px-5 py-3.5 flex flex-col flex-1">
        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold text-[#597e46] uppercase tracking-wide">
            {item.category}
          </span>
          <div className="flex items-center gap-1 text-[11px] text-gray-400">
            <FaStar className="text-yellow-400" />
            <span className="font-medium text-gray-600">{item.review || "0"} (Review)</span>
          </div>
        </div>

        {/* Title */}
        <Link href={item.link}>
          <h3 className="font-bold text-[#1a1a1a] mb-2 line-clamp-1 hover:text-[#597e46] transition-colors">
            {item.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-[13px] text-gray-500 leading-relaxed mb-6 line-clamp-2 min-h-10">
          {item.desc}
        </p>

        {/* Specs Section - Pushed to bottom */}
        <div className="mt-auto">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
            <div className="flex items-center gap-2 text-gray-500">
              <div className="p-1 bg-gray-50 rounded">
                <FaUser className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-semibold">{item.capacity}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#597e46]">
              <MdOutlineWatchLater className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">Open</span>
            </div>
          </div>

          {/* Footer: Price & Arrow */}
          <div className="flex items-center justify-between pt-1">
            <div className="text-[11px] text-gray-500 font-medium">
              Starts From:
              <span className="text-[#1a1a1a] font-black ml-1">
                {item.price} SAR
              </span>
              <span className="text-gray-400 font-normal">/{item.unit}</span>
            </div>

            <Link
              href={item.link}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-50 text-[#597e46] border border-gray-100 group-hover:bg-[#597e46] group-hover:text-white transition-all shadow-sm overflow-hidden"
            >
              <FaChevronRight className="w-3 h-3 animate-[hover-arrow_1.5s_infinite]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;