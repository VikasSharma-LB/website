import Image from "next/image";
import React from "react";

const OurProcessComponent = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery & Strategy",
      description: "We analyze your business goals...",
    },
    {
      number: 2,
      title: "Planning & Architecture",
      description: "We create a scalable roadmap...",
    },
    {
      number: 3,
      title: "UI/UX Design",
      description: "We design intuitive, user-focused...",
    },
    {
      number: 4,
      title: "Agile Development",
      description: "We build in sprints for faster...",
    },
    {
      number: 5,
      title: "Quality Assurance",
      description: "Our QA team ensures performance...",
    },
    {
      number: 6,
      title: "Launch & Deployment",
      description: "We deploy your product smoothly...",
    },
    {
      number: 7,
      title: "Support & Scaling",
      description: "Ongoing support and updates...",
    },
  ];

  return (
    <div>
      <div className=" justify-center 2xl:flex xl:flex lg:flex   hidden ">
        <div className="w-1/2">
          <div className="flex items-center relative group cursor-pointer">
            {/* Left Text */}
            <div className="text-left mr-20 transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary">
              <h5 className="text-xl">Planning & Architecture</h5>
              <p className="text-base mt-2 tracking-[1px] leading-relaxed">
                We create a scalable roadmap and system design, ready for future
                growth and integration.
              </p>
            </div>

            {/* Diamond Number */}
            <div className="w-[20%]">
              <div className="w-[100px] h-[100px] rotate-45 bg-primary btn-inner-shadow rounded-lg flex items-center justify-center shadow-lg relative mt-[70px] z-[1] hover:border border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <span className="text-2xl font-extrabold text-white -rotate-45 drop-shadow-lg">
                  2
                </span>
              </div>
            </div>

            {/* Arrow Image */}
            <div className="absolute z-[0] right-20 transition-transform duration-300 group-hover:translate-x-3 group-hover:scale-110">
              <Image
                src="/images/arrow-left.png"
                alt="Arrow"
                width={100}
                height={24}
                className="transition-transform duration-300"
              />
            </div>
          </div>

          <div className="flex items-center relative group cursor-pointer">
            <div className="text-left mr-20 transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary">
              <h5 className="text-xl ">Agile Development</h5>
              <p className="text-base mt-2 tracking-[1px] leading-relaxed">
                We build in sprints for faster delivery, flexibility, and
                continuous improvement.
              </p>
            </div>
            <div className="w-[20%]">
              <div
                className="w-[100px] h-[100px] rotate-45
               bg-primary
              btn-inner-shadow
               rounded-lg
               flex items-center justify-center
               shadow-lg
               relative mt-[40px] z-[1] hover:border border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] ml-2"
              >
                <span className="text-2xl font-extrabold text-white -rotate-45 drop-shadow-lg">
                  4
                </span>
              </div>
            </div>
            <div className="absolute z-[0] right-20 transition-transform duration-300 group-hover:translate-x-3 group-hover:scale-110">
              <Image
                src="/images/arrow-left.png"
                alt="Arrow"
                width={100}
                height={24}
              />
            </div>
          </div>
          <div className="flex items-center relative group cursor-pointer">
            <div className="text-left mr-20 transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary">
              <h5 className="text-xl ">Launch & Deployment</h5>
              <p className="text-base mt-2 tracking-[1px] leading-relaxed">
                We deploy your product smoothly and securely, with zero
                disruption.
              </p>
            </div>
            <div className="w-[20%]">
              <div
                className="w-[100px] h-[100px] rotate-45
               bg-primary
              btn-inner-shadow
               rounded-lg
               flex items-center justify-center
               shadow-lg
               relative mt-[40px] z-[1] hover:border border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] ml-5"
              >
                <span className="text-2xl font-extrabold text-white -rotate-45 drop-shadow-lg">
                  6
                </span>
              </div>
            </div>
            <div className="absolute z-[0] right-20 transition-transform duration-300 group-hover:translate-x-3 group-hover:scale-110">
              <Image
                src="/images/arrow-left.png"
                alt="Arrow"
                width={100}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <div className="flex items-center relative group cursor-pointer">
              <div className="w-[30%]">
                <div
                  className="w-[100px] h-[100px] rotate-45
               bg-primary
              btn-inner-shadow
               rounded-lg
               flex items-center justify-center
               shadow-lg
               relative z-[1] hover:border border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                >
                  <span className="text-2xl font-extrabold text-white -rotate-45 drop-shadow-lg">
                    1
                  </span>
                </div>
              </div>
              <div className="ml-16 transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary">
                <h5 className="text-xl ">Discovery & Strategy</h5>
                <p className="text-base mt-2 tracking-[1px] leading-relaxed">
                  We analyze your business goals and user needs to define a
                  clear product vision and roadmap.
                </p>
              </div>
              <div className="absolute z-[0] left-20 transition-transform duration-300 group-hover:translate-x-3 group-hover:scale-110">
                <Image
                  src="/images/arrow-right.png"
                  alt="Arrow"
                  width={100}
                  height={24}
                />
              </div>
            </div>
            <div className="flex items-center relative group cursor-pointer">
              <div className="w-[30%]">
                <div
                  className="w-[100px] h-[100px] rotate-45
               bg-primary
              btn-inner-shadow
               rounded-lg
               flex items-center justify-center
               shadow-lg
               relative mt-10 z-[1] hover:border border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                >
                  <span className="text-2xl font-extrabold text-white -rotate-45 drop-shadow-lg">
                    3
                  </span>
                </div>
              </div>
              <div className="ml-16 transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary">
                <h5 className="text-xl ">UI/UX Design</h5>
                <p className="text-base mt-2 tracking-[1px] leading-relaxed">
                  We design intuitive, user-focused interfaces that enhance
                  engagement and satisfaction.
                </p>
              </div>
              <div className="absolute z-[0] left-20 transition-transform duration-300 group-hover:translate-x-3 group-hover:scale-110">
                <Image
                  src="/images/arrow-right.png"
                  alt="Arrow"
                  width={100}
                  height={24}
                />
              </div>
            </div>
            <div className="flex items-center relative group cursor-pointer">
              <div className="w-[30%]">
                <div
                  className="w-[100px] h-[100px] rotate-45
               bg-primary
              btn-inner-shadow
               rounded-lg
               flex items-center justify-center
               shadow-lg
               relative mt-10 z-[1] hover:border border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                >
                  <span className="text-2xl font-extrabold text-white -rotate-45 drop-shadow-lg">
                    5
                  </span>
                </div>
              </div>
              <div className="ml-16 transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary">
                <h5 className="text-xl ">Quality Assurance</h5>
                <p className="text-base mt-2 tracking-[1px] leading-relaxed">
                  Our QA team ensures performance, security, and reliability
                  through rigorous testing.
                </p>
              </div>
              <div className="absolute z-[0] left-20 transition-transform duration-300 group-hover:translate-x-3 group-hover:scale-110">
                <Image
                  src="/images/arrow-right.png"
                  alt="Arrow"
                  width={100}
                  height={24}
                />
              </div>
            </div>
            <div className="flex items-center relative group cursor-pointer">
              <div className="w-[30%]">
                <div
                  className="w-[100px] h-[100px] rotate-45
               bg-primary
              btn-inner-shadow
               rounded-lg
               flex items-center justify-center
               shadow-lg
               relative mt-10 z-[1] hover:border border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                >
                  <span className="text-2xl font-extrabold text-white -rotate-45 drop-shadow-lg">
                    7
                  </span>
                </div>
              </div>
              <div className="ml-4 transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary">
                <h5 className="text-xl ">Support & Scaling</h5>
                <p className="text-base mt-2 tracking-[1px] leading-relaxed">
                  Ongoing support and updates to keep your product growing.
                </p>
              </div>
              <div className="absolute z-[0] left-20 transition-transform duration-300 group-hover:translate-x-3 group-hover:scale-110">
                <Image
                  src="/images/arrow-right.png"
                  alt="Arrow"
                  width={100}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="flex flex-col 2xl:hidden md:flex lg:hidden xl:hidden">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`flex items-center justify-between my-6 relative ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Diamond Number */}
            <div className="w-[70px] h-[70px] rotate-45 bg-primary rounded-lg flex items-center justify-center shadow-lg relative z-10">
              <span className="text-2xl font-extrabold text-white -rotate-45">
                {step.number}
              </span>
            </div>

            {/* Arrow */}
            <div
              className={
                "absolute top-1/2 -translate-y-1/2 z-0 " +
                (index % 2 === 0 ? "left-[50px]" : "right-[70px]")
              }
            >
              <Image
                src={
                  index % 2 === 0
                    ? "/images/arrow-right.png"
                    : "/images/arrow-left.png"
                }
                alt="Arrow"
                width={60}
                height={20}
              />
            </div>

            {/* Text */}
            <div className="w-[65%] text-left">
              <h5 className="md:text-lg text-base font-semibold">
                {step.title}
              </h5>
              <p className="text-sm mt-2 text-white/80">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProcessComponent;
