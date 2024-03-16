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
  const [textAreaContent, setTextContent] = useState<string>('');
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

  const setTableDataFunc = () => {
    const allTableRows: HTMLElement[] = tableRef.current?.children;
    if (!allTableRows) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const rows = [...allTableRows].toSpliced(0, 1) as HTMLElement[];

    const tableObj = rows.reduce((acc, row) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const cells = [...row.children];
      const rowArr = cells.map(cell => {
        return cell.textContent;
      });

      return [...acc, rowArr];
    }, []);

    const fullTableObject = {
      items: tableObj
    };

    setTextDebounce(JSON.stringify(fullTableObject));
  };

  const createTable = (text: string) => {
    if (text === '') {
      return null;
    }
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
          <div contentEditable>name</div>
        </td>
        <td className={styles.menuCell}>
          <div contentEditable>key</div>
        </td>
        <td className={styles.menuCell}>
          <div contentEditable>abstract</div>
        </td>
        <td className={styles.menuCell}>
          <div contentEditable>category</div>
        </td>
      </tr>
    );

    const rows = Object.entries(jsonText.items).map(
      ([key, cell]: MenuParameters, index): Element[] => {
        const [title, extendedTitle, description, category] = cell;
        return (
          <tr key={`${key}${index}`} className={styles.menuRow}>
            <td className={styles.menuCell}>
              <div contentEditable>{title}</div>
            </td>
            <td className={styles.menuCell}>
              <div contentEditable>{extendedTitle}</div>
            </td>
            <td className={styles.menuCell}>
              <div contentEditable>{description || ''}</div>
            </td>
            <td className={styles.menuCell}>
              <div contentEditable>{category}</div>
            </td>
          </tr>
        );
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
      obj = JSON.parse(textAreaContent) as Titles;
    } catch (error) {
      console.log('error', error);

      return;
    }

    const extendedObj = {
      items: [...obj.items, ['', '', '', '']]
    };
    setTextContent(JSON.stringify(extendedObj));
  };

  const getTextInput = () => {
    return (
      <div className={styles.inputWrapper}>
        <div className={styles.customInput}>
          <textarea
            className={styles.input}
            onChange={setTextFunc}
            value={textAreaContent}
          />
        </div>
      </div>
    );
  };

  const getButton = () => {
    return <button onClick={addRow}>Add</button>;
  };

  const getTable = () => {
    return createTable(textAreaContent);
  };

  return (
    <div className={styles.body}>
      {getTextInput()}
      <div className={styles.line}>{getButton()}</div>
      <div className={styles.tableWrapper}>{getTable()}</div>
    </div>
  );
}
