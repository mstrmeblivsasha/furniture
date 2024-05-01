import styles from "./BenefitsSection.module.scss";
import { benefits } from "../../data/benefits";

type elProps = {
  id: number;
  title: string;
  text: string;
};

const BenefitsSection = () => {
  console.log(benefits);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className="sectionTitle">
          <span>Чому варто обрати мої послуги?</span>
        </h2>
        <ul>
          {benefits.map((el: elProps) => {
            return (
              <li key={el.id}>
                <h3>{el.title}</h3>
              </li>
            );
          })}
        </ul>
        {/* <div className={styles.aboutWrapp}>
          <div className={styles.imgWrapp}>
            <Image src="/images/Oleksandr.webp" fill alt="Олександр" />
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
        </div> */}
      </div>
    </section>
  );
};

export default BenefitsSection;
