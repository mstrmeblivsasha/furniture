'use client'
import DashboardCatalogueItem from '@/components/DashboardCatalogueItem/DashboardCatalogueItem'
import DashboardCatalogueCreateForm from '@/components/DashboardCatalogueCreateForm/DashboardCatalogueCreateForm'
import Loader from '@/components/Loader/Loader'
import { GetDataWithPathname } from "@/fetch/ClientFetch"
import styles from './DashboardCatalogueSection.module.scss'


const DashboardCatalogueSection = () => {

    const { data, isLoading, mutate } = GetDataWithPathname()

    let sortedByUpdateData: TypeCatalogueFromDB[] = [];

    if (!isLoading) {
        sortedByUpdateData = [...data];

        sortedByUpdateData.sort((a, b) => {
            return Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
        });
    }

    const categoriesArr = data?.map((item: TypeCatalogueFromDB) => item.category);


    return (
        <>
            {isLoading
                ? (<Loader />)
                : (<section className={styles.container}>
                    <div className={styles.cardsList}>
                        {sortedByUpdateData.map((item, index) => { return (<DashboardCatalogueItem key={index} data={item} mutate={mutate} />) })}
                    </div>
                    <DashboardCatalogueCreateForm mutate={mutate} categoriesArr={categoriesArr} />
                </section>)
            }
        </>
    )
}


export default DashboardCatalogueSection