import { ArrowIcon } from '@shared/icons'
import { SortField, SortOrder } from '@shared/types'

import styles from './TestsTable.module.scss'

interface HeaderButtonProps {
  title: string
  field: SortField
  sortField: SortField | undefined
  sortOrder: SortOrder | undefined
  onSort: (field: SortField) => void
}

export const HeaderButton = ({
  title,
  field,
  sortField,
  sortOrder,
  onSort,
}: HeaderButtonProps) => {
  return (
    <button
      aria-label={`Sort by ${title}`}
      className={styles.headerButton}
      onClick={() => onSort(field)}
    >
      {title}

      {sortField === field && (
        <ArrowIcon
          className={
            sortOrder === SortOrder.ASC ? styles.iconUp : styles.iconDown
          }
          width={3.86}
          height={7}
        />
      )}
    </button>
  )
}
