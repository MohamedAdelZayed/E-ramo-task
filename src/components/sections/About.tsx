import Image from 'next/image';
import { FaCheck } from "react-icons/fa";

export default function About() {

  return (
    <section className="py-10 md:py-20" id="about">

      <div className="max-w-315 mx-auto px-3 md:px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Text Content Column */}
          <div className="px-2 flex flex-col justify-between">

            <div>

              <h1 className="text-3xl font-semibold mb-2 text-gray-900">About Chair Location</h1>

              <div className="w-full md:max-w-[90%] text-xs md:text-sm text-gray-700 leading-relaxed">

                <p>
                  Chair location is a website/mobile app where you can search, find and reserve co-working space,
                  including co-working offices, private offices, meeting rooms, and virtual offices in Jeddah near you.
                </p>

                <h2 className="text-lg font-bold my-2">How Chair Location Works</h2>

                <p>
                  <strong>Chair Location</strong> is a platform designed to connect individuals and businesses looking
                  for flexible workspaces with providers of these spaces. Think of it as a digital &quot;marketplace&quot; where
                  you can browse, compare, and book the space that perfectly suits your needs.
                </p>

                <h3 className="text-base font-bold my-2.5">The Search and Booking Process</h3>

                <ol className="list-decimal pl-5 space-y-1">
                  <li><strong>Search:</strong> Your experience begins by searching for &quot;coworking spaces in Jeddah&quot; or any other city the platform supports.</li>
                  <li><strong>Browse and Compare:</strong> A list of available spaces matching your search will appear.</li>
                  <li><strong>Book:</strong> Once you&apos;ve chosen the right space, the platform offers a simple and direct booking process.</li>
                </ol>


                <h3 className="font-bold my-2">Who is Chair Location For?</h3>

                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Freelancers and Entrepreneurs:</strong> Who need a professional work environment away from home.</li>
                  <li><strong>Startups:</strong> Looking for flexibility and lower operational costs compared to traditional offices.</li>
                  <li><strong>Small Teams:</strong> Who need a place to meet or work on specific projects.</li>
                  <li><strong>Business Travelers:</strong> Who require a place to work while in Jeddah.</li>
                </ul>

                <p className="my-3">
                  In short, <strong>Chair Location</strong> acts as a bridge, quickly and easily connecting you to the space you need to work effectively in Jeddah.
                </p>

              </div>

            </div>

            {/* Why Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Why Chair Location</h3>
              <div className="space-y-3">
                {[
                  "We Offer All Amenities in Our All Location",
                  "All Kinds Of Support 24/7",
                  "Choose from 40 Offices"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                    <span className="flex items-center justify-center w-5 h-5 bg-[#E8CDAE] text-white rounded-full shrink-0 shadow-sm">
                      <FaCheck className="text-[12px] text-gray-700" />
                    </span>
                    {text}
                  </div>
                ))}
              </div>



            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-6">

              <button className="group relative px-10 py-3 cursor-pointer border border-[#365327] rounded-lg text-sm font-bold text-[#365327] overflow-hidden transition-all shadow-sm">

                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  Contact Us
                </span>

                <span className="absolute top-0 left-0 h-full w-[150%] bg-[#365327] skew-x-[-30deg] -translate-x-[115%] group-hover:-translate-x-[15%] transition-transform duration-500 ease-out"></span>

              </button>

              <button className="group relative px-10 py-3 cursor-pointer bg-[#34492E] text-white rounded-lg text-sm font-bold overflow-hidden transition-all shadow-md border border-[#34492E]">

                <span className="relative z-10 group-hover:text-[#34492E] transition-colors duration-500">
                  Book Now
                </span>

                <span className="absolute top-0 left-0 h-full w-[150%] bg-white skew-x-[-30deg] -translate-x-[115%] group-hover:-translate-x-[15%] transition-transform duration-500 ease-out"></span>

              </button>

            </div>

          </div>

          {/* Images Column */}
          <div className="flex flex-col space-y-3">
            <Image
              alt="about-3"
              src="/images/about-3.jpg"
              width={400}
              height={300}
              className="w-full h-auto rounded-2xl md:h-45 object-cover"
            />
            <Image
              alt="about-1"
              src="/images/about-1.jpg"
              width={400}
              height={300}
              className="w-full h-auto rounded-2xl md:h-45 object-cover"
            />
            <Image
              alt="about-2"
              src="/images/about-2.jpg"
              width={400}
              height={300}
              className="w-full h-auto rounded-2xl md:h-45 object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  );

};



