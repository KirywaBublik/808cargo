import {
  Swiper,
  SwiperSlide,
} from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Slides } from "@shared/ui/Landing/AboutUsSlim/ui/slider/ui/Slides.tsx";
import { swiperConst } from "@shared/ui/Landing/AboutUsSlim/ui/slider/model/constants.ts";
import { useTranslation } from "react-i18next";

export const Slider = () => {
  const { t } = useTranslation("aboutUsSlim");
  return (
    <div className="abc">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {swiperConst.map(({ id, text }) => (
          <SwiperSlide key={id}>
            <Slides
              text={t(`${text}`)}
              counter={`0${id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
