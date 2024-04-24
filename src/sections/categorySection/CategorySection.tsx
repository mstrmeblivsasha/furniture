"use client";

import { CldImage } from "next-cloudinary";
import { GetDataWithPathname } from "@/fetch/ClientFetch";
import CategorySlider from "@/components/CategorySlider/CategorySlider";

import styles from "./CategorySection.module.scss";

const CategorySection = () => {
    const { data, isLoading, error } = GetDataWithPathname();
    console.log("data", data);
    return (
        <>
            {isLoading ? (
                <h2>Looding ...</h2>
            ) : (
                <section className={styles.section}>
                    <div className={`container ${styles.container} `}>
                        <h1 className={styles.title}>
                            <span>{data.title}</span>
                        </h1>
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
                                    onClick={() => console.log("btnClick")}
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
