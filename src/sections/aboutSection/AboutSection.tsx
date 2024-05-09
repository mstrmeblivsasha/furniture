import Image from "next/image";
import styles from "./AboutSection.module.scss";

const AboutSection = () => {
  return (
    <section className={styles.section} id="about">
      <div className={`container ${styles.container}`}>
        <h2 className="sectionTitle">
          <span>Про мене</span>
        </h2>
        <div className={styles.aboutWrapp}>
          <div className={styles.imgWrapp}>
            <Image
              src="/images/Oleksandr.webp"
              fill
              alt="Олександр"
              sizes="(max-width: 767px) 100vw, (min-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className={styles.aboutDescr}>
            <p>
              Мене звати Олександр і я - Ваш персональний майстер з виготовлення
              меблів з п&#39;ятирічним досвідом у цій сфері.
            </p>
            <p>
              Я завжди прагну втілити Ваші ідеї у реальність. Незалежно від
              того, чи Ви шукаєте класичні, сучасні або ексклюзивні меблі, я
              готовий працювати з Вами крок за кроком.
            </p>
            <p>
              Моя мета - зробити ваш будинок більш комфортним та стильним,
              створивши меблі, які відображатимуть вашу унікальну особистість.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
