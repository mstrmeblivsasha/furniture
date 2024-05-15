"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { GetDataWithPathname } from "@/fetch/ClientFetch";

import styles from "./CatalogueList.module.scss";

type TypeDataCatalogue = {
  title: string;
  category: string;
  image: string;
};

const CatalogueList = () => {
  const { data, isLoading, error } = GetDataWithPathname();
  // console.log("dataCataloguesSection", data);
  return (
    <ul className={styles.catalogueList}>
      {!isLoading &&
        data?.map(({ title, category, image }: TypeDataCatalogue) => (
          <li key={title} className={styles.catalogueItem}>
            <Link
              href={`/catalogue/${category}`}
              className={styles.catalogueLink}
            >
              <div className={styles.imgBox}>
                <CldImage
                  src={image}
                  alt="фото сайту"
                  fill={true}
                  priority={true}
                  className={styles.img}
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </div>
              <div className={styles.subtitleBox}>
                <h3 className={styles.subtitle}>{title}</h3>

                <svg className={styles.icon}>
                  <use href="./sprite.svg#arrow-right"></use>
                </svg>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default CatalogueList;
