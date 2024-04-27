"use client";

// import Link from "next/link";
import { useContext } from "react";
import { CldImage } from "next-cloudinary";
import { SiteContext } from "@/context/SiteContext";
import { GetDataWithPathname } from "@/fetch/ClientFetch";
import CategorySlider from "@/components/CategorySlider/CategorySlider";

import styles from "./CategorySection.module.scss";

const CategorySection = () => {
    const { data, isLoading, error } = GetDataWithPathname();
    // console.log("data", data);
    const { setModalOpen } = useContext(SiteContext);
    return (
        <>
            {isLoading ? (
                <h2>Looding ...</h2>
            ) : (
                <section className={styles.section}>
                    <div className={`container ${styles.container} `}>
                        <div className={styles.titleBox}>
                            {/* <Link href='/catalogue' className={styles.linkBack}>
                                <svg className={styles.icon}>
                                    <use href='./sprite.svg#arrow-left'></use>
                                </svg>
                                Назад
                            </Link> */}
                            <h1 className={styles.title}>
                                <span>{data.title}</span>
                            </h1>
                        </div>
                        <div className={styles.innerWrap}>
                            <div className={styles.imgBox}>
                                <CldImage
                                    src={data.image}
                                    alt='фото сайту'
                                    fill={true}
                                    priority={true}
                                    className={styles.img}
                                />
                            </div>
                            <div className={styles.descriptionBox}>
                                <h2 className={styles.subTitle}>
                                    {data.subTitle}
                                </h2>
                                <div className={styles.description}>
                                    {data.description}
                                </div>
                                <button
                                    type='button'
                                    className={styles.btn}
                                    onClick={() => setModalOpen(true)}
                                >
                                    Замовити
                                </button>
                            </div>
                        </div>
                        <div className={styles.sliderBox}>
                            <h2 className={styles.sliderTitle}>
                                {data.sliderTitle}
                            </h2>
                            <CategorySlider images={data.sliderImages} />
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default CategorySection;
