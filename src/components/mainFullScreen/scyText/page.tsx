import styles from './page.module.scss';

export default function Sun() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.triangle} />
      <div className={styles.text}>
        <span className={styles.line1}>
          <span className={styles.letter}>n</span>
          <span className={styles.letter}>e</span>
          <span className={styles.letter}>w</span>
        </span>
        <span className={styles.line2}>
          <span className={styles.letter}>R</span>
          <span className={styles.letter}>e</span>
          <span className={styles.letter}>t</span>
          <span className={styles.letter}>r</span>
          <span className={styles.letter}>o</span>
        </span>
        <span className={styles.line3}>
          <span className={styles.letter}>w</span>
          <span className={styles.letter}>a</span>
          <span className={styles.letter}>v</span>
          <span className={styles.letter}>e</span>
        </span>
      </div>
    </div>
  );
}
