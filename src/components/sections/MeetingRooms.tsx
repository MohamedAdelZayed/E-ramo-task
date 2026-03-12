

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
    review: "0",
    desc: "A cozy, quiet space designed for focused studying or small meetings. This room comfortably seats ...",
    link: "/en/meeting-room/small-meeting-room"
  },
  {
    id: 2,
    title: "Lecture Room",
    category: "Meeting Room",
    image: "/images/shared-2.jpg",
    price: "230.00",
    unit: "Hour",
    capacity: "30 Person",
    status: "Available",
    review: "0",
    desc: "Interactive sessions are the perfect way of delivering a lecture, Enjoy our Lecture room ...",
    link: "/en/meeting-room/lecture-room"
  },
  {
    id: 3,
    title: "Master Meeting Room",
    category: "Meeting Room",
    image: "/images/shared-3.jpg",
    price: "138.00",
    unit: "Hour",
    capacity: "12 Person",
    status: "Available",
    review: "5",
    desc: "If you fail to plan, so you are planning to fail, It's all about good planning, Enjoy our...",
    link: "/en/meeting-room/master-meeting-room"
  },
  {
    id: 4,
    title: "Luxury Meeting Room",
    category: "Meeting Room",
    image: "/images/shared-4.jpg",
    price: "172.50",
    unit: "Hour",
    capacity: "8 Person",
    status: "Available",
    review: "0",
    desc: "Creativity and brainstorming meeting room with 8 person capacity, Enjoy your ultima...",
    link: "/en/meeting-room/luxury-meeting-room"
  }
];

const MeetingRooms = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 px-4">
      <div className="max-w-315 mx-auto px-2 md:px-12 relative">
        
       {/* الهيدر  */}
        <SectionHeader 
          title="Meeting Room In Jeddah" 
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

export default MeetingRooms;
