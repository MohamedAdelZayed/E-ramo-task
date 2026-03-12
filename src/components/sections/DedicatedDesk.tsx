

import Card from "../shared/Card";
import SectionHeader from "../shared/SectionHeader";

const Listings = [
  {
    id: 1,
    title: "01 Dedicated desk",
    category: "Dedicated Desk",
    image: "/images/img-2.jpg",
    price: "75.00",
    unit: "Day",
    capacity: "1 Person",
    status: "Available",
    review: "0",
    desc: "Our dedicated desk offers professional, private, permanent workspace within our shared-area which p...",
    link: "/en/dedicated-desk/01-dedicated-desk"
  },
  {
    id: 2,
    title: "02 Dedicated desk",
    category: "Dedicated Desk",
    image: "/images/img-2.jpg",
    price: "75.00",
    unit: "Day",
    capacity: "1 Person",
    status: "Available",
    review: "0",
    desc: "Our dedicated desk offers professional, private, permanent workspace within our shared-area which p...",
    link: "/en/dedicated-desk/02-dedicated-desk"
  },
  {
    id: 3,
    title: "03 Dedicated desk",
    category: "Dedicated Desk",
    image: "/images/desk-3.jpg",
    price: "75.00",
    unit: "Day",
    capacity: "1 Person",
    status: "Available",
    review: "0",
    desc: "Our dedicated desk offers professional, private, permanent workspace within our shared-area which p...",
    link: "/en/dedicated-desk/03-dedicated-desk"
  },
  {
    id: 4,
    title: "04 Dedicated desk",
    category: "Dedicated Desk",
    image: "/images/desk-4.jpg",
    price: "75.00",
    unit: "Day",
    capacity: "1 Person",
    status: "Not Available",
    review: "0",
    desc: "Our dedicated desk offers professional, private, permanent workspace within our shared-area which p...",
    link: "/en/dedicated-desk/04-dedicated-desk"
  }
];

const DedicatedDesk = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 px-4">
      <div className="max-w-315 mx-auto px-2 md:px-12 relative">
        
        <SectionHeader 
          title="Dedicated Desk In Jeddah" 
          subtitle="Check our latest listings" 
        />

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {Listings.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default DedicatedDesk;
