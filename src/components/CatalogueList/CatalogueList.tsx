"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { GetDataWithPathname } from "@/fetch/ClientFetch";

import styles from "./CatalogueList.module.scss";
import Loader from "../Loader/Loader";

type TypeDataCatalogue = {
  title: string;
  category: string;
  image: string;
};

const CatalogueList = () => {
  const { data, isLoading, error } = GetDataWithPathname();
  return (
    <>
      {isLoading ? (
        <Loader className={styles.loaderWrapper} />
      ) : (
        <ul className={styles.catalogueList}>
          {!isLoading &&
            data?.map(({ title, category, image }: TypeDataCatalogue) => (
              <li key={title}>
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
                    <h3>{title}</h3>

                    <svg>
                      <use href="./sprite.svg#arrow-right"></use>
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default CatalogueList;
