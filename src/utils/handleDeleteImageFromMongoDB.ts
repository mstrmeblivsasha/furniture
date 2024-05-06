// удаляет одно фото из массива фоток
// data - вся информация по item-у
// data.category - динамический параметр страницы
// item - значение выбранной фотки (publicId)


// (для удаления фото из массива мобильных фотографий проекта)
export const handleDeleteImageFromMongoDB = async (data: TypeCatalogueFromDB, item: string, mutate: any) => {
    const newArr = data.sliderImages.filter((el) => el !== item);
    try {
        await fetch(`/api/catalogue/${data.category}`, {
            method: "PATCH",
            body: JSON.stringify({
                sliderImages: newArr,
            }),
        });
        // автоматично обновлює строрінку при зміні кількості карточок
        mutate();

    } catch (error) {
        console.log(error);
    }
};