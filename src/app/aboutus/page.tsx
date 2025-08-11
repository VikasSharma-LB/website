import AnalytiComponent from "@/components/analytiComponent/AnalytiComponent";
import BannerCommanComponent from "@/components/bannerCommanComponent/BannerCommanComponent";
import ClientReviewSlider from "@/components/clientReviewSlider/ClientReviewSlider";
import ConsultantComponent from "@/components/consultantComponent/ConsultantComponent";
import FooterComponent from "@/components/footerComponent/FooterComponent";
import HeaderComponent from "@/components/headerComponent/HeaderComponent";
import LampCard from "@/components/lampCardComponent/lampCardComponent";
import Image from "next/image";
import React from "react";
import { lampCardData } from "../dto/UtilsData";

const page = () => {
  return (
    <div>
      <BannerCommanComponent
        backgroundImage="/images/home-banner.png"
        heading="Empowering Innovation,"
        highlightText="Delivering Excellence"
        subheading="We build scalable digital solutions"
        primaryButtonText="Let’s Get In Touch"
        primaryButtonLink="/service"
      />
      <div className="mt-16">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 md:gap-10 px-4">
          {/* Left Side Image with Badge */}
          <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden">
            <Image
              src="/images/about-left2.png"
              alt="Team working together"
              width={400}
              height={400}
              className="w-full h-full object-fill rounded-xl"
            />

            {/* Experience Badge */}
            <div className="absolute bottom-0 right-0 bg-primary   text-white px-6 py-4 rounded-xl  2xl:w-[360px] 2xl:h-[160px] xl:w-[300px] xl:h-[130px] lg:w-[230px] lg:h-[144px] md:w-[160px] md:h-[200px] sm:w-[296px] sm:h-[129px] w-[175px] h-[77px]  text-center flex items-center justify-center flex-col">
              <p className="text-2xl md:text-3xl font-semibold leading-none">
                12+ Years
              </p>
              <p className="text-lg mt-1">Experience</p>
            </div>
          </div>

          {/* Right Side Text */}
          <div className="w-full md:w-1/2 bg-blue border border-white/10 rounded-xl p-6 md:p-8 flex flex-col justify-center">
            <h4 className="text-2xl md:text-4xl font-semibold text-white">
              About Us
            </h4>
            <p className="mt-4   text-justify text-white/70 tracking-normal leading-relaxed text-lg font-normal">
              At Lume Byte Technologies, we are committed to shaping the future
              of digital innovation through tailored software development,
              scalable platforms, and expert IT consulting. With a passion for
              solving complex business challenges, we serve a diverse range of
              industries including iGaming, eCommerce, healthcare, logistics,
              and more. Our solutions are crafted with precision, ensuring
              security, performance, and adaptability for tomorrow’s demands.
            </p>
            <p className=" mt-4   text-justify text-white/70 tracking-normal leading-relaxed text-lg font-normal">
              Driven by a team of skilled engineers, designers, and strategists,
              we combine technical excellence with user-focused design. From
              startups to enterprises, we empower clients to accelerate growth,
              streamline operations, and stay ahead in a competitive digital
              landscape. Whether you're building a product from scratch or
              scaling an existing platform, Lume Byte is your trusted technology
              partner.
            </p>
            <p className="mt-4   text-justify text-white/70 tracking-normal leading-relaxed text-lg font-normal">
              Let us help you transform your vision into a powerful,
              future-ready digital reality.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="mt-16">
          <div className="bg-primary rounded-2xl px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 text-white text-center">
              {/* Card 1 */}
              <div className="flex flex-col text-left px-4 border-b border-white/20 md:border-b-0 mb-4 pb-4 md:mb-0 md:pb-0">
                <Image
                  src="/images/custom-software-development.svg"
                  alt="Custom Software Development"
                  width={60}
                  height={60}
                />
                <h4 className="text-lg font-semibold mt-4">
                  Custom Software Development
                </h4>
                <p className="text-sm mt-2 text-white/90">
                  Tailored applications that solve real-world challenges
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col text-left px-4 border-b border-white/20 md:border-b-0 md:border-l md:border-r md:px-8 2xl:px-12  mb-4 pb-4 md:mb-0 md:pt-0">
                <Image
                  src="/images/cloud-solutions.svg"
                  alt="Cloud Solutions"
                  width={60}
                  height={60}
                />
                <h4 className="text-lg font-semibold mt-4">Cloud Solutions</h4>
                <p className="text-sm mt-2 text-white/90">
                  Scalable and secure cloud infrastructure for agile businesses
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col text-left px-4">
                <Image
                  src="/images/it-consulting.svg"
                  alt="IT Consulting"
                  width={60}
                  height={60}
                />
                <h4 className="text-lg font-semibold mt-4">IT Consulting</h4>
                <p className="text-sm mt-2 text-white/90">
                  Strategic guidance to align technology with your business
                  goals
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center gap-8 mt-16 ">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 items-start flex flex-col gap-4">
            <h3 className="text-center text-2xl md:text-4xl font-medium text-white">
              Our Vision
            </h3>
            <p className="text-white/70 tracking-normal leading-relaxed text-lg font-normal text-justify ">
              At Lume Byte Technologies, our vision is to lead the global
              transformation of industries through next-generation IT solutions
              that are intelligent, scalable, and future-ready.
            </p>
            <p className="text-white/70 tracking-normal leading-relaxed text-lg font-normal text-justify">
              We are dedicated to helping businesses thrive in a digital-first
              world by delivering secure, innovative, and adaptable technology
              solutions. By staying ahead of tech trends and continuously
              evolving our capabilities, we aim to create lasting digital impact
              — shaping a smarter, more connected future for our clients and the
              world.
            </p>
            <p className="text-white/70 tracking-normal leading-relaxed text-lg font-normal text-justify">
              We envision a future where technology empowers every organization
              to operate smarter, faster, and more efficiently—driving growth,
              innovation, and lasting digital transformation across industries.{" "}
            </p>
          </div>
          <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full ">
            <Image
              src="/images/our-vision.png"
              alt="About Lume Byte"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row 2xl:flex-row items-center gap-8 mt-16 ">
          <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2">
            <Image
              src="/images/our-mission.png"
              alt="About Lume Byte"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 items-start flex flex-col gap-4">
            <h3 className="text-center text-2xl md:text-4xl font-medium text-white">
              Our Mission
            </h3>
            <p className="text-white/70 tracking-normal leading-relaxed text-lg font-normal text-justify">
              At Lume Byte Technologies, our mission is to empower businesses
              worldwide through innovative, secure, and scalable digital
              solutions. We are committed to delivering exceptional value by
              combining technology expertise with a deep understanding of our
              clients' goals.
            </p>
            <p className="text-white/70 tracking-normal leading-relaxed text-lg font-normal text-justify">
              Through collaborative partnerships and a focus on quality, we
              develop tailored software, cloud infrastructure, and IT consulting
              services that drive measurable growth and long-term success. Our
              mission is to be a trusted technology partner in your journey
              toward digital excellence.
            </p>
            <p className="text-white/70 tracking-normal leading-relaxed text-lg font-normal text-justify">
              We strive to build lasting relationships by delivering impactful
              results and staying committed to innovation. Every solution is
              guided by our passion for excellence and a promise to help clients
              succeed in the digital age.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mt-16">
          <AnalytiComponent />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="">
          <h3 className="text-center text-2xl md:text-4xl font-medium text-white">
            Our Service
          </h3>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3  gap-4">
            {lampCardData.map((card, index) => (
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
        <h3 className="text-center text-2xl md:text-4xl font-medium text-white">
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
