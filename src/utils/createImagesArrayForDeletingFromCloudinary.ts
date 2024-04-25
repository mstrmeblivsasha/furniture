export const createImagesArrayForDeletingFromCloudinary = (data: TypeImagesForDeleting) => {
    const arrayForDeleting = [];

    if (data.hasOwnProperty("image")) {
        arrayForDeleting.push(data.image);
    }

    if (data.hasOwnProperty("sliderImages")) {
        data.sliderImages.map(item => arrayForDeleting.push(item))
    }

    return arrayForDeleting;
}