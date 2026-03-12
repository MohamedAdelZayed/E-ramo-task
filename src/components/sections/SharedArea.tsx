import Card from "../shared/Card";
import SectionHeader from "../shared/SectionHeader";

const Listings = [
  {
    id: 1,
    title: "Shared Coworking Spaces",
    category: "Shared Area",
    image: "/images/shared.jpg",
    price: "17.25",
    unit: "Hour",
    capacity: "22 Person",
    status: "Available",
    desc: "Stop going to Coffee shops to accomplish your work, they are always crowded and noisy,",
    link: "/en/shared-area/shared-coworking-spaces"
  },
];

const SharedArea = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 px-4">
      <div className="max-w-315 mx-auto px-2 md:px-12 relative">
        
        {/* استخدام المكون الموحد للهيدر */}
        <SectionHeader 
          title="Shared Area In Jeddah" 
          subtitle="Check our latest listings" 
          />

        {/* Grid عرض الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {Listings.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SharedArea;
