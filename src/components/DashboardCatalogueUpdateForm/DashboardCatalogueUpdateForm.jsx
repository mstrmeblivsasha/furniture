import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";
import { CldUploadButton } from 'next-cloudinary'
import { zodResolver } from '@hookform/resolvers/zod'
import { zodCatalogueUpdateSchema } from '@/zodShemas/zodCatalogueUpdateSchema'
import { handleDeleteImgFromCloudinary } from '@/utils/handleDeleteImgFromCloudinary'
import styles from './DashboardCatalogueUpdateForm.module.scss'


const DashboardCatalogueUpdateForm = ({ data, mutate }) => {
    const {
        category,
        title,
        subTitle,
        description,
        image,
        sliderTitle,
        sliderImages,
    } = data;

    const initialValues = {
        defaultValues: {
            newCategory: category,
            newTitle: title,
            newSubTitle: subTitle,
            newDescription: description,
            newImage: image,
            newSliderTitle: sliderTitle,
            newSliderImages: sliderImages,
        },
        resolver: zodResolver(zodCatalogueUpdateSchema),
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, getValues, setValue } =
        form;

    const { errors, isErrors, isSubmitting } = formState;

    const onSubmit = async (data) => {
        const {
            newCategory,
            newTitle,
            newSubTitle,
            newDescription,
            newImage,
            newSliderTitle,
            newSliderImages,
        } = data;

        const updatedData = {
            category: newCategory,
            title: newTitle,
            subTitle: newSubTitle,
            description: newDescription,
            image: newImage,
            sliderTitle: newSliderTitle,
            sliderImages: newSliderImages,
        };

        try {
            await fetch(`/api/catalogue/${category}`, {
                method: "PATCH",
                body: JSON.stringify(updatedData),
            });
            // автоматично обновлює строрінку при зміні кількості карточок
            mutate();

            console.log("Information updated to DB");
            toast.success(`Каталог "${updatedData.category}" оновлений.`);
        } catch (err) {
            console.log(err);
            toast.error(err);
        }
    };


    return (
        <div className={styles.container}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                noValidate
            >
                <h3 className={styles.formTitle}>Оновлення каталогу</h3>

                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newCategory'
                        placeholder=' '
                        {...register("newCategory")}
                    />
                    <label htmlFor='newCategory' className={styles.formLabel}>
                        New Category
                    </label>
                    <p className={styles.error}>{errors.newCategory?.message}</p>
                </div>

                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newTitle'
                        placeholder=' '
                        {...register("newTitle")}
                    />
                    <label htmlFor='newTitle' className={styles.formLabel}>
                        Новий заголовок
                    </label>
                    <p className={styles.error}>{errors.newTitle?.message}</p>
                </div>

                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newSubTitle'
                        placeholder=' '
                        {...register("newSubTitle")}
                    />
                    <label
                        htmlFor='newSubTitle'
                        className={styles.formLabel}
                    >
                        Новий підзаголовок
                    </label>
                    <p className={styles.error}>
                        {errors.newSubTitle?.message}
                    </p>
                </div>

                <div className={styles.inputGroup}>
                    <textarea
                        type='text'
                        className={`${styles.textarea} ${styles.formInput}`}
                        id='newDescription'
                        placeholder=' '
                        {...register("newDescription")}
                    />
                    <label
                        htmlFor='newDescription'
                        className={styles.formLabel}
                    >
                        Новий опис
                    </label>
                    <p className={styles.error}>
                        {errors.newDescription?.message}
                    </p>
                </div>

                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name='newImage'
                        className={styles.uploadBtn}
                        onSuccess={(result, widget) => {
                            if (getValues("newImage") !== "") {
                                const publicId = getValues("newImage");
                                // delete image from Cloudinary
                                handleDeleteImgFromCloudinary(publicId);
                                toast.success("Попереднє фото видалено з Cloudinary.");

                                const sliderImgs = getValues("newSliderImages");
                                // delete name of image from array of images for slider
                                const filteredImgs = sliderImgs.filter(item => item !== publicId);
                                setValue("newSliderImages", filteredImgs, { shouldValidate: true });
                            }

                            setValue("newImage", result.info.public_id, {
                                shouldValidate: true,
                            });

                            setValue(
                                "newSliderImages",
                                [
                                    result.info.public_id,
                                    ...getValues("newSliderImages")
                                ],
                                { shouldValidate: true }
                            );
                            widget.close();
                            toast.success("Нове фото додано до Cloudinary.");
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Змінити головне фото (WEBP)
                    </CldUploadButton>

                    <p className={styles.error}>{errors.newImage?.message}</p>
                </div>

                <div className={styles.inputGroup}>
                    <input
                        className={styles.formInput}
                        id='newSliderTitle'
                        placeholder=' '
                        {...register("newSliderTitle")}
                    />
                    <label htmlFor='newSliderTitle' className={styles.formLabel}>
                        Новий заголовок слайдера
                    </label>
                    <p className={styles.error}>{errors.newSliderTitle?.message}</p>
                </div>

                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name='newSliderImages'
                        className={styles.uploadBtn}
                        onSuccess={(result) => {
                            setValue(
                                "newSliderImages",
                                [
                                    ...getValues("newSliderImages"),
                                    result.info.public_id
                                ],
                                { shouldValidate: true }
                            );
                            toast.success("Нове фото додано до Cloudinary.");
                        }}
                        uploadPreset='unsigned_preset'
                    >
                        Додати фото до слайдера (WEBP)
                    </CldUploadButton>

                    <p className={styles.error}>
                        {errors.newSliderImages?.message}
                    </p>
                </div>

                <button
                    type='submit'
                    className={styles.formButton}
                    disabled={isErrors || isSubmitting}
                >
                    Оновити дані
                </button>
            </form>
        </div>
    );
}

export default DashboardCatalogueUpdateForm