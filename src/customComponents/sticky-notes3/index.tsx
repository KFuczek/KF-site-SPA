import styles from './styles.module.scss';

interface StickyNotesProps {
  note: {
    title: string;
    text: string;
  };
}

const StickyNotes = ({ note }: StickyNotesProps): JSX.Element => {
  const { text } = note;

  return (
    <div className={styles.noteContainer}>
      <div className={styles.topTapes}></div>
      <div className={styles.notes}>{text}</div>
    </div>
  );
};

StickyNotes.displayName = 'StickyNotes';

export default StickyNotes;
