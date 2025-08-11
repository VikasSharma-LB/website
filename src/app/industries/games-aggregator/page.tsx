import { gameAggregatorCards, keyFeatureData } from "@/app/dto/UtilsData";
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
        heading="Casino Games Aggregator"
        subheading="One Integration. Thousands of Games. Endless Possibilities."
        primaryButtonText="Let’s Get In Touch"
        primaryButtonLink="/service"
      />
      <div className="container mx-auto px-4 py-4">
        {/* <div className="w-full flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col items-center gap-8 mt-16 ">
          <div className="2xl:w-1/2 lg:w-1/2 xl:w-1/2 md:w-full w-full">
            <Image
              src="/images/our-mission.png"
              alt="About Lume Byte"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="2xl:w-1/2 lg:w-1/2 xl:w-1/2 md:w-full w-full items-start flex flex-col gap-4">
            <h3 className="text-center md:text-4xl text-2xl font-medium text-white">
              Casino Games Aggregator
            </h3>
            <p className="text-white tracking-[1px] leading-relaxed text-base font-normal">
              Our Casino Games Aggregator provides a unified, scalable platform
              that consolidates a wide range of top-performing casino games from
              leading global providers. This powerful solution simplifies
              content management and allows operators to offer a rich and
              diverse gaming portfolio — all through a single, streamlined
              integration.
            </p>
            <p className="text-white tracking-[1px] leading-relaxed text-lg font-normal">
              With access to thousands of slots, table games, live dealer
              experiences, crash games, and specialty titles, you can deliver
              fresh content regularly and keep players engaged without complex
              backend operations.
            </p>
            <p className="text-white tracking-[1px] leading-relaxed text-lg font-normal">
              Designed with growth in mind, our aggregator supports real-time
              content updates, multi-language and currency support, and advanced
              promotional tools — making it easier than ever to scale across
              regions and meet the unique demands of your audience.
            </p>
          </div>
        </div> */}

        <IndustrieAboutComponent
          imageSrc="/images/casino-games-aggregators.png"
          imageAlt="About Lume Byte"
          title="Casino Games Aggregator"
          paragraphs={[
            "Our Casino Games Aggregator provides a unified, scalable platform that consolidates a wide range of top-performing casino games from leading global providers. This powerful solution simplifies content management and allows operators to offer a rich and diverse gaming portfolio — all through a single, streamlined integration.",
            "With access to thousands of slots, table games, live dealer experiences, crash games, and specialty titles, you can deliver fresh content regularly and keep players engaged without complex backend operations.",
            "Designed with growth in mind, our aggregator supports real-time content updates, multi-language and currency support, and advanced promotional tools — making it easier than ever to scale across regions and meet the unique demands of your audience.",
          ]}
        />

        <div className="mt-16">
          <h3 className="text-center md:text-4xl text-2xl font-medium text-white">
            Key Features
          </h3>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            {gameAggregatorCards.map((card, index) => (
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
              "All-in-One Game Access",
              "Single, Seamless Integration",
              "Smart Back-Office Tools",
              "Global Market Readiness",
              "Real-Time Performance Tracking",
              "Flexible Business Models",
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
