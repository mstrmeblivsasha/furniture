"use client";

// import { useSiteContext } from "@/context/SiteContext";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  // const { name, setName } = useSiteContext();
  return (
    <section>
      <div className={`container ${styles.container} `}>
        <h1>Hero start</h1>
        {/* {name}
        <button
          onClick={() => {
            name === "Vika" ? setName("Natala") : setName("Vika");
          }}
        >
          setName
        </button> */}
      </div>
    </section>
  );
};

export default HeroSection;
