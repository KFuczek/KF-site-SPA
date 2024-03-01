// @ts-nocheck
'use client';
import styles from './index.module.scss';
import { useState, useRef } from 'react';
import { Titles, TitlesParameters } from '@/app/api/types';

interface TextAreaEvent extends Event {
  target: HTMLInputElement;
}

export type MenuParameters = [string, TitlesParameters[]];

export default function TitleFormatter() {
  const [textareaContent, setTextContent] = useState<string>('');
  const tableRef = useRef<HTMLTableElement>();
  let timeoutId: NodeJS.Timeout | string = '';

  const setTextFunc = ({ target }: TextAreaEvent): void => {
    const text: string = target.value;
    setTextDebounce(text);
  };

  const setTextDebounce = (text: string): void => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setTextContent(text);
    }, 1000);
  };
  const textInput = () => {
    return (
      <div className={styles.customInput}>
        <textarea
          className={styles.input}
          onChange={setTextFunc}
          value={textareaContent}
        />
      </div>
    );
  };

  const setTableDataFunc = () => {
    const allTableRows: HTMLElement[] = tableRef.current?.children;
    if (!allTableRows) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const rows = [...allTableRows].toSpliced(0, 1) as HTMLElement[];
    const tableObj = rows.reduce((acc, row) => {
      const categoryName = row.children[0].textContent;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const cells = [...row.children].toSpliced(0, 1) as HTMLElement[];
      const rowArr = cells.map(cell => {
        return cell.textContent;
      });

      return {
        ...acc,
        [categoryName]: acc[categoryName]
          ? // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            [...acc[categoryName], rowArr]
          : [rowArr]
      };
    }, {});

    const fullTableObject = {
      category: tableObj
    };

    setTextDebounce(JSON.stringify(fullTableObject));
  };

  const createTable = (text: string) => {
    let jsonText: Titles | null = null;
    try {
      jsonText = JSON.parse(text) as Titles;
    } catch (error) {
      console.log('error', error);

      return null;
    }

    const firstRow = (
      <tr key={`first-row`} className={styles.menuRow}>
        <td className={styles.menuCell}>
          <div contentEditable>category</div>
        </td>
        <td className={styles.menuCell}>
          <div contentEditable>name</div>
        </td>
        <td className={styles.menuCell}>
          <div contentEditable>key</div>
        </td>
        <td className={styles.menuCell}>
          <div contentEditable>abstract</div>
        </td>
      </tr>
    );

    const rows = Object.entries(jsonText.category).map(
      ([key, value]: MenuParameters): Element[] => {
        const data: Element[] = value.map((cell, index: number) => {
          return (
            <tr key={`${key}${index}`} className={styles.menuRow}>
              <td className={styles.menuCell}>
                <div contentEditable>{key}</div>
              </td>
              <td className={styles.menuCell}>
                <div contentEditable>{cell[0]}</div>
              </td>
              <td className={styles.menuCell}>
                <div contentEditable>{cell[1]}</div>
              </td>
              <td className={styles.menuCell}>
                <div contentEditable>{cell[2] || ''}</div>
              </td>
            </tr>
          );
        });

        return data;
      }
    );

    return (
      <table
        ref={tableRef}
        className={styles.menuTable}
        onKeyUp={setTableDataFunc}
      >
        {[firstRow, ...rows]}
      </table>
    );
  };

  const addRow = (): void => {
    let obj: Titles | null = null;
    try {
      obj = JSON.parse(textareaContent) as Titles;
    } catch (error) {
      console.log('error', error);

      return;
    }

    const extendedObj = {
      ...obj,
      category: {
        ...obj.category,
        [new Date()]: [[]]
      }
    };
    setTextContent(JSON.stringify(extendedObj));
  };

  return (
    <div className={styles.body}>
      <div className={styles.inputWrapper}>{textInput()}</div>
      <div className={styles.line}>
        <button onClick={addRow}>Add</button>
      </div>
      {createTable(textareaContent)}
    </div>
  );
}
