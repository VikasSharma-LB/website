import { fantasySportsCards, keyFeatureData } from "@/app/dto/UtilsData";
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
        heading="Fantasy Sports Platform Development"
        subheading="Scalable. Interactive. Built for Sports Fans."
        primaryButtonText="Let’s Get In Touch"
        primaryButtonLink="/service"
      />
      <div className="container mx-auto px-4 py-4">
        {/* <div className="w-full flex items-center gap-8 mt-16 ">
          <div className="w-1/2">
            <Image
              src="/images/our-mission.png"
              alt="About Lume Byte"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-1/2 items-start flex flex-col gap-4">
            <h3 className="text-center text-4xl font-medium text-white">
              Fantasy Sports Platform Development
            </h3>
            <p className="text-white tracking-[1px] leading-relaxed text-base font-normal">
              We specialize in developing robust and feature-rich fantasy sports
              platforms that provide an immersive, competitive, and highly
              engaging virtual gaming experience. Whether you're targeting fans
              of cricket, football, basketball, or any major sport, our fantasy
              solutions are built to scale — with support for both daily fantasy
              and season-long contests.
            </p>
            <p className="text-white tracking-[1px] leading-relaxed text-lg font-normal">
              Our platforms combine real-time data feeds, live scoring,
              intuitive user interfaces, and powerful backend tools to deliver a
              seamless and entertaining experience for users and easy management
              for operators. From user acquisition to monetization, our
              solutions are optimized to drive long-term engagement and revenue
              growth.{" "}
            </p>
          </div>
        </div> */}

        <IndustrieAboutComponent
          imageSrc="/images/fantasy-sports-platform-developments.png"
          imageAlt="About Lume Byte"
          title="Fantasy Sports Platform Development"
          paragraphs={[
            "We specialize in developing robust and feature-rich fantasy sports platforms that provide an immersive, competitive, and highly engaging virtual gaming experience. Whether you're targeting fans of cricket, football, basketball, or any major sport, our fantasy solutions are built to scale — with support for both daily fantasy and season-long contests.",
            "Our platforms combine real-time data feeds, live scoring, intuitive user interfaces, and powerful backend tools to deliver a seamless and entertaining experience for users and easy management for operators. From user acquisition to monetization, our solutions are optimized to drive long-term engagement and revenue growth.",
          ]}
        />
        <div className="mt-16">
          <h3 className="text-center md:text-4xl text-2xl font-medium text-white">
            Key Features
          </h3>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            {fantasySportsCards.map((card, index) => (
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
              "Multi-language and geo-localization options",
              "API integration with live stats and match data feeds",
              "Post-launch support and feature upgrades",
              "Tools for user retention: bonuses, referrals, loyalty programs",
            ]}
            buttonLabel="Get In Touch"
            buttonIcon="/images/arrow-up-right.svg"
            imageSrc="/images/client-img5.png"
          />
        </div>
        <div className="mt-16">
          <ConsultantComponent />
        </div>
      </div>
      {/* <div className="mt-16 my-4">
        <h3 className="text-center md:text-4xl text-2xl   font-medium text-white">
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
