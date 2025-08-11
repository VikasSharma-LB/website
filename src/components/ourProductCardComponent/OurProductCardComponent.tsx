import Image from "next/image";
import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
  iconHover: string;
}

const OurProductCardComponent: React.FC<ProductCardProps> = ({
  title,
  description,
  icon,
  iconHover,
}) => {
  return (
    <div className="group bg-blue border border-white/10 px-6 py-8 rounded-lg transition-colors duration-300 hover:bg-primary btn-inner-shadow-blue2">
      <div className="flex justify-center items-center rounded-lg w-12 h-12 bg-primary group-hover:bg-white transition-colors duration-300 relative">
        {/* Default Icon */}
        <Image
          src={icon}
          alt={`${title} icon`}
          width={40}
          height={32}
          className="block group-hover:hidden transition duration-300"
        />
        {/* Hover Icon */}
        <Image
          src={iconHover}
          alt={`${title} icon hover`}
          width={32}
          height={32}
          className="hidden group-hover:block transition duration-300 absolute"
        />
      </div>

      <h4 className="text-xl text-white mt-4 group-hover:text-white transition-colors duration-300">
        {title}
      </h4>
      <p className="text-base mt-2 w-[80%] tracking-[1px] leading-relaxed text-white/70 group-hover:text-white transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default OurProductCardComponent;
