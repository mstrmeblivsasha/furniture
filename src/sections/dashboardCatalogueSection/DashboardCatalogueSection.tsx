'use client'
import DashboardCatalogueItem from '@/components/DashboardCatalogueItem/DashboardCatalogueItem'
import DashboardCatalogueCreateForm from '@/components/DashboardCatalogueCreateForm/DashboardCatalogueCreateForm'
import { GetDataWithPathname } from "@/fetch/ClientFetch"
import styles from './DashboardCatalogueSection.module.scss'


const DashboardCatalogueSection = () => {

    const { data, isLoading } = GetDataWithPathname()
    console.log('data', data)

    let sortedByUpdateData: TypeCatalogueFromDB[] = [];

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