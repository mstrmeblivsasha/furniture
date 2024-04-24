'use client'
import DashboardCatalogueCreateForm from "@/components/DashboardCatalogueCreateForm/DashboardCatalogueCreateForm"
import DashboardCatalogueItem from "@/components/DashboardCatalogueItem/DashboardCatalogueItem"
import styles from './DashboardCatalogueSection.module.scss'
import { GetDataWithPathname } from "@/fetch/ClientFetch"


const DashboardCatalogueSection = () => {

    const { data, isLoading } = GetDataWithPathname()
    console.log('data', data)

    let sortedByUpdateData = [];

    if (!isLoading) {
        sortedByUpdateData = [...data];

        sortedByUpdateData.sort((a, b) => {
            return Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
        });
    }


    return (
        <>
            {isLoading ?
                (<p>Loading...</p>)
                : (<div className={styles.container}>
                    <div className={styles.cardsList}>
                        {sortedByUpdateData.map((item, index) => { return (<DashboardCatalogueItem key={index} data={item} />) })}
                    </div>
                    <DashboardCatalogueCreateForm />
                </div>)}</>
    )
}


export default DashboardCatalogueSection