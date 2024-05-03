import Link from 'next/link';
import { handleDeleteImgFromCloudinary } from '@/utils/handleDeleteImgFromCloudinary';
import { handleDeleteCardFromDB } from '@/utils/handleDeleteCardFromDB';
import { createImagesArrayForDeletingFromCloudinary } from '@/utils/createImagesArrayForDeletingFromCloudinary';
import styles from './DashboardEditAndDelete.module.scss';

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
    pathname: string
    mutate: any
}


const DashboardEditAndDelete = ({ data, pathname, mutate }: Props) => {
    // cut /dashboard/ from pathname
    const slicedPathname = pathname.slice(11);
    const url = `/api/${slicedPathname}/${data.category}`;

    return (
        <div className={styles.btnsWrapper}>
            <Link
                className={styles.editLink}
                href={`${pathname}/${data.category}`}
            >
                <svg className={styles.editIcon}>
                    <use href="/sprite.svg#icon-edit" />
                </svg>
            </Link>

            <svg
                className={styles.deleteIcon}
                onClick={() => {
                    const arrForDeleting = createImagesArrayForDeletingFromCloudinary(data)
                    arrForDeleting.map(item => handleDeleteImgFromCloudinary(item));
                    handleDeleteCardFromDB(url, mutate);
                    console.log(`Картка ${data.title} видалена з БД, а всі ії фото - ${arrForDeleting} - з Cloudinary.`)

                }}
            >
                <use href="/sprite.svg#icon-delete" />
            </svg>
        </div>
    )
}


export default DashboardEditAndDelete;