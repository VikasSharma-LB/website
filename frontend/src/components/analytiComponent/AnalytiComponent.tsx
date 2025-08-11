import React from "react";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import AnalyticCards from "../analyticCards/AnalyticCards";

const AnalytiComponent = () => {
  return (
    <div className="bg-blue">
      <div className="container mx-auto px-4 py-16 flex flex-col-reverse 2xl:flex-row xl:flex-row lg:flex-row md:flex-row   gap-8 items-center">
        <div className="w-full 2xl:w-3/5">
          <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4">
            <AnalyticCards count="105+" label="Projects Delivered" />
            <AnalyticCards count="20+" label="Clients Worldwide" />
            <AnalyticCards count="15+" label="Years of Experience" />
            <AnalyticCards count="15+" label="Years of Experience" />
          </div>
        </div>
        <div className="w-full 2xl:w-2/5">
          
          <button className="bg-white/15 border-2 border-white/15 text-white inset-shadow-xs rounded-full px-4 py-2 text-lg">Results & Analytics</button>
          <h3 className="text-2xl text-white mt-4">
            Performance Insights and Analytics Overview
          </h3>
          <p className="text-white/70 text-lg font-normal mt-2">
            Track, measure, and optimize every aspect of your digital product
            with real-time performance insights, user behavior analytics, and
            intelligent reporting tools — all designed to help you make smarter,
            data-driven decisions.
          </p>
          <div className="mt-6">
            <ButtonComponent
              label="Learn More"
              icon="/images/arrow-up-right.svg"
              href="/aboutus"
              // uses default primary styling
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalytiComponent;
