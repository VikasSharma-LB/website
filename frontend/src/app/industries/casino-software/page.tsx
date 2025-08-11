import { casinoSoftwareCards, keyFeatureData } from "@/app/dto/UtilsData";
import BannerCommanComponent from "@/components/bannerCommanComponent/BannerCommanComponent";
import ClientReviewSlider from "@/components/clientReviewSlider/ClientReviewSlider";
import ConsultantComponent from "@/components/consultantComponent/ConsultantComponent";
import FooterComponent from "@/components/footerComponent/FooterComponent";
import HeaderComponent from "@/components/headerComponent/HeaderComponent";
import IndustrieAboutComponent from "@/components/industrieAboutComponent/IndustrieAboutComponent";
import IndustryClientComponent from "@/components/industryClientComponent/IndustryClientComponent";
import LampCard from "@/components/lampCardComponent/lampCardComponent";
import OurProductCardComponent from "@/components/ourProductCardComponent/OurProductCardComponent";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <BannerCommanComponent
        backgroundImage="/images/home-banner.png"
        heading="Casino Software Development"
        subheading="Build Powerful, Scalable & Engaging Online Casino Platforms."
        primaryButtonText="Let’s Get In Touch"
        primaryButtonLink="/service"
      />
      <div className="container mx-auto px-4 py-4">
        {/* <div className="w-full flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col  items-center gap-8 mt-16 ">
          <div className="2xl:w-1/2 xl:w-1/2  lg:w-1/2 md:w-full w-full">
            <Image
              src="/images/our-mission.png"
              alt="About Lume Byte"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="2xl:w-1/2 xl:w-1/2  lg:w-1/2 md:w-full w-full items-start flex flex-col gap-4">
            <h3 className="text-left text-4xl font-medium text-white">
              Casino Software Development
            </h3>
            <p className="text-white tracking-[1px] leading-relaxed text-base font-normal">
              We specialize in developing premium online casino platforms that
              combine cutting-edge technology with user-centric design. Our
              fully customizable solutions are crafted to meet the evolving
              needs of the online gaming industry — delivering high-performance,
              secure, and engaging digital experiences for both operators and
              players.
            </p>
            <p className="text-white tracking-[1px] leading-relaxed text-lg font-normal">
              From sleek front-end interfaces to powerful back-end management
              systems, our software enables you to launch and scale with
              confidence. We integrate everything your casino needs — from
              custom game development and secure wallet systems to real-time
              analytics, CRM tools, and regulatory compliance — all within a
              single, unified platform.
            </p>
          </div>
        </div> */}
        <IndustrieAboutComponent
          imageSrc="/images/casino-software-developments.png"
          imageAlt="About Lume Byte"
          title="Casino Software Development"
          paragraphs={[
            "We specialize in developing premium online casino platforms that combine cutting-edge technology with user-centric design. Our fully customizable solutions are crafted to meet the evolving needs of the online gaming industry — delivering high-performance, secure, and engaging digital experiences for both operators and players.",
            "From sleek front-end interfaces to powerful back-end management systems, our software enables you to launch and scale with confidence. We integrate everything your casino needs — from custom game development and secure wallet systems to real-time analytics, CRM tools, and regulatory compliance — all within a single, unified platform.",
          ]}
        />

        <div className="mt-16">
          <h3 className="text-center md:text-4xl text-2xl font-medium text-white">
            Key Features
          </h3>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            {casinoSoftwareCards.map((card, index) => (
              <OurProductCardComponent
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
                iconHover={card.iconHover}
              />
            ))}
          </div>
        </div>
        <div className="mt-16">
          <IndustryClientComponent
            heading="What We Offer"
            description="Our Casino platform is designed to be a turnkey solution — robust, agile, and ready to grow with your business. It supports:"
            features={[
              "End-to-End Casino Platform Development",
              "Third-Party Integrations",
              "Security & Compliance Setup",
              "Back-Office & Admin Systems",
              "Localization & Globalization",
              "Player Retention Features",
            ]}
            buttonLabel="Get In Touch"
            buttonIcon="/images/arrow-up-right.svg"
            imageSrc="/images/client-img2.png"
          />
        </div>
        <div className="mt-16">
          <ConsultantComponent />
        </div>
      </div>
      {/* <div className="mt-16 my-4">
        <h3 className="text-center md:text-4xl text-2xl font-medium text-white">
          Client Success Stories
        </h3>
        <div className="mt-12">
          <ClientReviewSlider />
        </div>
      </div> */}
      <div className="mt-16">
        <FooterComponent />
      </div>
    </div>
  );
};

export default page;
