'use client';
import styles from './styles.module.scss';
import { TitlesPair } from '@/src/types/backendTextTypes';
import BioPunkTable from '@/src/customComponents/biopunkTable';

export default function BookList({
  data,
  type
}: {
  data: TitlesPair[];
  type: string;
}) {
  return (
    <div className={styles.page}>
      <BioPunkTable data={data} type={type} />
    </div>
  );
}
