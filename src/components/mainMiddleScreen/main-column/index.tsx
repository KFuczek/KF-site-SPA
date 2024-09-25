'use client';
import styles from './styles.module.scss';
import StickyNote from '../../../customComponents/sticky-notes';
import StickyNote2 from '../../../customComponents/sticky-notes2';
import StickyNote3 from '../../../customComponents/sticky-notes3';

const MainColumn = () => {
  const note1 = {
    title: 'Tit for tat:',
    text: `Zwycieska strategia dylematu wieznia -
    1. Badz przyjazny, nie oszukuj jako pierwszy
    2. Wet za wet, zawsze reaguj na oszustwo
    3. Wybaczaj, po okazaniu skruchy i zadoscuczynieniu
    4. Badz przejrzysty w dzialaniach
    5. Wybaczaj pierwszy, gdy dojdzie do spirali odwetow`
  };

  const note2 = {
    title: '',
    text: `1. Nie podejmuj decyzji w smutku
        2. Nie odpowiadaj w gniewie
        3. Nie kupuj będąc glodnym
        4. Nie obiecuj w radosci`
  };

  const note3 = {
    title: 'Kiedy ostatni raz zrobiłeś coś pięknego?',
    text: `
    1. Stworzyć coś pieknego
    2. Zrobić coś czego jeszcze nie robiłem
    3. ¯\\_(ⱺ.ⱺ)_/¯     (งT‿T)ง
        (╭☞ᚖ ͜ʖᚖ)╭☞
     (∩■ᨓ■)⊃━☆ﾟ.*  ╭∩╮(  ͯ_  ͯ)╭∩╮`
  };

  return (
    <div className={styles.container}>
      <div className={styles.note1}>
        <StickyNote note={note1} />
      </div>
      <div className={styles.note2}>
        <StickyNote2 note={note2} />
      </div>
      <div className={styles.note3}>
        <StickyNote3 note={note3} />
      </div>
    </div>
  );
};

MainColumn.displayName = 'MainColumn';
export default MainColumn;
