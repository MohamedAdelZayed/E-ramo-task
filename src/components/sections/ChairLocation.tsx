import Image from 'next/image';

const ChairLocationSectionHover = () => {

  const cards = [
    {
      title: "Shared Area Places",
      desc: "A shared area in Jeddah in Chair Location Co-Working space is a communal workspace or facility designed for use by multiple members.",
      img: "/images/office-1.jpg"
    },
    {
      title: "Dedicated Desk",
      desc: "Our dedicated desks in Chair Location branch in Jeddah is a desk in a communal office space that's set aside just for you.",
      img: "/images/office-2.jpg"
    },
    {
      title: "Offices for rent",
      desc: "If you need to work privately in your own office with your employees without the hassle of operating, a private office would be a great option.",
      img: "/images/office-3.jpg"
    }
  ];
  return (

    <section className="bg-white py-12 px-4">
      <div className="max-w-315 mx-auto px-3 md:px-12 relative">

        {/* Header Section */}
        <h1 className="text-3xl font-semibold text-center text-gray-700 capitalize">
          Chair Location Coworking space for you
        </h1>
        <div className="text-gray-500 text-xs text-center max-w-[90%] m-auto mt-3">
          <p>
            Chair Location Coworking space offers you the freedom to work closer to clients, colleagues or home.
            It&apos;s also greener and more cost-effective. With over 40 luxury offices, nobody is better placed
            than Chair Location to help you make the best of it.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-8 gap-4">
          {cards.map((card, index) => (

            <div
              key={index}
              className="group w-full relative overflow-hidden cursor-pointer rounded-3xl h-57.5 lg:h-70"
            >

              <Image
                src={card.img}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700"
              />

              {/* Full Overlay */}
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white p-4 transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-3">{card.title}</h2>

                  <p className="text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {card.desc}
                  </p>
                </div>
              </div>

            </div>

          ))}
        </div>

      </div>
    </section>
  );
};

export default ChairLocationSectionHover;