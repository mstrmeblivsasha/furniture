"use client"
import DashboardCatalogueItem from "@/components/DashboardCatalogueItem/DashboardCatalogueItem"
import DashboardCatalogueUpdateForm from "@/components/DashboardCatalogueUpdateForm/DashboardCatalogueUpdateForm"
import Loader from "@/components/Loader/Loader"
import { GetDataWithPathname } from "@/fetch/ClientFetch"
import styles from './DashboardCatalogueCategorySection.module.scss'


const DashboardCatalogueCategorySection = () => {
    const { data, isLoading, mutate } = GetDataWithPathname()

    return (
        <>
            {isLoading
                ? (<Loader />)
                : (<div className={styles.container}>
                    <DashboardCatalogueItem data={data} mutate={mutate} />
                    <DashboardCatalogueUpdateForm data={data} mutate={mutate} />
                </div>)
            }</>
    )
}


export default DashboardCatalogueCategorySection