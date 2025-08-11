import BannerCommanComponent from "@/components/bannerCommanComponent/BannerCommanComponent";
import ClientReviewSlider from "@/components/clientReviewSlider/ClientReviewSlider";
import ConsultantComponent from "@/components/consultantComponent/ConsultantComponent";
import FooterComponent from "@/components/footerComponent/FooterComponent";
import HeaderComponent from "@/components/headerComponent/HeaderComponent";
import LampCard from "@/components/lampCardComponent/lampCardComponent";
import React from "react";
import { joinUsCards, serviceLampCardData } from "../dto/UtilsData";
import AnalytiComponent from "@/components/analytiComponent/AnalytiComponent";
import OurProductCardComponent from "@/components/ourProductCardComponent/OurProductCardComponent";
import CarrierPositionCard from "@/components/carrierPositionCard/CarrierPositionCard";
import { jobCards } from "../dto/UtilsData";
const page = () => {
  return (
    <div>
      <BannerCommanComponent
        backgroundImage="/images/home-banner.png"
        heading="Your Next Big Opportunity Starts Here"
        subheading="Explore career paths where your talent builds real impact."
        primaryButtonText="Let’s Get In Touch"
        primaryButtonLink="/service"
      />
      <div className="container mx-auto px-4 py-4">
        <div className="">
          <h3 className="text-center md:text-4xl text-2xl font-medium text-white">
            Why Work With Us?
          </h3>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            {joinUsCards.map((card, index) => (
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
      </div>
      <div className="mt-16">
        <AnalytiComponent />
      </div>
      <div className="container mx-auto px-4 py-4">
        <div className="mt-16">
          <h3 className="text-center md:text-4xl text-2xl font-medium text-white">
            Open Positions
          </h3>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 gap-4">
            {jobCards.map((job, idx) => (
              <CarrierPositionCard
                key={idx}
                title={job.title}
                jobDetails={job.jobDetails}
                buttonHref={job.buttonHref}
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
