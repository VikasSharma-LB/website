"use client";

import React from "react";
import Image from "next/image";
import ButtonComponent from "../buttonComponent/ButtonComponent";

const ConsultantComponent = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-primary py-24 text-center text-white">
      {/* Background pattern image */}
      <Image
        src="/images/consultant-bg.png"
        alt="Consultant"
        fill // ✅ replaces layout="fill"
        className="object-cover"
        priority // optional, for above-the-fold images
      />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white">
          Have an Idea? Let’s Bring it to Life!
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg sm:text-base text-white/80">
          We’re here to turn your vision into a powerful digital product
          <br className="hidden sm:block" />
          from concept to code.
        </p>
        <div className="mt-6 flex justify-center">
          <ButtonComponent
            label="Schedule a Consultation"
            icon="/images/arrow-up-right-blue.svg"
            // href="/aboutus"
            backgroundColor="bg-white text-primary border border-white/15 btn-inner-shadow-gray font-normal cursor-not-allowed"
            // uses default primary styling
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultantComponent;
