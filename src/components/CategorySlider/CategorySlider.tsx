import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { CldImage } from "next-cloudinary";
import { TypeSliderProps } from "@/types/sliderTypes";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./CategorySlider.css";

const CategorySlider = ({ images }: TypeSliderProps) => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
                modules={[Pagination]}
                className='CategorySwiper'
            >
                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='slideContentWrapper'>
                            <div className='imgBox'>
                                <CldImage
                                    src={item}
                                    alt='фото сайту'
                                    fill={true}
                                    priority={true}
                                    className='img'
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default CategorySlider;
