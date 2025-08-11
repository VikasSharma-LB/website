import React from "react";
import HeaderComponent from "../headerComponent/HeaderComponent";
import Link from "next/link";
import Image from "next/image";

interface BannerProps {
  backgroundImage: string;
  heading: string;
  highlightText?: string;
  subheading: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  overlayColor?: string; // optional: default is bg-black/20
}

const BannerCommanComponent: React.FC<BannerProps> = ({
  backgroundImage,
  heading,
  highlightText,
  subheading,
  primaryButtonText = "Explore Our Services",
  primaryButtonLink = "#",
  secondaryButtonText,
  secondaryButtonLink = "#",
  overlayColor = "bg-black/20",
}) => {
  return (
    <div className="bg-secondary text-white w-full">
      <section
        className="relative w-full min-h-[80vh] sm:min-h-screen md:min-h-[60vh] lg:min-h-[50vh] xl:min-h-[95vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className={`absolute inset-0 ${overlayColor} z-0`} />

        {/* Header */}
        <div className="relative z-10">
          <HeaderComponent />
        </div>

        {/* Content */}
        <div className="relative z-8 flex flex-col items-center text-center pt-36 px-4 sm:px-8 max-w-4xl mx-auto space-y-4">
          {secondaryButtonText && (
            <Link href={secondaryButtonLink}>
              <button className="px-6 py-2  rounded-full flex items-center border border-white/20 bg-white/10 text-white text-lg font-medium hover:bg-white/20 transition duration-300">
                {secondaryButtonText}
                <span className="ml-2 inline-block bg-primary rounded-full px-2 py-1">
                  <Image
                    src="/images/arrow-right.svg"
                    alt=""
                    width={14}
                    height={14}
                  />
                </span>
              </button>
            </Link>
          )}

          <h1 className="text-2xl 2xl:text-4xl font-medium leading-tight text-white">
            {heading}
            {highlightText && (
              <>
                <br />
                <p className="text-white mt-2">{highlightText}</p>
              </>
            )}
          </h1>

          <p className="text-white/70 max-w-xl mx-auto text-lg font-normal mt-2">
            {subheading}
          </p>

          {primaryButtonText && (
            <Link href={primaryButtonLink}>
              <div className="relative flex items-center justify-center mx-auto max-w-max p-[2px] rounded-full overflow-hidden drop-shadow-blue mt-4">
                {/* Rotating animated border */}
                <div className="absolute inset-0 animate-rotate rounded-full bg-[conic-gradient(#194EFF_20deg,transparent_120deg)] z-0" />

                {/* Inner button */}
                <button className="relative z-10 px-6 py-3 text-lg font-medium text-white bg-blue rounded-full hover:bg-blue-600 transition duration-300">
                  {primaryButtonText}
                </button>
              </div>
            </Link>
          )}
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent blur-2xl pointer-events-none z-0" />
      </section>
    </div>
  );
};

export default BannerCommanComponent;
