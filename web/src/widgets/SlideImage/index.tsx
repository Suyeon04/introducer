import Image from "@/entities/ui/image";
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

interface Props {
  imageUrlArray: string[];
}

export default function SlideImage({ imageUrlArray }: Props) {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      breakpoints={{
        976: {
          slidesPerView: 2,
        },
      }}
    >
      {imageUrlArray.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <Image src={imageUrl} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
