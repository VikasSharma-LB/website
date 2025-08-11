import { keyFeatureData, warehouseManagementCards } from "@/app/dto/UtilsData";
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
        heading="Warehouse Management System"
        subheading="Streamline Your Warehouse Operations with Intelligence & Accuracy"
        primaryButtonText="Let’s Get In Touch"
        primaryButtonLink="/service"
      />
      <div className="container mx-auto px-4 py-4">
        {/* <div className="w-full flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col items-center gap-8 mt-16 ">
          <div className="md:w-1/2 w-full">
            <Image
              src="/images/our-mission.png"
              alt="About Lume Byte"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="md:w-1/2 w-full items-start flex flex-col gap-4">
            <h3
              className="text-left md:text-4xl text-2xl 
            font-medium text-white"
            >
              Warehouse Management System
            </h3>
            <p className="text-white tracking-[1px] leading-relaxed text-base font-normal">
              A Warehouse Management System (WMS) is a comprehensive software
              solution built to enhance the efficiency, accuracy, and control of
              your warehouse operations. From inventory tracking and storage
              management to order processing, shipping, and real-time reporting,
              a WMS gives businesses the tools they need to run a smarter, more
              responsive supply chain.
            </p>
            <p className="text-white tracking-[1px] leading-relaxed text-lg font-normal">
              We develop tailored WMS solutions that support both small-scale
              storage operations and large, multi-warehouse logistics networks.
              Our systems help reduce human error, automate repetitive tasks,
              improve inventory accuracy, and provide end-to-end visibility —
              resulting in faster order fulfillment and lower operational costs.
            </p>
          </div>
        </div> */}
        <IndustrieAboutComponent imageSrc="/images/warehouse-management-systems.png"
          imageAlt="About Lume Byte"
          title=" Warehouse Management System"
          paragraphs={[
            "A Warehouse Management System (WMS) is a comprehensive software solution built to enhance the efficiency, accuracy, and control of your warehouse operations. From inventory tracking and storage  management to order processing, shipping, and real-time reporting,  a WMS gives businesses the tools they need to run a smarter, more responsive supply chain.",
            "We develop tailored WMS solutions that support both small-scalestorage operations and large, multi-warehouse logistics networks.Our systems help reduce human error, automate repetitive tasks,improve inventory accuracy, and provide end-to-end visibility —resulting in faster order fulfillment and lower operational costs.",
          ]}
        />
        <div className="mt-16">
          <h3
            className="text-center md:text-4xl text-2xl
          font-medium text-white"
          >
            Key Features
          </h3>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            {warehouseManagementCards.map((card, index) => (
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
              "Real-Time Inventory Management",
              "Order Management & Fulfillment",
              "Barcode & RFID Integration",
              "Post-launch updates and SLA-based support",
              "AI-assisted triage and prioritization",
              "Data privacy, encryption, and compliance with global standards",
            ]}
            buttonLabel="Get In Touch"
            buttonIcon="/images/arrow-up-right.svg"
            imageSrc="/images/client-img9.png"
          />
        </div>
        <div className="mt-16">
          <ConsultantComponent />
        </div>
      </div>
      {/* <div className="mt-16 my-4">
        <h3
          className="text-center md:text-4xl text-2xl
        
        
        font-medium text-white"
        >
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
