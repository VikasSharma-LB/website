import BannerCommanComponent from "@/components/bannerCommanComponent/BannerCommanComponent";
import ClientReviewSlider from "@/components/clientReviewSlider/ClientReviewSlider";
import ConsultantComponent from "@/components/consultantComponent/ConsultantComponent";
import FooterComponent from "@/components/footerComponent/FooterComponent";
import HeaderComponent from "@/components/headerComponent/HeaderComponent";
import LampCard from "@/components/lampCardComponent/lampCardComponent";
import Image from "next/image";
import React from "react";
import { igameCards, keyFeatureData, productCards } from "@/app/dto/UtilsData";
import IndustryClientComponent from "@/components/industryClientComponent/IndustryClientComponent";
import OurProductCardComponent from "@/components/ourProductCardComponent/OurProductCardComponent";
import IndustrieAboutComponent from "@/components/industrieAboutComponent/IndustrieAboutComponent";

const page = () => {
  return (
    <div>
      <BannerCommanComponent
        backgroundImage="/images/home-banner.png"
        heading="iGaming Platform Development,"
        subheading="Personalized. Scalable. Built for the Future of Gaming."
        primaryButtonText="Let’s Get In Touch"
        primaryButtonLink="/service"
      />
      <div className="container mx-auto px-4 py-4">
        <IndustrieAboutComponent
          imageSrc="/images/iGaming-platform -development.png"
          imageAlt="About Lume Byte"
          title="iGaming Platform Development"
          paragraphs={[
            "We offer highly personalized and scalable iGaming software solutions designed for unmatched flexibility, performance, and global reach. Our platforms are built to support a wide variety of gaming verticals, including online casino games, sports betting, live dealer integration, virtual sports, crash games, and fantasy leagues — all fully customizable to match your brand and business model.",
            "Whether you're launching a new iGaming venture or upgrading an existing one, our end-to-end development services ensure your platform is not only feature-rich but also secure, compliant, and future-ready. From intuitive front-end interfaces to robust back-end management systems, we provide a seamless and engaging experience for both operators and players.",
          ]}
        />
        <div className="mt-16">
          <h3 className="text-center md:text-4xl text-2xl font-medium text-white">
            Key Features
          </h3>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            {igameCards.map((card, index) => (
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
            description="Our Fantasy Sports platform is designed to be a turnkey solution — robust, agile, and ready to grow with your business. It supports:"
            features={[
              "Full-cycle fantasy sports app and web development",
              "Custom UI/UX for player drafts, team selection, and scoring",
              "Multi-language and geolocalization options",
              "API integration with live stats and match data feeds",
              "Post-launch support and feature upgrades",
              "Tools for user retention: bonuses, referrals, loyalty programs",
            ]}
            buttonLabel="Get In Touch"
            buttonIcon="/images/arrow-up-right.svg"
            imageSrc="/images/client-img1.png"
          />
        </div>
        <div className="mt-16">
          <ConsultantComponent />
        </div>
      </div>

      <div className="container mx-auto px-4 py-4"></div>
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
