import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { CldUploadButton } from 'next-cloudinary'
import { zodResolver } from '@hookform/resolvers/zod'
import { zodCatalogueUpdateSchema } from '@/zodShemas/zodCatalogueUpdateSchema'
// import { TypeCatalogueSchema } from "@/zodShemas/zodCatalogueSchema"
import { handleDeleteImgFromCloudinary } from '@/utils/handleDeleteImgFromCloudinary'
import styles from './DashboardCatalogueUpdateForm.module.scss'


const DashboardCatalogueUpdateForm = ({ data }) => {
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
    const { register, handleSubmit, formState, reset, getValues, setValue } =
        form;

    const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

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
            // mutate();

            console.log("Information updated to DB");
        } catch (err) {
            console.log(err);
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
                        onUpload={(result, widget) => {
                            if (getValues("newImage") !== "") {
                                const publicId = getValues("newImage");
                                handleDeleteImgFromCloudinary(publicId);
                            }
                            setValue("newImage", result.info.public_id, {
                                shouldValidate: true,
                            });
                            widget.close();
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
                        onUpload={(result) => {
                            setValue(
                                "newSliderImages",
                                [
                                    ...getValues("newSliderImages"),
                                    result.info.public_id,
                                ],
                                { shouldValidate: true }
                            );
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