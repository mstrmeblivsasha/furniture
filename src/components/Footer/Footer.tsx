import styles from "./Footer.module.scss";
import NavLinks from "../NavLinks/NavLinks";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <address>
          <a href="tel:+380973988008" className={`${styles.tell} hoverLink`}>
            <svg>
              <use href="./sprite.svg#icon-phonemini"></use>
            </svg>
            +380-97-398-80-08
          </a>
          {/* <a href="tel:+380973988008" className={`${styles.tell} hoverLink`}>
            +380-97-398-80-08
          </a> */}
        </address>
        {/* <NavLinks /> */}

        <pre>
          made by <a href="https://webevery.dev/">webevery.dev</a>
        </pre>
      </div>
    </footer>
  );
};

export default Footer;
