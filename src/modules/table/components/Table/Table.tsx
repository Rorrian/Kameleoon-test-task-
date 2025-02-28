import classNames from 'classnames'

import { Test } from '@shared/types'

import { TestItem } from '../TestItem/TestItem'
import styles from './Table.module.scss'

interface TableProps {
  data: any
}

export const Table = ({ data }: TableProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.row, styles.headerRow)}>
        <span>Name</span>
        <span>Type</span>
        <span>Status</span>
        <span>Site</span>
        <span></span>
      </div>

      <ul className={styles.list}>
        {data.map((testItem: Test) => (
          <li key={testItem.id}>
            <TestItem test={testItem} />
          </li>
        ))}
      </ul>
    </div>
  )
}
