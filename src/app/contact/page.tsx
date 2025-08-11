import BannerCommanComponent from "@/components/bannerCommanComponent/BannerCommanComponent";
import ButtonComponent from "@/components/buttonComponent/ButtonComponent";
import ClientReviewSlider from "@/components/clientReviewSlider/ClientReviewSlider";
import ConsultantComponent from "@/components/consultantComponent/ConsultantComponent";
import FooterComponent from "@/components/footerComponent/FooterComponent";
import HeaderComponent from "@/components/headerComponent/HeaderComponent";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <BannerCommanComponent
        backgroundImage="/images/home-banner.png"
        heading="Let’s Build Something ,"
        highlightText="Great Together"
        subheading="Have a project or idea in mind? Let’s bring it to life — connect with us today."
        primaryButtonText="Let’s Get In Touch"
        primaryButtonLink="/service"
      />
      <div className="container mx-auto px-4 py-4">
        <div className="relative mt-16 w-full 2xl:flex-row xl:flex-row lg:flex-row md:flex-col  items-center justify-center">
          {/* LEFT PANEL - HALF VISIBLE OVERLAY */}
          <div
            className="2xl:absolute xl:absolute lg:absolute md:absolute relative left-0 top-30 bottom-10 h-fit 2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-full w-full rounded-lg z-10 overflow-hidden"
            style={{
              backgroundImage: 'url("/images/contant-left.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0  z-0"></div>
            <div className="relative z-10 p-8 pr-16 py-16 text-white h-full flex flex-col justify-center">
              <h4 className="text-2xl font-semibold mb-2">Get In Touch</h4>
              <p className="text-sm mb-6">
                Fill out the form below or use the contact details to connect
                with us directly. We’ll get back to you as soon as possible.
              </p>

              <div className="space-y-8 text-sm">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/phone-circle.svg"
                    alt="email"
                    width={40}
                    height={40}
                  />
                  <div>
                    <span className="block font-medium">Email :</span>
                    <span className="block text-sm">contact@lumebyte.com</span>
                  </div>
                </div>
                {/* Phone */}
                {/* <div className="flex items-start gap-3">
                  <Image
                    src="/images/email-circle.svg"
                    alt="phone"
                    width={40}
                    height={40}
                  />
                  <div>
                    <span className="block font-medium">Phone Number :</span>
                    <span className="block text-sm">+91 123 456 7890</span>
                  </div>
                </div> */}
                {/* Address */}
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/location-circle.svg"
                    alt="location"
                    width={40}
                    height={40}
                  />
                  <div>
                    <span className="block font-medium">Address :</span>
                    <span className="block text-sm">
                      Plot no. 296, Scheme no. 54, PU4, 3rd floor, Indore, M.P.
                      India
                    </span>
                  </div>
                </div>
                {/* Time */}
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/time-circle.svg"
                    alt="clock"
                    width={40}
                    height={40}
                  />
                  <div>
                    <span className="block font-medium">Time :</span>
                    <span className="block text-sm">10:30AM - 7:30PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - FULL WIDTH CONTACT FORM */}
          <div className="w-full lg:w-[65%] md:w-full ml-auto border border-white/15 2xl:py-8 xl:py-8 lg:py-8 md:py-8 py-4 2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-4 2xl:ps-24 xl:ps-24 lg:ps-24 md:ps-24 ps-4 bg-blue rounded-lg relative z-8">
            <h4 className="md:text-4xl text-2xl text-white font-medium mb-6">Contact Us</h4>
            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-base font-medium text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md bg-transparent border border-white px-3 py-2 text-base text-white placeholder:text-gray-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-base font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-md bg-transparent border border-white px-3 py-2 text-base text-white placeholder:text-gray-300"
                  placeholder="example@gmail.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-base font-medium text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full rounded-md bg-transparent border border-white px-3 py-2 text-base text-white placeholder:text-gray-300"
                  placeholder="Subject"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-base font-medium text-white mb-2">
                  Your Message (optional)
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-md bg-transparent border border-white px-3 py-2 text-base text-white placeholder:text-gray-300"
                  placeholder="Type your message..."
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <ButtonComponent
                  label="Submit"
                  icon="/images/arrow-up-right.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <ConsultantComponent />
        </div>
      </div>
      {/* <div className="mt-16 my-4">
        <h3 className="text-center md:text-4xl text-2xl font-medium text-white">
          Client Success Stories
        </h3>
        <div className="mt-12">
          <ClientReviewSlider />
        </div>
      </div> */}
      <div className="mt-16">
        <FooterComponent />
      </div>
    </div>
  );
};

export default page;
