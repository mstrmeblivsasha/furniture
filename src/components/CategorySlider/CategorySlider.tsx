"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { CldImage } from "next-cloudinary";
import { TypeSliderProps } from "@/types/sliderTypes";
import Slider from "@/components/Slider/Slider";
import { GetDataWithPathname } from "@/fetch/ClientFetch";

import "swiper/css";
import "swiper/css/pagination";
import "./CategorySlider.css";

const CategorySlider = ({ images }: TypeSliderProps) => {
    const { data, isLoading, error } = GetDataWithPathname();
    const [index, setIndex] = useState(-1);

    const srcArray = data?.sliderImages.map((item: string) => ({
        src: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1713612219/${item}.webp`,
    }));
    return (
        <>
            <Slider index={index} setIndex={setIndex} array={srcArray} />
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
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                }}
                modules={[Pagination]}
                className='CategorySwiper'
            >
                {images.map((item, index) => (
                    <SwiperSlide key={item} virtualIndex={index}>
                        <div className='slideContentWrapper'>
                            <div
                                className='imgBox'
                                onClick={() => setIndex(index)}
                            >
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
