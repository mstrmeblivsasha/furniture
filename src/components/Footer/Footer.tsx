import styles from "./Footer.module.scss";
import NavLinks from "../NavLinks/NavLinks";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <address className={styles.contactsWrapp}>
          <a href="tel:+380973988008" className={`${styles.contact} `}>
            <svg>
              <use href="./sprite.svg#icon-phonemini"></use>
            </svg>
            +380-97-398-80-08
          </a>
          <a
            href="mailto:mstrmebliv@gmail.com"
            className={`${styles.contact} `}
          >
            <svg>
              <use href="./sprite.svg#icon-mail"></use>
            </svg>
            mstrmebliv@gmail.com
          </a>
          <p className={`${styles.contact} `}>
            <svg>
              <use href="./sprite.svg#icon-location"></use>
            </svg>
            Новомосковськ, Дніпро
          </p>
        </address>

        <Logo className={styles.logo} />

        <NavLinks className={styles.footerNavLinks} />

        <pre className={styles.madeBy}>
          made by{" "}
          <a href="https://webevery.dev/" target="_blank">
            webevery.dev
          </a>
        </pre>
      </div>
    </footer>
  );
};

export default Footer;
