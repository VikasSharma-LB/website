import { ecommerceCards, keyFeatureData } from "@/app/dto/UtilsData";
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
        heading="E-Commerce Platform Development"
        subheading="Powering the Future of Competitive Gaming"
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
              E-Commerce Platform Development
            </h3>
            <p className="text-white tracking-[1px] leading-relaxed text-base font-normal">
              We create end-to-end e-commerce solutions that empower businesses
              to succeed in the digital marketplace. Whether you're launching a
              specialized niche store or a large-scale multi-vendor marketplace,
              our platforms are built for performance, flexibility, and growth.
            </p>
            <p className="text-white tracking-[1px] leading-relaxed text-lg font-normal">
              We blend custom design, powerful backend architecture, and
              user-focused features to deliver seamless and secure shopping
              experiences. Our e-commerce systems are fully customizable,
              mobile-optimized, and built to handle increasing traffic and
              product catalogs as your business scales.
            </p>
          </div>
        </div> */}

        <IndustrieAboutComponent
          imageSrc="/images/e-commerce-platform-developments.png"
          imageAlt="About Lume Byte"
          title="E-Commerce Platform Development"
          paragraphs={[
            " We create end-to-end e-commerce solutions that empower businesses to succeed in the digital marketplace. Whether you're launching a specialized niche store or a large-scale multi-vendor marketplace, our platforms are built for performance, flexibility, and growth.",
            " We blend custom design, powerful backend architecture, and user-focused features to deliver seamless and secure shopping experiences. Our e-commerce systems are fully customizable, mobile-optimized, and built to handle increasing traffic and product catalogs as your business scales.",
          ]}
        />
        <div className="mt-16">
          <h3 className="text-center md:text-4xl text-2xl font-medium text-white">
            Key Features
          </h3>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            {ecommerceCards.map((card, index) => (
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
            imageSrc="/images/client-img7.png"
          />
        </div>
        <div className="mt-16">
          <ConsultantComponent />
        </div>
      </div>
      {/* <div className="mt-16 my-4">
        <h3 className="text-center text-4xl font-medium text-white">
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
