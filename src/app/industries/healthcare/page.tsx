import { healthcareCards, keyFeatureData } from "@/app/dto/UtilsData";
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
        heading="Healthcare Domain"
        subheading="Empowering Smarter, Safer, and More Connected Healthcare"
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
              Healthcare Domain
            </h3>
            <p className="text-white tracking-[1px] leading-relaxed text-base font-normal">
              The healthcare domain is undergoing a digital transformation — and
              at Lume Byte Technologies, we are at the forefront of building
              technology-driven solutions that enhance the quality,
              accessibility, and efficiency of medical services.
            </p>
            <p className="text-white tracking-[1px] leading-relaxed text-lg font-normal">
              Our healthcare software development focuses on patient-centric
              platforms and provider-friendly systems that simplify clinical
              workflows, ensure compliance, and improve health outcomes. From
              Electronic Health Records (EHR) and telemedicine apps to
              AI-powered diagnostics and hospital management systems, we deliver
              secure, scalable, and interoperable solutions tailored to your
              healthcare organization’s needs.
            </p>
          </div>
        </div> */}
        <IndustrieAboutComponent
          imageSrc="/images/healthcare-domains.png"
          imageAlt="About Lume Byte"
          title="Healthcare Domain"
          paragraphs={[
            "The healthcare domain is undergoing a digital transformation — andat Lume Byte Technologies, we are at the forefront of buildingtechnology-driven solutions that enhance the quality,accessibility, and efficiency of medical services.",
            "Our healthcare software development focuses on patient-centric platforms and provider-friendly systems that simplify clinical workflows, ensure compliance, and improve health outcomes. From Electronic Health Records (EHR) and telemedicine apps to AI-powered diagnostics and hospital management systems, we deliver secure, scalable, and interoperable solutions tailored to your healthcare organization’s needs.",
          ]}
        />
        <div className="mt-16">
          <h3 className="text-center md:text-4xl text-2xl font-medium text-white">
            Key Features
          </h3>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            {healthcareCards.map((card, index) => (
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
            description="Our Healthcare Domain platform is designed to be a turnkey solution — robust, agile, and ready to grow with your business. It supports:"
            features={[
              "EHR/EMR system development",
              "Telemedicine and virtual care platforms",
              "Patient portals and mobile health apps",
              "AI-driven diagnostics and analytics",
              "HIPAA-compliant data security",
              "Hospital & clinic management systems",
            ]}
            buttonLabel="Get In Touch"
            buttonIcon="/images/arrow-up-right.svg"
            imageSrc="/images/client-img10.png"
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
