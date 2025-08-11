import Image from "next/image";
import React, { ReactNode } from "react";
import styles from "./LampCard.module.scss";

interface LampCardProps {
  icon?: string;
  title: string;
  description: ReactNode;
  hoverIcon?: string;
  readMoreLink?: string;
  readMoreText?: string; // New prop added
}

const LampCard: React.FC<LampCardProps> = ({
  icon,
  title,
  description,
  hoverIcon,
  readMoreLink,
  readMoreText = "Read More", // Default text fallback
}) => {
  return (
    <div className="relative group p-[1px] rounded-xl overflow-hidden h-full border border-white/10">
      {/* Rotating border layer (shows only on hover) */}
     <div
  className={`absolute inset-0 bg-[conic-gradient(#194EFF_20deg,transparent_120deg)] 
    rounded-xl z-0 
    opacity-100 animate-rotate 
    transition-opacity duration-300 
    md:opacity-0 md:group-hover:opacity-100 2xl:group-hover:opacity-100 xl:group-hover:opacity-100 lg:group-hover:opacity-100 2xl:group-hover:animate-rotate xl:group-hover:animate-rotate lg:group-hover:animate-rotate`}
 />
      {/* Inner Card */}
      <div
        className={`relative ${styles.cardWrapper} w-full p-6 rounded-xl bg-blue shadow-md text-white transition duration-300 z-10 h-full`}
      >
        {/* Lamp Section */}
        <div className="absolute top-0 left-10 -translate-x-1/2 z-20 flex flex-col items-center">
          <div className="w-[30px] h-[3px] bg-primary rounded-full" />
          <div className="w-[60px] h-5 bg-primary rounded-full -mt-8 opacity-0 group-hover:opacity-100 transition duration-300" />
          <div className={`${styles.lampLight}`} />
          <div className="w-[30px] h-6 bg-primary blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-full" />
        </div>

        {/* Card Content */}
        <div className="space-y-3 relative z-10">
        <div className="relative w-[40px] h-[40px]">
  {icon && (
    <Image
      src={icon}
      alt="service icon"
      width={40}
      height={40}
      className="absolute inset-0 object-contain transition-opacity duration-300 group-hover:opacity-0 md:opacity-100"
    />
  )}
  {hoverIcon && (
    <Image
      src={hoverIcon}
      alt="hover icon"
      width={40}
      height={40}
      className="absolute inset-0 object-contain transition-opacity duration-300 
                 opacity-100 md:opacity-0 md:group-hover:opacity-100"
    />
  )}
</div>

          <h3 className="text-xl font-normal">{title}</h3>
          <div className="text-base text-white/70 font-normal 2xl:w-[80%] w-full">
            {description}
          </div>

          {readMoreLink && (
            <div className="mt-6">
              <a href={readMoreLink} className="text-primary text-sm underline">
                {readMoreText}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LampCard;
