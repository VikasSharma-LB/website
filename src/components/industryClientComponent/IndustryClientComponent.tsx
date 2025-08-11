import Image from "next/image";
import React from "react";
import ButtonComponent from "../buttonComponent/ButtonComponent";

interface IndustryClientProps {
  heading: string;
  description: string;
  features: string[];
  buttonLabel: string;
  buttonIcon: string;
  imageSrc: string;
}

const IndustryClientComponent: React.FC<IndustryClientProps> = ({
  heading,
  description,
  features,
  buttonLabel,
  buttonIcon,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col items-stretch gap-8 rounded-xl min-h-[500px]">
      {/* Left Content */}
      <div className="border border-white/10 bg-blue p-8 rounded-lg 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full flex flex-col justify-center text-left items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            {heading}
          </h2>
          <p className="text-white/80 mb-6 leading-relaxed max-w-lg">
            {description}
          </p>

          {/* Feature List */}
          <ul className="space-y-4 mb-6">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Image
                  src="/images/check.svg"
                  alt="Check Icon"
                  width={16}
                  height={16}
                  className="mt-1"
                />
                <span className="text-white/70 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <ButtonComponent label={buttonLabel} icon={buttonIcon} />
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-full xl:w-1/2 lg:w-1/2 2xl:w-1/2  w-full">
        <Image
          src={imageSrc}
          alt="Industry Visual"
          width={600}
          height={600}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default IndustryClientComponent;
