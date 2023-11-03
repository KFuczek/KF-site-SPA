'use client';
import styles from './styles.module.scss';
import Button from '../../../customComponents/buttons/art-deco';

export default function TopBorder() {
  return (
    <div className={styles.container}>
      <div className={`${styles.circles} ${styles.left}`}>
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.circle} />
      </div>
      <div className={styles.buttons}>
        <Button url={'stories'} text={'Opowiadania'} />
        <Button url={'philosophy'} text={'Filozofia'} />
        <Button url={'politics'} text={'Droga'} />
      </div>
      <div className={`${styles.circles} ${styles.right}`}>
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.circle} />
      </div>
    </div>
  );
}
