"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const HeaderComponent = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const pathname = usePathname();

  // const [isProductOpen, setIsProductOpen] = useState(false);
  const industries = [
    { label: "iGaming Platform Development", path: "/industries/igaming" },
    {
      label: "Casino Software Development",
      path: "/industries/casino-software",
    },
    { label: "Casino Games Aggregator", path: "/industries/games-aggregator" },
    {
      label: "Crash Casino Game Development",
      path: "/industries/crash-casino",
    },
    {
      label: "Fantasy Sports Platform Development",
      path: "/industries/fantasy-sports",
    },
    { label: "E-Sports Platform Development", path: "/industries/esports" },
    { label: "E-Commerce Platform Development", path: "/industries/ecommerce" },
    {
      label: "Dispute Management System",
      path: "/industries/dispute-management",
    },
    {
      label: "Warehouse Management System",
      path: "/industries/warehouse-management",
    },
    { label: "Healthcare Domain", path: "/industries/healthcare" },
  ];
  const activeClass = (path: string, isGroup?: boolean) =>
    `text-base font-normal px-4 py-2 ${
      (isGroup ? pathname.startsWith(path) : pathname === path)
        ? "bg-[#131939] text-white border border-white/10 rounded-full"
        : "text-gray-900 bg-transparent"
    }`;
  return (
    <header className=" w-full p-4">
      <nav
        className="mx-auto container w-full flex items-center justify-between gap-x-12"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={180}
              height={60}
              priority
            />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-6 h-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-2 2xl:gap-x-12 bg-[#080A1C]/50 border border-white/10 rounded-full p-2">
          <a href="/" className={activeClass("/")}>
            Home
          </a>
          <a href="/aboutus" className={activeClass("/aboutus")}>
            About Us
          </a>
          <a href="/service" className={activeClass("/service")}>
            Service
          </a>
          <a href="/product" className={activeClass("/product")}>
            Product
          </a>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsProductOpen(!isProductOpen)}
              className={`flex items-center gap-x-1 ${activeClass(
                "/industries",
                true
              )}`}
            >
              Industries
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.72-3.48a.75.75 0 011.02 1.1l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.01-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Desktop Dropdown */}
            {isProductOpen && (
              <div className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-xl bg-blue border border-white/10">
                {industries.map((item, index) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={index}
                      href={item.path}
                      className={`block px-4 py-2 text-base rounded-md ${
                        isActive
                          ? "bg-primary text-white" // Active item style
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <a href="/contact" className={activeClass("/contact")}>
            Contact Us
          </a>
        </div>

        {/* Right side login */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/joinus"
            className="inline-block bg-primary text-white 2xl:text-lg xl:text-lg lg:text-md md:text-base font-medium px-6 py-2 rounded-full shadow-md hover:bg-primary/90 transition sm:min-w-[114px] sm:text-base  w-fit"
          >
            Join Us
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-blue p-6  border border-white/10 overflow-y-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={180}
                height={60}
                priority
              />
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="w-6 h-6"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="mt-6">
            <div className="flex flex-col">
              <a href="/" className={activeClass("/")}>
                Home
              </a>
              <a href="/aboutus" className={activeClass("/aboutus")}>
                About Us
              </a>
              <a href="/service" className={activeClass("/service")}>
                Service
              </a>
              <a href="/product" className={activeClass("/product")}>
                Product
              </a>
              <div className="relative">
                {/* Desktop Dropdown */}
                {isProductOpen && (
                  <div className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-xl bg-blue border border-white/10">
                    {industries.map((item, index) => {
                      const isActive = pathname === item.path;
                      return (
                        <Link
                          key={index}
                          href={item.path}
                          className={`block px-4 py-2 text-base rounded-md ${
                            isActive
                              ? "bg-primary text-white" // Active item style
                              : "text-white hover:bg-white/10"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <a href="/contact" className={activeClass("/contact")}>
                Contact Us
              </a>
            </div>
            <button
              type="button"
              onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
              className="flex w-full items-center justify-between rounded-lg py-2 px-4 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              Industries
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.72-3.48a.75.75 0 011.02 1.1l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.01-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isMobileProductOpen && (
              <div className="mt-2 space-y-1">
                {industries.map((item, index) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={index}
                      href={item.path}
                      className={`block px-4 py-2 text-base rounded-md ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
            <a
               href="/joinus"
              className="block mt-4 text-base font-semibold text-gray-900 hover:bg-gray-50 px-4"
            >
              Join Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
