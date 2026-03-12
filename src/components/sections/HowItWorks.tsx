import Image from 'next/image';

 const HowItWorks = () => {

    const steps = [
    {
        number: 1,
        title: "Book, Reach or Call",
        image: "/images/how-3.jpg",
        description: "Search on your beloved office that fits your needs, then book it.",
    },
    {
        number: 2,
        title: "Office That Fit You",
        image: "/images/how-2.jpg",
        description: "You can choose from many varieties office that fits your needs.",
    },
    {
        number: 3,
        title: "Book your Coworking space",
        image: "/images/how-1.png",
        description: "Book your Coworking space in modern place.",
    },
    ];


    return (

     <section className="text-gray-600 py-12 px2">
      <div className="max-w-315 mx-auto px-3 md:px-12 relative">

        {/* Header Section */}
        <div className="text-center pb-5 w-full">
            <h1 className="text-gray-900 font-medium title-font text-3xl mb-4 w-full">
            How It Works
            </h1>
            <div className="max-w-full md:max-w-[80%] text-center lg:max-w-[50%] m-auto text-sm">
            <p>Coworking & Flexible Office Marketplace | Search & Book Today</p>
            </div>
        </div>

        {/* Steps Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 lg:gap-16 items-end">
    {steps.map((step) => (
        <div
        key={step.number}
        className={`group p-4 mb6 md:mb-0 w-full hover:scale-105 transition duration-300 cursor-pointer`}
        >
        {/* Step Number & Title */}
        <div className="mb-5">
            <p className="text-sm font-medium flex items-center justify-start">
            <span className="w-7 h-7 flex items-center justify-center rounded-full mx-2 bg-[#E7CAAA] text-gray-700">
                {step.number}
            </span>
                {step.title}
            </p>
        </div>

        {/* Image Container */}
        <div className="relative w-full h-55 rounded-xl overflow-hidden shadow-sm">
          <Image
            alt={step.title}
            src={step.image}
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
            className="object-cover object-center"
            priority={false} 
          />
       </div>

        {/* Description */}
        <div className="text-xs text-center p-2 leading-relaxed mt-1.5 overflow-hidden">
            <p>{step.description}</p>
         </div>

        </div>
    ))}
    </div>

    </div>

        </section>
    );
    };

    export default HowItWorks;