import BannerCommanComponent from "@/components/bannerCommanComponent/BannerCommanComponent";
import ClientReviewSlider from "@/components/clientReviewSlider/ClientReviewSlider";
import ConsultantComponent from "@/components/consultantComponent/ConsultantComponent";
import FooterComponent from "@/components/footerComponent/FooterComponent";
import HeaderComponent from "@/components/headerComponent/HeaderComponent";
import LampCard from "@/components/lampCardComponent/lampCardComponent";
import React from "react";
import { serviceLampCardData } from "../dto/UtilsData";
const page = () => {
  return (
    <div>
      <BannerCommanComponent
        backgroundImage="/images/home-banner.png"
        heading="Empowering Businesses with,"
        highlightText="Scalable Digital Services"
        subheading="Smart IT solutions that power growth and innovation."
        primaryButtonText="Let’s Get In Touch"
        primaryButtonLink="/service"
      />
      <div className="container mx-auto px-4 py-4">
        <div className="">
          <h3 className="text-center md:text-4xl text-2xl font-medium text-white">
            Our Service
          </h3>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {serviceLampCardData.map((card, index) => (
              <LampCard
                key={index}
                icon={card.icon}
                hoverIcon={card.hoverIcon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
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
