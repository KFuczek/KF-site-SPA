import styles from './styles.module.scss';
import { StickyNotesProps } from './types';

const StickyNotes = ({ note }: StickyNotesProps): JSX.Element => {
  const { title, text } = note;

  return (
    <div className={styles.noteContainer}>
      <div className={styles.pin} />
      <div className={styles.title}>{title}</div>
      <div className={styles.notes}>{text}</div>
    </div>
  );
};

StickyNotes.displayName = 'StickyNotes';

export default StickyNotes;
