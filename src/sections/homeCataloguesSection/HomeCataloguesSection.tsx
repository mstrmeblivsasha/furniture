import Link from "next/link";
import CatalogueListHome from "@/components/CatalogueList/CatalogueListHome";

import styles from "./HomeCataloguesSection.module.scss";

const HomeCataloguesSection = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container} `}>
        <h2 className="sectionTitle">
          <span>Каталог</span>
        </h2>
        <CatalogueListHome />
        <Link href="/catalogue" className={styles.linkCatalogue}>
          Відкрити каталог
        </Link>
      </div>
    </section>
  );
};

export default HomeCataloguesSection;
