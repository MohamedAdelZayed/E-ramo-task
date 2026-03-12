
import Image from "next/image";
import { FaApple } from "react-icons/fa";

const ExploreApp = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">


      <div className="relative bg-[#fdf8f1] z-10 w-full max-w-300 mx-auto px-6 md:px-16 py-10 md:py-0 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-[40px]">


        {/* اليد في أقصى اليمين مع أنميشن الدخول */}
        <div className="absolute top-0 right-0 z-0 pointer-events-none animate-hand-greet">
          <Image
            src="/images/hand.png"
            alt="hand greeting"
            width={130}
            height={130}
            className="object-contain"
            priority
          />
        </div>



        {/* Phone Mockup */}
        <div className="shrink-0 w-60 md:w-80">
          <Image
            src="/images/phone.png"
            alt="Phone Image"
            width={320}
            height={640}
            className="w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">

          <h1 className="text-lg md:text-3xl mb-4 whitespace-nowrap font-medium text-gray-900">
            Explore Chair Location App
          </h1>

          <p className="text-gray-600 text-sm md:textlg max-w-lg mb-8">
            Hybrid working offers you the freedom to work closer to clients, colleagues or home.
            It&apos;s also greener
          </p>

          {/* Download Buttons */}
          <div className="flex flex-row items-center justify-center lg:justify-start gap-4">

            <a
              href="#"
              className="flex items-center bg-[#E5E7EB] gap-3 px-3 md:px-6 py-3 rounded-lg border border-gray-900 bg-surface hover:shadow-card-hover transition-shadow"
            >

              <Image
                src="/images/googlePlay.svg"
                alt="googlePlay"
                width={24}
                height={24}
                className="w-6 h-6"
              />

              <div className="text-left">
                <span className="block text-xs leading-none">Download on</span>
                <span className="block text-sm font-semibold text-foreground">Google Play</span>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center bg-[#E5E7EB] gap-3 px-3 md:px-6 py-3 rounded-lg border border-gray-900 bg-surface hover:shadow-card-hover transition-shadow"
            >
              <FaApple className="w-6 h-6 text-foreground" />
              <div className="text-left">
                <span className="block text-xs leading-none">Download on</span>
                <span className="block text-sm font-semibold text-foreground">App Store</span>
              </div>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ExploreApp;
