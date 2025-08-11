import AccordionComponent from "@/components/accordionComponent/AccordionComponent";
import AnalytiComponent from "@/components/analytiComponent/AnalytiComponent";
import BannerCommanComponent from "@/components/bannerCommanComponent/BannerCommanComponent";
import ButtonComponent from "@/components/buttonComponent/ButtonComponent";
import ClientReviewCardComponent from "@/components/clientReviewCardComponent/ClientReviewCardComponent";
import ClientReviewSlider from "@/components/clientReviewSlider/ClientReviewSlider";
import ConsultantComponent from "@/components/consultantComponent/ConsultantComponent";
import FooterComponent from "@/components/footerComponent/FooterComponent";
import HeaderComponent from "@/components/headerComponent/HeaderComponent";
import IndustrieCardComponent from "@/components/industriesCardComponent/IndustrieCardComponent";
import LampCard from "@/components/lampCardComponent/lampCardComponent";
import { lampCardData } from "./dto/UtilsData";
import { industries } from "./dto/UtilsData";
import { leftAccordionData, rightAccordionData } from "./dto/UtilsData";
import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <BannerCommanComponent
          backgroundImage="/images/home-banner.png"
          heading="Leading the Future of IT,"
          highlightText="One Byte at a Time"
          subheading="From idea to execution — we deliver scalable digital solutions tailored to your business goals."
          primaryButtonText="Explore Our Services"
          primaryButtonLink="/service"
          secondaryButtonText="Let’s Build Your Vision"
          secondaryButtonLink="/contact"
        />
      </main>
      <div className="container mx-auto px-4 py-8">
        <div className="">
          <h3 className="text-center text-2xl md:text-4xl font-medium text-white">
            Our Service
          </h3>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            {lampCardData.map((card, index) => (
              <LampCard
                key={index}
                icon={card.icon}
                hoverIcon={card.hoverIcon}
                title={card.title}
                description={card.description}
                readMoreText={card.readMoreText}
                readMoreLink={card.readMoreLink}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-col md:flex-col xl:flex-row lg:flex-row 2xl:flex-row items-center gap-8 mt-16">
          <div className=" w-full md:w-full lg:w-1/2  xl:w-1/2  2xl:w-1/2">
            <Image
              src="/images/about-left.png"
              alt="About Lume Byte"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-full lg:w-1/2  xl:w-1/2  2xl:w-1/2 items-start flex flex-col gap-4">
            <h3 className="text-center text-2xl md:text-4xl font-medium text-white">
              About Us
            </h3>
            <p className="text-white/70 tracking-[1px] leading-relaxed text-base font-normal">
              At Lume Byte Technologies, we are committed to shaping the future
              of digital innovation through tailored software development,
              scalable platforms, and expert IT consulting. With a passion for
              solving complex business challenges, we serve a diverse range of
              industries including iGaming, eCommerce, healthcare, logistics,
              and more. Our solutions are crafted with precision, ensuring
              security, performance, and adaptability for tomorrow’s demands.
            </p>
            <p className="text-white/70 tracking-[1px] leading-relaxed text-lg font-normal">
              Driven by a team of skilled engineers, designers, and strategists,
              we combine technical excellence with user-focused design.{" "}
            </p>
            <div className="flex gap-4 mt-4">
              <ButtonComponent
                label="Learn More"
                icon="/images/arrow-up-right.svg"
                href="/aboutus"
                // uses default primary styling
              />
              <ButtonComponent
                label="View Projects"
                icon="/images/arrow-up-right.svg"
                backgroundColor="bg-white/15 border border-white/15 text-white inset-shadow-xs"
                href="/custom"
              />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-center text-2xl md:text-4xl font-medium text-white">
            Industries we work in
          </h3>
          <div className="relative flex flex-col  gap-6 mx-auto mt-12  items-center">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`w-full  rounded-[32px] sticky z-[${10 - index}] ${
                  index === 0
                    ? "top-[50px] bg-blue"
                    : index === 1
                    ? "top-[80px] bg-blue"
                    : index === 2
                    ? "top-[110px] bg-blue"
                    : index === 3
                    ? "top-[140px] bg-blue"
                    : "top-[160px] bg-blue"
                }`}
              >
                <IndustrieCardComponent
                  index={index}
                  title={industry.title}
                  description={industry.description}
                  features={industry.features}
                  imageSrc={industry.imageSrc}
                  exploreLink={industry.exploreLink}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <div className="mt-16">
          <AnalytiComponent />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="mt-16">
          <h3 className="text-center md:text-4xl text-2xl font-medium text-white">
            Frequently Asked Questions
          </h3>
          <p className="text-white/70 text-center mt-2 max-w-md w-full mx-auto text-base font-normal">
            Answers to common questions about our services, processes, and what
            sets us apart.
          </p>

          <div className="flex mt-12 gap-4 flex-wrap md:flex-nowrap">
            <div className="w-full md:w-1/2">
              <AccordionComponent data={leftAccordionData} />
            </div>
            <div className="w-full md:w-1/2">
              <AccordionComponent data={rightAccordionData} />
            </div>
          </div>
          <div className="text-center mt-8 border border-white/10 rounded-full py-2 pl-4 pe-2 bg-blue w-fit mx-auto">
            <span className="flex items-center justify-center gap-2 text-white text-sm md:text-base font-normal">
              Still have a Question?
              <ButtonComponent label="Ask Question" />
            </span>
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
}
