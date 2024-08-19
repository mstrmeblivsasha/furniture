import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";
import { CldUploadButton } from 'next-cloudinary'
import { zodResolver } from '@hookform/resolvers/zod'
import { zodCatalogueSchema } from '@/zodShemas/zodCatalogueSchema'
import { handleDeleteImgFromCloudinary } from '@/utils/handleDeleteImgFromCloudinary'
import styles from './DashboardCatalogueCreateForm.module.scss'


const DashboardCatalogueCreateForm = ({ mutate }) => {
    const initialValues = {
        defaultValues: {
            category: "",
            title: "",
            subTitle: "",
            description: "",
            image: "",
            sliderTitle: "",
            sliderImages: [],
        },
        resolver: zodResolver(zodCatalogueSchema),
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset, getValues, setValue } = form;
    const { errors, isSubmitSuccessful, isSubmitting } = formState;

    const onSubmit = async (data) => {
        const trimedCategory = data.category.trim();
        data.category = trimedCategory;


        try {
            await fetch("/api/catalogue", {
                method: "POST",
                body: JSON.stringify(data),
            });
            // автоматично обновлює строрінку при зміні кількості карточок
            mutate();

            toast.success(`Каталог "${data.category}" створений.`);

        } catch (err) {
            console.log(err);
            toast.error(err);
        }
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <div className={styles.container}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                noValidate
            >
                <h3 className={styles.formTitle}>
                    Додавання нового каталогу
                </h3>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='category'
                        placeholder=' '
                        {...register("category")}
                    />
                    <label htmlFor='category' className={styles.formLabel}>
                        Category
                    </label>
                    <p className={styles.error}>{errors.category?.message}</p>
                </div>

                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='title'
                        placeholder=' '
                        {...register("title")}
                    />
                    <label htmlFor='title' className={styles.formLabel}>
                        Заголовок
                    </label>
                    <p className={styles.error}>{errors.title?.message}</p>
                </div>

                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='subTitle'
                        placeholder=' '
                        {...register("subTitle")}
                    />
                    <label htmlFor='subTitle' className={styles.formLabel}>
                        Підзаголовок
                    </label>
                    <p className={styles.error}>{errors.subTitle?.message}</p>
                </div>

                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.textarea} ${styles.formInput}`} id='description'
                        placeholder=' '
                        {...register("description")}
                    />
                    <label htmlFor='description' className={styles.formLabel}>
                        Опис
                    </label>
                    <p className={styles.error}>
                        {errors.description?.message}
                    </p>
                </div>

                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name={'image'}
                        className={styles.uploadBtn}
                        onSuccess={(result, widget) => {
                            if (getValues("image") !== "") {
                                const publicId = getValues("image");
                                // delete image from Cloudinary
                                handleDeleteImgFromCloudinary(publicId);
                                toast.success("Попереднє фото видалено з Cloudinary.");

                                const sliderImgs = getValues("sliderImages");
                                // delete name of image from array of images for slider
                                const filteredImgs = sliderImgs.filter(item => item !== publicId);
                                setValue("sliderImages", filteredImgs, { shouldValidate: true });
                            }

                            setValue("image", result.info.public_id, {
                                shouldValidate: true,
                            });

                            setValue(
                                "sliderImages",
                                [
                                    result.info.public_id,
                                    ...getValues("sliderImages"),
                                ],
                                { shouldValidate: true }
                            );

                            widget.close();
                            toast.success("Нове фото додано до Cloudinary.");
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Додати головне фото (WEBP)
                    </CldUploadButton>

                    <p className={styles.error}>{errors.image?.message}</p>
                </div>

                <div className={styles.inputGroup}>
                    <input
                        className={styles.formInput}
                        id='sliderTitle'
                        placeholder=' '
                        {...register("sliderTitle")}
                    />
                    <label htmlFor='sliderTitle' className={styles.formLabel}>
                        Заголовок слайдера
                    </label>
                    <p className={styles.error}>{errors.sliderTitle?.message}</p>
                </div>

                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name='sliderImages'
                        className={styles.uploadBtn}
                        onSuccess={(result) => {
                            setValue(
                                "sliderImages",
                                [
                                    ...getValues("sliderImages"),
                                    result.info.public_id,
                                ],
                                { shouldValidate: true }
                            );
                            toast.success("Нове фото додано до Cloudinary.");
                        }}
                        uploadPreset='unsigned_preset'
                    >
                        Додати фото для слайдера (WEBP)
                    </CldUploadButton>

                    <p className={styles.error}>
                        {errors.sliderImages?.message}
                    </p>
                </div>

                <button
                    type='submit'
                    className={styles.formButton}
                    disabled={isSubmitting}
                >
                    Додати новий каталог
                </button>
            </form>
        </div>
    );
}


export default DashboardCatalogueCreateForm