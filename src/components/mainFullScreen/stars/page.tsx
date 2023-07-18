import styles from './page.module.scss';

export default function Stars() {
  return (
    <div className={styles.sky}>
      <div className={styles.star}></div>
      <div className={styles.star}></div>
      <div className={styles.star}></div>
      <div className={styles.star}></div>
      <div className={styles.star}></div>
      <div className={styles.star}></div>
    </div>
  );
}
