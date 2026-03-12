import Card from "../shared/Card";
import SectionHeader from "../shared/SectionHeader";

const Listings = [
  {
    id: 1,
    title: "Small Meeting Room",
    category: "Meeting Room",
    image: "/images/img-1.jpg",
    price: "57.50",
    unit: "Hour",
    capacity: "4 Person",
    status: "Available",
    desc: "A cozy, quiet space designed for focused studying or small meetings. This room comfortably seats ...",
    link: "/en/meeting-room/small-meeting-room"
  },
  {
    id: 2,
    title: "Lawyer Private Office 01",
    category: "Private Office",
    image: "/images/img-2.jpg",
    price: "2,799.00",
    unit: "Month",
    capacity: "1 Person",
    status: "Available",
    desc: "Being Lawyer is a very critical job, your clients need quiet private office to confess and to exp...",
    link: "/en/private-office/lawyer-private-office-01"
  },
  {
    id: 3,
    title: "Triple or Quadrable private office 11",
    category: "Private Office",
    image: "/images/img-3.jpg",
    price: "6,499.00",
    unit: "Month",
    capacity: "3 Person",
    status: "Not Available",
    desc: "Elevate your team's productivity in our modern, inspiring 3 or 4-person office. Perfectly designe...",
    link: "/en/private-office/private-triple-office"
  },
  {
    id: 4,
    title: "01 Dedicated desk",
    category: "Dedicated Disk",
    image: "/images/img-4.jpg",
    price: "75.00",
    unit: "Day",
    capacity: "1 Person",
    status: "Available",
    desc: "Our dedicated desk offers professional,private,permanent workspace within our shared-area which p...",
    link: "/en/dedicated-disk/01-dedicated-desk"
  }
];

const LatestLists = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 px-4">
      <div className="max-w-315 mx-auto px-2 md:px-12 relative">
        
        <SectionHeader 
          title="Latest Listings In Jeddah" 
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

export default LatestLists;
