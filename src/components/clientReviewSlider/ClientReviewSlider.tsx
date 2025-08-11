// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, FreeMode } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/free-mode";
// import ClientReviewCardComponent from "../clientReviewCardComponent/ClientReviewCardComponent";


// const ClientReviewSlider = () => {
//   return (
//     <div className="base-template__wrapper px-4">
//       <Swiper
//         modules={[Autoplay, FreeMode]}
//         loop={true}
//         freeMode={true}
//         slidesPerView="auto"
//         spaceBetween={24}
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         speed={5000}
//         className="horizontal-ticker"
//       >
//         {Array.from({ length: 10 }).map((_, i) => (
//           <SwiperSlide
//             key={i}
//             className="horizontal-ticker__slide !w-[320px] md:!w-[15.625vw]"
//           >
//             <ClientReviewCardComponent />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ClientReviewSlider;



"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import ClientReviewCardComponent from "../clientReviewCardComponent/ClientReviewCardComponent";

// import ClientReviewCardComponent from "./ClientReviewCardComponent";

const ClientReviewSlider = () => {
  const reviews = Array.from({ length: 10 });

  return (
    <div className="base-template__wrapper px-4 space-y-8">
      {/* Top Row */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        loop={true}
        freeMode={true}
        slidesPerView="auto"
        spaceBetween={24}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={12000}
        className="horizontal-ticker"
      >
        {reviews.map((_, index) => (
          <SwiperSlide
            key={`top-${index}`}
            className="!w-[420px] "
          >
            <ClientReviewCardComponent />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Row (reverse direction) */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        loop={true}
        freeMode={true}
        slidesPerView="auto"
        spaceBetween={24}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={5000}
        className="horizontal-ticker"
      >
        {reviews.map((_, index) => (
          <SwiperSlide
            key={`bottom-${index}`}
            className="!w-[420px] "
          >
            <ClientReviewCardComponent />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientReviewSlider;

