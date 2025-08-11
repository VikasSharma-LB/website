import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IndustrieCardProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  exploreText?: string;
  exploreIconSrc?: string;
  exploreLink?: string; // <-- new prop
  index?: number;
}

const IndustrieCardComponent: React.FC<IndustrieCardProps> = ({
  title,
  description,
  features,
  imageSrc,
  exploreText = "Explore More",
  exploreIconSrc = "/images/arrow-up-right.svg",
  exploreLink = "#", // default link
  index = 0,
}) => {
  return (
    <div
      className={`border border-white/10 rounded-xl p-6 flex flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row 2xl:flex-row gap-6 items-center w-full ${
        index % 2 === 0 ? "bg-blueGraient2" : "bg-blueGraient"
      }`}
    >
      {/* Text content */}
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2">
        <h4 className="text-white md:text-2xl text-xl font-normal">{title}</h4>
        <p className="text-white/70 font-normal mt-4 tracking-[1px] leading-relaxed text-sm md:text-base">
          {description}
        </p>

        {/* Feature Buttons */}
        <div className="2xl:flex xl:flex md:flex lg:flex sm:flex hidden gap-2 flex-wrap mt-6">
          {features.map((feature, i) => (
            <button
              key={i}
              className="border border-white/15 px-4 py-2 text-white rounded-full text-sm md:text-base text-start font-normal bg-white/10"
            >
              {feature}
            </button>
          ))}
        </div>

        {/* Explore More */}
        <div className="2xl:mt-12 xl:mt-12 lg:mt-12 md:mt-12 sm:mt-8 mt-4">
          <Link href={exploreLink} className="text-white/70 flex gap-2 items-center">
            {exploreText}
            <span className="bg-primary rounded-full p-1 font-semibold">
              <Image
                src={exploreIconSrc}
                alt="arrow icon"
                width={16}
                height={16}
              />
            </span>
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 rounded-lg">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={300}
          className="w-full h-auto object-contain rounded-xl border border-white/10"
        />
      </div>
    </div>
  );
};

export default IndustrieCardComponent;
