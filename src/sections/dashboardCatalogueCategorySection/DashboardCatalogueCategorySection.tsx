"use client"
import DashboardCatalogueItem from "@/components/DashboardCatalogueItem/DashboardCatalogueItem"
import DashboardCatalogueUpdateForm from "@/components/DashboardCatalogueUpdateForm/DashboardCatalogueUpdateForm"
import { GetDataWithPathname } from "@/fetch/ClientFetch"
import styles from './DashboardCatalogueCategorySection.module.scss'


const DashboardCatalogueCategorySection = () => {
    const { data, isLoading } = GetDataWithPathname()
    console.log("data", data)

    return (
        <>
            {isLoading
                ? (<p>Loading...</p>)
                : (<div className={styles.container}>
                    <DashboardCatalogueItem data={data} />
                    <DashboardCatalogueUpdateForm data={data} />
                </div>)
            }</>
    )
}


export default DashboardCatalogueCategorySection