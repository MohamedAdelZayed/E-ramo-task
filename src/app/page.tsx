import About from "../components/sections/About";
import ArticlesSection from "../components/sections/ArticlesSection";
import ChairLocation from "../components/sections/ChairLocation";
import ContactUs from "../components/sections/ContactUs";
import DedicatedDesk from "../components/sections/DedicatedDesk";
import ExploreApp from "../components/sections/ExploreApp";
import HeroSection from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import LatestLists from "../components/sections/LatestLists";
import MeetingRooms from "../components/sections/MeetingRooms";
import Membership from "../components/sections/Membership";
import Newsletter from "../components/sections/Newsletter";
import PricingSection from "../components/sections/PricingSection";
import PrivateOffices from "../components/sections/PrivateOffices";
import SharedArea from "../components/sections/SharedArea";
import SharedCoworking from "../components/sections/SharedCoworking";

export default function Home() {
  return (
     <div className="min-h-screen bg-background">
      <HeroSection />
      <About/>
      <LatestLists/>
      <SharedArea/>
      <MeetingRooms/>
      <PrivateOffices/>
      <DedicatedDesk/>
      <SharedCoworking/>
      <HowItWorks/>
      <ChairLocation/>
      <ExploreApp/>
      <PricingSection/>
      <Membership/>
      <ArticlesSection/>
      <ContactUs/>
      <Newsletter/>
    </div>
  );
}
