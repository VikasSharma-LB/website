import React from "react";
import ButtonComponent from "../buttonComponent/ButtonComponent";

interface JobDetail {
  label: string;
  value: string;
}

interface CarrierPositionCardProps {
  title: string;
  jobDetails: JobDetail[];
  buttonLabel?: string;
  buttonHref?: string;
  buttonIcon?: string;
}

const CarrierPositionCard: React.FC<CarrierPositionCardProps> = ({
  title,
  jobDetails,
  buttonLabel = "Apply Now",
  buttonHref = "/aboutus",
  buttonIcon = "/images/arrow-up-right.svg",
}) => {
  return (
    <div className="w-full bg-blue border border-white/10 p-4 rounded-md">
      <h5 className="2xl:text-xl xl:text-lg lg:text-lg md:text-lg  text-lg text-white font-medium">{title}</h5>
      <div className="mt-4 space-y-2 text-white">
        {jobDetails.map((item, idx) => (
          <div className="grid grid-cols-[120px_40px_1fr]" key={idx}>
            <p className="text-white 2xl:text-lg xl:text-lg lg:text-md  md:text-md text-base">{item.label}</p>
            <p className="text-center text-white 2xl:text-lg xl:text-lg lg:text-md  md:text-md text-base">:</p>
            <p className="ms-8 text-white 2xl:text-lg xl:text-lg lg:text-md  md:text-md text-base">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <ButtonComponent
          label={buttonLabel}
          icon={buttonIcon}
          href={buttonHref}
        />
      </div>
    </div>
  );
};

export default CarrierPositionCard;
