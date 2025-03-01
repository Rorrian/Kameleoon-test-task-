import { SortField, Test } from '@shared/types'
import { useSort } from '@modules/table/hooks/useSort'

import { TestItem } from '../TestItem/TestItem'
import { HeaderButton } from './HeaderButton'
import styles from './TestsTable.module.scss'

interface TableProps {
  tests: Test[]
}

export const TestsTable = ({ tests }: TableProps) => {
  const { sortField, sortOrder, sortedTests, toggleSort } = useSort({
    tests,
    initSortField: SortField.TYPE,
  })

  return (
    <div className={styles.table}>
      <div className={styles.row}>
        {Object.values(SortField).map(field => (
          <HeaderButton
            key={field}
            title={field}
            field={field}
            sortField={sortField}
            sortOrder={sortOrder}
            onSort={toggleSort}
          />
        ))}
        <span></span>
      </div>

      <ul className={styles.list}>
        {sortedTests.map((testItem: Test) => (
          <li key={testItem.id}>
            <TestItem test={testItem} />
          </li>
        ))}
      </ul>
    </div>
  )
}
