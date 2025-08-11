"use client";
import React from "react";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import Image from "next/image";
import { usePathname } from "next/navigation";

const FooterComponent = () => {
  const pathname = usePathname();
  const navLinkClass = (path: string, isGroup?: boolean) =>
    ` ${(isGroup ? pathname.startsWith(path) : pathname === path) ? "" : ""}`;
  return (
    <footer className="bg-[#050A24] text-white">
      <div className="container mx-auto px-4  flex flex-col md:flex-row justify-between gap-6 md:gap-0 relative">
        {/* Left Section */}
        <div className="md:w-2/5 z-10 mr-12 py-8 pt-8">
          <h4 className="text-xl font-semibold">
            Have an Idea? Let’s Bring it to Life!
          </h4>
          <p className="text-white text-base mt-3">
            Whether you're brainstorming or building, our team is ready to
            collaborate and craft a solution just for you.
          </p>
          <div className="mt-6">
            <ButtonComponent
              label="Get In Touch"
              icon="/images/arrow-up-right.svg"
            />
          </div>

          <div className="mt-6">
            <h4 className="text-xl font-semibold">Social Media</h4>
            <div className="flex gap-3 mt-3">
              <a href="https://www.linkedin.com/company/lume-byte-technologies/services/?viewAsMember=true">
               <Image
                src="/images/linkdin-icon.svg"
                alt="LinkedIn"
                width={40}
                height={40}
              />
              </a>
             
              <Image
                src="/images/instagram-icon.svg"
                alt="Instagram"
                width={40}
                height={40}
              />
              <Image
                src="/images/facebook-icon.svg"
                alt="Facebook"
                width={40}
                height={40}
              />
              <Image
                src="/images/twitter-icon.svg"
                alt="Twitter"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>

        {/* Center Divider */}
        <div className="hidden md:block w-px bg-white/10  top-0 bottom-0 left-1/2 transform -translate-x-1/2" />

        {/* Right Section */}
        <div className="md:w-3/5 flex justify-between flex-wrap gap-8 z-10 md:pl-12 py-8">
          {/* Our Company Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Company</h4>
            <ul className="space-y-2 text-white text-base">
             
              <li>
                {" "}
                <a href="/aboutus" className={navLinkClass("/aboutus")}>
                  About Us
                </a>
              </li>
              <li>
                {" "}
                <a href="/service" className={navLinkClass("/service")}>
                  Service
                </a>
              </li>
              <li>
                {" "}
                <a href="/industries/igaming" className={navLinkClass("/industries/igaming")}>
                  Industries
                </a>
              </li>
              <li>
                {" "}
                <a href="/product" className={navLinkClass("/product")}>
                  Product
                </a>
              </li>
              <li>
                <a href="/" className={navLinkClass("/")}>
                  Career
                </a>
              </li>
              {/* <li>
                {" "}
                <a href="/" className={navLinkClass("/")}>
                  Privacy Policy
                </a>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-4 text-white text-base">
              {/* <div className="flex items-center gap-2 ">
                     <Image
                  src="/images/phone-icon.svg"
                  alt="Email"
                  width={32}
                  height={32}
                />
                <span>+91 123 456 7890</span>
              </div> */}
              <div className="flex items-center gap-2">
                
                 <Image
                  src="/images/email-icon.svg"
                  alt="Phone"
                  width={32}
                  height={32}
                />
                <span>contact@lumebyte.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/location-icon.svg"
                  alt="Location"
                  width={32}
                  height={32}
                />
                <span>
                  Plot no. 296, Scheme no. 54, PU4,
                  <br />
                  3rd floor Indore, M.P. India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/timer-icon.svg"
                  alt="Hours"
                  width={32}
                  height={32}
                />
                <span>
                  Monday - Friday
                  <br />
                  10:30AM - 7:30PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-base text-white">
        Copyright © 2025 Lume Byte Technologies
      </div>
    </footer>
  );
};

export default FooterComponent;
