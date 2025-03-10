import { useMemo, useState } from 'react'

import { Test, SortField, SortOrder, StatusOrder, Status } from '@shared/types'

const getValueForComparison = (
  field: SortField,
  test: Test,
): string | Status => {
  switch (field) {
    case SortField.NAME:
      return test.name
    case SortField.TYPE:
      return test.type
    case SortField.STATUS:
      return test.status
    case SortField.SITE:
      return test.siteUrl ?? ''
    default:
      throw new Error(`Unknown sort field: ${field}`)
  }
}

interface useSortProps {
  tests: Test[]
  initSortField?: SortField
  initSortOrder?: SortOrder
}

export const useSort = ({
  tests,
  initSortField,
  initSortOrder,
}: useSortProps) => {
  const [sortField, setSortField] = useState<SortField | undefined>(
    initSortField,
  )
  const [sortOrder, setSortOrder] = useState<SortOrder | undefined>(
    initSortOrder,
  )

  const toggleSort = (field: SortField) => {
    setSortField(field)
    setSortOrder(prev =>
      prev === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC,
    )
  }

  const sortedTests = useMemo(() => {
    if (!sortField) return [...tests]

    return [...tests].sort((a, b) => {
      const valueA = getValueForComparison(sortField, a)
      const valueB = getValueForComparison(sortField, b)

      if (sortField === SortField.STATUS) {
        const orderMarker = sortOrder === SortOrder.ASC ? 1 : -1
        return (
          (StatusOrder[valueA as Status] - StatusOrder[valueB as Status]) *
          orderMarker
        )
      }

      return sortOrder === SortOrder.ASC
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA)
    })
  }, [tests, sortField, sortOrder])

  return {
    sortField,
    sortOrder,
    sortedTests,
    toggleSort,
  }
}
