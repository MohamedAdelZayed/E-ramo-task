
import Card from "../shared/Card";
import SectionHeader from "../shared/SectionHeader";

const Listings = [
  {
    id: 1,
    title: "Lawyer Private Office 01",
    category: "Private Office",
    image: "/images/img-3.jpg",
    price: "2,799.00",
    unit: "Month",
    capacity: "1 Person",
    status: "Available",
    review: "0",
    desc: "Being Lawyer is a very critical job, your clients need quiet private office to confess and to exp...",
    link: "/en/private-office/lawyer-private-office-01"
  },
  {
    id: 2,
    title: "Triple or Quadrable private office 11",
    category: "Private Office",
    image: "/images/img-4.jpg",
    price: "6,499.00",
    unit: "Month",
    capacity: "3 Person",
    status: "Not Available",
    review: "0",
    desc: "Elevate your team's productivity in our modern, inspiring 3 or 4-person office. Perfectly designe...",
    link: "/en/private-office/private-triple-office"
  },
  {
    id: 3,
    title: "03 Double private office",
    category: "Private Office",
    image: "/images/doubleOffice.jpg",
    price: "3,799.00",
    unit: "Month",
    capacity: "2 Person",
    status: "Not Available",
    review: "0",
    desc: "If you need to have your own office but can't afford the high rent costs, Enjoy our private...",
    link: "/en/private-office/double-office-03"
  },
  {
    id: 4,
    title: "05 Double private office",
    category: "Private Office",
    image: "/images/doubleOffice.jpg",
    price: "3,799.00",
    unit: "Month",
    capacity: "2 Person",
    status: "Not Available",
    review: "0",
    desc: "If you need to have your own office but can't afford the high rent costs, Enjoy our private...",
    link: "/en/private-office/double-office-05"
  }
];

const PrivateOffices = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 px-4">
      <div className="max-w-315 mx-auto px-2 md:px-12 relative">
        
        <SectionHeader 
          title="Private Office In Jeddah" 
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

export default PrivateOffices;
