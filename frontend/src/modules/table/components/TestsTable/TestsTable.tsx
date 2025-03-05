import { useEffect, useRef } from 'react'

import { SortField, Test } from '@shared/types'
import { useSort } from '@modules/table/hooks/useSort'

import { TestItem } from '../TestItem/TestItem'
import { HeaderButton } from './HeaderButton'
import styles from './TestsTable.module.scss'

interface TableProps {
  tests: Test[]
}

export const TestsTable = ({ tests }: TableProps) => {
  const tableRef = useRef<HTMLUListElement>(null)
  const { sortField, sortOrder, sortedTests, toggleSort } = useSort({
    tests,
    initSortField: SortField.TYPE,
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!tableRef.current) return

      const allRows = tableRef.current.querySelectorAll('li')
      const activeRow = document.activeElement
      if (activeRow) {
        const activeRowIndex = Array.from(allRows).indexOf(
          activeRow as HTMLLIElement,
        )
        switch (e.key) {
          case 'ArrowUp':
            if (activeRowIndex > 0) allRows[activeRowIndex - 1].focus()
            break
          case 'ArrowDown':
            if (activeRowIndex < allRows.length - 1)
              allRows[activeRowIndex + 1].focus()
            break
          default:
            return
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [sortedTests])

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

      <ul className={styles.list} ref={tableRef} role="table">
        {sortedTests.map((testItem: Test) => (
          <li key={testItem.id} tabIndex={0} role="row">
            <TestItem test={testItem} />
          </li>
        ))}
      </ul>
    </div>
  )
}
