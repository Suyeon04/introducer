import Image from "@/entities/ui/image";
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { nanoid } from "nanoid";

interface Props {
  imageUrlArray: string[];
  companyName: string;
}

export default function SlideImage({ imageUrlArray, companyName }: Props) {
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
      {imageUrlArray.map((imageUrl) => (
        <SwiperSlide key={nanoid()}>
          <Image src={imageUrl} alt={companyName} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
