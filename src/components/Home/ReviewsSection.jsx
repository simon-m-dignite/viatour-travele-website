import React from "react";
import { styles } from "../../styles/styles";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import reviews from "../../constants/reviews";

export const sliderSettings2 = {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    // disableOnInteraction: false,
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },

    750: {
      slidesPerView: 1,
    },

    1100: {
      slidesPerView: 2,
    },
  },
};

const ReviewsSection = () => {
  return (
    <div
      className={`py-16 ${styles.horizontalPadding} flex flex-col items-center gap-y-12`}
    >
      <div className="w-full flex items-center justify-center">
        <h2 className={`text-2xl font-bold`}>Customer Reviews</h2>
      </div>
      <div className="w-full h-screen">
        <Swiper {...sliderSettings2}>
          {reviews.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <ReviewCard review={review} />;
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsSection;
