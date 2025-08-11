import Image from "next/image";
import React from "react";
import styles from "./AnalyticCards.module.scss";

interface AnalyticCardsProps {
  count: string;
  label: string;
  bgImage?: string; // optional background image
}

const AnalyticCards: React.FC<AnalyticCardsProps> = ({
  count,
  label,
  bgImage = "/images/consultant-bg.png", // default background
}) => {
  return (
    <div
      className={`relative w-full rounded-xl overflow-hidden bg-primary p-8 text-center h-48 shadow-lg group ${styles.cardWrapper}`}
    >
      {/* Lamp Light & Top Bars */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="w-[40px] h-[3px] bg-white rounded-full" />
        <div className="w-[60px] h-5 bg-white rounded-full -mt-8 opacity-0 group-hover:opacity-100 transition duration-300" />
        <div className={`${styles.lampLight}`} />
        <div className="w-[40px] h-6 bg-white blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-full" />
      </div>

      {/* Background pattern */}
      <Image
        src={bgImage}
        alt="Card Background"
        fill
        className="absolute inset-0 z-0 object-cover opacity-80"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white h-full">
        <h4 className="text-3xl font-medium">{count}</h4>
        <p className="text-lg mt-2">{label}</p>
      </div>
    </div>
  );
};

export default AnalyticCards;
