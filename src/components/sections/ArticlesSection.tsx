import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ArticlesSection = () => {
  const articles = [
    {
      id: 0,
      title: "Top 10 Meeting Room Locations In Jeddah: Your Comprehensive Guide To A Professional Work Environment",
      date: "2026-03-10 2:53 PM",
      desc: "Discover the top 10 places offering meeting rooms in Jeddah, and learn about the leading services of",
      image: "/images/recent-1.jpg",
      link: "/en/blogs/top-10-meeting-room-locations-in-jeddah"
    },
    {
      id: 1,
      title: "Best Places for Meeting Rooms in Jeddah",
      date: "2026-03-09 12:42 PM",
      desc: "Discover the best places for meeting rooms in Jeddah with Chair Location. Book conference rooms, cow",
      image: "/images/recent-2.png",
      link: "/en/blogs/best-places-for-meeting-rooms-in-jeddah"
    },
    {
      id: 2,
      title: "Best Private Office in Jeddah 2026: A New Era for Business",
      date: "2026-03-04 12:12 PM",
      desc: "Discover the ultimate guide to finding the best private office in Jeddah for 2026. Explore the benef",
      image: "/images/recent-3.png",
      link: "/en/blogs/best-private-office-in-jeddah-2026-a-new-era-for-business"
    }
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-328.75 mx-auto px-3 md:px-12 relative">

        {/* Header Section */}
        <div className="flex items-start justify-between px-4">
          <div className="mb-5">
            <h1 className="text-base md:text-3xl text-black">Our Recent Articles</h1>
            <p className="text-[11px] md:text-sm text-gray-500">Stay Informed with Our Latest Insights</p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center static-direction">
            <button className="flex items-center justify-center cursor-pointer bg-[#2D4A27] text-white hover:bg-transparent border-2 border-[#2D4A27] hover:text-[#2D4A27] transition w-10 h-10 rounded-md mr-3 group">
              <HiOutlineArrowNarrowLeft className="text-2xl" />
            </button>
            <button className="flex items-center justify-center cursor-pointer bg-[#2D4A27] text-white hover:bg-transparent border-2 border-[#2D4A27] hover:text-[#2D4A27] transition w-10 h-10 rounded-md ml-3">
              <HiOutlineArrowNarrowRight className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Articles Grid (Slick Slider Mockup) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
          {articles.map((item) => (
            <div key={item.id} className="p-4 w-full">
              <div className="h-full overflow-hidden rounded-xl border border-gray-100 transition-all">

                {/* Image */}

                <Link href={item.link} className="block relative overflow-hidden rounded-xl h-48 md:h-36 lg:h-48 w-full">
                  <Image
                    alt="blog"
                    src={item.image}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                </Link>



                {/* Content */}
                <div className="p-3 mt-3">
                  <div>
                    <h1 className="capitalize text-base font-semibold text-gray-900 mb-3 lineclamp-2">
                      <a href={item.link} className="hover:text-[#2D4A27] transition-colors">
                        {item.title}
                      </a>
                    </h1>
                    <p className="text-xs text-gray-400 mb-3">{item.date}</p>
                  </div>
                  <p className="leading-relaxed text-xs xl:text-sm mb-3 overflow-hidden text-gray-600 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <button
            className="relative overflow-hidden bg-[#2D4A27] cursor-pointer border hover:bg-white hover:text-[#345125] hover:border-[#345125] text-white px-8 py-2.5 text-sm md:text-base capitalize rounded font-bold hover:shadow-lg transition-all duration-300 active:scale-95"
            type="button"
          >
            View all news
          </button>
        </div>

      </div>
    </section>
  );
};

export default ArticlesSection;