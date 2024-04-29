'use client'
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
};


const DashboardCatalogueItem = ({ data }: Props) => {
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
                                width={280}
                                height={200}
                                src={item}
                                sizes='20vw'
                                alt={`Фото з секції ${data.category}`}
                            />
                            {!isList && (
                                <svg
                                    className={styles.deleteIcon}
                                    onClick={async () => {
                                        handleDeleteImgFromCloudinary(item);
                                        handleDeleteImageFromMongoDB(data, item);
                                        console.log(`Фото ${item} видалено з Cloudinary та БД`);
                                    }}
                                >
                                    <use href='/sprite.svg#icon-delete' />
                                </svg>
                            )}
                        </div>
                    );
                })}
            </div>

            {isList && <DashboardEditAndDelete data={data} pathname={pathname} />}
        </div>
    );
}


export default DashboardCatalogueItem