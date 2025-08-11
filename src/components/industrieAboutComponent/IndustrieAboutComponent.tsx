import Image from "next/image";
import React from "react";

interface IndustrieAboutProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  paragraphs: string[];
}

const IndustrieAboutComponent: React.FC<IndustrieAboutProps> = ({
  imageSrc,
  imageAlt,
  title,
  paragraphs,
}) => {
  return (
    <div className="w-full flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col items-center gap-8 mt-16">
      {/* IMAGE SECTION */}
      <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* TEXT SECTION */}
      <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full items-start flex flex-col gap-4">
        <h3 className="text-left md:text-4xl text-2xl font-medium text-white">
          {title}
        </h3>

        {paragraphs.map((text, index) => (
          <p
            key={index}
            className="text-white/70 tracking-[1px] leading-relaxed text-base  font-normal"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default IndustrieAboutComponent;
