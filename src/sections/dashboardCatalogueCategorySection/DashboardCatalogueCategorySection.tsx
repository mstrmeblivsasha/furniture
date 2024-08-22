"use client"
import DashboardCatalogueItem from "@/components/DashboardCatalogueItem/DashboardCatalogueItem"
import DashboardCatalogueUpdateForm from "@/components/DashboardCatalogueUpdateForm/DashboardCatalogueUpdateForm"
import Loader from "@/components/Loader/Loader"
import { GetDataByCollection, GetDataWithPathname } from "@/fetch/ClientFetch"
import styles from './DashboardCatalogueCategorySection.module.scss'


const DashboardCatalogueCategorySection = () => {
    const { data, isLoading, mutate } = GetDataWithPathname();

    const { data: collectionsArr } = GetDataByCollection("catalogue");
    let filteredCategoriesArr = [];
    if (collectionsArr) {
        const categotiesArr = collectionsArr?.map((item: TypeCatalogueFromDB) => item.category);
        filteredCategoriesArr = categotiesArr?.filter((category: string) => category !== data?.category);
    }


    return (
        <>
            {isLoading
                ? (<Loader />)
                : (<section className={styles.container}>
                    <DashboardCatalogueItem data={data} mutate={mutate} />
                    <DashboardCatalogueUpdateForm data={data} mutate={mutate} filteredCategoriesArr={filteredCategoriesArr} />
                </section>)
            }
        </>
    )
}


export default DashboardCatalogueCategorySection