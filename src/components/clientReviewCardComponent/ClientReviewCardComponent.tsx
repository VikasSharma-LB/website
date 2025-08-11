import Image from "next/image";
import React from "react";

const ClientReviewCardComponent = () => {
  return (
    <div className="relative w-full rounded-xl bg-[#060d26] border border-white/10 px-6 py-8 text-center space-y-4 overflow-hidden">
      {/* Quote Icon in Background */}
      <Image
        src="/images/quote-icon.svg" // Make sure the extension is correct
        alt="quote background"
        width={100}
        height={100}
        className="absolute top-16 left-1/2 -translate-x-1/2 opacity-40 pointer-events-none"
      />

      {/* Stars */}
      <div className="flex justify-center gap-1 relative z-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <Image
            key={i}
            src="/images/star-icon.svg"
            alt="star"
            width={20}
            height={20}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-white text-lg italic leading-relaxed relative z-10 font-[Jost]">
        "Working with this team was an absolute pleasure. They delivered our
        platform on time with outstanding quality!"
      </p>

      {/* User Info */}
      <div className="flex items-center justify-center gap-4 pt-2 relative z-10">
        <Image
          src="/images/user-icon.svg"
          alt="client"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="text-left">
          <p className="text-white font-semibold">Rahul S., Founder</p>
          <p className="text-white/60 text-sm">TechNova</p>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewCardComponent;
