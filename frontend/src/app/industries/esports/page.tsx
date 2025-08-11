import { eSportsCards, keyFeatureData } from "@/app/dto/UtilsData";
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
        heading="E-Sports Platform Development"
        subheading="Powering the Future of Competitive Gaming"
        primaryButtonText="Let’s Get In Touch"
        primaryButtonLink="/service"
      />
      <div className="container mx-auto px-4 py-4">
        {/* <div className="w-full 2xl:flex flex-col flex items-center gap-8 mt-16 ">
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
              E-Sports Platform Development
            </h3>
            <p className="text-white tracking-[1px] leading-relaxed text-base font-normal">
              We brings you next-gen E-Sports Platform solutions tailored for
              the fast-paced, ever-growing world of competitive gaming. Built
              for scalability, performance, and user engagement, our platform is
              designed to connect players, teams, organizers, and fans in one
              powerful ecosystem.
            </p>
            <p className="text-white tracking-[1px] leading-relaxed text-lg font-normal">
              Whether you're launching a new e-sports tournament brand, building
              a competitive gaming hub, or integrating e-sports into an existing
              platform, our solution supports end-to-end tournament management,
              live streaming, community features, and monetization tools — all
              optimized for popular titles like Valorant, CS:GO, PUBG, Dota 2,
              and more.
            </p>
          </div>
        </div> */}

        <IndustrieAboutComponent
          imageSrc="/images/e-sports-platform-developments.png"
          imageAlt="About Lume Byte"
          title="E-Sports Platform Development"
          paragraphs={[
            "We brings you next-gen E-Sports Platform solutions tailored for the fast-paced, ever-growing world of competitive gaming. Built for scalability, performance, and user engagement, our platform is designed to connect players, teams, organizers, and fans in one powerful ecosystem.",
            "Whether you're launching a new e-sports tournament brand, building a competitive gaming hub, or integrating e-sports into an existing platform, our solution supports end-to-end tournament management, live streaming, community features, and monetization tools — all optimized for popular titles like Valorant, CS:GO, PUBG, Dota 2, and more.",
          ]}
        />
        <div className="mt-16">
          <h3 className="text-center md:text-4xl text-2xl font-medium text-white">
            Key Features
          </h3>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            {eSportsCards.map((card, index) => (
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
            description="Our E-Sports platform is designed to be a turnkey solution — robust, agile, and ready to grow with your business. It supports:"
            features={[
              "Custom E-Sports platform development",
              "APIs for game data integration & matchmaking",
              "Support for global e-sports titles and communities",
              "Role-based dashboards for players, organizers, and admins",
              "Engagement features: chat, forums, rewards, and notifications",
              "Post-launch support, updates, and feature expansion",
            ]}
            buttonLabel="Get In Touch"
            buttonIcon="/images/arrow-up-right.svg"
            imageSrc="/images/client-img6.png"
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
