import { FaChevronRight } from "react-icons/fa";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle = "Check our latest listings" }: SectionHeaderProps) => {
  return (
    <div className="w-full flex items-start justify-between mb-10 max-w m-auto">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold mb-1">{title}</h1>
        <p className="text-xs md:text-sm text-gray-500">{subtitle}</p>
      </div>

      <button className="cursor-pointer flex items-center group">
        <span className="hover:underline text-sm md:text-base font-semibold">Show More</span>
        <FaChevronRight className="w-3 h-3 animate-[hover-arrow_1.5s_infinite]" />
      </button>
    </div>
  );
};

export default SectionHeader;