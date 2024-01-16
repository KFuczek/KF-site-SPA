import styles from './styles.module.scss';
import { TitlesPair } from '@/src/customComponents/biopunkTable/type';
import { useRouter } from 'next/navigation';

type PushFunc = (url: string) => void;
const onRowClick = (name: string, pushFunc: PushFunc) => {
  const url = `/stories/${name}`;
  pushFunc(url);
};

const buildTable = (data: TitlesPair[], pushFunc: PushFunc) => {
  const rows = data.map((row, index) => {
    return (
      <tr
        key={row[1]}
        className={`${styles.row}`}
        onClick={() => onRowClick(row[1], pushFunc)}
      >
        <th className={`${styles.cell} ${styles.first} ${styles.firstRow}`}>
          {index + 1}
        </th>
        <th className={`${styles.cell} ${styles.second}`}>{row[0]}</th>
        <th className={styles.cell}>{row[2]}</th>
      </tr>
    );
  });

  return (
    <table className={styles.table}>
      <tr key={'names'} className={`${styles.row} ${styles.firstRow}`}>
        <th className={`${styles.cell} ${styles.first} ${styles.firstRow}`}>
          #
        </th>
        <th className={`${styles.cell} ${styles.second}`}>name</th>
        <th className={`${styles.cell} `}>abstract</th>
      </tr>
      {rows}
    </table>
  );
};

export default function BioPunkTable({
  data
}: {
  data: TitlesPair[];
}): JSX.Element {
  const { push } = useRouter();
  console.log('data', data);

  return <div className={styles.tableWrapper}>{buildTable(data, push)}</div>;
}
