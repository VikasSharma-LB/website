import { crashCasinoCards, keyFeatureData } from "@/app/dto/UtilsData";
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
        heading="Crash Casino Game Development"
        subheading="Fast. Addictive. Built to Scale."
        primaryButtonText="Let’s Get In Touch"
        primaryButtonLink="/service"
      />
      <div className="container mx-auto px-4 py-4">
        {/* <div className="w-full flex flex-col 2xl:flex items-center gap-8 mt-16 ">
          <div className="2xl:w-1/2 w-full">
            <Image
              src="/images/our-mission.png"
              alt="About Lume Byte"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="2xl:w-1/2 w-full items-start flex flex-col gap-4">
            <h3 className="text-center text-4xl font-medium text-white">
              Crash Casino Game Development
            </h3>
            <p className="text-white tracking-[1px] leading-relaxed text-base font-normal">
              We deliver cutting-edge Crash game development solutions tailored
              for modern online casinos. Crash games offer a unique blend of
              fast-paced gameplay, real-time betting, and social interaction,
              making them one of the fastest-growing verticals in the iGaming
              industry.
            </p>
            <p className="text-white tracking-[1px] leading-relaxed text-lg font-normal">
              Our Crash games are engineered for player immersion, fairness, and
              high replay value — combining sleek interfaces with provably fair
              mechanics and real-time multiplayer experiences. Whether you’re
              adding Crash to an existing platform or launching a new game
              brand, our solutions help you attract and retain players with
              thrilling, low-entry, high-engagement gameplay.
            </p>
          </div>
        </div> */}
        <IndustrieAboutComponent
          imageSrc="/images/crash-casino-game-developments.png"
          imageAlt="About Lume Byte"
          title=" Crash Casino Game Development"
          paragraphs={[
            "We deliver cutting-edge Crash game development solutions tailored for modern online casinos. Crash games offer a unique blend of fast-paced gameplay, real-time betting, and social interaction, making them one of the fastest-growing verticals in the iGaming industry.",
            "Our Crash games are engineered for player immersion, fairness, and high replay value — combining sleek interfaces with provably fair mechanics and real-time multiplayer experiences. Whether you’re adding Crash to an existing platform or launching a new game brand, our solutions help you attract and retain players with thrilling, low-entry, high-engagement gameplay.",
          ]}
        />
        <div className="mt-16">
          <h3 className="text-center md:text-4xl text-2xl font-medium text-white">
            Key Features
          </h3>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            {crashCasinoCards.map((card, index) => (
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
            description="Our Crash Casino platform is designed to be a turnkey solution — robust, agile, and ready to grow with your business. It supports:"
            features={[
              "Fully customized Crash game design",
              "Seamless integration into your platform",
              "Real-time multiplayer functionality",
              "Multi-language and multi-currency support",
              "Secure, scalable, and provably fair infrastructure",
              "Post-launch maintenance, support, and update",
            ]}
            buttonLabel="Get In Touch"
            buttonIcon="/images/arrow-up-right.svg"
            imageSrc="/images/client-img4.png"
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
