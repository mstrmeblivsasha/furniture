"use client";

import Link from "next/link";
import { useState, useContext } from "react";
import { CldImage } from "next-cloudinary";
import { SiteContext } from "@/context/SiteContext";
import { GetDataWithPathname } from "@/fetch/ClientFetch";
import CategorySlider from "@/components/CategorySlider/CategorySlider";
import Slider from "@/components/Slider/Slider";

import styles from "./CategorySection.module.scss";
import OrderBtn from "@/components/buttons/OrderBtn/OrderBtn";

const CategorySection = () => {
  const { data, isLoading, error } = GetDataWithPathname();
  const { setModalOpen } = useContext(SiteContext);
  const [index, setIndex] = useState(-1);

  const srcArray = data?.sliderImages.map((item: string) => ({
    src: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1713612219/${item}.webp`,
  }));

  return (
    <>
      {isLoading ? (
        <h2>Looding ...</h2>
      ) : (
        <section className={styles.section}>
          <div className={`container ${styles.container} `}>
            <Link href="/catalogue" className={styles.linkBack}>
              <svg className={styles.icon}>
                <use href="/sprite.svg#arrow-left"></use>
              </svg>
              Назад
            </Link>
            <h1 className={styles.title}>
              <span>{data.title}</span>
            </h1>

            <div className={styles.innerWrap}>
              <div className={styles.imgBox} onClick={() => setIndex(0)}>
                <CldImage
                  src={data.image}
                  alt="фото сайту"
                  fill={true}
                  priority={true}
                  className={styles.img}
                  sizes="(max-width: 768px) 100vw,  50vw"
                />
              </div>
              <div className={styles.descriptionBox}>
                <h2 className={styles.subTitle}>{data.subTitle}</h2>
                <div className={styles.description}>{data.description}</div>

                <OrderBtn
                  type="button"
                  id={styles.btn}
                  onClick={() => setModalOpen(true)}
                  title="Замовити"
                />
              </div>
            </div>
            <div className={styles.sliderBox}>
              <h2 className={styles.sliderTitle}>{data.sliderTitle}</h2>
              <CategorySlider images={data.sliderImages} />
            </div>
          </div>
          <Slider index={index} setIndex={setIndex} array={srcArray} />
        </section>
      )}
    </>
  );
};

export default CategorySection;
