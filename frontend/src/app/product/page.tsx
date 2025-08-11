import BannerCommanComponent from "@/components/bannerCommanComponent/BannerCommanComponent";
import ClientReviewSlider from "@/components/clientReviewSlider/ClientReviewSlider";
import ConsultantComponent from "@/components/consultantComponent/ConsultantComponent";
import FooterComponent from "@/components/footerComponent/FooterComponent";
import HeaderComponent from "@/components/headerComponent/HeaderComponent";
import ProductCard from "@/components/productCards/ProductCards";
import ProductCards from "@/components/productCards/ProductCards";
import Image from "next/image";
import React from "react";
import { productCards, productData } from "../dto/UtilsData";
import ButtonComponent from "@/components/buttonComponent/ButtonComponent";
import OurProcessComponent from "@/components/ourProcessComponent/OurProcessComponent";
import OurProductCardComponent from "@/components/ourProductCardComponent/OurProductCardComponent";

const page = () => {
  return (
    <div>
      <BannerCommanComponent
        backgroundImage="/images/home-banner.png"
        heading="Powerful Digital Products Built for Innovation and Growth"
        subheading="Scalable software built to fuel your business goals."
        primaryButtonText="Let’s Get In Touch"
        primaryButtonLink="/service"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="mt-16">
          <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col gap-4 items-center bg-blue md:p-8 p-4 border border-white/10 rounded-lg">
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
              <Image
                src="/images/product-img1.png"
                alt="About Lume Byte"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
              <h4 className="text-2xl md:text-4xl text-white font-medium">
                Smart. Scalable. Built for the Future
              </h4>
              <p className="text-base text-white mt-4 tracking-[1px] leading-relaxed">
                we create innovative digital products that tackle real-world
                business challenges. From cloud platforms to AI-powered tools,
                our solutions are designed with scalability, security, and
                performance in mind. We focus on delivering seamless user
                experiences and future-ready architectures that empower your
                business to grow and adapt in a fast-changing digital landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-center text-4xl font-medium text-white">
            What We Build
          </h3>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-3 gap-4">
            {productData.map((product, index) => (
              <ProductCard
                key={index}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                title={product.title}
                description={product.description}
                features={product.features}
              />
            ))}
          </div>
          <div className="w-full flex text-center justify-center mt-8">
            <ButtonComponent
              label="Get In Touch"
              icon="/images/arrow-up-right.svg"
            />
          </div>
          <div className="bg-blue mt-16 md:p-8 p-4">
            <h3 className="text-center md:text-4xl text-2xl font-medium text-white">
              Our Process
            </h3>
            <p className="text-base text-center font-normal mt-2">
              A Proven Approach to Product Excellence
            </p>
            <div className="pt-16 pb-12">
              <OurProcessComponent />
            </div>
          </div>
          <div className="mt-16">
            <h3 className="text-center text-2xl md:text-4xl font-medium text-white">
              Why Choose Our Products?
            </h3>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
              {productCards.map((card, index) => (
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
