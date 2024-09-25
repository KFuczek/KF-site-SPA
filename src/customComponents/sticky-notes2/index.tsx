import styles from './styles.module.scss';
import { StickyNotesProps } from './types';

const StickyNotes = ({ note }: StickyNotesProps): JSX.Element => {
  const { text } = note;

  return (
    <div className={styles.noteContainer}>
      <div className={styles.tapesSection}></div>
      <div className={styles.notes}>{text}</div>
      <div className={styles.tapesSection}></div>
    </div>
  );
};

StickyNotes.displayName = 'StickyNotes';

export default StickyNotes;
