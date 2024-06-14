import styles from "./Loader.module.scss";

// const Loader = (className?: string) => {
//   return (
//     <div className={`${className} ${styles.wrapper}`}>
//       <div className={styles.loader}></div>
//     </div>
//   );
// };
const Loader: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <div className={styles.loader}></div>
    </div>
  );
};
export default Loader;
