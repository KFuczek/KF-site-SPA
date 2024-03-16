import styles from './styles.module.scss';
import { outrun, openSans } from '@/src/fonts';

export default function Sun() {
  return (
    <a className={styles.textContainer} href="#middle">
      <div className={styles.textWrapper}>
        <div className={styles.triangle} />
        <div className={`${styles.text} ${openSans.className}`}>
          <span className={`${styles.line1} ${openSans.className}`}>
            <span className={styles.letter}>s</span>
            <span className={styles.letter}>c</span>
            <span className={styles.letter}>r</span>
            <span className={styles.letter}>o</span>
            <span className={styles.letter}>l</span>
            <span className={styles.letter}>l</span>
          </span>
          <span className={styles.line2}>
            <span className={styles.letter}>t</span>
            <span className={styles.letter}>h</span>
            <span className={styles.letter}>r</span>
            <span className={styles.letter}>o</span>
            <span className={styles.letter}>u</span>
            <span className={styles.letter}>g</span>
            <span className={styles.letter}>h</span>
          </span>
          <span className={`${styles.line3} ${outrun.className}`}>
            <span className={styles.letter}>f</span>
            <span className={styles.letter}>o</span>
            <span className={styles.letter}>r</span>
            <span className={styles.letter}> </span>
            <span className={styles.letter}>m</span>
            <span className={styles.letter}>o</span>
            <span className={styles.letter}>r</span>
            <span className={styles.letter}>e</span>
          </span>
        </div>
      </div>
    </a>
  );
}
