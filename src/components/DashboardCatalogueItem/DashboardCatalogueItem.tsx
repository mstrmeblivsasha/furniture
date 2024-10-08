'use client'
import { toast } from 'react-toastify';
import { CldImage } from 'next-cloudinary';
import { usePathname } from 'next/navigation';
import DashboardEditAndDelete from '@/components/DashboardEditAndDelete/DashboardEditAndDelete'
import { handleDeleteImgFromCloudinary } from '@/utils/handleDeleteImgFromCloudinary';
import { handleDeleteImageFromMongoDB } from '@/utils/handleDeleteImageFromMongoDB';
import styles from './DashboardCatalogueItem.module.scss'

type Props = {
    data: {
        category: string
        title: string
        subTitle: string
        description: string
        image: string
        sliderTitle: string
        sliderImages: string[]
        createdAt: string
        updatedAt: string
    }
    mutate: any
};


const DashboardCatalogueItem = ({ data, mutate }: Props) => {
    const pathname = usePathname();
    const isList = pathname.endsWith("catalogue");


    return (
        <div className={styles.container}>
            <p className={styles.category}><span className={styles.bold}>Category:</span> {data.category}</p>
            <p><span className={styles.bold}>Заголовок:</span> {data.title}</p>
            <p><span className={styles.bold}>Підзаголовок:</span> {data.subTitle}</p>
            <p><span className={styles.bold}>Опис:</span> {data.description}</p>
            <p className={styles.bold}>Головна картинка:</p>
            <CldImage
                className={styles.mainImg}
                width={420}
                height={300}
                src={data.image}
                sizes='50vw'
                alt={`Фото ${data.title}`}
            />
            <p><span className={styles.bold}>Заголовок слайдеру:</span> {data.sliderTitle}</p>
            <p className={styles.bold}>Картинки слайдеру:</p>
            <div>
                {data.sliderImages.map((item, index) => {
                    return (
                        <div key={index} className={styles.imgWrapper}>
                            <CldImage
                                className={styles.img}
                                width={280}
                                height={200}
                                src={item}
                                sizes='20vw'
                                alt={`Фото з секції ${data.title}`}
                            />
                            {!isList && (
                                <svg
                                    className={styles.deleteIcon}
                                    onClick={async () => {
                                        handleDeleteImgFromCloudinary(item);
                                        handleDeleteImageFromMongoDB(data, item, mutate);
                                        toast.success("Фото видалено з Cloudinary та БД.");
                                    }}
                                >
                                    <use href='/sprite.svg#icon-delete' />
                                </svg>
                            )}
                        </div>
                    );
                })}
            </div>

            {isList && <DashboardEditAndDelete data={data} pathname={pathname} mutate={mutate} />}
        </div>
    );
}


export default DashboardCatalogueItem