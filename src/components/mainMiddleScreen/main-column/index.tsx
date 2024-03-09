'use client';
import styles from './styles.module.scss';
import StickyNote from '../../../customComponents/sticky-notes';
import StickyNote2 from '../../../customComponents/sticky-notes2';
import StickyNote3 from '../../../customComponents/sticky-notes3';
import EndScreen from '@/src/components/mainEndScreen';

const MainColumn = () => {
  const note1 = {
    title: 'Tit for tat:',
    text: `Zwycięska strategia dylematu więźnia -
    1. Bądź przyjazny, nie oszukuj jako pierwszy
    2. Wet za wet, zawsze reaguj na oszustwo
    3. Wybaczaj, po okazaniu skruchy i zadośćuczynieniu
    4. Bądz przejrzysty w działaniach
    5. Wybaczaj pierwszy, gdy dojdzie do spirali odwetów`
  };

  const note2 = {
    title: '',
    text: `1. Nie podejmój decyzji w smutku
        2. Nie odpowiadaj w gniewie
        3. Nie kupuj bedąc głodnym
        4. Nie obiecuj w radości`
  };

  const note3 = {
    title: '',
    text: `¯\\_(ⱺ.ⱺ)_/¯     (งT‿T)ง
        (╭☞ᚖ ͜ʖᚖ)╭☞
     (∩■ᨓ■)⊃━☆ﾟ.*      ╭∩╮(  ͯ_  ͯ)╭∩╮ `
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
