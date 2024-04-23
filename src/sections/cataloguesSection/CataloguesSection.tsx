import CatalogueList from "@/components/CatalogueList/CatalogueList";
import styles from "./CataloguesSection.module.scss";

const CataloguesSection = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container} `}>
                <h2 className={styles.title}>
                    <span>Каталог</span>
                </h2>
                <CatalogueList />
            </div>
        </section>
    );
};

export default CataloguesSection;
