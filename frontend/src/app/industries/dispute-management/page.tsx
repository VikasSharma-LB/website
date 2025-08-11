import { disputeManagementCards, keyFeatureData } from "@/app/dto/UtilsData";
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
        heading="Dispute Management System"
        subheading="Build Trust Through Transparent Issue Resolution"
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
              Dispute Management System
            </h3>
            <p className="text-white tracking-[1px] leading-relaxed text-base font-normal">
              A Dispute Management System (DMS) is a vital component for
              platforms that handle real-money transactions, user interactions,
              or service-based operations. At Lume Byte Technologies, we develop
              intelligent, user-friendly dispute resolution systems that promote
              transparency, fairness, and user confidence.
            </p>
            <p className="text-white tracking-[1px] leading-relaxed text-lg font-normal">
              Our DMS enables users to raise, monitor, and resolve complaints
              related to payments, gameplay, account activity, or service
              quality — all within a centralized and well-documented
              environment. The system is equipped with automated workflows,
              real-time communication tools, and admin-side monitoring to ensure
              timely resolutions and regulatory compliance.
            </p>
          </div>
        </div> */}
        <IndustrieAboutComponent
          imageSrc="/images/dispute-management-systems.png"
          imageAlt="About Lume Byte"
          title="Dispute Management System"
          paragraphs={[
            "A Dispute Management System (DMS) is a vital component for platforms that handle real-money transactions, user interactions, or service-based operations. At Lume Byte Technologies, we develop intelligent, user-friendly dispute resolution systems that promote transparency, fairness, and user confidence.",
            "Our DMS enables users to raise, monitor, and resolve complaints  related to payments, gameplay, account activity, or service  quality — all within a centralized and well-documented  environment. The system is equipped with automated workflows,  real-time communication tools, and admin-side monitoring to ensure  timely resolutions and regulatory compliance.",
          ]}
        />

        <div className="mt-16">
          <h3 className="text-center md:text-4xl text-2xl font-medium text-white">
            Key Features
          </h3>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            {disputeManagementCards.map((card, index) => (
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
            description="Our Dispute Management platform is designed to be a turnkey solution — robust, agile, and ready to grow with your business. It supports:"
            features={[
              "End-to-end dispute system design & development",
              "API integrations with user accounts, wallets, and services",
              "Mobile & web interface for users and admins",
              "Post-launch updates and SLA-based support",
              "AI-assisted triage and prioritization",
              "Data privacy, encryption, and compliance with global standards",
            ]}
            buttonLabel="Get In Touch"
            buttonIcon="/images/arrow-up-right.svg"
            imageSrc="/images/client-img8.png"
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
