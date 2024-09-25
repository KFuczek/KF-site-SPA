import styles from './styles.module.scss';
import { StickyNotesProps } from './types';
const StickyNotes = ({ note }: StickyNotesProps): JSX.Element => {
  const { text, title } = note;

  return (
    <div className={styles.noteContainer}>
      <div className={styles.topTapes}></div>
      <div className={styles.title}>{title}</div>
      <div className={styles.notes}>{text}</div>
    </div>
  );
};

StickyNotes.displayName = 'StickyNotes';

export default StickyNotes;
